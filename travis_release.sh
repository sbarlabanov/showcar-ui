#!/bin/bash

set -ev

TARGET_BRANCH=release

echo "$COMMIT_AUTHOR_EMAIL"

mkdir temp-git
cd temp-git
git clone "https://${GH_TOKEN}@github.com/AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

cp -r ../dist .
cp -r ../src .
cp ../package.json .
cp ../History.md .

git add . -A
git commit -am "Release"
git push


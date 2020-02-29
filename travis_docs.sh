#!/bin/bash

set -ev

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key

DOCS_BRANCH=gh-pages
mkdir temp-gh-pages
cd  temp-gh-pages

USER_NAME="$(git log -1 --pretty=format:'%an')"
USER_EMAIL="$(git log -1 --pretty=format:'%ae')"
COMMIT_MESSAGE="$(git log -1 --pretty=%B --oneline)"

git clone -b $DOCS_BRANCH --single-branch --branch "yellow" "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"
git config push.default simple

#remove all files except all inside .git "shopt -s extglob" extends bash
shopt -s extglob
rm -rf ./!(.git*|.|..)

cp -r ../docs/* .
mkdir -p docs/assets/
mv assets/ docs/
cp -r ../dist .

git add . -A

#checking for files to commit, if exists then commit. If not go further.
if [ -n "$(git status --porcelain)" ]; then
	git commit -am "$COMMIT_MESSAGE"
	git push origin $DOCS_BRANCH
fi

cd ..

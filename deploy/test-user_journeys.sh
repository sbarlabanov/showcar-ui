#!/bin/bash

set -ev

bundle install 
bundle exec rake test:pull test:screenshot test:user_journeys


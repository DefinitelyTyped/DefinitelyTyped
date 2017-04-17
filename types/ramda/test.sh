#!/bin/bash
for test in $(find tests -name '*.ts'); do
  node ./node_modules/typings-checker/dist/index.js $test --verbose --noLines 2>&1 | perl -pe 's/\.ts:(\d+)/.ts/' | tee $test.out
  rc=${PIPESTATUS[0]}; if [[ $rc != 0 ]]; then exit $rc; fi
done

# This shows changes and sets the exit code.
set -o errexit
git status
git --no-pager diff -- tests

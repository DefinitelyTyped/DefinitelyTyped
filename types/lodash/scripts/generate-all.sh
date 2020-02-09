#!/usr/bin/env bash
# If some one want to update lodash modules, you must run this script under the same dir where it lives.
# Or you can run them(generate-modules.ts) separately by hand
# This script may be deprecated. See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/41857#issuecomment-580417935

npm i ts-node -g

ts-node ./generate-modules.ts
ts-node ./generate-fp.ts

cd ../../../

npm i prettier -D

cd types/lodash-es/scripts

ts-node ./generate-modules.ts

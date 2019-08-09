#!/bin/bash

rm -fr ../test

git clone --depth=1 git@github.com:pirix-gh/ts-toolbelt.git repo

cp -r repo/tst ../test && rm -fr repo

cd ../test

rm _all.ts && sed -i "s|'../src/index'|'ts-toolbelt'|g" *.ts

npx tslint --fix --config ../tslint.json ../test/*.ts

cd ..

git add test

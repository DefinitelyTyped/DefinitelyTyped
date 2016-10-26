/// <reference path="./index.d.ts" />
/// <reference path="../node/index.d.ts" />


/**
  [?] has correct naming convention

  checked compilation succeeds  
   [+] tsc --noImplicitAny --target es5 ./index.d.ts
   [x] tsc --noImplicitAny --target es6 ./index.d.ts

  [x] has a test file with the suffix of -tests.ts

  checked the test file
   [x] tsc --noImplicitAny --target es5 --module commonjs ./sample-tests.ts 
   [x] tsc --noImplicitAny --target es6 --module commonjs ./sample-tests.ts 

*/

import * as Sample from "sample";
import * as fs from "fs";
import * as stream from "stream";

function test_it() {

}


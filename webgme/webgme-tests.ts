/// <reference path="webgme-core-tests.ts" />
/// <reference path="webgme-client-tests.ts" />
/// <reference path="webgme-plugin-blob-tests.ts" />
/// <reference path="webgme-practical-tests.ts" />

/**

   [-] has correct naming convention
      I am not sure what the correct naming convention is.
      Is it webgme.d.ts or index.d.ts?

  checked compilation succeeds  
   [-] tsc --noImplicitAny --target es5 ./index.d.ts
   [x] tsc --noImplicitAny --target es6 ./index.d.ts

   [-] has a test file with the suffix of -tests.ts
      It has a set of such test files, is that ok?

  checked the test files
   [x] tsc --noImplicitAny --target es5 --module commonjs ./webgme-tests.ts 
   [x] tsc --noImplicitAny --target es6 --module commonjs ./webgme-tests.ts 

*/


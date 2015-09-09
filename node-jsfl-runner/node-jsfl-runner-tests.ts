/// <reference path="node-jsfl-runner.d.ts" />

import * as jsfl from 'node-jsfl-runner';

let myJSFL: jsfl.JSFL = {
  init: (param: string): void => {

  }
}

jsfl.createJSFL(myJSFL, 'fileName.jsfl', ['Hello!'], (err: NodeJS.ErrnoException) => {

});

jsfl.runJSFL('fileName.jsfl', (err: NodeJS.ErrnoException) => {

});

jsfl.deleteJSFL('fileName.jsfl', (err: NodeJS.ErrnoException) => {

});
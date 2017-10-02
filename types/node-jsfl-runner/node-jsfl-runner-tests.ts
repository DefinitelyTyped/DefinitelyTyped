import * as jsfl from 'node-jsfl-runner';

let myJSFL: jsfl.JSFL = {
  init: (param: string): void => {

  }
}

let flashLocation: string = '';

jsfl.createJSFL(myJSFL, 'fileName.jsfl', ['Hello!'], (err: NodeJS.ErrnoException) => {

});

jsfl.runJSFL(flashLocation, 'fileName.jsfl', (err: NodeJS.ErrnoException) => {

});

jsfl.deleteJSFL('fileName.jsfl', (err: NodeJS.ErrnoException) => {

});
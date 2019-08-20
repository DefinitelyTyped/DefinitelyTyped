import * as dialogPolyfill from 'dialog-polyfill';

const element = document.createElement('dialog');

// $ExpectType void
dialogPolyfill.registerDialog(element);

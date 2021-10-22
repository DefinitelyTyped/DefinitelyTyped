import { isBrowser, isWebWorker, isNode, isJsDom } from 'browser-or-node';

if (isBrowser) {
  console.log('isBrowser');
}

if (isWebWorker) {
  console.log('isBrowser');
}

if (isNode) {
  console.log('isBrowser');
}

if (isJsDom()) {
    console.log('isJsDom');
}

import { isBrowser, isWebWorker, isNode } from 'browser-or-node';

if (isBrowser) {
  console.log('isBrowser');
}

if (isWebWorker) {
  console.log('isBrowser');
}

if (isNode) {
  console.log('isBrowser');
}

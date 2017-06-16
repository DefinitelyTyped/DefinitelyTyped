/// <reference types="node" />

import * as ofe from 'ofe';

let ret = ofe.call();
if (ret === 'done') {
	console.log('The ofe module was successfully called to create a heapdump if the process runs out of memory.');
}

/// <reference path="./base-x.d.ts" />

import * as basex from 'base-x';

let bs16: BaseX.BaseConverter = basex('0123456789ABCDEF');

{
	let encoded: string;

	encoded = bs16.encode([255]);
	encoded = bs16.encode({0: 255, length: 1});
}

let decoded: number[] = bs16.decode('FF');

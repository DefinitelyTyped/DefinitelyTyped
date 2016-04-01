/// <reference path="iniparser.d.ts" />

import * as iniparser from 'iniparser';

type Result = {section: {param: string}};

let file: string;

{
	let callback: (err: any, data: Result) => void;
	let result: void;

	iniparser.parse(file, callback);
}

{
	let result: Result;

	result = iniparser.parseSync<Result>(file);
	result = iniparser.parseString<Result>('');
}

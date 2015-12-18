/// <reference path="./prettyjson.d.ts" />

var options: prettyjson.IOptions,
	input: string,
	output: string;


input = 'This is a string';
output = prettyjson.render(input);

output = prettyjson.render(input, {}, 4);

output = prettyjson.render(['first string', ['nested 1', 'nested 2'], 'second string']);

output = prettyjson.render({param1: 'first string', param2: 'second string'});

output = prettyjson.render({first_param: {subparam: 'first string', subparam2: 'another string'}, second_param: 'second string'});


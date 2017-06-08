import twig = require('twig');

const value: any = "";
const str: string = "";
const num: number = 0;
const bool: boolean = false;

const params: twig.Parameters = {
	id: value,
	path: value,
	base: value,
	blocks: value,
	macros: value,
	method: value,
	name: value,
	options: value,
	url: value
};

const temp: twig.Template = twig.twig(params);

const compOpts: twig.CompileOptions = {
	filename: str,
	settings: value
};

twig.extendFilter(str, (left: any, ...params: any[]) => {
	return str;
});

twig.extendFunction(str, (...params: any[]) => {
	return str;
});

twig.extendTest(str, (value: any) => bool);
twig.extendTag(value);

const compiled = twig.compile(str, compOpts);

twig.renderFile(str, compOpts, (err, result) => {
});

twig.__express(str, compOpts, (err, result) => {
});
twig.cache(bool);

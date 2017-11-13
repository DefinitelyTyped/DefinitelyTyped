import yaml = require('js-yaml');
import LoadOptions = yaml.LoadOptions;
import DumpOptions = yaml.DumpOptions;
import TypeConstructorOptions = yaml.TypeConstructorOptions;
import SchemaDefinition = yaml.SchemaDefinition;

let bool: boolean;
let num: number;
let str: string;
let obj: Object;
let value: any;
let array: any[];
let fn: Function;
let schemaDefinition: SchemaDefinition = {
	implicit: array,
	explicit: array,
	include: array
};
let typeConstructorOptions: TypeConstructorOptions = {
	kind: str,
	resolve: fn,
	construct: fn,
	instanceOf: obj,
	predicate: str,
	represent: fn,
	defaultStyle: str,
	styleAliases: obj
};

let loadOpts: LoadOptions;
let dumpOpts: DumpOptions;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

yaml.FAILSAFE_SCHEMA;
yaml.JSON_SCHEMA;
yaml.CORE_SCHEMA;
yaml.DEFAULT_SAFE_SCHEMA;
yaml.DEFAULT_FULL_SCHEMA;
yaml.MINIMAL_SCHEMA;
yaml.SAFE_SCHEMA;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

loadOpts = {
	filename: str
};
loadOpts = {
	strict: bool
};
loadOpts = {
	schema: bool
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

dumpOpts = {
	indent: num
};
dumpOpts = {
	skipInvalid: bool
};
dumpOpts = {
	flowLevel: num
};
dumpOpts = {
	styles: obj
};
dumpOpts = {
	schema: value
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

value = yaml.safeLoad(str);
value = yaml.safeLoad(str, loadOpts);

value = yaml.load(str);
value = yaml.load(str, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

value = yaml.safeLoadAll(str, (doc) => {
	value = doc;
});
value = yaml.safeLoadAll(str, (doc) => {
	value = doc;
}, loadOpts);

value = yaml.loadAll(str, (doc) => {
	value = doc;
});
value = yaml.loadAll(str, (doc) => {
	value = doc;
}, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

value = yaml.safeDump(str);
value = yaml.safeDump(str, dumpOpts);

value = yaml.dump(str);
value = yaml.dump(str, dumpOpts);

value = new yaml.YAMLException();
value = new yaml.Type(str, typeConstructorOptions);
value = new yaml.Schema(schemaDefinition);
value = yaml.Schema.create([new yaml.Type(str)]);
value = yaml.Schema.create(new yaml.Type(str));
value = yaml.Schema.create(new yaml.Schema(schemaDefinition), [new yaml.Type(str)]);
value = yaml.Schema.create([new yaml.Schema(schemaDefinition)], [new yaml.Type(str)]);
value = yaml.Schema.create(new yaml.Schema(schemaDefinition), new yaml.Type(str));
value = yaml.Schema.create([new yaml.Schema(schemaDefinition)], new yaml.Type(str));

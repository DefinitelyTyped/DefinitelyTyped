import yaml = require('js-yaml');
import LoadOptions = yaml.LoadOptions;
import DumpOptions = yaml.DumpOptions;
import TypeConstructorOptions = yaml.TypeConstructorOptions;
import SchemaDefinition = yaml.SchemaDefinition;

const bool = true;
const num = 0;
const str = '';
const obj: object = {};
const map: { [x: string]: any } = {};
const array: any[] = [];
const fn: (...args: any[]) => any = () => {};
const type = new yaml.Type(str);

const schemaDefinition: SchemaDefinition = {
    implicit: array,
    explicit: array,
    include: array,
};
const typeConstructorOptions: TypeConstructorOptions = {
    kind: 'scalar',
    resolve: fn,
    construct: fn,
    instanceOf: obj,
    predicate: obj => false,
    represent: fn,
    defaultStyle: str,
    styleAliases: map,
};

const schema: yaml.Schema = new yaml.Schema(schemaDefinition);

let value: any;
let loadOpts: LoadOptions;
let dumpOpts: DumpOptions;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType Schema
yaml.FAILSAFE_SCHEMA;
// $ExpectType Schema
yaml.JSON_SCHEMA;
// $ExpectType Schema
yaml.CORE_SCHEMA;
// $ExpectType Schema
yaml.DEFAULT_SAFE_SCHEMA;
// $ExpectType Schema
yaml.DEFAULT_FULL_SCHEMA;
// $ExpectType Schema
yaml.MINIMAL_SCHEMA;
// $ExpectType Schema
yaml.SAFE_SCHEMA;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

loadOpts = {
    filename: str,
};
loadOpts = {
    onWarning(e) {
        e.stack;
    },
};
loadOpts = {
    json: bool,
};
loadOpts = {
    schema: yaml.DEFAULT_SAFE_SCHEMA,
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

dumpOpts = {
    indent: num,
};
dumpOpts = {
    noArrayIndent: bool,
};
dumpOpts = {
    skipInvalid: bool,
};
dumpOpts = {
    flowLevel: num,
};
dumpOpts = {
    styles: obj,
};
dumpOpts = {
    schema: value,
};
dumpOpts = {
    schema: yaml.DEFAULT_FULL_SCHEMA,
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType Type
new yaml.Type(str, typeConstructorOptions);

// $ExpectType "sequence" | "scalar" | "mapping" | null
type.kind;
// $ExpectType (data: any) => boolean
type.resolve;
// $ExpectType (data: any) => any
type.construct;
// $ExpectType object | null
type.instanceOf;
// $ExpectType ((data: object) => boolean) | null
type.predicate;
// $ExpectType ((data: object) => any) | { [x: string]: (data: object) => any; } | null
type.represent;
// $ExpectType string | null
type.defaultStyle;
// $ExpectType { [x: string]: any; }
type.styleAliases;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType Record<string | number, unknown>
yaml.safeLoad(str);
// $ExpectType Record<string | number, unknown>
yaml.safeLoad(str, loadOpts);

// $ExpectType Record<string | number, unknown>
yaml.load(str);
// $ExpectType Record<string | number, unknown>
yaml.load(str, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType Record<string | number, unknown>[]
yaml.safeLoadAll(str);

// $ExpectType void
yaml.safeLoadAll(str, doc => {
    value = doc;
});
// $ExpectType void
yaml.safeLoadAll(
    str,
    doc => {
        value = doc;
    },
    loadOpts,
);
// $ExpectType Record<string | number, unknown>[]
value = yaml.safeLoadAll(str, undefined, loadOpts);

// $ExpectType Record<string | number, unknown>[]
value = yaml.loadAll(str);

// $ExpectType void
yaml.loadAll(str, doc => {
    value = doc;
});
// $ExpectType void
yaml.loadAll(
    str,
    doc => {
        value = doc;
    },
    loadOpts,
);
// $ExpectType Record<string | number, unknown>[]
value = yaml.loadAll(str, undefined, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType string
yaml.safeDump(str);
// $ExpectType string
yaml.safeDump(str, dumpOpts);

// $ExpectType string
yaml.dump(str);
// $ExpectType string
yaml.dump(str, dumpOpts);

new yaml.YAMLException();

// $ExpectType Schema
yaml.Schema.create([type]);
// $ExpectType Schema
yaml.Schema.create(type);
// $ExpectType Schema
yaml.Schema.create(schema, [type]);
// $ExpectType Schema
yaml.Schema.create([schema], [type]);
// $ExpectType Schema
yaml.Schema.create(schema, type);
// $ExpectType Schema
yaml.Schema.create([schema], type);

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
};
const typeConstructorOptions: TypeConstructorOptions = {
    kind: 'scalar',
    resolve: fn,
    construct: fn,
    instanceOf: obj,
    predicate: obj => false,
    represent: fn,
    representName: obj => 'name',
    defaultStyle: str,
    multi: false,
    styleAliases: map,
};

const schema: yaml.Schema = new yaml.Schema(schemaDefinition);
const schema1: yaml.Schema = new yaml.Schema(type);
const schema2: yaml.Schema = new yaml.Schema([type]);

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
yaml.DEFAULT_SCHEMA;
// $ExpectType Schema
yaml.DEFAULT_SCHEMA.extend(type);
// $ExpectType Schema
yaml.DEFAULT_SCHEMA.extend([type]);
// $ExpectType Schema
yaml.DEFAULT_SCHEMA.extend(schemaDefinition);

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
    schema: yaml.FAILSAFE_SCHEMA,
};
loadOpts = {
    listener(eventType: yaml.EventType, state) {
        this; // $ExpectType State
        state; // $ExpectType State
        state.position;
        state.result;
    },
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
    schema: yaml.FAILSAFE_SCHEMA,
};
dumpOpts = {
    quotingType: '"',
};
dumpOpts = {
    replacer: (_key, _value) => 'new_value',
};

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType Type
new yaml.Type(str, typeConstructorOptions);

// $ExpectType "sequence" | "scalar" | "mapping" | null
type.kind;
// $ExpectType (data: any) => boolean
type.resolve;
// $ExpectType (data: any, type?: string | undefined) => any
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

// $ExpectType string | number | object | null | undefined
yaml.load(str);
// $ExpectType string | number | object | null | undefined
yaml.load(str, loadOpts);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType any[]
value = yaml.loadAll(str);
// $ExpectType any[]
value = yaml.loadAll(str, null, loadOpts);
// $ExpectType any[]
value = yaml.loadAll(str, undefined, loadOpts);

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

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// $ExpectType string
yaml.dump(str);
// $ExpectType string
yaml.dump(str, dumpOpts);

new yaml.YAMLException();

// $ExpectType Schema
yaml.DEFAULT_SCHEMA.extend([type]);
// $ExpectType Schema
yaml.DEFAULT_SCHEMA.extend(type);
// $ExpectType Schema
yaml.DEFAULT_SCHEMA.extend(schemaDefinition);

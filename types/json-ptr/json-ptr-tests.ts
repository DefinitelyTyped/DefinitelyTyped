import JsonPointer = require('json-ptr');

// JsonPointer static
const JsonPointer1: typeof JsonPointer = JsonPointer.JsonPointer;
const JsonReference1: typeof JsonPointer.JsonReference = JsonPointer.JsonReference;
const create1: JsonPointer = JsonPointer.create('');
const staticHas1: boolean = JsonPointer.has({}, '');
const staticGet1: unknown = JsonPointer.get({}, '');
const staticSet1: unknown = JsonPointer.set({}, '', undefined);
const staticSet2: unknown = JsonPointer.set({}, '', undefined, false);
const staticSet3: unknown = JsonPointer.set({}, '', undefined, true);
const list1: readonly JsonPointer.JsonStringPointerListItem[] = JsonPointer.list({});
const list2: readonly JsonPointer.JsonStringPointerListItem[] = JsonPointer.list({}, false);
const list3: readonly JsonPointer.UriFragmentIdentifierPointerListItem[] = JsonPointer.list({}, true);
const flatten1: Record<JsonPointer.JsonStringPointer, unknown> = JsonPointer.flatten({});
const flatten2: Record<JsonPointer.JsonStringPointer, unknown> = JsonPointer.flatten({}, false);
const flatten3: Record<JsonPointer.UriFragmentIdentifierPointer, unknown> = JsonPointer.flatten({}, true);
const map1: Map<JsonPointer.JsonStringPointer, unknown> = JsonPointer.map({});
const map2: Map<JsonPointer.JsonStringPointer, unknown> = JsonPointer.map({}, false);
const map3: Map<JsonPointer.UriFragmentIdentifierPointer, unknown> = JsonPointer.map({}, true);
JsonPointer.visit({}, (pointer: JsonPointer.JsonStringPointer, value: unknown) => {
});
JsonPointer.visit({}, (pointer: JsonPointer.JsonStringPointer, value: unknown) => {
}, false);
JsonPointer.visit({}, (pointer: JsonPointer.JsonStringPointer, value: unknown | JsonPointer.JsonReference) => {
}, true);
const decode1: JsonPointer.PathSegments = JsonPointer.decode('');
const decodePointer1: JsonPointer.PathSegments = JsonPointer.decodePointer('');
const encodePointer1: JsonPointer.JsonStringPointer = JsonPointer.encodePointer([]);
const decodeUriFragmentIdentifier1: JsonPointer.PathSegments = JsonPointer.decodeUriFragmentIdentifier('');
const encodeUriFragmentIdentifier1: JsonPointer.UriFragmentIdentifierPointer = JsonPointer.encodeUriFragmentIdentifier([]);
const jsonPointerIsReference1: boolean = JsonPointer.isReference({});
const noConflict1: typeof JsonPointer = JsonPointer.noConflict();

// JsonReference static
const jsonReferenceIsReference1: boolean = JsonPointer.JsonReference.isReference({});

// JsonPointer instance
const jsonPointer: JsonPointer = new JsonPointer('');
const path1: JsonPointer.PathSegments = jsonPointer.path;
const pointer1: JsonPointer.JsonStringPointer = jsonPointer.pointer;
const uriFragmentIdentifier1: JsonPointer.JsonStringPointer = jsonPointer.uriFragmentIdentifier;
const instanceHas1: boolean = jsonPointer.has({});
const instanceGet1: unknown = jsonPointer.get({});
const instanceSet1: unknown = jsonPointer.set({}, undefined);
const instanceSet2: unknown = jsonPointer.set({}, undefined, false);
const instanceSet3: unknown = jsonPointer.set({}, undefined, true);

// JsonReference instance
const jsonReference: JsonPointer.JsonReference = new JsonPointer.JsonReference(jsonPointer);
const $ref1: JsonPointer.UriFragmentIdentifierPointer = jsonReference.$ref;
const resolve1: unknown = jsonReference.resolve({});

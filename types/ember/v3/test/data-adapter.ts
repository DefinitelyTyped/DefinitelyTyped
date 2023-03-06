import Ember from 'ember';

const da = Ember.DataAdapter.create();

const filters = da.getFilters();
filters.includes({ name: 'foo', desc: 'bar' }); // $ExpectType boolean
// @ts-expect-error
filters.includes({});

filters[0].name; // $ExpectType string
filters[0].desc; // $ExpectType string

// $ExpectType () => void
da.watchModelTypes(
    function added(wrappedTypes) {
        wrappedTypes;
        wrappedTypes[0].release; // $ExpectType () => void
        wrappedTypes[0].type.columns[0].desc; // $ExpectType string
        wrappedTypes[0].type.columns[0].name; // $ExpectType string
        wrappedTypes[0].type.count; // $ExpectType number
        wrappedTypes[0].type.name; // $ExpectType string
    },
    function updated(wrappedTypes) {
        wrappedTypes;
        wrappedTypes[0].release; // $ExpectType () => void
        wrappedTypes[0].type.columns[0].desc; // $ExpectType string
        wrappedTypes[0].type.columns[0].name; // $ExpectType string
        wrappedTypes[0].type.count; // $ExpectType number
        wrappedTypes[0].type.name; // $ExpectType string
    },
);
// @ts-expect-error
da.watchModelTypes(() => {});

// $ExpectType () => void
da.watchRecords(
    'house',
    function added(records) {
        records[0].object; // $ExpectType object
        records[0].columnValues; // $ExpectType object
    },
    function updated(records) {
        records[0].object; // $ExpectType object
        records[0].columnValues; // $ExpectType object
    },
    function removed(idx, count) {
        idx; // $ExpectType number
        count; // $ExpectType number
    },
);
// @ts-expect-error
da.watchRecords(() => {});

da.acceptsModelName; // $ExpectType boolean
da.containerDebugAdapter; // $ExpectType ContainerDebugAdapter

const ca: Ember.ContainerDebugAdapter = da.containerDebugAdapter;
ca.canCatalogEntriesByType('controller'); // $ExpectType boolean
ca.catalogEntriesByType('controller'); // $ExpectType string[]

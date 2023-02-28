import si = require('search-index');

si(); // $ExpectType Promise<SearchIndex>

si().then(db => {
    db.QUERY([]); // $ExpectType Promise<QueryResult>
    db.SEARCH({ VALUE: 'value', FIELD: 'field' }); // $ExpectType Promise<QueryResult>
    db.ALL_DOCUMENTS(); // $ExpectType Promise<AllDocumentsResultItem[]>
    db.BUCKETS(); // $ExpectType Promise<FieldValueIdObject[]>
    db.DELETE('1'); // $ExpectType Promise<Operation[]>
    db.CREATED(); // $ExpectType Promise<number>
    db.DICTIONARY(); // $ExpectType Promise<string[]>
    db.DOCUMENTS(); // $ExpectType Promise<any[]>
    db.DISTINCT(); // $ExpectType Promise<FieldValue[]>
    db.DOCUMENT_COUNT(); // $ExpectType Promise<number>
    db.EXPORT(); // $ExpectType Promise<KeyValue[]>
    db.FACETS(); // $ExpectType Promise<FieldValueIdObject[]>
    db.FIELDS(); // $ExpectType Promise<string[]>
    db.FLUSH(); // $ExpectType Promise<void>
    db.IMPORT(db.INDEX); // $ExpectType Promise<void>
    db.MIN(); // $ExpectType Promise<string>
    db.MAX(); // $ExpectType Promise<string>
    db.PUT([{ id: '1' }], { tokenSplitRegex: /.+/ }); // $ExpectType Promise<Operation[]>
    db.PUT_RAW([{ id: '2' }]); // $ExpectType Promise<Operation[]>
    db.TOKENIZATION_PIPELINE_STAGES; // $ExpectType TokenizationPipelineStages
});

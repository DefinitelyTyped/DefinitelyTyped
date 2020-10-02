import elasticlunr = require('elasticlunr');

function assertType<T>(value: T): T {
    return value;
}

interface TestDocument {
    id: string;
    field: string;
}

elasticlunr<TestDocument>();

elasticlunr<TestDocument>(function() {
    this.addField('field');
    this.setRef('id');
    this.saveDocument(true);
});

const index = elasticlunr<TestDocument>(ctx => {
    ctx.addField('field');
    ctx.setRef('id');
    ctx.saveDocument(true);
});

const testDoc: TestDocument = { id: '1', field: 'ok' };

// Index

index.addDoc(testDoc);
index.addDoc(testDoc, true);

index.addField('field');

index.coordNorm({ doc: 1 }, { doc: ['token'] }, 1);

index.fieldSearch(['ok'], 'field', { field: { boost: 10 } });
index.fieldSearch(['ok'], 'field', { field: { boost: 10, bool: 'OR' } });
index.fieldSearch(['ok'], 'field', { field: { boost: 10, bool: 'AND' } });
index.fieldSearch(['ok'], 'field', { field: { boost: 10 } });

index.fieldSearchStats({ doc: ['ok'] }, 'ok', { doc: testDoc });

index.getFields();

index.idf('term', 'field');

index.mergeScores({ doc: 1 }, { doc: 1 }, 'AND');
index.mergeScores({ doc: 1 }, { doc: 1 }, 'OR');

index.off('add', () => {});
index.off('update', () => {});
index.off('remove', () => {});

index.on('add', () => {});
index.on('update', () => {});
index.on('remove', () => {});
index.on('add', 'update', () => {});
index.on('add', 'update', 'remove', () => {});

index.removeDoc(testDoc);
index.removeDoc(testDoc, true);

index.removeDocByRef('1');
index.removeDocByRef('1', true);

index.saveDocument(true);

assertType<elasticlunr.SearchResults[]>(index.search('query'));
index.search('query', {
    fields: {
        field: { boost: 2 },
    },
});

index.search('query', {
    expand: true
});

index.toJSON();

index.updateDoc(testDoc);
index.updateDoc(testDoc, true);

index.use(() => {});
index.use(() => {}, 1);

elasticlunr.Index.load<TestDocument>({
    version: 'version',
    fields: ['field'],
    ref: 'id',
    documentStore: new elasticlunr.DocumentStore<TestDocument>().toJSON(),
    pipeline: ['trimmer', 'stopWordFilter', 'stemmer'],
    index: {
        field: { df: 1, docs: {} },
    },
});

// Pipeline

index.pipeline.add(() => '');

index.pipeline.after(() => '', () => '');

index.pipeline.before(() => '', () => '');

assertType<elasticlunr.PipelineFunction[]>(index.pipeline.get());

index.pipeline.remove(() => '');

assertType<string[]>(index.pipeline.run(['']));

assertType<elasticlunr.SerialisedPipeline>(index.pipeline.toJSON());

assertType<elasticlunr.Pipeline>(elasticlunr.Pipeline.load(index.pipeline.toJSON()));

elasticlunr.Pipeline.registerFunction(() => '', 'fn');
elasticlunr.Pipeline.getRegisteredFunction('fn');
elasticlunr.Pipeline.warnIfFunctionNotRegistered(() => '');

// DocumentStore

index.documentStore.addDoc('1', { id: '1', field: '1' });

index.documentStore.addFieldLength('1', 'field', 1);

index.documentStore.getDoc('1');

index.documentStore.getFieldLength('1', 'field');

index.documentStore.hasDoc('1');

index.documentStore.isDocStored();

index.documentStore.removeDoc('1');

index.documentStore.toJSON();

index.documentStore.updateFieldLength('1', 'field', 1);

elasticlunr.DocumentStore.load(index.documentStore.toJSON());

// EventEmitter

index.eventEmitter.addListener('add', () => {});

index.eventEmitter.removeListener('add', () => {});

index.eventEmitter.hasHandler('add');

index.eventEmitter.emit('add');

index.eventEmitter.emit('add', 1, 2, 3);

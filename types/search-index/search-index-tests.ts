import { SearchIndexConstructor, Options, SearchResult } from 'search-index';
import { Readable } from 'stream';

declare const SearchIndex: SearchIndexConstructor;

const options: Options = {
  keySeparator: '~',
  logLevel: 'DEBUG',
  batchsize: 100,
  stopwords: ['a', 'an', 'any'],
  nGramLength: { gte: 100, lte: 150 },
  indexPath: 'not-si',
  indexes: require('leveldown')(),
  fieldOptions: {
    author: {
      nGramLength: 101
    }
  }
};

SearchIndex(options, (err, index) => {
  index.search('string literal query').on('data', (doc) => { });

  index.search({
    query: {
      AND: {
        '*': ['whatever']
      }
    }
  }).on('data', processResult);

  index.search({
    offset: 100,
    pageSize: 100,
    sort: {
      field: 'somekey',
      direction: 'desc',
    },
    query: {
      AND: {
        '*': ['whatever']
      }
    }
  }).on('data', processResult);

  index.search({
    query: {
      AND: {
        '*': ['whatever', 'else']
      },
      NOT: {
        '*': ['not-this']
      },
      BOOST: 10
    }
  }).on('data', processResult);

  index.search({
    query: [{
      AND: {
        somekey: [{ gte: 100, lte: 200 }]
      },
      BOOST: 10
    }, {
      NOT: {
        otherkey: [{ gte: 'aaa', lte: 'zzz' }]
      },
      BOOST: -10
    }]
  }).on('data', processResult);

  index.availableFields().on('data', (field) => { });

  index.buckets().on('data', (bucket) => { });
  index.buckets({ query: { AND: { '*': ['something'] } } }).on('data', (doc) => { });

  index.categorize({
    query: { AND: { '*': ['something'] } },
    category: { field: 'somekey' }
  }).on('data', (category) => { });

  index.countDocs((err: any, count: number) => { });

  index.get(['1', '2', '3']).on('data', (doc) => { });

  index.match({ beginsWith: 'asdf' }).on('data', (suggestion) => { });
  index.match({
    beginsWith: 'asdf',
    field: 'somekey',
    threshold: 100,
    limit: 20,
    type: 'count',
    sort: 'alphabetical'
  }).on('data', (suggestion) => { });

  index.totalHits('simple query', (err: any, count: number) => { });
  index.totalHits({
    query: {
      AND: {
        '*': ['whatever', 'else']
      },
      NOT: {
        somekey: [{ lte: 100, gte: 'abc' }]
      },
      BOOST: 10
    }
  }, (err: any, count: number) => { });

  const s = new Readable({ objectMode: true });
  s.pipe(index.add());
  s.pipe(index.add({ preserveCase: false }));
  s.pipe(index.add({
    preserveCase: false,
    searchable: false,
    separator: /\s+/i,
    weight: 100,
    storeable: ['asdf'],
    fieldedSearch: true,
    sortable: true,
    stopwords: ['a', 'an', 'any']
  }));

  index.concurrentAdd({}, [{ id: 'x', somekey: 'somedata' }, { id: 'y', somekey: 'somedata' }], (err: any) => { });

  s.pipe(index.defaultPipeline());
  s.pipe(index.defaultPipeline({
    preserveCase: false,
    searchable: false,
    separator: /\s+/i,
    weight: 100,
    storeable: ['asdf'],
    fieldedSearch: true,
    sortable: true,
    stopwords: ['a', 'an', 'any']
  }));

  index.del(['1', '2', '3'], (err: any) => { });
  index.concurrentDel(['1', '2', '3'], (err: any) => { });

  s.pipe(index.deleteStream());
  s.pipe(index.deleteStream(options));

  index.flush((err: any) => { });

  index.dbReadStream().pipe(process.stdout);
  index.dbReadStream({ gzip: true }).pipe(process.stdout);

  s.pipe(index.dbWriteStream());
  s.pipe(index.dbWriteStream({ merge: true }));

  index.close((err: any) => { });
});

function processResult(result: SearchResult) {
  if (result.id === 'some string') {
    console.log('id is string');
  }

  if (result.score > 70) {
    console.log('score is number');
  }

  if (result.scoringCriteria) {
    console.log('has scoring criteria');
  }

  if (result.document.myfield) {
    console.log('doc is whatever you want to put in there');
  }
}

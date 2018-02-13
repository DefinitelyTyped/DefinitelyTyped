import * as elasticsearch from "elasticsearch";

let client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client = new elasticsearch.Client({
  hosts: [
    'box1.server.org',
    'box2.server.org'
  ],
  selector: (hosts: any) => { }
});

client.ping({
  requestTimeout: 30000
}, (error) => {
});

client.search({
  q: 'pants'
}).then((body) => {
  const hits = body.hits.hits;
}, (error) => {
});

client.indices.delete({
  index: 'test_index',
  ignore: [404]
}).then((body) => {
}, (error) => {
});

client.deleteByQuery({
  index: 'test_index',
  type: 'test_type',
  body: {
    query: {
    }
  }
}).then((response) => {
}, (error) => {
});

client.create({
  index: 'index',
  type: 'type'
});

client.create({
  id: '123',
  index: 'index',
  type: 'type'
});

client.create({
  id: '123',
  index: 'index',
  type: 'type'
}, (err, repsonse, status) => {
});

client.cluster.getSettings({
  masterTimeout: '100s'
}, (err, response) => {
});

client.cluster.health({
  masterTimeout: '100s'
}, (err, response) => {
});

client.cluster.pendingTasks({
  ignore: 1
}, (err, response) => {
});

client.cluster.putSettings({
  ignore: 1
}, (err, response) => {
});

client.cluster.putSettings({
  ignore: 1
}, (err, response) => {
});

client.cluster.reroute({
  ignore: 1
}, (err, response) => {
});

client.cluster.state({
  ignore: 1
}, (err, response) => {
});

client.cluster.stats({
  ignore: 1
}, (err, response) => {
});

client.count({
  index: 'index_name'
}, (error, response) => {
  // ...
});

client.count({
  index: 'index_name',
  body: {
    query: {
      filtered: {
        filter: {
          terms: {
            foo: ['bar']
          }
        }
      }
    }
  }
}, (err, response) => {
  // ...
});

client.explain({
  // the document to test
  index: 'myindex',
  type: 'mytype',
  id: '1',

  // the query to score it against
  q: 'field:value'
}, (error, response) => {
  // ...
});

client.explain({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    query: {
      match: { title: 'test' }
    }
  }
}, (error, response) => {
  // ...
});

client.index({
  index: 'myindex',
  type: 'mytype',
  id: '1',
  body: {
    title: 'Test 1',
    tags: ['y', 'z'],
    published: true,
  }
}, (error, response) => {
});

client.mget({
  body: {
    docs: [
      { _index: 'indexA', _type: 'typeA', _id: '1' },
      { _index: 'indexB', _type: 'typeB', _id: '1' },
      { _index: 'indexC', _type: 'typeC', _id: '1' }
    ]
  }
}, (error, response) => {
  // ...
});

client.mget({
  index: 'myindex',
  type: 'mytype',
  body: {
    ids: [1, 2, 3]
  }
}, (error, response) => {
  // ...
});

client.search({
  index: 'myindex',
  q: 'title:test'
}, (error, response) => {
  // ...
});

client.search({
  index: 'myindex',
  body: {
    query: {
      match: {
        title: 'test'
      }
    },
    facets: {
      tags: {
        terms: {
          field: 'tags'
        }
      }
    }
  }
}, (error, response) => {
  // ...
});

client.suggest({
  index: 'myindex',
  body: {
    mysuggester: {
      text: 'tset',
      term: {
        field: 'title'
      }
    }
  }
}, (error, response) => {
});

// first we do a search, and specify a scroll timeout
const allTitles: string[] = [];
client.search({
  index: 'myindex',
  // Set to 30 seconds because we are calling right back
  scroll: '30s',
  searchType: 'query_then_fetch',
  docvalueFields: ['title'],
  q: 'title:test'
}, function getMoreUntilDone(error, response) {
  // collect the title from each response
  response.hits.hits.forEach((hit) => {
    allTitles.push(hit.fields.title);
  });

  if (response.hits.total !== allTitles.length) {
    // now we can call scroll over and over
    client.scroll({
      scrollId: response._scroll_id!,
      scroll: '30s'
    }, getMoreUntilDone);
  } else {
    console.log('every "test" title', allTitles);
  }
});

client.indices.updateAliases({
  body: {
    actions: [
      { remove: { index: 'logstash-2014.04', alias: 'logstash-current' } },
      { add: { index: 'logstash-2014.05', alias: 'logstash-current' } }
    ]
  }
}).then((response) => {
  // ...
}, (error) => {
  // ...
});

// Errors
function testErrors() {
    throw new elasticsearch.errors.AuthenticationException();
}

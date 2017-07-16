import test from 'tape';
import * as bodyBuilder from "bodybuilder";

test('bodyBuilder should build query with no field', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('match_all')

  t.deepEqual(result.getQuery(), {
    match_all: {}
  })
})

test('bodyBuilder should build query with field but no value', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('exists', 'user')

  t.deepEqual(result.getQuery(), {
    exists: {
      field: 'user'
    }
  })
})

test('bodyBuilder should build filter without query', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .filter('term', 'user', 'kimchy')
    .build()

  t.deepEqual(result, {
    query: {
      bool: {
        filter: {
          term: {
            user: 'kimchy'
          }
        }
      }
    }
  })
})

test('bodyBuilder should build v1 filtered query', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .filter('term', 'user', 'kimchy')
    .build('v1')

  t.deepEqual(result, {
    query: {
      filtered: {
        filter: {
          term: {
            user: 'kimchy'
          }
        }
      }
    }
  })
})

test('bodyBuilder should create query and filter', (t) => {
  t.plan(2)

  const result = bodyBuilder()
    .query('exists', 'user')
    .filter('term', 'user', 'kimchy')

  t.deepEqual(result.getQuery(), {
    exists: {
      field: 'user'
    }
  })
  t.deepEqual(result.getFilter(), {
    term: {
      user: 'kimchy'
    }
  })
})

test('bodyBuilder should build a v1 filtered query', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .query('match', 'message', 'this is a test')
    .filter('term', 'user', 'kimchy')
    .build('v1')

  t.deepEqual(result, {
    query: {
      filtered: {
        query: {
          match: {
            message: 'this is a test'
          }
        },
        filter: {
          term: {
            user: 'kimchy'
          }
        }
      }
    }
  })
})

test('bodyBuilder should build a filtered query', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .query('match', 'message', 'this is a test')
    .filter('term', 'user', 'kimchy')
    .build()

  t.deepEqual(result, {
    query: {
      bool: {
        must: {
          match: {
            message: 'this is a test'
          }
        },
        filter: {
          term: {
            user: 'kimchy'
          }
        }
      }
    }
  })
})

test('bodyBuilder should build a filtered query for version 2.x', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .query('match', 'message', 'this is a test')
    .filter('term', 'user', 'kimchy')
    .build('v2')

  t.deepEqual(result, {
    query: {
      bool: {
        must: {
          match: {
            message: 'this is a test'
          }
        },
        filter: {
          term: {user: 'kimchy'}
        }
      }
    }
  })
})

test('bodyBuilder should sort with default sort direction', (t) => {
  t.plan(1)

  const result = bodyBuilder().sort('timestamp').build()

  t.deepEqual(result, {
    sort: [
      {
        timestamp: {
          order: 'asc'
        }
      }
    ]
  })
})

test('bodyBuilder should set from on body', (t) => {
  t.plan(1)

  const result = bodyBuilder().from(10).build()

  t.deepEqual(result, {
    from: 10
  })
})

test('bodyBuilder should set size on body', (t) => {
  t.plan(1)

  const result = bodyBuilder().size(10).build()

  t.deepEqual(result, {
    size: 10
  })
})

test('bodyBuilder should set any key-value on body', (t) => {
  t.plan(1)

  const result = bodyBuilder().rawOption('a', {b: 'c'}).build()

  t.deepEqual(result, {
    a: { b: 'c' }
  })
})

test('bodyBuilder should build query with field and value', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('term', 'user', 'kimchy')

  t.deepEqual(result.getQuery(), {
    term: {
      user: 'kimchy'
    }
  })
})

test('bodyBuilder should build query with field and object value', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('range', 'date', {gt: 'now-1d'})

  t.deepEqual(result.getQuery(), {
    range: {
      date: {gt: 'now-1d'}
    }
  })
})

test('bodyBuilder should build query with more options', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('geo_distance', 'point', {lat: 40, lon: 20}, {distance: '12km'})

  t.deepEqual(result.getQuery(), {
    geo_distance: {
      distance: '12km',
      point: {
        lat: 40,
        lon: 20
      }
    }
  })
})

test('bodyBuilder should build nested queries', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('nested', 'path', 'obj1', (q) => q.query('match', 'obj1.color', 'blue'))

  t.deepEqual(result.getQuery(), {
    nested: {
      path: 'obj1',
      query: {
        match: {
          'obj1.color': 'blue'
        }
      }
    }
  })
})

test('bodyBuilder should nest bool-merged queries', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('nested', 'path', 'obj1', {score_mode: 'avg'}, (q) => {
    return q.query('match', 'obj1.name', 'blue').query('range', 'obj1.count', {gt: 5})
  })

  t.deepEqual(result.getQuery(), {
    nested: {
      path: 'obj1',
      score_mode: 'avg',
      query: {
        bool: {
          must: [
            {
              match: {'obj1.name': 'blue'}
            },
            {
              range: {'obj1.count': {gt: 5}}
            }
          ]
        }
      }
    }
  })
})

test('bodyBuilder should make this chained nested query', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .query('match', 'title', 'eggs')
    .query('nested', 'path', 'comments', {score_mode: 'max'} , (q) => {
      return q
        .query('match', 'comments.name', 'john')
        .query('match', 'comments.age', 28)
  })

  t.deepEqual(result.getQuery(), {
    bool: {
      must: [
        {
          match: {
            title: 'eggs'
          }
        },
        {
          nested: {
            path: 'comments',
            score_mode: 'max',
            query: {
              bool: {
                must: [
                  {
                    match: {
                      'comments.name': 'john'
                    }
                  },
                  {
                    match: {
                      'comments.age': 28
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  })
})

test('bodyBuilder should create this big-ass query', (t) => {
  t.plan(1)

  const result = bodyBuilder().query('constant_score', (q) => {
    return q
      .orFilter('term', 'created_by.user_id', 'abc')
      .orFilter('nested', 'path', 'doc_meta', (q) => {
        return q.query('constant_score', (q) => {
          return q.filter('term', 'doc_meta.user_id', 'abc')
        })
      })
      .orFilter('nested', 'path', 'tests', (q) => {
        return q.query('constant_score', (q) => {
          return q.filter('term', 'tests.created_by.user_id', 'abc')
        })
      })
  })

  t.deepEqual(result.getQuery(), {
    constant_score: {
      filter: {
        bool: {
          should: [
            {
              term: {
                'created_by.user_id': 'abc'
              }
            }, {
              nested: {
                path: 'doc_meta',
                query: {
                  constant_score: {
                    filter: {
                      term: {
                        'doc_meta.user_id': 'abc'
                      }
                    }
                  }
                }
              }
            }, {
              nested: {
                path: 'tests',
                query: {
                  constant_score: {
                    filter: {
                      term: {
                        'tests.created_by.user_id': 'abc'
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  })
})

test('bodyBuilder should combine queries, filters, aggregations', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .query('match', 'message', 'this is a test')
    .filter('term', 'user', 'kimchy')
    .filter('term', 'user', 'herald')
    .orFilter('term', 'user', 'johnny')
    .notFilter('term', 'user', 'cassie')
    .aggregation('terms', 'user')
    .build()

  t.deepEqual(result, {
    query: {
      bool: {
        must: {
          match: {
            message: 'this is a test'
          }
        },
        filter: {
          bool: {
            must: [
              {term: {user: 'kimchy'}},
              {term: {user: 'herald'}}
            ],
            should: [
              {term: {user: 'johnny'}}
            ],
            must_not: [
              {term: {user: 'cassie'}}
            ]
          }
        }
      }
    },
    aggs: {
      agg_terms_user: {
        terms: {
          field: 'user'
        }
      }
    }
  })
})

test('bodybuilder should allow rebuilding', (t) => {
  t.plan(2)

  const body = bodyBuilder().filter('match', 'message', 'this is a test')

  t.deepEqual(body.build('v1'), {
    query: {
      filtered: {
        filter: {
          match: {
            message: 'this is a test'
          }
        }
      }
    }
  })

  t.deepEqual(body.build(), {
    query: {
      bool: {
        filter: {
          match: {
            message: 'this is a test'
          }
        }
      }
    }
  })
})

test('bodybuilder should add a not filter', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .notFilter('match', 'message', 'this is a test')
    .build()

  t.deepEqual(result, {
    query: {
      bool: {
        filter: {
          bool: {
            must_not: [{
              match: {
                message: 'this is a test'
              }
            }]
          }
        }
      }
    }
  })
})

test('bodybuilder | or filter', (t) => {
  t.plan(1)

  const result = bodyBuilder().filter('or', [
    {term: {user: 'kimchy'}},
    {term: {user: 'tony'}}
  ])
  .build()

  t.deepEqual(result,
  {
    query: {
      bool: {
        filter: {
          or: [
            {term: {user: 'kimchy'}},
            {term: {user: 'tony'}}
          ]
        }
      }
    }
  })
})

test('bodybuilder | dynamic filter', t => {
  t.plan(1)

  const result = bodyBuilder()
    .filter('constant_score', f => f.filter('term', 'user', 'kimchy'))
    .filter('term', 'message', 'this is a test')
    .build()

  t.deepEqual(result,
  {
    query: { bool: { filter: {
      bool: {
        must: [
          {
            constant_score: {
              filter: {
                term: {
                  user: 'kimchy'
                }
              }
            }
          },
          { term: { message: 'this is a test' } }
        ]
      }
    } } }
  })
})

test('bodybuilder | complex dynamic filter', t => {
  t.plan(3)

  const result = bodyBuilder()
    .orFilter('bool', f => {
      f.filter('terms', 'tags', ['Popular'])
      f.filter('terms', 'brands', ['A', 'B'])
      return f
    })
    .orFilter('bool', f => {
      f.filter('terms', 'tags', ['Emerging'])
      f.filter('terms', 'brands', ['C'])
      return f
    })
    .orFilter('bool', f => {
      f.filter('terms', 'tags', ['Rumor'])
      f.filter('terms', 'companies', ['A', 'C', 'D'])
      return f
    })
    .build()

  t.deepEqual(result, {
    query: { bool: { filter: { bool: { should: [
      {
        bool: { must: [
          { terms: { tags: ['Popular'] } },
          { terms: { brands: ['A', 'B'] } }
        ]}
      },
      {
        bool: { must: [
          { terms: { tags: ['Emerging'] } },
          { terms: { brands: ['C'] } }
        ]}
      },
      {
        bool: { must: [
          { terms: { tags: ['Rumor'] } },
          { terms: { companies: ['A', 'C', 'D'] } }
        ]}
      }
    ]}}}}
  })

  t.deepEqual(result.query.bool.filter.bool.should, [
    {
      bool: { must: [
        { terms: { tags: ['Popular'] } },
        { terms: { brands: ['A', 'B'] } }
      ]}
    },
    {
      bool: { must: [
        { terms: { tags: ['Emerging'] } },
        { terms: { brands: ['C'] } }
      ]}
    },
    {
      bool: { must: [
        { terms: { tags: ['Rumor'] } },
        { terms: { companies: ['A', 'C', 'D'] } }
      ]}
    }
  ])

  t.deepEqual(result.query.bool.filter.bool.should[0], {
    bool: { must: [
      { terms: { tags: ['Popular'] } },
      { terms: { brands: ['A', 'B'] } }
    ]}
  })

})

test('bodybuilder | minimum_should_match filter', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .orFilter('term', 'user', 'kimchy')
    .orFilter('term', 'user', 'tony')
    .filterMinimumShouldMatch(2)
    .build()

  t.deepEqual(result,
  {
    query: {
      bool: {
        filter: {
          bool: {
            should: [
              {term: {user: 'kimchy'}},
              {term: {user: 'tony'}}
            ],
            minimum_should_match: 2
          }
        }
      }
    }
  })
})

test('bodybuilder | minimum_should_match query', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .orQuery('term', 'user', 'kimchy')
    .orQuery('term', 'user', 'tony')
    .queryMinimumShouldMatch(2)
    .build()

  t.deepEqual(result,
  {
    query: {
      bool: {
        should: [
          {term: {user: 'kimchy'}},
          {term: {user: 'tony'}}
        ],
        minimum_should_match: 2
      }
    }
  })
})

test('bodybuilder | minimum_should_match query and filter', (t) => {
  t.plan(1)

  const result = bodyBuilder()
    .orQuery('term', 'user', 'kimchy')
    .orQuery('term', 'user', 'tony')
    .orFilter('term', 'user', 'kimchy')
    .orFilter('term', 'user', 'tony')
    .filterMinimumShouldMatch(1)
    .queryMinimumShouldMatch(2)
    .build()

  t.deepEqual(result,
  {
    query: {
      bool: {
        should: [
          {term: {user: 'kimchy'}},
          {term: {user: 'tony'}}
        ],
        minimum_should_match: 2,
        filter: {
          bool: {
            should: [
              {term: {user: 'kimchy'}},
              {term: {user: 'tony'}}
            ],
            minimum_should_match: 1
          }
        }
      }
    }
  })
})

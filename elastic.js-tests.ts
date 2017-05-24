import * as elasticjs from 'elastic.js';

let body = new elasticjs.Request({})
  .query(new elasticjs.MatchQuery('title_field', 'testQuery'))
  .facet(new elasticjs.TermsFacet('tags').field('tags'))
  .toJSON();

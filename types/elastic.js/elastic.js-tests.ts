import * as elasticjs from 'elastic.js';

new elasticjs.Request({})
  .query(new elasticjs.MatchQuery('title_field', 'testQuery'))
  .facet(new elasticjs.TermsFacet('tags').field('tags'))
  .toJSON();

new elasticjs.Request({})
  .query(new elasticjs.MatchAllQuery())
  .filter(new elasticjs.BoolFilter().must([
    new elasticjs.TermFilter('a', 'b'),
    new elasticjs.TermFilter('c', 'd')]))
  .toJSON();

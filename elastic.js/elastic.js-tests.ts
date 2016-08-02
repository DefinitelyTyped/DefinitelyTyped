/// <reference path="elastic.js.d.ts"/>
import elasticjs = require("elastic.js");

let body = elasticjs.Request({})
  .query(elasticjs.MatchQuery('title_field', 'testQuery'))
  .facet(elasticjs.TermsFacet('tags').field('tags'))
  .toJSON();

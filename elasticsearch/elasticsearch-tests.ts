/// <reference path="elasticsearch.d.ts"/>
import elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client = new elasticsearch.Client({
  hosts: [
    'box1.server.org',
    'box2.server.org'
  ],
  selector: function (hosts: any) { }
});

client.ping({
  requestTimeout: 30000,
  hello: "elasticsearch"
}, function (error) {
});

client.search({
  q: 'pants'
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
});

client.indices.delete({
  index: 'test_index',
  ignore: [404]
}).then(function (body) {
}, function (error) {
});
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
  masterTimeout: 100
}, (err, response) => {
});

client.cluster.health({
  masterTimeout: 100
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


import Meshblu = require('meshblu');

var UUID = "26de691f-8068-4cdc-907a-4cb5961a1aba";
var TOKEN = "4cb5961a1aba26de691f80684cdc907a";  

var meshblu = Meshblu.createConnection({
    uuid: UUID,
    token: TOKEN 
});

meshblu.data({
    uuid: UUID,
    online: true,
    x: -53,
    y: 234
}, function(result) {
    console.log(result);
});

meshblu.device({
    uuid: UUID
}, function(result) {
    console.log(result);
});

meshblu.devices({
    color: "green"
}, function(result) {
    console.log(result);
});

meshblu.generateAndStoreToken({
    uuid: UUID
}, function(result) {
    console.log(result);
});

meshblu.getdata({
    uuid: UUID,
    start: "2015-04-23T18:25:43.511Z",
    finish: "2015-04-24T18:25:43.511Z",
    limit: 10
}, function(result) {
    console.log(result);
});

meshblu.identify();

meshblu.message({
    devices: [UUID],
    topic: "status",
    payload: {
        online: true
    }
}, function(result) {
    console.log(result);
});

meshblu.register({
    type: "drone"
}, function(result) {
    console.log(result);
});

meshblu.revokeToken({
    uuid: UUID,
    token: TOKEN
}, function(result) {
    console.log(result);
});

meshblu.subscribe({
    uuid: UUID
}, function(result) {
    console.log(result);
});

meshblu.subscribe({
  uuid: UUID,
  types: ["sent", "received"]
}, function(result) {
    console.log(result);
});

meshblu.subscribe({
  uuid: UUID,
  types: ["sent", "received"],
  topics: ["device*", "-*status"]
}, function(result) {
    console.log(result);
});

meshblu.unsubscribe({
    uuid: UUID
}, function(result) {
    console.log(result);
});

meshblu.unsubscribe({
    uuid: UUID,
    types: ["sent", "broadcast"]
}, function(result) {
    console.log(result);
});

meshblu.update({
    uuid: UUID,
    color: "blue"
}, function(result) {
    console.log(result);
});

meshblu.whoami({}, function(result) {
    console.log(result);
});

meshblu.unregister({
    uuid: UUID
}, function(result) {
    console.log(result);
});

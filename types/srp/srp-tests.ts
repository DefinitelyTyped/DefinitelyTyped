

var srp = require('srp');


// Test the `params` variable.
var params = srp.params['1024'];


// Test the `genKey` function.
srp.genKey(function (err: Error, buf: Buffer): void {});
srp.genKey(16, function (err: Error, buf: Buffer): void {});


// Test the `computeVerifier` function.
var salt = new Buffer('deadbeef', 'hex');
var identifier = new Buffer('AzureDiamond');
var password = new Buffer('hunter2');

var verifier = srp.computeVerifier(params, salt, identifier, password);


// Test the `Client` class.
var secret1 = new Buffer(32);
var client = new srp.Client(params, salt, identifier, password, secret1);


// Test the `Server` class.
var secret2 = new Buffer(32);
var server = new srp.Server(params, verifier, secret2);


// Test handshake protocol.
var A = client.computeA();
server.setA(A);

var B = server.computeB();
client.setB(B);

var M1 = client.computeM1();
var M2 = server.checkM1(M1);
client.checkM2(M2);

client.computeK();
server.computeK();

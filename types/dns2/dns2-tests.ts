// Examples taken from the package readme for 1.4.2:
// https://github.com/song940/node-dns/tree/6c2041b82ba2109fbb95bc529572404508787337#dns2

import DNS = require('dns2');

const dns = new DNS();

(async () => {
  const result = await dns.resolveA('google.com');
  console.log(result.answers);
})();

const { Packet } = DNS;

const server = DNS.createServer((request, send, rinfo) => {
  const response = Packet.createResponseFromRequest(request);
  const [ question ] = request.questions;
  const { name } = question;
  response.answers.push({
    name,
    type: Packet.TYPE.A,
    class: Packet.CLASS.IN,
    ttl: 300,
    address: '8.8.8.8'
  });
  send(response);
});

server.on('request', (request, response, rinfo) => {
  console.log(request.header.id, request.questions[0]);
});

server.listen(5333);

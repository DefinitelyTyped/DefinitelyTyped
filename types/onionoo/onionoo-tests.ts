import Onionoo = require('onionoo');
import KeyvRedis = require('@keyv/redis');

const onionoo = new Onionoo();
onionoo; // $ExpectType Instance & Endpoints

const query = {
    limit: 10,
    running: true,
    order: '-consensus_weight',
};

onionoo.summary(query).then(response => {
    response.body; // $ExpectType Response<RelaySummary, BridgeSummary>

    const body = response.body;

    body.version; // $ExpectType string
    body.relays_published; // $ExpectType string
    body.relays; // $ExpectType RelaySummary[]
    body.bridges_published; // $ExpectType string
    body.bridges; // $ExpectType BridgeSummary[]
});
onionoo.details(query); // $ExpectType GotPromise<Response<Relay, Bridge>>
onionoo.bandwidth(query); // $ExpectType GotPromise<Response<NodeBandwidth, NodeBandwidth>>
onionoo.weights(query); // $ExpectType GotPromise<Response<RelayWeights, undefined>>
onionoo.clients(query); // $ExpectType GotPromise<Response<undefined, BridgeClients>>
onionoo.uptime(query); // $ExpectType GotPromise<Response<RelayUptime, BridgeUptime>>

// $ExpectType Instance & Partial<Endpoints>
new Onionoo({
    baseUrl: 'https://onionoo.torproject.org',
    endpoints: ['summary', 'details', 'bandwidth', 'weights', 'clients', 'uptime'],
    cache: false,
});

new Onionoo({ cache: new Map() });
new Onionoo({ cache: new KeyvRedis('redis://user:pass@localhost:6379') });

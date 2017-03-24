import graphite = require('graphite-udp');

// Test creation of client directly.
const client = new graphite.Client();
client.put('test', 1);
client.add('test', 1);
client.close();

// Create client with helper
const client2 = graphite.createClient();
client2.put('test2', 1);
client2.add('test2', 1);
client2.close();

// Test creation with options.
graphite.createClient({
	host: '127.0.0.1',
	port: 2003,
	type: 'udp4',
	maxPacketSize: 4096,
	prefix: 'prefix',
	suffix: 'suffix',
	interval: 60 * 1000,
	verbose: true,
	callback: (error: Error, metrics: any): void => {}
});

// Test creation options with class directly.
new graphite.Client({
	host: '127.0.0.1',
	port: 2003,
	type: 'udp4',
	maxPacketSize: 4096,
	prefix: 'prefix',
	suffix: 'suffix',
	interval: 60 * 1000,
	verbose: true,
	callback: (error: Error, metrics: any): void => {}
});

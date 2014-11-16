/// <reference path="../node/node.d.ts" />

/// <reference path="./simple-cw-node.d.ts" />

import CW = require('simple-cw-node');
var client = CW();
var Deferred:any = client.Deferred;

// initialize.
client.init({ token: 'YOUR_TOKEN' });

// get your info.
client.get('me', (err, res) => {
	console.log(arguments);
});

// create room.
client.post('rooms', {
	name: 'room',
	members_admin_ids: '123456789,987654321',
	description: 'description'
}, (err, res) => {
	console.log('created.');
});

client
	.get('me')
	.done((res:any) => {
		console.log(res.body)
	})
	.fail((err:any) => {
		console.error(err);
	});

/// <reference path="pusher-js.d.ts" />

import Pusher = require('pusher-js');

var API_KEY: string;
var pusher: Pusher.Pusher;

//
// Configuration
//

pusher = new Pusher(API_KEY, {
    authEndpoint: "http://example.com/pusher/auth"
});

pusher = new Pusher(API_KEY, {
    auth: {
        params: { foo: "bar" },
        headers: { baz: "boo" }
    }
});

pusher = new Pusher(API_KEY, {
    auth: {
        params: { foo: "bar" },
        headers: { "X-CSRF-Token": "SOME_CSRF_TOKEN" }
    }
});

pusher = new Pusher(API_KEY, { cluster: "eu" });

pusher = new Pusher(API_KEY, { enabledTransports: ["ws"] });

pusher = new Pusher(API_KEY, { disabledTransports: ["sockjs"] });

// will only use WebSockets
pusher = new Pusher(API_KEY, {
    enabledTransports: ["ws", "xhr_streaming"],
    disabledTransports: ["xhr_streaming"]
});

//
// Connection
//

var socket: Pusher.Pusher;
var my_channel: Pusher.Channel;
var channels: Pusher.Channel[];

socket = new Pusher(API_KEY);

//
// Subscribing to channels
//

my_channel = socket.subscribe('my-channel');

my_channel = socket.subscribe('private-my-channel');

channels = socket.allChannels();
console.group('Pusher - subscribed to:');
for (var i = 0; i < channels.length; i++) {
    var channel = channels[i];
    console.log(channel.name);
}
console.groupEnd();

my_channel = socket.subscribe('my-channel');
socket.bind('new-comment',
    function(data: any) {
        // add comment into page
    }
);

var channel: Pusher.Channel;

var context = { title: 'Pusher' };
var handler = function(){
    console.log('My name is ' + this.title);
};
channel.bind('new-comment', handler, context);

channel.unbind('new-comment', handler); // removes just `handler` for the `new-comment` event
channel.unbind('new-comment'); // removes all handlers for the `new-comment` event
channel.unbind(null, handler); // removes `handler` for all events
channel.unbind(null, null, context); // removes all handlers for `context`
channel.unbind(); // removes all handlers on `channel`


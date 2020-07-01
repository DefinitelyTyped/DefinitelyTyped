import Pusher = require('pusher-js');
import { PresenceChannel } from "pusher-js";

var APP_KEY: string;
var pusher: Pusher.Pusher;

/*
 * samples from https://github.com/pusher/pusher-js
 */

//
// Global Configuration
//

Pusher.logToConsole = true;
Pusher.instances = [];

Pusher.log = (msg) => {
    console.log(msg);
};

//
// Configuration
//

pusher = new Pusher(APP_KEY, {
    authEndpoint: "http://example.com/pusher/auth"
});

console.assert(!!Pusher.instances.length, "Pusher.instances not filling with new instances");

pusher = new Pusher(APP_KEY, {
    auth: {
        params: { foo: "bar" },
        headers: { baz: "boo" }
    }
});

pusher = new Pusher(APP_KEY, {
    auth: {
        params: { foo: "bar" },
        headers: { "X-CSRF-Token": "SOME_CSRF_TOKEN" }
    }
});

pusher = new Pusher(APP_KEY, {
    authorizer: function(channel, options) {
        return {
        authorize: function(socketId, callback) {
            // Do some ajax to get the auth information
            var authInformation = {auth: "hash"};
            callback(false, authInformation);
        }
        };
    }
});

pusher = new Pusher(APP_KEY, { cluster: "eu" });

pusher = new Pusher(APP_KEY, { enabledTransports: ["ws"] });

pusher = new Pusher(APP_KEY, { disabledTransports: ["sockjs"] });

// will only use WebSockets
pusher = new Pusher(APP_KEY, {
    enabledTransports: ["ws", "xhr_streaming"],
    disabledTransports: ["xhr_streaming"]
});

//
// Connection
//

var socket: Pusher.Pusher;
var channel: Pusher.Channel;

socket = new Pusher(APP_KEY);

socket.disconnect();

//
// Subscribing to channels
//

channel = socket.subscribe('my-channel');

channel = socket.subscribe('private-my-channel');

socket.allChannels().forEach(channel => console.log(channel.name));

//
// Unsubscribing from channels
//

socket.unsubscribe('my-channel');

socket.unsubscribe('private-my-channel');

//
// Binding to events
//

channel.bind('new-message', function(data) {
    console.log(data.message);
});

channel.bind('my-event', function() {
    console.log(`hi ${this.name}`);
}, { name: 'Pusher' });

channel.unbind('new-comment', console.log);

channel.unbind('new-comment');

channel.unbind(null, console.log);

channel.unbind(null, null, context);

channel.unbind();

channel.bind_global(function(event, data) {
    console.log(`The event ${event} was triggered with data ${data}`);
});

channel.unbind_global(console.log);

channel.unbind_global();

channel.unbind_all();

//
// Connection Events
//

socket.connection.bind('connected', console.log);

//
//
// Samples from Pusher Documentation
//
//

//
// JavaScript Quick Start Guide
//

channel.bind('my-event', function(data: any) {
    alert('An event was triggered with message: ' + data.message);
});

//
// Client API Overview
//

var options: Pusher.Config;

var channelName: string;
var privateChannelName: string;
var presenceChannelName: string;
var add_member: (ctx: any, data?: any) => void;
var remove_member: (ctx: any, data?: any) => void;
var update_member_count: (ctx: any, data?: any) => void;
var eventName: string;
var callback: (ctx: any, data?: any) => void;
var applicationKey: string;
var log: (msg: string) => void;
var $: any;
var data: any;

// Connecting to Pusher

pusher = new Pusher(applicationKey, options);

options = {
    forceTLS: true, // true/false
    auth: {
        params: { // {key: value} pairs
            param1: 'value1',
            param2: 'value2'
        },
        headers: { // {key: value} pairs
            header1: 'value1',
            header2: 'value2'
        }
    }
};

pusher = new Pusher('app_key', {
    auth: {
        params: {
            CSRFToken: 'some_csrf_token'
        }
    }
});

pusher = new Pusher('app_key', {
    auth: {
        headers: {
            'X-CSRF-Token': 'some_csrf_token'
        }
    }
});

pusher = new Pusher('app_key', { cluster: 'eu' });

pusher = new Pusher('app_key', { forceTLS: true });

pusher = new Pusher('app_key');
pusher.connection.bind('error', function(err: any) {
    if (err.data.code === 4004) {
        log('>>> detected limit error');
    }
});

// Disconnecting from Pusher

pusher.disconnect();

// Connection States

pusher = new Pusher('YOUR_APP_KEY');

pusher.connection.bind('connected', function() {
    $('div#status').text('Real time is go!');
});

pusher.connection.bind('connecting_in', function(delay: any) {
    alert("I haven't been able to establish a connection for this feature.  " +
        "I will try again in " + delay + " seconds.");
});

pusher.connection.bind('state_change', function(states: any) {
    // states = {previous: 'oldState', current: 'newState'}
    $('div#status').text("Pusher's current state is " + states.current);
});

var connectionState: string = pusher.connection.state;

// Accessing channels

channel = pusher.channel(channelName);

// Public channels

channel = pusher.subscribe(channelName);

pusher.unsubscribe(channelName);

// Private channels

var privateChannel = pusher.subscribe(privateChannelName);

// Presence channels

var presenceChannel = pusher.subscribe(presenceChannelName) as Pusher.PresenceChannel<any>;

var count: number = presenceChannel.members.count;

presenceChannel.members.each(function(member) {
    var userId = member.id;
    var userInfo = member.info;
});

var some_user_id: string;
var user = presenceChannel.members.get(some_user_id);

var me = presenceChannel.members.me;

pusher = new Pusher('app_key');
presenceChannel = pusher.subscribe('presence-example') as Pusher.PresenceChannel<any>;
presenceChannel.bind('pusher:subscription_succeeded', function() {
    var me = presenceChannel.members.me;
    var userId = me.id;
    var userInfo = me.info;
});

channel = pusher.subscribe('presence-meeting-11');

channel.bind('pusher:subscription_succeeded', function(members: Pusher.Members<any>) {
    // for example
    update_member_count(members.count);

    members.each(function(member) {
        // for example:
        add_member(member.id, member.info);
    });
});

channel.bind('pusher:member_added', function(member: Pusher.Member<any>) {
    // for example:
    add_member(member.id, member.info);
});

channel.bind('pusher:member_removed', function(member: Pusher.Member<any>) {
    // for example:
    remove_member(member.id, member.info);
});

// Pusher Events

channel.bind(eventName, callback);

pusher = new Pusher('APP_KEY');
channel = pusher.subscribe('APPL');
channel.bind('new-price',
    function(data: any) {
        // add new price into the APPL widget
    }
);

var context = { title: 'Pusher' };
var handler = function() {
    console.log('My name is ' + this.title);
};
channel.bind('new-comment', handler, context);

pusher.bind(eventName, callback);

pusher = new Pusher('APP_KEY');
var channel1 = pusher.subscribe('test_channel_1');
var channel2 = pusher.subscribe('test_channel_2');
var channel3 = pusher.subscribe('test_channel_3');

var eventName = 'new-comment';
callback = function(data: any) {
    // add comment into page
};

// listen for 'new-comment' event on channel 1, 2 and 3
pusher.bind(eventName, callback);

// Unbinding from Events

channel.unbind(eventName, callback);

pusher = new Pusher('APP_KEY');
channel = pusher.subscribe('APPL');
callback = function(data: any) {};
channel.bind('new-price', callback);

channel.unbind('new-price', callback);

// Pusher channel events

channel.bind('pusher:subscription_succeeded', function() {
});

pusher = new Pusher('APP_KEY');
channel = pusher.subscribe('private-channel');
channel.bind('pusher:subscription_error', function(status: number) {
    if (status === 408 || status === 503) {
        // retry?
    }
});

// Triggering Client Events

var triggered = channel.trigger(eventName, data);
pusher = new Pusher('YOUR_APP_KEY');
channel = pusher.subscribe('private-channel');
channel.bind('pusher:subscription_succeeded', function() {
    var triggered = channel.trigger('client-someeventname', { your: data });
});

// Best practice when sending client events

var outputEl = document.getElementById('client_event_example_log');
var state: any = {
    currentX: 0,
    currentY: 0,
    lastX: undefined,
    lastY: undefined
};

pusher = new Pusher("YOUR_APP_KEY");
channel = pusher.subscribe("private-mousemoves");

// this method should be bound as a 'mousemove' event listener
document.body.addEventListener('mousemove', onMouseMove, false);
function onMouseMove(ev: any) {
    ev = ev || window.event;
    state.currentX = ev.pageX || ev.clientX;
    state.currentY = ev.pageY || ev.clientY;
}

setInterval(function() {
    if (state.currentX !== state.lastX || state.currentY !== state.lastY) {
        state.lastX = state.currentX;
        state.lastY = state.currentY;

        var text = document.createTextNode(
            'Triggering event due to state change: x: ' + state.currentX + ', y: ' + state.currentY
        );
        outputEl.replaceChild(text, outputEl.firstChild);

        channel.trigger("client-mouse-moved", {x: state.currentX, y: state.currentY});
    }
}, 300); // send every 300 milliseconds if position has changed

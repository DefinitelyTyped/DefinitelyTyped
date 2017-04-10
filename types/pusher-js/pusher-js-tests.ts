
import Pusher = require('pusher-js');
import { PresenceChannel } from "pusher-js";

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
var add_member: Function;
var remove_member: Function;
var update_member_count: Function;
var eventName: string;
var callback: Function;
var applicationKey: string;
var log: Function;
var $: any;
var data: any;

// Connecting to Pusher

pusher = new Pusher(applicationKey, options);

options = {
    encrypted: true, // true/false
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

pusher = new Pusher('app_key', { encrypted: true } );

pusher = new Pusher('app_key');
pusher.connection.bind( 'error', function( err: any ) {
    if( err.data.code === 4004 ) {
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
        "I will try again in " + delay + " seconds.")
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

var presenceChannel: PresenceChannel<any> = <any>pusher.subscribe(presenceChannelName);

var count: number = presenceChannel.members.count;

presenceChannel.members.each(function(member: Pusher.UserInfo<any>) {
    var userId = member.id;
    var userInfo = member.info;
});

var some_user_id: number;
var user = presenceChannel.members.get(some_user_id);

var me = presenceChannel.members.me;

pusher = new Pusher('app_key');
presenceChannel = <any>pusher.subscribe('presence-example');
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

channel.bind('pusher:member_added', function(member: Pusher.UserInfo<any>) {
    // for example:
    add_member(member.id, member.info);
});

channel.bind('pusher:member_removed', function(member: Pusher.UserInfo<any>) {
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
var handler = function(){
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
    if(status == 408 || status == 503){
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
function onMouseMove(ev: any){
    ev = ev || window.event;
    state.currentX = ev.pageX || ev.clientX;
    state.currentY = ev.pageY || ev.clientY;
}

setInterval(function(){
    if(state.currentX !== state.lastX || state.currentY !== state.lastY){
        state.lastX = state.currentX;
        state.lastY = state.currentY;

        var text = document.createTextNode(
            'Triggering event due to state change: x: ' + state.currentX + ', y: ' + state.currentY
        );
        outputEl.replaceChild( text, outputEl.firstChild );

        channel.trigger("client-mouse-moved", {x:state.currentX, y: state.currentY});
    }
}, 300); // send every 300 milliseconds if position has changed


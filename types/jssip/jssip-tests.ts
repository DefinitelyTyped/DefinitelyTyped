JsSIP.URI.parse("test");

var socket = new JsSIP.WebSocketInterface('ws://sip-ws.example.com');
socket.via_transport = "tcp";

var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:alice@example.com',
  password : 'superpassword'
};

var coolPhone = new JsSIP.UA(configuration);

coolPhone.on('connected', function(e){ /* Your code here */ });

coolPhone.on('disconnected', function(e){ /* Your code here */ });

coolPhone.on('newRTCSession', function(e){ /* Your code here */ });

coolPhone.on('newMessage', function(e){ /* Your code here */ });

coolPhone.on('registered', function(e){ /* Your code here */ });
coolPhone.on('unregistered', function(e){ /* Your code here */ });
coolPhone.on('registrationFailed', function(e){ /* Your code here */ });

coolPhone.start();

// Register callbacks to desired call events
var eventHandlers = {
  'progress': function(e: any) {
    console.log('call is in progress');
  },
  'failed': function(e: any) {
    console.log('call failed with cause: '+ e.data.cause);
  },
  'ended': function(e: any) {
    console.log('call ended with cause: '+ e.data.cause);
  },
  'confirmed': function(e: any) {
    console.log('call confirmed');
  }
};

var options = {
  'eventHandlers'    : eventHandlers,
  'mediaConstraints' : { 'audio': true, 'video': true }
};

var session = coolPhone.call('sip:bob@example.com', options);

var text = 'Hello Bob!';
coolPhone.sendMessage('sip:bob@example.com', text);
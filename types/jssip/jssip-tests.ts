JsSIP.URI.parse('test');

const socket = new JsSIP.WebSocketInterface('ws://sip-ws.example.com');
socket.via_transport = 'tcp';

const configuration = {
  sockets: [socket],
  uri: 'sip:alice@example.com',
  password: 'superpassword',
};

const coolPhone = new JsSIP.UA(configuration);

coolPhone.on('connected', (e: JsSIP.EventValue<JsSIP.UserAgentConnectedEvent>) => {
  console.log('Connected.');
});

coolPhone.on('disconnected', (e: JsSIP.EventValue<JsSIP.UserAgentDisconnectedEvent>) => {
  console.log('Disconnected');
});

coolPhone.on('newRTCSession', (e: JsSIP.EventValue<JsSIP.UserAgentNewRtcSessionEvent>) => {
  console.log('New Session');
});

coolPhone.on('newMessage', (e: JsSIP.EventValue<JsSIP.UserAgentNewMessageEvent>) => {
  console.log('New Message');
});

coolPhone.on('registered', (e: JsSIP.EventValue<JsSIP.UserAgentRegisteredEvent>) => {
  console.log('Rergistered.');
});
coolPhone.on('unregistered', (e: JsSIP.EventValue<JsSIP.UserAgentUnregisteredEvent>) => {
  console.log('Unregistered.');
});
coolPhone.on('registrationFailed', (e: JsSIP.EventValue<JsSIP.UserAgentRegistrationFailedEvent>) => {
  console.log('Registration failed');
});

coolPhone.start();

// Register callbacks to desired call events
const eventHandlers = {
  progress: (e: JsSIP.SessionProgressEvent) => {
    console.log('call is in progress');
  },
  failed: (e: JsSIP.EventValue<JsSIP.SessionFailedEvent>) => {
    console.log('call failed with cause: ' + e.data.cause);
  },
  ended: (e: JsSIP.EventValue<JsSIP.SessionEndedEvent>) => {
    console.log('call ended with cause: ' + e.data.cause);
  },
  confirmed: (e: JsSIP.EventValue<JsSIP.SessionConfirmedEvent>) => {
    console.log('call confirmed');
  },
};

const options = {
  eventHandlers,
  mediaConstraints: { audio: true, video: true },
};

const session = coolPhone.call('sip:bob@example.com', options);

const text = 'Hello Bob!';
coolPhone.sendMessage('sip:bob@example.com', text);

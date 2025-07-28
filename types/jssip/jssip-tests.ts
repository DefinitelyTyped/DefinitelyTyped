/// <reference types="jssip" />

// Create WebSocket interface
const socket = new JsSIP.WebSocketInterface('wss://sip.example.com');

// Configure the UA
const configuration: JsSIP.UAConfiguration = {
    sockets: [socket],
    uri: 'sip:alice@example.com',
    password: 'superpassword',
    display_name: 'Alice Smith'
};

// Create JsSIP User Agent
const ua = new JsSIP.UA(configuration);

// Start the UA
ua.start();

// Register callbacks to desired call events
const eventHandlers = {
    progress: (e: any): void => {
        console.log('call is in progress');
    },
    failed: (e: any): void => {
        console.log('call failed with cause: ' + e.data.cause);
    },
    ended: (e: any): void => {
        console.log('call ended with cause: ' + e.data.cause);
    },
    confirmed: (e: any): void => {
        console.log('call confirmed');
    }
};

const options: JsSIP.CallOptions = {
    eventHandlers,
    mediaConstraints: { audio: true, video: true }
};

// Make a call
const session = ua.call('sip:bob@example.com', options);

// Event listeners
ua.on('connected', () => {
    console.log('Connected to WebSocket');
});

ua.on('disconnected', () => {
    console.log('Disconnected from WebSocket');
});

ua.on('registered', () => {
    console.log('Registered to SIP server');
});

// Handle incoming call
ua.on('newRTCSession', (data: { session: JsSIP.RTCSession }) => {
    const session = data.session;

    if (session.direction === 'incoming') {
        session.answer({
            mediaConstraints: { audio: true, video: true }
        });
    }
});

// Send a message
ua.sendMessage('sip:bob@example.com', 'Hello Bob!');

// Test RTCSession methods
if (session.isInProgress()) {
    session.terminate();
}

if (session.isEstablished()) {
    session.sendDTMF('1234');
    session.hold();
    session.unhold();
}

// Test mute/unmute
session.mute({ audio: true, video: false });
const muteState = session.isMuted(); // { audio: true, video: false }
session.unmute({ audio: true, video: false }); 
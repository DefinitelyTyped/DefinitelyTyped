/// <reference path="sipml.d.ts" />

/* Code borrowed from http://sipml5.org/docgen/index.html?svn=224 */

var acceptMessage = (e: any)=> {
    e.newSession.accept(); // e.newSession.reject(); to reject the message
    console.info('SMS-content = ' + e.getContentString() + ' and SMS-content-type = ' + e.getContentType());
};
var acceptCall = (e:any)=> {
    e.newSession.accept(); // e.newSession.reject() to reject the call
};

 /* Initialize the engine */
var readyCallback = (e:any)=> {
    createSipStack(); // see next section
};
var errorCallback = (e:any)=> {
    console.error('Failed to initialize the engine: ' + e.message);
}
SIPml.init(readyCallback, errorCallback);

/* Create a SIP stack */
var sipStack: SIPml.Stack;
var eventsListener = (e:any)=> {
    if(e.type == 'started'){
        login();
    }
    else if(e.type == 'i_new_message'){ // incoming new SIP MESSAGE (SMS-like)
        acceptMessage(e);
    }
    else if(e.type == 'i_new_call'){ // incoming audio/video call
        acceptCall(e);
    }
}

function createSipStack(){
    sipStack = new SIPml.Stack('blaat');
    sipStack = new SIPml.Stack({
            realm: 'example.org', // mandatory: domain name
            impi: 'bob', // mandatory: authorization name (IMS Private Identity)
            impu: 'sip:bob@example.org', // mandatory: valid SIP Uri (IMS Public Identity)
            password: 'mysecret', // optional
            display_name: 'Bob legend', // optional
            websocket_proxy_url: 'wss://sipml5.org:10062', // optional
            outbound_proxy_url: 'udp://example.org:5060', // optional
            enable_rtcweb_breaker: false, // optional
            events_listener: { events: '*', listener: eventsListener }, // optional: '*' means all events
            sip_headers: [ // optional
                    { name: 'User-Agent', value: 'IM-client/OMA1.0 sipML5-v1.0.0.0' },
                    { name: 'Organization', value: 'Doubango Telecom' }
            ]
        }
    );
}
sipStack.start();

/* Register/login */
var registerSession: SIPml.Session.Registration;
var eventsListener = (e:any)=>{
    console.info('session event = ' + e.type);
    if(e.type == 'connected' && e.session == registerSession){
        makeCall();
        sendMessage();
        publishPresence();
        subscribePresence('johndoe'); // watch johndoe's presence status change
    }
}
var login = ()=>{
    registerSession = <SIPml.Session.Registration>sipStack.newSession('register', {
        events_listener: { events: '*', listener: eventsListener } // optional: '*' means all events
    });
    registerSession.register();
}

/* Making/receiving audio/video call */
var callSession: SIPml.Session.Call;
var eventsListener = (e:any)=>{
    console.info('session event = ' + e.type);
}
var makeCall = ()=>{
    callSession = <SIPml.Session.Call>sipStack.newSession('call-audiovideo', {
        video_local: document.getElementById('video-local'),
        video_remote: document.getElementById('video-remote'),
        audio_remote: document.getElementById('audio-remote'),
        events_listener: { events: '*', listener: eventsListener } // optional: '*' means all events
    });
    callSession.call('johndoe');
}
var acceptCall = (e:any)=>{
    e.newSession.accept(); // e.newSession.reject() to reject the call
}

/* Send/receive SIP MESSAGE (SMS-like) */
var messageSession: SIPml.Session.Message;
var eventsListener = (e:any)=>{
    console.info('session event = ' + e.type);
}
var sendMessage = ()=>{
    messageSession = <SIPml.Session.Message>sipStack.newSession('message', {
        events_listener: { events: '*', listener: eventsListener } // optional: '*' means all events
    });
    messageSession.send('johndoe', 'Pêche à la moule', 'text/plain;charset=utf-8');
}

/* Publish presence status */
var publishSession: SIPml.Session.Publish;
var eventsListener = (e:any)=>{
    console.info('session event = ' + e.type);
}
var publishPresence = ()=>{
    publishSession = <SIPml.Session.Publish>sipStack.newSession('publish', {
        events_listener: { events: '*', listener: eventsListener } // optional: '*' means all events
    });                
    var contentType = 'application/pidf+xml';
    var content = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n' +
                    '<presence xmlns=\"urn:ietf:params:xml:ns:pidf\"\n' +
                        ' xmlns:im=\"urn:ietf:params:xml:ns:pidf:im\"' +
                      ' entity=\"sip:bob@example.com\">\n' +
                        '<tuple id=\"s8794\">\n' +
                        '<status>\n'+
                        '   <basic>open</basic>\n' +
                        '   <im:im>away</im:im>\n' +
                        '</status>\n' +
                        '<contact priority=\"0.8\">tel:+33600000000</contact>\n' +
                        '<note  xml:lang=\"fr\">Bonjour de Paris :)</note>\n' +
                        '</tuple>\n' +
                    '</presence>';

    // send the PUBLISH request
    publishSession.publish(content, contentType,{
        expires: 200,
        sip_caps: [
                        { name: '+g.oma.sip-im' },
                        { name: '+sip.ice' },
                        { name: 'language', value: '\"en,fr\"' }
                  ],
        sip_headers: [
                        { name: 'Event', value: 'presence' },
                        { name: 'Organization', value: 'Doubango Telecom' }
                     ]
    });
}

/* Subscribe for presence status */
var subscribeSession: SIPml.Session.Subscribe;
var eventsListener = (e:any)=>{
    console.info('session event = ' + e.type);
    if(e.type == 'i_notify'){
        console.info('NOTIFY content = ' + e.getContentString());
        console.info('NOTIFY content-type = ' + e.getContentType());
    }
}
var subscribePresence = (to:string)=>{
    subscribeSession = <SIPml.Session.Subscribe>sipStack.newSession('subscribe', {
                expires: 200,
                events_listener: { events: '*', listener: eventsListener },
                sip_headers: [
                              { name: 'Event', value: 'presence' }, // only notify for 'presence' events
                              { name: 'Accept', value: 'application/pidf+xml' } // supported content types (COMMA-sparated)
                    ],
                sip_caps: [
                            { name: '+g.oma.sip-im', value: null },
                            { name: '+audio', value: null },
                            { name: 'language', value: '\"en,fr\"' }
                    ]
            });
    // start watching for entity's presence status (You may track event type 'connected' to be sure that the request has been accepted by the server)
    subscribeSession.subscribe(to);
}

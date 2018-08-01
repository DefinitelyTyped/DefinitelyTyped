import * as SIP from 'sip.js';

let ua: SIP.UA = new SIP.UA();

const mediaHandler = (session: SIP.Session, options: SIP.WebRTC.Options) => new SIP.WebRTC.MediaHandler();
const logConnector = (level: string, category: string, label: string, content: string) => null;

const uaWithConfig: SIP.UA = new SIP.UA({
    uri: "wss://uri",
    wsServers: ["s1", "s2", { ws_uri: "s3", weight: 1 }],
    allowLegacyNotifications: true,
    authenticationFactory: mediaHandler,
    authorizationUser: "user",
    autostart: true,
    autostop: false,
    connectionRecoveryMaxInterval: 1,
    connectionRecoveryMinInterval: 1,
    displayName: "name",
    hackCleanJitsiSdpImageattr: true,
    hackStripTcp: true,
    hackIpInContact: true,
    hackViaTcp: true,
    hackWssInTransport: true,
    iceCheckingTimeout: 1,
    instanceId: "id",
    log: {
        builtinEnabled: true,
        level: 1,
        connector: logConnector
    },
    mediaHandlerFactory: mediaHandler,
    noAnswerTimeout: 1,
    password: "",
    register: true,
    registerExpires: 1,
    registrarServer: "sip:registrar.mydomain.com",
    rel100: "",
    replaces: "",
    stunServers: ["", ""],
    turnServers: [
        {
            password: "",
            username: "",
            urls: ["", ""]
        }
    ],
    usePreloadedRoute: true,
    userAgentString: "",
    wsServerMaxReconnection: 1,
    wsServerReconnectionTimeout: 1
});

ua.start();
ua.stop();

ua.register();
ua = ua.register({ extraHeaders: [""] });

ua.unregister();
ua.unregister({ extraHeaders: [""], all: true });

const isConnected: boolean = ua.isConnected();
const isRegistered: boolean = ua.isRegistered();

const message: SIP.Message = ua.message("", "", { contentType: "" });

ua.subscribe("", "", { expires: 1, extraHeaders: [""] });
const subscription: SIP.Subscription = ua.subscribe(new SIP.URI(), "", { expires: 1, extraHeaders: [""] });

let session = ua.invite("", new HTMLVideoElement());

const inviteOptions: SIP.InviteOptions = {
    media: {
        constraints: { audio: true, video: false },
        stream: new MediaStream(),
        render: { remote: new Element(), local: new Element() },
    },
    anonymous: true,
    rel100: "",
    inviteWithoutSdp: true,
    RTCConstraints: {}
};

session = ua.invite("", inviteOptions);

ua.on('connected', (args: SIP.UA.EventArgs.ConnectedArgs) => { });
ua.on('disconnected', () => { });
ua.on('registered', () => { });
ua.on('unregistered', (args: SIP.UA.EventArgs.UnregisteredArgs) => { });
ua.on('registrationFailed', (args: SIP.UA.EventArgs.RegistrationFailedArgs) => { });
ua.on('invite', (session: SIP.Session) => {
    session.on('progress', (response) => {});
    session.on('accepted', (response) => {});
    session.on('rejected', (response) => {});
});
ua.on('message', (message: SIP.Message) => { });

session.hold({
    extraHeaders: [""],
    eventHandlers: {
        succeeded: () => {}
    }
});

ua.start().stop();

declare var sip: SIP;

let ua: sipjs.UA = new sip.UA();

const mediaHandler = (session: sipjs.Session, options: sipjs.WebRTC.Options) => new sipjs.WebRTC.MediaHandler();
const logConnector = (level: string, category: string, label: string, content: string) => null;

const uaWithConfig: sipjs.UA = new sip.UA({
    uri: "wss://uri",
    wsServers: ["s1", "s2"],
    allowLegacyNotifications: true,
    authenticationFactory: mediaHandler,
    authorizationUser: "user",
    autostart: true,
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

const message: sipjs.Message = ua.message("", "", { contentType: "" });

ua.subscribe("", "", { expires: 1, extraHeaders: [""] });
const subscription: sipjs.Subscription = ua.subscribe(new sip.URI(), "", { expires: 1, extraHeaders: [""] });

let session = ua.invite("", new HTMLVideoElement());

const inviteOptions: sipjs.InviteOptions = {
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

ua.on('connected', (args: sipjs.UA.EventArgs.ConnectedArgs) => { });
ua.on('disconnected', () => { });
ua.on('registered', () => { });
ua.on('unregistered', (args: sipjs.UA.EventArgs.UnregisteredArgs) => { });
ua.on('registrationFailed', (args: sipjs.UA.EventArgs.RegistrationFailedArgs) => { });
ua.on('invite', (session: sipjs.Session) => {
    session.on('progress', (response) => {});
    session.on('accepted', (response) => {});
    session.on('rejected', (response) => {});
});
ua.on('message', (message: sipjs.Message) => { });

// Type definitions for freedom v0.6.26
// Project: https://github.com/freedomjs/freedom
// Definitions by: Jonathan Pevarnek <https://github.com/jpevarnek/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts"/>

declare module freedom {
    // Common on/emit for message passing interfaces.
    interface EventDispatchFn<T> { (eventType: string, value?: T): void; }
    interface EventHandlerFn<T> {
        (eventType: string, handler: (eventData:T) => void): void;
    }

    interface Error {
        errcode: string;
        message: string;
    }

    // TODO: replace OnAndEmit with EventHandler and EventEmitter;
    interface OnAndEmit<T,T2> {
        on: EventHandlerFn<T>;
        emit: EventDispatchFn<T2>;
    }

    interface EventHandler {
        // Adds |f| as an event handler for all subsiquent events of type |t|.
        on(t: string, f: Function): void;
        // Adds |f| as an event handler for only the next event of type |t|.
        once(t: string, f: Function): void;
        // The |off| function removes the event event handling function |f| from
        // both |on| and the |once| event handling.
        off(t: string, f: Function): void;
    }

    interface PortModule<T, T2> extends OnAndEmit<T, T2> {
        controlChannel: string;
    }

    interface ModuleSelfConstructor {
        // Identifies a named API's provider class.
        provideSynchronous: (classFn?: Function) => void;
        provideAsynchronous :(classFn?: Function) => void;
        providePromises: (classFn?: Function) => void;
    }

    interface ParentModuleThing extends ModuleSelfConstructor, OnAndEmit<any, any> {
    }

    interface Logger {
        debug(...args: any[]): void;
        info(...args: any[]): void;
        log(...args: any[]): void;
        warn(...args: any[]): void;
        error(...args: any[]): void;
    }

    // See |Core_unprivileged| in |core.unprivileged.js|
    interface Core {
        // Create a new channel which which to communicate between modules.
        createChannel(): Promise<ChannelSpecifier>;
        // Given an ChannelEndpointIdentifier for a channel, create a proxy event
        // interface for it.
        bindChannel(channelIdentifier: string): Promise<Channel>;
        // Returns the list of identifiers describing the dependency path.
        getId(): Promise<string[]>;
        getLogger(tag: string): Promise<Logger>;
    }

    // Channels are ways that freedom modules can send each other messages.
    interface Channel extends OnAndEmit<any,any> {
        close(): void;
    }

    // Specification for a channel.
    interface ChannelSpecifier {
        channel: Channel;  // How to communicate over this channel.
         // A freedom channel endpoint identifier. Can be passed over a freedom
         // message-passing boundary.  It is used to create a channel to the freedom
         // module that called createChannel and created this ChannelSpecifier.
         identifier: string;
    }

    // This is the first argument given to a core provider's constructor. It is an
    // object that describes the parent module the core provider instance has been
    // created for.
    interface CoreProviderParentApp {
        manifestId: string;
        config: {
            views: {[viewName: string]: Object};
        };
        global: {
            removeEventListener: (s: string, f: Function, b: boolean) => void;
        };
    }

    // A Freedom module sub is both a function and an object with members. The
    // type |T| is the type of the module's stub interface.
    interface FreedomModuleFactoryManager<T> {
        // This is the factory constructor for a new instance of a stub/channel to a
        // module.
        (...args: any[]): T;
        // This is the call to close a particular stub's channel and resources. It
        // is assumed that the argument is a result of the factory constructor. If
        // no argument is supplied, all stubs are closed.
        close: (freedomModuleStubInstance?: T) => Promise<void>;
        api: string;
    }

    interface FreedomInCoreEnvOptions {
        debug?: string;  // debug level
        logger?: string;  // string to json for logging provider.
    }

    interface FreedomInCoreEnv extends OnAndEmit<any,any> {
        // Represents the call to freedom when you create a root module. Returns a
        // promise to a factory constructor for the freedom module. The
        // |manifestPath| should be a path to a json string that specifies the
        // freedom module.
        (manifestPath: string, options?: FreedomInCoreEnvOptions):
                Promise<FreedomModuleFactoryManager<any>>;
    }

    interface FreedomInModuleEnv {
        // Represents the call to freedom(), which returns the parent module's
        // freedom stub interface in an on/emit style. This is a getter.
        (): ParentModuleThing;

        // Creates an interface to the freedom core provider which can be used to
        // create loggers and channels.
        // Note: unlike other providers, core is a getter.
        'core': FreedomModuleFactoryManager<Core>;
        'core.console': FreedomModuleFactoryManager<Console.Console>;
        'core.rtcdatachannel': FreedomModuleFactoryManager<RTCDataChannel.RTCDataChannel>;
        'core.rtcpeerconnection': FreedomModuleFactoryManager<RTCPeerConnection.RTCPeerConnection>;
        'core.storage': FreedomModuleFactoryManager<Storage.Storage>;
        'core.tcpsocket': FreedomModuleFactoryManager<TcpSocket.Socket>;
        'core.udpsocket': FreedomModuleFactoryManager<UdpSocket.Socket>;
        'pgp': FreedomModuleFactoryManager<PgpProvider.PgpProvider>;
        'portControl': FreedomModuleFactoryManager<PortControl.PortControl>;

        // We use this specification so that you can reference freedom sub-modules by
        // an array-lookup of its name. One day, maybe we'll have a nicer way to do
        // this.
        [moduleName: string]: FreedomModuleFactoryManager<any>;
    }

    // This generic interface represents any freedom method. Its purpose is to extend
    // the basic definition to include the reckless call method, which does not
    // produce a reply message.
    interface Method0<R> {
        (): Promise<R>;
        reckless: () => void;
    }
    interface Method1<T, R> {
        (a: T): Promise<R>;
        reckless: (a: T) => void;
    }
    interface Method2<T, U, R> {
        (a: T, b: U) : Promise<R>;
        reckless: (a: T, b: U) => void;
    }
    interface Method3<T, U, V, R> {
        (a: T, b: U, c: V): Promise<R>;
        reckless: (a: T, b: U, c: V) => void;
    }
}

declare module freedom.Console {
    interface Console {
        log(source: string, message: string): Promise<void>;
        debug(source: string, message: string): Promise<void>;
        info(source: string, message: string): Promise<void>;
        warn(source: string, message: string): Promise<void>;
        error(source: string, message: string): Promise<void>;
    }
}

declare module freedom.RTCDataChannel {
    interface Message {
        // Exactly one of the below must be specified.
        text?: string;
        buffer?: ArrayBuffer;
        binary?: Blob;  // Not yet supported in Chrome.
    }

    // Constructed by |freedom['rtcdatachannel'](id)| where |id| is a string
    // representing the channel id created by an |rtcpeerconnection| object.
    interface RTCDataChannel {
        getLabel(): Promise<string>;
        getOrdered(): Promise<boolean>;
        getMaxPacketLifeTime(): Promise<number>;
        getMaxRetransmits(): Promise<number>;
        getProtocol(): Promise<string>;
        getNegotiated(): Promise<boolean>;
        getId(): Promise<number>;
        getReadyState(): Promise<string>;
        getBufferedAmount(): Promise<number>;

        on(t: 'onopen', f: () => void): void;
        on(t: 'onerror', f: () => void): void;
        on(t: 'onclose', f: () => void): void;
        on(t: 'onmessage', f: (m: Message) => void): void;
        on(t: string, f: Function): void;

        close(): Promise<void>;
        getBinaryType(): Promise<string>;
        setBinaryType(type: string): Promise<void>;
        send: freedom.Method1<string, void>;
        sendBuffer: freedom.Method1<ArrayBuffer, void>;
    }
}

declare module freedom.RTCPeerConnection {
    interface RTCIceServer {
        urls: string[];
        username?: string;
        credential?: string;
    }

    interface RTCConfiguration {
        iceServers: RTCIceServer[];
        iceTransports?: string;
        peerIdentity?: string;
    }

    interface RTCOfferOptions {
        offerToReceiveVideo?: number;
        offerToReceiveAudio?: number;
        voiceActivityDetection?: boolean;
        iceRestart?: boolean;
    }

    interface RTCSessionDescription {
        type: string;
        sdp: string;
    }

    interface RTCIceCandidate {
        candidate: string;
        sdpMid?: string;
        sdpMLineIndex?: number;
    }

    interface OnIceCandidateEvent {
        candidate: RTCIceCandidate
    }

    interface RTCDataChannelInit {
        ordered?: boolean;
        maxPacketLifeTime?: number;
        maxRetransmits?: number;
        protocol?: string;
        negotiated?: boolean;
        id?: number;
    }

    // Note: the freedom factory constructor
    // |freedom['rtcpeerconnection'](config)| to create an RTCPeerConnection has
    // |RTCConfiguration| as the type of its config its argument.
    interface RTCPeerConnection {
        createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescription>;
        createAnswer(): Promise<RTCSessionDescription>;

        setLocalDescription(desc: RTCSessionDescription): Promise<void>;
        getLocalDescription(): Promise<RTCSessionDescription>;
        setRemoteDescription(desc: RTCSessionDescription): Promise<void>;
        getRemoteDescription(): Promise<RTCSessionDescription>;

        getSignalingState(): Promise<string>;

        updateIce(configuration: RTCConfiguration): Promise<void>;

        addIceCandidate(candidate: RTCIceCandidate): Promise<void>;

        getIceGatheringState(): Promise<string>;
        getIceConnectionState(): Promise<string>;

        getConfiguration(): Promise<RTCConfiguration>;

        getLocalStreams(): Promise<string[]>;
        getRemoteStreams(): Promise<string[]>;
        getStreamById(id: string): Promise<string>;
        addStream(ref: string): Promise<void>;
        removeStream(ref: string): Promise<void>;

        close(): Promise<void>;

        createDataChannel(label: string, init: RTCDataChannelInit): Promise<string>;

        getStats(selector?: string): Promise<any>;

        on(t: 'ondatachannel', f: (d: {channel: string}) => void): void;
        on(t: 'onnegotiationneeded', f: () => void): void;
        on(t: 'onicecandidate', f: (d: OnIceCandidateEvent) => void): void;
        on(t: 'onsignalingstatechange', f: () => void): void;
        on(t: 'onaddstream', f: (d: {stream: number}) => void): void;
        on(t: 'onremovestream', f: (d: {stream: number}) => void): void;
        on(t: 'oniceconnectionstatechange', f: () => void): void;
        on(t: string, f: Function): void;
    }
}

declare module freedom.Storage {
    interface Storage {
        // Fetch array of all keys.
        keys(): Promise<string[]>;
        // Fetch a value for a key.
        get(key: string): Promise<string>;
        // Sets a value to a key. Fulfills promise with the previous value, if it
        // exists.
        set(key: string, value: string): Promise<string>;
        // Remove a single key. Fulfills promise with previous value, if exists.
        remove(key: string): Promise<string>;
        // Remove all data from storage.
        clear(): Promise<void>;
    }  // class Storage
}

declare module freedom.TcpSocket {
    interface DisconnectInfo {
        errcode: string;
        message: string;
    }

    interface ReadInfo {
        data: ArrayBuffer;
    }

    interface WriteInfo {
        bytesWritten: number;
    }

    interface SocketInfo {
        connected: boolean;
        localAddress?: string;
        localPort?: number;
        peerAddress?: string;
        peerPort?: number;
    }

    interface ConnectInfo {
        socket: number;
        host: string;
        port: number;
    }

    // The TcpSocket class (freedom['core.TcpSocket'])
    interface Socket {
        listen(address: string, port: number): Promise<void>;
        connect(hostname: string, port: number): Promise<void>;
        secure(): Promise<void>;
        write: freedom.Method1<ArrayBuffer, WriteInfo>;
        pause: freedom.Method0<void>;
        resume: freedom.Method0<void>;
        getInfo(): Promise<SocketInfo>;
        close(): Promise<void>;
        // TcpSockets have 3 types of events:
        on(type: 'onConnection', f: (i: ConnectInfo) => void): void;
        on(type: 'onData', f: (i:ReadInfo) => void): void;
        off(type: 'onData', f: (i: ReadInfo) => void): void;
        on(type: 'onDisconnect', f: (i: DisconnectInfo) => void): void;
        on(eventType: string, f: (i: Object) => void): void;
        off(eventType: string, f: (i: Object) => void): void;
    }
}

declare module freedom.UdpSocket {
    // Type for the chrome.socket.getInfo callback:
    //   https://developer.chrome.com/apps/sockets_udp#type-SocketInfo
    // This is also the type returned by getInfo().
    interface SocketInfo {
        // Note that there are other fields but these are the ones we care about.
        localAddress: string;
        localPort: number;
    }

    // Type for the chrome.socket.recvFrom callback:
    //   http://developer.chrome.com/apps/socket#method-recvFrom
    // This is also the type returned to onData callbacks.
    interface RecvFromInfo {
        resultCode: number;
        address: string;
        port: number;
        data: ArrayBuffer;
    }

    interface Implementation {
        bind(address: string, port: number, continuation: () => void) : void;
        sendTo(data: ArrayBuffer, address: string, port: number,
               continuation: (bytesWritten: number) => void): void;
        destroy(continuation: () => void): void;
        getInfo(continuation: (socketInfo: SocketInfo) => void): void;
    }

    interface Socket {
        bind: (address: string, port: number) => Promise<void>;
        sendTo: freedom.Method3<ArrayBuffer, string, number, number>;
        destroy: () => Promise<void>;
        on: (name: string, listener: Function) => void;
        getInfo: () => Promise<SocketInfo>;
    }
}

declare module freedom.PgpProvider {
    interface PublicKey {
        key: string;
        fingerprint: string;
        words: string[];
    }

    interface KeyFingerprint {
        fingerprint: string;
        words: string[];
    }

    interface VerifyDecryptResult {
        data: ArrayBuffer;
        signedBy: string[];
    }

    interface PgpProvider {
        // Standard freedom crypto API
        setup(passphrase: string, userid: string): Promise<void>;
        clear(): Promise<void>;
        exportKey(): Promise<PublicKey>;
        getFingerprint(publicKey: string): Promise<KeyFingerprint>;
        signEncrypt(data: ArrayBuffer, encryptKey?: string,
                    sign?: boolean): Promise<ArrayBuffer>;
        verifyDecrypt(data: ArrayBuffer,
                      verifyKey?: string): Promise<VerifyDecryptResult>;
        armor(data: ArrayBuffer, type?: string): Promise<string>;
        dearmor(data: string): Promise<ArrayBuffer>;
    }
}

declare module freedom.PortControl {
    interface Mapping {
        internalIp: string;
        internalPort: number;
        externalIp?: string;
        externalPort: number;
        lifetime: number;
        protocol: string;
        timeoutId?: number;
        nonce?: number[];
        errInfo?: string;
    }

    // A collection of Mappings
    interface ActiveMappings {
        [extPort: string]: Mapping;
    }

    // An object returned by probeProtocolSupport()
    interface ProtocolSupport {
        natPmp: boolean;
        pcp: boolean;
        upnp: boolean;
    }

    // Main interface for the module
    interface PortControl {
        addMapping(intPort: number, extPort: number, lifetime: number): Promise<Mapping>;
        deleteMapping(extPort: number): Promise<boolean>;
        probeProtocolSupport(): Promise<ProtocolSupport>;

        probePmpSupport(): Promise<boolean>;
        addMappingPmp(intPort: number, extPort: number, lifetime: number): Promise<Mapping>;
        deleteMappingPmp(extPort: number): Promise<boolean>;

        probePcpSupport(): Promise<boolean>;
        addMappingPcp(intPort: number, extPort: number, lifetime: number): Promise<Mapping>;
        deleteMappingPcp(extPort: number): Promise<boolean>;

        probeUpnpSupport(): Promise<boolean>;
        addMappingUpnp(intPort: number, extPort: number, lifetime: number,
                controlUrl?: string): Promise<Mapping>;
        deleteMappingUpnp(extPort: number): Promise<boolean>;

        getActiveMappings(): Promise<ActiveMappings>;
        getPrivateIps(): Promise<string[]>;
        close(): Promise<void>;
    }
}

declare module freedom.Social {
    // Status of a client connected to a social network.
    interface ClientState {
        userId: string;
        clientId: string;
        status: string;  // Either ONLINE, OFFLINE, or ONLINE_WITH_OTHER_APP
        timestamp: number;
    }

    // The profile of a user on a social network.
    interface UserProfile {
        userId: string;
        name: string;
        url?: string;
        // Image URI (e.g. data:image/png;base64,adkwe329...)
        imageData?: string;
        timestamp?: number;
    }

    interface Users {
        [userId: string]: UserProfile;
    }

    interface Clients {
        [clientId: string]: ClientState;
    }

    // Event for an incoming messages
    interface IncomingMessage {
        // UserID/ClientID/status of user from whom the message comes from.
        from: ClientState;
        // Message contents.
        message: string;
    }

    // A request to login to a specific network as a specific agent
    interface LoginRequest {
        // Name of the application connecting to the network. Other logins with
        // the same agent field will be listed as having status |ONLINE|, where
        // those with different agents will be listed as
        // |ONLINE_WITH_OTHER_CLIENT|
        agent: string;
        // Version of application
        version: string;
        // URL of application
        url: string;
        // When |interactive === true| social will always prompt user for login.
        // Promise fails if the user did not login or provided invalid
        // credentials. When |interactive === false|, promise fails unless the
        // social provider has  cached tokens/credentials.
        interactive: boolean;
        // When true, social provider will remember the token/credentials.
        rememberLogin: boolean;
    }

    interface Social {
        // Generic Freedom Event stuff. |on| binds an event handler to event type
        // |eventType|. Every time |eventType|  event is raised, the function |f|
        // will be called.
        //
        // Message type |onMessage| happens when the user receives a message from
        // another contact.
        on(eventType: string, f: Function) : void;
        on(eventType: 'onMessage', f: (message: IncomingMessage) => void): void;
        // Message type |onRosterProfile| events are received when another user's
        // profile is received or when a client changes status.
        on(eventType: 'onUserProfile', f: (profile: UserProfile) => void): void;
        // Message type |onMyStatus| is received when the user's client's status
        // changes, e.g. when disconnected and online status becomes offline.
        on(eventType: 'onClientState', f: (status: ClientState) => void): void;

        // Do a singleton event binding: |f| will only be called once, on the next
        // event of type |eventType|. Same events as above.
        once(eventType: string, f: Function): void;

        login(loginRequest: LoginRequest): Promise<ClientState>;
        getUsers(): Promise<Users>;
        getClients(): Promise<Clients>;

        // Send a message to user on your network
        // If the message is sent to a userId, it is sent to all clients
        // If the message is sent to a clientId, it is sent to just that one client
        // If the destination id is not specified or invalid, promise rejects.
        sendMessage(destinationId: string, message: string): Promise<void>;

        // Logs the user out of the social network. After the logout promise, the
        // user status is OFFLINE.
        logout(): Promise<void>;

        // Forget any tokens/credentials used for logging in with the last used
        // userId.
        clearCachedCredentials(): Promise<void>;
    }
} // declare module Social

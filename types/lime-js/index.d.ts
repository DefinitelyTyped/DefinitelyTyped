// Type definitions for lime-js 0.0.4
// Project: https://github.com/takenet/lime-js
// Definitions by: Arthur Xavier <https://github.com/arthur-xavier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Support for painless dependency injection
export as namespace Lime;

// Support AMD require
export = Lime;

declare namespace Lime {

    interface Envelope {
        id?: string;
        from?: string;
        to?: string;
        pp?: string;
        metadata?: any;
    }
    interface Reason {
        code: number;
        description?: string;
    }

    interface Message extends Envelope {
        type: string;
        content: any;
    }

    interface Notification extends Envelope {
        event: string;
        reason?: Reason;
    }
    class NotificationEvent {
        static accepted: string;
        static validated: string;
        static authorized: string;
        static dispatched: string;
        static received: string;
        static consumed: string;
    }

    interface Command extends Envelope {
        uri?: string;
        type?: string;
        resource?: any;
        method: string;
        status?: string;
        reason?: Reason;
    }
    class CommandMethod {
        static get: string;
        static set: string;
        static delete: string;
        static observe: string;
        static subscribe: string;
    }
    class CommandStatus {
        static success: string;
        static failure: string;
    }

    interface Session extends Envelope {
        state: string;
        encryptionOptions?: string[];
        encryption?: string;
        compressionOptions?: string[];
        compression?: string;
        scheme?: string;
        authentication?: any;
        reason?: Reason;
    }
    class SessionState {
        static new: string;
        static negotiating: string;
        static authenticating: string;
        static established: string;
        static finishing: string;
        static finished: string;
        static failed: string;
    }
    class SessionEncryption {
        static none: string;
        static tls: string;
    }
    class SessionCompression {
        static none: string;
        static gzip: string;
    }

    class Authentication {
        scheme: string;
        static guest: string;
        static plain: string;
        static transport: string;
        static key: string;
    }
    class GuestAuthentication extends Authentication {
        scheme: string;
    }
    class TransportAuthentication extends Authentication {
        scheme: string;
    }
    class PlainAuthentication extends Authentication {
        scheme: string;
        password: string;
    }
    class KeyAuthentication extends Authentication {
        scheme: string;
        key: string;
    }

    class Channel {
        constructor(transport: Transport, autoReplyPings: boolean, autoNotifyReceipt: boolean);
        sendMessage(message: Message): void;
        onMessage(message: Message): void;
        sendCommand(command: Command): void;
        onCommand(command: Command): void;
        sendNotification(notification: Notification): void;
        onNotification(notification: Notification): void;
        sendSession(session: Session): void;
        onSession(session: Session): void;
        transport: Transport;
        remoteNode: string;
        localNode: string;
        sessionId: string;
        state: string;
    }

    class ClientChannel extends Channel {
        constructor(transport: Transport, autoReplyPings?: boolean, autoNotifyReceipt?: boolean);
        startNewSession(): void;
        negotiateSession(sessionCompression: string, sessionEncryption: string): void;
        authenticateSession(identity: string, authentication: Authentication, instance: string): void;
        sendFinishingSession(): void;
        onSessionNegotiating(session: Session): void;
        onSessionAuthenticating(session: Session): void;
        onSessionEstablished(session: Session): void;
        onSessionFinished(session: Session): void;
        onSessionFailed(session: Session): void;
    }

    class ClientChannelExtensions {
        static establishSession(clientChannel: ClientChannel, compression: string, encryption: string, identity: string, authentication: Authentication, instance: string, callback: (error: Error, session: Session) => any): void;
    }

    interface IMessageChannel {
        sendMessage(message: Message): void;
        onMessage: (message: Message) => any;
    }
    interface ICommandChannel {
        sendCommand(command: Command): void;
        onCommand: (command: Command) => any;
    }
    interface INotificationChannel {
        sendNotification(notification: Notification): void;
        onNotification: (notification: Notification) => any;
    }
    interface ISessionChannel {
        sendSession(session: Session): void;
        onSession: (session: Session) => any;
    }
    interface ISessionListener {
        (session: Session): void;
    }

    interface Transport extends ITransportStateListener {
        send(envelope: Envelope): void;
        onEnvelope: (envelope: Envelope) => any;
        open(uri: string): void;
        close(): void;
        getSupportedCompression(): string[];
        setCompression(compression: string): void;
        compression: string;
        getSupportedEncryption(): string[];
        setEncryption(encryption: string): void;
        encryption: string;
    }
    interface ITransportEnvelopeListener {
        (envelope: Envelope): void;
    }
    interface ITransportStateListener {
        onOpen: () => void;
        onClose: () => void;
        onError: (error: string) => void;
    }

    class WebSocketTransport implements Transport {
        webSocket: WebSocket;
        constructor(traceEnabled?: boolean);
        send(envelope: Envelope): void;
        onEnvelope(envelope: Envelope): void;
        open(uri: string): void;
        close(): void;
        getSupportedCompression(): string[];
        setCompression(compression: string): void;
        compression: string;
        getSupportedEncryption(): string[];
        setEncryption(encryption: string): void;
        encryption: string;
        onOpen(): void;
        onClose(): void;
        onError(error: string): void;
    }
}

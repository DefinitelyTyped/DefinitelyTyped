// Type definitions for non-npm package sinch-rtc-browser 2.31
// Project: https://developers.sinch.com/docs/in-app-calling/js-cloud/
// Definitions by: Sinch Johana <https://github.com/sinch-johana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Sinch: SinchRtc.Sinch;

declare namespace SinchRtc {
    interface Sinch {
        getSinchClientBuilder(): SinchClientBuilder;
        version(): string;
    }

    interface SinchClientBuilder {
        userId(userId: string): SinchClientBuilder;
        applicationKey(applicationKey: string): SinchClientBuilder;
        environmentHost(environmentHost: string): SinchClientBuilder;
        callerIdentifier(callerIdentifier: string): SinchClientBuilder;
        build(): SinchClient;
    }

    interface SinchClient {
        start(): Promise<void>;
        isStarted(): boolean;
        pushNotificationDisplayName?: string;
        addListener(sinchClientListener: SinchClientListener): void;
        removeListener(sinchClientListener: SinchClientListener): void;
        setSupportManagedPush(serviceWorker?: string): Promise<void>;
        terminate(): void;
        callClient: CallClient;
    }

    interface CallClient {
        callUser(toUserId: string, headers?: Record<string, string>): Promise<Call>;
        callUserVideo(toUserId: string, headers?: Record<string, string>): Promise<Call>;
        callPhoneNumber(phoneNumber: string, headers?: Record<string, string>): Promise<Call>;
        callSip(sipIdentity: string, headers?: Record<string, string>): Promise<Call>;
        callConference(conferenceId: string, headers?: Record<string, string>): Promise<Call>;
        getCall(callId: string): Call | undefined;
    }

    interface Call {
        addListener(listener: CallListener): void;
        removeListener(listener: CallListener): void;
        hangup(): void;
        answer(): void;
        mute(): void;
        unmute(): void;
        pauseVideo(): void;
        resumeVideo(): void;
        sendDtmf(keys: string): void;
        details: CallDetails;
        headers: Record<string, string> | undefined;
        remoteUserId: string;
        state: CallState;
        id: string;
        direction: Direction;
        incomingStream: MediaStream | undefined;
        outgoingStream: MediaStream | undefined;
        remoteUserDisplayName?: string;
    }

    enum CallState {
        Init = 0,
        Progressing = 1,
        Established = 2,
        Ended = 3,
    }

    enum Direction {
        Inbound = 0,
        Outbound = 1,
    }

    class CallDetails implements CallListener {
        duration: number;
        hadVideoStream: boolean;
        hadAudioStream: boolean;
        requestedVideo: boolean;
        requestedAudio: boolean;
        setupDuration: number;
        establishedTime?: Date;
        endedTime?: Date;
        progressTime?: Date;
        startedTime: Date;
        constructor(call: Call, session: unknown);
        get error(): Error | undefined;
        get endCause(): CallEndCause;
        onCallEnded(call: Call): void;
        onCallProgressing(_: Call): void;
        onCallEstablished(_: Call): void;
        onRemoteTrack(_: Call, track: MediaStreamTrack): void;
    }

    enum CallEndCause {
        None = 0,
        Timeout = 1,
        Denied = 2,
        NoAnswer = 3,
        Failure = 4,
        HungUp = 5,
        Canceled = 6,
        OtherDeviceAnswered = 7,
        Inactive = 8,
    }

    interface CallListener {
        onCallProgressing?(call: Call): void;
        onCallEstablished?(call: Call): void;
        onRemoteTrack?(call: Call, track: MediaStreamTrack): void;
        onCallEnded?(call: Call): void;
    }

    interface SinchClientListener {
        onClientStarted: (sinchClient: SinchClient) => void;
        onClientFailed: (sinchClient: SinchClient, error: SinchError) => void;
        onCredentialsRequired: (sinchClient: SinchClient, clientRegistration: ClientRegistration) => void;
    }

    enum ErrorType {
        Network = 0,
        Capability = 1,
        Other = 2,
    }

    class SinchError {
        message: string;
        code: number;
        domain: ErrorType;
        constructor(message: string, code?: number, domain?: ErrorType);
    }

    class ClientRegistration {
        register: (jwtSignature: string) => Promise<void>;
        registerFailed: () => void;
        constructor(register: (jwtSignature: string) => Promise<void>, registerFailed: () => void);
    }
}

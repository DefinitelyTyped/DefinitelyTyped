// Type definitions for react-amplitude 0.1
// Project: https://github.com/rorygarand/react-amplitude
// Definitions by: Raymond Ho <https://github.com/rayzor65>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AmplitudeInstance {
    init(apiKey: string, userId?: string, config?: any, cb?: () => void): void;
    amplitude(): void;
    clearUserProperties(): void;
    getSessionId(): void;
    identify(idObj: any, cb: () => void): void;
    isNewSession(): void;
    logEvent(eventType: string, eventProperties: {}, cb: () => void): void;
    logEventWithTimestamp(eventType: string, eventProperties: {}, timestamp: number, cb: () => void): void;
    resetUserId(): void;
    setUserId(userId: string): void;
    setUserProperties(userProps: any): void;
}

declare const Amplitude: AmplitudeInstance;

export default Amplitude;

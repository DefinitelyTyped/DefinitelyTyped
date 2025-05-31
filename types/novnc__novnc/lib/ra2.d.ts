import EventTargetMixin from "./util/eventtarget";
import WebSock from "./websock";
import { RFBCredentials, ServerVerificationEvent, CredentialsRequiredEvent } from "./rfb";

export default class RSAAESAuthenticationState extends EventTargetMixin {
    constructor(sock: WebSock, getCredentials: () => RFBCredentials);

    hasStarted: boolean;

    checkInternalEvents(): void;
    approveServer(): void;
    disconnect(): void;
    negotiateRA2neAuthAsync(): Promise<void>;

    // EventTargetMixin methods
    addEventListener(type: "serververification", listener: (event: ServerVerificationEvent) => void): void;
    addEventListener(type: "credentialsrequired", listener: (event: CredentialsRequiredEvent) => void): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;

    removeEventListener(type: "serververification", listener: (event: ServerVerificationEvent) => void): void;
    removeEventListener(type: "credentialsrequired", listener: (event: CredentialsRequiredEvent) => void): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

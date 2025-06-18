export = ServerId;
declare function ServerId(): void;
declare class ServerId {
    private value_;
    private salt_;
    toString(): string;
    updateCookie(opt_response?: Response): void;
    clearCookie(opt_response?: Response): void;
}
declare namespace ServerId {
    export { COOKIE_ID, instance_, getInstance, Response };
}
declare let COOKIE_ID: string;
declare let instance_: ServerId;
declare function getInstance(): import('./ServerId.js');
type Response = import('./Response');

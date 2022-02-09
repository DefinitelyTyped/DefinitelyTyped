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
type Response = import('./Response');
declare var COOKIE_ID: string;
declare var instance_: ServerId;
declare function getInstance(): import('./ServerId.js');

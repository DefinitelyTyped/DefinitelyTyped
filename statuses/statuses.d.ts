// Type definitions for statuses v1.2.1
// Project: https://github.com/jshttp/statuses
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'statuses' {
    interface Status {
        [code: number]: string;
        [msg: string]: any | number;

        codes: Array<number>;
        redirect: {[code: number]: boolean};
        empty: {[code: number]: boolean};
        retry: {[code: number]: boolean};

        (code: number | string): number;
    }

    var status: Status;
    export = status;
}

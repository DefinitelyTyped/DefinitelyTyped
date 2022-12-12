// Type definitions for statuses 2.0
// Project: https://github.com/jshttp/statuses
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = status;

declare const status: Status;

interface Status {
    (code: number): string;
    (msg: string): number;

    codes: number[];
    code: { [msg: string]: number | undefined };
    empty: { [code: number]: boolean | undefined };
    message: { [code: number]: string | undefined };
    redirect: { [code: number]: boolean | undefined };
    retry: { [code: number]: boolean | undefined };
}

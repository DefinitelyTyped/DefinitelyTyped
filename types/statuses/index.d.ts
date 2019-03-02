// Type definitions for statuses 1.5
// Project: https://github.com/jshttp/statuses
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = status;

declare const status: Status & CodesToMessages & MessagesToCodes;

interface Status {
    STATUS_CODES: { [code: number]: string };
    codes: number[];
    redirect: { [code: number]: boolean | undefined };
    empty: { [code: number]: boolean | undefined };
    retry: { [code: number]: boolean | undefined };

    (code: number | string): number;
}

interface CodesToMessages {
    [code: number]: string | undefined;
}

interface MessagesToCodes {
    [msg: string]: number | undefined;
}

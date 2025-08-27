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

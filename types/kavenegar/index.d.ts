// Type definitions for kavenegar-node 1.1.4
// Project: https://github.com/kavenegar/kavenegar-node
// Definitions by: Nima Ebrazeh <https://github.com/nimaebra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace kavenegar {
    interface Options {
        apikey: string;
        host?: string;
        version?: string;
    }

    type ResponseK<T, Y> = (data: T, callback: (entries: Y, status: number, message: string) => void) => void;

    type Methods =
        | 'send'
        | 'sendarray'
        | 'status'
        | 'statuslocalmessageid'
        | 'select'
        | 'selectoutbox'
        | 'latestoutbox'
        | 'countoutbox'
        | 'cancel'
        | 'receive'
        | 'countinbox'
        | 'countpostalcode'
        | 'sendbypostalcode'
        | 'lookup'
        | 'info'
        | 'config'
        | 'maketts';

    type Actions = 'sms' | 'verify' | 'account' | 'call';

    interface KavenegarInstance {
        request: (action: Actions, method: Methods, params: object, callback: Function) => void;
        Send: ResponseK<
            {
                receptor: string;
                message: string;
                sender?: string;
                date?: number;
                type?: string;
                localid?: string;
                hide?: number;
            },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        SendArray: ResponseK<
            {
                receptor: string;
                sender: string;
                message: string;
                date?: number;
                type?: number[];
                localmessageids?: string[];
                hide?: number;
            },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        Status: ResponseK<
            { messageid: string | number[] },
            { messageid: number; status: number; statustext: string }[]
        >;
        StatusLocalMessageid: ResponseK<
            { localid: string | string[] },
            {
                messageid: number;
                localid: string;
                status: number;
                statustext: string;
            }[]
        >;
        Select: ResponseK<
            { messageid: string | number[] },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        SelectOutbox: ResponseK<
            {
                startdate: number;
                enddate?: number;
                sender?: string;
            },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        LatestOutbox: ResponseK<
            { pagesize?: number; sender?: string },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        CountOutbox: ResponseK<
            {
                startdate: number;
                enddate?: number;
                status?: number;
            },
            {
                startdate: number;
                enddate: number;
                sumpart: number;
                sumcount: number;
                cost: number;
            }[]
        >;
        Cancel: ResponseK<
            { messageid: string | number[] },
            { messageid: number; status: number; statustext: string }[]
        >;
        Receive: ResponseK<
            { linenumber: string; isread: 0 | 1 },
            {
                messageid: number;
                message: string;
                sender: string;
                receptor: string;
                date: number;
            }[]
        >;
        CountInbox: ResponseK<
            {
                startdate: number;
                enddate?: number;
                linenumber?: string;
                isread?: 0 | 1;
            },
            { startdate: number; enddate: number; sumcount: number }[]
        >;
        CountPostalCode: ResponseK<any, any>;
        SendByPostalCode: ResponseK<any, any>;
        VerifyLookup: ResponseK<
            {
                receptor: string;
                token: string;
                token2?: string;
                token3?: string;
                template: string;
                type?: string;
            },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        CallMakeTTS: ResponseK<
            {
                receptor: string;
                message: string;
                date?: number;
                localid?: string;
                repeat?: number;
            },
            {
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }[]
        >;
        AccountInfo: ResponseK<{}, { remaincredit: number; expiredate: number; type: string }>;
        AccountConfig: ResponseK<
            {
                apilogs?: string;
                dailyreport?: string;
                debugmode?: string;
                defaultsender?: string;
                mincreditalarm?: number;
                resendfailed?: string;
            },
            {
                apilogs: string;
                dailyreport: string;
                debugmode: string;
                defaultsender: string;
                mincreditalarm: number;
                resendfailed: string;
            }
        >;
    }

    function KavenegarApi(options: kavenegar.Options): KavenegarInstance;
}

export = kavenegar;

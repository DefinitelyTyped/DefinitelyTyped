// Type definitions for kavenegar 1.1
// Project: https://github.com/kavenegar/kavenegar-node
// Definitions by: Nima Ebrazeh <https://github.com/nimaebra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace kavenegar {
    interface Options {
        apikey: string;
        host?: string | undefined;
        version?: string | undefined;
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
        request: (action: Actions, method: Methods, params: object, callback: any) => void;
        Send: ResponseK<
            {
                receptor: string;
                message: string;
                sender?: string | undefined;
                date?: number | undefined;
                type?: string | undefined;
                localid?: string | undefined;
                hide?: number | undefined;
            },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        SendArray: ResponseK<
            {
                receptor: string;
                sender: string;
                message: string;
                date?: number | undefined;
                type?: number[] | undefined;
                localmessageids?: string[] | undefined;
                hide?: number | undefined;
            },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        Status: ResponseK<
            { messageid: string | number[] },
            Array<{ messageid: number; status: number; statustext: string }>
        >;
        StatusLocalMessageid: ResponseK<
            { localid: string | string[] },
            Array<{
                messageid: number;
                localid: string;
                status: number;
                statustext: string;
            }>
        >;
        Select: ResponseK<
            { messageid: string | number[] },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        SelectOutbox: ResponseK<
            {
                startdate: number;
                enddate?: number | undefined;
                sender?: string | undefined;
            },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        LatestOutbox: ResponseK<
            { pagesize?: number | undefined; sender?: string | undefined },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        CountOutbox: ResponseK<
            {
                startdate: number;
                enddate?: number | undefined;
                status?: number | undefined;
            },
            Array<{
                startdate: number;
                enddate: number;
                sumpart: number;
                sumcount: number;
                cost: number;
            }>
        >;
        Cancel: ResponseK<
            { messageid: string | number[] },
            Array<{ messageid: number; status: number; statustext: string }>
        >;
        Receive: ResponseK<
            { linenumber: string; isread: 0 | 1 },
            Array<{
                messageid: number;
                message: string;
                sender: string;
                receptor: string;
                date: number;
            }>
        >;
        CountInbox: ResponseK<
            {
                startdate: number;
                enddate?: number | undefined;
                linenumber?: string | undefined;
                isread?: 0 | 1 | undefined;
            },
            Array<{ startdate: number; enddate: number; sumcount: number }>
        >;
        CountPostalCode: ResponseK<any, any>;
        SendByPostalCode: ResponseK<any, any>;
        VerifyLookup: ResponseK<
            {
                receptor: string;
                token: string;
                token2?: string | undefined;
                token3?: string | undefined;
                template: string | undefined;
                type?: string | undefined;
            },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        CallMakeTTS: ResponseK<
            {
                receptor: string;
                message: string;
                date?: number | undefined;
                localid?: string | undefined;
                repeat?: number | undefined;
            },
            Array<{
                messageid: number;
                message: string;
                status: number;
                statustext: string;
                sender: string;
                receptor: string;
                date: number;
                cost: number;
            }>
        >;
        AccountInfo: ResponseK<{}, { remaincredit: number; expiredate: number; type: string }>;
        AccountConfig: ResponseK<
            {
                apilogs?: string | undefined;
                dailyreport?: string | undefined;
                debugmode?: string | undefined;
                defaultsender?: string | undefined;
                mincreditalarm?: number | undefined;
                resendfailed?: string | undefined;
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
}

export function KavenegarApi(options: kavenegar.Options): kavenegar.KavenegarInstance;

export class ProxyOptions {
    certificateCheck?: Function | undefined;
    credentials?: Function | undefined;
    payload?: any;
    type?: number | undefined;
    url?: string | undefined;
    version?: number | undefined;
    [key: string]: any;
}

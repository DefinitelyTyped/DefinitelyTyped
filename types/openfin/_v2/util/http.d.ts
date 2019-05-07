export declare const getProxy: () => {
    port: string;
    host: string;
    username: string;
    password: string;
};
export declare const getRequestOptions: (url: string) => {
    host: string;
    path: string;
    port: string;
    headers: {
        Host: string;
    };
};
export declare const fetch: (url: string) => Promise<string>;
export declare const downloadFile: (url: string, writeLocation: string) => Promise<{}>;
export declare const fetchJson: (url: string) => Promise<any>;

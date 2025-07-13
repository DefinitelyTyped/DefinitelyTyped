declare namespace CertStreamClient {
    type Callback = (message: any, context: any) => void;
}

declare class CertStreamClient {
    context: any;
    callback: CertStreamClient.Callback;
    skipHeartbeats: boolean;

    constructor(callback: CertStreamClient.Callback, skipHeartbeats?: boolean);

    connect(url?: string): void;
}

export = CertStreamClient;
export as namespace CertStreamClient;

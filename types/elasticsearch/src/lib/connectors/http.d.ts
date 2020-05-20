// HttpConnector for elasticsearch

export = HttpConnector;

declare class HttpConnector {
    constructor(host: any, config: any);

    // onStatusSet(handler: (status: any) => void): void;
    createAgent(config: any): any;
    makeAgentConfig(config: any): any;
    makeReqParams(params: any): any;
    request(params: any, callback: (error: any, response: any, status: any, headers: any) => void): void;
}

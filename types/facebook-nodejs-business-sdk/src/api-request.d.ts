declare class APIRequest {
    _nodeId: string;
    _method: string;
    _endpoint: string;
    _path: string[];
    _fields: string[];
    _params: Record<string, any>;
    _fileParams: Record<string, any>;
    _fileCounter: number;
    constructor(nodeId: string, method: string, endpoint: string);
    get nodeId(): string;
    get method(): string;
    get endpoint(): string;
    get path(): string[];
    get fields(): string[];
    get params(): Record<string, any>;
    get fileParams(): Record<string, any>;
    addFile(filePath: string): APIRequest;
    addFiles(filePaths: string[]): APIRequest;
    addField(field: string): APIRequest;
    addFields(fields: string[]): APIRequest;
    addParam(key: string, value: any): APIRequest;
    addParams(params: Record<string, any>): APIRequest;
}
export default APIRequest;

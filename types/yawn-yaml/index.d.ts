// Type definitions for yawn-yaml 1.4
// Project: https://github.com/mohsen1/yawn#readme
// Definitions by: Jamie Magee <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export default class YAWN {
    constructor(content: string);
    json: any;
    yaml: string;
    getRemark(path: string): any;
    setRemark(path: string, remark: string): boolean;
}

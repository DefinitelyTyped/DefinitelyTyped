// Type definitions for yawn-yaml 1.4
// Project: https://github.com/mohsen1/yawn-yaml#readme
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export default class YAWN {
    constructor(content: string);
    json: any;
    yaml: string;
    getRemark(path: string): string;
    setRemark(path: string, remark: string): boolean;
}

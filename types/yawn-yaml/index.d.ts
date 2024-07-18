export default class YAWN {
    constructor(content: string);
    json: any;
    yaml: string;
    getRemark(path: string): string;
    setRemark(path: string, remark: string): boolean;
}

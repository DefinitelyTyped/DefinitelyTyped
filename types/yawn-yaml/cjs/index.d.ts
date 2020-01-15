export default class YAWN {
    constructor(content: string);
    json: any;
    yaml: string;
    getRemark(path: string): any;
    setRemark(path: string, remark: string): boolean;
}

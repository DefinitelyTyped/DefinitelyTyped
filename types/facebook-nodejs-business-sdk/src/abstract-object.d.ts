export default class AbstractObject {
    _data: any;
    _fields: string[];
    $key: string;
    $value: unknown;
    static get Fields(): {};
    constructor();
    _defineProperty(field: string): void;
    set(field: string, value: unknown): AbstractObject;
    setData(data: Record<string, any>): AbstractObject;
    exportData(): Record<string, any>;
}

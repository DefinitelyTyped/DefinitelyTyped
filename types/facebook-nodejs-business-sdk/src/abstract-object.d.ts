export default class AbstractObject {
    _data: any;
    _fields: string[];
    $key: string;
    $value: unknown;
    static get Fields(): Record<any, any>;
    constructor();
    /**
     * Define data getter and setter field
     * @param {String} field
     */
    _defineProperty(field: string): void;
    /**
     * Set data field
     * @param {String} field
     * @param {Mixed} value
     * @return this
     */
    set(field: string, value: unknown): AbstractObject;
    /**
     * Set multiple data fields
     * @param {Object} data
     * @return this
     */
    setData(data: Record<any, any>): AbstractObject;
    /**
     * Export object data
     * @return {Object}
     */
    exportData(): Record<any, any>;
}

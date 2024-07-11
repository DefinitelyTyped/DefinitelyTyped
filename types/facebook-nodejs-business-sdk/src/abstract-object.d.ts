export default class AbstractObject {
    _data: any;
    _fields: string[];
    $key: string;
    $value: unknown;
    static get Fields(): {};
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
    setData(data: Record<string, any>): AbstractObject;
    /**
     * Export object data
     * @return {Object}
     */
    exportData(): Record<string, any>;
}

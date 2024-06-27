export default class AbstractObject {
  _data: any;
  _fields: Array<string>;
  // This is a Flow workaround for setting `this[field]` in the set() function.
  $key: string;
  $value: unknown;

  static get Fields(): {} {
    return Object.freeze({});
  }

  constructor() {
    this._data = {};

    if (this.constructor.Fields === undefined) {
      throw new Error('A "Fields" frozen object must be defined in the object class');
    }

    let fields: any = this.constructor.Fields;
    this._fields = Object.keys(fields);

    this._fields.forEach(field => {
      this._defineProperty(field);
    });
  }

  /**
   * Define data getter and setter field
   * @param {String} field
   */
  _defineProperty(field: string) {
    Object.defineProperty(this, field, {
      get: () => this._data[field],
      set: (value: string) => {
        this._data[field] = value;
      },
      enumerable: true
    });
  }

  /**
   * Set data field
   * @param {String} field
   * @param {Mixed} value
   * @return this
   */
  set(field: string, value: unknown): AbstractObject {
    if (this._fields.indexOf(field) < 0) {
      this._defineProperty(field);
    }

    this[field] = value;
    return this;
  }

  /**
   * Set multiple data fields
   * @param {Object} data
   * @return this
   */
  setData(data: Record<string, any>): AbstractObject {
    Object.keys(data).forEach(key => {
      this.set(key, data[key]);
    });
    return this;
  }

  /**
   * Export object data
   * @return {Object}
   */
  exportData(): Record<string, any> {
    return this._data;
  }

}
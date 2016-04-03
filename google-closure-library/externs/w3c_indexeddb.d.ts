/**
 * @constructor
 * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBDatabaseException
 */
declare class IDBDatabaseException {}

/**
 * Typedef for valid key types according to the w3 specification. Note that this
 * is slightly wider than what is actually allowed, as all Array elements must
 * have a valid key type.
 * @see http://www.w3.org/TR/IndexedDB/#key-construct
 * @typedef {number|string|!Date|!Array}
 */
interface IDBKeyType {}

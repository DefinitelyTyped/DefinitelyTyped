import { Record } from './RelayStoreTypes';
import { DataID } from '../util/RelayRuntimeTypes';

export class RelayModernRecord {
    /**
     * Clone a record.
     */
    clone(record: Record): Record;

    /**
     * Copies all fields from `source` to `sink`, excluding `__id` and `__typename`.
     *
     * NOTE: This function does not treat `id` specially. To preserve the id,
     * manually reset it after calling this function. Also note that values are
     * copied by reference and not value; callers should ensure that values are
     * copied on write.
     */
    copyFields(source: Record, sink: Record): void;

    /**
     * Create a new record.
     */
    create(dataID: DataID, typeName: string): Record;

    /**
     * Get the record's `id` if available or the client-generated identifier.
     */
    getDataID(record: Record): DataID;

    /**
     * Get the concrete type of the record.
     */
    getType(record: Record): string;

    /**
     * Get a scalar (non-link) field value.
     */
    getValue(record: Record, storageKey: string): unknown;

    /**
     * Get the value of a field as a reference to another record. Throws if the
     * field has a different type.
     */
    getLinkedRecordID(record: Record, storageKey: string): DataID | null;

    /**
     * Get the value of a field as a list of references to other records. Throws if
     * the field has a different type.
     */
    getLinkedRecordIDs(record: Record, storageKey: string): DataID[] | null;

    /**
     * Compares the fields of a previous and new record, returning either the
     * previous record if all fields are equal or a new record (with merged fields)
     * if any fields have changed.
     */
    update(prevRecord: Record, nextRecord: Record): Record;

    /**
     * Returns a new record with the contents of the given records. Fields in the
     * second record will overwrite identical fields in the first record.
     */
    merge(record1: Record, record2: Record): Record;

    /**
     * Prevent modifications to the record. Attempts to call `set*` functions on a
     * frozen record will fatal at runtime.
     */
    freeze(record: Record): void;

    /**
     * Set the value of a storageKey to a scalar.
     */
    setValue(record: Record, storageKey: string, value: any): void;

    /**
     * Set the value of a field to a reference to another record.
     */
    setLinkedRecordID(record: Record, storageKey: string, linkedID: DataID): void;

    /**
     * Set the value of a field to a list of references other records.
     */
    setLinkedRecordIDs(record: Record, storageKey: string, linkedIDs: DataID[] | null): void;
}

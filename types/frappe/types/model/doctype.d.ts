export type DocTypeName = string | number;

declare global {
    interface DocType {
        /** The document's name (e.g. 'INV-123') */
        name: DocTypeName;
        /** The creation timestamp (e.g. '2023-01-01 00:00:00') */
        creation: string;
        /** The last modified timestamp (e.g. '2023-01-01 00:00:00') */
        modified: string;
        /** The owner of the document (e.g. 'Administrator') */
        owner: string;
        /** The user who last modified the document (e.g. 'Administrator') */
        modified_by: string;
        /** The document status (0: Draft, 1: Submitted, 2: Cancelled) */
        docstatus: 0 | 1 | 2;
    }

    interface DocTypeChildTable extends DocType {
        /** The parent document's name (e.g. 'INV-123') */
        parent: DocTypeName;
        /** The parent document's fieldname (e.g. "items") */
        parentfield: string;
        /** The parent document's doctype (e.g. "Invoice") */
        parenttype: string;
        /** The row number in the table, starting from 1 */
        idx: number;
    }
}

export {};

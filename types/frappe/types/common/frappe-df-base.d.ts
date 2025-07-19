import type FrappeFieldType from "./frappe-field-type.d.ts";

interface FrappeDFBase {
    label: string;
    fieldname: string;
    fieldtype: FrappeFieldType | (string & {});
    options?: any;
    // Common optional properties for controls
    [key: string]: any;
}

export default FrappeDFBase;

type Local = {
    [K in keyof DocTypeMap]: { [docName: string]: DocTypeMap[K] };
};

/**
 * Global object containing all local data in the form
 * Typically used when trying to access nested data, such as the row of a child table
 * @example
 * ```typescript
 * frappe.ui.form.on('My Child Table', {
 *     async my_field(frm, cdt, cdn) {
 *         const row = locals[cdt][cdn];
 *     }
 * });
 * ```
 */
declare const locals: Local;

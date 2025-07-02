/**
 * @template T
 */
interface FrappeForm<T extends DocType = DocType> {
    /**
     * Document object and all it's properties. If typed from an interface that extends {@link DocType}, all the custom properties will be available. Otherwise only the default properties of {@link DocType} will be available.
     */
    doc: T;

    /**
     * DocTypes to ignore during cancel-all operations.
     */
    ignore_doctypes_on_cancel_all: string[];

    /**
     * Set the value of a field or multiple fields.
     * @param field Field name or mapping of field names to values.
     * @param value Value to set (if field is string).
     * @param if_missing Only set if field has no value.
     * @param skip_dirty_trigger Skip triggering dirty state.
     * @returns Promise resolving when values are set.
     */
    set_value(field: string, value: any, if_missing?: boolean, skip_dirty_trigger?: boolean): Promise<void>;
    set_value(fieldValues: { [field: string]: any }): Promise<void>;

    /**
     * Refresh the form, triggering form events.
     */
    refresh(): void;

    /**
     * Save the form, optionally performing actions like Submit, Cancel, or Update.
     * @param action Action to perform ('Submit', 'Cancel', 'Update').
     * @returns Promise resolving after save.
     */
    save(action?: string): Promise<any>;

    /** Enable the Save button. */
    enable_save(): void;

    /** Disable the Save button. */
    disable_save(): void;

    /**
     * Open the Email dialog for this form.
     * @param message Optional prefilled message.
     */
    email_doc(message?: string): void;

    /** Reload the document from the server and refresh. */
    reload_doc(): Promise<any>;

    /**
     * Refresh a specific field and its dependencies.
     * @param fieldname Name of the field to refresh.
     */
    refresh_field(fieldname: string): void;

    /** Check if the form has unsaved changes. */
    is_dirty(): boolean;

    /** Mark the form as having unsaved changes. */
    dirty(): void;

    /** Check if this is a new unsaved document. */
    is_new(): boolean;

    /**
     * Set intro text at the top of the form.
     * @param message The intro message.
     * @param color Color of the message ('blue', 'red', 'orange', 'green', 'yellow'). Defaults is blue.
     */
    set_intro(message: string, color?: "blue" | "red" | "orange" | "green" | "yellow"): void;

    /**
     * Add a custom button to the form toolbar. Alias to `page.add_inner_button`
     * @param label Button label.
     * @param handler Click handler function.
     * @param group Optional button group.
     */
    add_custom_button(label: string, handler: () => void, group?: string): void;

    /**
     * Change the type (style) of a custom button.
     * @param label Button label.
     * @param group Optional button group.
     * @param type Button style type (e.g., 'primary', 'danger').
     */
    change_custom_button_type(label: string, group: string | null, type: string): void;

    /**
     * Remove a specific custom button.
     * @param label Button label.
     * @param group Optional button group.
     */
    remove_custom_button(label: string, group?: string): void;

    /** Remove all custom buttons. */
    clear_custom_buttons(): void;

    /**
     * Change a field's DocField property and refresh the field.
     * @param fieldname Name of the field.
     * @param property DocField property to change.
     * @param value New property value.
     * @param docname Optional document name.
     * @param tableField Optional child table field name.
     * @param tableRowName Optional child table row name.
     */
    set_df_property(
        fieldname: keyof T,
        property: string,
        value: any,
        docname?: string,
        tableField?: string,
        tableRowName?: string,
    ): void;

    /**
     * Enable or disable fields.
     * @param fieldnames Field name or array of field names.
     * @param enable True to enable, false to disable.
     */
    toggle_enable(fieldnames: string | string[], enable: boolean): void;

    /**
     * Make fields mandatory or not.
     * @param fieldnames Field name or array of field names.
     * @param mandatory True to require, false to not require.
     */
    toggle_reqd(fieldnames: string | string[], mandatory: boolean): void;

    /**
     * Show or hide fields.
     * @param fieldnames Field name or array of field names.
     * @param show True to show, false to hide.
     */
    toggle_display(fieldnames: string | string[], show: boolean): void;

    /**
     * Apply filters on a Link field.
     * @param fieldname Link field name.
     * @param queryFn Function returning filter options.
     */
    set_query(fieldname: string, queryFn: () => any): void;
    /**
     * Apply filters on a Link field in a child table.
     * @param fieldname Link field name.
     * @param tableFieldname Child table field name.
     * @param queryFn Function returning filter options.
     */
    set_query(fieldname: string, tableFieldname: string, queryFn: () => any): void;

    /**
     * Add a new row to a child table.
     * @param fieldname Child table field name.
     * @param values Optional initial values for the new row.
     * @returns The newly created child row.
     */
    add_child(fieldname: Exclude<keyof T, keyof DocTypeChildTable>, values?: { [key: string]: any }): DocTypeChildTable;

    /**
     * Call a server-side method with optional arguments and callback.
     * @param method Method name or options object.
     * @param args Optional method arguments.
     * @param callback Optional callback invoked with response.
     * @returns Promise resolving with server response.
     */
    call(method: string, args?: any, callback?: (response: any) => void): Promise<any>;

    /**
     * Trigger a form event programmatically.
     * @param event Name of the event.
     * @param doctype Optional DocType for the event.
     * @param docname Optional DocName for the event.
     */
    trigger(event: string, doctype?: string, docname?: string): void;

    /**
     * Get selected rows in child tables.
     * @returns Object mapping table fieldnames to arrays of selected row names.
     */
    get_selected(): { [tableField: string]: string[] };
}

export default FrappeForm;

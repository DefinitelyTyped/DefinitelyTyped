import { Arrayable, LiteralStringUnion } from "../../../utils/type-fest.js";
import { Filters } from "../../common/filters.js";

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
    set_value<K extends keyof T>(
        field: K,
        value: T[K],
        if_missing?: boolean,
        skip_dirty_trigger?: boolean,
    ): Promise<void>;
    set_value(fieldValues: Partial<T>): Promise<void>;

    /**
     * Refresh the form, triggering form events.
     */
    refresh(): void;

    /**
     * Save the form, optionally performing actions like Submit, Cancel, or Update.
     * @param action Action to perform ('Submit', 'Cancel', 'Update').
     * @returns Promise resolving after save.
     */
    save(action?: LiteralStringUnion<FormAction>): Promise<void>;

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
    reload_doc(): Promise<void>;

    /**
     * Refresh a specific field and its dependencies.
     * @param fieldname Name of the field to refresh.
     */
    refresh_field(fieldname: keyof T): void;

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
    set_intro(message: string, color?: MessageColor): void;

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
    toggle_enable(fieldnames: Arrayable<keyof T>, enable: boolean): void;

    /**
     * Make fields mandatory or not.
     * @param fieldnames Field name or array of field names.
     * @param mandatory True to require, false to not require.
     */
    toggle_reqd(fieldnames: Arrayable<keyof T>, mandatory: boolean): void;

    /**
     * Show or hide fields.
     * @param fieldnames Field name or array of field names.
     * @param show True to show, false to hide.
     */
    toggle_display(fieldnames: Arrayable<keyof T>, show: boolean): void;

    /**
     * Apply filters on a Link field.
     * @param fieldname Link field name.
     * @param queryFn Function returning filter options.
     * 
     * @example
     * // show only customers whose territory is set to India
     * frm.set_query('customer', () => {
     *     return {
     *         filters: {
     *             territory: 'India'
     *         }
     *     }
     * })
     * 
     * @example
     * // show customers whose territory is any of India, Nepal, Japan
     * frm.set_query('customer', () => {
     *     return {
     *         filters: {
     *             territory: ['in', ['India', 'Nepal', 'Japan']]
     *         }
     *     }
     * })
     */
    set_query(fieldname: keyof T, queryFn: () => QueryFilter<T>): void;
    /**
     * Apply filters on a Link field in a child table.
     * @param fieldname Link field name.
     * @param tableFieldname Child table field name.
     * @param queryFn Function returning filter options.
     * 
     * @typeParam ChildType - The type of the child table.
     * @typeParam DT - The type of the linked DocType.
     * 
     * @example
     * 
     * // set filters for Link field item_code in
     * // items field which is a Child Table
     * ```ts
     * frm.set_query('item_code', 'items', () => {
     *     return {
     *         filters: {
     *             item_group: 'Products'
     *         }
     *     }
     * })
     * ``` 
     */
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    set_query<ChildType extends DocTypeChildTable, DT extends DocType>(
        fieldname: keyof ChildType,
        tableFieldname: { [K in keyof T]: T[K] extends ChildType[] ? K : never }[keyof T],
        queryFn: () => QueryFilter<DT>
    ): void;


    /**
     * Add a new row to a child table. Make sure to call {@link refresh_field} after adding a row.
     * @param fieldname Child table field name.
     * @param values Optional initial values for the new row.
     * @returns The newly created child row.
     */
    add_child<K extends keyof T>(
        fieldname: K,
        values?: Partial<T[K] extends Array<infer U> ? U : never>,
    ): T[K] extends Array<infer U> ? U : never;

    /**
     * Call a server-side method with optional arguments and callback.
     * @param method Method name or options object. This is relative to the form's doctype.
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

type FormAction = "Submit" | "Cancel" | "Update";
type MessageColor = "blue" | "red" | "orange" | "green" | "yellow";

interface QueryFilter<T extends DocType> {
    /**
     * Override for the filter method to provide your own custom method on the server side.
     * Just set the query to the module path of your python method.
     */
    query?: string;
    /**
     * See {@link Filters}
     */
    filters: Filters<keyof T>;
}

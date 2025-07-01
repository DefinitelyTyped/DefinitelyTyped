/// <reference path="jquery" />

/**
 * Type definitions for frappe.ui.form.Grid
 */

declare global {
  namespace frappe.ui.form {
    /** Get the currently open grid form. */
    function get_open_grid_form(): any
    /** Close the open grid form. */
    function close_grid_form(): void
  }
}

/**
 * A grid field component within a Frappe form.
 */
export default class Grid {
  // Public methods and properties

  /** Permissions object. */
  perm: any
  /** Check if on-grid editing is allowed. */
  allow_on_grid_editing(): boolean
  /** Initialize DOM and event handlers. */
  make(): void
  /** Refresh the grid display. */
  refresh(): void
  /** Add a new row to the grid. */
  add_new_row(
    idx?: number,
    callback?: any,
    show?: boolean,
    copy_doc?: any,
    go_to_last_page?: boolean,
    go_to_first_page?: boolean
  ): any
  /** Delete selected rows. */
  delete_rows(): void
  /** Delete all rows. */
  delete_all_rows(): void
  /** Duplicate selected rows. */
  duplicate_rows(): void
  /** Get names of selected rows. */
  get_selected(): string[]
  /** Get selected child row objects. */
  get_selected_children(): any[]
  /** Select a row by name. */
  select_row(name: string): void
  /** Retrieve grid data, optionally filtered. */
  get_data(filter_field?: boolean): any[]
  /** Set value of a field in a given row. */
  set_value(fieldname: string, value: any, doc: any): void
  /** Show or hide columns. */
  set_column_disp(fieldname: string | string[], show: boolean): void
  /** Toggle required property of a column. */
  toggle_reqd(fieldname: string, reqd: boolean): void
  /** Toggle enabled state of a column. */
  toggle_enable(fieldname: string, enable: boolean): void
  /** Toggle visibility of a column. */
  toggle_display(fieldname: string, show: boolean): void

  /** Add or unhide a custom button. */
  add_custom_button(label: string, click: (...args: any[]) => void, position?: 'top' | 'bottom'): JQuery<HTMLElement>
  /** Hide all custom buttons. */
  clear_custom_buttons(): void
  /** Update a DocField property on each row and in definitions. */
  update_docfield_property(fieldname: string, property: string, value: any): void

  // Private (internal use)
  private setup_add_row(): void
  private setup_grid_pagination(): void
  private setup_toolbar(): void
  private setup_check(): void
  private check_range(docname1: string, docname2: string, checked?: boolean): void
  private update_search_columns(): void
  private render_result_rows($rows: JQuery<HTMLElement>, append_row: boolean): void
  private setup_fields(): void
  private make_head(): void
  private truncate_rows(): void
  private renumber_based_on_dom(): void
  private duplicate_row(d: any, copy_doc: any[]): any
  private set_focus_on_row(idx?: number): void
  private setup_visible_columns(): void
  private update_default_colsize(df: any): void
  private setup_user_defined_columns(): void
  private is_editable(): boolean
  private is_sortable(): boolean
  private only_sortable(status?: boolean): void
  private set_multiple_add(link: string, qty: string): void
  private setup_allow_bulk_edit(): void
  private setup_download(): void
  private scroll_to_top(): void
}

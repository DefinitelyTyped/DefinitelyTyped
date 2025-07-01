/// <reference types="cypress" />
/// <reference types="jquery" />

/**
 * Custom Cypress commands for Frappe.
 */
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Login via API or session.
       * @param email User email or username.
       * @param password User password.
       */
      login(email?: string, password?: string): Chainable<void>

      /**
       * Call a Frappe API method.
       * @param method API method path.
       * @param args Request body arguments.
       */
      call(method: string, args: any): Chainable<any>

      /**
       * Get list of records.
       */
      get_list(doctype: string, fields?: any[], filters?: any[]): Chainable<any>

      /**
       * Get a single document.
       */
      get_doc(doctype: string, name: string): Chainable<any>

      /**
       * Remove a document.
       */
      remove_doc(doctype: string, name: string): Chainable<any>

      /**
       * Create records if not exist.
       */
      create_records(doc: any): Chainable<any>

      /**
       * Set a value on a document.
       */
      set_value(doctype: string, name: string, obj: any): Chainable<any>

      /**
       * Fill a field in the form.
       */
      fill_field(
        fieldname: string,
        value: string,
        fieldtype?: string
      ): Chainable<JQuery<HTMLElement>>

      /**
       * Get a field element.
       */
      get_field(
        fieldname: string,
        fieldtype?: string
      ): Chainable<JQuery<HTMLElement>>

      /**
       * Fill a field in a table row.
       */
      fill_table_field(
        tablefieldname: string,
        row_idx: number,
        fieldname: string,
        value: string,
        fieldtype?: string
      ): Chainable<JQuery<HTMLElement>>

      /**
       * Get a table field element.
       */
      get_table_field(
        tablefieldname: string,
        row_idx: number,
        fieldname: string,
        fieldtype?: string
      ): Chainable<JQuery<HTMLElement>>

      /**
       * Use the awesomebar to search and navigate.
       */
      awesomebar(text: string): Chainable<JQuery<HTMLElement>>

      /**
       * Open a new form for the given doctype.
       */
      new_form(doctype: string): Chainable<JQuery<HTMLElement>>

      /**
       * Select a form tab by label.
       */
      select_form_tab(label: string): Chainable<JQuery<HTMLElement>>

      /**
       * Go to list view for the doctype.
       */
      go_to_list(doctype: string): Chainable<JQuery<HTMLElement>>

      /**
       * Clear the cache in Frappe UI.
       */
      clear_cache(): Chainable<void>

      /**
       * Open a dialog.
       */
      dialog(opts: any): Chainable<any>

      /**
       * Get the currently open dialog.
       */
      get_open_dialog(): Chainable<JQuery<HTMLElement>>

      /**
       * Save the current form.
       */
      save(): Chainable<any>

      /**
       * Hide the current dialog.
       */
      hide_dialog(): Chainable<any>

      /**
       * Clear all dialogs.
       */
      clear_dialogs(): Chainable<any>

      /**
       * Remove datepickers.
       */
      clear_datepickers(): Chainable<any>

      /**
       * Insert a document via API.
       */
      insert_doc(
        doctype: string,
        args: any,
        ignore_duplicate?: boolean
      ): Chainable<any>

      /**
       * Update a document via API.
       */
      update_doc(doctype: string, docname: string, args: any): Chainable<any>

      /**
       * Switch session to another user.
       */
      switch_to_user(user: string): Chainable<any>

      /**
       * Add a role to a user.
       */
      add_role(user: string, role: string): Chainable<any>

      /**
       * Remove a role from a user.
       */
      remove_role(user: string, role: string): Chainable<any>

      /**
       * Open the list filter panel.
       */
      open_list_filter(): Chainable<any>

      /**
       * Click a custom action button.
       */
      click_custom_action_button(name: string): Chainable<any>

      /**
       * Click an action button in the actions menu.
       */
      click_action_button(name: string): Chainable<any>

      /**
       * Click a button in the menu.
       */
      click_menu_button(name: string): Chainable<any>

      /**
       * Clear all filters.
       */
      clear_filters(): Chainable<any>

      /**
       * Click the primary button in a modal.
       */
      click_modal_primary_button(btn_name: string): Chainable<any>

      /**
       * Click a button in the sidebar.
       */
      click_sidebar_button(btn_name: string): Chainable<any>

      /**
       * Click a row item in list view by index.
       */
      click_listview_row_item(row_no: number): Chainable<any>

      /**
       * Click a row item in list view by text.
       */
      click_listview_row_item_with_text(text: string): Chainable<any>

      /**
       * Click the filter button.
       */
      click_filter_button(): Chainable<any>

      /**
       * Click the primary action button in list view.
       */
      click_listview_primary_button(btn_name: string): Chainable<any>

      /**
       * Click the primary action button in document form.
       */
      click_doc_primary_button(btn_name: string): Chainable<any>

      /**
       * Click a timeline action button.
       */
      click_timeline_action_btn(btn_name: string): Chainable<any>

      /**
       * Select a checkbox in list view row by index.
       */
      select_listview_row_checkbox(row_no: number): Chainable<any>

      /**
       * Click a section header in a form.
       */
      click_form_section(section_name: string): Chainable<any>

      /**
       * Compare the current document with expected.
       */
      compare_document(expected_document: any): Chainable<any>
    }
  }
}

export {}

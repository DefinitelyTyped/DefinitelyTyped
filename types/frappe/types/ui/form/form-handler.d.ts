import type FrappeForm from './frappe-form.d.ts'
import type { DocTypeName } from '../../model/doctype.d.ts'
import type { ConditionalKeys } from '../../../utils/type-fest.d.ts'

/**
 * Form Scripts
 */
declare global {
  namespace frappe {
    namespace ui {
      namespace form {
        /**
         * Binds event handlers for a specific DocType.
         *
         * @typeParam DK            The key of the DocType to bind handlers for. Inferred from {@link doctype}.
         * @typeParam ParentDocType (Optional) When DK refers to a child‐table doctype,
         *                          you can specify the parent’s child‐table type
         *                          to add the appropriate triggers for that table.
         *
         * @param doctype           The DocType key to bind handlers for.
         * @param handlers          The event handlers to bind.
         *
         * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/form)}
         *
         * @example
         * For a parent DocType
         * ```ts
         * frappe.ui.form.on('Invoice', {
         *   setup(frm) {
         *     frm.doc.customer
         *   }
         * })
         * ```
         *
         * @example
         * For a child table, where the parent child-table type is `Invoice`, in which `Invoice` has a field named `items` of type `Invoice Item`. If the type is not specified, the trigger methods for that field will not show up in intellisense (but the typing of the arguments will still work)
         * ```ts
         * frappe.ui.form.on<'Invoice Item', Invoice>('Invoice Item', {
         *   items_add(frm, cdt, cdn) {
         *     const row = locals[cdt][cdn]
         *   }
         * })
         * ```
         */
        function on<DK extends Exclude<DocTypeKey, ChildDocTypeKey>>(
          doctype: DK,
          handlers: FormEventHandlers<DocTypeMap[DK]>
        ): void

        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        function on<DK extends ChildDocTypeKey, Parent extends DocType>(
          doctype: DK,
          handlers: FormEventHandlersChildTable<
            DocTypeMap[DK],
            ChildTableField<Parent, DocTypeMap[DK]>
          >
        ): void
      }
    }
  }
}

type FormEventHandler<DT extends DocType> = (frm: FrappeForm<DT>) => void
type FormEventHandlerChildTable<DT extends DocTypeChildTable> = (
  frm: FrappeForm<DT>,
  cdt: string,
  cdn: DocTypeName
) => void

/**
 * Handlers keyed by field names of the DocType.
 * Triggered when the field value changes.
 */
type FieldHandler<DT extends DocType> = Partial<
  Record<
    keyof DT,
    DT extends DocTypeChildTable
      ? FormEventHandlerChildTable<DT>
      : FormEventHandler<DT>
  >
>

interface EmailRecipientField {
  recipients: string[]
  cc: string[]
  bcc: string[]
}

/**
 * A set of form event handlers covering the Frappe form lifecycle.
 *
 * Hooks fire at specific stages:
 * - `setup`: initial form creation after metadata is loaded.
 * - `before_load`: before document data is bound to fields.
 * - `onload`: after data binding, before DOM render.
 * - `onload_post_render`: after full DOM render of form, including child tables.
 * - `refresh`: on every form refresh (load, save, submit, cancel).
 * - `validate`: before save, after built-in validation.
 * - `before_save`: just before sending data to backend.
 * - `after_save`: after successful save, before refresh.
 * - `before_submit`: before document submission.
 * - `on_submit`: after document submission.
 * - `before_cancel`: before cancelling the document.
 * - `after_cancel`: after cancellation, before refresh.
 * - `before_discard`: before discarding unsaved changes.
 * - `after_discard`: after discarding changes.
 * - `timeline_refresh`: when activity timeline loads or refreshes.
 * - `get_email_recipient_filters`: filter recipients in email dialog.
 * - `get_email_recipients`: customize email recipients list.
 *
 * @template DT The DocType model type.
 */

type FormEventHandlers<DT extends DocType = DocType> = {
  /**
   * Runs once when the form is initialized,
   * after metadata is loaded but before data load.
   *
   * @param frm The form instance being initialized.
   */
  setup?(frm: FrappeForm<DT>): void

  /**
   * Fires before document data is bound to form fields,
   * allowing default values or form properties to be set.
   *
   * @param frm The form instance before data binding.
   */
  before_load?(frm: FrappeForm<DT>): void

  /**
   * Fires after document data is loaded into form fields,
   * before any DOM rendering occurs.
   *
   * @param frm The form instance with data loaded.
   */
  onload?(frm: FrappeForm<DT>): void

  /**
   * Fires after the form is fully rendered to the DOM,
   * including child tables and custom fields.
   *
   * @param frm The form instance after render.
   */
  onload_post_render?(frm: FrappeForm<DT>): void

  /**
   * Runs on every form refresh,
   * including load, save, submit, and cancel actions.
   *
   * @param frm The form instance being refreshed.
   */
  refresh?(frm: FrappeForm<DT>): void

  /**
   * Invoked before saving,
   * after standard validation has passed.
   *
   * @param frm The form instance to validate.
   */
  validate?(frm: FrappeForm<DT>): void

  /**
   * Fires just before sending data to the server,
   * after `validate`.
   *
   * @param frm The form instance about to save.
   */
  before_save?(frm: FrappeForm<DT>): void

  /**
   * Fires after a successful save, before the form refreshes.
   *
   * @param frm The form instance after save.
   */
  after_save?(frm: FrappeForm<DT>): void

  /**
   * Fires before document submission, after save and validation.
   *
   * @param frm The form instance before submit.
   */
  before_submit?(frm: FrappeForm<DT>): void

  /**
   * Fires after document submission, before form refresh.
   *
   * @param frm The form instance after submit.
   */
  on_submit?(frm: FrappeForm<DT>): void

  /**
   * Fires before document cancellation.
   *
   * @param frm The form instance before cancel.
   */
  before_cancel?(frm: FrappeForm<DT>): void

  /**
   * Fires after document cancellation, before form refresh.
   *
   * @param frm The form instance after cancel.
   */
  after_cancel?(frm: FrappeForm<DT>): void

  /**
   * Fires before discarding unsaved changes, such as navigating away.
   *
   * @param frm The form instance before discard.
   */
  before_discard?(frm: FrappeForm<DT>): void

  /**
   * Fires after discarding unsaved changes.
   *
   * @param frm The form instance after discard.
   */
  after_discard?(frm: FrappeForm<DT>): void

  /**
   * Fires when the activity timeline is loaded or refreshed.
   *
   * @param frm The form instance whose timeline refreshed.
   */
  timeline_refresh?(frm: FrappeForm<DT>): void

  /**
   * Called by the email dialog to fetch default filters for email recipients. Should accept two parameters frm (the current form) and field ("recipients", "cc" or "bcc"), and return an array or dict of filters (related to the Contact doctype).
   *
   * @param frm The form instance for filtering recipients.
   */
  get_email_recipient_filters?(
    frm: FrappeForm<DT>,
    field: EmailRecipientField
  ): { [key: string]: string } | string[]

  /**
   * Called by the email dialog to fetch default recipients. Should accept two parameters frm (the current form) and field ("recipients", "cc" or "bcc"), and return a list of email addresses for this field.
   *
   * @param frm The form instance for email recipients.
   */
  get_email_recipients?(
    frm: FrappeForm<DT>,
    field: EmailRecipientField
  ): string[]
} & FieldHandler<DT>

/**
 * Table field event hook names for child table lifecycle.
 *
 * These hooks fire during row operations and rendering:
 * - `before_${F}_remove`: before removing a row
 * - `${F}_add`: after a new row is added
 * - `${F}_remove`: after a row has been removed
 * - `${F}_move`: after rows are reordered
 * - `form_render`: after a row is opened as a form
 *
 * @template F The field name of the child table in the parent form.
 */

type TableFieldEvents<F extends string> =
  | `before_${F}_remove`
  | `${F}_add`
  | `${F}_remove`
  | `${F}_move`
  | 'form_render'

/**
 * Handlers for child table events.
 *
 * Includes table lifecycle events and field change events for a child table.
 *
 * @template DT The child table DocType.
 * @template F The parent DocType's child table field name.
 */

type FormEventHandlersChildTable<
  DT extends DocTypeChildTable,
  F extends string,
> = Partial<Record<TableFieldEvents<F>, FormEventHandlerChildTable<DT>>> &
  FieldHandler<DT>

type DocTypeKey = keyof DocTypeMap

type InferFormHandler<DT extends DocType> = DT extends DocTypeChildTable
  ? FormEventHandlersChildTable<DT, string>
  : FormEventHandlers<DT>

type ChildDocTypeKey = {
  [K in DocTypeKey]: DocTypeMap[K] extends DocTypeChildTable ? K : never
}[DocTypeKey]

type ChildTableField<
  Parent extends DocType,
  Child extends DocTypeChildTable,
> = ConditionalKeys<Parent, Child[]> & string

export {}

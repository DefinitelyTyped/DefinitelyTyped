import FrappeDFBase from '../../common/frappe-df-base'
import { Arrayable } from '../../../utils/type-fest'

/**
 * Dialog and notification APIs
 * Documentation: {@link https://docs.frappe.io/framework/user/en/api/dialog}
 */
declare global {
  namespace frappe {
    namespace ui {
      class Dialog {
        constructor(opts: {
          title: string
          fields: FrappeDFBase[]
          size?: 'small' | 'large' | 'extra-large'
          primary_action_label?: string
          primary_action?: (values: any) => void
        })
        show(): void
        hide(): void
        set_value(fieldname: string, value: any): void
        get_value(fieldname: string): any
        set_primary_action(label: string, action: (values: any) => void): void
        set_df_property(fieldname: string, property: string, value: any): void
      }
    }

    /** Show a message in a modal dialog */
    function msgprint(
      message:
        | string
        | {
            title?: string
            message: string
            indicator?: string
            primary_action?: any
          }
    ): void

    /**
     * Show error message in a modal and throw exception.
     * Use as `frappe.throw_(...)` in TypeScript (maps to `frappe.throw` at runtime).
     */
    function throw_(error_message: string): never

    /** Prompt user for a value or list of values */
    function prompt(
      label: string,
      callback: (values: any) => void,
      title?: string,
      primary_label?: string
    ): void
    function prompt(
      df: Arrayable<FrappeDFBase>,
      callback: (values: any) => void,
      title?: string,
      primary_label?: string
    ): void

    /** Show a confirmation modal */
    function confirm(
      message: string,
      if_yes: () => void,
      if_no?: () => void
    ): void

    /** Show a warning modal */
    function warn(
      title: string,
      message_html: string,
      proceed_action: () => void,
      primary_label?: string,
      is_minimizable?: boolean
    ): void

    /** Show a non-blocking alert */
    function show_alert(
      message: string | { message: string; indicator?: string },
      seconds?: number
    ): void

    /** Show a progress bar */
    function show_progress(
      title: string,
      count: number,
      total: number,
      description?: string
    ): void
  }
}

export {}

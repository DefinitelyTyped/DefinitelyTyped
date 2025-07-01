import type FrappeResponse from '../common/response.d.ts'
import type { UnknownRecord, LiteralStringUnion }  from '../../utils/type-fest.d.ts'

/**
 * Requests APIs
 */
declare global {
  namespace frappe {
    /**
     * Call server-side methods via AJAX.
     *
     * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
     *
     * @example
     *
     * ```ts
     * const res = await frappe.call({ method: "frappe.core.doctype.user.user.get_roles", args: {} })
     * ```
     */
    function call<R = unknown>(
      opts: CallOptions<FrappeWhitelistedPathKey, R>
    ): Promise<FrappeResponse<R>>
    function call<M extends FrappeWhitelistedPathKey, R = unknown>(
      method: LiteralStringUnion<M>,
      args?: FrappeWhitelistedMethods[M] | UnknownRecord,
      callback?: (data: FrappeResponse<R>, responseText?: string) => void,
      headers?: Record<string, string>
    ): Promise<FrappeResponse<R>>

    /**
     * Promise-based server call
     *
     * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
     */
    // Internal note: it's unclear if xcall is still useful, it seems both `call` overloads already return a promise
    function xcall<M extends FrappeWhitelistedPathKey, R = unknown>(
      method: LiteralStringUnion<M>,
      params?: FrappeWhitelistedMethods[M] | UnknownRecord,
      type?: string,
      opts?: Partial<CallOptions<M, R>>
    ): Promise<FrappeResponse<R>>
  }
}

type FrappeWhitelistedPathKey = keyof FrappeWhitelistedMethods

interface CallOptions<M extends keyof FrappeWhitelistedMethods, R = unknown> {
  /**
   * The method to be called. This refers to a whitelisted method within a module
   * @example
   * "frappe.desk.form.load.get_form"
   */
  method: LiteralStringUnion<M>
  /**
   * The arguments to be passed to the method.
   */
  args?: FrappeWhitelistedMethods[M]
  /**
   * The callback function to be called when the method is successful.
   */
  callback?: (data: FrappeResponse<R>, responseText?: string) => void
  /**
   * The error callback function to be called when the method fails.
   */
  error?: (error: any) => void
  /**
   * The always callback function to be called when the method is complete.
   */
  always?: (data: FrappeResponse<R>) => void
  module?: string
  page?: string
  doc?: { doctype: string; name: string }
  type?: string
  url?: string
  api_version?: string
  quiet?: boolean
  no_spinner?: boolean
  freeze?: boolean
  freeze_message?: string
  btn?: any
  headers?: Record<string, string>
  error_handlers?: Record<string, (error: any) => void>
  debounce?: number
  queued?: (data: any) => void
  async?: boolean
  silent?: boolean
  cache?: boolean
  [key: string]: any
}

export {}

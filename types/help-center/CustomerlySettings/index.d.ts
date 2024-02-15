/**
 * Represents the Customerly object with various methods and properties.
 */
export type Custormerly = {
  /**
   * Indicates whether the Customerly object has been initialized.
   */
  initialized: boolean

  /**
   * Triggers a custom event with the specified name.
   */
  event: (name: string) => void

  /**
   * Sets an attribute with the specified name and value.
   */
  attribute: (name: string, value: string) => void

  /**
   * Updates the Customerly settings with the provided partial settings object.
   */
  update: (settings: RecursivePartial<CustomerlySettingsType>) => void

  /**
   * Loads the Customerly settings with the provided partial settings object.
   */
  load: (settings: RecursivePartial<CustomerlySettingsType>) => void

  /**
   * Shows the Customerly widget.
   */
  show: () => void

  /**
   * Hides the Customerly widget.
   */
  hide: () => void

  /**
   * Opens the Customerly widget.
   */
  open: () => void

  /**
   * Closes the Customerly widget.
   */
  close: () => void
}

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
  ? RecursivePartial<U>[]
  : T[P] extends Record<string, unknown>
  ? RecursivePartial<T[P]>
  : T[P]
}

export type CustomerlySettingsType = {
  widget_hide_mobile: boolean
  accentColor?: string
  app_id: string
  singleConversation: boolean
  autodetectLocale: boolean
  language: string
  user_id?: string
  name?: string
  email?: string
  email_hash?: string
  company?: Company
  attributes?: Attributes
}

export type Company = {
  company_id: string
  link: string
  name: string
  license_expire: string
  license_expire_at: number
  accountant: boolean
  created_at: number
  registration_service: number
  fic: boolean
  dic: boolean
  dic_signup_date: string
  dic_plan: string
  dic_license_expire: boolean
}

export type Attributes = {
  is_admin: boolean
  is_subuser: boolean
  is_employee: boolean
  is_through_accountant: boolean
  plan: string
  superaccount: boolean
  license_expire_at: number
  created_at: string
  privacy_info: string
  privacy_offers: string
  privacy_surveys: string
  privacy_third: string
}

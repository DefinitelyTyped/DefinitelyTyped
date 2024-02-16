import { Custormerly } from "../CustomerlySettings"

/**
 * Global interface declaration for the window object.
 */
declare global {
  interface Window {
    /**
     * Sets the current module name.
     */
    setCurrentModule: (moduleName: string) => void;

    /**
     * Global parameters for React.
     */
    reactGlobalParams: GlobalParams;

    /**
     * The Customerly object.
     */
    customerly?: Custormerly;

    /**
     * Opens the Customerly page.
     */
    openCustomerly: () => void;

    /**
     * Opens the tutorial page.
     */
    openTutorialPage: (id: number, type: string) => void;

    /**
     * Renders the calendar.
     */
    renderCalendar: () => void;

    /**
     * Logs out the user.
     */
    logout: () => void;

    /**
     * Changes the invoices family.
     */
    changeInvoicesFamily: (hash: string) => void;

    /**
     * Callback function after the old page is loaded.
     */
    afterOldPageLoad?: () => void;

    /**
     * Callback function before the old page is unloaded.
     */
    beforeOldPageUnload?: () => void;

    /**
     * Synchronizes the Redux fiscal year.
     */
    syncReduxFiscalYear: () => void;

    /**
     * Sets the Redux fiscal year.
     */
    setReduxFiscalYear: (year: number) => void;

    /**
     * Increments the accountants count.
     */
    incrementAccountantsCount: (value: number) => void;
  }
}

/**
 * Represents the global parameters used in the application.
 */
export interface GlobalParams {
  access_token: string
  adminAccountId: number
  api_host: string
  chat: ChatGlobal
  compute_host: string
  functions: Array<{ [key: string]: string }>
  isSupport: boolean
  peid: number
  permissions: Array<{ [key: string]: string }>
  person_hash: string
  plan: number
  secure_host: string
  suid: number
  uid: number
}

/**
 * Represents the global configuration for the chat feature.
 */
export interface ChatGlobal {
  /**
   * Indicates whether the chat is visible globally.
   */
  global_visible: boolean

  /**
   * Indicates whether the help center is visible.
   */
  help_visible: boolean

  /**
   * Indicates whether the chat should be instantiated.
   */
  instantiate: boolean

  /**
   * Indicates whether only a single conversation is allowed.
   */
  single_conversation: boolean
}

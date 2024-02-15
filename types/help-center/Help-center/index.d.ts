/**
 * Represents the HelpCenter object.
 */
export type HelpCenter = {
  initialized: boolean;
  dispatchQueue: never[];

  /**
   * Dispatches an action with data to the HelpCenter.
   */
  dispatch: (action: HelpCenterActionsType, data: HelpCenterConfigProps) => void;

  /**
   * Dequeues all actions in the dispatch queue.
   */
  dequeueAll: () => void;

  /**
   * Configures the HelpCenter with the provided configuration.
   */
  configure: (config: HelpCenterConfigProps) => void;

  /**
   * Hides the HelpCenter.
   */
  hide: () => void;

  /**
   * Shows the HelpCenter.
   */
  show: () => void;

  /**
   * Opens the HelpCenter.
   */
  open: () => void;

  /**
   * Logs out the user from the HelpCenter.
   */
  logout: () => void;

  /**
   * Logs in the user to the HelpCenter with the provided configuration.
   */
  login: (config: HelpCenterConfigProps) => void;
}

export enum HelpCenterActionsType {
  INIT = 'init',
  CONFIGURE = 'configure',
  SHOW = 'show',
  HIDE = 'hide',
  OPEN = 'open',
  LOGOUT = 'logout',
  LOGIN = 'login',
  DEQUEUE_ALL = 'dequeueAll'
}

export type HelpCenterConfigProps = {
  config: {
    backColor?: string
    companyId?: number
    companyHash?: string
    language?: string
    isSupport?: boolean
    left?: boolean
    personId?: number
    realm: Realms
    textColor?: string
  }
}

export enum Realms {
  FIC = 'fic',
  DIC = 'dic',
  RESELLERS = 'resellers',
  DIC_ES = 'dic-es'
}

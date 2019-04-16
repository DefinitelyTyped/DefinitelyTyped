/**
 * An enumeration of valid command string.
 */
export interface ICommandName {
  GET_SERVER_STATUS: string;

  NEW_SESSION: string;
  GET_SESSIONS: string;
  DESCRIBE_SESSION: string;

  CLOSE: string;
  QUIT: string;

  GET_CURRENT_URL: string;
  GET: string;
  GO_BACK: string;
  GO_FORWARD: string;
  REFRESH: string;

  ADD_COOKIE: string;
  GET_COOKIE: string;
  GET_ALL_COOKIES: string;
  DELETE_COOKIE: string;
  DELETE_ALL_COOKIES: string;

  GET_ACTIVE_ELEMENT: string;
  FIND_ELEMENT: string;
  FIND_ELEMENTS: string;
  FIND_CHILD_ELEMENT: string;
  FIND_CHILD_ELEMENTS: string;

  CLEAR_ELEMENT: string;
  CLICK_ELEMENT: string;
  SEND_KEYS_TO_ELEMENT: string;
  SUBMIT_ELEMENT: string;

  GET_CURRENT_WINDOW_HANDLE: string;
  GET_WINDOW_HANDLES: string;
  GET_WINDOW_POSITION: string;
  SET_WINDOW_POSITION: string;
  GET_WINDOW_SIZE: string;
  SET_WINDOW_SIZE: string;
  MAXIMIZE_WINDOW: string;

  SWITCH_TO_WINDOW: string;
  SWITCH_TO_FRAME: string;
  GET_PAGE_SOURCE: string;
  GET_TITLE: string;

  EXECUTE_SCRIPT: string;
  EXECUTE_ASYNC_SCRIPT: string;

  GET_ELEMENT_TEXT: string;
  GET_ELEMENT_TAG_NAME: string;
  IS_ELEMENT_SELECTED: string;
  IS_ELEMENT_ENABLED: string;
  IS_ELEMENT_DISPLAYED: string;
  GET_ELEMENT_LOCATION: string;
  GET_ELEMENT_LOCATION_IN_VIEW: string;
  GET_ELEMENT_SIZE: string;
  GET_ELEMENT_ATTRIBUTE: string;
  GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string;
  ELEMENT_EQUALS: string;

  SCREENSHOT: string;
  IMPLICITLY_WAIT: string;
  SET_SCRIPT_TIMEOUT: string;
  SET_TIMEOUT: string;

  ACCEPT_ALERT: string;
  DISMISS_ALERT: string;
  GET_ALERT_TEXT: string;
  SET_ALERT_TEXT: string;

  EXECUTE_SQL: string;
  GET_LOCATION: string;
  SET_LOCATION: string;
  GET_APP_CACHE: string;
  GET_APP_CACHE_STATUS: string;
  CLEAR_APP_CACHE: string;
  IS_BROWSER_ONLINE: string;
  SET_BROWSER_ONLINE: string;

  GET_LOCAL_STORAGE_ITEM: string;
  GET_LOCAL_STORAGE_KEYS: string;
  SET_LOCAL_STORAGE_ITEM: string;
  REMOVE_LOCAL_STORAGE_ITEM: string;
  CLEAR_LOCAL_STORAGE: string;
  GET_LOCAL_STORAGE_SIZE: string;

  GET_SESSION_STORAGE_ITEM: string;
  GET_SESSION_STORAGE_KEYS: string;
  SET_SESSION_STORAGE_ITEM: string;
  REMOVE_SESSION_STORAGE_ITEM: string;
  CLEAR_SESSION_STORAGE: string;
  GET_SESSION_STORAGE_SIZE: string;

  SET_SCREEN_ORIENTATION: string;
  GET_SCREEN_ORIENTATION: string;

  // These belong to the Advanced user interactions - an element is
  // optional for these commands.
  CLICK: string;
  DOUBLE_CLICK: string;
  MOUSE_DOWN: string;
  MOUSE_UP: string;
  MOVE_TO: string;
  SEND_KEYS_TO_ACTIVE_ELEMENT: string;

  // These belong to the Advanced Touch API
  TOUCH_SINGLE_TAP: string;
  TOUCH_DOWN: string;
  TOUCH_UP: string;
  TOUCH_MOVE: string;
  TOUCH_SCROLL: string;
  TOUCH_DOUBLE_TAP: string;
  TOUCH_LONG_PRESS: string;
  TOUCH_FLICK: string;

  GET_AVAILABLE_LOG_TYPES: string;
  GET_LOG: string;
  GET_SESSION_LOGS: string;

  UPLOAD_FILE: string;

  ACTIONS: string;
  CLEAR_ACTIONS: string;

  LEGACY_ACTION_CLICK: string;
  LEGACY_ACTION_DOUBLE_CLICK: string;
  LEGACY_ACTION_MOUSE_DOWN: string;
  LEGACY_ACTION_MOUSE_UP: string;
  LEGACY_ACTION_MOUSE_MOVE: string;
  LEGACY_ACTION_SEND_KEYS: string;
  LEGACY_ACTION_TOUCH_DOWN: string;
  LEGACY_ACTION_TOUCH_UP: string;
  LEGACY_ACTION_TOUCH_MOVE: string;
  LEGACY_ACTION_TOUCH_SCROLL: string;
  LEGACY_ACTION_TOUCH_LONG_PRESS: string;
  LEGACY_ACTION_TOUCH_FLICK: string;
  LEGACY_ACTION_TOUCH_SINGLE_TAP: string;
  LEGACY_ACTION_TOUCH_DOUBLE_TAP: string;
}

/**
 * The names of Command-s
 */
export const Name: ICommandName;

/**
 * Describes a command to be executed by the WebDriverJS framework.
 * @param {!CommandName} name The name of this command.
 * @constructor
 */
export class Command {
  // region Constructors

  /**
   * @param {!CommandName} name The name of this command.
   * @constructor
   */
  constructor(name: string);

  // endregion

  // region Methods

  /**
   * @return {!CommandName} This command's name.
   */
  getName(): string;

  /**
   * Sets a parameter to send with this command.
   * @param {string} name The parameter name.
   * @param {*} value The parameter value.
   * @return {!Command} A self reference.
   */
  setParameter(name: string, value: any): Command;

  /**
   * Sets the parameters for this command.
   * @param {!Object.<*>} parameters The command parameters.
   * @return {!Command} A self reference.
   */
  setParameters(parameters: any): Command;

  /**
   * Returns a named command parameter.
   * @param {string} key The parameter key to look up.
   * @return {*} The parameter value, or undefined if it has not been set.
   */
  getParameter(key: string): any;

  /**
   * @return {!Object.<*>} The parameters to send with this command.
   */
  getParameters(): any;

  // endregion
}

/**
 * Enum of legacy error codes.
 * TODO: remove this when all code paths have been switched to the new error
 * types.
 * @deprecated
 * @enum {number}
 */
export const ErrorCode: {
    SUCCESS: 0;
    NO_SUCH_SESSION: 6;
    NO_SUCH_ELEMENT: 7;
    NO_SUCH_FRAME: 8;
    UNKNOWN_COMMAND: 9;
    UNSUPPORTED_OPERATION: 9;
    STALE_ELEMENT_REFERENCE: 10;
    ELEMENT_NOT_VISIBLE: 11;
    INVALID_ELEMENT_STATE: 12;
    UNKNOWN_ERROR: 13;
    ELEMENT_NOT_SELECTABLE: 15;
    JAVASCRIPT_ERROR: 17;
    XPATH_LOOKUP_ERROR: 19;
    TIMEOUT: 21;
    NO_SUCH_WINDOW: 23;
    INVALID_COOKIE_DOMAIN: 24;
    UNABLE_TO_SET_COOKIE: 25;
    UNEXPECTED_ALERT_OPEN: 26;
    NO_SUCH_ALERT: 27;
    SCRIPT_TIMEOUT: 28;
    INVALID_ELEMENT_COORDINATES: 29;
    IME_NOT_AVAILABLE: 30;
    IME_ENGINE_ACTIVATION_FAILED: 31;
    INVALID_SELECTOR_ERROR: 32;
    SESSION_NOT_CREATED: 33;
    MOVE_TARGET_OUT_OF_BOUNDS: 34;
    SQL_DATABASE_ERROR: 35;
    INVALID_XPATH_SELECTOR: 51;
    INVALID_XPATH_SELECTOR_RETURN_TYPE: 52;
    ELEMENT_NOT_INTERACTABLE: 60;
    INVALID_ARGUMENT: 61;
    NO_SUCH_COOKIE: 62;
    UNABLE_TO_CAPTURE_SCREEN: 63;
    ELEMENT_CLICK_INTERCEPTED: 64;
    METHOD_NOT_ALLOWED: 405;
};

/**
 * The base WebDriver error type. This error type is only used directly when a
 * more appropriate category is not defined for the offending error.
 * @param {string=} opt_error the error message, if any.
 */
export class WebDriverError extends Error {
    remoteStacktrace: string;
    constructor(opt_error?: string);
}

/**
 * Indicates the shadow root is no longer attached to the DOM
 *  @param {string=} opt_error the error message, if any.
 */
export class DetachedShadowRootError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Indicates a {@linkplain ./webdriver.WebElement#click click command} could not
 * completed because the click target is obscured by other elements on the
 * page.
 * @param {string=} opt_error the error message, if any.
 */
export class ElementClickInterceptedError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An attempt was made to select an element that cannot be selected.
 * @param {string=} opt_error the error message, if any.
 */
export class ElementNotSelectableError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Indicates a command could not be completed because the target element is
 * not pointer or keyboard interactable. This will often occur if an element
 * is present in the DOM, but not rendered (i.e. its CSS style has
 * "display: none").
 * @param {string=} opt_error the error message, if any.
 */
export class ElementNotInteractableError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Indicates a navigation event caused the browser to generate a certificate
 * warning. This is usually caused by an expired or invalid TLS certificate.
 * @param {string=} opt_error the error message, if any.
 */
export class InsecureCertificateError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * The arguments passed to a command are either invalid or malformed.
 * @param {string=} opt_error the error message, if any.
 */
export class InvalidArgumentError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An illegal attempt was made to set a cookie under a different domain than
 * the current page.
 * @param {string=} opt_error the error message, if any.
 */
export class InvalidCookieDomainError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * The coordinates provided to an interactions operation are invalid.
 * @param {string=} opt_error the error message, if any.
 */
export class InvalidCoordinatesError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An element command could not be completed because the element is in an
 * invalid state, e.g. attempting to click an element that is no longer attached
 * to the document.
 * @param {string=} opt_error the error message, if any.
 */
export class InvalidElementStateError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Argument was an invalid selector.
 * @param {string=} opt_error the error message, if any.
 */
export class InvalidSelectorError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Occurs when a command is directed to a session that does not exist.
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchSessionError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An error occurred while executing JavaScript supplied by the user.
 * @param {string=} opt_error the error message, if any.
 */
export class JavascriptError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * The target for mouse interaction is not in the browser’s viewport and cannot
 * be brought into that viewport.
 * @param {string=} opt_error the error message, if any.
 */
export class MoveTargetOutOfBoundsError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An attempt was made to operate on a modal dialog when one was not open.
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchAlertError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Indicates a named cookie could not be found in the cookie jar for the
 * currently selected document.
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchCookieError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An element could not be located on the page using the given search
 * parameters.
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchElementError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A ShadowRoot could not be located on the element
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchShadowRootError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A request to switch to a frame could not be satisfied because the frame
 * could not be found.
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchFrameError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A request to switch to a window could not be satisfied because the window
 * could not be found.
 * @param {string=} opt_error the error message, if any.
 */
export class NoSuchWindowError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A script did not complete before its timeout expired.
 * @param {string=} opt_error the error message, if any.
 */
export class ScriptTimeoutError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A new session could not be created.
 * @param {string=} opt_error the error message, if any.
 */
export class SessionNotCreatedError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An element command failed because the referenced element is no longer
 * attached to the DOM.
 * @param {string=} opt_error the error message, if any.
 */
export class StaleElementReferenceError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * An operation did not complete before its timeout expired.
 * @param {string=} opt_error the error message, if any.
 */
export class TimeoutError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A request to set a cookie’s value could not be satisfied.
 * @param {string=} opt_error the error message, if any.
 */
export class UnableToSetCookieError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A screen capture operation was not possible.
 * @param {string=} opt_error the error message, if any.
 */
export class UnableToCaptureScreenError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * A modal dialog was open, blocking this operation.
 * @param {string=} opt_error the error message, if any.
 * @param {string=} opt_text the text of the open dialog, if available.
 */
export class UnexpectedAlertOpenError extends WebDriverError {
    constructor(opt_error?: string, opt_text?: string);

    /**
     * @return {(string|undefined)} The text displayed with the unhandled alert,
     *     if available.
     */
    getAlertText(): string | undefined;
}

/**
 * A command could not be executed because the remote end is not aware of it.
 * @param {string=} opt_error the error message, if any.
 */
export class UnknownCommandError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * The requested command matched a known URL but did not match an method for
 * that URL.
 * @param {string=} opt_error the error message, if any.
 */
export class UnknownMethodError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Reports an unsupported operation.
 * @param {string=} opt_error the error message, if any.
 */
export class UnsupportedOperationError extends WebDriverError {
    constructor(opt_error?: string);
}

/**
 * Checks a legacy response from the Selenium 2.0 wire protocol for an error.
 * @param {*} responseObj the response object to check.
 * @return {*} responseObj the original response if it does not define an error.
 * @throws {WebDriverError} if the response object defines an error.
 */
export function checkLegacyResponse<T>(responseObj: T): T;

/**
 * @param {*} err The error to encode.
 * @return {{error: string, message: string}} the encoded error.
 */
export function encodeError(err: any): { error: string; message: string };

/**
 * Tests if the given value is a valid error response object according to the
 * W3C WebDriver spec.
 *
 * @param {?} data The value to test.
 * @return {boolean} Whether the given value data object is a valid error
 *     response.
 * @see https://w3c.github.io/webdriver/webdriver-spec.html#protocol
 */
export function isErrorResponse(data?: any): boolean;

/**
 * Throws an error coded from the W3C protocol. A generic error will be thrown
 * if the provided `data` is not a valid encoded error.
 *
 * @param {{error: string, message: string}} data The error data to decode.
 * @throws {WebDriverError} the decoded error.
 * @see https://w3c.github.io/webdriver/webdriver-spec.html#protocol
 */
export function throwDecodedError(data: { error: string; message: string }): void;

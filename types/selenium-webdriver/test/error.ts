import {
    checkLegacyResponse,
    DetachedShadowRootError,
    ElementClickInterceptedError,
    ElementNotInteractableError,
    ElementNotSelectableError,
    encodeError,
    ErrorCode,
    InsecureCertificateError,
    InvalidArgumentError,
    InvalidCookieDomainError,
    InvalidCoordinatesError,
    InvalidElementStateError,
    InvalidSelectorError,
    isErrorResponse,
    JavascriptError,
    MoveTargetOutOfBoundsError,
    NoSuchAlertError,
    NoSuchCookieError,
    NoSuchElementError,
    NoSuchFrameError,
    NoSuchSessionError,
    NoSuchShadowRootError,
    NoSuchWindowError,
    ScriptTimeoutError,
    SessionNotCreatedError,
    StaleElementReferenceError,
    throwDecodedError,
    TimeoutError,
    UnableToCaptureScreenError,
    UnableToSetCookieError,
    UnexpectedAlertOpenError,
    UnknownCommandError,
    UnknownMethodError,
    UnsupportedOperationError,
    WebDriverError,
} from "selenium-webdriver/lib/error";

export function TestError() {
    const success: 0 = ErrorCode.SUCCESS;
    const noSuchSession: 6 = ErrorCode.NO_SUCH_SESSION;
    const noSuchElement: 7 = ErrorCode.NO_SUCH_ELEMENT;
    const noSuchFrame: 8 = ErrorCode.NO_SUCH_FRAME;
    const unknownCommand: 9 = ErrorCode.UNKNOWN_COMMAND;
    const unsupportedOperation: 9 = ErrorCode.UNSUPPORTED_OPERATION;
    const staleElementReference: 10 = ErrorCode.STALE_ELEMENT_REFERENCE;
    const elementNotVisible: 11 = ErrorCode.ELEMENT_NOT_VISIBLE;
    const invalidElementState: 12 = ErrorCode.INVALID_ELEMENT_STATE;
    const unknownError: 13 = ErrorCode.UNKNOWN_ERROR;
    const elementNotSelectable: 15 = ErrorCode.ELEMENT_NOT_SELECTABLE;
    const javascriptErrorEnum: 17 = ErrorCode.JAVASCRIPT_ERROR;
    const xPathLookupError: 19 = ErrorCode.XPATH_LOOKUP_ERROR;
    const timeout: 21 = ErrorCode.TIMEOUT;
    const noSuchWindow: 23 = ErrorCode.NO_SUCH_WINDOW;
    const invalidCookieDomain: 24 = ErrorCode.INVALID_COOKIE_DOMAIN;
    const unableToSetCookie: 25 = ErrorCode.UNABLE_TO_SET_COOKIE;
    const unexpectedAlertOpen: 26 = ErrorCode.UNEXPECTED_ALERT_OPEN;
    const noSuchAlert: 27 = ErrorCode.NO_SUCH_ALERT;
    const scriptTimeout: 28 = ErrorCode.SCRIPT_TIMEOUT;
    const invalidElementCoordinates: 29 = ErrorCode.INVALID_ELEMENT_COORDINATES;
    const imeNotAvailable: 30 = ErrorCode.IME_NOT_AVAILABLE;
    const imeEngineActivationFailed: 31 = ErrorCode.IME_ENGINE_ACTIVATION_FAILED;
    const invalidSelectorErrorEnum: 32 = ErrorCode.INVALID_SELECTOR_ERROR;
    const sessionNotCreated: 33 = ErrorCode.SESSION_NOT_CREATED;
    const moveTargetOutOfBounds: 34 = ErrorCode.MOVE_TARGET_OUT_OF_BOUNDS;
    const sqlDatabaseError: 35 = ErrorCode.SQL_DATABASE_ERROR;
    const invalidXPathSelector: 51 = ErrorCode.INVALID_XPATH_SELECTOR;
    const invalidXPathSelectorReturnType: 52 = ErrorCode.INVALID_XPATH_SELECTOR_RETURN_TYPE;
    const elementNotInteractable: 60 = ErrorCode.ELEMENT_NOT_INTERACTABLE;
    const invalidArgument: 61 = ErrorCode.INVALID_ARGUMENT;
    const noSuchCookie: 62 = ErrorCode.NO_SUCH_COOKIE;
    const unableToCaptureScreen: 63 = ErrorCode.UNABLE_TO_CAPTURE_SCREEN;
    const elementClickIntercepted: 64 = ErrorCode.ELEMENT_CLICK_INTERCEPTED;
    const methodNotAllowed: 405 = ErrorCode.METHOD_NOT_ALLOWED;

    const webDriverError: WebDriverError = new WebDriverError();
    const webDriverErrorWithMessage: WebDriverError = new WebDriverError("message");
    const remoteStacktrace: string = webDriverErrorWithMessage.remoteStacktrace;

    const detachedShadowRootError: DetachedShadowRootError = new DetachedShadowRootError();
    const detachedShadowRootErrorWithMessage: DetachedShadowRootError = new DetachedShadowRootError("message");

    const elementClickInterceptedError: ElementClickInterceptedError = new ElementClickInterceptedError();
    const elementClickInterceptedErrorWithMessage: ElementClickInterceptedError = new ElementClickInterceptedError(
        "message",
    );

    const elementNotSelectableError: ElementNotSelectableError = new ElementNotSelectableError();
    const elementNotSelectableErrorWithMessage: ElementNotSelectableError = new ElementNotSelectableError("message");

    const elementNotInteractableError: ElementNotInteractableError = new ElementNotInteractableError();
    const elementNotInteractableErrorWithMessage: ElementNotInteractableError = new ElementNotInteractableError(
        "message",
    );

    const insecureCertificateError: InsecureCertificateError = new InsecureCertificateError();
    const insecureCertificateErrorWithMessage: InsecureCertificateError = new InsecureCertificateError("message");

    const invalidArgumentError: InvalidArgumentError = new InvalidArgumentError();
    const invalidArgumentErrorWithMessage: InvalidArgumentError = new InvalidArgumentError("message");

    const invalidCookieDomainError: InvalidCookieDomainError = new InvalidCookieDomainError();
    const invalidCookieDomainErrorWithMessage: InvalidCookieDomainError = new InvalidCookieDomainError("message");

    const invalidCoordinatesError: InvalidCoordinatesError = new InvalidCoordinatesError();
    const invalidCoordinatesErrorWithMessage: InvalidCoordinatesError = new InvalidCoordinatesError("message");

    const invalidElementStateError: InvalidElementStateError = new InvalidElementStateError();
    const invalidElementStateErrorWithMessage: InvalidElementStateError = new InvalidElementStateError("message");

    const invalidSelectorError: InvalidSelectorError = new InvalidSelectorError();
    const invalidSelectorErrorWithMessage: InvalidSelectorError = new InvalidSelectorError("message");

    const noSuchSessionError: NoSuchSessionError = new NoSuchSessionError();
    const noSuchSessionErrorWithMessage: NoSuchSessionError = new NoSuchSessionError("message");

    const javascriptError: JavascriptError = new JavascriptError();
    const javascriptErrorWithMessage: JavascriptError = new JavascriptError("message");

    const moveTargetOutOfBoundsError: MoveTargetOutOfBoundsError = new MoveTargetOutOfBoundsError();
    const moveTargetOutOfBoundsErrorWithMessage: MoveTargetOutOfBoundsError = new MoveTargetOutOfBoundsError("message");

    const noSuchAlertError: NoSuchAlertError = new NoSuchAlertError();
    const noSuchAlertErrorWithMessage: NoSuchAlertError = new NoSuchAlertError("message");

    const noSuchCookieError: NoSuchCookieError = new NoSuchCookieError();
    const noSuchCookieErrorWithMessage: NoSuchCookieError = new NoSuchCookieError("message");

    const noSuchElementError: NoSuchElementError = new NoSuchElementError();
    const noSuchElementErrorWithMessage: NoSuchElementError = new NoSuchElementError("message");

    const noSuchShadowRootError: NoSuchShadowRootError = new NoSuchShadowRootError();
    const noSuchShadowRootErrorWithMessage: NoSuchShadowRootError = new NoSuchShadowRootError("message");

    const noSuchFrameError: NoSuchFrameError = new NoSuchFrameError();
    const noSuchFrameErrorWithMessage: NoSuchFrameError = new NoSuchFrameError("message");

    const noSuchWindowError: NoSuchWindowError = new NoSuchWindowError();
    const noSuchWindowErrorWithMessage: NoSuchWindowError = new NoSuchWindowError("message");

    const scriptTimeoutError: ScriptTimeoutError = new ScriptTimeoutError();
    const scriptTimeoutErrorWithMessage: ScriptTimeoutError = new ScriptTimeoutError("message");

    const sessionNotCreatedError: SessionNotCreatedError = new SessionNotCreatedError();
    const sessionNotCreatedErrorWithMessage: SessionNotCreatedError = new SessionNotCreatedError("message");

    const staleElementReferenceError: StaleElementReferenceError = new StaleElementReferenceError();
    const staleElementReferenceErrorWithMessage: StaleElementReferenceError = new StaleElementReferenceError("message");

    const timeoutError: TimeoutError = new TimeoutError();
    const timeoutErrorWithMessage: TimeoutError = new TimeoutError("message");

    const unableToSetCookieError: UnableToSetCookieError = new UnableToSetCookieError();
    const unableToSetCookieErrorWithMessage: UnableToSetCookieError = new UnableToSetCookieError("message");

    const unableToCaptureScreenError: UnableToCaptureScreenError = new UnableToCaptureScreenError();
    const unableToCaptureScreenErrorWithMessage: UnableToCaptureScreenError = new UnableToCaptureScreenError("message");

    const unexpectedAlertOpenError: UnexpectedAlertOpenError = new UnexpectedAlertOpenError();
    const unexpectedAlertOpenErrorWithMessage: UnexpectedAlertOpenError = new UnexpectedAlertOpenError("message");
    const alertText: string | undefined = unexpectedAlertOpenErrorWithMessage.getAlertText();

    const unknownCommandError: UnknownCommandError = new UnknownCommandError();
    const unknownCommandErrorWithMessage: UnknownCommandError = new UnknownCommandError("message");

    const unknownMethodError: UnknownMethodError = new UnknownMethodError();
    const unknownMethodErrorWithMessage: UnknownMethodError = new UnknownMethodError("message");

    const unsupportedOperationError: UnsupportedOperationError = new UnsupportedOperationError();
    const unsupportedOperationErrorWithMessage: UnsupportedOperationError = new UnsupportedOperationError("message");

    const encodedError: { error: string; message: string } = encodeError(new Error());
    throwDecodedError(encodedError);
    const nonLegayResponse: {} = checkLegacyResponse({});
    const errorResponse: boolean = isErrorResponse({});
}

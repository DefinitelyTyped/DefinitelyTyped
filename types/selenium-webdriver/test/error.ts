import {
    WebDriverError,
    DetachedShadowRootError,
    ElementClickInterceptedError,
    ElementNotSelectableError,
    ElementNotInteractableError,
    InsecureCertificateError,
    InvalidArgumentError,
} from 'selenium-webdriver/lib/error';

export function TestError() {
    const webDriverError: WebDriverError = new WebDriverError();
    const webDriverErrorWithMessage: WebDriverError = new WebDriverError('message');
    const detachedShadowRootError: DetachedShadowRootError = new DetachedShadowRootError();
    const detachedShadowRootErrorMessage: DetachedShadowRootError = new DetachedShadowRootError('message');

    const elementClickInterceptedError: ElementClickInterceptedError = new ElementClickInterceptedError();
    const elementClickInterceptedErrorMessage: ElementClickInterceptedError = new ElementClickInterceptedError(
        'message',
    );

    const elementNotSelectableError: ElementNotSelectableError = new ElementNotSelectableError();
    const elementNotSelectableErrorMessage: ElementNotSelectableError = new ElementNotSelectableError('message');

    const elementNotInteractableError: ElementNotInteractableError = new ElementNotInteractableError();
    const elementNotInteractableErrorMessage: ElementNotInteractableError = new ElementNotInteractableError('message');

    const insecureCertificateError: InsecureCertificateError = new InsecureCertificateError();
    const insecureCertificateErrorMessage: InsecureCertificateError = new InsecureCertificateError('message');

    const invalidArgumentError: InvalidArgumentError = new InvalidArgumentError();
    const invalidArgumentErrorMessage: InvalidArgumentError = new InvalidArgumentError('message');

    

}

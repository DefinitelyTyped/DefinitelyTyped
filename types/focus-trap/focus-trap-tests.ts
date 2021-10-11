import { createFocusTrap } from 'focus-trap';

/**
 * test from official documentation example
 * https://github.com/focus-trap/focus-trap#examples
 */
const container = document.getElementById('default') as HTMLElement;

const trap = createFocusTrap('#default', {
    onActivate: () => container.classList.add('is-active'),
    onDeactivate: () => container.classList.remove('is-active'),
});

document.getElementById('activate-default')!.addEventListener('click', () => trap.activate);
document.getElementById('deactivate-default')!.addEventListener('click', () => trap.deactivate);

/**
 * other tests
 */
const htmlElementMock = document.getElementById('htmlElement') as HTMLElement;

const trapTest = createFocusTrap(['#element1', '#element2'], {
    onActivate: () => container.classList.add('is-active'),
    onPostActivate: () => {
        container.classList.add('is-active');
    },
    checkCanFocusTrap: ([htmlElement1, htmlElement2, svgElement]) =>
        new Promise(() => svgElement.classList.add('is-active')),
    onDeactivate: () => container.classList.add('is-active'),
    onPostDeactivate: () => container.classList.add('is-active'),
    checkCanReturnFocus: htmlElement => new Promise(() => htmlElement.classList.add('is-active')),
    initialFocus: () => document.getElementById('htmlElement')!,
    fallbackFocus: '#fallbackfocus',
    escapeDeactivates: e => e.key === 'Escape',
    clickOutsideDeactivates: e => e.altKey,
    allowOutsideClick: e => e.altKey,
    returnFocusOnDeactivate: false,
    setReturnFocus: previousActiveElement => {
        previousActiveElement.hasAttribute('test');
        return false;
    },
    preventScroll: false,
    delayInitialFocus: false,
    document: window.document,
});

createFocusTrap(htmlElementMock, {});
createFocusTrap([htmlElementMock, htmlElementMock, htmlElementMock], {});

trapTest.activate();
trapTest.activate({});
trapTest.activate({
    onActivate: () => {},
    onPostActivate: () => container.classList.add('is-active'),
    checkCanFocusTrap: ([htmlElement]) => new Promise(() => htmlElement.classList.add('is-active')),
});
trapTest.deactivate();
trapTest.deactivate({});
trapTest.deactivate({
    returnFocus: true,
    onDeactivate: () => {},
    onPostDeactivate: () => container.classList.add('is-active'),
    checkCanReturnFocus: trigger => new Promise(() => trigger.classList.add('is-active')),
});
trapTest.pause().unpause().updateContainerElements();

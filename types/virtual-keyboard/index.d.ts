// Type definitions for virtual-keyboard 1.26
// Project: https://www.npmjs.com/package/virtual-keyboard
// Definitions by: Bogdan Surai <https://github.com/bsurai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

export type kbEventHandler = (event?: Event | string, keyboard?: Element, el?: Element) => void;

export interface NavigateOptions {
    focusClass?: string;
    position?: number[];
    rowLooping?: boolean;
    toggleMode?: boolean;
}

export interface CustomLayout {
    [index: string]: string[];
}

export interface KeyboardOptions {
    type: string;
    layout?: string;
    color?: string;
    class?: string;
    updateOnChange?: boolean;
    customLayout?: CustomLayout;
    position?: boolean | object;
    reposition?: boolean;
    css?: object;
    display?: object;
    language?: string | string[];
    wheelMessage?: string;
    comboRegex?: RegExp;
    rtl?: boolean;
    acceptValid?: boolean;
    alwaysOpen?: boolean;
    appendLocally?: boolean;
    appendTo?: string | object;
    autoAccept?: boolean;
    autoAcceptOnEsc?: boolean;
    autoAcceptOnValid?: boolean;
    cancelClose?: boolean;
    caretToEnd?: boolean;
    closeByClickEvent?: boolean;
    combos?: object;
    enterMod?: string;
    enterNavigation?: boolean;
    ignoreEsc?: boolean;
    initialFocus?: boolean;
    keyBinding?: string;
    lockInput?: boolean;
    maxInsert?: boolean;
    maxLength?: boolean | number;
    noFocus?: boolean;
    openOn?: string;
    preventPaste?: string;
    repeatDelay?: number;
    repeatRate?: number;
    resetDefault?: boolean;
    restrictInclude?: string;
    restrictInput?: boolean;
    scrollAdjustment?: number | string;
    stayOpen?: boolean;
    stickyShift?: boolean;
    stopAtEnd?: boolean;
    tabNavigation?: boolean;
    useCombos?: boolean;
    usePreview?: boolean;
    useWheel?: boolean;
    userClosed?: boolean;
    accepted?: kbEventHandler;
    beforeClose?: kbEventHandler;
    beforeInsert?: kbEventHandler;
    beforeVisible?: kbEventHandler;
    buildKey?: kbEventHandler;
    canceled?: kbEventHandler;
    change?: kbEventHandler;
    hidden?: kbEventHandler;
    initialized?: kbEventHandler;
    restricted?: kbEventHandler;
    switchInput?: kbEventHandler;
    validate?: kbEventHandler;
    visible?: kbEventHandler;
}

declare global {
    interface JQuery {
        keyboard(options: KeyboardOptions): this;
        addNavigation(options: NavigateOptions): this;
    }
}

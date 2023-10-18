/// <reference types="jquery" />

export type kbEventHandler = (event?: Event | string, keyboard?: Element, el?: Element) => void;

export interface NavigateOptions {
    focusClass?: string | undefined;
    position?: number[] | undefined;
    rowLooping?: boolean | undefined;
    toggleMode?: boolean | undefined;
}

export interface CustomLayout {
    [index: string]: string[];
}

export interface KeyboardOptions {
    type: string;
    layout?: string | undefined;
    color?: string | undefined;
    class?: string | undefined;
    updateOnChange?: boolean | undefined;
    customLayout?: CustomLayout | undefined;
    position?: boolean | object | undefined;
    reposition?: boolean | undefined;
    css?: object | undefined;
    display?: object | undefined;
    language?: string | string[] | undefined;
    wheelMessage?: string | undefined;
    comboRegex?: RegExp | undefined;
    rtl?: boolean | undefined;
    acceptValid?: boolean | undefined;
    alwaysOpen?: boolean | undefined;
    appendLocally?: boolean | undefined;
    appendTo?: string | object | undefined;
    autoAccept?: boolean | undefined;
    autoAcceptOnEsc?: boolean | undefined;
    autoAcceptOnValid?: boolean | undefined;
    cancelClose?: boolean | undefined;
    caretToEnd?: boolean | undefined;
    closeByClickEvent?: boolean | undefined;
    combos?: object | undefined;
    enterMod?: string | undefined;
    enterNavigation?: boolean | undefined;
    ignoreEsc?: boolean | undefined;
    initialFocus?: boolean | undefined;
    keyBinding?: string | undefined;
    lockInput?: boolean | undefined;
    maxInsert?: boolean | undefined;
    maxLength?: boolean | number | undefined;
    noFocus?: boolean | undefined;
    openOn?: string | undefined;
    preventPaste?: string | undefined;
    repeatDelay?: number | undefined;
    repeatRate?: number | undefined;
    resetDefault?: boolean | undefined;
    restrictInclude?: string | undefined;
    restrictInput?: boolean | undefined;
    scrollAdjustment?: number | string | undefined;
    stayOpen?: boolean | undefined;
    stickyShift?: boolean | undefined;
    stopAtEnd?: boolean | undefined;
    tabNavigation?: boolean | undefined;
    useCombos?: boolean | undefined;
    usePreview?: boolean | undefined;
    useWheel?: boolean | undefined;
    userClosed?: boolean | undefined;
    accepted?: kbEventHandler | undefined;
    beforeClose?: kbEventHandler | undefined;
    beforeInsert?: kbEventHandler | undefined;
    beforeVisible?: kbEventHandler | undefined;
    buildKey?: kbEventHandler | undefined;
    canceled?: kbEventHandler | undefined;
    change?: kbEventHandler | undefined;
    hidden?: kbEventHandler | undefined;
    initialized?: kbEventHandler | undefined;
    restricted?: kbEventHandler | undefined;
    switchInput?: kbEventHandler | undefined;
    validate?: kbEventHandler | undefined;
    visible?: kbEventHandler | undefined;
}

declare global {
    interface JQuery {
        keyboard(options: KeyboardOptions): this;
        addNavigation(options: NavigateOptions): this;
    }
}

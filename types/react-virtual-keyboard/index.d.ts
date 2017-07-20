// Type definitions for react-virtual-keyboard 1.0.0
// Project: https://www.npmjs.com/package/react-virtual-keyboard
// Definitions by: Bogdan Surai <https://github.com/bsurai>
//                 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare module "virtual-keyboard" {

    import "virtual-keyboard/dist/js/jquery.keyboard.js";
    import "virtual-keyboard/dist/js/jquery.keyboard.extension-navigation.min.js";

    export interface NavigateOptions {
        position: number[];
        toggleMode: boolean;
        focusClass: string;
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
        position?: boolean | Object;
        reposition?: boolean;
        css?: Object;
        display?: Object;
        language?: string | string[];
        wheelMessage?: string;
        comboRegex?: RegExp;
        rtl?: boolean;
        acceptValid?: boolean;
        alwaysOpen?: boolean;
        appendLocally?: boolean;
        appendTo?: string | Object;
        autoAccept?: boolean;
        autoAcceptOnEsc?: boolean;
        autoAcceptOnValid?: boolean;
        cancelClose?: boolean;
        caretToEnd?: boolean;
        closeByClickEvent?: boolean;
        combos?: Object;
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
        accepted?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        beforeClose?: (event?: Event | string, keyboard?: Element, accepted?: boolean) => void;
        beforeInsert?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        beforeVisible?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        buildKey?: () => void;
        canceled?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        change?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        hidden?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        initialized?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        restricted?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
        switchInput?: () => void;
        validate?: () => void;
        visible?: (event?: Event | string, keyboard?: Element, el?: Element) => void;
    }

    export interface KeyboardJQuery extends JQuery {
        keyboard(options: KeyboardOptions): this;
        addNavigation(options: NavigateOptions): this;
    }

    export interface KeyboardJQueryStatic extends JQueryStatic {
        readonly fn: KeyboardJQuery;
        
        (html: JQuery.htmlString, ownerDocument_attributes: Document | JQuery.PlainObject): KeyboardJQuery;
        
        (selector: JQuery.Selector, context: Element | Document | JQuery | undefined): KeyboardJQuery;
        
        (selector_object_callback?: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element> | JQuery |
            JQuery.PlainObject | ((this: Document, $: KeyboardJQueryStatic) => void)): KeyboardJQuery;
    }
}

declare module "react-virtual-keyboard" {
    import {Component} from "react";
    import {KeyboardOptions, NavigateOptions} from "virtual-keyboard";

    export interface ReactKeyboardOptions extends KeyboardOptions {
        
        accepted?: undefined; // You should use KeyboardProps.onAccepted event.
    }

    export interface ReactNavigateOptions extends NavigateOptions { }

    export interface KeyboardProps {
        name?: string;
        value?: string;
        options?: ReactKeyboardOptions;
        onAccepted?: (event?: string | Event, keyboard?: Element, el?: Element) => void;
        onChange: (input?: string) => void;
        callbackParent?: (e?: Event) => void;
        placeholder?: string;
    }

    export interface KeyboardState {
        value: string;
        className: string;
    }

    export default class Keyboard extends React.Component<KeyboardProps, KeyboardState> { }
}
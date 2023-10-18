import * as React from "react";

type _KEYDOWN = "keydown";
type _KEYPRESS = "keypress";
type _KEYUP = "keyup";

export type Matcher = (event: KeyboardEvent, ref: ReactKeyHandlerIntrinsicProps) => boolean;

interface ReactKeyHandlerIntrinsicProps {
    /**
     * Any given [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
     */
    keyValue?: string | string[];

    /**
     *  Any given [KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
     *  @deprecated Deprecated in favour of `code`
     */
    keyCode?: number | number[];

    /**
     *  Any given [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
     */
    code?: string | string[];

    /**
     *  Keyboard event type to listen to.
     *  @default 'keyup'
     */
    keyEventName?: _KEYDOWN | _KEYPRESS | _KEYUP;
}

export interface ReactKeyHandlerProps extends ReactKeyHandlerIntrinsicProps {
    /**
     * Callback that is called when they key is handled
     * @param event The event object
     */
    onKeyHandle: (event: React.KeyboardEvent) => void;
}

export default function KeyHandler(props: ReactKeyHandlerProps): JSX.Element;

export function keyHandleDecorator(
    matcher?: Matcher,
): (props: ReactKeyHandlerProps) => (Component: JSX.Element) => (...args: any[]) => JSX.Element;

export function keyToggleHandler(
    props: ReactKeyHandlerIntrinsicProps,
): (Component: JSX.Element) => (...args: any[]) => JSX.Element;

export function keyHandler(
    props: ReactKeyHandlerIntrinsicProps,
): (Component: JSX.Element) => (...args: any[]) => JSX.Element;

export const KEYDOWN: _KEYDOWN;

export const KEYPRESS: _KEYPRESS;

export const KEYUP: _KEYUP;

// Shut off automatic exporting
export {};

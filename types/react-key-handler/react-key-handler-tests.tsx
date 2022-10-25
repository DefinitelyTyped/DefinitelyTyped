import * as React from 'react';
import KeyHandler, {
    KEYDOWN,
    KEYPRESS,
    KEYUP,
    keyHandleDecorator,
    keyHandler,
    keyToggleHandler,
} from 'react-key-handler';

const onKeyHandleCallback = () => {};

const matcher = () => true;

// @ts-expect-error
const missingRequired = <KeyHandler />;

// @ts-expect-error
const invalidExample = <KeyHandler onKeyHandle={true} />;

// Undesired behavior. Should be `Element`.
// $ExpectType any
const validExample = <KeyHandler onKeyHandle={onKeyHandleCallback} />;

// Undesired behavior. Should be `(props: ReactKeyHandlerProps) => (Component: Element) => (...args: any[]) => Element`.
// $ExpectType (props: ReactKeyHandlerProps) => (Component: any) => (...args: any[]) => any
keyHandleDecorator();

// Undesired behavior. Should be `(props: ReactKeyHandlerProps) => (Component: Element) => (...args: any[]) => Element`.
// $ExpectType (props: ReactKeyHandlerProps) => (Component: any) => (...args: any[]) => any
keyHandleDecorator(matcher);

// $ExpectType "keydown"
KEYDOWN;

// $ExpectType "keypress"
KEYPRESS;

// $ExpectType "keyup"
KEYUP;

// @ts-expect-error
keyHandler()();

// @ts-expect-error
keyHandler({ keyEventName: KEYPRESS, keyValue: 's' })();

// Undesired behavior. Should be `(...args: any[]) => Element`
// $ExpectType (...args: any[]) => any
keyHandler({ keyEventName: KEYPRESS, keyValue: 's' })(<div />);

// @ts-expect-error
keyToggleHandler()();

// @ts-expect-error
keyToggleHandler({ keyEventName: KEYPRESS, keyValue: 's' })();

// Undesired behavior. Should be `(...args: any[]) => Element`
// $ExpectType (...args: any[]) => any
keyToggleHandler({ keyEventName: KEYPRESS, keyValue: 's' })(<div />);

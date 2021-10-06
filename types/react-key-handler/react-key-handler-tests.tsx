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

// $ExpectError
const missingRequired = <KeyHandler />;

// $ExpectError
const invalidExample = <KeyHandler onKeyHandle={true} />;

// $ExpectType Element
const validExample = <KeyHandler onKeyHandle={onKeyHandleCallback} />;

// $ExpectType (props: ReactKeyHandlerProps) => (Component: Element) => (...args: any[]) => Element
keyHandleDecorator();

// $ExpectType (props: ReactKeyHandlerProps) => (Component: Element) => (...args: any[]) => Element
keyHandleDecorator(matcher);

// $ExpectType "keydown"
KEYDOWN;

// $ExpectType "keypress"
KEYPRESS;

// $ExpectType "keyup"
KEYUP;

// $ExpectError
keyHandler()();

// $ExpectError
keyHandler({ keyEventName: KEYPRESS, keyValue: 's' })();

// $ExpectType (...args: any[]) => Element
keyHandler({ keyEventName: KEYPRESS, keyValue: 's' })(<div />);

// $ExpectError
keyToggleHandler()();

// $ExpectError
keyToggleHandler({ keyEventName: KEYPRESS, keyValue: 's' })();

// $ExpectType (...args: any[]) => Element
keyToggleHandler({ keyEventName: KEYPRESS, keyValue: 's' })(<div />);

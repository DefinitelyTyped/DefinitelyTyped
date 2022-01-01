import dialog = require('dialog-node');

dialog.info('Hello', 'Greetings', 0);
dialog.info('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType "OK" | "CANCEL"
    stderr, // $ExpectType string
) => {});

dialog.warn('Hello', 'Greetings', 0);
dialog.warn('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType "OK" | "CANCEL"
    stderr, // $ExpectType string
) => {});

dialog.error('Hello', 'Greetings', 0);
dialog.error('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType "OK" | "CANCEL"
    stderr, // $ExpectType string
) => {});

dialog.question('Hello', 'Greetings', 0);
dialog.question('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType "" | "OK" | "CANCEL"
    stderr, // $ExpectType string
) => {});

dialog.entry('Hello', 'Greetings', 0);
dialog.entry('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType string
    stderr, // $ExpectType string
) => {});

dialog.calendar('Hello', 'Greetings', 0);
dialog.calendar('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType string
    stderr, // $ExpectType string
) => {});

dialog.fileselect('Hello', 'Greetings', 0);
dialog.fileselect('Hello', 'Greetings', 0, (
    code, // $ExpectType number
    retVal, // $ExpectType string
    stderr, // $ExpectType string
) => {});

dialog.setCwd('/some/path');

import {
    prompt,
    showHelp,
    executeCommander,
    showConfig,
    initialize,
    destroy,
    printName,
    notImplemented,
    handleError,
    setWriter,
    getWriter,
} from 'command-shell-lib';

// $ExpectType void
prompt();

// $ExpectType void
showHelp({});
// @ts-expect-error
showHelp({ invalid: {} });
// @ts-expect-error
showHelp({ invalid: { description: 'This command is invalid, parameters missing', handler: () => {} } });
// @ts-expect-error
showHelp({ invalid: { parameters: ['missing', 'description'], handler: () => {} } });
// @ts-expect-error
showHelp({ invalid: { parameters: ['missing', 'handler'], description: '' } });
// $ExpectType void
showHelp({ valid: { parameters: ['valid'], description: 'This command is valid', handler: () => {} } });

// $ExpectType void
executeCommander(['some', 'command'], {});

// $ExpectType () => void
showConfig({}, '');
// @ts-expect-error
showConfig({}, null);

// $ExpectType void
initialize({}, 'This is a prompt string');
// @ts-expect-error
initialize({}, null);
// @ts-expect-error
initialize({ invalid: { parameters: ['missing', 'description'], handler: () => {} } }, 'invalid');

// $ExpectType void
destroy();

// $ExpectType () => void
printName('someName');
// @ts-expect-error
printName(0);

// $ExpectType void
notImplemented();

// $ExpectType void
handleError(new Error());
// @ts-expect-error
handleError('Only a message');

// $ExpectType void
setWriter({ log: (message?: any, ...optionalParams: any[]) => {} });
// @ts-expect-error
setWriter({ logs: (message?: any, ...optionalParams: any[]) => {} });
// $ExpectType void
setWriter({ log: (message?: any) => {} });

// $ExpectType LogWriter
getWriter();

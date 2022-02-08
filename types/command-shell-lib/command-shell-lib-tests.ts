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
// $ExpectError
showHelp({ invalid: {} });
// $ExpectError
showHelp({ invalid: { description: 'This command is invalid, parameters missing', handler: () => {} } });
// $ExpectError
showHelp({ invalid: { parameters: ['missing', 'description'], handler: () => {} } });
// $ExpectError
showHelp({ invalid: { parameters: ['missing', 'handler'], description: '' } });
// $ExpectType void
showHelp({ valid: { parameters: ['valid'], description: 'This command is valid', handler: () => {} } });

// $ExpectType void
executeCommander(['some', 'command'], {});

// $ExpectType () => void
showConfig({}, '');
// $ExpectError
showConfig({}, null);

// $ExpectType void
initialize({}, 'This is a prompt string');
// $ExpectError
initialize({}, null);
// $ExpectError
initialize({ invalid: { parameters: ['missing', 'description'], handler: () => {} } }, 'invalid');

// $ExpectType void
destroy();

// $ExpectType () => void
printName('someName');
// $ExpectError
printName(0);

// $ExpectType void
notImplemented();

// $ExpectType void
handleError(new Error());
// $ExpectError
handleError('Only a message');

// $ExpectType void
setWriter({ log: (message?: any, ...optionalParams: any[]) => {} });
// $ExpectError
setWriter({ logs: (message?: any, ...optionalParams: any[]) => {} });
// $ExpectType void
setWriter({ log: (message?: any) => {} });

// $ExpectType LogWriter
getWriter();

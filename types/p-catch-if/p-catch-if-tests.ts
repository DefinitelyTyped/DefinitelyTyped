import pCatchIf = require('p-catch-if');

/**** Setup "fake" environemt ****/

declare function getData(): Promise<{}>;
declare function retry<T>(fn: () => T): T;
declare function recordError(err: Error): undefined;
declare function isProduction(): boolean;
declare function sendError(err: Error): Promise<undefined>;
declare function checkResults(): Promise<boolean>;

declare const TimeoutError: ErrorConstructor;
declare const NetworkError: ErrorConstructor;
declare const UnicornError: ErrorConstructor;

declare const console: { error(): undefined };

/**** Use examples from the official library's readme.md ****/

// error constructor
getData().catch(pCatchIf(TimeoutError, () => retry(getData)));

// multiple error constructors
getData().catch(pCatchIf([NetworkError, TimeoutError], () => retry(getData)));

// boolean
getData().catch(pCatchIf(isProduction, recordError));

// function
const hasUnicornMessage = (err: Error) => err.message.includes('unicorn');
getData().catch(pCatchIf(hasUnicornMessage, console.error));

// promise-returning function
const handler = (err: Error) => sendError(err).then(checkResults);
getData().catch(pCatchIf(handler, console.error));

// can also be nested
const validateMessage = (err: Error) => err.message === 'Too many rainbows';
getData().catch(pCatchIf(UnicornError, pCatchIf(validateMessage, console.error)));

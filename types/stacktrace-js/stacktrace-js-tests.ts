

function interestingFn(): string {
    return 'https://github.com/exceptionless/Exceptionless';
}

const callback = (stackframes: StackTrace.StackFrame[]) => {
    const stringifiedStack = stackframes.map((sf: StackTrace.StackFrame): string => {
        console.log(sf.functionName);
        console.log(sf.args);
        console.log(sf.fileName);
        console.log(sf.lineNumber);
        console.log(sf.columnNumber);
        console.log(sf.source);
        console.log(sf.isEval);
        console.log(sf.isNative);
        return sf.toString();
    }).join('\n');
    console.log(stringifiedStack);
};

const errorCallback = (err: Error) => console.log(err.message);
const logger = (stackframes: StackTrace.StackFrame[]) => console.log(stackframes);
const options: StackTrace.StackTraceOptions = {
    filter: (stackframe: StackTrace.StackFrame) => true,
    sourceCache: {},
    offline: false
};
const error = new Error('BOOM!');

StackTrace.get(options).then(logger);
logger(StackTrace.getSync(options))
StackTrace.fromError(error, options).then(logger);
StackTrace.generateArtificially(options).then(logger);

const instrumented: () => string = StackTrace.instrument(interestingFn, callback, errorCallback);
const original: () => string = StackTrace.deinstrument(interestingFn);

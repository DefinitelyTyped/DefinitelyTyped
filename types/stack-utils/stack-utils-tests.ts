/// <reference types="node" />
import StackUtils = require('stack-utils');

const stack = new StackUtils({cwd: process.cwd(), internals: StackUtils.nodeInternals()});
const stackStr = new Error().stack;

if (stackStr) {
    console.log(stack.clean(stackStr));
}

new StackUtils();
new StackUtils({cwd: process.cwd()});
new StackUtils({internals: StackUtils.nodeInternals()});
new StackUtils({wrapCallSite(callSite) { return callSite; }});

const str = '';

stack.clean(str); // $ExpectType string
stack.clean([str]);

const callSites: StackUtils.CallSite[] = stack.capture();
stack.capture(1);
stack.capture(() => {});
stack.capture(1, () => {});

stack.captureString(); // $ExpectType string
stack.captureString(1);
stack.captureString(() => {});
stack.captureString(1, () => {});

const callSiteLike: StackUtils.CallSiteLike = stack.at();
stack.at(() => {});

const lineData: StackUtils.StackLineData | null = stack.parseLine(str);

callSites[0].getThis(); // $ExpectType object | undefined
callSites[0].getTypeName(); // $ExpectType string
callSites[0].getFunction(); // $ExpectType Function | undefined
callSites[0].getFunctionName(); // $ExpectType string
callSites[0].getMethodName(); // $ExpectType string | null
callSites[0].getFileName(); // $ExpectType string | undefined
callSites[0].getLineNumber(); // $ExpectType number
callSites[0].getColumnNumber(); // $ExpectType number
callSites[0].getEvalOrigin(); // $ExpectType string | CallSite
callSites[0].isToplevel(); // $ExpectType boolean
callSites[0].isEval(); // $ExpectType boolean
callSites[0].isNative(); // $ExpectType boolean
callSites[0].isConstructor(); // $ExpectType boolean

callSiteLike.line; // $ExpectType number | undefined
callSiteLike.column; // $ExpectType number | undefined
callSiteLike.file; // $ExpectType string | undefined
callSiteLike.constructor; // $ExpectType boolean | undefined
callSiteLike.evalOrigin; // $ExpectType string | undefined
callSiteLike.native; // $ExpectType boolean | undefined
callSiteLike.function; // $ExpectType string | undefined
callSiteLike.type; // $ExpectType string | undefined
callSiteLike.method; // $ExpectType string | undefined

if (lineData) {
    lineData.line; // $ExpectType number | undefined
    lineData.column; // $ExpectType number | undefined
    lineData.file; // $ExpectType string | undefined
    lineData.constructor; // $ExpectType boolean | undefined
    lineData.evalOrigin; // $ExpectType string | undefined
    lineData.evalLine; // $ExpectType number | undefined
    lineData.evalColumn; // $ExpectType number | undefined
    lineData.evalFile; // $ExpectType string | undefined
    lineData.native; // $ExpectType boolean | undefined
    lineData.function; // $ExpectType string | undefined
    lineData.method; // $ExpectType string | undefined
}

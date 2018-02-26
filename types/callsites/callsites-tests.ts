import callsites = require('callsites');

function unicorn() {
    callsites(); // $ExpectType CallSite[]
    callsites()[0].getThis(); // $ExpectType object | undefined
    callsites()[0].getTypeName(); // $ExpectType string
    callsites()[0].getFunction(); // $ExpectType Function | undefined
    callsites()[0].getFunctionName(); // $ExpectType string
    callsites()[0].getMethodName(); // $ExpectType string | null
    callsites()[0].getFileName(); // $ExpectType string | undefined
    callsites()[0].getLineNumber(); // $ExpectType number
    callsites()[0].getColumnNumber(); // $ExpectType number
    callsites()[0].getEvalOrigin(); // $ExpectType string | CallSite
    callsites()[0].isToplevel(); // $ExpectType boolean
    callsites()[0].isEval(); // $ExpectType boolean
    callsites()[0].isNative(); // $ExpectType boolean
    callsites()[0].isConstructor(); // $ExpectType boolean
}

unicorn();

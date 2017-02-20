import depd = require('depd');

var deprecate = depd("depd-tests");

function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(message);
    }
}

function testDepdMessage(...args: string[]): boolean {
    if (arguments.length < 1) {
        deprecate('testDepdMessage argument.lenth<1');
        return true;
    } else {
        console.log('normal logic');
        return false;
    }
}

assert(testDepdMessage() === true, "Deprecated code must be triggered!");
assert(testDepdMessage('a') === false, "Deprecated code must be triggered!");

interface ITestObject {
    p1: string;
    p2: string;
}

var obj = <ITestObject>{ p1: 'deprecated property', p2: 'normal property' };
deprecate.property(obj, 'p1', 'property [p1] is deprecated!');

console.log(obj.p1);

interface ITestDeprecatedFunction {
    func1?: Function;
    func2?: Function;
}

var obj2 = <ITestDeprecatedFunction>{};

// message automatically derived from function name 
obj2.func1 = deprecate.function(function func1() {
    console.log('all calls to [func1] are deprecated ');
});

// specific message 
obj2.func2 = deprecate.function(function () {
    console.log('all calls to [func2] are deprecated ');
}, 'func2');

obj2.func1();
obj2.func2();
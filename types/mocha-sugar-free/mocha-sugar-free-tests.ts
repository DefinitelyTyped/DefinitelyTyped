import mocha = require('mocha-sugar-free');

// $ExpectType () => void
mocha.run;

switch (mocha.detectedInterface) {
    case 'bdd':
        mocha.describe; // $ExpectType SuiteFunction
        mocha.xdescribe; // $ExpectType PendingSuiteFunction
        mocha.context; // $ExpectType SuiteFunction
        mocha.xcontext; // $ExpectType PendingSuiteFunction
        mocha.it; // $ExpectType TestFunction
        mocha.xit; // $ExpectType PendingTestFunction
        mocha.specify; // $ExpectType TestFunction
        mocha.xspecify; // $ExpectType PendingTestFunction
        mocha.before; // $ExpectType HookFunction
        mocha.after; // $ExpectType HookFunction
        mocha.beforeEach; // $ExpectType HookFunction
        mocha.afterEach; // $ExpectType HookFunction
        break;
    case 'tdd':
        mocha.suite; // $ExpectType SuiteFunction
        mocha.test; // $ExpectType TestFunction
        mocha.suiteSetup; // $ExpectType HookFunction
        mocha.suiteTeardown; // $ExpectType HookFunction
        mocha.setup; // $ExpectType HookFunction
        mocha.teardown; // $ExpectType HookFunction
        break;
    case 'qunit':
        mocha.suite; // $ExpectType SuiteFunction
        mocha.test; // $ExpectType TestFunction
        break;
    default:
        mocha.detectedInterface; // $ExpectType never
}

// Type definitions for mocha 2.2.5
// Project: http://mochajs.org/
// Definitions by: Vadim Macagon <https://github.com/enlight>, vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference types="node" />

declare namespace Mocha {
    interface IRunnable extends NodeJS.EventEmitter {
    }
    interface ISuite extends NodeJS.EventEmitter {
    }
    interface IRunner extends NodeJS.EventEmitter {
    }
}

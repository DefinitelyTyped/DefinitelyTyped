// Type definitions for mocha 2.2.5
// Project: http://mochajs.org/
// Definitions by: Vadim Macagon <https://github.com/enlight>, vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="mocha.d.ts" />
/// <reference path="../node/node.d.ts" />

declare module Mocha {
    interface IRunnable extends NodeJS.EventEmitter {
    }
    interface ISuite extends NodeJS.EventEmitter {
    }
    interface IRunner extends NodeJS.EventEmitter {
    }
}

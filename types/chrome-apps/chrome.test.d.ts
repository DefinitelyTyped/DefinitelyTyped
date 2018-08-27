/// <reference path='./index.d.ts' />
declare namespace chrome {
    namespace test {
        function sendMessage(...msg: any[]): any;
        function getConfig(callback: (config: any) => any): any;
        function assertEq(...e: any[]): boolean;
        function succeed(): any;
        function fail(reason?: any): any;
        function notifyPass(): any;
        function notifyFail(reason: any): any;
        function assertTrue(...e: any[]): any;
        function assertFalse(...e: any[]): any;
        function callbackPass(callback: () => any): any;
        function callbackPass(callback: (param: any) => any): any;
        function callbackPass(callback: (...params: any[]) => any): any;
        function callbackFail(reason: any): any;
        function listenOnce<F extends Function, E extends chrome.events.Event<F>>(event: E, callback: F): any;
        function runTests(...tests: any[]): any;
    }
}

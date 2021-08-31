export = TestRunner;
declare function TestRunner(suite: any, opt_trackingId?: string): void;
declare class TestRunner {
    constructor(suite: any, opt_trackingId?: string);
    suite_: any;
    isUnitTest_: boolean;
    trackingId_: string | null;
    scriptRunner_: ScriptRunner;
    logger_: Logger;
    private loadSuite_;
    private clear_;
    runTest(testName: string): TestResult;
}
import ScriptRunner = require('@nginstack/engine/lib/runner/ScriptRunner.js');
import Logger = require('@nginstack/engine/lib/log/Logger.js');
import TestResult = require('./TestResult.js');

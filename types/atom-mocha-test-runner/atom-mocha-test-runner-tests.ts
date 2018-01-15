import { AtomEnvironment, TestRunnerParams } from "atom";
import { createRunner } from "atom-mocha-test-runner";
import defaultMochaRunner = require("atom-mocha-test-runner");

const extraOptions = {
    testSuffixes: ["-spec.js", "-spec.coffee"],
};

function mochaSetup(mocha: Mocha) {
    mocha.addFile("test.file");
}

let testRunner = createRunner();
testRunner = createRunner(extraOptions);
testRunner = createRunner(extraOptions, mochaSetup);
testRunner = createRunner({
    colors: true,
    globalAtom: true,
    htmlTitle: "Test Title",
    reporter: "dot",
    testSuffixes: ["test.file"],
});

declare const atom: AtomEnvironment;
declare const blob: object;
declare let num: number;

async function runTests(): Promise<number> {
    const runnerArgs: TestRunnerParams = {
        testPaths: ["/var/test"],
        logFile: "/var/log",
        headless: false,
        buildDefaultApplicationDelegate: () => blob,
        buildAtomEnvironment: () => atom,
    };

    num = await defaultMochaRunner(runnerArgs);
    return testRunner(runnerArgs);
}

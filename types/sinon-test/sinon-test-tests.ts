import * as sinon from 'sinon';
import * as sinonTest from 'sinon-test';

function testConfigure() {
    const test = sinonTest.configureTest(sinon, {
    injectIntoThis: true,
    injectInto: true,
    properties: ["spy", "stub", "mock", "clock", "server", "requests"],
    useFakeTimers: true,
    useFakeServer: true
    });
}

function testConfigureTestCase() {
    const test = sinonTest.configureTestCase(sinon, {
    injectIntoThis: true,
    injectInto: true,
    properties: ["spy", "stub", "mock", "clock", "server", "requests"],
    useFakeTimers: true,
    useFakeServer: true
    });
}

testConfigure();
testConfigureTestCase();

/// <reference types="qunit" />
import { ModuleCallbacks, TestModule } from "ember-test-helpers";
import wait from 'ember-test-helpers/wait';
import hasEmberVersion from 'ember-test-helpers/has-ember-version';

function moduleFor(name: string, description: string, callbacks: ModuleCallbacks) {
    const module = new TestModule(name, description, callbacks);

    QUnit.module(module.name, {
        beforeEach() {
            module.setup();
        },
        afterEach() {
            module.teardown();
        }
    });
}

async function testWait() {
    await wait();
}

if (hasEmberVersion(2, 10)) {
    // ...
}

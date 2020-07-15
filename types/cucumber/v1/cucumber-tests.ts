import * as assert from 'power-assert';
import cucumber = require('cucumber');

function StepSample(this: cucumber.StepDefinitions & cucumber.Hooks) {
    type Callback = cucumber.CallbackStepDefinition;
    type Table = cucumber.TableDefinition;
    type HookScenario = cucumber.HookScenario;
    const step = this;
    const hook = this;

    hook.Before((scenario: HookScenario, callback: Callback) => {
        scenario.isFailed() && callback.pending();
    });

    hook.Before({ timeout: 1000 }, (scenario: HookScenario, callback: Callback) => {
        callback();
    });

    hook.After({ timeout: 1000 }, (scenario: HookScenario, callback: Callback) => {
        callback();
    });

    hook.Around((scenario: HookScenario, runScenario: (error: string | null, callback?: () => void) => void) => {
        if (scenario.isFailed()) {
            runScenario(null, () => {
                console.log('finish tasks');
            });
        }
    });

    hook.registerHandler('AfterFeatures', (event: any, callback: () => void) => {
        callback();
    });

    step.Given(/^I am on the Cucumber.js GitHub repository$/, function(callback: Callback) {
        this.visit('https://github.com/cucumber/cucumber-js', callback);
    });

    step.When(/^I go to the README file$/, (title: string, callback: Callback) => {
        callback(null, 'pending');
    });

    step.Then(/^I should see "(.*)" as the page title$/, {timeout: 60 * 1000}, function(title: string, callback: Callback) {
        const pageTitle = this.browser.text('title');

        if (title === pageTitle) {
            callback();
        } else {
            callback(new Error("Expected to be on page with title " + title));
        }
    });

    // Type for data_table.js on
    // https://github.com/cucumber/cucumber-js/blob/a5fd8251918c278ab2e389226d165cedb44df14a/lib/cucumber/ast/data_table.js

    step.Given(/^a table step with Table raw$/, (table: Table) => {
        const expected = [
            ['Cucumber', 'Cucumis sativus'],
            ['Burr Gherkin', 'Cucumis anguria']
        ];
        const actual: string[][] = table.raw();
        assert.deepEqual(actual, expected);
    });

    step.Given(/^a table step with Table rows$/, (table: Table) => {
        const expected = [
            ['Apricot', '5'],
            ['Brocolli', '2'],
            ['Cucumber', '10']
        ];
        const actual: string[][] = table.rows();
        assert.deepEqual(actual, expected);
    });

    step.Given(/^a table step with Table rowHash$/, (table: Table) => {
        const expected = {
            Cucumber: 'Cucumis sativus',
            'Burr Gherkin': 'Cucumis anguria'
        };
        const actual: { [firstCol: string]: string } = table.rowsHash();
        assert.deepEqual(actual, expected);
    });

    step.Given(/^a table step$/, (table: Table) => {
        const expected = [
            {Vegetable: 'Apricot', Rating: '5'},
            {Vegetable: 'Brocolli', Rating: '2'},
            {Vegetable: 'Cucumber', Rating: '10'}
        ];
        const actual: Array<{ [colName: string]: string }> = table.hashes();
        assert.deepEqual(actual, expected);
    });
}

function registerListener(): cucumber.EventListener {
    const listener = Object.assign(cucumber.Listener(), {
        handleBeforeScenarioEvent(scenario: cucumber.events.ScenarioPayload, callback: () => void) {
            // do some interesting stuff ...

            callback();
        }
    });

    return listener;
}

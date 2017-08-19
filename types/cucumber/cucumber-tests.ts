import * as assert from "power-assert";
import cucumber = require("cucumber");

function StepSample() {
    type Callback = cucumber.CallbackStepDefinition;
    type Table = cucumber.TableDefinition;
    type HookScenarioResult = cucumber.HookScenarioResult;

    cucumber.defineSupportCode(({setWorldConstructor, defineParameterType, After, Around, Before, registerHandler, Given, When, Then}) => {
        setWorldConstructor(function({attach, parameters}) {
            this.attach = attach;
            this.parameters = parameters;
            this.visit = (url: string, callback: Callback) => {
                callback(null, 'pending');
            };
        });

        Before((scenarioResult: HookScenarioResult, callback: Callback) => {
            console.log(scenarioResult.status === "failed");
            callback();
        });

        Before({ timeout: 1000 }, (scenarioResult: HookScenarioResult, callback: Callback) => {
            console.log(scenarioResult.status === "failed");
            callback();
        });

        Around((scenarioResult: HookScenarioResult, runScenario: (error: string | null, callback?: () => void) => void) => {
            scenarioResult.status === "failed" && runScenario(null, () => {
                console.log('finish tasks');
            });
        });

        After((scenarioResult: HookScenarioResult, callback: Callback) => {
            console.log("After");
            callback();
        });

        After({ timeout: 1000 }, (scenarioResult: HookScenarioResult, callback: Callback) => {
            console.log("After");
            callback();
        });

        registerHandler('AfterFeatures', (event: any, callback: () => void) => {
            callback();
        });

        Given(/^a variable set to (\d+)$/, (x: string) => {
            console.log("the number is: " + x);
        });

        Given(/^a variable set to (\d+)$/, (x: number) => {
            console.log(typeof x);
        });

        Given(/^I am on the Cucumber.js GitHub repository$/, function(callback: Callback) {
            this.visit('https://github.com/cucumber/cucumber-js', callback);
        });

        When(/^I go to the README file$/, (title: string, callback: Callback) => {
            callback(null, 'pending');
        });

        Then(/^I should see "(.*)" as the page title$/, {timeout: 60 * 1000}, function(title: string, callback: Callback) {
            const pageTitle = this.browser.text('title');

            if (title === pageTitle) {
                callback();
            } else {
                callback(new Error("Expected to be on page with title " + title));
            }
        });

        // Type for data_table.js on
        // https://github.com/cucumber/cucumber-js/blob/a5fd8251918c278ab2e389226d165cedb44df14a/lib/cucumber/ast/data_table.js

        Given(/^a table step with Table raw$/, (table: Table) => {
            const expected = [
                ['Cucumber', 'Cucumis sativus'],
                ['Burr Gherkin', 'Cucumis anguria']
            ];
            const actual: string[][] = table.raw();
            assert.deepEqual(actual, expected);
        });

        Given(/^a table step with Table rows$/, (table: Table) => {
            const expected = [
                ['Apricot', '5'],
                ['Brocolli', '2'],
                ['Cucumber', '10']
            ];
            const actual: string[][] = table.rows();
            assert.deepEqual(actual, expected);
        });

        Given(/^a table step with Table rowHash$/, (table: Table) => {
            const expected = {
                Cucumber: 'Cucumis sativus',
                'Burr Gherkin': 'Cucumis anguria'
            };
            const actual: { [firstCol: string]: string } = table.rowsHash();
            assert.deepEqual(actual, expected);
        });

        Given(/^a table step$/, (table: Table) => {
            const expected = [
                {Vegetable: 'Apricot', Rating: '5'},
                {Vegetable: 'Brocolli', Rating: '2'},
                {Vegetable: 'Cucumber', Rating: '10'}
            ];
            const actual: Array<{ [colName: string]: string }> = table.hashes();
            assert.deepEqual(actual, expected);
        });

        defineParameterType({
            regexp: /particular/,
            transformer: s => s.toUpperCase(),
            typeName: 'param'
        });

        Given('a {param} step', param => {
            assert.equal(param, 'PARTICULAR');
        });
    });

    let fns: cucumber.SupportCodeConsumer[] = cucumber.getSupportCodeFns();

    cucumber.clearSupportCodeFns();
}

function registerListener(): cucumber.EventListener {
    let listener = Object.assign(cucumber.Listener(), {
        handleBeforeScenarioEvent: (scenario: cucumber.events.ScenarioPayload, callback: () => void) => {
            // do some interesting stuff ...

            callback();
        }
    });

    return listener;
}

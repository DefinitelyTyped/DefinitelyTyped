import * as assert from "power-assert";
import cucumber = require("cucumber");

function StepSample() {
    type Callback = cucumber.CallbackStepDefinition;
    type Table = cucumber.TableDefinition;
    type HookScenarioResult = cucumber.HookScenarioResult;

    cucumber.defineSupportCode(function ({setWorldConstructor, defineParameterType, After, Around, Before, registerHandler, Given, When, Then}) {
        setWorldConstructor(function ({attach, parameters}: any) {
            this.attach = attach;
            this.parameters = parameters;
            this.visit = function (url: string, callback: Callback) {
                callback(null, 'pending');
            }
        });

        Before(function (scenarioResult: HookScenarioResult, callback: Callback) {
            console.log(scenarioResult.status === "failed");
            callback();
        });

        Before({ timeout: 1000 }, function (scenarioResult: HookScenarioResult, callback: Callback) {
            console.log(scenarioResult.status === "failed");
            callback();
        });

        Around(function (scenarioResult: HookScenarioResult, runScenario: (error: string, callback?: Function) => void) {
            scenarioResult.status === "failed" && runScenario(null, function () {
                console.log('finish tasks');
            });
        });

        After((scenarioResult: HookScenarioResult, callback?: Callback) => {
            console.log("After");
            callback();
        });

        After({ timeout: 1000 }, (scenarioResult: HookScenarioResult, callback?: Callback) => {
            console.log("After");
            callback();
        });

        registerHandler('AfterFeatures', function (event: any, callback: Function) {
            callback();
        });

        Given(/^a variable set to (\d+)$/, (x: string) => {
            console.log("the number is: " + x);
        });

        Given(/^a variable set to (\d+)$/, (x: number) => {
            console.log(typeof x);
        });

        Given(/^I am on the Cucumber.js GitHub repository$/, function (callback: Callback) {
            this.visit('https://github.com/cucumber/cucumber-js', callback);
        });

        When(/^I go to the README file$/, function (title: string, callback: Callback) {
            callback(null, 'pending');
        });

        Then(/^I should see "(.*)" as the page title$/, {timeout: 60 * 1000}, function (title: string, callback: Callback) {
            var pageTitle = this.browser.text('title');

            if (title === pageTitle) {
                callback();
            } else {
                callback(new Error("Expected to be on page with title " + title));
            }
        });

        // Type for data_table.js on
        // https://github.com/cucumber/cucumber-js/blob/a5fd8251918c278ab2e389226d165cedb44df14a/lib/cucumber/ast/data_table.js

        Given(/^a table step with Table raw$/, function (table: Table) {
            var expected = [
                ['Cucumber', 'Cucumis sativus'],
                ['Burr Gherkin', 'Cucumis anguria']
            ];

            assert.deepEqual(table.raw(), expected);
        });

        Given(/^a table step with Table rows$/, function (table: Table) {
            var expected = [
                ['Apricot', '5'],
                ['Brocolli', '2'],
                ['Cucumber', '10']
            ];
            assert.deepEqual(table.rows(), expected)
        });

        Given(/^a table step with Table rowHash$/, function (table: Table) {
            var expected = {
                'Cucumber': 'Cucumis sativus',
                'Burr Gherkin': 'Cucumis anguria'
            };
            assert.deepEqual(table.rowsHash(), expected)
        });

        Given(/^a table step$/, function (table: Table) {
            var expected = [
                {'Vegetable': 'Apricot', 'Rating': '5'},
                {'Vegetable': 'Brocolli', 'Rating': '2'},
                {'Vegetable': 'Cucumber', 'Rating': '10'}
            ];
            assert.deepEqual(table.hashes(), expected)
        });

        defineParameterType({
            regexp: /particular/,
            transformer: s => s.toUpperCase(),
            typeName: 'param'
        });

        Given('a {param} step', function (param) {
            assert.equal(param, 'PARTICULAR')
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

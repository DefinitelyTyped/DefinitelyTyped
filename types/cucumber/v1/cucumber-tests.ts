import * as assert from "power-assert";
import cucumber = require("cucumber");

function StepSample() {
    type Callback = cucumber.CallbackStepDefinition;
    type Table = cucumber.TableDefinition;
    type HookScenario = cucumber.HookScenario;
    var step = <cucumber.StepDefinitions>this;
    var hook = <cucumber.Hooks>this;

    hook.Before(function (scenario: HookScenario, callback: Callback) {
        scenario.isFailed() && callback.pending();
    });
    
    hook.Before({ timeout: 1000 }, function(scenario: HookScenario, callback: Callback) {
		callback();
	});
    
    hook.After({ timeout: 1000 }, function(scenario: HookScenario, callback: Callback) {
		callback();
	});

    hook.Around(function (scenario: HookScenario, runScenario: (error: string, callback?: Function) => void) {
        scenario.isFailed() && runScenario(null, function () {
            console.log('finish tasks');
        });
    });

    hook.registerHandler('AfterFeatures', function (event: any, callback: Function) {
        callback();
    });

    step.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback: Callback) {
        this.visit('https://github.com/cucumber/cucumber-js', callback);
    });

    step.When(/^I go to the README file$/, function (title: string, callback: Callback) {
        callback(null, 'pending');
    });

    step.Then(/^I should see "(.*)" as the page title$/, {timeout: 60 * 1000}, function (title: string, callback: Callback) {
        var pageTitle = this.browser.text('title');

        if (title === pageTitle) {
            callback();
        } else {
            callback(new Error("Expected to be on page with title " + title));
        }
    });

    // Type for data_table.js on
    // https://github.com/cucumber/cucumber-js/blob/a5fd8251918c278ab2e389226d165cedb44df14a/lib/cucumber/ast/data_table.js

    step.Given(/^a table step with Table raw$/, function (table: Table) {
        var expected = [
            ['Cucumber', 'Cucumis sativus'],
            ['Burr Gherkin', 'Cucumis anguria']
        ];

        assert.deepEqual(table.raw(), expected);
    });

    step.Given(/^a table step with Table rows$/, function (table: Table) {
        var expected = [
            ['Apricot', '5'],
            ['Brocolli', '2'],
            ['Cucumber', '10']
        ];
        assert.deepEqual(table.rows(), expected)
    });

    step.Given(/^a table step with Table rowHash$/, function (table: Table) {
        var expected = {
            'Cucumber': 'Cucumis sativus',
            'Burr Gherkin': 'Cucumis anguria'
        };
        assert.deepEqual(table.rowsHash(), expected)
    });

    step.Given(/^a table step$/, function (table: Table) {
        var expected = [
            {'Vegetable': 'Apricot', 'Rating': '5'},
            {'Vegetable': 'Brocolli', 'Rating': '2'},
            {'Vegetable': 'Cucumber', 'Rating': '10'}
        ];
        assert.deepEqual(table.hashes(), expected)
    });

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

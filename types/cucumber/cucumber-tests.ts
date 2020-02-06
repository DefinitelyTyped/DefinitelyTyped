import * as assert from "power-assert";
import {
    setDefinitionFunctionWrapper,
    setWorldConstructor,
    defineParameterType,
    After,
    AfterAll,
    Before,
    BeforeAll,
    Given,
    When,
    Then,
    TableDefinition as Table
} from "cucumber";
import cucumber = require("cucumber");

type Callback = cucumber.CallbackStepDefinition;
type HookScenarioResult = cucumber.HookScenarioResult;
const Status = cucumber.Status;

// You can optionally declare your own world properties
declare module "cucumber" {
    interface World {
        visit(url: string, callback: CallbackStepDefinition): void;
        toInt(value: string): number;
    }
}

function StepSampleWithoutDefineSupportCode() {
    setWorldConstructor(function({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
        this.visit = (url: string, callback: Callback) => {
            callback(null, 'pending');
        };
        this.toInt = parseInt;
    });

    Before((scenarioResult: HookScenarioResult, callback: Callback) => {
        console.log(scenarioResult.result.status === Status.FAILED);
        callback();
    });

    Before({ timeout: 1000 }, (scenarioResult: HookScenarioResult, callback: Callback) => {
        console.log(scenarioResult.result.status === Status.FAILED);
        callback();
    });

    Before('@tag', (scenarioResult: HookScenarioResult, callback: Callback) => {
        console.log(scenarioResult.result.status === Status.FAILED);
        callback();
    });

    BeforeAll((callback: Callback) => {
        console.log("Before all");
        callback();
    });

    BeforeAll({ timeout: 1000 }, (callback: Callback) => {
        console.log("Before all");
        callback();
    });

    BeforeAll('@tag', (callback: Callback) => {
        console.log("Before all");
        callback();
    });

    After((scenarioResult: HookScenarioResult, callback: Callback) => {
        console.log("After");
        callback();
    });

    After((scenarioResult: HookScenarioResult, callback: Callback) => {
        if (scenarioResult.result.exception) {
            console.error(scenarioResult.result.exception);
        }
        callback();
    });

    After({ timeout: 1000 }, (scenarioResult: HookScenarioResult, callback: Callback) => {
        console.log("After");
        callback();
    });

    After('@tag', (scenarioResult: HookScenarioResult, callback: Callback) => {
        console.log("After");
        callback();
    });

    AfterAll((callback: Callback) => {
        console.log("After all");
        callback();
    });

    AfterAll({ timeout: 1000 }, (callback: Callback) => {
        console.log("After all");
        callback();
    });

    AfterAll('@tag', (callback: Callback) => {
        console.log("After all");
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

    interface MyTableType {
        Vegetable: string;
        Rating: string;
    }

    Given(/^a table step with a Type$/, (table: Table<MyTableType>) => {
        const expected = [
            { Vegetable: 'Apricot', Rating: '5' },
            { Vegetable: 'Brocolli', Rating: '2' },
            { Vegetable: 'Cucumber', Rating: '10' }
        ];
        const [actual] = table.hashes();
        assert.deepEqual(actual.Vegetable, 'Apricot');
        assert.deepEqual(actual.Rating, '5');

        assert.deepEqual(actual.WrongField, '5'); // $ExpectError
    });

    defineParameterType({
        regexp: /particular/,
        transformer: s => s.toUpperCase(),
        typeName: 'param'  // deprecated but still supported
    });

    defineParameterType({
        regexp: /particularly/,
        transformer: s => s.toUpperCase(),
        name: 'param',
        preferForRegexpMatch: false,
        useForSnippets: false
    });

    defineParameterType({
        regexp: /(one) (two)/,
        transformer: (x, y) => x + y,
        name: 'param',
        preferForRegexpMatch: false,
        useForSnippets: false
    });

    defineParameterType({
        regexp: /123/,
        transformer(val) {
            return this.toInt(val);
        },
        name: 'param',
        preferForRegexpMatch: false,
        useForSnippets: false
    });

    Given('a {param} step', param => {
        assert.equal(param, 'PARTICULAR');
    });

    Given('a step with custom options for function wrapper', { timeout: 1, wrapperOptions: { retry: 2 } }, param => {
        console.log('Mock step');
    });

    Given('a step with custom options for function wrapper with any complext wrapper options', { wrapperOptions: { moreOptions: { nested: [] } } }, param => {
        console.log('Mock step');
    });

    setDefinitionFunctionWrapper((fn: () => void) => {
        return fn;
    });
    setDefinitionFunctionWrapper((fn: () => void, options: {}) => {
        console.log(`Custom Options passed into step`);
        return fn;
    });
}

// syntax defineSupportCode deprecated
function StepSample() {
    cucumber.defineSupportCode((l) => {
    });
}

const fns: cucumber.SupportCodeConsumer[] = cucumber.getSupportCodeFns();
cucumber.clearSupportCodeFns();

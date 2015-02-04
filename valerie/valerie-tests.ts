/// <reference path="valerie.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

// Tests for valerie.d.ts
// Project: https://github.com/davewatts/valerie
// Definitions by: Howard Richards <https://github.com/conficient>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Checks the .d.ts definition work. Not a fully comprehensive set of tests yet.
*/

/**
 * Simple enum for enum test
 */
enum enumTest { male, female }

/**
 * ensure that observable values can validate
 *
 */
function ObservableValidationTypes() {
    // any
    var t0 = ko.observable<any>()
        .validate()
        .end();

    // string
    var t1 = ko.observable<string>("")
        .validate()
        .end();

    // number
    var t2 = ko.observable<number>(0)
        .validate()
        .end();

    // bool
    var t3 = ko.observable<boolean>(true)
        .validate()
        .end();

    // date
    var t4 = ko.observable<Date>(new Date())
        .validate()
        .end();

    // enum
    var t5 = ko.observable<enumTest>(enumTest.male)
        .validate()
        .end();

    //array
    var t6 = ko.observableArray<any>(<any[]>[])
        .validate()
        .end();
}

function ComputedValidationTests() {
    var t1 = ko.computed<string>(function () { return "hello world"; })
        .validate()
        .end();
}

function RuleTests() {

    // various values used in rule tests
    var dummyRule: Valerie.IRule = { test: null, defaultOptions: null };

    // valerie supports both value and function arguments in many cases

    var stringValue = "";
    var stringFN = function () { return stringValue; }

    var numberValue = 1;
    var numberFN = function () { return numberValue; }

    var booleanValue = false;
    var booleanFN = function () { return booleanValue; }

    var dateValue = new Date();
    var dateFN = function () { return dateValue; }

    var anyValue = <any>{};
    var anyFN = function () { return anyValue; }

    var arrayValue = <any[]>[];
    var arrayFN = function () { return arrayValue; }

    var regexpValue = /\d+/;

    // rule tests

    var test_addRule = ko.observable(stringValue)
        .validate()
        .addRule(dummyRule)
        .end();

    var test_applicable = ko.observable(stringValue)
        .validate()
        .applicable(true)
        .applicable(function () { return false; })
        .end();

    var test_currencyMajor = ko.observable(numberValue)
        .validate()
        .currencyMajor()
        .end();

    var test_currencyMinor = ko.observable(numberValue)
        .validate()
        .currencyMajorMinor()
        .end();

    var test_date = ko.observable(dateValue)
        .validate()
        .date()
        .end();

    var test_during = ko.observable(dateValue)
        .validate()
        .during(dateValue, dateValue)
        .during(dateFN, dateFN)
        .during(dateValue, dateFN)
        .during(dateFN, dateValue)
        .end();

    var test_earliest = ko.observable(dateValue)
        .validate()
        .earliest(dateValue)
        .end();

    var test_email = ko.observable(stringValue)
        .validate()
        .email()
        .end();

    var test_entryformat = ko.observable(stringValue)
        .validate()
        .entryFormat(stringValue)
        .end();

    var test_expression = ko.observable(stringValue)
        .validate()
        .expression(regexpValue)
        .expression(stringValue)
        .end();

    var test_float = ko.observable(numberValue)
        .validate()
        .float()
        .end();

    var test_integer = ko.observable(numberValue)
        .validate()
        .integer()
        .end();

    var test_latest = ko.observable(dateValue)
        .validate()
        .latest(dateValue)
        .latest(dateFN)
        .end();

    var test_lengthBetween = ko.observable(stringValue)
        .validate()
        .lengthBetween(numberValue, numberValue)
        .lengthBetween(numberFN, numberFN)
        .lengthBetween(numberFN, numberValue)
        .lengthBetween(numberValue, numberFN)
        .end();

    var test_matches = ko.observable(stringValue)
        .validate()
        .matches(numberValue)
        .matches(numberFN)
        .end();

    var test_maximum = ko.observable(0)
        .validate()
        .maximum(numberValue)
        .maximum(numberFN)
        .end();

    var test_maximumNumberOfItems = ko.observableArray([])
        .validate()
        .maximumNumberOfItems(numberValue)
        .maximumNumberOfItems(numberFN)
        .end();

    var test_minimum = ko.observable(numberValue)
        .validate()
        .minimum(numberValue)
        .minimum(numberFN)
        .end();

    var test_minimumLength = ko.observable("")
        .validate()
        .minimumLength(numberValue)
        .minimumLength(numberFN)
        .end();

    var test_minimumNumberOfItems = ko.observableArray([])
        .validate()
        .minimumNumberOfItems(numberValue)
        .minimumNumberOfItems(numberFN)
        .end();

    var test_name = ko.observable(stringValue)
        .validate()
        .name(stringValue)
        .end();

    var test_noneOf = ko.observable<any>(numberValue)
        .validate()
        .noneOf(arrayValue)
        .noneOf(arrayFN)
        .end();

    var test_not = ko.observable(numberValue)
        .validate()
        .not(anyValue)
        .not(anyFN)
        .end();

    var test_number = ko.observable(numberValue)
        .validate()
        .number()
        .end();

    var test_numberOfItems = ko.observableArray(arrayValue)
        .validate()
        .numberOfItems(numberValue, numberValue)
        .numberOfItems(numberFN, numberFN)
        .numberOfItems(numberFN, numberValue)
        .numberOfItems(numberValue, numberFN)
        .end();

    var test_oneOf = ko.observable(numberValue)
        .validate()
        .oneOf(arrayValue)
        .oneOf(arrayFN)
        .end();

    var test_postcode = ko.observable(stringValue)
        .validate()
        .postcode()
        .end();

    var test_range = ko.observable(numberValue)
        .validate()
        .range(numberValue, numberValue)
        .range(numberValue, numberFN)
        .range(numberFN, numberValue)
        .range(numberFN, numberFN)
        .end();

    var test_required = ko.observable(anyValue)
        .validate()
        .required()
        .end();

    var test_ruleMessage = ko.observable(anyValue)
        .validate()
        .ruleMessage(stringValue)
        .end();

    var test_string = ko.observable(stringValue)
        .validate()
        .string()
        .end();

    var test_validateChildProperties = ko.observable(anyValue)
        .validate()
        .validateChildProperties()
        .end();

    var test_valueFormat = ko.observable(anyValue)
        .validate()
        .valueFormat(stringValue)
        .end();

    var test_rule = ko.observable(anyValue)
        .validate()
        .rule(() => { return anyValue; })
        .end();

}

function ModelValidation() {

    var model = {};

    var validatedModel = valerie.validatableModel(model)
        .validateAll()
        .end();
    
}

function UtilsStaticTests() {

    var t1 = valerie.utils.asArray(1);
    var t2 = valerie.utils.asArray([1,2]);

    var t3 = valerie.utils.asFunction(1);
    var t4 = valerie.utils.asFunction(() => { return 1; });

    var t5 = valerie.utils.isArray([1, 2]);
    var t5 = valerie.utils.isArrayOrObject(1);
    var t6 = valerie.utils.isFunction("x");
    var t7 = valerie.utils.isMissing(null);
    var t8 = valerie.utils.isObject({});
    var t9 = valerie.utils.isString("test");

    var opts: Valerie.ValidationOptions = {}; // all values are optional
    var t10 = valerie.utils.mergeOptions(opts, opts);
}

function ValidationResultStaticTests() {

    var t1 = valerie.ValidationResult.passedInstance;

    var t2 = valerie.ValidationResult.createFailedResult("message");

}

function ValidationStateStaticTests() {

    var t1 = valerie.validationState.findIn({});
    var t2 = valerie.validationState.getFor({});
    var t3 = valerie.validationState.has({});

    var state = <Valerie.IValidationState>{};
    var t4 = valerie.validationState.setFor({}, state);
}

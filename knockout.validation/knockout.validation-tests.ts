/// <reference path="knockout.validation.d.ts"/>


function test_validation_rules_indexer() {
    // This is the validation rule taken from the knockout validation wiki, modified to include type information.
    // https://github.com/Knockout-Contrib/Knockout-Validation/wiki/Custom-Validation-Rules
    ko.validation.rules['mustEqual'] = {
        validator: function (val: any, otherVal: any): boolean {
            return val === otherVal;
        },
        message: 'The field must equal {0}'
    };
}

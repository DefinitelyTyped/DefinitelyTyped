import dasherize = require("dasherize");

{
    /*
        Expect strings to be dash-cased
    */
}
// $ExpectType `${string}common-var-name` || string
dasherize("commonVarName");

{
    /*
        Expect objects properties and nested object properties to be recursively dash-cased
    */
}
const testObject = {
    somePropName: "value",
    somePropInUPPERCASE: 3,
    withNumb3rsAPI: "",
    some_underscore: "",
    some_underscore_with_CamelCase: "",
    "some string with spaces and someConstantName": "someString",
    nestedObj: {
        nestedObjAgain: {
            deeplyNestedProp: true,
            nestedArray: [{ somePropName: 10 }],
        },
    },
};
const dahserizedObj = dasherize(testObject);
const dasherizedArray = dasherize([testObject]);
// $ExpectType string
dahserizedObj["some-prop-name"];
// $ExpectType number
dahserizedObj["some-prop-in-uppercase"];
// $ExpectType string
dahserizedObj["with-numb3rs-api"];
// $ExpectType string
dahserizedObj.some_underscore;
// $ExpectType string
dahserizedObj["some_underscore_with_-camel-case"];
// $ExpectType string
dahserizedObj["some string with spaces and some-constant-name"];
// $ExpectType boolean
dahserizedObj["nested-obj"]["nested-obj-again"]["deeply-nested-prop"];
// $ExpectType number
dahserizedObj["nested-obj"]["nested-obj-again"]["nested-array"][0]["some-prop-name"];
// $ExpectType boolean
dasherizedArray[0]["nested-obj"]["nested-obj-again"]["deeply-nested-prop"];
// $ExpectType string
dasherizedArray[0]["some-prop-name"];

{
    /*
        Expect other types to be returned as is
    */
}
// $ExpectType 3 || number
dasherize(3);
// $ExpectType true || boolean
dasherize(true);
// $ExpectType Date
dasherize(new Date());
// $ExpectType RegExp
dasherize(new RegExp(/test/));

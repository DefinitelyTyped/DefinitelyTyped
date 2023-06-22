google.script.url.getLocation(location => {
    location.hash; // $ExpectType string
    location.parameter; // $ExpectType { [key: string]: string; }
    location.parameters; // $ExpectType { [key: string]: ReadonlyArray<string>; }
});

google.script.history.push(null);
google.script.history.push({ timestamp: Date.now() }, { foo: 'bar', fiz: 'baz' });
google.script.history.push({ timestamp: Date.now() }, { foo: ['bar', 'cat'], fiz: 'baz' }, 'anchor1');

google.script.history.replace(null);
google.script.history.replace({ timestamp: Date.now() }, { foo: 'bar', fiz: 'baz' });
google.script.history.replace({ timestamp: Date.now() }, { foo: ['bar', 'cat'], fiz: 'baz' }, 'anchor1');

google.script.history.setChangeHandler(e => {
    e.state; // $ExpectType State
    e.location.hash; // $ExpectType string
    e.location.parameter; // $ExpectType { [key: string]: string; }
    e.location.parameters; // $ExpectType { [key: string]: ReadonlyArray<string>; }
});

google.script.host.origin; // $ExpectType string
google.script.host.close();
google.script.host.editor.focus();
google.script.host.setHeight(450);
google.script.host.setWidth(300);

google.script.run.withSuccessHandler(() => {}); // $ExpectType RunnerFunctions & PublicEndpoints
google.script.run.withFailureHandler(() => {}); // $ExpectType RunnerFunctions & PublicEndpoints
google.script.run.withUserObject({}); // $ExpectType RunnerFunctions & PublicEndpoints

google.script.run
    .withSuccessHandler(value => {})
    .withFailureHandler(error => {
        error; // $ExpectType Error
    });

google.script.run
    .withSuccessHandler((value, userObject) => {})
    .withFailureHandler((error, userObject) => {
        error; // $ExpectType Error
    })
    .withUserObject({});

google.script.run.testFunctionWithoutParameter();
google.script.run.testFunctionWithNumber(0);
google.script.run.testFunctionWithBoolean(true);
google.script.run.testFunctionWithString("");
google.script.run.testFunctionWithNull(null);
google.script.run.testFunctionWithArray([
    0,
    true,
    "",
    null,
    undefined,
    [],
    {
        number: 0,
        boolean: true,
        string: "",
        nullValue: null,
        undef: undefined,
        array: [0, true, "", null, undefined, [], {}],
        object: {}
    }
]);
google.script.run.testFunctionWithObject({
    number: 0,
    boolean: true,
    string: "",
    nullValue: null,
    undef: undefined,
    array: [0, true, "", null, undefined, [], {}],
    object: {}
});
google.script.run.testFunctionWithMultipleParameters(
    0,
    true,
    "",
    null,
    undefined,
    [
        0,
        true,
        "",
        null,
        undefined,
        [],
        {}
    ],
    {
        number: 0,
        boolean: true,
        string: "",
        nullValue: null,
        undef: undefined,
        array: [0, true, "", null, undefined, [], {}],
        object: {}
    }
);
google.script.run.testFunctionWithForm(new HTMLFormElement());
// @ts-expect-error
google.script.run.testFunctionWithDateError(new Date());
// @ts-expect-error
google.script.run.testFunctionWithFunctionError(() => {});

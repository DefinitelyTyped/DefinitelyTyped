google.script.url.getLocation(location => {
    location.hash; // $ExpectedType string
    location.parameter; // $ExpectedType { [key: string]: string }
    location.parameters; // $ExpectedType { [key: string]: ReadonlyArray<string> }
});

google.script.history.push(null);
google.script.history.push({ timestamp: Date.now() }, { foo: 'bar', fiz: 'baz' });
google.script.history.push({ timestamp: Date.now() }, { foo: ['bar', 'cat'], fiz: 'baz' }, 'anchor1');

google.script.history.replace(null);
google.script.history.replace({ timestamp: Date.now() }, { foo: 'bar', fiz: 'baz' });
google.script.history.replace({ timestamp: Date.now() }, { foo: ['bar', 'cat'], fiz: 'baz' }, 'anchor1');

google.script.history.setChangeHandler(e => {
    e.state; // $ExpectedType google.script.history.State
    e.location.hash; // $ExpectedType string
    e.location.parameter; // $ExpectedType { [key: string]: string }
    e.location.parameters; // $ExpectedType { [key: string]: ReadonlyArray<string> }
});

google.script.host.origin; // $ExpectType string
google.script.host.close();
google.script.host.editor.focus();
google.script.host.setHeight(450);
google.script.host.setWidth(300);

google.script.run.withSuccessHandler(() => {}).executeScript({ message: 'test for google.script.run' });

google.script.run
    .withSuccessHandler(value => {})
    .withFailureHandler(error => {})
    .getEmail();

google.script.run
    .withSuccessHandler((value, userObject) => {})
    .withFailureHandler((error, userObject) => {})
    .withUserObject({})
    .getSomeData(Date.now(), { options: 'none' }, 'anchor1', true, null);

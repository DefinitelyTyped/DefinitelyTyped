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

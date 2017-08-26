import RSVP from 'rsvp';

function testAndThen() {
    const result: RSVP.Promise<string, never> = andThen(() => 'some string');
    result.then(s => s.length);
}

function testClick() {
    const result: RSVP.Promise<void, never> = click('someString');
    result.then(() => {});
}

function testCurrentPath() {
    const path = currentPath();
    const chars = path.split('');
}

function testCurrentRouteName() {
    const routeName = currentRouteName();
    const isIndex = routeName === 'index';
}

function testCurrentURL() {
    const url = currentURL();
    const isIndex = url.match(/^\/$/);
}

function testFillIn() {
    const textResult = fillIn('.foo', 'waffles');
    textResult.then(() => true);
    const contextResult = fillIn('.bar', {}, 'pancakes');
    contextResult.catch(reason => false);
}

function testFind() {
    const found = find('#quux');
    found.addClass('has-ducks');

    const foundInAContext = find('#baz', {});
    foundInAContext.removeClass('can-cluck');
}

function testFindWithAssert() {
    const found = findWithAssert('#quux');
    found.addClass('has-ducks');

    const foundInAContext = findWithAssert('#baz', {});
    foundInAContext.removeClass('can-cluck');
}

function testKeyEvent() {
    keyEvent('.some-button', 'keydown', 11).then(() => 11);
    keyEvent('.some-button', 'keypress', 101).then(() => 101);
    keyEvent('.some-button', 'keyup', 1001).then(() => 1001);
}

function testPauseTest() {
    pauseTest().finally(() => {
        const foo = 'fighters';
    });
}

function testResumeTest() {
    resumeTest();
}

function testTriggerEvent() {
    triggerEvent('.something', {}, 'click', {}).then(() => 'yay');
    triggerEvent('.something', 'mousedown').then(() => 'no');
    triggerEvent('.something', {}, 'fetch').then(() => 'huzzah');
    triggerEvent('.something', 'keydown').then(() => 'whomp whomp');
}

function testVisit() {
    visit('some/url').then(() => {});
}

function testWait() {
    const waited = wait('whatever');
    waited.then((s: string) => s.length);
}

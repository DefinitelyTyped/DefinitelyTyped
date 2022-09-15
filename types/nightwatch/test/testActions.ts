// Expect test for language chains

it('actions.press', () => {
    browser.perform(() => {
        return browser.actions().press();
    });
});

it('actions.release', () => {
    browser.perform(() => {
        return browser.actions().release();
    });
});

it('actions.mouse', () => {
    browser.perform(() => {
        return browser.actions().mouse();
    });
});

it('actions.keyboard', () => {
    browser.perform(() => {
        return browser.actions().keyboard();
    });
});

it('actions.move', () => {
    browser.perform(() => {
        return browser.actions().move({x: 100, y: 200});
    });
});

it('actions.clear', () => {
    browser.perform(() => {
        return browser.actions().clear();
    });
});

it('actions.pause', () => {
    browser.perform(() => {
        return browser.actions().pause();
    });
});

it('actions.dragAndDrop', () => {
    browser.perform(async () => {
        const sampleElement = element('.element-class');
        const webElement = await sampleElement.getWebElement();
        return browser.actions().dragAndDrop(webElement, {x: 12, y: 234});
    });
});

it('actions.doubleClick', () => {
    browser.perform(() => {
        return browser.actions().doubleClick();
    });
});

it('actions.contextClick', () => {
    browser.perform(() => {
        return browser.actions().contextClick();
    });
});

it('actions.keyDown', () => {
    browser.perform(() => {
        return browser.actions().keyDown('CONTROL');
    });
});

it('actions.keyUp', () => {
    browser.perform(() => {
        return browser.actions().keyUp('CONTROL');
    });
});

it('actions.sendKeys', () => {
    browser.perform(() => {
        return browser.actions().sendKeys();
    });
});

it('actions.perform', () => {
    browser.perform(() => {
        browser.actions().sendKeys().perform();
    });
});

it('actions.options.async.bridge', () => {
    browser.perform(() => {
        return browser.actions({async: true, bridge: true}).sendKeys();
    });
});

it('actions.options.async', () => {
    browser.perform(() => {
        return browser.actions({async: true}).sendKeys();
    });
});

it('actions.options.bridge', () => {
    browser.perform(() => {
        return browser.actions({bridge: true}).sendKeys();
    });
});

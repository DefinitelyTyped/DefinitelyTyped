import { EventEmitter } from 'events';
import {
    EnhancedPageObject,
    EnhancedSectionInstance,
    NightwatchAPI,
    NightwatchAssertion,
    NightwatchTests,
    describe,
    it,
    before,
    after,
    xit,
    xdescribe,
    test,
    PageObjectModel,
} from 'nightwatch';

//
// ./tests/general.ts
//

const testGeneral: NightwatchTests = {
    'Demo test Google 1': () => {
        browser.url('https://google.com').pause(1000);

        // expect element <body> to be present in 1000ms
        browser.expect.element('body').to.be.present.before(1000);

        // expect element <#lst-ib> to have css property 'display'
        browser.expect.element('#lst-ib').to.have.css('display');

        // expect element <body> to have attribute 'class' which contains text 'vasq'
        browser.expect.element('body').to.have.attribute('class').which.contains('vasq');

        browser.expect.element('#hplogo').to.have.attribute('alt').which.startsWith('G').and.endsWith('oogle');

        // expect element <#lst-ib> to be an input tag
        browser.expect.element('#lst-ib').to.be.an('input');

        // expect element <#lst-ib> to be visible
        browser.expect.element('#lst-ib').to.be.visible;

        browser.end();
    },

    'Demo test Google 2': () => {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body')
            .setValue('input[type=text]', 'nightwatch')
            .getElementRect('input[type=text]', res => {
                console.log(res.value);
            })
            .waitForElementVisible('input[name=btnK]')
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    },

    'step one: navigate to google': () => {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000);
    },

    'step two: click input': () => {
        browser.click('input[name=btnK]').pause(1000).assert.containsText('#main', 'Night Watch').end();
    },

    'test user defined globals': () => {
        browser.url(`http://${browser.globals.username}:${browser.globals.password}@example.com`).end();
    },
};

describe('Ecosia', () => {
    before(browser => browser.url('https://www.ecosia.org/'));

    it('Demo test ecosia.org', () => {
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]');
    });

    xit('this test will be skipped', () => {
        browser.waitForElementVisible('body');
    });

    after(browser => browser.end());
});

xdescribe('whole describle block will be skipped', () => {
    test('ecosia', () => {
        browser.url('https://ecosia.org').end();
    });
});

describe('Async Ecosia', () => {
    before(browser => browser.url('https://www.ecosia.org/'));

    it('Demo test ecosia.org', async () => {
        browser.waitForElementVisible('body');
    });

    after(browser => browser.end());
});

//
// ./pages/google.ts
//

const appsSection = {
    selector: 'div.gb_qc',
    commands: [
        {
            clickYoutube(this: AppsSection) {
                return this.click('@youtube');
            },
        },
    ],
    elements: {
        myAccount: {
            selector: '#gb192',
        },
        youtube: {
            selector: '#gb36',
        },
    },
};

interface AppsSection extends EnhancedSectionInstance<typeof appsSection.commands[0], typeof appsSection.elements> {}

const menuSection = {
    selector: '#gb',
    commands: [
        {
            // add section commands here
            clickApps(this: MenuSection) {
                return this.click('@appSection');
            },
        },
    ],
    elements: {
        mail: {
            selector: 'a[href="mail"]',
        },
        images: {
            selector: 'a[href="imghp"]',
        },
    },
    sections: {
        apps: appsSection,
    },
};

interface MenuSection
    extends EnhancedSectionInstance<
        typeof menuSection.commands[0],
        typeof menuSection.elements,
        { apps: AppsSection }
    > {}

const googleCommands = {
    submit(this: GooglePage) {
        this.api.pause(1000);
        return this.waitForElementVisible('@submitButton', 1000)
            .click('@submitButton')
            .waitForElementNotPresent('@submitButton');
    },
};

const googlePage: PageObjectModel = {
    commands: [googleCommands],
    elements: {
        searchBar: {
            selector: 'input[type=text]',
        },
        submitButton: {
            selector: 'input[name=btnK]',
        },
    },
    sections: {
        menu: menuSection,
    },
};

// export = googlePage;

const iFrame: PageObjectModel = {
    elements: {
        iframe: '#mce_0_ifr',
        textbox: 'body#tinymce p',
    },
    commands: [
        {
            url(this: EnhancedPageObject) {
                return `${this.api.launch_url}/iframe`;
            },
        },
    ],
};

// export = iFrame

interface GooglePage
    extends EnhancedPageObject<typeof googleCommands, typeof googlePage.elements, { menu: MenuSection }> {}

interface iFramePage extends EnhancedPageObject<typeof iFrame.commands[0], typeof iFrame.elements> {}

declare module 'nightwatch' {
    interface NightwatchCustomPageObjects {
        google(): GooglePage;
        IFrame(): iFramePage;
    }
}

const testPage = {
    'Test commands': () => {
        const google = browser.page.google();
        google.setValue('@searchBar', 'nightwatch').submit();

        browser.end();
    },

    'Test sections': () => {
        const google = browser.page.google();

        const menuSection = google.section.menu;
        menuSection.expect.element('@mail').to.be.visible;
        menuSection.expect.element('@images').to.be.visible;

        menuSection.clickApps();

        const appSection = menuSection.section.apps;
        appSection.expect.element('@myAccount').to.be.visible;
        appSection.expect.element('@youtube').to.be.visible;

        appSection.clickYoutube();

        browser.end();
    },

    'Test assertions on page': () => {
        const google: GooglePage = browser.page.google();

        google
            .navigate()
            .assert.title('Google') // deprecated
            .assert.titleEquals('Google') // new in 2.0
            .assert.visible('@searchBar')
            .moveToElement('@searchBar', 1, 1)
            .setValue('@searchBar', 'nightwatch')
            .click('@submit');

        browser.end();
    },

    'Test iFrame on page': async () => {
        const iFrame = browser.page.IFrame();
        iFrame.navigate();
        const frame = await browser.findElement(iFrame.elements.iframe);
        console.log(frame.getId());
        browser.frame(frame);
        iFrame.expect.element('@textbox').text.to.equal('Your content goes here.');

        browser.end();
    },

    'Test passing CSS selector string to frame': () => {
        const iFrame = browser.page.IFrame();
        iFrame.navigate().waitForElementPresent('#mce_0_ifr', 10000);
        browser.frame('#mce_0_ifr');
        iFrame.expect.element('@textbox').text.to.equal('Your content goes here.');
        browser.end();
    },

    'Test nested page objects': () => {
        const google = browser.page.subfolder1.subfolder2.subfolder3.google();
    },
};

//
// ./tests/specific-commands.ts
//

const testSpecificCommands: NightwatchTests = {
    executeAsync: () => {
        browser.executeAsync(
            done => {
                setTimeout(() => {
                    done(true);
                }, 500);
            },
            [],
            result => {
                browser.assert.equal(result.value, true);
            },
        );

        browser.executeAsync(
            (arg1, arg2, done) => {
                setTimeout(() => {
                    done(true);
                }, 500);
            },
            [1, 2],
            result => {
                browser.assert.equal(result.value, true);
            },
        );

        browser.end();
    },
};

//
// ./commands/localStorageValue.ts
// - function based command
//

function localStorageValueCommand(this: NightwatchAPI, key: string, callback?: (value: string | null) => void) {
    const self = this;

    this.execute(
        // tslint:disable-next-line:only-arrow-functions
        function(key) {
            return window.localStorage.getItem(key);
        },
        [key], // arguments array to be passed
        result => {
            if (result.status) {
                throw result.value;
            }
            if (typeof callback === 'function') {
                callback.call(self, result.value);
            }
        },
    );

    return this;
}

declare module 'nightwatch' {
    interface NightwatchCustomCommands {
        localStorageValue(key: string, callback?: (value: string | null) => void): this;
    }
}

// module.exports.command = resizeCommand;

const testCustomCommandFunction = {
    'Test command function': () => {
        browser.localStorageValue('my-key', result => {
            console.log(result);
        });
    },
};

//
// ./commands/consoleLog.ts
// - class based command
//

class ConsoleLog extends EventEmitter {
    command(this: ConsoleLog & NightwatchAPI, message: string, ...args: any[]) {
        setTimeout(() => {
            console.log(message, ...args);
            this.emit('complete');
        }, 1);

        return this;
    }
}

declare module 'nightwatch' {
    interface NightwatchCustomCommands {
        consoleLog(message: string, ...args: any[]): this;
    }
}

// module.exports = ConsoleLog;

const testCustomCommandClass = {
    'Test command class': () => {
        browser.consoleLog('Hello world!');
    },
};

//
// ./assertions/text.ts
//

function text(this: NightwatchAssertion<string>, selector: string, expectedText: string, msg?: string) {
    this.expected = expectedText;

    this.message = msg || `Element <${selector}> has text ${this.expected}.`;

    this.pass = value => value === expectedText;

    this.value = result => result;

    this.command = function(callback) {
        this.api.element('css selector', selector, elementResult => {
            if (elementResult.status) {
                callback(null);
                return;
            }
            this.api.elementIdText(elementResult.value.ELEMENT, textResult => {
                if (textResult.status) {
                    callback(null);
                    return;
                }
                callback(textResult.value);
            });
        });
        return this;
    };
}

// exports.assertion = text;

declare module 'nightwatch' {
    interface NightwatchCustomAssertions {
        text: (selector: string, expectedText: string, msg?: string) => NightwatchAPI;
    }
}

const testCustomAssertion = {
    'Test custom assertion': () => {
        browser.assert.text('#checkme', 'Exactly match text');
    },
};

import { EventEmitter } from 'events';
import { EnhancedPageObject, EnhancedSectionInstance, NightwatchAPI, NightwatchAssertion, NightwatchBrowser, NightwatchTests } from 'nightwatch';

//
// ./tests/general.ts
//

const testGeneral: NightwatchTests = {
  'Demo test Google 1': (browser: NightwatchBrowser) => {
    browser
      .url('https://google.com')
      .pause(1000);

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

  'Demo test Google 2': (browser: NightwatchBrowser) => {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  },

  'step one: navigate to google': (browser: NightwatchBrowser) => {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]', 1000);
  },

  'step two: click input': (browser: NightwatchBrowser) => {
    browser
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};

//
// ./pages/google.ts
//

const appsSection = {
  selector: 'div.gb_qc',
  commands: [{
    clickYoutube(this: AppsSection) {
      return this.click('@youtube');
    }
  }],
  elements: {
    myAccount: {
      selector: '#gb192'
    },
    youtube: {
      selector: '#gb36'
    }
  },
};

interface AppsSection extends EnhancedSectionInstance<typeof appsSection.commands[0], typeof appsSection.elements> { }

const menuSection = {
  selector: '#gb',
  commands: [{
    // add section commands here
    clickApps(this: MenuSection) {
      return this.click('@appSection');
    }
  }],
  elements: {
    mail: {
      selector: 'a[href="mail"]'
    },
    images: {
      selector: 'a[href="imghp"]'
    }
  },
  sections: {
    apps: appsSection
  }
};

interface MenuSection extends EnhancedSectionInstance<typeof menuSection.commands[0], typeof menuSection.elements, { apps: AppsSection }> { }

const googlePage = {
  commands: [{
    submit(this: GooglePage) {
      this.api.pause(1000);
      return this.waitForElementVisible('@submitButton', 1000)
        .click('@submitButton')
        .waitForElementNotPresent('@submitButton');
    }
  }],
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submitButton: {
      selector: 'input[name=btnK]'
    }
  },
  sections: {
    menu: menuSection
  }
};

// export = googlePage;

interface GooglePage extends EnhancedPageObject<typeof googlePage.commands[0], typeof googlePage.elements, { menu: MenuSection }> { }

declare module 'nightwatch' {
  interface NightwatchCustomPageObjects {
    google(): GooglePage;
  }
}

const testPage = {
  'Test commands': (browser: NightwatchBrowser) => {
    const google = browser.page.google();
    google
      .setValue('@searchBar', 'nightwatch')
      .submit();

    browser.end();
  },

  'Test sections': (browser: NightwatchBrowser) => {
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

  'Test assertions on page': (browser: NightwatchBrowser) => {
    const google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    browser.end();
  }
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
    (result) => {
      if (result.status) {
        throw result.value;
      }
      if (typeof callback === 'function') {
        callback.call(self, result.value);
      }
    });

  return this;
}

declare module 'nightwatch' {
  interface NightwatchCustomCommands {
    localStorageValue(key: string, callback?: (value: string | null) => void): this;
  }
}

// module.exports.command = resizeCommand;

const testCustomCommandFunction = {
  'Test command function': (browser: NightwatchBrowser) => {
    browser.localStorageValue('my-key', (result) => {
      console.log(result);
    });
  }
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
  'Test command class': (browser: NightwatchBrowser) => {
    browser.consoleLog('Hello world!');
  }
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
  'Test custom assertion': (browser: NightwatchBrowser) => {
    browser.assert.text('#checkme', 'Exactly match text');
  }
};

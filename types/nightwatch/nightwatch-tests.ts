import { NightwatchAPI, NightwatchTests } from 'nightwatch';

const test: NightwatchTests = {
  before: (browser, done) => {
    done();
  },
  'Demo test Google': (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .getTitle(function(result) {
        this.assert.equal(typeof result, 'string');
      })
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};

export = test;

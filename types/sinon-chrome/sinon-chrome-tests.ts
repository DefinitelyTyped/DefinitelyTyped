import * as sinon from 'sinon';
import SinonChrome = require("sinon-chrome");
var chromeStub = window.chrome as any as typeof SinonChrome;

// Examples taken from https://github.com/vitalets/sinon-chrome:

chromeStub.tabs.query({}, function(tabs: any) {
  chromeStub.browserAction.setBadgeText({text: String(tabs.length)});
});

chromeStub.tabs.query.yields(JSON.parse("[]"));

sinon.assert.calledOnce(chromeStub.browserAction.setBadgeText);
sinon.assert.calledWithMatch(chromeStub.browserAction.setBadgeText, {
    text: "2"
});

chromeStub.tabs.onCreated.trigger({url: 'http://google.com'});

chromeStub.tabs.onUpdated.applyTrigger([1, {status: "complete"}, {id: 1, url: 'http://google.com'}]);

// Extended examples:

var calledOnce: boolean = chromeStub.browserAction.setBadgeText.calledOnce;
var calledWithMatch: boolean = chromeStub.browserAction.setBadgeText.calledWithMatch({text: "2"});

chromeStub.storage.local.get.yields({});
chromeStub.storage.onChanged.trigger();
chromeStub.alarms.onAlarm.trigger();

var id: string = chromeStub.runtime.id;

chromeStub.proxy.settings.set({value: { }, scope: 'regular'});
chromeStub.proxy.settings.onChange.trigger();

chromeStub.registerPlugin(new chromeStub.plugins.I18nPlugin({
    one: {
        message: 'Hi!'
    },
    two: {
        message: 'Hi $first_name$ $last_name$!',
        placeholders: {
            first_name: {
                content: '$1'
            },
            last_name: {
                content: '$2'
            }
        }
    }
}));

chromeStub.registerPlugin(new chromeStub.plugins.CookiePlugin());

chromeStub.registerPlugin(new chromeStub.plugins.CookiePlugin(
    [
        {
            domain: '.domain.com',
            expirationDate: 1511612273,
            hostOnly: false,
            httpOnly: false,
            name: 'COOKIE_NAME',
            path: '/data',
            secure: false,
            session: false,
            storeId: '0',
            value: 'COOKIE_VALUE'
        },
        {
            domain: 'other-domain.com',
            hostOnly: false,
            httpOnly: false,
            name: 'other-cookie',
            path: '/',
            secure: false,
            session: true,
            storeId: '0',
            value: '123'
        }
    ]
));

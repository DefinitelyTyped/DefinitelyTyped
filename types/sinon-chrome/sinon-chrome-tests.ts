import * as sinon from 'sinon';
import SinonChrome = require("sinon-chrome");
var chromeStub = <typeof SinonChrome> <any> window.chrome;

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

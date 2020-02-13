declare function describe(desc: string, fn: () => void): void;
declare function it(desc: string, fn: () => void): void;

describe("tester Google Analytics Tracker _gat object", () => {
    it("can set ga script element", () => {
        gaClassic = document.createElement("script");
    });
    it("can set aync to true", () => {
        gaClassic.async = true;
     });
    it("can set src to string url", () => {
        gaClassic.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    });
    it("can set type", () => {
        gaClassic.type = 'text/javascript';
    });
});

describe('UniversalAnalytics', () => {
    it('should exercise all ga APIs', () => {
        ga('create', 'UA-65432-1', 'auto');
        ga('create', 'UA-65432-1', {some: 'config'});
        ga('create', 'UA-65432-1', 'auto', {some: 'config'});
        ga('send', 'pageview');
        ga('send', 'pageview', {some: 'details'});
        ga('send', 'event', 'Videos', 'play', 'Fall Campaign');
        ga('send', {hitType: 'event', eventCategory: 'Videos', eventAction: 'play', eventLabel: 'Fall Campaign'});
        ga('send', 'event', 'Videos', 'play', 'Fall Campaign', {nonInteraction: true});
        ga('send', 'pageview', '/page');
        ga('send', 'social', {socialNetwork: 'facebook', socialAction: 'like', socialTarget: 'http://foo.com'});
        ga('send', 'social', {socialNetwork: 'google+', socialAction: 'plus', socialTarget: 'http://foo.com'});
        ga('send', 'timing', {timingCategory: 'category', timingVar: 'lookup', timingValue: 123});
        ga('send', 'timing', {timingCategory: 'category', timingVar: 'lookup', timingValue: 123, timingLabel: 'label'});
        ga('trackerName.send', 'event', 'load');

        ga('require', 'somePlugin');
        ga('require', 'somePlugin', 'option');
        ga('require', 'somePlugin', { some: 'options' });
        ga('provide', 'somePlugin', () => {});
        ga('provide', 'somePlugin', tracker => {});
        ga('provide', 'somePlugin', (tracker, options) => {});

        ga.create('UA-65432-1', 'auto');
        ga.create('UA-65432-1', {some: 'config'});
        ga.create('UA-65432-1', 'auto', {some: 'config'});
        ga.getAll();
        ga.getByName('aNamedTracker');
    });
    it('should excercise Tracker APIs', () => {
        const tracker: UniversalAnalytics.Tracker = ga.create('UA-65432-1', 'auto');

        tracker.get('fieldName');

        tracker.set('aString', 'aString');
        tracker.set('aNumber', 1);
        tracker.set('anObject', {});
        tracker.set({
            several: 'values',
            at: 'once'
        });

        tracker.send('pageview');
        tracker.send('pageview', '/some-path');
        tracker.send('pageview', {some: 'details'});
    });

    it('should exercise Model APIs', () => {
        const tracker: UniversalAnalytics.Tracker = ga.create('UA-65432-1', 'auto');

        tracker.set('sendHitTask', (gaHitModel: UniversalAnalytics.Model) => {
            gaHitModel.get('hitPayload');

            gaHitModel.set('hitCallback', () => console.log('hit sent'), true);
            gaHitModel.set('hitCallback', () => console.log('hit sent'));
            gaHitModel.set({
                hitPayload: 'a=1&b=2',
                otherField: 3
            });
            gaHitModel.set({
                hitPayload: 'a=1&b=2',
                otherField: 3
            }, null, false);
        });
    });
});

describe("tester Google Analytics Tracker _gat object", () => {
    it("can create _createTracker", () => {
        _gat._createTracker('UA-65432-1');
        _gat._createTracker('UA-65432-2', 't2');
    });

    it("can create _getTrackerByName", () => {
        _gat._getTrackerByName();
        _gat._getTrackerByName('t2');
    });

    it("can create _anonymizeIp", () => {
        _gat._anonymizeIp();
    });
});

describe("tester Google Analytics Code  _gaq object", () => {
    it("can create _push", () => {
        _gaq.push(['_setAccount', 'UA-XXXXXXX-YY']);
        _gaq.push(['_gat._anonymizeIp']);
        _gaq.push(['_trackPageview']);

        // more details: https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking#_trackevent
        _gaq.push(['_trackEvent', 'category', 'action_name', undefined, undefined, true]);

        _gaq.push(() => {
                const tracker = _gat._getTrackerByName('UA-65432-1');
                tracker._trackPageview();
            }
        );
    });
});

describe("tester Google Analytics Code  Tracker object", () => {
    it("can create Tracker object and call methods", () => {
        const tracker = _gat._getTrackerByName('UA-65432-1');
        tracker._trackPageview();
        tracker._getName();
        tracker._getAccount();
        tracker._getVersion();
        tracker._getVisitorCustomVar(0);
        tracker._setAccount();
        tracker._setCustomVar(0, "name", "value", 1);
        tracker._setSampleRate("80");
        tracker._setSessionCookieTimeout(1800000);
        tracker._setSiteSpeedSampleRate(5);
        tracker._setVisitorCookieTimeout(63072000000);
        tracker._trackPageLoadTime();
    });
});

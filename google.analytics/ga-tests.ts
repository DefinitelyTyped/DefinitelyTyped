/// <reference path="ga.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />

describe("tester Google Analytics Tracker _gat object", () => {

    it("can set ga script element", () => {
        ga = <HTMLScriptElement>document.createElement("script");
    });

    it("can set aync to true", () => {
        ga.async = true;        
    });

    it("can set src to string url", () => {
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';;
    });

    it("can set type", () => {
        ga.type = 'text/javascript';        
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

        _gaq.push(() => {
                var tracker = _gat._getTrackerByName('UA-65432-1');
                tracker._trackPageview();
            }
        );
    });    
});


describe("tester Google Analytics Code  Tracker object", () => {
    it("can create Tracker object and call methods", () => {               
        var tracker = _gat._getTrackerByName('UA-65432-1');
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




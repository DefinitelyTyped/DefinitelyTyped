import Insight = require('insight');
var dummyPackage = {
    name: 'dummy',
    version: '1.0.0',
};

var insight = new Insight({
    // Google Analytics tracking code
    trackingCode: 'UA-XXXXXXXX-X',
    pkg: dummyPackage,
});

(()=> {
    // ask for permission the first time
    if (insight.optOut === undefined) {
        return insight.askPermission();
    }

    insight.track('foo', 'bar');
    // recorded in Analytics as `/foo/bar`
})();



declare var require:any;

import Insight = require('insight');
var pkg:any = require('./package.json');

var insight = new Insight({
    // Google Analytics tracking code
    trackingCode: 'UA-XXXXXXXX-X',
    packageName: pkg.name,
    packageVersion: pkg.version
});

(()=> {
    // ask for permission the first time
    if (insight.optOut === undefined) {
        return insight.askPermission();
    }

    insight.track('foo', 'bar');
    // recorded in Analytics as `/foo/bar`
})();

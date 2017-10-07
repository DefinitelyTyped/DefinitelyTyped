import yogBigpipe = require("yog-bigpipe");

yogBigpipe();
yogBigpipe({});
yogBigpipe({
    skipAnalysis: true
});

yogBigpipe({
    tpl: {
        _default: '',
        quickling: '[test]'
    }
});

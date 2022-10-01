import webfontloader = require('webfontloader');

var config: webfontloader.Config = {
    context: window,
    classes: false,
    events: false,
    loading: function() {},
    active: function() {},
    inactive: function() {},
    fontloading: function(familyName: string, fvd: string) {},
    fontactive: function(familyName: string, fvd: string) {},
    fontinactive: function(familyName: string, fvd: string) {},
    google: {
        families: ['Droid Sans', 'Droid Serif:bold'],
        text: 'abcdedfghijklmopqrstuvwxyz!',
    },
    custom: {
        families: ['My Font', 'My Other Font:n4,i4,n7'],
        urls: ['/fonts.css'],
    },
    fontdeck: {
        id: 'xxxx',
    },
    monotype: {
        projectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        version: 12345,
        loadAllFonts: true,
    },
    timeout: 2000,
};
webfontloader.load(config);

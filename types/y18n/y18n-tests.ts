import y18n = require("y18n");

// Testing custom config
new y18n({
    directory: '../locales',
    updateFiles: false,
    locale: 'en-AU',
    fallbackToLanguage: false
});

const Y18N = new y18n();

Y18N.__(`my awesome string: foo`);

Y18N.__n('one fish %s', '%d fishes %s', 2, 'foo');

Y18N.setLocale('en-US');

Y18N.getLocale();

Y18N.updateLocale({});

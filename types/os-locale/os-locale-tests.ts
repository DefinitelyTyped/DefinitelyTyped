import osLocale = require('os-locale');

osLocale().then(locale => {
    const str: string = locale;
});
osLocale({spawn: false}).then(locale => {
    const str: string = locale;
});

const locale1: string = osLocale.sync();
const locale2: string = osLocale.sync({spawn: false});

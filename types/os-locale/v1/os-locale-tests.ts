import osLocale = require('os-locale');

osLocale((err: any, locale: string) => {
});

osLocale({spawn: false}, (err: any, locale: string) => {
});

const locale1: string = osLocale.sync();
const locale2: string = osLocale.sync({spawn: false});

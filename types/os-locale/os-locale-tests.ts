
import osLocale, { sync } from 'os-locale';

osLocale((err: any, locale: string) => {
});

osLocale({spawn: false}, (err: any, locale: string) => {
});

var locale1: string = sync();
var locale2: string = sync({spawn: false});

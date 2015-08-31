/// <reference path="./os-locale.d.ts" />

import osLocale, { sync } from 'os-locale';

osLocale((err: any, locale: string) => {
});

var locale: string = sync();

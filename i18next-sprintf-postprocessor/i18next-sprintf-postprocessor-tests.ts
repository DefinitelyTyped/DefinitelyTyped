///<reference path="i18next-sprintf-postprocessor.d.ts"/>

import * as i18next from "i18next";
import sprintf from "i18next-sprintf-postprocessor";

function initTest() {
    const i18nextOptions = {};
    i18next.use(sprintf).init(i18nextOptions);
    i18next.init({ overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler });
}

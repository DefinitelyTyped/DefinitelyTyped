import * as i18next from "i18next";
import * as sprintfA from "i18next-sprintf-postprocessor";
import sprintfB from "i18next-sprintf-postprocessor/dist/commonjs";

function initTest() {
    const i18nextOptions = {};
    i18next
      .use(sprintfA)
      .use(sprintfB)
      .init(i18nextOptions);
      i18next
        .init({ overloadTranslationOptionHandler: sprintfA.overloadTranslationOptionHandler });
      i18next
        .init({ overloadTranslationOptionHandler: sprintfB.overloadTranslationOptionHandler });
}

function tTest() {
  i18next.t('interpolationTest1', 'a', 'b', 'c', 'd');
  i18next.t('interpolationTest3', 'z');
  i18next.t('interpolationTest4', 0);
}

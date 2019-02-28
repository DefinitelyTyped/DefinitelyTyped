// Tests for instabug-reactnative 8.0.26
// Project: https://github.com/Instabug/instabug-reactnative#readme
// Tests by: Aly Ezz <https://github.com/alyezz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Instabug from 'instabug-reactnative';

Instabug.startWithToken("APP_TOKEN", [Instabug.invocationEvent.shake]);
Instabug.setReportCategories("Performance", "UI", "Flow", "Other");
Instabug.setPromptOptionsEnabled(true, true, true);
Instabug.setLocale(Instabug.locale.english);
Instabug.setColorTheme(Instabug.colorTheme.light);
Surveys.showSurvey("ZAKSlVz98QdPyOx1wIt8BA");
Instabug.setInvocationEvent(Instabug.invocationEvent.shake);

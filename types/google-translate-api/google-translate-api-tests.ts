import translate = require('google-translate-api');

translate('hello', { from: 'en', to: 'zh-tw' }); // $ExpectType Promise<TranslateResult>

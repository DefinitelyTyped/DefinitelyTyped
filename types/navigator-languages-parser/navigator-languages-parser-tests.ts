import NavigatorLanguagesParser = require('navigator-languages-parser');

NavigatorLanguagesParser.parseLanguages(['en', 'es'], 'en'); // $ExpectType string

NavigatorLanguagesParser.parseLanguages(['en', 'es']); // $ExpectType string | undefined

NavigatorLanguagesParser.parseLanguages(['en', 'es'], false); // $ExpectType string | undefined

// @ts-expect-error
NavigatorLanguagesParser.parseLanguages(['en', 'es'], true);

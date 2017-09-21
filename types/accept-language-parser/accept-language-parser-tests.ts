// https://github.com/opentable/accept-language-parser/blob/v1.4.1/index.js

import * as AcceptLanguageParser from '.';

const l1: AcceptLanguageParser.Language = {
    code: 'en',
    script: 'Latn',
    region: 'GB',
    quality: 0.9
};

const l2: AcceptLanguageParser.Language = {
    code: 'en',
    quality: 0.9
};

const l3: AcceptLanguageParser.Language = {
    code: 'en',
    script: null,
    quality: 0.9
};

AcceptLanguageParser.parse('');
AcceptLanguageParser.pick([''], '');
AcceptLanguageParser.pick([''], [l1, l2, l3]);

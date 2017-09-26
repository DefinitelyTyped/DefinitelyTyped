// https://github.com/opentable/accept-language-parser/blob/v1.4.1/index.js

import * as AcceptLanguageParser from 'accept-language-parser';

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

const parsed1: AcceptLanguageParser.Language[] = AcceptLanguageParser.parse('');
const pick1: string | null = AcceptLanguageParser.pick([''], '');
const pick2: string | null = AcceptLanguageParser.pick([''], [l1, l2, l3]);

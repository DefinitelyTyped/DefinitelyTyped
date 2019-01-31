// https://github.com/opentable/accept-language-parser/blob/v1.5.0/index.js

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

type Lang = "en-US" | "ko-KR";
const enUs: Lang = "en-US";
const koKr: Lang = "ko-KR";

const parsed1: AcceptLanguageParser.Language[] = AcceptLanguageParser.parse('');
const pick1: string | null = AcceptLanguageParser.pick([''], '');
const pick2: string | null = AcceptLanguageParser.pick([''], [l1, l2, l3]);
const pick3: string | null = AcceptLanguageParser.pick([''], '', {});
const pick4: string | null = AcceptLanguageParser.pick([''], '', { loose: true });
const pick5: Lang | null = AcceptLanguageParser.pick<Lang>([enUs, koKr], [l1, l2, l3]);
const pick6: Lang | null = AcceptLanguageParser.pick([enUs, koKr], [l1, l2, l3]);

const pickOptions: AcceptLanguageParser.PickOptions = {
    loose: true
};

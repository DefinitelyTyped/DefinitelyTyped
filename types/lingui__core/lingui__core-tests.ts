import {
    i18n,
    setupI18n,
    Catalog,
    Catalogs,
    MessageOptions,
    LanguageData,
    I18n,
    date,
    number,
    i18nMark
} from '@lingui/core';

const age = 12;
const templateResult: string = i18n.t`${age} years old`;
const templateIdResult: string = i18n.t('templateId')`${age} years old`;
const translateResult: string = i18n._('age', { age }, { defaults: '{age} years old' });

const count = 42;

const pluralResult: string = i18n.plural({
    value: count,
    0: 'no books',
    one: '# book',
    other: '# books'
});
const pluralIdResult: string = i18n.plural('pluralId', {
    value: count,
    0: 'no books',
    one: '# book',
    other: '# books'
});

const selectOrdinalResult: string = i18n.selectOrdinal({
    value: count,
    0: 'Zeroth book',
    one: '#st book',
    two: '#nd book',
    few: '#rd book',
    other: '#th book'
});
const selectOrdinalIdResult: string = i18n.selectOrdinal('selectOrdinalId', {
    value: count,
    0: 'Zeroth book',
    one: '#st book',
    two: '#nd book',
    few: '#rd book',
    other: '#th book'
});

const gender = 'female';
const numOfGuests = 2;
const host = 'Amy';
const guest = 'Bob';
const selectResult = i18n.select({
    value: gender,
    female: i18n.plural({
        value: numOfGuests,
        offset: 1,
        0: i18n.t`${host} does not give a party.`,
        1: i18n.t`${host} invites ${guest} to her party.`,
        2: i18n.t`${host} invites ${guest} and one other person to her party.`,
        other: i18n.t`${host} invites ${guest} and # other people to her party.`
    }),
    male: 'male',
    other: 'other'
});

const selectIdResult = i18n.select('selectId', {
    value: gender,
    female: 'female',
    male: 'male',
    other: 'other'
});

const catalog: Catalog = {
    messages: {
        age(a) {
            return [a('age'), 'años de edad'];
        }
    }
};
const catalogs: Catalogs = { es: catalog };
const setupResult: I18n = setupI18n({ catalogs, language: 'es' });

const formattedDate: string = date('en', { timeZone: 'UTC' })(new Date());
const formattedNumber: string = number('en', { style: 'currency', currency: 'EUR' })(1234.56);

const mark: string = i18nMark('mark');

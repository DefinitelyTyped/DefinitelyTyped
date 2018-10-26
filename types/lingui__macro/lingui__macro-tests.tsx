import * as React from 'react';
import {
    t,
    select,
    plural,
    selectOrdinal,
    date,
    number,
    Trans,
    Plural,
    Select,
    SelectOrdinal,
    DateFormat,
    NumberFormat
} from '@lingui/macro';

// JS
const age = 12;
const templateResult: string = t`${age} years old`;
const templateIdResult: string = t('templateId')`${age} years old`;

const count = 42;

const pluralResult: string = plural({
    value: count,
    0: 'no books',
    one: '# book',
    other: '# books'
});
const pluralIdResult: string = plural('pluralId', {
    value: count,
    0: 'no books',
    one: '# book',
    other: '# books'
});

const selectOrdinalResult: string = selectOrdinal({
    value: count,
    0: 'Zeroth book',
    one: '#st book',
    two: '#nd book',
    few: '#rd book',
    other: '#th book'
});
const selectOrdinalIdResult: string = selectOrdinal('selectOrdinalId', {
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
const selectResult = select({
    value: gender,
    female: plural({
        value: numOfGuests,
        offset: 1,
        0: t`${host} does not give a party.`,
        1: t`${host} invites ${guest} to her party.`,
        2: t`${host} invites ${guest} and one other person to her party.`,
        other: t`${host} invites ${guest} and # other people to her party.`
    }),
    male: 'male',
    other: 'other'
});

const selectIdResult = select('selectId', {
    value: gender,
    female: 'female',
    male: 'male',
    other: 'other'
});

const formattedDate: string = date(new Date(), { timeZone: 'UTC' });
const formattedNumber: string = number(1234.56, { style: 'currency', currency: 'EUR' });

// JSX
const App = () => {
    const name = 'Ken';
    const numBooks = 58;
    const gender = 'male';
    const price = 21.35;
    const lastLogin = new Date();
    const age = 23;
    return (
        <>
            <Trans>Name {name} in <code>Trans</code>.</Trans>
            <Trans id="transId" description="Trans description">Name {name} in <code>Trans</code> with <code>id</code>.</Trans>
            <Plural id="msg.plural"
                    description="Plural description"
                    value={numBooks}
                    _0={<Trans>{name} has no books</Trans>}
                    one={<Trans>{name} has # book</Trans>}
                    other={<Trans>{name} has # books</Trans>}
                    _999999="Just a string"
            />
            <Plural value={numBooks}
                    _0={<Trans>{name} has no books</Trans>}
                    one={<Trans>{name} has # book</Trans>}
                    other={<Trans>{name} has # books</Trans>}
                    _999999="Just a string"
            />
            <Select id="msg.select"
                    description="Select description"
                    value={gender}
                    male={<Trans>{name} and his friends</Trans>}
                    female={<Trans>{name} and her friends</Trans>}
                    other={<Trans>{name} and their friends</Trans>}
                    _999999="Just a string"
            />
            <Select value={gender}
                    male={<Trans>{name} and his friends</Trans>}
                    female={<Trans>{name} and her friends</Trans>}
                    other={<Trans>{name} and their friends</Trans>}
                    _999999="Just a string"
            />
            <SelectOrdinal id="msg.selectOrdinal"
                           description="SelectOrdinal description"
                           value={numBooks}
                           _0={<Trans>No books from {name}</Trans>}
                           one={<Trans>#st book from {name}</Trans>}
                           two={<Trans>#nd book from {name}</Trans>}
                           other={<Trans>#th book from {name}</Trans>}
                           _999999="Just a string"
            />
            <SelectOrdinal value={numBooks}
                           _0={<Trans>No books from {name}</Trans>}
                           one={<Trans>#st book from {name}</Trans>}
                           two={<Trans>#nd book from {name}</Trans>}
                           other={<Trans>#th book from {name}</Trans>}
                           _999999="Just a string"
            />
            <Trans>Last login on <DateFormat format={{ timeZone: 'UTC' }} value={lastLogin} />.</Trans>
            <Trans>
                Price of book: <NumberFormat
                format={{ style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }}
                value={price} />.
            </Trans>
        </>
    );
};

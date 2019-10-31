import * as React from 'react';
import { MessageDescriptor } from '@lingui/core';
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
const templateResult: MessageDescriptor = t`${age} years old`;
const templateIdResult: MessageDescriptor = t('templateId')`${age} years old`;

const count = 42;

const pluralResult: MessageDescriptor = plural({
    value: count,
    0: 'no books',
    one: '# book',
    other: '# books'
});
const pluralIdResult: MessageDescriptor = plural('pluralId', {
    value: count,
    0: 'no books',
    one: '# book',
    other: '# books'
});

const selectOrdinalResult: MessageDescriptor = selectOrdinal({
    value: count,
    0: 'Zeroth book',
    one: '#st book',
    two: '#nd book',
    few: '#rd book',
    other: '#th book'
});
const selectOrdinalIdResult: MessageDescriptor = selectOrdinal('selectOrdinalId', {
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
        0: `${host} does not give a party.`,
        1: `${host} invites ${guest} to her party.`,
        2: `${host} invites ${guest} and one other person to her party.`,
        other: `${host} invites ${guest} and # other people to her party.`
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

const formattedDate: MessageDescriptor = date(new Date(), { timeZone: 'UTC' });
const formattedNumber: MessageDescriptor = number(1234.56, { style: 'currency', currency: 'EUR' });

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

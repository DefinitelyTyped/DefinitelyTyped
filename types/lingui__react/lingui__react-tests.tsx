import * as React from 'react';
import { Catalog, Catalogs, I18n } from '@lingui/core';
import {
    withI18n,
    I18nProvider,
    I18n as I18nComponent,
    Trans,
    Plural,
    Select,
    SelectOrdinal,
    DateFormat,
    NumberFormat,
    i18nMark
} from '@lingui/react';

const catalog: Catalog = {
    messages: {
        ageId(a) {
            return [a('age'), 'años de edad'];
        }
    }
};
const catalogs: Catalogs = { es: catalog };

interface LocalizeAttributeBaseProps {
    i18n: I18n;
    age: number;
}

const LocalizeAttributeBase = (props: LocalizeAttributeBaseProps) => {
    const { i18n, age } = props;
    return (
        <span title={i18n.t`Age: ${age}`} aria-label={i18n.t('ageId')`${age} years old`}>Attributes</span>
    );
};

const LocalizeAttribute = withI18n()(LocalizeAttributeBase);
const LocalizeOptionAttribute = withI18n({ update: true, withRef: true, withHash: true })(LocalizeAttributeBase);

const App = () => {
    const name = 'Ken';
    const numBooks = 58;
    const gender = 'male';
    const price = 21.35;
    const lastLogin = new Date();
    const age = 23;
    return (
        <I18nProvider language="es" catalogs={catalogs}>
            <LocalizeAttribute age={age} />
            <LocalizeOptionAttribute age={age} />
            <I18nComponent>
                {({ i18n }) => (
                    <span aria-label={i18n.t('ageId')`${age} years old`}>Attributes</span>
                )}
            </I18nComponent>
            <Trans>Name {name} in <code>Trans</code>.</Trans>
            <Trans id="transId">Name {name} in <code>Trans</code> with <code>id</code>.</Trans>
            <Plural id="msg.plural"
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
        </I18nProvider>
    );
};

const mark: string = i18nMark('mark');

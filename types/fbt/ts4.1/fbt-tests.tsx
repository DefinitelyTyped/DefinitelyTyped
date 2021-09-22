import * as React from 'react';
import {
    init,
    fbt,
    GenderConst,
    IntlVariations,
    FbtPlural,
    FbtParam,
    FbtEnum,
    FbtName,
    FbtPronoun,
    FbtSameParam,
} from 'fbt';

init({
    hooks: {
        getViewerContext: () => ({
            locale: 'ru',
            GENDER: IntlVariations.GENDER_FEMALE,
        }),
    },
    translations: {
        en: {
            '8cQlV': 'Hello, {userName}',
        },
        ru: {
            '8cQlV': 'Привет, {userName}',
        },
    },
});

const person = {
    getName: () => 'retyui',
    getGender: (): IntlVariations => IntlVariations.GENDER_UNKNOWN,
    getPronounGender: () => GenderConst.FEMALE_PLURAL,
    getLikeCount: () => Math.random(),
    getPhotoCount: () => Math.random(),
    isAdmin: () => false,
};

const simpleExample = fbt('Hello', 'simpleExample');
const JSXSimpleExample = <fbt desc="JSXSimpleExample">Hello</fbt>;

const simpleExampleWithParams = fbt('simpleExampleWithParams', 'Welcome message', {
    project: 'fbt types',
    author: 'retyui',
    preserveWhitespace: true,
    doNotExtract: true,
    subject: IntlVariations.GENDER_FEMALE,
});
const JSXSimpleExampleWithParams = (
    <fbt
        author="retyui"
        project="fbt types"
        doNotExtract={false}
        subject={IntlVariations.GENDER_MALE}
        preserveWhitespace={false}
        desc="Welcome message"
    >
        Hello
    </fbt>
);

const paramStrExample = fbt('Hello, ' + fbt.param('userName', person.getName()), 'paramStrExample');
const paramNumExample = fbt('Likes: ' + fbt.param('likeCount', person.getLikeCount()), 'paramNumExample');
const paramBoolExample = fbt('Has acccess :' + fbt.param('isAdmin', person.isAdmin()), 'paramBoolExample');
const paramExampleWithParams = fbt(
    'Hello, ' +
        fbt.param('userName', person.getName(), {
            gender: IntlVariations.GENDER_FEMALE,
            number: true,
        }),
    'paramExampleWithParams',
);
const JSXParamExample = (
    <fbt desc="JSX Param example">
        Hello, <FbtParam name="name">{person.getName()}</FbtParam>
    </fbt>
);

const sameParamAndFbtNameExample = fbt(
    `${fbt.name(
        'name',
        <a href="#">{person.getName()}</a>,
        IntlVariations.GENDER_UNKNOWN,
    )} shared a link.  Tell ${fbt.sameParam('name')} you liked it.`,
    'sameParamAndFbtNameExample',
);
const JSXSameParamAndFbtNameExample = (
    <fbt desc="JSXSameParamAndFbtNameExample">
        <FbtName name="name" gender={IntlVariations.GENDER_MALE}>
            {<a href="#">{'retyui'}</a>}
        </FbtName>
        shared a link. Tell
        <FbtSameParam name="name" />
        you liked it.
    </fbt>
);

const pluralExample = fbt(
    `You have ${fbt.plural('a like', person.getLikeCount(), {
        name: 'number of likes',
        showCount: 'ifMany',
        many: 'likes',
    })} on your ${fbt.plural('photo', person.getPhotoCount())}`,
    'pluralExample',
);
const pluralExampleWithParams = fbt(
    'You have ' +
        fbt.plural('a like', person.getLikeCount(), {
            name: 'number of likes',
            showCount: 'ifMany',
            many: 'likes',
        }),
    'pluralExampleWithParams',
);

const JSXPluralExample = (
    <fbt desc="JSXPluralExample">
        You have
        <FbtPlural count={person.getLikeCount()} name="number of likes" showCount="ifMany" many="likes">
            a like
        </FbtPlural>
        on your
        <FbtPlural count={person.getPhotoCount()} showCount="no">
            photo
        </FbtPlural>.
    </fbt>
);

const enumVal = 'CAR';
const enumMapExample = fbt(
    'Buy a new ' +
        fbt.enum(enumVal, {
            CAR: 'car',
            HOUSE: 'house',
            BOAT: 'boat',
            HOUSEBOAT: 'houseboat',
        }),
    'enumMapExample',
);
const JSXEnumMapExample = (
    <fbt desc="JSXEnumMapExample">
        Buy a new
        <FbtEnum
            enum-range={{
                CAR: 'car',
                HOUSE: 'house',
                BOAT: 'boat',
                HOUSEBOAT: 'houseboat',
            }}
            value={enumVal}
        />
    </fbt>
);
const JSXEnumArrayExample = (
    <fbt desc="JSXEnumArrayExample">
        Buy a new
        <FbtEnum enum-range={['car', 'house', 'boat', 'houseboat']} value="car" />
    </fbt>
);

const enumArrayExample = fbt(
    'Buy a new' + fbt.enum(enumVal, ['car', 'house', 'boat', 'houseboat']),
    'enumArrayExample',
);

const JSXPronounExample = (
    <fbt desc="JSXPronounExample">
        <FbtParam name="name">{person.getName()}</FbtParam>
        shared
        <FbtPronoun type="possessive" gender={person.getPronounGender()} human={true} />
        photo with you.
    </fbt>
);

const pronounExample = fbt(
    `${fbt.param('name', person.getName())}  shared ${fbt.pronoun(
        'subject',
        person.getPronounGender(),
    )} photo with you.`,
    'pronounExample',
);
const pronounExampleWithParams = fbt(
    `${fbt.param('name', person.getName())}  shared ${fbt.pronoun('reflexive', person.getPronounGender(), {
        human: true,
        capitalize: false,
    })}  photo with you.`,
    'pronounExampleWithParams',
);

// @ts-expect-error second argument 'description' is required
const invalid1 = fbt('Hello');

const invalidFbtOptions = fbt('Hello', 'Welcome message', {
    // @ts-expect-error 'project' is string
    project: true,
    // @ts-expect-error 'author' is string
    author: 1,
    // @ts-expect-error 'preserveWhitespace' is boolean
    preserveWhitespace: null,
    // @ts-expect-error 'doNotExtract' is boolean
    doNotExtract: 'ok',
    // @ts-expect-error 'subject' is not enum value
    subject: 'not enum value',
});

// @ts-expect-error 'desc' is required
const invalid2 = <fbt>children</fbt>;

const invalid3 = (
    <fbt
        // @ts-expect-error 'desc' is string
        desc={false}
    >
        children
    </fbt>
);

// @ts-expect-error second argument 'value' is required
const invalid4 = fbt.param('userName');

const invalid5 = fbt.param('userName', person.getName(), {
    // @ts-expect-error 'gender' have to be enum value
    gender: 'not enum value',
});

const invalid6 = (
    <fbt desc="Param example">
        <FbtParam
            // @ts-expect-error 'name' is string
            name={1}
        >
            Name
        </FbtParam>
    </fbt>
);

const invalid7 = fbt.plural(
    'photo',
    // @ts-expect-error 'name' is number
    'not number',
);
const invalid8 = fbt.plural('a like', 1, {
    // @ts-expect-error 'showCount' have to be one of values: 'yes' | 'no' | 'ifMany
    showCount: 'ifMany_____',
});

const invalid9 = (
    <fbt desc="pronoun example">
        <FbtPronoun
            // @ts-expect-error 'pronounType' have to be one of 'object' | 'possessive' | 'reflexive' | 'subject'
            type="possessive___"
            gender={person.getPronounGender()}
            human={true}
        />
    </fbt>
);
const invalid10 = (
    <fbt desc="pronoun example">
        <FbtPronoun
            type="object"
            // @ts-expect-error 'gender' have to be enum value
            gender={'not enum value'}
            human={true}
        />
    </fbt>
);

const invalid11 = fbt.pronoun(
    // @ts-expect-error first argument 'pronounType' have to be one of 'object' | 'possessive' | 'reflexive' | 'subject'
    'subject__',
    person.getPronounGender(),
);

const invalid12 = fbt.pronoun(
    'possessive',
    // @ts-expect-error 'gender' have to be enum value
    'not enum value',
);
const invalid13 = fbt.pronoun('reflexive', person.getPronounGender(), {
    // @ts-expect-error 'human' is boolean
    human: 'ok',
});

// @ts-expect-error 'translations' is required
init({});

init({
    translations: {
        // @ts-expect-error object values have to be `Record<key: string, value: string | object>`
        en: 1,
    },
});

init({
    hooks: {
        // @ts-expect-error 'GENDER' have to be on of (IntlVariations.GENDER_MALE|GENDER_FEMALE|GENDER_UNKNOWN)
        getViewerContext: () => ({
            GENDER: IntlVariations.NUMBER_FEW,
            locale: 'en',
        }),
    },
    translations: { en: { key: 'value' } },
});

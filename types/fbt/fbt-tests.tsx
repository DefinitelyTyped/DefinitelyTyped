import { fbs, fbt, FbtOptions, GenderConst, init, IntlVariations } from "fbt";
import * as React from "react";

/** BEGIN: init */

init({
    hooks: {
        getViewerContext: () => ({
            locale: "ru",
            GENDER: IntlVariations.GENDER_FEMALE,
        }),
    },
    translations: {
        en: {
            "8cQlV": "Hello, {userName}",
        },
        ru: {
            "8cQlV": "Привет, {userName}",
        },
    },
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
            locale: "en",
        }),
    },
    translations: { en: { key: "value" } },
});

/** END: init */

const person = {
    getName: () => "retyui",
    getGender: (): IntlVariations => IntlVariations.GENDER_UNKNOWN,
    getPronounGender: () => GenderConst.FEMALE_PLURAL,
    getLikeCount: () => Math.random(),
    getPhotoCount: () => Math.random(),
    isAdmin: () => false,
};
const enumVal = "CAR";

/** BEGIN: `fbt()` / `fbs()` */
/**
 * To simplify the use of fbt, we cast return type to string
 * But in can be used as React element
 *
 * const result = fbt('text','desc');
 *
 * typeof result;               // object
 * result.toString()            // "Hello, retyui"
 * JSON.stringify(result)       // "\"Hello, retyui\""
 * React.isValidElement(result) // true
 */
const shouldBeStringByDefault: string = fbt("Hello", "simpleExample");
const castToString: string = fbt("Hello", "simpleExample").toString();
const shouldBeStringByDefaultFbs = fbs("Hello", "simpleExample");
const castToStringFbs = fbs("Hello", "simpleExample").toString();

const simpleExample = fbt("Hello", "simpleExample");
const simpleExampleFbs = fbs("Hello", "simpleExample");
const simpleExampleWithParams = fbt("simpleExampleWithParams", "Welcome message", {
    project: "fbt types",
    author: "retyui",
    preserveWhitespace: true,
    doNotExtract: true,
    subject: IntlVariations.GENDER_FEMALE,
});
const simpleExampleWithParamsFbs = fbs("simpleExampleWithParams", "Welcome message", {
    project: "fbt types",
    author: "retyui",
    preserveWhitespace: true,
    doNotExtract: true,
    subject: IntlVariations.GENDER_FEMALE,
});
const paramStrExample = fbt("Hello, " + fbt.param("userName", person.getName()), "paramStrExample");
const paramStrExampleFbs = fbs("Hello, " + fbs.param("userName", person.getName()), "paramStrExample");
const arrayOfStringInput = fbt(["Hello, ", fbt.param("userName", person.getName())], "arrayInputExample");
const arrayOfStringInputFbs = fbs(["Hello, ", fbt.param("userName", person.getName())], "arrayInputExample");
const paramNumExample = fbt("Likes: " + fbt.param("likeCount", person.getLikeCount()), "paramNumExample");
const paramNumExampleFbs = fbs("Likes: " + fbs.param("likeCount", person.getLikeCount()), "paramNumExample");
const paramBoolExample = fbt("Has acccess :" + fbt.param("isAdmin", person.isAdmin()), "paramBoolExample");
const paramBoolExampleFbs = fbs("Has acccess :" + fbs.param("isAdmin", person.isAdmin()), "paramBoolExample");
const paramExampleWithParams = fbt(
    "Hello, "
        + fbt.param("userName", "retyui", {
            gender: IntlVariations.GENDER_FEMALE,
            number: true,
        }),
    "paramExampleWithParams",
);
const paramExampleWithParamsFbs = fbs(
    "Hello, "
        + fbs.param("userName", "retyui", {
            gender: IntlVariations.GENDER_FEMALE,
            number: true,
        }),
    "paramExampleWithParams",
);
const sameParamAndFbtNameExample = fbt(
    `${
        fbt.name(
            "name",
            <a href="#">{person.getName()}</a>,
            IntlVariations.GENDER_UNKNOWN,
        )
    } shared a link.  Tell ${fbt.sameParam("name")} you liked it.`,
    "sameParamAndFbtNameExample",
);
const sameParamAndFbtNameExampleFbs = fbs(
    `${
        fbs.name(
            "name",
            <a href="#">{person.getName()}</a>,
            IntlVariations.GENDER_UNKNOWN,
        )
    } shared a link.  Tell ${fbs.sameParam("name")} you liked it.`,
    "sameParamAndFbtNameExample",
);
const pluralExample = fbt(
    `You have ${
        fbt.plural("a like", person.getLikeCount(), {
            name: "number of likes",
            showCount: "ifMany",
            many: "likes",
        })
    } on your ${fbt.plural("photo", person.getPhotoCount())}`,
    "pluralExample",
);
const pluralExampleFbs = fbs(
    `You have ${
        fbs.plural("a like", person.getLikeCount(), {
            name: "number of likes",
            showCount: "ifMany",
            many: "likes",
        })
    } on your ${fbs.plural("photo", person.getPhotoCount())}`,
    "pluralExample",
);
const pluralExampleWithParams = fbt(
    "You have "
        + fbt.plural("a like", person.getLikeCount(), {
            name: "number of likes",
            showCount: "ifMany",
            many: "likes",
        }),
    "pluralExampleWithParams",
);
const pluralExampleWithParamsFbs = fbs(
    "You have "
        + fbs.plural("a like", person.getLikeCount(), {
            name: "number of likes",
            showCount: "ifMany",
            many: "likes",
        }),
    "pluralExampleWithParams",
);
const pronounExample = fbt(
    `${fbt.param("name", person.getName())}  shared ${
        fbt.pronoun(
            "subject",
            person.getPronounGender(),
        )
    } photo with you.`,
    "pronounExample",
);
const pronounExampleFbs = fbs(
    `${fbs.param("name", person.getName())}  shared ${
        fbs.pronoun(
            "subject",
            person.getPronounGender(),
        )
    } photo with you.`,
    "pronounExample",
);
const pronounExampleWithParams = fbt(
    `${fbt.param("name", person.getName())}  shared ${
        fbt.pronoun("reflexive", person.getPronounGender(), {
            human: true,
            capitalize: false,
        })
    }  photo with you.`,
    "pronounExampleWithParams",
);
const pronounExampleWithParamsFbs = fbs(
    `${fbs.param("name", person.getName())}  shared ${
        fbs.pronoun("reflexive", person.getPronounGender(), {
            human: true,
            capitalize: false,
        })
    }  photo with you.`,
    "pronounExampleWithParams",
);
const enumArrayExample = fbt(
    "Buy a new" + fbt.enum(enumVal, ["car", "house", "boat", "houseboat"]),
    "enumArrayExample",
);
const enumArrayExampleFbs = fbs(
    "Buy a new" + fbs.enum(enumVal, ["car", "house", "boat", "houseboat"]),
    "enumArrayExample",
);
const enumMapExample = fbt(
    "Buy a new "
        + fbt.enum(enumVal, {
            CAR: "car",
            HOUSE: "house",
            BOAT: "boat",
            HOUSEBOAT: "houseboat",
        }),
    "enumMapExample",
);
const enumMapExampleFbs = fbs(
    "Buy a new "
        + fbs.enum(enumVal, {
            CAR: "car",
            HOUSE: "house",
            BOAT: "boat",
            HOUSEBOAT: "houseboat",
        }),
    "enumMapExample",
);

// @ts-expect-error second argument 'description' is required
const invalidDesc = fbt("Hello");

// @ts-expect-error second argument 'description' is required
const invalidDescFbs = fbt("Hello");

const invalidFbtOptions = fbt("Hello", "Welcome message", {
    // @ts-expect-error 'project' is string
    project: true,
    // @ts-expect-error 'author' is string
    author: 1,
    // @ts-expect-error 'preserveWhitespace' is boolean
    preserveWhitespace: null,
    // @ts-expect-error 'doNotExtract' is boolean
    doNotExtract: "ok",
    // @ts-expect-error 'subject' is not enum value
    subject: "not enum value",
});
const invalidFbtOptionsFbs = fbs("Hello", "Welcome message", {
    // @ts-expect-error 'project' is string
    project: true,
    // @ts-expect-error 'author' is string
    author: 1,
    // @ts-expect-error 'preserveWhitespace' is boolean
    preserveWhitespace: null,
    // @ts-expect-error 'doNotExtract' is boolean
    doNotExtract: "ok",
    // @ts-expect-error 'subject' is not enum value
    subject: "not enum value",
});

// @ts-expect-error second argument 'value' is required
const invalidParam = fbt.param("userName");
// @ts-expect-error second argument 'value' is required
const invalidParamFbs = fbs.param("userName");
// @ts-expect-error only one argument is expected
const invalidSameParam = fbt.sameParam("userName", "desc");
// @ts-expect-error only one argument is expected
const invalidSameParamFbs = fbs.sameParam("userName", "desc");
const invalidParamOption = fbt.param("userName", "retyui", {
    // @ts-expect-error 'gender' have to be enum value
    gender: "not enum value",
});
const invalidParamOptionFbs = fbs.param("userName", "retyui", {
    // @ts-expect-error 'gender' have to be enum value
    gender: "not enum value",
});

const invalidPlural = fbt.plural(
    "photo",
    // @ts-expect-error 'name' is number
    "not number",
);
const invalidPluralFbs = fbs.plural(
    "photo",
    // @ts-expect-error 'name' is number
    "not number",
);

const invalidPluralOption = fbt.plural("a like", 1, {
    // @ts-expect-error 'showCount' have to be one of values: 'yes' | 'no' | 'ifMany
    showCount: "ifMany_____",
});
const invalidPluralOptionFbs = fbs.plural("a like", 1, {
    // @ts-expect-error 'showCount' have to be one of values: 'yes' | 'no' | 'ifMany
    showCount: "ifMany_____",
});

const invalidPronoun = fbt.pronoun(
    // @ts-expect-error first argument 'pronounType' have to be one of 'object' | 'possessive' | 'reflexive' | 'subject'
    "subject__",
    person.getPronounGender(),
);
const invalidPronounFbs = fbs.pronoun(
    // @ts-expect-error first argument 'pronounType' have to be one of 'object' | 'possessive' | 'reflexive' | 'subject'
    "subject__",
    person.getPronounGender(),
);
const invalidPronounGender = fbt.pronoun(
    "possessive",
    // @ts-expect-error 'gender' have to be enum value
    "not enum value",
);
const invalidPronounGenderFbs = fbs.pronoun(
    "possessive",
    // @ts-expect-error 'gender' have to be enum value
    "not enum value",
);
const invalidPronounOption = fbt.pronoun("reflexive", person.getPronounGender(), {
    // @ts-expect-error 'human' is boolean
    human: "ok",
});
const invalidPronounOptionFbs = fbs.pronoun("reflexive", person.getPronounGender(), {
    // @ts-expect-error 'human' is boolean
    human: "ok",
});
/** END: `fbt()` / `fbs()` */

/** BEGIN: <fbt> */
const JSXSimpleExample = <fbt desc="JSXSimpleExample">Hello</fbt>;
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
const JSXParamExample = (
    <fbt desc="JSX Param example">
        Hello, <fbt:param name="name">{person.getName()}</fbt:param>
    </fbt>
);
const JSXParamWithHtmlExample = (
    <fbt desc="JSX Param example">
        Hello, <fbt:param name="name">{<span>world!</span>}</fbt:param>
    </fbt>
);
const JSXSameParamAndFbtNameExample = (
    <fbt desc="JSXSameParamAndFbtNameExample">
        <fbt:name name="name" gender={IntlVariations.GENDER_MALE}>
            {<a href="#">{"retyui"}</a>}
        </fbt:name>
        shared a link. Tell
        <fbt:same-param name="name" />
        you liked it.
    </fbt>
);
const JSXPluralExample = (
    <fbt desc="JSXPluralExample">
        You have
        <fbt:plural count={person.getLikeCount()} name="number of likes" showCount="ifMany" many="likes">
            a like
        </fbt:plural>
        on your
        <fbt:plural count={person.getPhotoCount()} showCount="no">
            photo
        </fbt:plural>.
    </fbt>
);
const JSXEnumMapExample = (
    <fbt desc="JSXEnumMapExample">
        Buy a new
        <fbt:enum
            enum-range={{
                CAR: "car",
                HOUSE: "house",
                BOAT: "boat",
                HOUSEBOAT: "houseboat",
            }}
            value={enumVal}
        />
    </fbt>
);
const JSXEnumArrayExample = (
    <fbt desc="JSXEnumArrayExample">
        Buy a new
        <fbt:enum enum-range={["car", "house", "boat", "houseboat"]} value="car" />
    </fbt>
);
const JSXPronounExample = (
    <fbt desc="JSXPronounExample">
        <fbt:param name="name">{person.getName()}</fbt:param>
        shared
        <fbt:pronoun type="possessive" gender={person.getPronounGender()} human={true} />
        photo with you.
    </fbt>
);

// @ts-expect-error 'desc' is required
const invalidDescAttr = <fbt>children</fbt>;
const invalidDescAttrType = (
    <fbt
        // @ts-expect-error 'desc' is string
        desc={false}
    >
        children
    </fbt>
);
const invalidNameAttrType = (
    <fbt desc="Param example">
        <fbt:param
            // @ts-expect-error 'name' is string
            name={1}
        >
            Name
        </fbt:param>
    </fbt>
);
const invalidPronounTypeAttr = (
    <fbt desc="pronoun example">
        <fbt:pronoun
            // @ts-expect-error 'pronounType' have to be one of 'object' | 'possessive' | 'reflexive' | 'subject'
            type="possessive___"
            gender={person.getPronounGender()}
            human={true}
        />
    </fbt>
);
const invalidPronounGenderAttr = (
    <fbt desc="pronoun example">
        <fbt:pronoun
            type="object"
            // @ts-expect-error 'gender' have to be enum value
            gender={"not enum value"}
            human={true}
        />
    </fbt>
);
// @ts-expect-error no child expected
const invalidJSXSameParamExample = <fbt:same-param name="name">test</fbt:same-param>;
/** END: <fbt> */

/** BEGIN: <fbs> */
const JSXSimpleExampleFbs = <fbs desc="JSXSimpleExample">Hello</fbs>;
const JSXSimpleExampleWithParamsFbs = (
    <fbs
        author="retyui"
        project="fbt types"
        doNotExtract={false}
        subject={IntlVariations.GENDER_MALE}
        preserveWhitespace={false}
        desc="Welcome message"
    >
        Hello
    </fbs>
);
const JSXParamExampleFbs = (
    <fbs desc="JSX Param example">
        Hello, <fbs:param name="name">{person.getName()}, welcome!</fbs:param>
    </fbs>
);
const JSXParamWithHtmlExampleFbs = (
    <fbs desc="JSX Param example">
        {/* @ts-expect-error only strings accepted within `fbs:param` */}
        Hello, <fbs:param name="name">{<span>world!</span>}</fbs:param>
    </fbs>
);
const JSXSameParamAndFbtNameExampleFbs = (
    <fbs desc="JSXSameParamAndFbtNameExample">
        <fbs:name name="name" gender={IntlVariations.GENDER_MALE}>
            {/* @ts-expect-error only strings accepted within `fbs:param` */}
            {<a href="#">{"retyui"}</a>}
        </fbs:name>
        shared a link. Tell
        <fbs:same-param name="name" />
        you liked it.
    </fbs>
);
const JSXPluralExampleFbs = (
    <fbs desc="JSXPluralExample">
        You have
        <fbs:plural count={person.getLikeCount()} name="number of likes" showCount="ifMany" many="likes">
            a like
        </fbs:plural>
        on your
        <fbs:plural count={person.getPhotoCount()} showCount="no">
            photo
        </fbs:plural>.
    </fbs>
);
const JSXEnumMapExampleFbs = (
    <fbs desc="JSXEnumMapExample">
        Buy a new
        <fbs:enum
            enum-range={{
                CAR: "car",
                HOUSE: "house",
                BOAT: "boat",
                HOUSEBOAT: "houseboat",
            }}
            value={enumVal}
        />
    </fbs>
);
const JSXEnumArrayExampleFbs = (
    <fbs desc="JSXEnumArrayExample">
        Buy a new
        <fbs:enum enum-range={["car", "house", "boat", "houseboat"]} value="car" />
    </fbs>
);
const JSXPronounExampleFbs = (
    <fbs desc="JSXPronounExample">
        <fbs:param name="name">{person.getName()}</fbs:param>
        shared
        <fbs:pronoun type="possessive" gender={person.getPronounGender()} human={true} />
        photo with you.
    </fbs>
);

// @ts-expect-error 'desc' is required
const invalidDescAttrFbs = <fbs>children</fbs>;
const invalidDescAttrTypeFbs = (
    <fbs
        // @ts-expect-error 'desc' is string
        desc={false}
    >
        children
    </fbs>
);
const invalidNameAttrTypeFbs = (
    <fbs desc="Param example">
        <fbs:param
            // @ts-expect-error 'name' is string
            name={1}
        >
            Name
        </fbs:param>
    </fbs>
);
const invalidPronounTypeAttrFbs = (
    <fbs desc="pronoun example">
        <fbs:pronoun
            // @ts-expect-error 'pronounType' have to be one of 'object' | 'possessive' | 'reflexive' | 'subject'
            type="possessive___"
            gender={person.getPronounGender()}
            human={true}
        />
    </fbs>
);
const invalidPronounGenderAttrFbs = (
    <fbs desc="pronoun example">
        <fbs:pronoun
            type="object"
            // @ts-expect-error 'gender' have to be enum value
            gender={"not enum value"}
            human={true}
        />
    </fbs>
);
// @ts-expect-error no child expected
const invalidJSXSameParamExampleFbs = <fbt:same-param name="name">test</fbt:same-param>;
/** END: <fbs> */

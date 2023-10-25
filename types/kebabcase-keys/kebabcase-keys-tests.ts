import kebabcaseKeys = require("kebabcase-keys");

class Point {
    x: number;

    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Person {
    name: string;
    age: number;
}

const point = new Point(0, 10);
const person: Person = {
    name: "John",
    age: 30,
};
const symbol = Symbol("foo");

kebabcaseKeys({}); // $ExpectType {}
kebabcaseKeys({ foo_bar: true }); // $ExpectType { "foo-bar": boolean; }
kebabcaseKeys({ foo_bar: true, nested: { unicorn_rainbow: true } }); // $ExpectType { "foo-bar": boolean; nested: { unicorn_rainbow: boolean; }; }
kebabcaseKeys({ foo_bar: true, nested: { unicorn_rainbow: true } }, { deep: true }); // $ExpectType { "foo-bar": boolean; nested: { "unicorn-rainbow": boolean; }; }
// $ExpectType { "foo-bar": boolean; nested: { unicorn_rainbow: boolean; }; }
kebabcaseKeys(
    { foo_bar: true, nested: { unicorn_rainbow: true } },
    { deep: true, exclude: ["unicorn_rainbow"] as const },
);

kebabcaseKeys([]); // $ExpectType never[]
kebabcaseKeys([{}]); // $ExpectType {}[]
kebabcaseKeys([{ foo_bar: true }]); // $ExpectType { "foo-bar": boolean; }[]
kebabcaseKeys([{ foo_bar: true, nested: { unicorn_rainbow: true } }]); // $ExpectType { "foo-bar": boolean; nested: { unicorn_rainbow: boolean; }; }[]
kebabcaseKeys([{ foo_bar: true, nested: { unicorn_rainbow: true } }], { deep: true }); // $ExpectType { "foo-bar": boolean; nested: { "unicorn-rainbow": boolean; }; }[]
// $ExpectType { "foo-bar": boolean; nested: { unicorn_rainbow: boolean; }; }[]
kebabcaseKeys([{ foo_bar: true, nested: { unicorn_rainbow: true } }], {
    deep: true,
    exclude: ["unicorn_rainbow"] as const,
});

kebabcaseKeys({ 123: 123 }); // $ExpectType { 123: number; }
kebabcaseKeys({ [symbol]: "symbol" }); // $ExpectType {}

kebabcaseKeys({ camelCase: "camelCase" }); // $ExpectType { "camel-case": string; }
kebabcaseKeys({ PascalCase: "PascalCase" }); // $ExpectType { "pascal-case": string; }
kebabcaseKeys({ snake_case: "snake_case" }); // $ExpectType { "snake-case": string; }
kebabcaseKeys({ "kebabu-case": "kebabu-case" }); // $ExpectType { "kebabu-case": string; }
kebabcaseKeys({ Hogehoge: new Date() }); // $ExpectType { hogehoge: Date; }
kebabcaseKeys({ UPPERCASE: "UPPERCASE" }); // $ExpectType { uppercase: string; }
kebabcaseKeys({ lowercase: "lowercase" }); // $ExpectType { lowercase: string; }

kebabcaseKeys({ point_class: point }); // $ExpectType { "point-class": Point; }
kebabcaseKeys({ person_interface: person }); // $ExpectType { "person-interface": Person; }

// @ts-expect-error
kebabcaseKeys([""]);

// Test for union type
const objectCamelcased: kebabcaseKeys.KebabCasedProperties<{ fooBar: { fooProp: string } | null }, true> =
    kebabcaseKeys({ fooBar: { fooProp: "fooProps" } }, { deep: true });
objectCamelcased; // $ExpectType { "foo-bar": { "foo-prop": string; } | null; }

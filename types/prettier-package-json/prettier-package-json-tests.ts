import { format, check } from "prettier-package-json";

const json = {
    name: "some-package",
    version: "0.0.0"
};

// $ExpectType string
format(json);

// $ExpectType string
format(json, {});

// $ExpectType string
format(json, {
    tabWidth: 2,
    useTabs: false,
    expandUsers: false,
    keyOrder: ["name", "version"]
});

// $ExpectType string
format(json, {
    tabWidth: 4,
    useTabs: true,
    expandUsers: true,
    keyOrder: (a, b) => {
        // $ExpectType string
        a;

        // ExpectType string
        b;

        return b < a ? -1 : b > a ? 1 : 0;
    }
});

// $ExpectType boolean
check("");

// $ExpectType boolean
check(json);

// $ExpectType boolean
check("", {});

// $ExpectType boolean
check(json, {});

// $ExpectType boolean
check("", {
    tabWidth: 8,
    useTabs: true,
    expandUsers: false,
    keyOrder: ["private", "version"]
});

// $ExpectType boolean
check(json, {
    keyOrder: (a, b) => {
        // $ExpectType string
        a;

        // $ExpectType string
        b;

        return b < a ? -1 : b > a ? 1 : 0;
    }
});

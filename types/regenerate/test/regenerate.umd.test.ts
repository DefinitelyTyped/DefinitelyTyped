/// <reference types="regenerate"/>

regenerate.version; // $ExpectType string
regenerate.version = "1.69420"; // $ExpectError

// $ExpectType regenerate
const r = regenerate("1", "2", "3")
    .add("4", "5", "6")
    .remove("3") //
    .intersection(
        regenerate().addRange("2", "7"), //
    );

// $ExpectType RegExp
r.toRegExp("u");

// $ExpectType string
r.toString({
    bmpOnly: false,
    hasUnicodeFlag: true,
});

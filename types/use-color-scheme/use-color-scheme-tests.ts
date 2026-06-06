import _useColorScheme = require("use-color-scheme");

_useColorScheme.attachListener("dark", () => {});
_useColorScheme.getPreference(["dark", "light"]);
_useColorScheme.makeQuery("light");
_useColorScheme.matchPreference("no-preference");
_useColorScheme.useColorScheme();
_useColorScheme.values[0]; // $ExpectType "dark" | "light" | "no-preference" || "no-preference" | "dark" | "light"

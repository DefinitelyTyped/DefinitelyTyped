import { routeMatcher } from "route-matcher";

// $ExpectType StringRoute
const search = routeMatcher("search/:query/p:page");

// $ExpectType Record<string, string> | null
search.parse("search/cowboy/p5");

// $ExpectType StringRoute
const user = routeMatcher("user/:id/:other", {
    id: /^\d+$/,
    other: function(value) {
        return value === "" || value === "foo";
    },
});

// $ExpectType string
user.stringify({ id: "abc", other: "xyz" });

// $ExpectType RegExpRoute
const users = routeMatcher(/^(users?)(?:\/(\d+)(?:\.\.(\d+))?)?/);

// $ExpectType { captures: (string | undefined)[]; } | null
users.parse("user/123");

// @ts-expect-error - stringification isn't supported for RegExp routes
users.stringify({ id: "abc", other: "xyz" });

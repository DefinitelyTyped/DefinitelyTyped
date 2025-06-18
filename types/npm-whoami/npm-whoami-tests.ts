import npmWhoami = require("npm-whoami");

npmWhoami(
    (err, username) => {
        // $ExpectType Error | null
        err;

        // $ExpectType string | undefined
        username;
    },
    {},
);

npmWhoami(() => {}, 10_000);
npmWhoami(() => {}, "registry");
npmWhoami(() => {}, { timeout: 10_000, registry: "registry" });

npmWhoami.sync(10_000);
npmWhoami.sync("registry");
npmWhoami.sync({ timeout: 10_000, registry: "registry" });

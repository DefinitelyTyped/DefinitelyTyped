import { colorize, colorizeToCallback, diff, DiffOptions, diffString } from "json-diff";

const options: DiffOptions = {
    verbose: true,
    raw: true,
    keysOnly: true,
    full: true,
    sort: true,
    outputKeys: ["Hello"],
    excludeKeys: [],
    keepUnchangedValues: true,
    outputNewOnly: true,
    maxElisions: 1,
    precision: 1,
};

diff({}, { Hello: "World" });
diff({}, { Hello: "World" }, {});
diff({}, { Hello: "World" }, options);

diffString({}, { Hello: "World" });
diffString({}, { Hello: "World" }, {});
diffString({}, { Hello: "World" }, {
    ...options,
    color: true,
});

colorize(diff({}, { Hello: "World" }));

colorizeToCallback(diff({}, { Hello: "World" }), {}, (color, line) => {
    switch (color) {
        case " ":
            // do something

            break;
        case "-":
            // do something

            break;
        case "+":
            // do something

            break;

        default:
            break;
    }
});

import markup = require("markup-js");

markup.compact = false;
markup.delimiter = "-";
markup.globals = {
    emoji: ":apple:",
};
markup.includes = {
    flavor: "green",
    missing: () => "314",
};

const options: markup.Options = {
    globals: {
        taste: "exquisite",
    },
};

const template = `
Apples: {{emoji}}
Count: {{count}}
Flavor: {{flavor}}
Missing: {{missing}}
Taste: {{taste}}
`;

const context = {
    count: 12,
};

markup.up(template, context, options); // $ExpectType string

markup.pipes.empty({}); // $ExpectType false | {}

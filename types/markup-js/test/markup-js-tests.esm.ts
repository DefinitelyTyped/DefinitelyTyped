import * as markup from "markup-js";

const options: markup.Options = {
    pipes: {
        score: (n: number, count: string) => {
            if (n < 0) {
                return false;
            }
            return n + parseInt(count);
        },
    },
    compact: true,
    delimiter: "_",
    includes: {
        cost: () => "1.00",
        nutrients: "sodium",
    },
};

const template = `
Bananas: {{delicious}}
Cost: {{cost}}
Nutrients: {{nutrients}}
Ripe: {{harvested}} + 2
`;

const context = {
    delicious: true,
    harvested: "now",
};

markup.up(template, context, options); // $ExpectType string

markup.pipes.empty(""); // $ExpectType false | ""

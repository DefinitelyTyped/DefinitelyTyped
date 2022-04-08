import buildOptions = require("minimist-options");
import minimist = require("minimist");

const options = buildOptions({
    name: {
        type: "string",
        alias: "n",
        default: "john"
    },

    force: {
        type: "boolean",
        alias: ["f", "o"],
        default: false
    },

    published: "boolean",

    arguments: "string"
});

const args = minimist(['--option', 'value', 'input'], options);

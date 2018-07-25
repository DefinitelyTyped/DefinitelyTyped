import autoBind = require("auto-bind");

const emptyConfig: autoBind.AutoBindOptions = {};
const onlyIncludeInConfig: autoBind.AutoBindOptions = {
    include: []
};
const onlyExcludeInConfig: autoBind.AutoBindOptions = {
    exclude: []
};
const emptyArraysInConfig: autoBind.AutoBindOptions = {
    include: [],
    exclude: []
};
const regexConfig: autoBind.AutoBindOptions = {
    include: [/test[123]/],
    exclude: [/test[123]/, /^regex[123]$/]
};
const stringConfig: autoBind.AutoBindOptions = {
    include: ["test"],
    exclude: ["123", "abc"]
};
const mixConfig: autoBind.AutoBindOptions = {
    include: ["test", /test[123]/],
    exclude: ["123", /test[123]/]
};

class TestConfigs {
    constructor() {
        // no config
        autoBind(this);
        autoBind.react(this);

        // empty configs
        autoBind(this, emptyConfig);
        autoBind.react(this, emptyConfig);

        // include only configs
        autoBind(this, onlyIncludeInConfig);
        autoBind.react(this, onlyIncludeInConfig);

        // exclude only configs
        autoBind(this, onlyExcludeInConfig);
        autoBind.react(this, onlyExcludeInConfig);

        // empty array configs
        autoBind(this, emptyArraysInConfig);
        autoBind.react(this, emptyArraysInConfig);

        // regex configs
        autoBind(this, regexConfig);
        autoBind.react(this, regexConfig);

        // string configs
        autoBind(this, stringConfig);
        autoBind.react(this, stringConfig);

        // mix configs
        autoBind(this, mixConfig);
        autoBind.react(this, mixConfig);
    }

    shutUpNoUnnecessaryClass() {
        // noop
    }
}

const jsdocOptions = require("@definitelytyped/eslint-plugin").configs.all.rules["jsdoc/check-tag-names"][1];

module.exports = {
    root: true,
    extends: ["plugin:@definitelytyped/all"],
    settings: {
        jsdoc: {
            tagNamePreference: {
                typeParam: "typeParam",
            },
        },
    },
    rules: {
        "jsdoc/check-tag-names": [
            "error",
            {
                ...jsdocOptions,
                inlineTags: [
                    "link",
                    "linkcode",
                    "linkplain",
                    "tutorial",
                    "inheritDoc",
                    "label",
                    "include",
                    "includeCode",
                    "code",
                    "see",
                    "type",
                ],
            },
        ],
    },
};

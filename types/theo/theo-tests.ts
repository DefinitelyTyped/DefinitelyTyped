import theo = require("theo");

theo.convert({
    transform: {
        type: "raw",
        file: "file",
        data: "data"
    },
    format: {
        type: "custom-properties.css"
    }
});

theo.registerTransform("web", ["relative/pixelValue"]);

theo.registerFormat(
    "cssmodules.css",
    `{{#each props as |prop|}}
        @value {{camelcase prop.category}}{{pascalcase prop.name}}: {{prop.value}};
    {{/each}}`
);

theo.registerValueTransform(
    "relative/pixelValue",
    prop => prop.get("category") === "sizing",
    prop => {
        const value = prop.get("value").toString();
        return parseFloat(value.replace(/rem/g, "")) * 16;
    }
);

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

theo.convertSync({
    transform: {
        type: "raw",
        file: "file",
        data: "data"
    },
    format: {
        type: "custom-properties.css"
    }
});

// Register a provided transform with a provided value transform
theo.registerTransform("web", ["color/hex"]);

// Register a provided transform with custom value transform
theo.registerTransform("web", ["relative/pixelValue"]);

// Register a custom transform with custom value transform
theo.registerTransform("custom", ["relative/pixelValue"]);

// Register a custom transform with provided value transform
theo.registerTransform("custom", ["color/rgb"]);

// Register custom formatting function for a provided format
theo.registerFormat(
    "cssmodules.css",
    `{{#each props as |prop|}}
        @value {{camelcase prop.category}}{{pascalcase prop.name}}: {{prop.value}};
    {{/each}}`
);

// Register a custom value transform
theo.registerValueTransform(
    "relative/pixelValue",
    prop => prop.get("category") === "sizing",
    prop => {
        const value = prop.get("value").toString();
        return parseFloat(value.replace(/rem/g, "")) * 16;
    }
);

// Override a custom value transform
theo.registerValueTransform(
    "relative/pixel",
    prop => prop.get("category") === "sizing",
    prop => {
        const value = prop.get("value").toString();
        return `${parseFloat(value.replace(/rem/g, "")) * 16}px`;
    }
);

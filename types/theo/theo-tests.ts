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
    "easing/web",
    prop => prop.get("category") === "easing",
    prop => {
        const [x1, y1, x2, y2] = prop.get("value").toArray();
        return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
    }
);

theo.registerTransform("web", ["color/rgb", "easing/web"]);

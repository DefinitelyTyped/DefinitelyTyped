import { Theo } from "theo";

const configureTheo = ({
    convert,
    convertSync,
    registerValueTransform,
    registerTransform,
    registerFormat
}: Theo) => {
    convert({
        transform: {
            type: "transformType",
            file: "file",
            data: "data"
        },
        format: {
            type: "formatType"
        }
    });
    registerTransform("web", ["customTransform"]);

    // CSS Modules
    registerFormat(
        "cssmodules.css",
        `{{#each props as |prop|}}
        @value {{camelcase prop.category}}{{pascalcase prop.name}}: {{prop.value}};
        {{/each}}`
    );

    // '16px' -> 16
    registerValueTransform(
        "relative/unitlessPixelValue",
        prop => prop.get("category") === "color",
        prop => {
            const value = prop.get("value").toString();
            return parseFloat(value.replace(/rem/g, "")) * 16;
        }
    );
};

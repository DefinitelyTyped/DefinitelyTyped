import * as levn from "levn";
import { parseType } from "type-check";

levn.VERSION;

levn.parse("Number", "2");

levn.parse("RegExp", "re");

levn.parse("RegExp", "re", {});
levn.parse("RegExp", "re", { customTypes: {} });
levn.parse("RegExp", "re", {
    customTypes: {
        Even: {
            cast: input => ({
                type: "Just",
                value: input,
            }),
            typeOf: "Boolean",
            validate: input => !!input,
        },
    },
});
levn.parse("RegExp", "re", { explicit: true });
levn.parse("RegExp", "re", {
    customTypes: {
        Even: {
            cast: input => ({
                type: "Just",
                value: input,
            }),
            typeOf: "Boolean",
            validate: input => !!input,
        },
    },
    explicit: true,
});
levn.parse("RegExp", "re", { explicit: true });

const parsedType = parseType("[Number]");

levn.parsedTypeParse(parsedType, "1,2,3");

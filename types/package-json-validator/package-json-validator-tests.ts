import { PJV } from "package-json-validator";

// $ExpectType RegExp
PJV.emailFormat;
// $ExpectType RegExp
PJV.packageFormat;
// $ExpectType RegExp
PJV.urlFormat;
// $ExpectType RegExp
PJV.versionFormat;

// $ExpectType false | FieldSpecs
PJV.getSpecMap();

// $ExpectType boolean
PJV.isValidVersionRange("");

// $ExpectType string | object
PJV.parse("");

PJV.validate("");
PJV.validate("", "npm");
PJV.validate("", "commonjs_1.0");
PJV.validate("", "commonjs_1.1");
PJV.validate("", "npm", {});
PJV.validate("", "npm", {
    errors: true,
    recommendations: true,
    warnings: true,
});

// $ExpectType ValidationResult
const validated = PJV.validate("");

if ("out" in validated) {
    // $ExpectType ValidationFailureResult
    validated;

    // $ExpectType string
    validated.out;

    // $ExpectType false
    validated.valid;
} else {
    // $ExpectType ValidationSuccessResult
    validated;

    // $ExpectType boolean
    validated.valid;

    // $ExpectType string[] | undefined
    validated.errors;

    // $ExpectType string[] | undefined
    validated.recommendations;

    // $ExpectType string[] | undefined
    validated.warnings;
}

// $ExpectType string[]
PJV.validateType("", { type: "array" }, 0);
PJV.validateType("", { type: "boolean" }, 0);
PJV.validateType("", { type: "string" }, 0);
PJV.validateType("", { types: ["boolean", "string"] }, 0);

// $ExpectType string[]
PJV.validateDependencies("", {});
PJV.validateDependencies("", { abc: "1.2.3" });

// $ExpectType string[]
PJV.validateUrlOrMailto("", "");
PJV.validateUrlOrMailto("", { email: "", url: "" });
PJV.validateUrlOrMailto("", { mail: "", web: "" });

// $ExpectType string[]
PJV.validatePeople("", "");
PJV.validatePeople("", { email: "", name: "", url: "" });

import { formatValidationError, registerDependencies, registerRule } from "mjml-validator";

registerRule((element) => {
    return formatValidationError("Custom error!", element);
}, "customError");

registerDependencies({
    "custom-component": ["mj-text"],
});

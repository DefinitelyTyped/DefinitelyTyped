import { Linter } from "eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

const flatConfigs: Linter.FlatConfig[] = [
    jsxA11y.flatConfigs.recommended,
    jsxA11y.flatConfigs.strict,
];

const ownFlatConfig: Linter.FlatConfig = {
    plugins: { jsxA11y },
    rules: {
        "jsx-a11y/anchor-has-content": "error",
        "jsx-a11y/label-has-for": "error",
    },
};

const legacyConfigs: Linter.LegacyConfig[] = [
    jsxA11y.configs.recommended,
    jsxA11y.configs.strict,
];

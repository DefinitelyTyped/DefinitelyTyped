import { Linter } from "eslint";
import tailwind from "eslint-plugin-tailwindcss";

const flatConfig: Linter.FlatConfig[] = [
    ...tailwind.configs["flat/recommended"],
];

const ownFlatConfig: Linter.FlatConfig = {
    plugins: { tailwind },
    rules: {
        "tailwind/classnames-order": "error",
        "tailwind/enforces-shorthand": "error",
    },
};

const LegacyConfig: Linter.LegacyConfig[] = [
    tailwind.configs.recommended,
];

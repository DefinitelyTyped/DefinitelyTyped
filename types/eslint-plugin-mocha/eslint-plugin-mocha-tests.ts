import { Linter } from "eslint";
import mocha from "eslint-plugin-mocha";

const flatConfigs: Linter.FlatConfig[] = [
    mocha.configs.flat.recommended,
    mocha.configs.flat.all,
];

const ownFlatConfig: Linter.FlatConfig = {
    plugins: { mocha },
    rules: {
        "mocha/no-skipped-tests": "error",
        "mocha/no-exclusive-tests": "error",
    },
};

const legacyCOnfigs: Linter.Config[] = [
    mocha.configs.recommended,
    mocha.configs.all,
];

import InquirerFuzzyPath = require("inquirer-fuzzy-path");
import inquirer = require("inquirer");

inquirer.registerPrompt("fuzzypath", InquirerFuzzyPath);

declare module "inquirer" {
    interface QuestionMap<T> {
        fuzzypath: InquirerFuzzyPath.FuzzyPathQuestionOptions;
    }
}

inquirer.prompt([
    {
        type: "fuzzypath",
        name: "test fuzzypath",
        message: "Test question",
        excludePath: (nodePath: string) => nodePath.startsWith("node_modules"),
        excludeFilter: (nodePath: string) => nodePath === ".",
        itemType: "any",
        rootPath: "types",
        default: "inquirer-fuzzy-path/",
        suggestOnly: false,
        depthLimit: 5,
    }
]);

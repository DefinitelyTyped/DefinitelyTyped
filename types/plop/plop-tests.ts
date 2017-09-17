import { Plop } from "plop";

const test = (plop: Plop) => {
    plop.addPartial("name", "template");
    plop.addPrompt("name", plop.inquirer.createPromptModule());

    const generator = plop.getGenerator("name");
    const { actions, prompts, description } = generator;
    const [action] = actions;
    const [prompt] = prompts;

    const { type, path, templateFile } = action;

    const [generatorListItem] = plop.getGeneratorList();

    const { name, description: desc } = generatorListItem;

    const path1 = plop.getPlopfilePath();

    const hbs = plop.handlebars;

    const inq = plop.inquirer;

    plop.load("name");
    plop.load("name", {});
    plop.load("name", {}, {});

    plop.load(["name1", "name2"]);

    plop.registerHelper("name", () => {});

    const output = plop.renderString("name", {});

    plop.setGenerator("name", {
        description: "Test",
        prompts: [
            {
                name: "prompt"
            }
        ],
        actions: [
            {
                type: "type",
                path: "path",
                templateFile: "templateFile"
            }
        ]
    });
};

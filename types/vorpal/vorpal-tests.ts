import Vorpal = require("vorpal");

// example from README

const vorpal = new Vorpal();

vorpal.command("foo", "Outputs \"bar\".").action(action => {
    vorpal.log("bar");
    return Promise.resolve();
});
vorpal.command("input", "Test Prompt Function").action(async action => {
    const promptInput = await vorpal.activeCommand.prompt([
        {
            type: "input",
            name: "exampleInput",
            message: "Please Input Something",
        },
    ]);
    vorpal.log(promptInput.exampleInput);
});
vorpal.parse(["--file testing.txt -baz"], {
    use: "minimist",
});

vorpal.delimiter("myapp$").show();

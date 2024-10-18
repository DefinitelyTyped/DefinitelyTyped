import Vorpal = require("vorpal");

// example from README

let vorpal = new Vorpal();

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

vorpal.hide();

vorpal = new Vorpal();

vorpal
    .mode("repl")
    .description("Enters the user into a REPL session.")
    .delimiter("repl:")
    .action((command, callback?: (data?: any) => any) => {
        vorpal.activeCommand.log(eval(command as string));
        if (callback) {
            callback();
        }
        return Promise.resolve();
    });

vorpal.show();

vorpal.hide();

vorpal = new Vorpal();

vorpal
    .command(
        "helpTest",
        "Test help override.  Use `help helpTest`, `helpTest --help`, or `helpTest /?` to see override.",
    )
    .help((args: Vorpal.Args, callback?: (helpText: string) => void) => {
        callback && callback("This is a custom help override.");
    });

vorpal.show();

vorpal.log(vorpal.execSync("help helpTest"));

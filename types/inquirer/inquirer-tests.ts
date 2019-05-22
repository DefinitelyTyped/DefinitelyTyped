import chalkPipe = require("chalk-pipe");
import * as inquirer from "inquirer";
import { from as rxjsFrom, Observable, Observer } from "rxjs";

/**
 * Bottom Bar example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/bottom-bar.js
 */
{
    var cmdify = require("cmdify");

    var loader = [
        "/ Installing",
        "| Installing",
        "\\ Installing",
        "- Installing"
    ];
    var i = 4;
    var ui = new inquirer.ui.BottomBar({ bottomBar: loader[i % 4] });

    setInterval(() => {
        ui.updateBottomBar(loader[i++ % 4]);
    }, 300);

    var spawn = require("child_process").spawn;

    var cmd = spawn(cmdify("npm"), ["-g", "install", "inquirer"], {
        stdio: "pipe"
    });
    cmd.stdout.pipe(ui.log);
    cmd.on("close", () => {
        ui.updateBottomBar("Installation done!\n");
        process.exit();
    });
}

/**
 * Checkbox example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/checkbox.js
 */
{
    inquirer
        .prompt([
            {
                type: "checkbox",
                message: "Select toppings",
                name: "toppings",
                choices: [
                    new inquirer.Separator(" = The Meats = "),
                    {
                        name: "Pepperoni"
                    },
                    {
                        name: "Ham"
                    },
                    {
                        name: "Ground Meat"
                    },
                    {
                        name: "Bacon"
                    },
                    new inquirer.Separator(" = The Cheeses = "),
                    {
                        name: "Mozzarella",
                        checked: true
                    },
                    {
                        name: "Cheddar"
                    },
                    {
                        name: "Parmesan"
                    },
                    new inquirer.Separator(" = The usual ="),
                    {
                        name: "Mushroom"
                    },
                    {
                        name: "Tomato"
                    },
                    new inquirer.Separator(" = The extras = "),
                    {
                        name: "Pineapple"
                    },
                    {
                        name: "Olives",
                        disabled: "out of stock"
                    },
                    {
                        name: "Extra cheese"
                    }
                ],
                validate: function(answer) {
                    if (answer.length < 1) {
                        return "You must choose at least one topping.";
                    }

                    return true;
                }
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Editor
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/editor.js
 */
{
    inquirer
        .prompt([
            {
                type: "editor",
                name: "bio",
                message: "Please write a short bio of at least 3 lines.",
                validate: function(text) {
                    if (text.split("\n").length < 3) {
                        return "Must be at least 3 lines.";
                    }

                    return true;
                }
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Expand
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/expand.js
 */
{
    inquirer
        .prompt([
            {
                type: "expand",
                message: "Conflict on `file.js`: ",
                name: "overwrite",
                choices: [
                    {
                        key: "y",
                        name: "Overwrite",
                        value: "overwrite"
                    },
                    {
                        key: "a",
                        name: "Overwrite this one and all next",
                        value: "overwrite_all"
                    },
                    {
                        key: "d",
                        name: "Show diff",
                        value: "diff"
                    },
                    new inquirer.Separator(),
                    {
                        key: "x",
                        name: "Abort",
                        value: "abort"
                    }
                ]
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Hierarchical conversation example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/hierarchical.js
 */
var directionsPrompt: inquirer.Question<{
    direction: string;
}> = {
    type: "list",
    name: "direction",
    message: "Which direction would you like to go?",
    choices: ["Forward", "Right", "Left", "Back"]
};

function main() {
    console.log(
        "You find youself in a small room, there is a door in front of you."
    );
    exitHouse();
}

function exitHouse() {
    inquirer.prompt(directionsPrompt).then(answers => {
        if (answers.direction === "Forward") {
            console.log("You find yourself in a forest");
            console.log(
                "There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left."
            );
            encounter1();
        } else {
            console.log("You cannot go that way. Try again");
            exitHouse();
        }
    });
}

function encounter1() {
    inquirer.prompt(directionsPrompt).then(answers => {
        var direction = answers.direction;
        if (direction === "Forward") {
            console.log("You attempt to fight the wolf");
            console.log(
                "Theres a stick and some stones lying around you could use as a weapon"
            );
            encounter2b();
        } else if (direction === "Right") {
            console.log("You befriend the dwarf");
            console.log("He helps you kill the wolf. You can now move forward");
            encounter2a();
        } else {
            console.log("You cannot go that way");
            encounter1();
        }
    });
}

function encounter2a() {
    inquirer.prompt(directionsPrompt).then(answers => {
        var direction = answers.direction;
        if (direction === "Forward") {
            var output = "You find a painted wooden sign that says:";
            output += " \n";
            output += " ____  _____  ____  _____ \n";
            output += "(_  _)(  _  )(  _ \\(  _  ) \n";
            output += "  )(   )(_)(  )(_) ))(_)(  \n";
            output += " (__) (_____)(____/(_____) \n";
            console.log(output);
        } else {
            console.log("You cannot go that way");
            encounter2a();
        }
    });
}

function encounter2b() {
    inquirer
        .prompt({
            type: "list",
            name: "weapon",
            message: "Pick one",
            choices: [
                "Use the stick",
                "Grab a large rock",
                "Try and make a run for it",
                "Attack the wolf unarmed"
            ]
        })
        .then(() => {
            console.log("The wolf mauls you. You die. The end.");
        });
}

main();

/**
 * Input prompt example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/input.js
 */
{
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What's your first name"
            },
            {
                type: "input",
                name: "last_name",
                message: "What's your last name",
                default: function() {
                    return "Doe";
                }
            },
            {
                type: "input",
                name: "fav_color",
                message: "What's your favorite color",
                transformer: function(color, _answers, flags) {
                    const text = chalkPipe(color)(color);
                    if (flags.isFinal) {
                        return text + "!";
                    }

                    return text;
                }
            },
            {
                type: "input",
                name: "phone",
                message: "What's your phone number",
                validate: function(value) {
                    var pass = value.match(
                        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                    );
                    if (pass) {
                        return true;
                    }

                    return "Please enter a valid phone number";
                }
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * List prompt example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/list.js
 */
{
    inquirer
        .prompt([
            {
                type: "list",
                name: "theme",
                message: "What do you want to do?",
                choices: [
                    "Order a pizza",
                    "Make a reservation",
                    new inquirer.Separator(),
                    "Ask for opening hours",
                    {
                        name: "Contact support",
                        disabled: "Unavailable at this time"
                    },
                    "Talk to the receptionist"
                ]
            },
            {
                type: "list",
                name: "size",
                message: "What size do you need?",
                choices: [
                    "Jumbo",
                    "Large",
                    "Standard",
                    "Medium",
                    "Small",
                    "Micro"
                ],
                filter: function(val) {
                    return val.toLowerCase();
                }
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Paginated list
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/long-list.js
 */
{
    var choices = Array.apply(0, new Array(26)).map((_x: number, y: number) =>
        String.fromCharCode(y + 65)
    );
    choices.push("Multiline option \n  super cool feature");
    choices.push({
        name:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        value: "foo",
        short: "The long option"
    });

    inquirer
        .prompt([
            {
                type: "list",
                name: "letter",
                message: "What's your favorite letter?",
                choices
            },
            {
                type: "checkbox",
                name: "name",
                message: "Select the letter contained in your name:",
                choices
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Nested Inquirer call
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/nested-call.js
 */
{
    inquirer
        .prompt({
            type: "list",
            name: "chocolate",
            message: "What's your favorite chocolate?",
            choices: ["Mars", "Oh Henry", "Hershey"]
        })
        .then(() => {
            inquirer.prompt({
                type: "list",
                name: "beverage",
                message: "And your favorite beverage?",
                choices: ["Pepsi", "Coke", "7up", "Mountain Dew", "Red Bull"]
            });
        });
}

/**
 * Password prompt example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/password.js
 */
{
    const requireLetterAndNumber = (value: string) => {
        if (/\w/.test(value) && /\d/.test(value)) {
            return true;
        }

        return "Password need to have at least a letter and a number";
    };

    inquirer
        .prompt([
            {
                type: "password",
                message: "Enter a password",
                name: "password1",
                validate: requireLetterAndNumber
            },
            {
                type: "password",
                message: "Enter a masked password",
                name: "password2",
                mask: "*",
                validate: requireLetterAndNumber
            }
        ])
        .then(answers => console.log(JSON.stringify(answers, null, "  ")));
}

/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/pizza.js
 */
{
    console.log("Hi, welcome to Node Pizza");

    inquirer
        .prompt<{
            comments: string;
        }>([
            {
                type: "confirm",
                name: "toBeDelivered",
                message: "Is this for delivery?",
                default: false
            },
            {
                type: "input",
                name: "phone",
                message: "What's your phone number?",
                validate: function(value) {
                    var pass = value.match(
                        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                    );
                    if (pass) {
                        return true;
                    }

                    return "Please enter a valid phone number";
                }
            },
            {
                type: "list",
                name: "size",
                message: "What size do you need?",
                choices: ["Large", "Medium", "Small"],
                filter: function(val) {
                    return val.toLowerCase();
                }
            },
            {
                type: "input",
                name: "quantity",
                message: "How many do you need?",
                validate: function(value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || "Please enter a number";
                },
                filter: Number
            },
            {
                type: "expand",
                name: "toppings",
                message: "What about the toppings?",
                choices: [
                    {
                        key: "p",
                        name: "Pepperoni and cheese",
                        value: "PepperoniCheese"
                    },
                    {
                        key: "a",
                        name: "All dressed",
                        value: "alldressed"
                    },
                    {
                        key: "w",
                        name: "Hawaiian",
                        value: "hawaiian"
                    }
                ]
            },
            {
                type: "rawlist",
                name: "beverage",
                message: "You also get a free 2L beverage",
                choices: ["Pepsi", "7up", "Coke"]
            },
            {
                type: "input",
                name: "comments",
                message: "Any comments on your purchase experience?",
                default: "Nope, all good!"
            },
            {
                type: "list",
                name: "prize",
                message: "For leaving a comment, you get a freebie",
                choices: ["cake", "fries"],
                when: answers => answers.comments !== "Nope, all good!"
            }
        ])
        .then(answers => {
            console.log("\nOrder receipt:");
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Raw List prompt example
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/rawlist.js
 */
{
    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "theme",
                message: "What do you want to do?",
                choices: [
                    "Order a pizza",
                    "Make a reservation",
                    new inquirer.Separator(),
                    "Ask opening hours",
                    "Talk to the receptionist"
                ]
            },
            {
                type: "rawlist",
                name: "size",
                message: "What size do you need",
                choices: [
                    "Jumbo",
                    "Large",
                    "Standard",
                    "Medium",
                    "Small",
                    "Micro"
                ],
                filter: function(val) {
                    return val.toLowerCase();
                }
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/recursive.js
 */
{
    var output: string[] = [];
    inquirer
        .prompt<{
            tvShow: string;
            askAgain: boolean;
        }>([
            {
                type: "input",
                name: "tvShow",
                message: "What's your favorite TV show?"
            },
            {
                type: "confirm",
                name: "askAgain",
                message:
                    "Want to enter another TV show favorite (just hit enter for YES)?",
                default: true
            }
        ])
        .then(answers => {
            output.push(answers.tvShow);
        });
}

/**
 * Rx Observable Array
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/rx-observable-array.js
 */
{
    var observable = rxjsFrom([
        {
            type: "input",
            name: "first_name",
            message: "What's your first name"
        },
        {
            type: "input",
            name: "last_name",
            message: "What's your last name",
            default: function() {
                return "Doe";
            }
        },
        {
            type: "input",
            name: "phone",
            message: "What's your phone number",
            validate: function(value) {
                var pass = value.match(
                    /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                );
                if (pass) {
                    return true;
                }

                return "Please enter a valid phone number";
            }
        } as inquirer.Question
    ]);

    inquirer.prompt(observable as any).ui.process.subscribe(
        function(ans) {
            console.log("Answer is: ", ans);
        },
        function(err) {
            console.log("Error: ", err);
        },
        function() {
            console.log("Completed");
        }
    );
}

/**
 * Rx Observable create
 * https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/rx-observable-create.js
 */
{
    var observe = Observable.create(function(
        obs: Observer<inquirer.Question<{ phone: string }>>
    ) {
        obs.next({
            type: "input",
            name: "first_name",
            message: "What's your first name"
        });

        obs.next({
            type: "input",
            name: "last_name",
            message: "What's your last name",
            default: function() {
                return "Doe";
            }
        });

        obs.next({
            type: "input",
            name: "phone",
            message: "What's your phone number",
            validate: function(value) {
                var pass = value.match(
                    /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                );
                if (pass) {
                    return true;
                }

                return "Please enter a valid phone number";
            }
        });
        obs.complete();
    });

    inquirer.prompt(observe).then(answers => {
        console.log(JSON.stringify(answers, null, "  "));
    });
}

/**
 * When example
 */
{
    interface Answers {
        bacon: boolean;
        pizza: boolean;
    }

    const likesFood = (aFood: keyof Answers) => (answers: Answers) =>
        answers[aFood];

    inquirer
        .prompt<Answers>([
            {
                type: "confirm",
                name: "bacon",
                message: "Do you like bacon?"
            },
            {
                type: "input",
                name: "favorite",
                message: "Bacon lover, what is your favorite type of bacon?",
                when: function(answers) {
                    return answers.bacon;
                }
            },
            {
                type: "confirm",
                name: "pizza",
                message: "Ok... Do you like pizza?",
                when: function(answers) {
                    return !likesFood("bacon")(answers);
                }
            },
            {
                type: "input",
                name: "favorite",
                message: "Whew! What is your favorite type of pizza?",
                when: likesFood("pizza")
            }
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, "  "));
        });
}

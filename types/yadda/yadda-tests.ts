/// <reference types="node" />

import * as assert from "assert";

import * as Yadda from "yadda";

const English = Yadda.localisation.English;

{
    const library = new Yadda.Library()
        .define("A synchronous step", () => {
            // Code goes here
        })
        .define("An asynchronous step", (next: (err?: Error) => void) => {
            // Code goes here
            next();
        });

    Yadda.createInstance(library);
}

{
    const library = new Yadda.Library()
        .define("[Ss]etup a new user", () => {
            // Code goes here
        })
        .define(/[Ss]etup a new user/, () => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const library = Yadda.localisation.English.library()
        .given("a user called (\\w+)", (name: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const library = Yadda.localisation.English.library()
        .given("a user called $name", (name: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const converter = Yadda.converters.pass_through;
    const dictionary = new Yadda.Dictionary()
        .define("csv", /([^\u0000]*)/, converter);

    const library = Yadda.localisation.English.library(dictionary)
        .given("some csv\n$csv", (csv: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const library = Yadda.localisation.English.library()
        .given(["$name has $num book", "$name has $num books"], (name: string, number_of_books: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const library = new Yadda.Library()
        .define("Some step");

    Yadda.createInstance(library);
}

{
    const library = Yadda.localisation.English.library()
        .given("a user called $name", (name: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const library = Yadda.localisation.English.library()
        .given("a user called $name", (name: string, next: (err?: Error) => void) => {
            // Code goes here
            next();
        });

    Yadda.createInstance(library);
}

{
    const library = Yadda.localisation.English.library()
        .given("a user called $name", (name: string) => {
            return new Promise((resolve, reject) => {
                // Code goes here
            });
        });

    Yadda.createInstance(library);
}

{
    const dictionary = new Yadda.Dictionary()
        .define("gender", /(male|female)/);

    const library = Yadda.localisation.English.library(dictionary)
        .given("A $gender user", (gender: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const dictionary = new Yadda.Dictionary()
        .define("address", "$street, $postcode")
        .define("street", /(\d+) (\w+)/)
        .define("postcode", /((GIR &0AA)|((([A-PR-UWYZ][A-HK-Y]?[0-9][0-9]?)|(([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]))) &[0-9][ABD-HJLNP-UW-Z]{2}))/);

    const library = Yadda.localisation.English.library(dictionary)
        .given("An $address", (number: string, street: string, postcode: string) => {
            // Code goes here
        });

    Yadda.createInstance(library);
}

{
    const dictionary = new Yadda.Dictionary()
        .define("num", /(\d+)/, Yadda.converters.integer);

    const library = Yadda.localisation.English.library(dictionary)
        .given("A whole number $num", (number: string) => {
            // Number will be an integer rather than a string
        });

    Yadda.createInstance(library);
}

function quantity_converter(amount: string, units: string, cb: (err: Error | null, quantity: { amount: string, units: string }) => void) {
    cb(null, { amount, units });
}

{
    const dictionary = new Yadda.Dictionary()
        .define("quantity", /(\d+) (\w+)/, quantity_converter);

    const library = Yadda.localisation.English.library(dictionary)
        .given("a delay of $quantity", (quantity: string) => {
            // quantity will be an object with two fields "amount" and "units"
        });

    Yadda.createInstance(library);
}

class Wall {
    constructor(public bottles: number) {}
    fall(n: number): void {
        this.bottles -= n;
    }
    returned(): void {
        this.bottles++;
    }
    printStatus(): void {
        console.log("There are %s bottles on the wall", this.bottles);
    }
}

let wall: Wall;

const bottlesLibrary = English.library()
    .given("$NUM green bottles are standing on the wall", (number_of_bottles: string) => {
        wall = new Wall(Number(number_of_bottles));
        wall.printStatus();
    })
    .when("$NUM green bottle accidentally falls", (number_of_falling_bottles: string) => {
        wall.fall(Number(number_of_falling_bottles));
        console.log("%s bottle falls", number_of_falling_bottles);
    })
    .then("there are $NUM green bottles standing on the wall", (number_of_bottles: string) => {
        assert.strictEqual(Number(number_of_bottles), wall.bottles);
        wall.printStatus();
    });

{
    const library = Yadda.localisation.Pirate.library()
        .giveth("some text 1", () => {})
        .given("some text 2", () => {})

        .whence("some text 3", () => {})
        .when("some text 4", () => {})

        .thence("some text 5", () => {})
        .then("some text 6", () => {});

    Yadda.createInstance(library);
}

{
    Yadda.createInstance(bottlesLibrary).run([
        "Given 100 green bottles are standing on the wall",
        "when 1 green bottle accidentally falls",
        "then there are 99 green bottles standing on the wall"
    ]);
}

{
    Yadda.plugins.mocha.StepLevelPlugin.init();

    new Yadda.FeatureFileSearch("./test/features").each(file => {
        featureFile(file, feature => {
            const yadda = Yadda.createInstance(bottlesLibrary);

            scenarios(feature.scenarios, scenario => {
                steps(scenario.steps, (step, done) => {
                    yadda.run(step, done);
                });
            });
        });
    });
}

function login(user: string) {
    // stub
}

{
    const library = Yadda.localisation.English.library()
        .given("a user called $name", function(name) {
            this.ctx[name] = name;
        })
        .when("$name logs in", function(name) {
            const user = this.ctx[name];
            login(user);
        });

    const scenario_context: Yadda.Context.Properties = {
        ctx: {}
    };

    Yadda.createInstance(library, scenario_context);

    Yadda.createInstance(library, new Yadda.Context(scenario_context));
}

{
    const EventBus = Yadda.EventBus;
    EventBus.instance().on(EventBus.ON_EXECUTE, (event) => {
        console.log(event.name, event.data);
    });
}

{
    Yadda.localisation.default = Yadda.localisation.Pirate;
}

{
    const specification = "@Pending\n@Browsers=chrome,safari\nFeature: Some title\n  ...";

    const feature = new Yadda.parsers.FeatureParser().parse(specification);

    // Annotations are converted to lowercase by the parser
    if (feature.annotations.pending) {
        // Do stuff
    }
}



function CreatingStreams() {
    $("#my-div").asEventStream("click");
    $("#my-div").asEventStream("click", ".more-specific-selector");
    $("#my-div").asEventStream("click", (event, args) => args[0]);
    $("#my-div").asEventStream("click", ".more-specific-selector", (event, args) => args[0]);

    Bacon.fromPromise($.ajax("https://baconjs.github.io/"));
    Bacon.fromPromise(Promise.resolve(1));

    Bacon.fromPromise($.ajax("https://baconjs.github.io/"), true);
    Bacon.fromPromise(Promise.resolve(1), false);

    Bacon.fromPromise($.ajax("https://baconjs.github.io/"), true, (n:string) => {
        return [new Bacon.Next(n), new Bacon.Next(() => n), new Bacon.End()];
    });
    Bacon.fromPromise(Promise.resolve(1), false, n => {
        return [new Bacon.Next(n), new Bacon.Next(() => n), new Bacon.End()];
    });

    Bacon.fromEvent(document.body, "click").onValue(() => {
        alert("Bacon!");
    });
    Bacon.fromEvent(document.body, "click", (event:MouseEvent) => event.clientX).onValue(clientX => {
        alert("Bacon!");
    });
    Bacon.fromEvent(process.stdin, "readable", () => {
        alert("Bacon!");
    });
    Bacon.fromEvent($("body"), "click").onValue(() => {
        alert("Bacon!");
    });

    // This would create a stream that outputs a single value "Bacon!" and ends after that. The use of setTimeout causes the value to be delayed by 1 second.
    Bacon.fromCallback(callback => {
        setTimeout(() => {
            callback("Bacon!");
        }, 1000);
    });

    // You can also give any number of arguments to `fromCallback`, which will be passed to the function. These arguments can be simple variables, Bacon EventStreams or Properties. For example the following will output "Bacon rules":
    Bacon.fromCallback((a, b, callback) => {
        callback(a + " " + b);
    }, Bacon.constant("bacon"), "rules").log();

    {
        var fs = require("fs"),
            read = Bacon.fromNodeCallback(fs.readFile, "input.txt");
        read.onError(error => {
            console.log("Reading failed: " + error);
        });
        read.onValue(value => {
            console.log("Read contents: " + value);
        });
    }

    Bacon.once(new Bacon.Error("fail"));

    // The following would lead to `1,2,3,1,2,3...` to be repeated indefinitely:
    Bacon.fromArray([1, new Bacon.Error("")]);

    Bacon.repeatedly(10, [1, 2, 3]);

    // The following will produce values `0,1,2`.
    Bacon.repeat(i => {
        if (i < 3) {
            return Bacon.once(i);
        } else {
            return false;
        }
    }).log();

    {
        var stream = Bacon.fromBinder(sink => {
            sink("first value");
            sink([new Bacon.Next("2nd"), new Bacon.Next("3rd")]);
            sink(new Bacon.Next((): string => {
                return "This one will be evaluated lazily"
            }));
            sink(new Bacon.Error("oops, an error"));
            sink(new Bacon.End());
            return () => {
                // unsub functionality here, this one's a no-op
            };
        });
        stream.log();
    }

    new Bacon.Next("value");
    new Bacon.Next((): string => "value");
}

function CommonMethodsInEventStreamsAndProperties() {
    // Converting strings to integers, skipping empty values:
    Bacon.once("").flatMap(text => {
        return text != "" ? parseInt(text) : Bacon.never();
    });

    Bacon.sequentially(1, [1, 2, 3]).scan(0, (a, b) => a + b);

    Bacon.sequentially(1, [1, 2, 3]).diff(0, (a, b) => Math.abs(b - a));

    // If you have a EventStream `s` with a value sequence `1,2,3,4,5`, the respective values in `s.slidingWindow(2)` would be `[],[1],[1,2],[2,3],[3,4],[4,5]`:
    Bacon.fromArray([1, 2, 3, 4, 5]).slidingWindow(2);
    // The values of `s.slidingWindow(2,2)`would be `[1,2],[2,3],[3,4],[4,5]`:
    Bacon.fromArray([1, 2, 3, 4, 5]).slidingWindow(2, 2);

    {
        var x = Bacon.fromArray([1, 2]), y = Bacon.fromArray([3, 4]);
        x.zip(y, (x, y) => x + y);
    }

    {
        var stream = Bacon.fromArray([1, 2]);
        stream.log("New event in myStream");
        stream.log();
    }

    Bacon.fromArray([1, 2, 3]).withStateMachine(0, (sum, event) => {
        if (event.hasValue()) {
            // had to cast to `number` because event:Bacon.Next<number>|Bacon.Error<{}>
            return [sum + <number>event.value(), []];
        }
        else if (event.isEnd()) {
            return [undefined, [new Bacon.Next(sum), event]];
        }
        else {
            return [sum, [event]];
        }
    });

    {
        var property = Bacon.fromArray([1, 2, 3]).toProperty(),
            who = Bacon.fromArray(["A", "B", "C"]).toProperty();
        property.decode({1: "mike", 2: who});

        property.decode({1: {type: "mike"}, 2: {type: "other", whoThen: who}});
    }

    {
        // This is handy for keeping track whether we are currently awaiting an AJAX response:
        var ajaxRequest = <Bacon.Observable<Error, JQueryXHR>>{},
            ajaxResponse = <Bacon.Observable<Error, JQueryXHR>>{},
            showAjaxIndicator = ajaxRequest.awaiting(ajaxResponse);
    }

    Bacon.fromArray([1, 2, -3, 3]).withHandler(function (event) {
        if (event.hasValue() && event.value() < 0) {
            this.push(new Bacon.Error("Value below zero"));
            return this.push(new Bacon.End());
        } else {
            return this.push(event);
        }
    });

    {
        var src = Bacon.once(1),
            obs = src.map(x => -x);
        console.log(obs.toString()); // > "Bacon.once(1).map(function)"

        obs.withDescription(src, "times", -1);
        console.log(obs.toString()); // > "Bacon.once(1).times(-1)"
    }

    {
        // Calculator for grouped consecutive values until group is cancelled:
        interface Event {
            id:number;
            type:string;
            val?:number;
        }
        var events: Event[] = [
                {id: 1, type: "add", val: 3},
                {id: 2, type: "add", val: -1},
                {id: 1, type: "add", val: 2},
                {id: 2, type: "cancel"},
                {id: 3, type: "add", val: 2},
                {id: 3, type: "cancel"},
                {id: 1, type: "add", val: 1},
                {id: 1, type: "add", val: 2},
                {id: 1, type: "cancel"}
            ],
            keyF = (event:{id:number}) => event.id,
            limitF = (groupedStream:Bacon.EventStream<string, Event>) => {
                var cancel = groupedStream.filter(x => x.type === "cancel").take(1),
                    adds = groupedStream.filter(x => x.type === "add");
                return adds.takeUntil(cancel).map(x => x.val);
            };

        Bacon.sequentially<string, {id:number; type:string; val?:number}>(2, events)
            .groupBy(keyF, limitF)
            .flatMap(groupedStream => groupedStream.fold(0, (acc, x) => acc + x))
            .onValue((sum: number) => {
                console.log(sum); // returns [-1, 2, 8] in an order
            });
    }

    {
        var src = Bacon.fromArray([1, 2, 3]);
        src.doLog('element value');
    }
}

function EventStream() {
    // This creates the stream which doesn't produce any events and never ends:
    Bacon.interval(1e1, 0).last();

    Bacon.fromArray([1, 2, 2, 1])
        .skipDuplicates().log(); // > returns [1, 2, 1] in an order

    // You might get two events containing [1,2,3,4] and [5,6,7] respectively, given that the flush occurs between numbers 4 and 5:
    Bacon.fromArray([1, 2, 3, 4, 5, 6, 7]).bufferWithTime(0);

    // Here's an equivalent to `stream.bufferWithTime(10)`:
    {
        var stream = Bacon.fromArray([1, 2, 3, 4, 5, 6, 7]);
        stream.bufferWithTime(f => {
            setTimeout(f, 10);
        });
    }

    // You will get output events with values `[1, 2]`, `[3, 4]` and `[5]`.
    Bacon.fromArray([1, 2, 3, 4, 5]).bufferWithCount(2);
}

function Property() {
    // This creates the property which doesn't produce any events and never ends:
    Bacon.interval(1e1, 0).toProperty().last();

    {
        var property = Bacon.fromArray([1, 2, 3, 4, 5]).toProperty();
        // If you want to assign your Property to the "disabled" attribute of a JQuery object, you can do this:
        property.assign($("#my-button"), "attr", "disabled");

        // A simpler example would be to toggle the visibility of an element based on a Property:
        property.assign($("#my-button"), "toggle");
    }

    Bacon.fromArray([1, 2, 2, 1]).toProperty()
        .skipDuplicates().log(); // > returns [1, 2, 1] in an order
}

function CombiningMultipleStreamsAndProperties() {
    {
        var property = Bacon.constant(1),
            stream = Bacon.once(2),
            constant = 3;
        Bacon.combineAsArray(property, stream, constant)
            .log(); // > returns [1, 2, 3]
    }

    {
        // To calculate the current sum of three numeric Properties, you can do:
        var property = Bacon.constant(1),
            stream = Bacon.once(2),
            constant = 3;
        // NOTE: had to explicitly specify the typing for `x:number, y:number, z:number`
        Bacon.combineWith((x:number, y:number, z:number) => x + y + z, property, stream, constant);
    }

    {
        // Assuming you've got streams or properties named `password`, `username`, `firstname` and `lastname`, you can do:
        var password = Bacon.constant("easy"),
            username = Bacon.constant("juha"),
            firstname = Bacon.constant("juha"),
            lastname = Bacon.constant("paananen"),
        // NOTE: you should provide `combineTemplate` typing explicitly!
            loginInfo = Bacon.combineTemplate<string, {
                magicNumber:number; userid:string; passwd:string;
                name:{first:string; last:string}
            }>({
                magicNumber: 3,
                userid: username,
                passwd: password,
                name: {first: firstname, last: lastname}
            }).onValue(loginInfo => {
                // and your new `loginInfo` property will combine values from all these streams using that template, whenever any of the streams/properties get a new value. It would yield a value:
                console.log("`loginInfo` expected", {
                    magicNumber: 3,
                    userid: "juha",
                    passwd: "easy",
                    name: {first: "juha", last: "paananen"}
                });
                console.log("`loginInfo` actual", loginInfo);
            });

        // Note that all Bacon.combine* methods produce a `Property` instead of an `EventStream`. If you need the result as an `EventStream` you might want to use `property.changes()`:
        Bacon.combineWith((firstname, lastname) => `${firstname} ${lastname}`, firstname, lastname).changes();
    }

    {
        var x = Bacon.fromArray([1, 2, 3]),
            y = Bacon.fromArray([10, 20, 30]),
            z = Bacon.fromArray([100, 200, 300]);
        Bacon.zipAsArray(x, y, z)
            .log(); // > returns values `[1, 10, 100]`, `[2, 20, 200]` and `[3, 30, 300]`
    }

    // The following example would log the number 3.
    // NOTE: had to explicitly specify the typing for `a:number, b:number`
    Bacon.onValues(Bacon.constant(1), Bacon.constant(2), (a:number, b:number) => {
        console.log(a + b);
    });
}

function $Event() {
    new Bacon.Next("value");
    new Bacon.Next((): string => "value");
}

function Errors() {
    // In case you want to convert (some) value events into Error events, you may use `flatMap` like this:
    // NOTE: had to explicitly specify the typing for `flatMap`
    Bacon.fromArray([1, 2, 3, 4]).flatMap<number>(x => {
        return x > 2 ? new Bacon.Error("too big") : x;
    });

    // Conversely, if you want to convert some Error events into value events, you may use `flatMapError`:
    Bacon.fromArray<string, number>([1, 2, 3, 4]).flatMapError<number>(error => {
        var isNonCriticalError = (error:string) => Math.random() < .5,
            handleNonCriticalError = (error:string) => 42;
        return isNonCriticalError(error) ? handleNonCriticalError(error) : new Bacon.Error(error);
    });

    // Note also that Bacon.js combinators do not catch errors that are thrown. Especially `map` doesn't do so. If you want to map things and wrap caught errors into Error events, you can do the following:
    Bacon.fromArray([1, 2, 3, 4]).flatMap(x => {
        var dangerousFunction = (x:number) => {
            throw new Error("dangerous function!");
        };
        try {
            return dangerousFunction(x);
        } catch (e) {
            return new Bacon.Error(e);
        }
    });

    Bacon.once("https://baconjs.github.io/").flatMap(url => {
        // `ajaxCall` gives `Error`s on network or server `Error`s.
        var ajaxCall = (url:string) => {
            return Bacon.fromPromise<JQueryXHR, JQueryXHR>($.ajax(url));
        };
        return Bacon.retry({
            source: () => ajaxCall(url),
            retries: 5,
            isRetryable: (error:JQueryXHR) => error.status !== 404,
            delay: context => 100 // Just use the same delay always
        });
    });
}

function JoinPatterns() {
    {
        // Consider implementing a game with discrete time ticks. We want to handle key-events synchronized on tick-events, with at most one key event handled per tick. If there are no key events, we want to just process a tick:
        var tick = Bacon.interval(1e2, 0),
            keyEvent = Bacon.fromEvent(document.body, "click", _ => Date.now()),
            handleTick = (_:number) => `timestamp: NONE`,
            handleKeyEvent = (timestamp:number) => `timestamp: ${timestamp}`;
        Bacon.when(
            [tick, keyEvent], (_:number, timestamp:number) => handleKeyEvent(timestamp),
            [tick], handleTick
        );
        // Order is important here. If the [tick] patterns had been written first, this would have been tried first, and preferred at each tick.
    }

    {
        // Join patterns are indeed a generalization of `zip`, and `zip` is equivalent to a single-rule join pattern. The following `Observable`s have the same output:
        var a = Bacon.once("a"),
            b = Bacon.once("b"),
            c = Bacon.once("c"),
            f = (a:string, b:string, c:string) => `a = ${a}; b = ${b}; c = ${c}.`;
        Bacon.zipWith(f, a, b, c);
        Bacon.when([a, b, c], f);
    }
    {
        // The inputs to `Bacon.update` are defined like this:
        var initial = 0,
            x = Bacon.interval(1e3, 1),
            y = Bacon.interval(2e3, 1),
            z = Bacon.interval(1.5e3, 1);
        // NOTE: had to explicitly specify the typing for `previous:number`
        Bacon.update(initial,
            [x, y, z], (previous:number, x:number, y:number, z:number) => previous + x + y + z,
            [x, y], (previous:number, x:number, y:number) => previous + x + y
        );
        // As input, each function above will get the previous value of the `result` Property, along with values from the listed Observables. The value returned by the function will be used as the next value of `result`. Just like in `Bacon.when`, only EventStreams will trigger an update, while Properties will be just sampled. So, if you list a single EventStream and several Properties, the value will be updated only when an event occurs in the EventStream.
    }
    {
        // Here's a simple gaming example:
        var scoreMultiplier = Bacon.constant(1),
            hitUfo = new Bacon.Bus(),
            hitMotherShip = new Bacon.Bus(),
            score = Bacon.update(0,
                [hitUfo, scoreMultiplier], (score:number, _:number, multiplier:number) => score + 100 * multiplier,
                [hitMotherShip], (score:number, _:number) => score + 2000
            );
        // In the example, the `score` property is updated when either `hitUfo` or `hitMotherShip` occur. The `scoreMultiplier` Property is sampled to take multiplier into account when `hitUfo` occurs.
    }
    {
        // Join patterns as a "chemical machine". A quick way to get some intuition for join patterns is to understand them through an analogy in terms of atoms and molecules. A join pattern can here be regarded as a recipe for a chemical reaction. Lets say we have observables `oxygen`, `carbon` and `hydrogen`, where an event in these spawns an 'atom' of that type into a mixture. We can state reactions:
        let oxygen = Bacon.interval(1e3, "O"),
            hydrogen = Bacon.interval(2e3, "H"),
            carbon = Bacon.interval(1.5e3, "C"),
            makeWater = (oxygen:string, hydrogen1:string, hydrogen2:string) => `${hydrogen1}${[hydrogen1, hydrogen2].length}${oxygen}`,
            makeCarbonMonoxide = (oxygen:string, carbon:string) => `${carbon}${oxygen}`;

        Bacon.when(
            [oxygen, hydrogen, hydrogen], makeWater,
            [oxygen, carbon], makeCarbonMonoxide
        );
        // Now, every time a new 'atom' is spawned from one of the observables, this atom is added to the mixture. If at any time there are two hydrogen atoms, and an oxygen atom, the corresponding atoms are *consumed*, and output is produced via `makeWater`. The same semantics apply for the second rule to create carbon monoxide. The rules are tried at each point from top to bottom.
    }
}

function JoinPatternsAndProperties() {
    {
        // Join patterns and properties
        //Properties are not part of the synchronization pattern, but are instead just sampled. The following example take three input streams `$price`, `$quantity` and `$total`, e.g. coming from input fields, and defines mutally recursive behaviours in properties `price`, `quantity` and `total` such that
        // -- updating price sets total to price * quantity;
        // -- updating quantity sets total to price * quantity;
        // -- updating total sets price to total / quantity.
        let random = (x:number) => Math.round(x * Math.random()),
            id = <A>(x:A):A => x;
        let $quantity = Bacon.interval<Error, number>(1e3, 10).map(random),
            $price = Bacon.interval<Error, number>(2e3, 100).map(random),
            $total = Bacon.interval<Error, number>(1.5e3, 1000).map(random);
        let quantity = $quantity.toProperty(1),
            price = Bacon.when<Error, number, number, number>(
                [$price], id,
                [$total, quantity], (x, y) => x / y
            ).toProperty(0),
            total = Bacon.when<Error, number, number, number, number>(
                [$total], id,
                [$price, quantity], (x, y) => x * y,
                [price, $quantity], (x, y) => x * y
            ).toProperty(0);
    }
}

function JoinPatternsAndBaconBus() {
    {
        // Join patterns and `Bacon.Bus`
        // The result functions of join patterns are allowed to push values onto a `Bus` that may in turn be in one of its patterns. For instance, an implementation of the dining philosophers problem can be written as follows:
        // Availability of chopsticks are implemented using bus.
        let chopsticks = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
        // Hungry could be any type of observable, but we'll use bus here.
            hungry = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
        // A philosopher eats for one second, then makes the chopsticks available again by pushing values onto their bus.
            eat = (i:number) => () => {
                setTimeout(() => {
                    console.log("done!");
                    chopsticks[i].push({});
                    chopsticks[(i + 1) % 3].push({});
                }, 1e3);
                return `philosopher ${i} eating`;
            },
        // We use Bacon.when to make sure a hungry philosopher can eat only when both his chopsticks are available.
            dining = Bacon.when(
                [hungry[0], chopsticks[0], chopsticks[1]], eat(0),
                [hungry[1], chopsticks[1], chopsticks[2]], eat(1),
                [hungry[2], chopsticks[2], chopsticks[0]], eat(2)
            ).log("dining");
        // Make all chopsticks initially available.
        chopsticks[0].push({});
        chopsticks[1].push({});
        chopsticks[2].push({});
        // Make philosophers hungry in some way, in this case we just push to their bus.
        for (var i = 0; i < 3; i++) {
            hungry[0].push({});
            hungry[1].push({});
            hungry[2].push({});
        }
    }
}

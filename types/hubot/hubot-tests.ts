import { Adapter, Brain, Message, Response, Robot, User } from "hubot";

const user = new User("123");
const message = new Message(user);

const robot = new Robot<Adapter>("src/adapters", false, "hubot");
robot; // $ExpectType Robot<Adapter>
robot.name; // $ExpectType string
robot.events; // $ExpectType EventEmitter<DefaultEventMap>
robot.brain; // $ExpectType Brain<Adapter>
robot.alias; // $ExpectType string
robot.adapterName; // $ExpectType string
robot.adapter; // $ExpectType Adapter
robot.errorHandlers; // $ExpectType []
robot.datastore; // $ExpectType DataStore | null
robot.commands; // $ExpectType string[]
robot.listeners; // $ExpectType Listener<Adapter>[]
robot.middleware.listener; // $ExpectType Middleware<Adapter>
robot.middleware.response; // $ExpectType Middleware<Adapter>
robot.middleware.receive; // $ExpectType Middleware<Adapter>
robot.logger; // $ExpectType Log
robot.pingIntervalId; // $ExpectType Timeout | null
robot.globalHttpOptions; // $ExpectType Options
robot.version; // $ExpectType string
robot.server; // $ExpectType Server<typeof IncomingMessage, typeof ServerResponse> | undefined
robot.router; // $ExpectType Express
robot.shouldEnableHttpd; // $ExpectType boolean

function callback(response: Response) {
    return Promise.resolve();
}

let middleware = () => Promise.resolve(true);

robot.catchAll(callback); // $ExpectType void
robot.catchAll({}, callback); // $ExpectType void
robot.emit("test", "arg"); // $ExpectType void
robot.enter(callback); // $ExpectType void
robot.enter({}, callback); // $ExpectType void
robot.hear(/hello/, callback); // $ExpectType void
robot.hear(/hello/, {}, callback); // $ExpectType void
robot.helpCommands(); // $ExpectType string[]
robot.http("https://google.com"); // $ExpectType ScopedClient
robot.leave(callback); // $ExpectType void
robot.leave({}, callback); // $ExpectType void
robot.listen((message: Message) => true, callback); // $ExpectType void
robot.listen((message: Message) => true, {}, callback); // $ExpectType void
robot.listenerMiddleware(middleware); // $ExpectType void
robot.load(""); // $ExpectType Promise<void>
robot.loadAdapter(); // $ExpectType Promise<void>
robot.loadAdapter(""); // $ExpectType Promise<void>
robot.loadExternalScripts(["hubot-pager-me", "hubot-help"]); // $ExpectType void
robot.loadFile("scripts", "hi.js"); // $ExpectType Promise<void>
robot.messageRoom("general", "Hello friends"); // $ExpectType Promise<any>
robot.parseVersion(); // $ExpectType string
robot.on("test", () => null); // $ExpectType Robot<Adapter>
robot.receive(message); // $ExpectType Promise<any>
robot.receiveMiddleware(middleware); // $ExpectType void

// $ExpectType Promise<any>
robot.reply(
    {
        message,
        user,
        room: "general",
    },
    "Replying to friends",
);

robot.respond(/hello/, callback); // $ExpectType void
robot.respond(/hello/, {}, callback); // $ExpectType void
robot.respondPattern(/hello/); // $ExpectType RegExp
robot.responseMiddleware(middleware); // $ExpectType void
robot.run(); // $ExpectType Promise<any>

// $ExpectType Promise<any>
robot.send(
    {
        message,
        user,
        room: "general",
    },
    "Replying to friends",
);

robot.shutdown(); // $ExpectType void
robot.topic(callback); // $ExpectType void
robot.topic({}, callback); // $ExpectType void

const brain = new Brain(robot);
brain; // $ExpectType Brain<Adapter>
brain.set("test", "test"); // $ExpectType Brain<Adapter>
brain.get("test"); // $ExpectType any
brain.remove("test"); // $ExpectType Brain<Adapter>
brain.save(); // $ExpectType void
brain.close(); // $ExpectType void
brain.setAutoSave(false); // $ExpectType void
brain.resetSaveInterval(15); // $ExpectType void
brain.mergeData({ foo: "bar" }); // $ExpectType void

brain.users(); // $ExpectType User[]
brain.userForId("123"); // $ExpectType User
brain.userForName("someone"); // $ExpectType User | null
brain.usersForRawFuzzyName("fuzzy"); // $ExpectType User[]
brain.usersForFuzzyName("fuzzy"); // $ExpectType User[]

robot.adapter.users(); // $ExpectType User[]

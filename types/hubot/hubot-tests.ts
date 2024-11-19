import { Adapter, Brain, Message, Robot, User } from "hubot";

const user = new User("123");
const message = new Message(user);

const robot = new Robot<Adapter>("src/adapters", false, "hubot");
robot; // $ExpectType Robot<Adapter>
robot.adapter; // $ExpectType Adapter
robot.name; // $ExpectType string
robot.brain; // $ExpectType Brain<Adapter>
robot.catchAll(() => null); // $ExpectType void
robot.emit("test", "arg"); // $ExpectType void
robot.enter(() => null); // $ExpectType void
robot.error(err => null); // $ExpectType void
robot.hear(/hello/, () => null); // $ExpectType void
robot.helpCommands(); // $ExpectType string[]
robot.http("https://google.com"); // $ExpectType ScopedClient
robot.leave(() => null); // $ExpectType void
robot.load(""); // $ExpectType Promise<void>
robot.loadAdapter(); // $ExpectType Promise<void>
robot.loadAdapter(""); // $ExpectType Promise<void>
robot.loadExternalScripts("", ""); // $ExpectType Promise<void>
robot.parseVersion(); // $ExpectType string
// $ExpectType void
robot.listen(
    () => true,
    () => null,
);
// $ExpectType void
robot.listenerMiddleware(async (context) => {
    return true;
});
robot.messageRoom("general", "Hello friends"); // $ExpectType void
robot.on("test", () => null); // $ExpectType Robot<Adapter>
robot.receive(message); // $ExpectType Promise<void>
// $ExpectType void
robot.receiveMiddleware(async (context) => {
    return true;
});
// $ExpectType Promise<void>
robot.reply(
    {
        message,
        user,
        room: "general",
    },
    "Replying to friends",
);
robot.respond(/hello/, () => null); // $ExpectType void
robot.respondPattern(/hello/); // $ExpectType RegExp
robot.responseMiddleware(async (context) => {
    return true;
});
robot.run(); // $ExpectType void
// $ExpectType Promise<void>
robot.send(
    {
        message,
        user,
        room: "general",
    },
    "Replying to friends",
);
robot.shutdown(); // $ExpectType Promise<void>
robot.topic(message => null); // $ExpectType void

const brain = new Brain(robot);
brain; // $ExpectType Brain<Adapter>
brain.userForName("someone"); // $ExpectType User | null
brain.get("test"); // $ExpectType any
brain.set("test", "test"); // $ExpectType Brain<Adapter>
brain.remove("test"); // $ExpectType Brain<Adapter>
brain.setAutoSave(false); // $ExpectType void
brain.resetSaveInterval(15); // $ExpectType void
brain.mergeData({ foo: "bar" }); // $ExpectType void
brain.users(); // $ExpectType any
robot.adapter.users(); // $ExpectType any
brain.userForId("123"); // $ExpectType User
brain.userForName("jon"); // $ExpectType User | null
brain.usersForRawFuzzyName("fuzzy"); // $ExpectType User[]
brain.usersForFuzzyName("fuzzy"); // $ExpectType User[]
brain.save(); // $ExpectType void
brain.close(); // $ExpectType void

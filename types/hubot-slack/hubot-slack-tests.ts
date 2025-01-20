import { Brain, Message, Robot, User } from "hubot";
import { SlackBot } from "hubot-slack";

const user = new User("123");
const message = new Message(user);

const robot = new Robot<SlackBot>("src/adapters", "slack", false, "hubot");
robot; // $ExpectType Robot<SlackBot>
robot.adapter; // $ExpectType SlackBot
robot.name; // $ExpectType string
robot.brain; // $ExpectType Brain<SlackBot>
robot.catchAll(() => null); // $ExpectType void
robot.emit("test", "arg"); // $ExpectType void
robot.enter(() => null); // $ExpectType void
robot.error(err => null); // $ExpectType void
robot.hear(/hello/, () => null); // $ExpectType void
robot.hearReaction(() => true, () => null); // $ExpectType void
robot.react(() => true, () => null); // $ExpectType void
robot.helpCommands(); // $ExpectType string[]
robot.http("https://google.com"); // $ExpectType ScopedClient
robot.leave(() => null); // $ExpectType void
// $ExpectType void
robot.listen(
    () => true,
    () => null,
);
// $ExpectType void
robot.listenerMiddleware((context, next, done) => {
    next(done);
});
robot.messageRoom("general", "Hello friends"); // $ExpectType void
robot.on("test", () => null); // $ExpectType Robot<SlackBot>
robot.receive(message, () => null); // $ExpectType void
// $ExpectType void
robot.receiveMiddleware((context, next, done) => {
    next(done);
});
// $ExpectType void
robot.reply(
    {
        id: "123",
        message,
        user,
        room: "general",
    },
    "Replying to friends",
);
robot.respond(/hello/, () => null); // $ExpectType void
robot.respondPattern(/hello/); // $ExpectType RegExp
// $ExpectType void
robot.responseMiddleware((context, next, done) => {
    next(done);
});
robot.run(); // $ExpectType void
// $ExpectType void
robot.send(
    {
        id: "123",
        message,
        user,
        room: "general",
    },
    "Replying to friends",
);
robot.shutdown(); // $ExpectType void
robot.topic(message => null); // $ExpectType void

const brain = new Brain(robot);
brain; // $ExpectType Brain<SlackBot>
brain.userForName("someone"); // $ExpectType User | null
brain.get("test"); // $ExpectType any
brain.set("test", "test"); // $ExpectType Brain<SlackBot>
brain.remove("test"); // $ExpectType Brain<SlackBot>
brain.setAutoSave(false); // $ExpectType void
brain.resetSaveInterval(15); // $ExpectType void
brain.mergeData({ foo: "bar" }); // $ExpectType void
brain.users(); // $ExpectType User[]
brain.userForId("123"); // $ExpectType User
brain.userForName("jon"); // $ExpectType User | null
brain.usersForRawFuzzyName("fuzzy"); // $ExpectType User[]
brain.usersForFuzzyName("fuzzy"); // $ExpectType User[]
brain.save(); // $ExpectType void
brain.close(); // $ExpectType void

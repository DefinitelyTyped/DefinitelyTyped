import { Robot, Adapter, Brain, Message, User } from 'hubot';

const user = new User('123');
const message = new Message(user);

const robot = new Robot<Adapter>('src/adapters', 'slack', false, 'hubot');
robot; // $ExpectType Robot<Adapter>
robot.adapter; // $ExpectType Adapter
robot.name; // $ExpectType string
robot.catchAll(() => null); // $ExpectType void
robot.emit('test', 'arg'); // $ExpectType void
robot.enter(() => null); // $ExpectType void
robot.error(err => null); // $ExpectType void
robot.hear(/hello/, () => null); // $ExpectType void
robot.helpCommands(); // $ExpectType string[]
robot.http('https://google.com'); // $ExpectType ScopedClient
robot.leave(() => null); // $ExpectType void
robot.listen(
    // $ExpectType void
    () => true,
    () => null,
);
robot.listenerMiddleware((context, next, done) => {
    // $ExpectType void
    next(done);
});
robot.messageRoom('general', 'Hello friends'); // $ExpectType void
robot.on('test', () => null); // $ExpectType Robot<Adapter>
robot.receive(message, () => null); // $ExpectType void
robot.receiveMiddleware((context, next, done) => {
    // $ExpectType void
    next(done);
});
robot.reply(
    // $ExpectType void
    {
        message,
        user,
        room: 'general',
    },
    'Replying to friends',
);
robot.respond(/hello/, () => null); // $ExpectType void
robot.respondPattern(/hello/); // $ExpectType RegExp
robot.responseMiddleware((context, next, done) => {
    // $ExpectType void
    next(done);
});
robot.run(); // $ExpectType void
robot.send(
    // $ExpectType void
    {
        message,
        user,
        room: 'general',
    },
    'Replying to friends',
);
robot.shutdown(); // $ExpectType void
robot.topic(message => null); // $ExpectType void

const brain = new Brain(robot);
brain; // $ExpectType Brain<Adapter>
brain.userForName('someone'); // $ExpectType User | null
brain.get('test'); // $ExpectType any
brain.set('test', 'test'); // $ExpectType Brain<Adapter>

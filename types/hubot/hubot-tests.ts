import { Robot, Adapter, Brain, Message, User } from 'hubot';

const user = new User('123');
const message = new Message(user);

const robot = new Robot<Adapter>('src/adapters', 'slack', false, 'hubot');
robot; // $ExpectType Robot<Adapter>
robot.adapter; // $ExpectType Adapter
robot.name; // $ExpectType string
robot.brain; // $ExpectType Brain<Adapter>
robot.catchAll(() => null); // $ExpectType void
robot.emit('test', 'arg'); // $ExpectType void
robot.enter(() => null); // $ExpectType void
robot.error(err => null); // $ExpectType void
robot.hear(/hello/, () => null); // $ExpectType void
robot.helpCommands(); // $ExpectType string[]
robot.http('https://google.com'); // $ExpectType ScopedClient
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
robot.messageRoom('general', 'Hello friends'); // $ExpectType void
robot.on('test', () => null); // $ExpectType Robot<Adapter>
robot.receive(message, () => null); // $ExpectType void
// $ExpectType void
robot.receiveMiddleware((context, next, done) => {
    next(done);
});
// $ExpectType void
robot.reply(
    {
        message,
        user,
        room: 'general',
    },
    'Replying to friends',
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
brain.remove('test'); // $ExpectType Brain<Adapter>
brain.setAutoSave(false); // $ExpectType void
brain.resetSaveInterval(15); // $ExpectType void
brain.mergeData({ foo: 'bar' }); // $ExpectType void
brain.users(); // $ExpectType User[]
brain.userForId('123'); // $ExpectType User
brain.userForName('jon'); // $ExpectType User | null
brain.usersForRawFuzzyName('fuzzy'); // $ExpectType User[]
brain.usersForFuzzyName('fuzzy'); // $ExpectType User[]
brain.save(); // $ExpectType void
brain.close(); // $ExpectType void

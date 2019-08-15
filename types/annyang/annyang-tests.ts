import { Annyang, CommandOption } from 'annyang';

declare const annyang: Annyang;
declare const console: any;

// Tests based on API documentation at https://github.com/TalAter/annyang/blob/master/docs/README.md

function testStartListening() {
    annyang.start({ autoRestart: false }); // $ExpectType void
    annyang.start({ autoRestart: false, continuous: false }); // $ExpectType void
}

function testAddComments() {
    const helloFunction = (): string => {
        return 'hello';
    };

    const commands: CommandOption = {'hello :name': helloFunction, howdy: helloFunction};
    const commands2: CommandOption = {hi: helloFunction};

    annyang.addCommands(commands); // $ExpectType void
    annyang.addCommands(commands2); // $ExpectType void
    annyang.removeCommands(); // $ExpectType void
    annyang.addCommands(commands); // $ExpectType void
    annyang.removeCommands('hello'); // $ExpectType void
    annyang.removeCommands(['howdy', 'hi']); // $ExpectType void
}

const notConnected = () => { console.error('network connection error'); };

function testAddCallback() {
    annyang.addCallback('error', () => console.error('There was an error!')); // $ExpectType void

    // $ExpectType void
    annyang.addCallback('resultMatch', (userSaid, commandText, phrases) => {
        console.log(userSaid);
        console.log(commandText);
        console.log(phrases);
    });

    annyang.addCallback('errorNetwork', notConnected, annyang); // $ExpectType void
}

function testRemoveCallback() {
    const start = () => { console.log('start'); };
    const end = () => { console.log('end'); };

    annyang.addCallback('start', start); // $ExpectType void
    annyang.addCallback('end', end); // $ExpectType void

    annyang.removeCallback(); // $ExpectType void

    annyang.removeCallback('end'); // $ExpectType void

    annyang.removeCallback('start', start); // $ExpectType void

    annyang.removeCallback(undefined, start); // $ExpectType void
}

function testTrigger() {
    annyang.trigger('Time for some thrilling heroics');

    // $ExpectType void
    annyang.trigger(
        ['Time for some thrilling heroics', 'Time for some thrilling aerobics']
    );
}

function testIsListening() {
    annyang.isListening(); // $ExpectType boolean
}

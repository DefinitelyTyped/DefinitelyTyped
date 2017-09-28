import artyomjs = require('artyom.js');

// Get an unique ArtyomJS instance
const artyom = artyomjs.ArtyomBuilder.getInstance();

// Add a command (not smart)
artyom.addCommands({
    description: 'Test command',
    indexes: ['hello', 'hi'],
    action: (i: number) => {
        console.log('hello action');
    }
});

// Add a smart command
artyom.addCommands({
    description: 'Test command 2',
    smart: true,
    indexes: ['test *'],
    action: (i: number, wildcard: string) => {
        console.log('wildcard: ', wildcard);
    }
});

// Get the browser voices
artyom.getVoices();

// Get all supported languages for Artyom
artyom.getLanguage();

// Get the artyom.js version
artyom.getVersion();

import promptSync = require('prompt-sync');

declare const history: promptSync.History;

let prompt: promptSync.Prompt;

// without config
prompt = promptSync();

// with config
prompt = promptSync({
    history: history,
    sigint: false,
    eot: false,
    autocomplete: (input:string) => [input]
});

// with empty config
prompt = promptSync({});

let name:string = prompt('Enter name: ');
let nickname:string = prompt({ask: 'Enter nickname: ', value: 'N/A'});
let gender:string = prompt('Enter gender: ', { autocomplete: complete(['male', 'female']) });
let age:string = prompt('Enter age: ', '18', { echo: '*' });
let password:string = prompt.hide('Enter password: ');
let anotherPassword:string = prompt('Enter another password: ', { echo: '', value: '*password*'});

function complete(commands: string[]) {
    return function (str: string) {
        const ret:string[] = [];
        for (let i=0; i< commands.length; i++) {
            if (commands[i].indexOf(str) == 0)
                ret.push(commands[i]);
        }
        return ret;
    };
}

// History interface
let bool: boolean;

bool = history.atStart();
bool = history.atPenultimate();
bool = history.pastEnd();
bool = history.atEnd();

let str: string;
str = history.prev();
str = history.next();

history.reset();
history.push('aaa');
history.save();

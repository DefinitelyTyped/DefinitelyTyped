import { Question } from 'inquirer';
import UI = require('console-ui');

new UI({
    inputStream: process.stdin,
    outputStream: process.stderr,
    errorStream: process.stdout,
    writeLevel: 'DEBUG',
    ci: false
});

const ui = new UI();

ui.write(); // $ExpectError
ui.write('hello');
ui.write('hello', 'DEBUG');
ui.write('hello', 'INFO');
ui.write('hello', 'WARNING');
ui.write('hello', 'ERROR');
ui.write('hello', 'NONEXISTENT'); // $ExpectError

ui.writeLine(); // $ExpectError
ui.writeLine('hello');
ui.writeLine('hello', 'DEBUG');
ui.writeLine('hello', 'INFO');
ui.writeLine('hello', 'WARNING');
ui.writeLine('hello', 'ERROR');
ui.writeLine('hello', 'NONEXISTENT'); // $ExpectError

ui.writeDebugLine('hello');

ui.writeWarnLine('hello');
ui.writeWarnLine('hello', true);
ui.writeWarnLine('hello', false, true);

ui.writeDeprecateLine('hello');
ui.writeDeprecateLine('hello', true);
ui.writeDeprecateLine('hello', false, true);

ui.writeError(new Error('boom!'));
ui.writeError('boom!'); // $ExpectError

ui.setWriteLevel('DEBUG');
ui.setWriteLevel('INFO');
ui.setWriteLevel('WARNING');
ui.setWriteLevel('ERROR');
ui.setWriteLevel('NONEXISTENT'); // $ExpectError

ui.startProgress('hello');
ui.stopProgress();
ui.stopProgress('hello'); // $ExpectError

const question: Question<{ answer: boolean }> = {
    message: 'Yes / No?',
    type: 'confirm'
};

ui.prompt(question).then(result => {
    result.answer; // $ExpectType boolean
});

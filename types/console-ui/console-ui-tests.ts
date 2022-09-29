import { DistinctQuestion } from 'inquirer';
import UI = require('console-ui');

new UI({
    inputStream: process.stdin,
    outputStream: process.stderr,
    errorStream: process.stdout,
    writeLevel: 'DEBUG',
    ci: false
});

const ui = new UI();

// @ts-expect-error
ui.write();
ui.write('hello');
ui.write('hello', 'DEBUG');
ui.write('hello', 'INFO');
ui.write('hello', 'WARNING');
ui.write('hello', 'ERROR');
// @ts-expect-error
ui.write('hello', 'NONEXISTENT');

// @ts-expect-error
ui.writeLine();
ui.writeLine('hello');
ui.writeLine('hello', 'DEBUG');
ui.writeLine('hello', 'INFO');
ui.writeLine('hello', 'WARNING');
ui.writeLine('hello', 'ERROR');
// @ts-expect-error
ui.writeLine('hello', 'NONEXISTENT');

ui.writeDebugLine('hello');

ui.writeWarnLine('hello');
ui.writeWarnLine('hello', true);
ui.writeWarnLine('hello', false, true);

ui.writeDeprecateLine('hello');
ui.writeDeprecateLine('hello', true);
ui.writeDeprecateLine('hello', false, true);

ui.writeError(new Error('boom!'));
// @ts-expect-error
ui.writeError('boom!');

ui.setWriteLevel('DEBUG');
ui.setWriteLevel('INFO');
ui.setWriteLevel('WARNING');
ui.setWriteLevel('ERROR');
// @ts-expect-error
ui.setWriteLevel('NONEXISTENT');

ui.startProgress('hello');
ui.stopProgress();
// @ts-expect-error
ui.stopProgress('hello');

const question: DistinctQuestion<{ answer: boolean }> = {
    message: 'Yes / No?',
    type: 'confirm'
};

ui.prompt(question).then(result => {
    result.answer; // $ExpectType boolean
});

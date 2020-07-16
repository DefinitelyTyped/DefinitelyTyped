import { install, log, TabtabEnv, uninstall, parseEnv, completionItem } from 'tabtab';
import minimist = require('minimist');

// $ExpectType CompletionItem
completionItem({ name: 'foo' });

// $ExpectType CompletionItem
completionItem('bar');

const opts = minimist(process.argv.slice(2), {
    string: ['foo', 'bar'],
    boolean: ['help', 'version', 'loglevel'],
});

const args = opts._;

// tslint:disable: no-void-expression
const completion = (env: TabtabEnv) => {
    if (!env.complete) return;

    // Write your completions there

    if (env.prev === 'foo') {
        return log(['is', 'this', 'the', 'real', 'life']);
    }

    if (env.prev === 'bar') {
        return log(['is', 'this', 'just', 'fantasy']);
    }

    if (env.prev === '--loglevel') {
        return log(['error', 'warn', 'info', 'notice', 'verbose']);
    }

    return log([
        '--help',
        '--version',
        '--loglevel',
        'foo',
        'bar',
        'install-completion',
        'completion',
        'someCommand:someCommand is some kind of command with a description',
        {
            name: 'someOtherCommand:hey',
            description: 'You must add a description for items with ":" in them',
        },
        'anotherOne',
    ]);
};
// tslint:enable: no-void-expression

const run = (): Promise<void> => {
    const cmd = args[0];

    // Write your CLI there

    // Here we install for the program `tabtab-test` (this file), with
    // completer being the same program. Sometimes, you want to complete
    // another program that's where the `completer` option might come handy.
    if (cmd === 'install-completion') {
        return install({
            name: 'tabtab-test',
            completer: 'tabtab-test',
        });
    }

    if (cmd === 'uninstall-completion') {
        // Here we uninstall for the program `tabtab-test` (this file).
        return uninstall({
            name: 'tabtab-test',
        });
    }

    // The completion command is added automatically by tabtab when the program
    // is completed.
    if (cmd === 'completion') {
        return new Promise<void>(res => {
            const env = parseEnv(process.env);
            completion(env);
            res();
        });
    }

    return new Promise<void>((_, rej) => rej());
};

run().catch(e => console.error(e));

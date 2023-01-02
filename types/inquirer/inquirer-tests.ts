import { createInterface } from 'readline';
import inquirer, { Answers, DistinctChoice, DistinctQuestion, InputQuestionOptions } from 'inquirer';
import InputPrompt from 'inquirer/lib/prompts/input.js';
import { fetchAsyncQuestionProperty } from 'inquirer/lib/utils/utils.js';
import incrementListIndex from 'inquirer/lib/utils/incrementListIndex.js';
import Choices from 'inquirer/lib/objects/choices.js';
import Paginator from 'inquirer/lib/utils/paginator.js';
import ScreenManager from 'inquirer/lib/utils/screen-manager.js';
import { Subject } from 'rxjs';
{
    new inquirer.Separator('');
    const promptModule = inquirer.createPromptModule();
    promptModule.prompts['']; // $ExpectType PromptConstructor
    promptModule.registerPrompt('', InputPrompt); // $ExpectType PromptModule
    promptModule.restoreDefaultPrompts();
    inquirer.createPromptModule({ skipTTYChecks: false });
}
{
    inquirer.prompt([
        {
            message: '',
            default: '',
        },
    ]);
}
{
    interface AnswerHash {
        this: string;
        is: string;
        a: string;
        test: string;
    }

    // Having a `name` in an already named question is counterproductive. Thus, it's considered an error.
    inquirer.prompt<AnswerHash>(
        // @ts-expect-error
        {
            this: {
                name: 'override-this',
                message: '1st question'
            },
            is: {
                message: '2nd question'
            },
            a: {
                message: '3rd question'
            },
            test: {
                message: '4th question'
            }
        });

    // Take note that the properties of the answer-hash `this`, `is`, `a` and `test` are showing up in the auto completion
    inquirer.prompt<AnswerHash>(
        {
            this: {
                message: '1st question'
            },
            is: {
                message: '2nd question'
            },
            a: {
                message: '3rd question'
            },
            test: {
                message: '4th question'
            }
        });
}
{
    new inquirer.ui.BottomBar();
    new inquirer.ui.Prompt(inquirer.prompt.prompts);
}
{
    const checkBoxQuestion: DistinctQuestion = {
        type: 'checkbox',
        askAnswered: true,
    };

    const listQuestion: DistinctQuestion = {
        type: 'list',
        askAnswered: true,
    };

    const rawListQuestion: DistinctQuestion = {
        type: 'rawlist',
        askAnswered: true,
    };

    const expandQuestion: DistinctQuestion = {
        type: 'expand',
        askAnswered: true,
    };

    // @ts-expect-error
    expandQuestion.loop;
    // $ExpectType boolean
    rawListQuestion.loop!;
    // $ExpectType boolean
    checkBoxQuestion.loop!;
    // $ExpectType boolean
    listQuestion.loop!;
}
{
    inquirer.prompt<Partial<any>>([
        {
            filter(input, answers) {
                // $ExpectType any
                input;
                // $ExpectType Partial<any>
                answers;
            },
        },
    ]);
}
{
    let choice: DistinctChoice;

    choice = {
        type: 'separator',
        line: 'This is a test',
    };

    if (choice.type === 'separator' && !(choice instanceof inquirer.Separator)) {
        // $ExpectType SeparatorOptions
        choice;
    }
}

interface ChalkQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> {
    previewColors: boolean;
}

interface ChalkQuestion<T extends Answers = Answers> extends ChalkQuestionOptions<T> {
    type: 'chalk';
}

class ChalkPrompt extends InputPrompt {
    /* stuff */

    protected onKeypress() {}
}

inquirer.registerPrompt('chalk', ChalkPrompt);

declare module 'inquirer' {
    interface QuestionMap<T> {
        chalk: ChalkQuestion<T>;
    }
}

inquirer.prompt([
    {
        type: 'chalk',
        previewColors: true,
    },
]);

inquirer.prompt(
    [
        {
            name: 'foo',
            default: 'bar',
        },
    ],
    {
        foo: 'baz',
    },
);

fetchAsyncQuestionProperty(
    {
        name: 'foo',
        default: 'bar',
    },
    'message',
    {},
).pipe(source => {
    return source;
});

{
    const options = {
        name: 'foo',
        loop: true,
        choices: new Choices([{ name: 'foo' }], {}),
    };

    // $ExpectType number
    incrementListIndex(0, 'up', options);
    // @ts-expect-error
    incrementListIndex('notANumber', 'up', options);
    // @ts-expect-error
    incrementListIndex(0, 'left', options);
    // @ts-expect-error
    incrementListIndex(0, 'up', {});
}

{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const screen = new ScreenManager(rl);

    new Paginator(screen);
    new Paginator(screen, { isInfinite: true });
    // @ts-expect-error
    new Paginator(screen, { someUnsupportedOptions: 'foobar' });
}

{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const screen = new ScreenManager(rl);

    const paginator = new Paginator(screen);
    paginator.paginate('test', 0);
    paginator.paginate('test', 0, 0);
}

{
    const prompts = new Subject<DistinctQuestion>();
    const promptResult = inquirer.prompt(prompts);
    promptResult.ui.process.subscribe({
        next: (value: {name: string, answer: any}) => {
            // DO NOTHING
        },
    });
    // @ts-expect-error
    promptResult.ui.process.subscribe({
        next: (value: {name_: string, answer: number}) => {
            // DO NOTHING
        },
    });
    prompts.complete();
}

{
    const prompts = new Subject<DistinctQuestion<{str: string; num: number}>>();
    const promptResult = inquirer.prompt(prompts);
    promptResult.ui.process.subscribe({
        next: (value: {name: 'str', answer: string} | {name: 'num', answer: number}) => {
            // DO NOTHING
        },
    });
    promptResult.ui.process.subscribe({
        next: (value) => {
            if (value.name === "str") {
                // $ExpectType string
                value.answer;
            } else {
                // $ExpectType number
                value.answer;
            }
        },
    });
    // @ts-expect-error
    promptResult.ui.process.subscribe({
        next: (value: {name: string, answer: number}) => {
            // DO NOTHING
        },
    });
    prompts.complete();
}

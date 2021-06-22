import Listr = require("listr");
import * as fs from "fs";

interface Context {
    foo: string;
    yarn?: boolean;
}

const tasks = new Listr<Context>([
    {
        title: 'Git',
        task: () => {
            return new Listr([
                {
                    title: 'Checking git status',
                    task: () => new Promise<string>(resolve => resolve(''))
                        .then(result => {
                        if (result !== '') {
                            throw new Error('Unclean working tree. Commit or stash changes first.');
                        }
                    })
                },
                {
                    title: 'Checking remote history',
                    task: () => new Promise<string>(resolve => resolve(''))
                        .then(result => {
                        if (result !== '0') {
                            throw new Error('Remote history differ. Please pull changes.');
                        }
                    })
                }
            ],
            { concurrent: true });
        }
    },
    {
        title: 'Install package dependencies with Yarn',
        task: (ctx, task) => new Promise<void>(resolve => resolve())
            .catch(() => {
                ctx.yarn = false;

                task.skip('Yarn not available, install it via `npm install -g yarn`');
            })
    },
    {
        title: 'Install package dependencies with npm',
        enabled: ctx => ctx.yarn === false,
        task: () => new Promise<void>(resolve => resolve())
    },
    {
        title: 'Run tests',
        task: () => new Promise<void>(resolve => resolve())
    },
    {
        title: 'Publish package',
        task: () => new Promise<void>(resolve => resolve())
    }
]);

tasks.run().catch(err => {
});

const tasks21 = new Listr([
    {
        title: 'Success',
        task: () => 'Foo'
    },
    {
        title: 'Failure',
        task: () => {
            throw new Error('Bar');
        }
    }
]);

const taskA: Listr.ListrTask = {
    title: 'Success',
    task: () => 'Foo'
};

const taskB: Listr.ListrTask = {
    title: 'Failure',
    task: () => {
        throw new Error('Bar');
    }
};

const tasks22 = new Listr([taskA, taskB]);

const tasks3 = new Listr([
    {
        title: 'Success',
        task: () => Promise.resolve('Foo')
    },
    {
        title: 'Failure',
        task: () => Promise.reject(new Error('Bar'))
    }
]);

const tasks4 = new Listr([
    {
        title: 'File',
        task: () => fs.createReadStream('data.txt', 'utf8')
    }
]);

const tasks5 = new Listr([
    {
        title: 'Task 1',
        task: () => Promise.resolve('Foo')
    },
    {
        title: 'Can be skipped',
        skip: () => {
            if (Math.random() > 0.5) {
                return 'Reason for skipping';
            }
        },
        task: () => 'Bar'
    },
    {
        title: 'Task 3',
        task: () => Promise.resolve('Bar')
    }
]);

const tasks6 = new Listr([
    {
        title: 'Install package dependencies with Yarn',
        task: (ctx, task) => new Promise<void>(resolve => resolve())
            .catch(() => {
                ctx.yarn = false;

                task.skip('Yarn not available, install it via `npm install -g yarn`');
            })
    },
    {
        title: 'Install package dependencies with npm',
        enabled: ctx => ctx.yarn === false,
        task: () => new Promise<void>(resolve => resolve())
    }
]);

const tasks7 = new Listr([
    {
        title: 'Task 1',
        skip: ctx => ctx.foo === 'bar',
        task: () => Promise.resolve('Foo')
    },
    {
        title: 'Can be skipped',
        skip: () => {
            if (Math.random() > 0.5) {
                return 'Reason for skipping';
            }
        },
        task: ctx => {
            ctx.unicorn = 'rainbow';
        }
    },
    {
        title: 'Task 3',
        task: ctx => Promise.resolve(`${ctx.foo} ${ctx.bar}`)
    }
]);

tasks.run({
    foo: 'bar'
}).then(ctx => {
    console.log(ctx);
});

class CustomRenderer {
    constructor(tasks: ReadonlyArray<Listr.ListrTask<Context>>, options: Listr.ListrOptions<Context>) {}

    static nonTTY = true;

    render() {}
    end(err: Listr.ListrError<Context>) {}
}

const tasks8 = new Listr<Context>(
    [
        {
            title: 'Success',
            task: () => 'Foo',
        },
    ],
    {
        renderer: CustomRenderer,
    }
);

const tasks9 = new Listr(
    [
        {
            title: 'Success',
            task: () => 'Foo',
        },
    ],
    {
        renderer: 'default',
    }
);

const tasks10 = new Listr([
   {
        title: 'Skipped with Promise that resolves to string',
        skip: async () => {
            if (Math.random() > 0.5) {
                return 'Reason for skipping';
            }
        },
        task: () => 'Foo',
    }
]);

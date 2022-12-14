import * as args from "args";

const result = args
    .option("opt1", "desc")
    .option("opt2", "desc", false, (value: any): any => value)
    .options([
        {
            name: 'opt3',
            description: 'desc',
            defaultValue: 1,
            init: (value: any) => { },
        },
        {
            name: 'opt4',
            description: 'desc',
        },
    ])
    .options([
        {
            name: ['o', 'opt5'],
            description: 'desc',
            defaultValue: 1,
            init: (value: any) => { },
        },
    ])
    .command("cm1", "desc")
    .command("cm2", "desc", (value: any): void => { }, ['a'])
    .command("cm3", "desc", (name, subs, options: { opt1: number}): void => {
        const x = options.opt1;
     }, ['a'])
     .command("cm4", "desc", (name, subs, options): void => {
        const a = options.opt1;
        const b = options.opt2;
        const c = options.opt4;
        // @ts-expect-error
        const d = options.opt8;
     })
    .example("ex1", "desc")
    .examples([
        {
            usage: "ex2",
            description: "desc",
        },
    ]);

const {opt1, opt2, opt3, opt4} = result.parse([]);

// @ts-expect-error
const {opt6} = result.parse([]);

args.parse(['~/bin/node', '~/dir', 'arg', '--param'], {
    help: true,
    name: "name",
    version: true,
    usageFilter: (a: any): any => a,
    value: "value",
    mri: {
        args: ['a'],
        alias: {
            a: "b",
            c: ['d'],
        },
        boolean: ['wat'],
        default: {
            foo: 'bar',
        },
        string: ['zulu'],
        unknown: (param: string): boolean => true,
    },
    minimist: {
        string: ['string'],
        boolean: ['string'],
        alias: {
            bar: 'foo',
            foo: ['bar1', 'bar2'],
        },
        default: {
            foo: 'bar',
        },
        stopEarly: true,
        "--": false,
        unknown: (param: string): boolean => true,
    },
    mainColor: "yellow",
    subColor: "dim"
});

args.parse(['~/bin/node', '~/dir', 'arg', '--param'], {
    mri: {
        boolean: ['wat'],
    }
});

args.showHelp();
args.showVersion();

const x: string = args.sub[0];

import * as args from "args";

args
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
    .command("cm1", "desc")
    .command("cm2", "desc", (value: any): void => { }, ['a'])
    .example("ex1", "desc")
    .examples([
        {
            usage: "ex2",
            description: "desc",
        },
    ]);

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

args.showHelp();

const x: string = args.sub[0];

import * as multisort from 'multisort';

const gameShowHosts = [
    {
        id: 1,
        name: {
            first: 'Bob',
            last: 'Barker',
        },
        retired: true,
        fame: 2,
        show: 'The Price is Right',
        say: {
            name: () => 'Bob Barker',
            catchphrase: (exclaimations: any) => {
                if (!exclaimations) throw new Error('No arguments passed'); // To test that sorting function passes arguments in.
                let catchphrase = 'Come on down';
                for (let i = 0; i < exclaimations; i++) {
                    catchphrase = catchphrase + '!';
                }
                return catchphrase;
            },
        },
    },
    {
        id: 2,
        name: {
            first: 'Regis',
            last: 'Philbin',
        },
        retired: true,
        fame: 3,
        show: 'Who Wants to be a Millionaire',
        say: {
            name: () => 'Regis Philbin',
            catchphrase: (questionMarks: any) => {
                if (!questionMarks) throw new Error('No arguments passed');
                let catchphrase = 'Is that your final answer';
                for (let i = 0; i < questionMarks; i++) {
                    catchphrase = catchphrase + '?';
                }
                return catchphrase;
            },
        },
    },
    {
        id: 3,
        name: {
            first: 'Alex',
            last: 'Trebek',
        },
        fame: 3,
        show: 'Jeopardy',
        say: {
            name: () => 'Alex Trebek',
            catchphrase: (exclaimations: any) => {
                if (!exclaimations) throw new Error('No arguments passed');
                let catchphrase = 'This is Jeopardy';
                for (let i = 0; i < exclaimations; i++) {
                    catchphrase = catchphrase + '!';
                }
                return catchphrase;
            },
        },
    },
    {
        id: 4,
        name: {
            first: 'Ben',
            last: 'Bailey',
        },
        show: 'Cash Cab',
        fame: 1,
        retired: true,
        say: {
            name: () => 'Ben Bailey',
            catchphrase: (exclaimations: any) => {
                if (!exclaimations) throw new Error('No arguments passed');
                let catchphrase = "You're in The Cash Cab";
                for (let i = 0; i < exclaimations; i++) {
                    catchphrase = catchphrase + '!';
                }
                return catchphrase;
            },
        },
    },
    {
        id: 5,
        name: {
            first: 'Pat',
            last: 'Sajak',
        },
        fame: 2,
        show: 'Wheel of Fortune',
        say: {
            name: () => 'Pat Sajak',
            catchphrase: (exclaimations: any) => {
                if (!exclaimations) throw new Error('No arguments passed');
                let catchphrase = 'Give the wheel a spin';
                for (let i = 0; i < exclaimations; i++) {
                    catchphrase = catchphrase + '!';
                }
                return catchphrase;
            },
        },
    },
];

const input1 = [3, 4, 2, 5, 1];
multisort(input1, 1);
multisort(input1, (a) => a);

const input2 = ['hello', [1], [1, 2], []];
multisort(input2, 'length');

const input3 = [
    { prop: true },
    { prop: undefined },
    { prop: false },
    { prop: null },
];
multisort(input3, 'prop?');
multisort(gameShowHosts, 'say.name()');
multisort(gameShowHosts, '~say.catchphrase(3)');

const input4 = [
    { name: 'dog' },
    { name: 'Dog' },
    { name: 'DOG' },
    { name: 'demon' },
    { name: 'Demon' },
    { name: 'DEMON' },
];
multisort(input4, 'name.toLowerCase()');

const input5 = ['dog', 'Dog', 'DOG', 'demon', 'Demon', 'DEMON'];
multisort(input5, 'toLowerCase()');

const input6: Array<{ func: () => any }> = [
    { func: () => true },
    { func: () => null },
];
multisort(input6, 'func()?');
multisort(input6, 'func?');

multisort(input1, [a => a % 2, a => a % 3, a => a]);
multisort(gameShowHosts, ['~fame', 'retired', 'name.last']);

const sorter = multisort<number>([a => a % 2, a => a % 3, a => a]);
sorter(input1);

const comparator = sorter.comparator;
input1.sort(comparator);

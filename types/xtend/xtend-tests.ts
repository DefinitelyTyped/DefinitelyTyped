import xtend = require('xtend');

interface Target {
    hellow: string;
}
interface Source1 {
    source1: string;
}
interface Source2 {
    source2: string;
}
interface Source3 {
    source3: string;
}
interface Source4 {
    source4: string;
}
interface Source5 {
    source5: string;
}

type Result1 = Target & Source1;
type Result2 = Result1 & Source2;
type Result3 = Result2 & Source3;
type Result4 = Result3 & Source4;
type Result5 = Result4 & Source5;

function assign1(): Result1 {
    return xtend({ hellow: 'world' }, { source1: 'U' });
}

function assign2(): Result2 {
    return xtend({ hellow: 'world' }, { source1: 'U' }, { source2: 'V' });
}

function assign3(): Result3 {
    return xtend({ hellow: 'world' }, { source1: 'U' }, { source2: 'V' }, { source3: 'W' });
}

function assign4(): Result4 {
    return xtend({ hellow: 'world' }, { source1: 'U' }, { source2: 'V' }, { source3: 'W' }, { source4: 'Q' });
}

function assign5(): Result5 {
    return xtend(
        { hellow: 'world' },
        { source1: 'U' },
        { source2: 'V' },
        { source3: 'W' },
        { source4: 'Q' },
        { source5: 'R' },
    );
}

function assign(): object {
    return xtend(
        { hellow: 'world' },
        { source1: 'U' },
        { source2: 'V' },
        { source3: 'W' },
        { source4: 'Q' },
        { source5: 'R' },
        {
            hellow: 'hellow',
            source1: 'source1',
            source2: 'source2',
            source3: 'source3',
            source4: 'source4',
            source5: 'source5',
            generic: 'any',
        },
    );
}

// @ts-expect-error
xtend(1, 2, 3);
// @ts-expect-error
xtend({}, 1);
// @ts-expect-error
xtend({}, {}, {}, {}, {}, 1);

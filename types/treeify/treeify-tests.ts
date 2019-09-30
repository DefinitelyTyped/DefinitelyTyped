import { asTree, asLines } from 'treeify';

function log(s: string): void {}

// $ExpectType string | undefined
asTree(null);

// $ExpectType string | undefined
asTree(undefined);

// $ExpectType string | undefined
asTree([0, { foo: 'bar' }, 2], true);
// ├─ 0: 0
// ├─ 1
// │  └─ foo: bar
// └─ 2: 2

// $ExpectType string | undefined
asTree([0, { foo: 'bar' }, 2]);
// ├─ 0
// ├─ 1
// │  └─ foo
// └─ 2

// $ExpectType string | undefined
asTree(
    {
        apples: 'gala', //      ├─ apples: gala
        oranges: 'mandarin' //  └─ oranges: mandarin
    },
    true,
    true
);

// $ExpectType string | undefined
asLines(
    {
        apples: 'gala', //                       ├─ apples: gala
        oranges: 'mandarin', //                  ├─ oranges: mandarin
        grapes: {  //                            └─ grapes
            seedless: 'Thompson, Selma Pete', //     ├─ seedless: Thompson, Selma Pete
            seeded: 'concord' //                     └─ seeded: Concord
        }
    },
    true,
    log
);

// $ExpectType string | undefined
asLines(
    {
        apples: 'gala', //      ├─ apples: gala
        oranges: 'mandarin' //  └─ oranges: mandarin
    },
    true,
    false,
    log
);

import * as treeify from 'treeify';

function log(s: string): void {}

treeify.asTree(
    {
        apples: 'gala', //      ├─ apples: gala
        oranges: 'mandarin' //  └─ oranges: mandarin
    },
    true,
    true
);

treeify.asLines(
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

treeify.asLines(
    {
        apples: 'gala', //      ├─ apples: gala
        oranges: 'mandarin' //  └─ oranges: mandarin
    },
    true,
    false,
    log
);

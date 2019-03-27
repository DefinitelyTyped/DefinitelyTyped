import activeWin = require('active-win');

// $ExpectType Promise<Result>
activeWin();
// $ExpectType Result
activeWin.sync();

let win = {
    title: 'Unicorns - Google Search',
    id: 5762,
    owner: {
        name: 'Google Chrome',
        processId: 310,
    },
};

win = activeWin.sync();

import { DataFrame } from 'dataframe-js';

function test() {
    const dt = new DataFrame(
        {
            column1: [3, 6, 8],
            column2: [3, 4, 5, 6],
        },
        ['column1', 'column2'],
    );

    return dt.toJSON();
}

test();

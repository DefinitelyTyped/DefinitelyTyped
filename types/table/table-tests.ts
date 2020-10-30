import * as table from 'table';

const border: table.TableBorder = table.getBorderCharacters('norc');

const data = [
    ['first name', 'last name'],
    ['jane', 'doe'],
    ['john', 'doe'],
];

const config: table.TableUserConfig = {
    border,
    columnDefault: {
        width: 50,
    },
    columnCount: 3,
    columns: {
        0: {
            width: 10,
            alignment: 'right',
        },
        1: {
            alignment: 'center',
        },
        2: {
            width: 10,
        },
    },
    drawHorizontalLine: (index, size) => index === 0 || index === 1 || index === size - 1 || index === size,
};

table.table(data, config);

const stream = table.createStream(config);
stream.write(['john', 'john']);

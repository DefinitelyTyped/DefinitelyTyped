import * as table from 'table';

const border: table.JoinStruct = table.getBorderCharacters('norc');

const data = [
    ['first name', 'last name'],
    ['jane', 'doe'],
    ['john', 'doe']
];

const config: table.TableUserConfig = {
    border,
    columnCount: 1,
    drawHorizontalLine: () => true
};

table.table(data, config);

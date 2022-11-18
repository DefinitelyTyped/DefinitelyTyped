import Table = require('cli-table');

/**
 * Example.
 */

/* col widths */
const table = new Table({
    head: ['Rel', 'Change', 'By', 'When'],
    colWidths: [6, 21, 25, 17],
});

table.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago'],
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago'],
);

table.toString();

/* compact */
const table1 = new Table({
    head: ['Rel', 'Change', 'By', 'When'],
    colWidths: [6, 21, 25, 17],
    style: { compact: true, 'padding-left': 1 },
});

table1.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago'],
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago'],
    [],
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago'],
);

/* headless */
const headless_table = new Table();
headless_table.push(['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']);
/* vertical */
const vertical_table = new Table();
vertical_table.push({ 'Some Key': 'Some Value' }, { 'Another much longer key': 'And its corresponding longer value' });
/* cross */
const cross_table = new Table({ head: ['', 'Header #1', 'Header #2'] });
cross_table.push({ 'Header #3': ['Value 1', 'Value 2'] }, { 'Header #4': ['Value 3', 'Value 4'] });

// Initialize rows in constructor
const table2 = new Table({
    rows: [
        ['What', 'An'],
        ['Awesome', 'Table'],
    ],
});

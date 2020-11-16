import jexcel = require('jexcel');

/**
 * @see https://bossanova.uk/jexcel/v3/docs/getting-started
 */
/**
 * Initialization
 */
const data = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

let instance: jexcel.JExcelElement = jexcel(document.getElementById('my-spreadsheet') as HTMLDivElement, {
    data,
    columns: [
        { title: 'Model', width: 300 },
        { title: 'Price', width: 80 },
        { title: 'Model', width: 100 },
    ],
});

instance = jexcel(document.getElementById('my-spreadsheet') as HTMLDivElement, {
    url: 'data.json',
    columns: [
        { title: 'Model', width: 300 },
        { title: 'Price', width: 80 },
        { title: 'Model', width: 100 },
    ],
});

instance = jexcel(document.getElementById('my-spreadsheet') as HTMLDivElement, {
    csv: 'demo.csv',
    csvHeaders: true,
    columns: [{ width: 300 }, { width: 80 }, { width: 100 }],
});

/**
 * Destroying a table
 */
instance = jexcel(document.getElementById('my-spreadsheet') as HTMLDivElement, {
    csv: 'demo.csv',
    csvHeaders: true,
    columns: [{ width: 300 }, { width: 80 }, { width: 100 }],
});

// If second argument is true will destroy all handlers and you can't create any other instance.
jexcel.destroy(document.getElementById('my-spreadsheet'), true);

/**
 * Header titles
 */
instance = jexcel(document.getElementById('myTable') as HTMLDivElement, {
    data,
    columns: [{ title: 'Model' }, { title: 'Price' }, { title: 'Model' }],
});

instance = jexcel(document.getElementById('spreadsheet') as HTMLDivElement, {
    data,
    columns: [
        { type: 'autocomplete', title: 'Country', width: 300, url: '/jexcel/countries' },
        {
            type: 'dropdown',
            title: 'Food',
            width: 150,
            source: ['Apples', 'Bananas', 'Carrots', 'Oranges', 'Cheese'],
        },
        { type: 'checkbox', title: 'Stock', width: 100 },
    ],
    nestedHeaders: [
        [{ title: 'Supermarket information', colspan: 3 }],
        [
            { title: 'Location', colspan: 1 },
            { title: ' Other Information', colspan: 2 },
        ],
    ],
});

/**
 * Column width
 */
instance = jexcel(document.getElementById('myTable') as HTMLDivElement, {
    data,
    columns: [
        { title: 'Model', width: 300 },
        { title: 'Price', width: 80 },
        { title: 'Model', width: 100 },
    ],
});

/**
 * Row height
 */
instance = jexcel(document.getElementById('myTable') as HTMLDivElement, {
    data,
    rows: { 3: { height: '500px' } },
    rowResize: true,
});

/**
 * Column types
 */
instance = jexcel(document.getElementById('myTable') as HTMLDivElement, {
    data,
    columns: [
        { title: 'Model', width: 300, type: 'text' },
        { title: 'Price', width: 80, type: 'numeric' },
        { title: 'Date', width: 100, type: 'calendar', options: { format: 'DD/MM/YYYY' } },
        { title: 'Photo', width: 150, type: 'image' },
        { title: 'Condition', width: 150, type: 'dropdown', source: ['New', 'Used'] },
        { title: 'Color', width: 80, type: 'color' },
        { title: 'Available', width: 80, type: 'checkbox' },
    ],
});

const options: jexcel.CalendarOptions = {
    // Date format
    format: 'DD/MM/YYYY',
    // Allow keyboard date entry
    readonly: false,
    // Today is default
    today: false,
    // Show timepicker
    time: false,
    // Show the reset button
    resetButton: true,
    // Placeholder
    placeholder: '',
    // Translations can be done here
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdays_short: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    // Value
    value: undefined,
    // Events
    onclose: undefined,
    onchange: undefined,
    // Fullscreen (this is automatic set for screensize < 800)
    fullscreen: false,
};

const data2 = [
    ['PHP', '14:00'],
    ['Javascript', '16:30'],
];

const customColumn: jexcel.ColumnEditor = {
    // Methods
    closeEditor: (cell: any, save: any) => {
        const value = cell.children[0].value;
        cell.innerHTML = value;
        return value;
    },
    openEditor: (cell: any) => {
        // Create input
        const element = document.createElement('input');
        element.value = cell.innerHTML;
        // Update cell
        cell.classList.add('editor');
        cell.innerHTML = '';
        cell.appendChild(element);
        // NOTE: This test is independent of jQuery
        // $(element).clockpicker({
        //     afterHide: function () {
        //         setTimeout(function () {
        //             // To avoid double call
        //             if (cell.children[0]) {
        //                 myTable.closeEditor(cell, true);
        //             }
        //         });
        //     },
        // });
        // Focus on the element
        element.focus();
    },
    getValue: (cell: any) => {
        return cell.innerHTML;
    },
    setValue: (cell: any, value: any) => {
        cell.innerHTML = value;
    },
};

instance = jexcel(document.getElementById('custom') as HTMLDivElement, {
    data: data2,
    columns: [
        { type: 'text', title: 'Course Title', width: 300 },
        { type: 'text', title: 'Time', width: 100, editor: customColumn },
    ],
});

/**
 * Define a minimum table dimension size.
 */
const data3 = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

instance = jexcel(document.getElementById('minExample') as HTMLDivElement, {
    data: data3,
    minDimensions: [10, 5],
});

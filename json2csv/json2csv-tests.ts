import * as json2csv from 'json2csv';

/// <reference types="node" />

import * as fs from 'fs';

let stringVal: string;

interface TestObject {
    a: string;
    b: string;
    c: string;
}

let field: json2csv.Field = {
    value: 'b',
};
field.label = 'B';
field.default = 'default B';

let callbackField: json2csv.CallbackField<TestObject> = {
    value: (row, field, data) => row.c,
};
callbackField.label = 'C';
callbackField.default = 'default C';

let testdatas: TestObject[] = [
    {
        a: 'a str 1',
        b: 'b str 1',
        c: 'c str 1',
    },
    {
        a: 'a str 2',
        b: 'b str 2',
        c: 'c str 2',
    },
];

let opts: json2csv.Options<TestObject> = {
    data: testdatas,
};
opts.fields = [
    'a',
    field,
    callbackField,
];
opts.fieldNames = [
    'A',
    'B',
    'C',
];
opts.del = ',';
opts.defaultValue = 'NULL';
opts.quotes = '"';
opts.doubleQuotes = '"';
opts.hasCSVColumnTitle = false;
opts.eol = '\r\n';
opts.newLine = '\r\n';
opts.flatten = false;
opts.unwindPath = '';
opts.excelStrings = false;
opts.includeEmptyRows = true;

stringVal = json2csv(opts);
json2csv(opts, (err, csv) => {
    return;
});

// From https://github.com/zemirco/json2csv/blob/master/README.md#how-to-use
function howToUse() {
    var myData = [
        {
            field1: 'Field 1',
            field2: 'Field 2',
            field3: 'Field 3',
        },
    ];
    var fields = ['field1', 'field2', 'field3'];

    try {
        var result = json2csv({ data: myData, fields: fields });
        console.log(result);
    } catch (err) {
        // Errors are thrown for bad options, or if the data is empty and no fields are provided.
        // Be sure to provide fields if it is possible that your data array will be empty.
        console.error(err);
    }
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-fields-option
function exampleFieldsOption() {
    let exampleOpts: json2csv.Options<{
        path1: string;
        path2: string;
    }>;
    exampleOpts.fields = [
        // Supports label -> simple path
        {
            label: 'some label', // (optional, column will be labeled 'path.to.something' if not defined)
            value: 'path.to.something', // data.path.to.something
            default: 'NULL' // default if value is not found (optional, overrides `defaultValue` for column)
        },

        // Supports label -> derived value
        {
            label: 'some label', // Supports duplicate labels (required, else your column will be labeled [function])
            value: function(row, field, data) {
                // field = { label, default }
                // data = full data object
                return row.path1 + row.path2;
            },
            default: 'NULL' // default if value function returns null or undefined
        },

        // Support pathname -> pathvalue
        'simplepath', // equivalent to {value:'simplepath'}
        'path.to.value' // also equivalent to {label:'path.to.value', value:'path.to.value'}
    ];
}

var myCars = [
    {
        "car": "Audi",
        "price": 40000,
        "color": "blue"
    }, {
        "car": "BMW",
        "price": 35000,
        "color": "black"
    }, {
        "car": "Porsche",
        "price": 60000,
        "color": "green"
    }
];

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-1
function example1() {
    var fields = ['car', 'price', 'color'];
    var csv = json2csv({ data: myCars, fields: fields });

    fs.writeFile('file.csv', csv, function(err: any) {
        if (err) throw err;
        console.log('file saved');
    });
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-2
function example2() {
    var fields = ['car', 'color'];

    json2csv({ data: myCars, fields: fields }, function(err, csv) {
        if (err) console.log(err);
        console.log(csv);
    });
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-3
function example3() {
    var fields = ['car', 'price', 'color'];
    var tsv = json2csv({ data: myCars, fields: fields, del: '\t' });

    console.log(tsv);
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-4
function example4() {
    var fields = ['car', 'price'];
    var fieldNames = ['Car Name', 'Price USD'];
    var csv = json2csv({ data: myCars, fields: fields, fieldNames: fieldNames });

    console.log(csv);
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-5
function example5() {
    var fields = ['car', 'price'];
    var fieldNames = ['Car Name', 'Price USD'];
    var opts = {
        data: myCars,
        fields: fields,
        fieldNames: fieldNames,
        quotes: ''
    };
    var csv = json2csv(opts);

    console.log(csv);
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-6
function example6() {
    var fields = ['car.make', 'car.model', 'price', 'color'];
    var myCars = [
        {
            "car": {"make": "Audi", "model": "A3"},
            "price": 40000,
            "color": "blue"
        }, {
            "car": {"make": "BMW", "model": "F20"},
            "price": 35000,
            "color": "black"
        }, {
            "car": {"make": "Porsche", "model": "9PA AF1"},
            "price": 60000,
            "color": "green"
        }
    ];
    var csv = json2csv({ data: myCars, fields: fields });

    fs.writeFile('file.csv', csv, function(err: any) {
        if (err) throw err;
        console.log('file saved');
    });
}

// From https://github.com/zemirco/json2csv/blob/master/README.md#example-7
function example7() {
    var fields = ['carModel', 'price', 'colors'];
    var myCars = [
        {
            "carModel": "Audi",
            "price": 0,
            "colors": ["blue","green","yellow"]
        }, {
            "carModel": "BMW",
            "price": 15000,
            "colors": ["red","blue"]
        }, {
            "carModel": "Mercedes",
            "price": 20000,
            "colors": "yellow"
        }, {
            "carModel": "Porsche",
            "price": 30000,
            "colors": ["green","teal","aqua"]
        }
    ];
    var csv = json2csv({ data: myCars, fields: fields, unwindPath: 'colors' });

    fs.writeFile('file.csv', csv, function(err: any) {
        if (err) throw err;
        console.log('file saved');
    });
}

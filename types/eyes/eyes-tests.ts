
import eyes = require('eyes');

var testObj = {
    color: 'red',
    num: 227
}

eyes.inspect(testObj)

var options = {
    styles: {                
        all: 'green',
        label: 'red',
        other: 'red',
        key: 'red',
        special: 'red',
        'string': 'red',
        'number': 'red',
        bool: 'red',
        regexp: 'red'
    },

    pretty: false,         
    hideFunctions: true,  
    stream: process.stdout,
    maxLength: 120
}

var result = eyes.inspector(options)




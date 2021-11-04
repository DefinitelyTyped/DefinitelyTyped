import tableify = require('tableify');

const html = tableify({
    someArrayOfObjects: [
        {a: 1, b: 2, c: 3}
        , {a: 2, b: 3, c: 4}
        , {a: 3, b: 4, c: 5}
    ]
    , someObject: {
        key1: 'value1'
        , someArray: [
            'value2'
            , 'value3'
            , 'value4'
            , 'value5'
        ]
        , someArrayOfObjects: [
            {key2: 123}
            , {key2: 234}
            , {key2: 345}
        ]
    }
});

html;

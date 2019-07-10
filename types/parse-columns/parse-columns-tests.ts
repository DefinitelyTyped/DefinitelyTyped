import parseColumns = require('parse-columns');

// $ExpectType { [key: string]: string; }[]
parseColumns('foo');
// $ExpectType { [key: string]: string; }[]
parseColumns('foo', { separator: ' ' });
// $ExpectType { [key: string]: string; }[]
parseColumns('foo', { headers: ['foo', 'bar'] });
// $ExpectType { [key: string]: string | number; }[]
parseColumns('foo', {
    transform(el, header, columnIndex, rowIndex) {
        // $ExpectType string
        el;
        // $ExpectType string
        header;
        // $ExpectType number
        columnIndex;
        // $ExpectType number
        rowIndex;

        if (columnIndex >= 1 && columnIndex <= 3) {
            return Number(el);
        }

        return el;
    },
});

import table = require('text-table');

let output: string;

output = table([
    ['master', '0123456789abcdef'],
    ['staging', 'fedcba9876543210']
]);

output = table(
    [
        ['0.1.2'],
        ['11.22.33'],
        ['5.6.7'],
        ['1.22222'],
        ['12345.'],
        ['5555.'],
        ['123']
    ],
    { align: ['.'] }
);

output = table(
    [
        ['beep', '1024'],
        ['boop', '334.212'],
        ['foo', '1006'],
        ['bar', '45.6'],
        ['baz', '123.']
    ],
    { align: ['l', '.'] }
);

output = table(
    [
        ['beep', '1024', 'xyz'],
        ['boop', '3388450', 'tuv'],
        ['foo', '10106', 'qrstuv'],
        ['bar', '45', 'lmno']
    ],
    { align: ['l', 'c', 'l'] }
);

output = table(
    [
        ['Red', 'Green', 'Blue'],
        ['Bold', 'Underline', 'Italic'],
        ['Inverse', 'Strike', 'Blink'],
        ['bar', '45', 'lmno']
    ],
    {
        align: ['l', 'c', 'l'],
        stringLength: s => s.length
    }
);

output = table(
    [
        ['beep', '1024'],
        ['boop', '33450'],
        ['foo', '1006'],
        ['bar', '45']
    ],
    { align: ['l', 'r'] }
);

output = table(
    [
        ['true', true],
        ['false', false],
        ['foo', 1006],
        ['bar', {}]
    ],
    { align: ['l', 'r'] }
);

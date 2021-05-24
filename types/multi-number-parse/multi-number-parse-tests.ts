import parse from 'multi-number-parse';

let result: number;

result = parse('2,543.56', '.'); // returns 2543.56
result = parse('10 654.1234'); // returns 10654.1234
result = parse('2.654$10'); // returns 2654.1
result = parse('2,45EUR'); // extra stuff at the end is stripped, returns 2.45
result = parse('-2,543.56'); // negative numbers are OK, returns -2543.56
result = parse('10 345,234.21'); // returns NaN, too many different separators
result = parse('1.123.234,534,234'); // returns NaN, impossible to detect the decimal separator
result = parse('10.4,2'); // returns NaN, malformed digit groups
result = parse('1.123.2'); // returns NaN, also malformed digit groups
result = parse(1337); // returns 1337

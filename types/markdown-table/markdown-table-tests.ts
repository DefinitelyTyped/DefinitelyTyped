import table, { Options } from 'markdown-table';

table([[''], ['']]); // $ExpectType string
table([], {}); // $ExpectType string

table(['']); // $ExpectError
table(); // $ExpectError
table({}); // $ExpectError

const options: Options = {
    align: '',
    padding: true,
    delimiterStart: true,
    delimiterEnd: true,
    alignDelimiters: true,
    stringLength: _ => 0
};
options.align = [''];

table([], options); // $ExpectType string

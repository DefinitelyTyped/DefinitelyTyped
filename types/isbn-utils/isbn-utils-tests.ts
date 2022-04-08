import * as isbn from 'isbn-utils';

const isbn10a: isbn.ISBN|null = isbn.parse('4873113369');
let b: boolean;
let s: string;

if (isbn10a !== null) {
    b = isbn10a.isIsbn10();
    b = isbn10a.isIsbn13();
    s = isbn10a.asIsbn10();
    s = isbn10a.asIsbn10(true);
    s = isbn10a.asIsbn13();
    s = isbn10a.asIsbn13(true);
    s = isbn10a.codes.source;
    s = isbn10a.codes.prefix;
    s = isbn10a.codes.group;
    s = isbn10a.codes.publisher;
    s = isbn10a.codes.article;
    s = isbn10a.codes.check;
    s = isbn10a.codes.check10;
    s = isbn10a.codes.check13;
    s = isbn10a.codes.groupname;
}

const bad: isbn.ISBN|null = isbn.parse('invalid format');
if (bad === null) {
  s = 'Bummer.';
}

s = isbn.asIsbn13('4-87311-336-9');
s = isbn.asIsbn13('4-87311-336-9', true);
s = isbn.asIsbn10('978-4-87311-336-4');
s = isbn.asIsbn10('978-4-87311-336-4', true);

s = isbn.hyphenate('9784873113364');

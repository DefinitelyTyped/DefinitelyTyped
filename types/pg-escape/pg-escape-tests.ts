import escape = require('pg-escape');

escape('INSERT INTO %I VALUES(%L)', 'books', "O'Reilly");
escape.string("ab'cd");
escape.dollarQuotedString("ab'cd");
escape.ident('1234');
escape.literal('1234');

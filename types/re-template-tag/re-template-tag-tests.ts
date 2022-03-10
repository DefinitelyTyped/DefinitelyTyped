import { quoteText, re } from 're-template-tag';

re`/^${/^$/}$/u`; // $ExpectType RegExp
re`/^${'foo'}$/u`; // $ExpectType RegExp
re`/^${1}$/u`; // $ExpectError

quoteText('foo'); // $ExpectType string

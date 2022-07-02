import { quoteText, re } from 're-template-tag';

re`/^${/^$/}$/u`; // $ExpectType RegExp
re`/^${'foo'}$/u`; // $ExpectType RegExp
// @ts-expect-error
re`/^${1}$/u`;

quoteText('foo'); // $ExpectType string

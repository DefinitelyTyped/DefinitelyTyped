import * as commentJson from 'comment-json';

const result = commentJson.parse(`
/**
 block comment at the top
 */
// comment at the top
{
  // comment for a
  // comment line 2 for a
  /* block comment */
  "a": 1 // comment at right
}
// comment at the bottom
`);
const str = commentJson.stringify(result);

const numericallyIndexed = commentJson.stringify(result, (key, value) => {
return key && Number.isInteger(Number(key))
    ? value
    : undefined;
});

const whiteListed = commentJson.stringify(result, ['a', 1]);

import { validate, format, createDidYouMeanMessage } from 'jest-validate';

validate(
  { a: 0 },
  {
    condition: () => false,
    exampleConfig: { a: 1, b: 2 },
  },
);

const formatted = format({ c: 3 });

const didYouMeanMessage = createDidYouMeanMessage('bbb', ['aaa', 'ccc']);

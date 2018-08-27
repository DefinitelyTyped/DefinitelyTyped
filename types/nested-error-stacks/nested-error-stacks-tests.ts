import NestedErrorStacks from 'nested-error-stacks';

const error = new NestedErrorStacks('Top level error', new Error('Nested error'));
console.log(error);
console.log(error.message);
console.log(error.name);
console.log(error.stack);

import { sizeof, format } from 'sizeof';

const anyObject = {
  key: {
    name: 'abc',
    age: 123,
    active: true,
  },
};

console.log(sizeof(anyObject) + 0); // 50
console.log(sizeof(anyObject, false) + 0); // 50
console.log(sizeof(anyObject, true)); // 50B
console.log(format(50)); // 50B

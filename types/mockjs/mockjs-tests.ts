import Mock = require('mockjs');

Mock.mock('/test', 'get', {
  name: 'mockjs'
})
.mock('/login', 'post', {
  status: 0
});
// When request '/test' will response {name: 'mockjs'}
// When request '/login' will response {status: 0}

const Random = Mock.Random;
console.log(Random.cfirst()); // get one chinese word
console.log(Random.string('hello', 1, 3)); // get 1-3 words from 'hello'
console.log(Random.email()); // get a string like email

Mock.setup({
  timeout: '100-400'
});
// When do some request, there were 100-400ms delay until get response

const template = {
  'age|10-40': 1
};

const data = {
  age: 30
};

console.log(Mock.valid(template, data));

console.log(Mock.toJSONSchema(template));

console.log(Mock.version);

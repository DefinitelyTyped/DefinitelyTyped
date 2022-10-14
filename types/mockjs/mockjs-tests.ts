import Mock = require('mockjs');

Mock.mock('/test', 'get', {
    name: 'mockjs',
}).mock('/login', 'post', {
    status: 0,
}).mock('/test', 'get', (config) => {
    console.log(config.url);
    console.log(config.type);
    console.log(config.body);
    return {
        name: 'mockjs',
    };
});
// When request '/test' will response {name: 'mockjs'}
// When request '/login' will response {status: 0}

const Random = Mock.Random;
console.log(Random.cfirst()); // get one chinese word
console.log(Random.string('hello', 1, 3)); // get 1-3 words from 'hello'
console.log(Random.email()); // get a string like email

Random.extend({
    constellation() {
        const constellations = [
            '白羊座',
            '金牛座',
            '双子座',
            '巨蟹座',
            '狮子座',
            '处女座',
            '天秤座',
            '天蝎座',
            '射手座',
            '摩羯座',
            '水瓶座',
            '双鱼座',
        ];
        return this.pick(constellations);
    },
});
console.log(Random.constellation()); // get a constellations which is a custom random value

Mock.setup({
    timeout: '100-400',
});
// When do some request, there were 100-400ms delay until get response

const template = {
    'age|10-40': 1,
};

const data = {
    age: 30,
};

console.log(Mock.valid(template, data));

console.log(Mock.toJSONSchema(template));

console.log(Mock.version);

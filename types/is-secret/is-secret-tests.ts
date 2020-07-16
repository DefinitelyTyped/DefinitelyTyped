import isSecret = require('is-secret');

interface Data {
    username: string;
    password: string;
    card: string;
}

const data: Data = {
    username: 'watson',
    password: 'f8bY2fg8',
    card: '1234 1234 1234 1234', // credit card number
};

if (isSecret.key('password') || isSecret.value(data.password)) {
    data.password = '********';
}

isSecret.key('secret-key'); // $ExpectType boolean
isSecret.value('secret-value'); // $ExpectType boolean

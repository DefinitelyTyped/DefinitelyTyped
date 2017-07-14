import {IncomingMessage} from 'http';
import auth = require('basic-auth');

const loginData = auth(undefined! as IncomingMessage);
if (loginData) {
    const {name, pass} = loginData;
}

const parsed = auth.parse('Basic QmFzaWM6QXV0aA==');
if (parsed) {
    const {name, pass} = parsed;
}

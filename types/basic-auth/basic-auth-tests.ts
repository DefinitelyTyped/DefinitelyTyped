import {IncomingMessage} from 'http';
import auth = require('basic-auth');

const loginData = auth(undefined! as IncomingMessage);
if (loginData) {
    const {name, pass} = loginData;
}

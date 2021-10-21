import 'ual-plainjs-renderer';

import { UALJs } from 'index';

const callback = () => void 0;

const ual = new UALJs(callback, [], 'app', []);

ual.init.bind(ual);
ual.loginUser.bind(ual);
ual.logoutUser.bind(ual);
ual.isAutologin.valueOf();
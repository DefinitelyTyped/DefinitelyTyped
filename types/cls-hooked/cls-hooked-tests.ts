import * as http from 'http';
import * as cls from 'cls-hooked';

const session = cls.createNamespace('my session');
const user = { id: 'foo' };
session.set('user', user);
session.run((value: number) => {
    session.set('value', value);
});
http.createServer((req, res) => {
    session.bindEmitter(req);
    session.bindEmitter(res);
});
function bindLater(callback: (x: number) => number) {
    return session.bind(callback, session.createContext());
}

bindLater((x: number) => {
    return x;
})(123);  // passing argument 'abc' should get compile error

const session2 = cls.getNamespace('my session');
session2.get('user');

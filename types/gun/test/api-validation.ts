//#region Import test

// Make sure require works
import GunRequire = require('gun');
new GunRequire().bye;

import Gun from 'gun';
import GunBrowser from 'gun/gun';
{
    // They should be the same type.
    const gun: typeof Gun = GunBrowser;
}
//#endregion

//#region Node Server
import http from 'http';
{
    const server = http.createServer().listen(8080);
    Gun({ web: server });
}
//#endregion

//#region Constructor
Gun();
new Gun();
new Gun('http://...');
new Gun(['....']);
new Gun({
    file: './data.json',
    localStorage: false,
    peers: {
        ['https://...']: {},
    },
});
//#endregion

interface AppState {
    object: {
        num: number;
        str: string;
        /** Comment test */
        bool: boolean;
        literalChar: 'a' | 'b';
        obj: {
            arr2: Array<{ foo: number; bar: string }>;
        };
        arr: Array<{ a: number }>;
    };
    chatRoom: Array<{ by: string; message: string }>;
    whatever: object;
}
const tsGun = new Gun<AppState>();
// Types should works in JavaScript
const jsGun = new Gun();

//#region Put test
tsGun.get('object').put({ literalChar: 'a' });
jsGun.get('object').put({ literalChar: 'a' });
// $ExpectError
tsGun.get('chatRoom').put({ by: '' });

// Put should accept gun instance
// $ExpectError
tsGun.get('object').put(tsGun);
tsGun.get('object').put(tsGun.get('object'));

// Put should reject Array, Symbol and any functions.
// // $ExpectError but can't write such a type.
tsGun.get('whatever').put([1]);
// $ExpectError
jsGun.get('whatever').put([]);
// $ExpectError
tsGun.get('whatever').put(Symbol());
// $ExpectError
jsGun.get('whatever').put(Symbol());
// // $ExpectError but can't write such a type.
tsGun.get('whatever').put(() => {});
// $ExpectError
jsGun.get('whatever').put(() => {});
// // $ExpectError but can't write such a type.
tsGun.get('whatever').put(new Set());
// $ExpectError
jsGun.get('whatever').put(new Set());

// Put should reject primitive values on the top level.
// $ExpectError
tsGun.put(1);
// $ExpectError
jsGun.put(1);
// $ExpectError
tsGun.get('whatever').put(1);
// $ExpectError
jsGun.get('whatever').put(1);
tsGun
    .get('object')
    .get('literalChar')
    .put('a');
jsGun
    .get('whatever')
    .get('test')
    .put(1);
//#endregion

//#region Get test
tsGun.get('object').get('obj', (a, b) => {});
// $ExpectError
tsGun.get('object').get('aaaa', (a, b) => {});
jsGun.get('object').get('obj', (a, b) => {});

// Put should accept gun instance
tsGun.get('object').get(tsGun.get('object'));
tsGun.get('object').get(tsGun.get('object'));
//#endregion

//#region Opt test
tsGun.opt({ localStorage: true });
jsGun.opt({ localStorage: true });
//#endregion

//#region Back test

// Reject calls on top level
// $ExpectError
tsGun.back(-1);
// $ExpectError
jsGun.back(-1);

tsGun
    .get('chatRoom')
    .back(Infinity)
    .back(Infinity);
jsGun
    .get('chatRoom')
    .back(Infinity)
    .back(Infinity);
//#endregion

//#region On test
tsGun.get('object').on(
    (data, key) => {
        if (data === undefined) return;
        // TODO: this is bad. We should transform it.
        data.arr.fill({ a: 8 });
    },
    { change: true },
);
jsGun.get('object').on((data, key) => {
    data.abcdefg;
}, true);

// should ban .on() on top level
tsGun.on((data, key) => {
    // $ExpectError
    data.object.literalChar;
});
jsGun.on(data => {
    // $ExpectError
    data.object;
});
//#endregion

//#region Once test
tsGun.get('object').once(
    (data, key) => {
        if (data === undefined) return;
        // TODO: this is bad. We should transform it.
        data.arr.concat;
    },
    { wait: 23 },
);
jsGun.get('object').once((data, key) => {
    data.abcdefg;
});

// should ban .once() on top level
tsGun.once((data, key) => {
    // $ExpectError
    data.object.literalChar;
});
jsGun.once(data => {
    // $ExpectError
    data.object;
});
//#endregion

//#region Set test
tsGun.get('chatRoom').set({ by: 'me', message: 'data' });
jsGun.get('chatRoom').set({ by: 'me', message: 'data' });

// Set should reject primitive values
// $ExpectError
tsGun.get('chatRoom').set(1);
// $ExpectError
tsGun.get('chatRoom').set(false);
// $ExpectError
tsGun.get('chatRoom').set('aaa');
// $ExpectError
tsGun.get('chatRoom').set(1);
// $ExpectError
tsGun.get('chatRoom').set([]);
// $ExpectError
jsGun.get('chatRoom').set([]);
// $ExpectError
jsGun.get('chatRoom').set(1);
// $ExpectError
jsGun.get('chatRoom').set(false);
// $ExpectError
jsGun.get('chatRoom').set('aaa');
// $ExpectError
jsGun.get('chatRoom').set(1);
//#endregion

//#region Map test
tsGun.get('chatRoom').map();
jsGun.get('chatRoom').map();
tsGun.get('chatRoom').map(node => node);
jsGun.get('chatRoom').map(node => node);
//#endregion

//#region Not test
tsGun.get('chatRoom').not!(val => {});
jsGun.get('chatRoom').not!(val => {});

// Should ban calls on the top level;
// $ExpectError
tsGun.not!(() => {});
// $ExpectError
jsGun.not!(() => {});
//#endregion

//#region Then test
tsGun.get('object').once().then!().then(val => {
    val.bool;
});
jsGun.get('object').once().then!().then(val => {
    val.bool;
});
//#endregion

//#region Promise test
tsGun.get('object').once().promise!().then(val => {
    val.gun;
});
jsGun.get('object').once().promise!().then(val => {
    val.gun;
});
//#endregion

//#region Bye test
tsGun.bye!().put({ abc: 1 });
jsGun.bye!().put({ abc: 1 });
// $ExpectError
tsGun.bye!().put(1);
// $ExpectError
jsGun.bye!().put(1);
//#endregion

//#region Later test
tsGun.get('object').later!(function(data, key) {
    this.get('arr');
    if (!data) return;
    data.arr;
    key;
}, 15);
jsGun.get('object').later!(function(data, key) {
    this.get('arr');
    data.arr;
    key;
}, 15);
tsGun.later!(data => {
    // $ExpectError
    data.any;
}, 5);
jsGun.later!(data => {
    // $ExpectError
    data.any;
}, 5);
//#endregion

//#region Unset test
tsGun.get('chatRoom').unset!({ by: 'me', message: 'data' });
jsGun.get('chatRoom').unset!({ by: 'me', message: 'data' });

// Set should reject primitive values
// $ExpectError
tsGun.get('chatRoom').unset!(1);
// $ExpectError
tsGun.get('chatRoom').unset!(false);
// $ExpectError
tsGun.get('chatRoom').unset!('aaa');
// $ExpectError
tsGun.get('chatRoom').unset!(1);
// $ExpectError
tsGun.get('chatRoom').unset!([]);
// $ExpectError
jsGun.get('chatRoom').unset!([]);
// $ExpectError
jsGun.get('chatRoom').unset!(1);
// $ExpectError
jsGun.get('chatRoom').unset!(false);
// $ExpectError
jsGun.get('chatRoom').unset!('aaa');
// $ExpectError
jsGun.get('chatRoom').unset!(1);
//#endregion

//#region Time test
tsGun.get('chatRoom').time!((data, key, time) => {
    data.by;
    data.message;
}, 20);
jsGun.get('chatRoom').time!((data, key, time) => {
    data.by;
    data.message;
}, 20);
tsGun.get('chatRoom').time!({ by: '233', message: '233' });
jsGun.get('chatRoom').time!({ by: '233', message: '233' });
//#endregion

//#region simple api tests
tsGun.off();
jsGun.off();
tsGun.path!('');
jsGun.path!('');
tsGun.path!(['']);
jsGun.path!(['']);
//#endregion

//#region // TODO: to be tested
tsGun.open!(state => {});
jsGun.open!(state => {});
tsGun.load!(state => {});
jsGun.load!(state => {});
//#endregion

// -----------------------------------------------
// ---------- Core API Tests are ended -----------
// ---------- Following are User tests -----------
// -----------------------------------------------

//#region User test
tsGun.get('chatRoom').create('jack', 'password', ack => {
    if ('ok' in ack) console.log(ack.pub);
    else console.error(ack.err);
});
jsGun.get('chatRoom').create('jack', 'password', ack => {
    if ('ok' in ack) console.log(ack.pub);
    else console.error(ack.err);
});

tsGun.get('chatRoom').auth('jack', 'password', ack => {
    if ('err' in ack) console.error(ack.err);
    else {
        ack.sea;
    }
});
jsGun.get('chatRoom').auth('jack', 'password', ack => {
    if ('err' in ack) console.error(ack.err);
    else {
        ack.sea;
    }
});

tsGun.get('chatRoom').pair();
jsGun.get('chatRoom').pair();
tsGun.get('chatRoom').leave();
jsGun.get('chatRoom').leave();
tsGun.get('chatRoom').delete('jack', 'password', () => {});
jsGun.get('chatRoom').delete('jack', 'password', () => {});
tsGun.get('chatRoom').recall({ sessionStorage: false }, cb => {});
jsGun.get('chatRoom').recall({ sessionStorage: false }, cb => {});
tsGun.get('chatRoom').user('');
//#endregion

// -----------------------------------------------
// ---------- User API Tests are ended -----------
// ---------- Following are static tests ---------
// -----------------------------------------------

//#region static methods on Gun
declare const x: any;
if (Gun.node.is(x)) {
    x.get('');
}
Gun.node.soul(jsGun);
Gun.node.ify(jsGun);

async function SEATest() {
    Gun.SEA.throw = true;
    const pow = await Gun.SEA.work('data', 'pair', undefined, undefined);
    if (pow === undefined) throw new TypeError('Pow failed');
    const keyPair = await Gun.SEA.pair();
    const sign = await Gun.SEA.sign('data,', keyPair!);
    const verify = await Gun.SEA.verify(sign, keyPair!);
    const enc = await Gun.SEA.encrypt('raw', keyPair!);
    const dec = await Gun.SEA.decrypt(enc, keyPair!);
    return [pow, verify, dec];
}
//#endregion

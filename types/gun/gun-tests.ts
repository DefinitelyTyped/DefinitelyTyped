import GunServer = require('gun');
import Gun = require('gun/gun');
import 'gun/lib/path.js';
import 'gun/lib/not.js';
import 'gun/lib/open.js';
import 'gun/lib/load.js';
import 'gun/lib/then.js';
import 'gun/lib/bye.js';
import 'gun/lib/later.js';
import 'gun/lib/unset.js';
import 'gun/lib/time.js';

GunServer('http://yourdomain.com/gun');
Gun(['http://server1.com/gun', 'http://server2.com/gun']);
Gun({
    s3: {
        key: '',
        secret: '',
        bucket: ''
    },
    file: 'file/path.json',
    uuid() {
        return 'xxxxxx';
    }
});

interface AppState {
    object: {
        num: number;
        str: string;
        bool: boolean;
        obj: {
            arr2: Array<{ foo: number; bar: string }>;
        };
    };
    chatRoom: Array<{ by: string; message: string }>;
}

const app = new Gun<AppState>();
app.get('object')
    .get('bool')
    .put(true);
app.get('object')
    .get('num')
    .put(1);
app.get('object')
    .get('obj')
    .get('arr2')
    .set({ foo: 1, bar: '2' });

app.get('object')
    .get('bool')
    // $ExpectError
    .put(1);

app.get('object').on(data => {
    data.bool;
});
app.get('object').off();
app.get('object').once(data => {
    if (data) data.bool;
});
async function name() {
    const data = await app.get('object').promise!();
    data.put.bool;
}
app.get('chatRoom').time!({ by: 'A', message: 'Hello' });
app.get('chatRoom').time!(msg => {
    msg.by;
}, 20);
// $ExpectError
app.get('object').time!({ a: 1 });

/**
 * Here are the codes from gun's document.
 */
// Call by UMD
let gun = Gun();
Gun('http://yourdomain.com/gun');
Gun(['http://server1.com/gun', 'http://server2.com/gun']);
Gun({
    // Amazon S3 (comes bundled)
    s3: {
        key: '',
        secret: '',
        bucket: '',
    },

    // simple JSON persistence (bundled)
    // meant for ease of getting started
    // NOT meant for production
    file: 'file/path.json',

    // set your own UUID function
    uuid() {
        return '';
    },
});
gun.get('something')
    .get('not')
    .get('exist')
    .get('yet')
    .put('Hello World!');
// `.put` will if needed, backwards create a document
// so "Hello World!" has a place to be saved.
gun.get('key').put({
    property: 'value',
    object: {
        nested: true,
    },
});
// strings
gun.get('person')
    .get('name')
    .put('Alice');

// numbers
gun.get('IoT')
    .get('temperature')
    .put(58.6);

// booleans
gun.get('player')
    .get('alive')
    .put(true);

declare const submission: any;
declare const ui: any;
gun.get('survey')
    .get('submission')
    .put(submission, ack => {
        if (ack.err) {
            return ui.show.error(ack.err);
        }
        ui.show.success(true);
    });

declare const data: any;
gun.get('key').put(data); /* same context as */
gun.get('key');

// $ExpectError
Gun().put('oops'); // error
Gun()
    .get('odd')
    // $ExpectError
    .put('oops'); // error

declare const randomUUID: string;
Gun().put({ foo: 'bar' }); // internally becomes...
Gun()
    .get(randomUUID)
    .put({ foo: 'bar' });

Gun()
    .get('user')
    .get('alice')
    .put(data); // internally becomes...
Gun()
    .get('user')
    .put({ alice: data });
// An update to both user and alice happens, not just alice.

let ref = Gun().put({ text: 'Hello world!' });
Gun()
    .get('message')
    .get('first')
    .put(ref);

let sender = Gun().put({ name: 'Tom' });
// $ExpectError
let msg = Gun().put({
    text: 'Hello world!',
    sender, // this will fail
});
// however
msg.get('sender').put(sender); // this will work
Gun().put({
    foo: {
        bar: {
            lol: {
                yay: true,
            },
        },
    },
});

gun.get('key').put({ property: 'value' });

gun.get('key').on((data, key) => {
    // {property: 'value'}, 'key'
});
declare const key: string;
gun.get(key, ack => {
    // called many times
});

// retrieve all available users
gun.get('users')
    .map()
    .on(ui.show.users);
gun.get(key, ack => {
    if ('err' in ack) {
        console.error(ack);
    } else if (!ack.put) {
        // not found
    } else {
        // data!
    }
});

gun.get('user').get('alice'); /* same context as */
gun.get('users').get('alice');

gun = Gun('http://yourdomain.com/gun');
gun.opt({
    uuid() {
        return Math.floor(Math.random() * 4294967296);
    },
});
gun.opt({ peers: ['http://anotherdomain.com/gun'] });
/* Now gun syncs with ['http://yourdomain.com/gun', 'http://anotherdomain.com/gun']. */
gun.get('users')
    /* now change the context to alice */
    .get('alice')
    .put(data)
    /* go back up the chain once, to 'users' */
    .back()
    .map();
gun.get('player')
    .get('game')
    .get('score')
    .back(1);
// is the same as...
gun.get('player').get('game');
gun.get('key').get('property');
/* is not the same as */
gun.get('key')
    .get('property')
    .back();

declare const callback: any;
// add listener to foo
gun.get('foo').on(callback, {
    change: true,
});

// remove listener to foo
gun.get('foo').off();
// add listener to foo
gun.get('foo').on(callback, true);

// remove listener to foo
gun.get('foo').off();
declare const username: string;
declare const view: any;
gun.get('users')
    .get(username)
    .on(user => {
        // update in real-time
        if (user.online) {
            view.show.active(user.name);
        } else {
            view.show.offline(user.name);
        }
    });
gun.get('lights')
    .get('living room')
    .on((state, room) => {
        // update the UI when the living room lights change state
        view.lights[room].show(state);
    });

declare const cb: any;
gun.get('home')
    .get('lights')
    .on(cb, true);
gun.get('home')
    .get('lights')
    .put({ state: 'on' }); // BAD fires twice
gun.get('home')
    .get('lights')
    .get('state')
    .put('on'); // GOOD fires once

declare const handler: any;
gun.get(key).on(handler); /* is the same as */
gun.get(key);

declare const userID: any;
gun.get('peer')
    .get(userID)
    .get('profile')
    .once(profile => {
        // render it, but only once. No updates.
        view.show.user(profile);
    });
gun.get('IoT')
    .get('temperature')
    .once(number => {
        view.show.temp(number);
    });
const user = gun.get('alice').put({ name: 'Alice' });
gun.get('users').set(user);

let bob = gun.get('bob').put({ name: 'Bob' });
let dave = gun.get('dave').put({ name: 'Dave' });

dave.get('friends').set(bob);
bob.get('friends').set(dave);

declare const friend: any;
gun.get('friends'); /* is not the same as */
gun.get('friends').set(friend);

declare const pie: any;
gun.get('stats')
    .map()
    .on((percent, category) => {
        pie.chart(category, percent);
    });

gun.get('users')
    .map()
    .once((user, id) => {
        ui.list.user(user);
    });

gun.get('users')
    .map(user => (user.name === 'Mark' ? user : undefined))
    .once((user, id) => {
        ui.list.user(user);
    });
gun.get('users')
    .map()
    .get('name')
    .on(cb);
gun.get('users')
    .map()
    .get('friends')
    .map()
    .get('pet')
    .on(cb);
gun.get(key).map(); /* is not the same as */
gun.get(key);
gun.get('settings').path!('themes');
// verbose
gun.get('settings').path!('themes').path!('active');

// shorthand
gun.get('settings').path!('themes.active');

// which happens to be the the same as
gun.get('settings')
    .get('themes')
    .get('active');
declare const themeName: string;
gun.get('settings').path!(['themes', themeName]);

// $ExpectError
gun.path!(30.5);
// interprets to
// $ExpectError
gun.path!(30).path(5);
gun.get('user').path!('name');

gun.get('user').path!('name').path!('first');
// or the shorthand...
gun.get('user').path!('name.first');
gun.get('API').path!('path').path!('chain');
/* is different from */
gun.get('API').path!('path');
/* and is different from */
gun.get('API');
gun.get('players/3').not!(key => {
    // put in an object and key it
    gun.get(key).put({
        active: false,
    });
}).on(handler);
// listen for changes on that key
gun.get('chat').get('enabled').not!(function(key) {
    this.put(false);
});
gun.get(key).not!(handler); /* is the same as */
gun.get(key);
// include .open
gun.get('person/mark').open!(mark => {
    mark; // {name: "Mark Nadal", pet: {name: "Frizzles", species: "kitty", slave: {...}}}
});

let human = {
    name: 'Mark Nadal',
    pet: {
        name: 'Frizzles',
        species: 'kitty', // for science!
        slave: undefined as any,
    },
};
human.pet.slave = human;

gun.get('person/mark').put(human);
gun.get('company/acme').open!(cb)
    .get('employees')
    .map()
    .once(cb);
Promise.race([
    gun.get('alice').then!(), // must be called!
    gun.get('bob').then!(), // must be called!
]);
async function get(name: any) {
    const node = await gun.get(name).then!();
    return node;
}
gun.get('marknadal')
    .get('status')
    .put("I'm online!");

gun.get('marknadal').get('status').bye!().put("I'm offline. :(");
const player = gun.get('kittycommando1337');

gun.get('game')
    .get('players')
    .set(player);

gun
    .get('game')
    .get('players')
    .get('kittycommando1337').bye!().put(null);
gun.get('foo').put(data).later!(function(data, key) {
    this.get('session').put(null); // expire data!
}, 2); // 2 seconds!

let machines = gun.get('machines');
let machine = gun.get('machine/tesseract');
machine.put({ faces: 24, cells: 8, edges: 32 });
// let's add machine to the list of machines;
machines.set(machine);
// now let's remove machine from the list of machines
machines.unset!(machine);

// ------------------------------------------------
// SEA

declare const a: any;
declare const b: any;
let SEA = Gun.SEA;
(async () => {
    const pair = (await SEA.pair())!;
    {
        const enc = await SEA.encrypt('hello self', pair);
        const data = await SEA.sign(enc, pair);
        console.log(data);
        const msg = await SEA.verify(data, pair.pub);
        const dec = await SEA.decrypt(msg, pair);
        const proof = await SEA.work(dec, pair);
        const check = await SEA.work('hello self', pair);
        console.log(dec);
        console.log(proof === check);
    }
    {
        // now let's share private data with someone:
        const alice = (await SEA.pair())!;
        const bob = (await SEA.pair())!;

        // ? SEA.secret is undocumented.
        // $ExpectError
        const enc = await SEA.encrypt('shared data', await SEA.secret(bob.epub, alice));
        // $ExpectError
        await SEA.decrypt(enc, await SEA.secret(alice.epub, bob));
        // `.secret` is Elliptic-curve Diffie–Hellman
    }
    {
        const data = await SEA.sign(a, b);
        SEA.sign(a, b, data => {});
    }
    SEA.work(data, pair, callback, {});
    console.log(SEA.err); // last known error
    {
        const other = await SEA.pair();
        const msg = await SEA.sign('I wrote this message! You did not.', pair);
        console.log(await SEA.verify(msg, other!.pub)); // false
    }
})();
async function forgot(username: any, A1: any, A2: any) {
    // A1 and A2 are answers to security questions they made earlier.
    const scrambled = await gun
        .user()
        .get('hint')
        .then();
    const proof = await Gun.SEA.work(A1, A2);
    const hint = await Gun.SEA.decrypt(scrambled, proof!);
    return hint; // your password hint!
}
gun.get('friends')
    .get({ '.': { '>': 'alice', '<': 'fred' }, '%': 50000 })
    .once()
    .map()
    .once(cb);

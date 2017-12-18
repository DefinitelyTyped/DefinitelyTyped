import DS from 'ember-data';
import { assertType } from "./lib/assert";

declare const store: DS.Store;

class User extends DS.Model {
    username = DS.attr('string');
}

let userRef = store.getReference<User>('user', 1);

// get the record of the reference (null if not yet available)
let user = userRef.value();
if (user !== null) {
    assertType<User>(user);
}

// get the identifier of the reference
if (userRef.remoteType() === 'id') {
    let id = userRef.id();
    assertType<string>(id);
}

// load user (via store.find)
userRef.load().then(user => {
    assertType<User>(user);
});

// or trigger a reload
userRef.reload().then(user => {
    assertType<User>(user);
});

// provide data for reference
userRef.push({ id: 1, username: '@user' }).then(function(user) {
    assertType<User>(user);
    userRef.value() === user;
});

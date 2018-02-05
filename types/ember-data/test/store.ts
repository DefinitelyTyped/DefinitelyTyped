import Ember from 'ember';
import DS from 'ember-data';
import { assertType } from './lib/assert';

declare const store: DS.Store;

class Post extends DS.Model {
    title = DS.attr('string');
}

declare module 'ember-data' {
    interface ModelRegistry {
        post: Post;
    }
}

let post = store.createRecord('post', {
    title: 'Rails is Omakase',
    body: 'Lorem ipsum',
});

post.save(); // => POST to '/posts'
post.save().then(saved => {
    assertType<Post>(saved);
});

store.findRecord('post', 1).then(function(post) {
    post.get('title'); // => "Rails is Omakase"
    post.set('title', 'A new post');
    post.save(); // => PATCH to '/posts/1'
});

class User extends DS.Model {
    username = DS.attr('string');
}

declare module 'ember-data' {
    interface ModelRegistry {
        user: User;
    }
}

store.queryRecord('user', {}).then(function(user) {
    let username = user.get('username');
    console.log(`Currently logged in as ${username}`);
});

store.findAll('post'); // => GET /blog-posts
store.findAll('author', { reload: true }).then(function(authors) {
    authors.getEach('id'); // ['first', 'second']
});
store.findAll('post', {
    adapterOptions: { subscribe: false },
});
store.findAll('post', { include: 'comments,comments.author' });

store.peekAll('post'); // => no network request

if (store.hasRecordForId('post', 1)) {
    let maybePost = store.peekRecord('post', 1);
    if (maybePost) {
        maybePost.get('id'); // 1
    }
}

class Message extends DS.Model {
    hasBeenSeen = DS.attr('boolean');
}

declare module 'ember-data' {
    interface ModelRegistry {
        message: Message;
    }
}

const messages = store.peekAll('message');
messages.forEach(function(message) {
    message.set('hasBeenSeen', true);
});
messages.save();

const people = store.peekAll('person');
people.get('isUpdating'); // false
people.update().then(function() {
    people.get('isUpdating'); // false
});
people.get('isUpdating'); // true

const MyRoute = Ember.Route.extend({
    model(params: any): any {
        return this.store.findRecord('post', params.post_id, {
            include: 'comments,comments.author',
        });
    },
});

// GET to /users?filter[email]=tomster@example.com
const tom = store
    .query('user', {
        filter: {
            email: 'tomster@example.com',
        },
    })
    .then(function(users) {
        return users.get('firstObject');
    });

// GET /users?isAdmin=true
const admins = store.query('user', { isAdmin: true });
admins.then(function() {
    console.log(admins.get('length')); // 42
});
admins.update().then(function() {
    admins.get('isUpdating'); // false
    console.log(admins.get('length')); // 123
});

store.push({
    data: [
        {
            id: 1,
            type: 'album',
            attributes: {
                title: 'Fewer Moving Parts',
                artist: 'David Bazan',
                songCount: 10,
            },
            relationships: {},
        },
        {
            id: 2,
            type: 'album',
            attributes: {
                title: "Calgary b/w I Can't Make You Love Me/Nick Of Time",
                artist: 'Bon Iver',
                songCount: 2,
            },
            relationships: {},
        },
    ],
});

class UserAdapter extends DS.Adapter {
    thisAdapterOnlyMethod(): void {}
}
class UserSerializer extends DS.Serializer {
    thisSerializerOnlyMethod(): void {}
}

declare module 'ember-data' {
    interface AdapterRegistry {
        user: UserAdapter;
    }

    interface SerializerRegistry {
        user: UserSerializer;
    }
}

assertType<UserAdapter>(store.adapterFor('user'));
assertType<UserSerializer>(store.serializerFor('user'));

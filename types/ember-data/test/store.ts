import Ember from 'ember';
import DS from 'ember-data';
import { assertType } from "./lib/assert";

declare const store: DS.Store;

class Comment extends DS.Model {}
class Post extends DS.Model {
  title = DS.attr('string');
  comments = DS.hasMany<Comment>('comment');
}

let post = store.createRecord<Post>('post', {
    title: 'Rails is Omakase',
    body: 'Lorem ipsum'
});

post.save(); // => POST to '/posts'
post.save().then((saved) => {
    assertType<Post>(saved);
});

store.findRecord<Post>('post', 1).then(function(post) {
    post.get('title'); // => "Rails is Omakase"
    post.set('title', 'A new post');
    post.save(); // => PATCH to '/posts/1'
});

class User extends DS.Model {
    username = DS.attr('string');
}

store.queryRecord<User>('user', {}).then(function(user) {
    let username = user.get('username');
    console.log(`Currently logged in as ${username}`);
});

store.findAll('blog-post'); // => GET /blog-posts
store.findAll('author', { reload: true }).then(function(authors) {
    authors.getEach('id'); // ['first', 'second']
});
store.findAll('post', {
    adapterOptions: { subscribe: false }
});
store.findAll('post', { include: 'comments,comments.author' });

store.peekAll('blog-post'); // => no network request

if (store.hasRecordForId('post', 1)) {
    let maybePost = store.peekRecord('post', 1);
    if (maybePost) {
        maybePost.get('id'); // 1
    }
}

class Message extends DS.Model {
  hasBeenSeen = DS.attr('boolean');
}

const messages = store.peekAll<Message>('message');
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
        return this.store.findRecord('post', params.post_id, {include: 'comments,comments.author'});
    }
});

const MyRouteAsync = Ember.Route.extend({
    async beforeModel(): Promise<Ember.Array<DS.Model>> {
        const store = Ember.get(this, 'store');
        return await store.findAll('someStoreRecord');
    },
    async model(): Promise<DS.Model> {
        const store = this.get('store');
        return await store.findRecord('someStoreRecord', 1);
    },
    async afterModel(): Promise<Ember.Array<Comment>> {
        const post = await this.get('store').findRecord<Post>('post', 1);
        return await post.get('comments');
    }
});

class MyRouteAsyncES6 extends Ember.Route {
    async beforeModel(): Promise<Ember.Array<DS.Model>> {
        return await this.store.findAll('someStoreRecord');
    }
    async model(): Promise<DS.Model> {
        return await this.store.findRecord('someStoreRecord', 1);
    }
    async afterModel(): Promise<Ember.Array<Comment>> {
        const post = await this.store.findRecord<Post>('post', 1);
        return await post.get('comments');
    }
}

// GET to /users?filter[email]=tomster@example.com
const tom = store.query('user', {
    filter: {
        email: 'tomster@example.com'
    }
}).then(function(users) {
    return users.get("firstObject");
});

// GET /users?isAdmin=true
const admins = store.query('user', { isAdmin: true });
admins.then(function() {
    console.log(admins.get("length")); // 42
});
admins.update().then(function() {
    admins.get('isUpdating'); // false
    console.log(admins.get("length")); // 123
});

store.push({
    data: [{
        id: 1,
        type: 'album',
        attributes: {
            title: 'Fewer Moving Parts',
            artist: 'David Bazan',
            songCount: 10
        },
        relationships: {}
    }, {
        id: 2,
        type: 'album',
        attributes: {
            title: 'Calgary b/w I Can\'t Make You Love Me/Nick Of Time',
            artist: 'Bon Iver',
            songCount: 2
        },
        relationships: {}
    }]
});

class UserAdapter extends DS.Adapter { }
class UserSerializer extends DS.Serializer { }

assertType<UserAdapter>(store.adapterFor<UserAdapter>('user'));
assertType<UserSerializer>(store.serializerFor<UserSerializer>('user'));

import Collaboration from '@ckeditor/ckeditor5-collaboration-core';

let user = new Collaboration.User();
user = new Collaboration.User({ id: 'foo', color: { foo: 'bar' } });
user = new Collaboration.User({ id: 'foo', color: { foo: 'bar' }, name: 'John', avatar: '' });

const users = new Collaboration.Users();
users.addUser({ id: 'foo', color: { foo: 'bar' } });
users.addUser({ id: 'foo', color: { foo: 'bar' }, name: 'John', avatar: '' });
user = users.users.get(0)!;
users.addUser(user);
user = users.getUser('foo');
users.useAnonymousUser();
user = users.me!;
users.defineMe('foo');

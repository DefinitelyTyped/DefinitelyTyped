import { User, Users } from '@ckeditor/ckeditor5-collaboration-core';

let user = new User();
user = new User({ id: 'foo', color: { foo: 'bar' } });
user = new User({ id: 'foo', color: { foo: 'bar' }, name: 'John', avatar: '' });

const users = new Users();
users.addUser({ id: 'foo', color: { foo: 'bar' } });
users.addUser({ id: 'foo', color: { foo: 'bar' }, name: 'John', avatar: '' });
user = users.users.get(0)!;
users.addUser(user);
user = users.getUser('foo');
users.useAnonymousUser();
user = users.me!;
users.defineMe('foo');

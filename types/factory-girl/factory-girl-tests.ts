import * as factory from "factory-girl";

interface User {
    username?: string;
    score?: number;
    email?: string;
    roles?: Role[];
    creditCard?: any;
    boss?: User;
}

interface Role {
    id?: number;
    name?: string;
}

interface SuperUser extends User {
    superpower: string;
}

// Testing setAdapter
factory.setAdapter("my-adapter", "my-adapter-name");

// Testing sequence to use it on its own
const scoreSequence = factory.sequence<number>(
  'User.score',
  score => score + 1,
);
const scoreSeq = factory.seq<number>('User.score', score => score + 1);

// Testing sequence resetting
factory.resetSeq();
factory.resetSequence();
factory.resetSeq('User.score');
factory.resetSequence('User.score');

// Testing define with seq, assoc, assocAttrs, assocMany
factory.define<User>(
    'user',
    {},
    {
        username: () => (Math.random() > 0.5 ? 'Bob' : 'Robert'),
        score: scoreSequence,
        email: factory.seq<string>('User.email', num => `email-${1}@users.com`),
        roles: factory.assocMany('Role', 3, 'id'),
        creditCard: factory.assocAttrs('CreditCard', 'creditCard', { number: '1234' }),
        boss: factory.assoc('User', 'boss'),
    },
    {
        afterBuild: (model, attrs, options) => {},
        afterCreate: (model, attrs, options) => {},
    }
);

// Testing extend, with and without options
factory.extend("user", "superuser", { superpower: "flight" });

factory.extend(
    'user',
    'superuser',
    { superpower: 'flight' },
    {
        afterBuild: (model, attrs, options) => {},
        afterCreate: (model, attrs, options) => {},
    }
);

factory.extend('user', 'email-related', () => {
    const score = scoreSequence();
    return {
        score,
        email: factory.seq<string>('User.email', num => `email-${num}-${score}@users.com`),
    };
});

// Testing attrs, with and without attributes
factory.attrs<User>("user").then(attrs => null);
factory.attrs<User>("user", { score: 10 }).then(attrs => null);

// Testing attrsMany, with and without attributes
factory.attrsMany<User>("user", 2).then(attrs => null);
factory.attrsMany<User>("user", 2, [{ score: 10 }]).then(attrs => null);

// Testing build, with and without attributes
factory.build<User>("user").then(user => user.username);
factory.build<User>("user", { score: 10 }).then(user => user.username);

// Testing buildMany, with and without attributes and options
factory.buildMany<User>('user', 3).then(users => users.map(user => user.username));

factory.buildMany<User>('user', 3, { username: 'John McClane' }).then(users => users.map(user => user.username));

// Testing buildMany with a list of attributes
factory
    .buildMany<User>('user', [{ username: 'Jake Blues' }, { username: 'Elwood Blues' }])
    .then(users => users.map(user => user.username));

// Testing create, with and without attributes
factory.create<User>("user").then(user => user.username);
factory.create<User>("user", { score: 10 }).then(user => user.username);

// Testing createMany, with and without attributes
factory.createMany<User>('user', 3).then(users => users.map(user => user.username));

factory.createMany<User>('user', 3, { username: 'Rocky Balboa' }).then(users => users.map(user => user.username));

// Testing createMany with options
factory
    .createMany<User>(
        'user',
        3,
        { username: 'John Rambo' },
        {
            afterBuild: (model, attrs, options) => {},
            afterCreate: (model, attrs, options) => {},
        }
    )
    .then(users => users.map(user => user.username));

// Testing createMany with a list of attributes
factory
    .createMany<User>('user', [{ username: 'Emmett Brown' }, { username: 'Marty McFly' }])
    .then(users => users.map(user => user.username));

// Testing cleanUp
factory.cleanUp();

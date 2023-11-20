import * as factory from "factory-girl";
// eslint-disable-next-line no-duplicate-imports
import { factory as namedImportedFactory } from "factory-girl";

interface User {
    username?: string | undefined;
    score?: number | undefined;
    email?: string | undefined;
    roles?: Role[] | undefined;
    creditCard?: any;
    boss?: User | undefined;
    addresses?: any[] | undefined;
}

interface Role {
    id?: number | undefined;
    name?: string | undefined;
}

interface SuperUser extends User {
    superpower: string;
}

// Testing setAdapter
factory.setAdapter("my-adapter", "my-adapter-name");

// Testing sequence to use it on its own
const scoreSequence = factory.sequence<number>("User.score", score => score + 1);
const scoreSeq = factory.seq<number>("User.score", score => score + 1);

// Testing sequence with no params
// $ExpectType Generator<number>
factory.seq();
// $ExpectType Generator<number>
factory.sequence();

// Testing sequence with id
// $ExpectType Generator<number>
factory.seq("User.score");
// $ExpectType Generator<number>
factory.sequence("User.score");

// Testing sequence with callback
// $ExpectType Generator<string>
factory.seq(value => value.toString());
// $ExpectType Generator<string>
factory.sequence(value => value.toString());

// Testing sequence resetting
factory.resetSeq();
factory.resetSequence();
factory.resetSeq("User.score");
factory.resetSequence("User.score");

// Testing define with seq, assoc, assocAttrs, assocMany
factory.define<User>(
    "user",
    {},
    {
        username: () => (Math.random() > 0.5 ? "Bob" : "Robert"),
        score: scoreSequence,
        email: factory.seq<string>("User.email", num => `email-${1}@users.com`),
        roles: factory.assocMany("Role", 3, "id"),
        creditCard: factory.assocAttrs("CreditCard", "creditCard", { number: "1234" }, { option: true }),
        boss: factory.assoc("User", "boss"),
        addresses: factory.assocAttrsMany("Address", 3, "id", { type: 1 }),
    },
    {
        afterBuild: (model, attrs, options) => {
            // for buildMany & build
            model.email = Array.isArray(attrs) ? attrs[0].email : attrs.email;
            return model;
        },
        afterCreate: (model, attrs, options) => {
            // for createMany & create
            model.email = Array.isArray(attrs) ? attrs[0].email : attrs.email;
            return model;
        },
    },
);

// Testing extend, with and without options
factory.extend("user", "superuser", { superpower: "flight" });

factory.extend(
    "user",
    "superuser",
    { superpower: "flight" },
    {
        afterBuild: (model, attrs, options) => {},
        afterCreate: (model, attrs, options) => {},
    },
);

factory.extend(
    "user",
    "superuser",
    { superpower: "flight" },
    {
        afterBuild: async (model, attrs, options) => {},
        afterCreate: async (model, attrs, options) => {},
    },
);

factory.extend("user", "email-related", () => {
    const score = scoreSequence();
    return {
        score,
        email: factory.seq<string>("User.email", num => `email-${num}-${score}@users.com`),
    };
});

// Testing attrs, with and without attributes
factory.attrs<User>("user").then(attrs => null);
factory
    .attrs<User>("user", { score: 10 })
    .then(attrs => null);
factory.attrs<User>("user", {}, { isAdmin: true }).then(attrs => null);

// Testing attrsMany, with and without attributes
factory.attrsMany<User>("user", 2).then(attrs => null);
factory
    .attrsMany<User>("user", 2, [{ score: 10 }])
    .then(attrs => null);
factory
    .attrsMany<User>("user", 2, [{}], { isAdmin: true })
    .then(attrs => null);
factory.attrsMany<User>("user", 2, [{}], [{ isAdmin: true }]).then(attrs => null);

// Testing build, with and without attributes
factory.build<User>("user").then(user => user.username);
factory
    .build<User>("user", { score: 10 })
    .then(user => user.username);
factory.build<User>("user", {}, { isAdmin: true }).then(user => user.username);

// Testing buildMany, with and without attributes and options
factory.buildMany<User>("user", 3).then(users => users.map(user => user.username));
factory
    .buildMany<User>("user", 3, { username: "John McClane" })
    .then(users => users.map(user => user.username));
factory.buildMany<User>("user", 3, {}, { isAdmin: true }).then(users => users.map(user => user.username));
factory.buildMany<User>("user", 1, [{}], [{ isAdmin: true }]).then(users => users.map(user => user.username));

// Testing create, with and without attributes
factory.create<User>("user").then(user => user.username);
factory
    .create<User>("user", { score: 10 })
    .then(user => user.username);
factory.create<User>("user", {}, { isAdmin: true }).then(user => user.username);
factory.create<User>("user", {}, { isAdmin: true }).then(user => user.username);

// Testing createMany, with and without attributes
factory.createMany<User>("user", 3).then(users => users.map(user => user.username));
factory
    .createMany<User>("user", 3, { username: "Rocky Balboa" })
    .then(users => users.map(user => user.username));
factory
    .createMany<User>("user", 3, { username: "Rocky Balboa" }, { isAdmin: true })
    .then(users => users.map(user => user.username));
factory
    .createMany<User>("user", 1, [{ username: "Rocky Balboa" }], [{ isAdmin: true }])
    .then(users => users.map(user => user.username));

// Testing createMany with a list of attributes
factory
    .createMany<User>("user", [{ username: "Emmett Brown" }, { username: "Marty McFly" }])
    .then(users => users.map(user => user.username));
factory
    .createMany<User>("user", [{ username: "Emmett Brown" }, { username: "Marty McFly" }], { isAdmin: true })
    .then(users => users.map(user => user.username));
factory
    .createMany<User>(
        "user",
        [{ username: "Emmett Brown" }, { username: "Marty McFly" }],
        [{ isAdmin: true }, { isAdmin: false }],
    )
    .then(users => users.map(user => user.username));

// testing chance
factory.chance("name", { middle: true });

// Testing cleanUp
factory.cleanUp();

// Testing namedImportedFactory
namedImportedFactory.seq();

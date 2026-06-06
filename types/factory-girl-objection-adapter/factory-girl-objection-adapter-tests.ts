import * as factory from "factory-girl";
// eslint-disable-next-line no-duplicate-imports
import { factory as namedImportedFactory } from "factory-girl";
import ObjectionAdapter = require("factory-girl-objection-adapter");

interface User {
    username?: string | undefined;
    email?: string | undefined;
}

factory.setAdapter(new ObjectionAdapter());

factory.define<User>(
    "user",
    {},
    {
        username: () => (Math.random() > 0.5 ? "Mary" : "Robert"),
        email: factory.seq<string>("User.email", num => `email-${1}@users.com`),
    },
);

// implicitly tests the object adpater methods
factory.attrs<User>("user").then(attrs => null);
factory.create<User>("user").then(user => user.username);
factory.cleanUp();

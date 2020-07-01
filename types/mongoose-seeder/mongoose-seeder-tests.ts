import * as seeder from 'mongoose-seeder';

const data = `{
    "users": {
        "_model": "User",
        "foo": {
            "firstName": "Foo",
            "name": "Bar",
            "email": "foo@bar.com"
        }
    }
}`;

seeder.seed(data, (err, dbData) => {
});
seeder.seed(data, { dropCollections: true }, (err, dbData) => {
});

seeder.seed(data, { dropDatabase: true }).then((dbData) => {
  // ...
}).catch((err) => {
  // handle error
});

seeder.seed(data, { dropCollections: true }).then((dbData) => {
  // ...
}).catch((err) => {
  // handle error
});

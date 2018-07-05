import Waterline = require("waterline");
const waterline = new Waterline();
const userCollection = Waterline.Collection.extend({
    identity: "user",
    connection: "default",
    attributes: {
        firstName: "string",
        lastName: "string",

        // Add a reference to Pets
        pets: {
            collection: "pet",
            via: "owner",
            dominant: true,
        },
    },
});
const petCollection = Waterline.Collection.extend({
    identity: "pet",
    connection: "default",
    attributes: {
        breed: "string",
        type: "string",
        name: "string",

        // Add a reference to User
        owner: {
            model: "user",
        },
    },
});

waterline.loadCollection(userCollection);
waterline.loadCollection(petCollection);

const config: Waterline.Config = {
    adapters: {
        memory: {},
    },
    connections: {
        default: {
            adapter: "memory",
        },
    },
};

waterline.initialize(config, (err, ontology) => {
    if (err) {
        return console.error(err);
    }

    // Tease out fully initialised models.
    const User: Waterline.Model = ontology.collections.user;
    const Pet: Waterline.Model = ontology.collections.pet;

    User.create({ // First we create a user.
        firstName: "Neil",
        lastName: "Armstrong",
    }).then((user: any) => { // Then we create the pet
        return Pet.create({
            breed: "beagle",
            type: "dog",
            name: "Astro",
            owner: user.id,
        });

    }).then((pet) => { // Then we grab all users and their pets
        return User.find().populate("pets");

    }).then((users) => { // Results of the previous then clause are passed to the next
        console.dir(users);

    }).catch((errCatch) => { // If any errors occur execution jumps to the catch block.
        console.error(errCatch);
    });
});

const Person = Waterline.Collection.extend({
    identity: "person",
    connection: "local-postgresql",

    attributes: {

        // Don"t allow two objects with the same value
        lastName: {
            type: "string",
            unique: true
        },

        // Ensure a value is set
        age: {
            type: "integer",
            required: true
        },

        // Set a default value if no value is set
        phoneNumber: {
            type: "string",
            defaultsTo: "111-222-3333"
        },

        // Create an auto-incrementing value (not supported by all datastores)
        incrementMe: {
            type: "integer",
            autoIncrement: true
        },

        // Index a value for faster queries
        emailAddress: {
            type: "email", // Email type will get validated by the ORM
            index: true
        }
    }
});
// https://github.com/balderdashy/waterline-docs/blob/master/models/validations.md
const validations: Waterline.Attribute = {
    type: "string",
    empty: true,
    required: true,
    notEmpty: true,
    undefined: true,
    string: true,
    alpha: true,
    numeric: true,
    alphanumeric: true,
    email: true,
    url: true,
    urlish: true,
    ip: true,
    ipv4: true,
    ipv6: true,
    creditcard: true,
    uuid: true,
    uuidv3: true,
    uuidv4: true,
    int: true,
    integer: true,
    number: true,
    finite: true,
    decimal: true,
    float: true,
    falsey: true,
    truthy: true,
    null: true,
    notNull: true,
    boolean: true,
    array: true,
    date: true,
    hexadecimal: true,
    hexColor: true,
    lowercase: true,
    uppercase: true,
    after: "12/12/2001",
    before: "12/12/2001",
    is: /ab+c/,
    regex: /ab+c/,
    not: /ab+c/,
    notRegex: /ab+c/,
    equals: 45,
    contains: "foobar",
    notContains: "foobar",
    len: 35,
    in: ["foo", "bar"],
    notIn: ["foo", "bar"],
    max: 24,
    min: 4,
    minLength: 4,
    maxLength: 24,
};
const valid2 = {
    contains: (cb: (val: string) => any) => {
        setTimeout(() => {
            cb("http://");
        }, 1);
    },
    before: () => {
        return this.endDate;
    },
    after: () => {
        return this.startDate;
    }
};
const model: Waterline.CollectionDefinition = {
    attributes: {
        email: {
            type: "email",
            special: true // ignored by validation
        },
        cousins: {
            collection: "related",
            via: "property",
            async: true // ignored by validation
        }
    }
};
// Lifecycle Callbacks https://github.com/balderdashy/waterline-docs/blob/master/models/lifecycle-callbacks.md

const attr1: Waterline.CollectionDefinition = {
    beforeValidate: (values, next) => {
        next();
        next("");
    },
    beforeCreate: (values, next) => {
        next(new Error(""));
        next();
    },
    afterCreate: (values, next) => {
        next(new Error(""));
        next();
    },
    beforeUpdate: (values, next) => {
        next(new Error(""));
        next();
    },
    afterUpdate: (values, next) => {
        next(new Error(""));
        next();
    },
    beforeDestroy: (values, next) => {
        next(new Error(""));
        next();
    },
    afterDestroy: (values, next) => {
        next(new Error(""));
        next();
    },
};
// Queries https://github.com/balderdashy/waterline-docs/blob/master/queries/query.md
let User: Waterline.Model = {} as any;
User.find()
    .where({ name: { contains: "foo" } })
    .populate("animals", { type: "dog", limit: 10 })
    .skip(20)
    .limit(10)
    .exec((err, users) => {
        users.map((u) => u.any);
    });
let Comment: Waterline.Model = {} as any;
User.findOne()
    .where({ id: 2 })
    .then((user) => {
        const comments = Comment.find({ userId: user.id }).then((comments2) => {
            return comments2;
        });

        return [user.id, user.friendsList, comments];
    })
    .spread((userId, friendsList, comments) => {

    })
    .catch((err: any) => {
        // An error occured
    });

User.find()
    .where({ name: { startsWith: "w" } })
    .exec((err, results) => {
        throw err;
    });
// Simple Population
User.find()
    .populate("foo")
    .exec((err, users) => { });
// Collection Filtering
User.find()
    .populate("foo", { type: "bar", limit: 20 })
    .exec((err, users) => { });
User.find()
    .limit(10)
    .exec((err, users) => { });
User.find()
    .skip(10)
    .exec((err, users) => { });
User.find()
    .skip(10)
    .limit(10)
    .exec((err, users) => { });
User.find()
    .paginate({ page: 2, limit: 10 })
    .exec((err, users) => { });
User.find().sort("roleId asc")
    .sort({ createdAt: "desc" }).exec((err, users) => { });
User.find().exec((err, users) => { });
// Query methods https://github.com/balderdashy/waterline-docs/blob/master/queries/query-methods.md
// .find( criteria, [callback] )
User.find(1, (err, values) => { values.map((v) => v); });
User.find({ name: "Walter Jr" }).exec((err, users) => { users.map((u) => u.id); });
// .findOne( criteria, [callback] )
User.findOne({ name: "Walter Jr" }).exec((err, users) => { users.map((u: any) => u.id); });
User.findOne(1).exec((err, users) => { users.map((u: any) => u.id); });
User.findOne("1").exec((err, users) => { users.map((u: any) => u.id); });
User.findOne(1, (err, value) => { });
// .create( criteria, [callback] )
User.create({ name: "Walter Jr" }).exec((err, user) => { });
User.findOrCreate({ name: "Walter Jr" }, {}, (err, user) => { }).exec((err, users) => { });
// .update( search criteria , values , [callback] )
User.update({ name: "Walter Jr" }, { name: "Flynn" }, (err, value) => { }).exec((err, users) => { });
// .destroy( criteria , [callback] )
User.destroy({ name: "Flynn" }, (err, value) => { }).exec((err) => { });
// .query( query, [data], callback )
const Movie: Waterline.Model = {} as any;
const title = "The Speech";
Movie.query("SELECT * FROM movie WHERE title = $1", [title], (err, results) => { });
// Aggregates https://github.com/balderdashy/waterline-docs/blob/master/queries/query-methods.md#aggregates
Movie.find()
    .groupBy("genre")
    .max("revenue")
    .min("title")
    .sum("imdb")
    .average("cost")
    .then((results: any) => { });

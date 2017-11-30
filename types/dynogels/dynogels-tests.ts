import dynogels = require("dynogels");
import { DynamoDB } from "aws-sdk";
import * as Joi from "joi";

// AWS Configs
dynogels.AWS.config.loadFromPath('credentials.json');
dynogels.AWS.config.update({ region: "REGION" });

// Define a Model
const Account = dynogels.define('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
        name: Joi.string(),
        age: Joi.number(),
        roles: dynogels.types.stringSet(),
        settings: {
            nickname: Joi.string(),
            acceptedTerms: Joi.boolean().default(false),
            test: {
                evan: Joi.string()
            }
        }
    }
});

const BlogPost = dynogels.define('BlogPost', {
    hashKey: 'email',
    rangeKey: 'title',
    schema: {
        email: Joi.string().email(),
        title: Joi.string(),
        content: Joi.binary(),
        tags: dynogels.types.stringSet(),
    }
});

const BlogPost1 = dynogels.define('BlogPost', {
    hashKey: 'email',
    rangeKey: 'title',
    schema: {
        email: Joi.string().email(),
        title: Joi.string()
    },
    validation: {
        // allow properties not defined in the schema
        allowUnknown: true
    }
});

// Create Tables
dynogels.createTables((err) => { });

dynogels.createTables({
    BlogPost: { readCapacity: 5, writeCapacity: 10 },
    Account: {
        readCapacity: 20,
        writeCapacity: 4,
        streamSpecification: {
            streamEnabled: true,
            streamViewType: 'NEW_IMAGE'
        }
    }
}, (err) => { });

dynogels.createTables({
    $dynogels: { pollingInterval: 100 }
}, (err) => { });

// Delete Table
BlogPost.deleteTable((err) => { });

// UUID
const Tweet = dynogels.define('Tweet', {
    hashKey: 'TweetID',
    timestamps: true,
    schema: {
        TweetID: dynogels.types.uuid(),
        content: Joi.string(),
    }
});

// Configuration
const Account1 = dynogels.define('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
    }
});

const Account2 = dynogels.define('Account', {
    hashKey: 'email',

    // enable timestamps support
    timestamps: true,

    // I don't want createdAt
    createdAt: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp',

    schema: {
        email: Joi.string().email(),
    }
});

const Event = dynogels.define('Event', {
    hashKey: 'name',
    schema: {
        name: Joi.string(),
        total: Joi.number()
    },

    tableName: 'deviceEvents'
});

const Event1 = dynogels.define('Event', {
    hashKey: 'name',
    schema: {
        name: Joi.string(),
        total: Joi.number()
    },

    // store monthly event data
    tableName: () => {
        const d = new Date();
        return ['events', d.getFullYear(), d.getMonth() + 1].join('_');
    }
});

Account.config({ tableName: 'AccountsTable' });

const dynamodb = new DynamoDB();
Account.config({ dynamodb });

// or globally use custom DynamoDB instance
// all defined models will now use this driver
dynogels.dynamoDriver(dynamodb);

// Saving Models To DynamoDB
Account.create({ email: 'foo@example.com', name: 'Foo Bar', age: 21 }, (err, acc) => {
    acc.get('email');
});

const acc = new Account({ email: 'test@example.com', name: 'Test Example' });
acc.save((err) => {
    acc.get('email');
});

BlogPost.create({
    email: 'werner@example.com',
    title: 'Expanding the Cloud',
    content: 'Today, we are excited to announce the limited preview...'
}, (err, post) => { });

const item1 = { email: 'foo1@example.com', name: 'Foo 1', age: 10 };
const item2 = { email: 'foo2@example.com', name: 'Foo 2', age: 20 };
const item3 = { email: 'foo3@example.com', name: 'Foo 3', age: 30 };

Account.create([item1, item2, item3], (err, accounts) => { });

const params: dynogels.CreateItemOptions = {};

params.ConditionExpression = '#i <> :x';
params.ExpressionAttributeNames = { '#i': 'id' };
params.ExpressionAttributeValues = { ':x': 123 };

Account.create({ id: 123, name: 'Kurt Warner' }, params, (error, acc) => { });

// setting overwrite to false will generate
// the same Condition Expression as in the previous example
Account.create({ id: 123, name: 'Kurt Warner' }, { overwrite: false }, (error, acc) => { });

// Updating
Account.update({ email: 'foo@example.com', name: 'Bar Tester' }, (err, acc) => { });

Account.update({ email: 'foo@example.com', name: 'Bar Tester' }, { ReturnValues: 'ALL_OLD' }, (err, acc) => { });

// Only update the account if the current age of the account is 22
Account.update({ email: 'foo@example.com', name: 'Bar Tester' }, { expected: { age: 22 } }, (err, acc) => { });

// setting an attribute to null will delete the attribute from DynamoDB
Account.update({ email: 'foo@example.com', age: null }, (err, acc) => { });

Account.update(
    { email: 'foo@example.com', name: 'FooBar Testers' },
    { expected: { email: { Exists: true } } },
    (err, acc) => { }
);

Account.update(
    { email: 'baz@example.com', name: 'Bar Tester' },
    { expected: { email: { Exists: true } } },
    (err, acc) => { }
);

Account.update({ email: 'foo@example.com', age: { $add: 1 } }, (err, acc) => { });

BlogPost.update({
    email: 'werner@example.com',
    title: 'Expanding the Cloud',
    tags: { $add: 'cloud' }
}, (err, post) => { });

BlogPost.update({
    email: 'werner@example.com',
    title: 'Expanding the Cloud',
    tags: { $add: ['cloud', 'dynamodb'] }
}, (err, post) => { });

BlogPost.update({
    email: 'werner@example.com',
    title: 'Expanding the Cloud',
    tags: { $del: 'cloud' }
}, (err, post) => { });

BlogPost.update({
    email: 'werner@example.com',
    title: 'Expanding the Cloud',
    tags: { $del: ['aws', 'node'] }
}, (err, post) => { });

const params1: dynogels.UpdateItemOptions = {};
params1.UpdateExpression = 'SET #year = #year + :inc, #dir.titles = list_append(#dir.titles, :title), #act[0].firstName = :firstName ADD tags :tag';
params1.ConditionExpression = '#year = :current';
params1.ExpressionAttributeNames = {
    '#year': 'releaseYear',
    '#dir': 'director',
    '#act': 'actors'
};

params1.ExpressionAttributeValues = {
    ':inc': 1,
    ':current': 2001,
    ':title': ['The Man'],
    ':firstName': 'Rob',
    ':tag': dynogels.Set(['Sports', 'Horror'], 'S')
};

BlogPost.update({ title: 'Movie 0', description: 'This is a description' }, params1, (err, mov) => { });

// Deleting
Account.destroy('foo@example.com', (err) => { });

// Destroy model using hash and range key
BlogPost.destroy('foo@example.com', 'Hello World!', (err) => { });

BlogPost.destroy({ email: 'foo@example.com', title: 'Another Post' }, (err) => { });

Account.destroy('foo@example.com', { ReturnValues: 'ALL_OLD' }, (err, acc) => { });

Account.destroy('foo@example.com', { expected: { age: 22 } }, (err) => { });

const params2: dynogels.DestroyItemOptions = {};
params2.ConditionExpression = '#v = :x';
params2.ExpressionAttributeNames = { '#v': 'version' };
params2.ExpressionAttributeValues = { ':x': '2' };

Account.destroy({ id: 123 }, params2, (err, acc) => { });

// Loading Models from DynamoDB
Account.get('test@example.com', (err, acc) => {
    console.log('got account', acc.get('email'));
});

Account.get('test@example.com', { ConsistentRead: true }, (err, acc) => { });

Account.get('test@example.com', { ConsistentRead: true, AttributesToGet: ['name', 'age'] }, (err, acc) => { });

BlogPost.get('werner@example.com', 'dynamodb-keeps-getting-better-and-cheaper', (err, post) => { });

BlogPost.get({ email: 'werner@example.com', title: 'Expanding the Cloud' }, (err, post) => { });

BlogPost.get({ id: '123456789' }, { ProjectionExpression: 'email, age, settings.nickname' }, (err, acc) => { });

// Query

const callback = () => { };
// query for blog posts by werner@example.com
BlogPost
    .query('werner@example.com')
    .exec(callback);

// same as above, but load all results
BlogPost
    .query('werner@example.com')
    .loadAll()
    .exec(callback);

// only load the first 5 posts by werner
BlogPost
    .query('werner@example.com')
    .limit(5)
    .exec(callback);

// query for posts by werner where the tile begins with 'Expanding'
BlogPost
    .query('werner@example.com')
    .where('title').beginsWith('Expanding')
    .exec(callback);

// return only the count of documents that begin with the title Expanding
BlogPost
    .query('werner@example.com')
    .where('title').beginsWith('Expanding')
    .select('COUNT')
    .exec(callback);

// query the first 10 posts by werner@example.com but only return
// the title and content from posts where the title starts with 'Expanding'
// WARNING: See notes below on the implementation of limit in DynamoDB
BlogPost
    .query('werner@example.com')
    .where('title').beginsWith('Expanding')
    .attributes(['title', 'content'])
    .limit(10)
    .exec(callback);

// sorting by title ascending
BlogPost
    .query('werner@example.com')
    .ascending()
    .exec(callback);

// sorting by title descending
BlogPost
    .query('werner@example.com')
    .descending()
    .exec(callback);

// All query options are chainable
BlogPost
    .query('werner@example.com')
    .where('title').gt('Expanding')
    .attributes(['title', 'content'])
    .limit(10)
    .ascending()
    .loadAll()
    .exec(callback);

// Traversing Map Data Types
Account
    .query('werner@example.com')
    .filter('settings.acceptedTerms').equals(true)
    .exec(callback);

BlogPost
    .query('werner@example.com')
    .where('title').equals('Expanding')
    .exec();

// less than equals
BlogPost
    .query('werner@example.com')
    .where('title').lte('Expanding')
    .exec();

// less than
BlogPost
    .query('werner@example.com')
    .where('title').lt('Expanding')
    .exec();

// greater than
BlogPost
    .query('werner@example.com')
    .where('title').gt('Expanding')
    .exec();

// greater than equals
BlogPost
    .query('werner@example.com')
    .where('title').gte('Expanding')
    .exec();

// attribute doesn't exist
BlogPost
    .query('werner@example.com')
    .where('title').null()
    .exec();

// attribute exists
BlogPost
    .query('werner@example.com')
    .where('title').exists()
    .exec();

BlogPost
    .query('werner@example.com')
    .where('title').beginsWith('Expanding')
    .exec();

BlogPost
    .query('werner@example.com')
    .where('title').between('foo@example.com', 'test@example.com')
    .exec();

BlogPost
    .query('werner@example.com')
    .where('title').equals('Expanding')
    .filter('tags').contains('cloud')
    .exec();

BlogPost
    .query('werner@example.com')
    .filterExpression('#title < :t')
    .expressionAttributeValues({ ':t': 'Expanding' })
    .expressionAttributeNames({ '#title': 'title' })
    .projectionExpression('#title, tag')
    .exec();

const GameScore = dynogels.define('GameScore', {
    hashKey: 'userId',
    rangeKey: 'gameTitle',
    schema: {
        userId: Joi.string(),
        gameTitle: Joi.string(),
        topScore: Joi.number(),
        topScoreDateTime: Joi.date(),
        wins: Joi.number(),
        losses: Joi.number()
    },
    indexes: [{
        hashKey: 'gameTitle', rangeKey: 'topScore', name: 'GameTitleIndex', type: 'global'
    }]
});

GameScore
    .query('Galaxy Invaders')
    .usingIndex('GameTitleIndex')
    .descending()
    .exec(callback);

const GameScore1 = dynogels.define('GameScore', {
    hashKey: 'userId',
    rangeKey: 'gameTitle',
    schema: {
        userId: Joi.string(),
        gameTitle: Joi.string(),
        topScore: Joi.number(),
        topScoreDateTime: Joi.date(),
        wins: Joi.number(),
        losses: Joi.number()
    },
    indexes: [{
        hashKey: 'gameTitle',
        rangeKey: 'topScore',
        name: 'GameTitleIndex',
        type: 'global',
        projection: { NonKeyAttributes: ['wins'], ProjectionType: 'INCLUDE' } // optional, defaults to ALL
    }]
});

GameScore
    .query('Galaxy Invaders')
    .usingIndex('GameTitleIndex')
    .where('topScore').gt(1000)
    .descending()
    .exec((err, data) => { });

const BlogPost5 = dynogels.define('Account', {
    hashKey: 'email',
    rangeKey: 'title',
    schema: {
        email: Joi.string().email(),
        title: Joi.string(),
        content: Joi.binary(),
        PublishedDateTime: Joi.date()
    },

    indexes: [{
        hashKey: 'email', rangeKey: 'PublishedDateTime', type: 'local', name: 'PublishedIndex'
    }]
});

BlogPost
    .query('werner@example.com')
    .usingIndex('PublishedIndex')
    .descending()
    .exec(callback);

BlogPost
    .query('werner@example.com')
    .usingIndex('PublishedIndex')
    .ascending()
    .exec(callback);

BlogPost
    .query('werner@example.com')
    .usingIndex('PublishedIndex')
    .descending()
    .loadAll()
    .exec(callback);

// scan all accounts, returning the first page or results
Account.scan().exec(callback);

// scan all accounts, this time loading all results
// note this will potentially make several calls to DynamoDB
// in order to load all results
Account
    .scan()
    .loadAll()
    .exec(callback);

// Load 20 accounts
Account
    .scan()
    .limit(20)
    .exec();

// Load All accounts, 20 at a time per request
Account
    .scan()
    .limit(20)
    .loadAll()
    .exec();

// Load accounts which match a filter
// only return email and created attributes
// and return back the consumed capacity the request took
Account
    .scan()
    .where('email').gte('f@example.com')
    .attributes(['email', 'created'])
    .returnConsumedCapacity()
    .exec();

// Load All accounts, if settings.acceptedTerms is true
Account
    .scan()
    .where('settings.acceptedTerms').equals(true)
    .exec();

// Returns number of matching accounts, rather than the matching accounts themselves
Account
    .scan()
    .where('age').gte(21)
    .select('COUNT')
    .exec();

// Start scan using start key
Account
    .scan()
    .where('age').notNull()
    .startKey('foo@example.com')
    .exec();

// equals
Account
    .scan()
    .where('name').equals('Werner')
    .exec();

// not equals
Account
    .scan()
    .where('name').ne('Werner')
    .exec();

// less than equals
Account
    .scan()
    .where('name').lte('Werner')
    .exec();

// less than
Account
    .scan()
    .where('name').lt('Werner')
    .exec();

// greater than equals
Account
    .scan()
    .where('name').gte('Werner')
    .exec();

// greater than
Account
    .scan()
    .where('name').gt('Werner')
    .exec();

// name attribute doesn't exist
Account
    .scan()
    .where('name').null()
    .exec();

// name attribute exists
Account
    .scan()
    .where('name').notNull()
    .exec();

// contains
Account
    .scan()
    .where('name').contains('ner')
    .exec();

// not contains
Account
    .scan()
    .where('name').notContains('ner')
    .exec();

// in
Account
    .scan()
    .where('name').in(['foo@example.com', 'bar@example.com'])
    .exec();

// begins with
Account
    .scan()
    .where('name').beginsWith('Werner')
    .exec();

// between
Account
    .scan()
    .where('name').between('Bar', 'Foo')
    .exec();

// multiple filters
Account
    .scan()
    .where('name').equals('Werner')
    .where('age').notNull()
    .exec();

Account.scan()
    .filterExpression('#age BETWEEN :low AND :high AND begins_with(#email, :e)')
    .expressionAttributeValues({ ':low': 18, ':high': 22, ':e': 'test1' })
    .expressionAttributeNames({ '#age': 'age', '#email': 'email' })
    .projectionExpression('#age, #email')
    .exec();

const totalSegments = 8;

Account.parallelScan(totalSegments)
    .where('age').gte(18)
    .attributes('age')
    .exec(callback);

// Load All accounts
Account
    .parallelScan(totalSegments)
    .exec();

Account.getItems(['foo@example.com', 'bar@example.com', 'test@example.com'], (err, accounts) => {
    console.log(`loaded ${accounts.length} accounts`); // prints loaded 3 accounts
});

// Get both accounts, using a consistent read
Account.getItems(['foo@example.com', 'bar@example.com'], { ConsistentRead: true }, (err, accounts) => {
    console.log(`loaded ${accounts.length} accounts`); // prints loaded 2 accounts
});

// Streaming API

const stream = Account.parallelScan(4).exec();

stream.on('readable', () => {
    console.log('single parallel scan response', stream.read());
});

stream.on('end', () => {
    console.log('Parallel scan of accounts finished');
});

const querystream = BlogPost.query('werner@dynogels.com').loadAll().exec();

querystream.on('readable', () => {
    console.log('single query response', stream.read());
});

querystream.on('end', () => {
    console.log('query for blog posts finished');
});

// Dynamic Table Names

const Event2 = dynogels.define('Event', {
    hashKey: 'name',
    schema: {
        name: Joi.string(),
        total: Joi.number()
    },

    // store monthly event data
    tableName: () => {
        const d = new Date();
        return ['events', d.getFullYear(), d.getMonth() + 1].join('_');
    }
});

// Logging

const accountLogger = {
    info: (...args: any[]) => { },
    warn: (...args: any[]) => { }
};

dynogels.log = accountLogger;

const Account3 = dynogels.define('Account', {
    hashKey: 'email',
    log: accountLogger
}); // INFO level on account table

const Account4 = dynogels.define('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
        name: Joi.string().required(),
        age: Joi.number(),
    }
});

Account.create({ email: 'test@example.com', name: 'Test Account' }, (err, acc) => {
    console.log('created account at', acc.get('created')); // prints created Date

    acc.set({ age: 22 });

    acc.update((err) => {
        console.log('updated account age');
    });
});

// For models with range keys you must pass in objects of hash and range key attributes
const postKey1 = { email: 'test@example.com', title: 'Hello World!' };
const postKey2 = { email: 'test@example.com', title: 'Another Post' };

BlogPost.getItems([postKey1, postKey2], (err, posts) => {
    console.log('loaded posts');
});

dynogels.log.info("test", "123", {});
dynogels.log.warn("test", "123", {});

// Lifecycle hooks
Account.before('create', (data, next) => {
    if (!data.name) {
        data.name = 'Foo Bar';
    }

    next(null, data);
});

Account.before('update', (data, next) => {
    data.age = 45;
    next(null, data);
});

Account.after('create', item => {
    console.log('Account created', item.get());
});

Account.after('update', item => {
    console.log('Account updated', item.get());
});

Account.after('destroy', item => {
    console.log('Account destroyed', item.get());
});

dynogels.createTables(err => {
    if (err) {
        process.exit(1);
    }

    Account.create({ email: 'test11@example.com' }, (err, acc) => {
        acc.set({ age: 25 });

        acc.update(() => {
            acc.destroy({ ReturnValues: 'ALL_OLD' });
        });
    });
});

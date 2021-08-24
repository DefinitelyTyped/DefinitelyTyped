import * as dynamo from 'dynamodb';
import * as Joi from 'joi';

dynamo.AWS.config.loadFromPath('credentials.json');
dynamo.AWS.config.update({ region: 'REGION' });
dynamo.AWS.config.update({
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'REGION',
});

let Account = dynamo.define('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
        name: Joi.string(),
        age: Joi.number(),
        roles: dynamo.types.stringSet(),
        settings: {
            nickname: Joi.string(),
            acceptedTerms: Joi.boolean().default(false),
        },
    },
});

const AccountTyped = dynamo.define<{
    email: string;
    name: string;
    age?: number;
    roles?: string[];
    settings?: { nickname: string; acceptedTerms: boolean };
}>('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
        name: Joi.string(),
        age: Joi.number(),
        roles: dynamo.types.stringSet(),
        settings: {
            nickname: Joi.string(),
            acceptedTerms: Joi.boolean().default(false),
        },
    },
});

let BlogPost = dynamo.define('BlogPost', {
    hashKey: 'email',
    rangeKey: 'title',
    schema: {
        email: Joi.string().email(),
        title: Joi.string(),
        content: Joi.binary(),
        tags: dynamo.types.stringSet(),
    },
});

dynamo.createTables(err => {
    if (err) {
        console.log('Error creating tables: ', err);
    } else {
        console.log('Tables has been created');
    }
});

dynamo.createTables(
    {
        BlogPost: { readCapacity: 5, writeCapacity: 10 },
        Account: { readCapacity: 20, writeCapacity: 4 },
    },
    err => {
        if (err) {
            console.log('Error creating tables: ', err);
        } else {
            console.log('Tables has been created');
        }
    },
);

BlogPost.deleteTable(err => {
    if (err) {
        console.log('Error deleting table: ', err);
    } else {
        console.log('Table has been deleted');
    }
});

const Tweet = dynamo.define('Tweet', {
    hashKey: 'TweetID',
    timestamps: true,
    schema: {
        TweetID: dynamo.types.uuid(),
        content: Joi.string(),
    },
});

Account = dynamo.define('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
    },
});

Account = dynamo.define('Account', {
    hashKey: 'email',

    // enable timestamps support
    timestamps: true,

    // I don't want createdAt
    createdAt: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp',

    schema: {
        email: Joi.string().email(),
    },
});

let Event = dynamo.define('Event', {
    hashKey: 'name',
    schema: {
        name: Joi.string(),
        total: Joi.number(),
    },

    tableName: 'deviceEvents',
});

Event = dynamo.define('Event', {
    hashKey: 'name',
    schema: {
        name: Joi.string(),
        total: Joi.number(),
    },

    // store monthly event data
    tableName: () => {
        const d = new Date();
        return ['events', d.getFullYear(), d.getMonth() + 1].join('_');
    },
});

Account.config({ tableName: 'AccountsTable' });

Account.create(
    { email: 'foo@example.com', name: 'Foo Bar', age: 21 },
    (err, acc) => {
        console.log('created account in DynamoDB', acc.get('email'));
    },
);

AccountTyped.create({ email: 'foo@example.com', name: 'Foo Bar', age: 21 }, (err, acc) => {
    console.log('created account in DynamoDB', acc.get('email'), acc.attrs.email);
});

const acc = new Account({ email: 'test@example.com', name: 'Test Example' });

acc.save(err => {
    console.log('created account in DynamoDB', acc.get('email'));
});

const accTyped = new AccountTyped({ email: 'test@example.com', name: 'Test Example' });

accTyped.save(err => {
    console.log('created account in DynamoDB', accTyped.get('email'), accTyped.attrs.email);
});

BlogPost.create(
    {
        email: 'werner@example.com',
        title: 'Expanding the Cloud',
        content: 'Today, we are excited to announce the limited preview...',
    },
    (err, post) => {
        console.log('created blog post', post.get('title'));
    },
);

const item1 = { email: 'foo1@example.com', name: 'Foo 1', age: 10 };
const item2 = { email: 'foo2@example.com', name: 'Foo 2', age: 20 };
const item3 = { email: 'foo3@example.com', name: 'Foo 3', age: 30 };

Account.create([item1, item2, item3], (err, accounts) => {
    console.log('created 3 accounts in DynamoDB', accounts);
});

AccountTyped.create([item1, item2, item3], (err, accounts) => {
    accounts.map(acc => {
        console.log('created account', acc.get('email'), acc.attrs.email);
    });
});

let params: dynamo.Model.OperationOptions = {};
params.ConditionExpression = '#i <> :x';
params.ExpressionAttributeNames = { '#i': 'id' };
params.ExpressionAttributeValues = { ':x': 123 };

Account.create({ id: 123, name: 'Kurt Warner' }, params, (error, acc) => {
    // ...
});

Account.create(
    { id: 123, name: 'Kurt Warner' },
    { overwrite: false },
    (error, acc) => {
        // ...
    },
);

Account.update({ email: 'foo@example.com', name: 'Bar Tester' }, (err, acc) => {
    console.log('update account', acc.get('name'));
});

AccountTyped.update({ email: 'foo@example.com', name: 'Bar Tester' }, (err, acc) => {
    console.log('update account', acc.get('name'), acc.attrs.name);
});

Account.update(
    { email: 'foo@example.com', name: 'Bar Tester' },
    { ReturnValues: 'ALL_OLD' },
    (err, acc) => {
        console.log('update account', acc.get('name')); // prints the old account name
    },
);

// Only update the account if the current age of the account is 21
Account.update(
    { email: 'foo@example.com', name: 'Bar Tester' },
    { expected: { age: 22 } },
    (err, acc) => {
        console.log('update account', acc.get('name'));
    },
);

// setting an attribute to null will delete the attribute from DynamoDB
Account.update({ email: 'foo@example.com', age: null }, (err, acc) => {
    console.log('update account', acc.get('age')); // prints null
});

Account.update({ email: 'foo@example.com', age: { $add: 1 } }, (err, acc) => {
    console.log('incremented age by 1', acc.get('age'));
});

BlogPost.update(
    {
        email: 'werner@example.com',
        title: 'Expanding the Cloud',
        tags: { $add: 'cloud' },
    },
    (err, post) => {
        console.log('added single tag to blog post', post.get('tags'));
    },
);

BlogPost.update(
    {
        email: 'werner@example.com',
        title: 'Expanding the Cloud',
        tags: { $add: ['cloud', 'dynamodb'] },
    },
    (err, post) => {
        console.log('added tags to blog post', post.get('tags'));
    },
);

BlogPost.update(
    {
        email: 'werner@example.com',
        title: 'Expanding the Cloud',
        tags: { $del: 'cloud' },
    },
    (err, post) => {
        console.log('removed cloud tag from blog post', post.get('tags'));
    },
);

BlogPost.update(
    {
        email: 'werner@example.com',
        title: 'Expanding the Cloud',
        tags: { $del: ['aws', 'node'] },
    },
    (err, post) => {
        console.log('removed multiple tags', post.get('tags'));
    },
);

params = {};
params.UpdateExpression =
    'SET #year = #year + :inc, #dir.titles = list_append(#dir.titles, :title), #act[0].firstName = :firstName ADD tags :tag';
params.ConditionExpression = '#year = :current';
params.ExpressionAttributeNames = {
    '#year': 'releaseYear',
    '#dir': 'director',
    '#act': 'actors',
};

params.ExpressionAttributeValues = {
    ':inc': 1,
    ':current': 2001,
    ':title': ['The Man'],
    ':firstName': 'Rob',
    ':tag': dynamo.Set(['Sports', 'Horror'], 'S'),
};

const Movie = dynamo.define('Movie', {
    hashKey: 'foo',
    schema: {},
});

Movie.update(
    { title: 'Movie 0', description: 'This is a description' },
    params,
    (err, mov) => {},
);

Account.destroy('foo@example.com', err => {
    console.log('account deleted');
});

// Destroy model using hash and range key
BlogPost.destroy('foo@example.com', 'Hello World!', err => {
    console.log('post deleted');
});

BlogPost.destroy({ email: 'foo@example.com', title: 'Another Post' }, err => {
    console.log('another post deleted');
});

Account.destroy('foo@example.com', { expected: { age: 22 } }, err => {
    console.log('account deleted if the age was 22');
});

Account.destroy('foo@example.com', { ReturnValues: true }, (err, acc) => {
    console.log('account deleted');
    console.log('deleted account name', acc.get('name'));
});

params = {};
params.ConditionExpression = '#v = :x';
params.ExpressionAttributeNames = { '#v': 'version' };
params.ExpressionAttributeValues = { ':x': '2' };

Account.destroy({ id: 123 }, params, (err, acc) => {});

Account.get('test@example.com', (err, acc) => {
    console.log('got account', acc.get('email'));
});

AccountTyped.get('test@example.com', (err, acc) => {
    console.log('got account', acc.get('email'), acc.attrs.email);
});

Account.get('test@example.com', { ConsistentRead: true }, (err, acc) => {
    console.log('got account', acc.get('email'));
});

Account.get(
    'test@example.com',
    { ConsistentRead: true, AttributesToGet: ['name', 'age'] },
    (err, acc) => {
        console.log('got account', acc.get('email'));
        console.log(acc.get('name'));
        console.log(acc.get('age'));
        console.log(acc.get('email')); // prints null
    },
);

BlogPost.get(
    'werner@example.com',
    'dynamodb-keeps-getting-better-and-cheaper',
    (err, post) => {
        console.log('loaded post by range and hash key', post.get('content'));
    },
);

BlogPost.get(
    { email: 'werner@example.com', title: 'Expanding the Cloud' },
    (err, post) => {
        console.log('loded post', post.get('content'));
    },
);

Account.get(
    { id: '123456789' },
    { ProjectionExpression: 'email, age, settings.nickname' },
    (err, acc) => {},
);

const callback = () => {};

// Typed Account query
AccountTyped.query('foo1@example.com').exec((err, data) => {
    data.Items.map(i => console.log('fetched account', i.get('email'), i.attrs.email));
});

// Typed Account query with promise (incl. nested array)
AccountTyped.query('foo1@example.com')
    .exec()
    .promise()
    .then(data => data[0].Items.map(i => console.log('fetched account', i.get('email'), i.attrs.email)));

// query for blog posts by werner@example.com
BlogPost.query('werner@example.com').exec(callback);

// query for blog posts by werner@example.com as a promise
BlogPost.query('werner@example.com').exec().promise().then(callback);

// same as above, but load all results
BlogPost.query('werner@example.com')
    .loadAll()
    .exec(callback);

// only load the first 5 posts by werner
BlogPost.query('werner@example.com')
    .limit(5)
    .exec(callback);

// query for posts by werner where the tile begins with 'Expanding'
BlogPost.query('werner@example.com')
    .where('title')
    .beginsWith('Expanding')
    .exec(callback);

// return only the count of documents that begin with the title Expanding
BlogPost.query('werner@example.com')
    .where('title')
    .beginsWith('Expanding')
    .select('COUNT')
    .exec(callback);

// only return title and content attributes of 10 blog posts
// that begin with the title Expanding
BlogPost.query('werner@example.com')
    .where('title')
    .beginsWith('Expanding')
    .attributes(['title', 'content'])
    .limit(10)
    .exec(callback);

// sorting by title ascending
BlogPost.query('werner@example.com')
    .ascending()
    .exec(callback);

// sorting by title descending
BlogPost.query('werner@example.com')
    .descending()
    .exec(callback);

// All query options are chainable
BlogPost.query('werner@example.com')
    .where('title')
    .gt('Expanding')
    .attributes(['title', 'content'])
    .limit(10)
    .ascending()
    .loadAll()
    .exec(callback);

BlogPost.query('werner@example.com')
    .where('title')
    .equals('Expanding')
    .exec(callback);

// less than equals
BlogPost.query('werner@example.com')
    .where('title')
    .lte('Expanding')
    .exec(callback);

// less than
BlogPost.query('werner@example.com')
    .where('title')
    .lt('Expanding')
    .exec(callback);

// greater than
BlogPost.query('werner@example.com')
    .where('title')
    .gt('Expanding')
    .exec(callback);

// greater than equals
BlogPost.query('werner@example.com')
    .where('title')
    .gte('Expanding')
    .exec(callback);

BlogPost.query('werner@example.com')
    .where('title')
    .beginsWith('Expanding')
    .exec(callback);

BlogPost.query('werner@example.com')
    .where('title')
    .between('foo@example.com', 'test@example.com')
    .exec(callback);

BlogPost.query('werner@example.com')
    .where('title')
    .equals('Expanding')
    .filter('tags')
    .contains('cloud')
    .exec(callback);

BlogPost.query('werner@example.com')
    .filterExpression('#title < :t')
    .expressionAttributeValues({ ':t': 'Expanding' })
    .expressionAttributeNames({ '#title': 'title' })
    .projectionExpression('#title, tag')
    .exec(callback);

BlogPost.query('werner@example.com')
    .filter('title')
    .exists(true);

let GameScore = dynamo.define('GameScore', {
    hashKey: 'userId',
    rangeKey: 'gameTitle',
    schema: {
        userId: Joi.string(),
        gameTitle: Joi.string(),
        topScore: Joi.number(),
        topScoreDateTime: Joi.date(),
        wins: Joi.number(),
        losses: Joi.number(),
    },
    indexes: [
        {
            hashKey: 'gameTitle',
            rangeKey: 'topScore',
            name: 'GameTitleIndex',
            type: 'global',
        },
    ],
});

GameScore.query('Galaxy Invaders')
    .usingIndex('GameTitleIndex')
    .descending()
    .exec(callback);

GameScore = dynamo.define('GameScore', {
    hashKey: 'userId',
    rangeKey: 'gameTitle',
    schema: {
        userId: Joi.string(),
        gameTitle: Joi.string(),
        topScore: Joi.number(),
        topScoreDateTime: Joi.date(),
        wins: Joi.number(),
        losses: Joi.number(),
    },
    indexes: [
        {
            hashKey: 'gameTitle',
            rangeKey: 'topScore',
            name: 'GameTitleIndex',
            type: 'global',
            projection: {
                NonKeyAttributes: ['wins'],
                ProjectionType: 'INCLUDE',
            }, // optional, defaults to ALL
        },
    ],
});

GameScore.query('Galaxy Invaders')
    .usingIndex('GameTitleIndex')
    .where('topScore')
    .gt(1000)
    .descending()
    .exec((err, data) => {
        console.log(data.Items);
    });

BlogPost = dynamo.define('Account', {
    hashKey: 'email',
    rangeKey: 'title',
    schema: {
        email: Joi.string().email(),
        title: Joi.string(),
        content: Joi.binary(),
        PublishedDateTime: Joi.date(),
    },

    indexes: [
        {
            hashKey: 'email',
            rangeKey: 'PublishedDateTime',
            type: 'local',
            name: 'PublishedIndex',
        },
    ],
});

BlogPost.query('werner@example.com')
    .usingIndex('PublishedIndex')
    .descending()
    .exec(callback);

BlogPost.query('werner@example.com')
    .usingIndex('PublishedIndex')
    .ascending()
    .exec(callback);

BlogPost.query('werner@example.com')
    .usingIndex('PublishedIndex')
    .descending()
    .loadAll()
    .exec(callback);

// scan all accounts, returning the first page or results
Account.scan().exec(callback);

// scan all accounts, this time loading all results
// note this will potentially make several calls to DynamoDB
// in order to load all results
Account.scan()
    .loadAll()
    .exec(callback);

AccountTyped.scan()
    .loadAll()
    .exec((err, data) => {
        data.Items.map(i => {
            console.log('scanned account: ', i.get('email'), i.attrs.email);
        });
    });

// Promised scan with nested array
AccountTyped.scan()
    .loadAll()
    .exec()
    .promise()
    .then()
    .then(data => data[0].Items.map(i => console.log('fetched account 1234', i.get('email'), i.attrs.email)));

// Load 20 accounts
Account.scan()
    .limit(20)
    .exec(callback);

// Load All accounts, 20 at a time per request
Account.scan()
    .limit(20)
    .loadAll()
    .exec(callback);

// Load accounts which match a filter
// only return email and created attributes
// and return back the consumed capacity the request took
Account.scan()
    .where('email')
    .gte('f@example.com')
    .attributes(['email', 'created'])
    .returnConsumedCapacity()
    .exec(callback);

// Returns number of matching accounts, rather than the matching accounts themselves
Account.scan()
    .where('age')
    .gte(21)
    .select('COUNT')
    .exec(callback);

// Start scan using start key
Account.scan()
    .where('age')
    .notNull()
    .startKey('foo@example.com')
    .exec(callback);

// equals
Account.scan()
    .where('name')
    .equals('Werner')
    .exec(callback);

// not equals
Account.scan()
    .where('name')
    .ne('Werner')
    .exec(callback);

// less than equals
Account.scan()
    .where('name')
    .lte('Werner')
    .exec(callback);

// less than
Account.scan()
    .where('name')
    .lt('Werner')
    .exec(callback);

// greater than equals
Account.scan()
    .where('name')
    .gte('Werner')
    .exec(callback);

// greater than
Account.scan()
    .where('name')
    .gt('Werner')
    .exec(callback);

// name attribute doesn't exist
Account.scan()
    .where('name')
    .null()
    .exec(callback);

// name attribute exists
Account.scan()
    .where('name')
    .notNull()
    .exec(callback);

// contains
Account.scan()
    .where('name')
    .contains('ner')
    .exec(callback);

// not contains
Account.scan()
    .where('name')
    .notContains('ner')
    .exec(callback);

// in
Account.scan()
    .where('name')
    .in(['foo@example.com', 'bar@example.com'])
    .exec(callback);

// begins with
Account.scan()
    .where('name')
    .beginsWith('Werner')
    .exec(callback);

// between
Account.scan()
    .where('name')
    .between('Bar', 'Foo')
    .exec(callback);

// multiple filters
Account.scan()
    .where('name')
    .equals('Werner')
    .where('age')
    .notNull()
    .exec(callback);

Account.scan()
    .filterExpression('#age BETWEEN :low AND :high AND begins_with(#email, :e)')
    .expressionAttributeValues({ ':low': 18, ':high': 22, ':e': 'test1' })
    .expressionAttributeNames({ '#age': 'age', '#email': 'email' })
    .projectionExpression('#age, #email')
    .exec(callback);

const totalSegments = 8;

Account.parallelScan(totalSegments)
    .where('age')
    .gte(18)
    .attributes('age')
    .exec(callback);

// Load All accounts
Account.parallelScan(totalSegments).exec();

Account.getItems(
    ['foo@example.com', 'bar@example.com', 'test@example.com'],
    (err, accounts) => {
        console.log(`loaded ${accounts.length} accounts`); // prints loaded 3 accounts
    },
);

AccountTyped.getItems(['foo@example.com', 'bar@example.com', 'test@example.com'], (err, accounts) => {
    console.log(`loaded ${accounts.length} accounts`); // prints loaded 3 accounts
});

// For models with range keys you must pass in objects of hash and range key attributes
const postKey1 = { email: 'test@example.com', title: 'Hello World!' };
const postKey2 = { email: 'test@example.com', title: 'Another Post' };

BlogPost.getItems([postKey1, postKey2], (err, posts) => {
    console.log('loaded posts');
});

Account.getItems(
    ['foo@example.com', 'bar@example.com'],
    { ConsistentRead: true },
    (err, accounts) => {
        console.log(`loaded ${accounts.length} accounts`); // prints loaded 2 accounts
    },
);

let stream = Account.parallelScan(4).exec();

stream.on('readable', () => {
    console.log('single parallel scan response', stream.read());
});

stream.on('end', () => {
    console.log('Parallel scan of accounts finished');
});

let querystream = BlogPost.query('werner@dynamo.com')
    .loadAll()
    .exec();

querystream.on('readable', () => {
    console.log('single query response', stream.read());
});

querystream.on('end', () => {
    console.log('query for blog posts finished');
});

stream = Account.parallelScan(4).exec();

stream.on('readable', () => {
    console.log('single parallel scan response', stream.read());
});

stream.on('end', () => {
    console.log('Parallel scan of accounts finished');
});

querystream = BlogPost.query('werner@dynamo.com')
    .loadAll()
    .exec();

querystream.on('readable', () => {
    console.log('single query response', stream.read());
});

querystream.on('end', () => {
    console.log('query for blog posts finished');
});

Event = dynamo.define('Event', {
    hashKey: 'name',
    schema: {
        name: Joi.string(),
        total: Joi.number(),
    },

    // store monthly event data
    tableName: () => {
        const d = new Date();
        return ['events', d.getFullYear(), d.getMonth() + 1].join('_');
    },
});

dynamo.log.level('info'); // enabled INFO log level

Account = dynamo.define('Account', { hashKey: 'email' });
Event = dynamo.define('Account', { hashKey: 'name' });

Account.log.level('warn'); // enable WARN log level for Account model operations

Account = dynamo.define('Account', {
    hashKey: 'email',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
        email: Joi.string().email(),
        name: Joi.string().required(),
        age: Joi.number(),
    },
});

Account.create(
    { email: 'test@example.com', name: 'Test Account' },
    (err, acc) => {
        console.log('created account at', acc.get('created')); // prints created Date

        acc.set({ age: 22 });

        acc.update((err: any) => {
            console.log('updated account age');
        });
    },
);

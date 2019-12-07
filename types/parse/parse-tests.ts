class GameScore extends Parse.Object {
    constructor(options?: any) {
        super('GameScore', options);
    }
}

class Game extends Parse.Object {
    constructor(options?: any) {
        super('Game', options);
    }
}

function test_config() {
    Parse.Config.save({ foo: 'bar' }, { foo: true });
    Parse.Config.get({ useMasterKey: true });
}

function test_object() {
    const game = new Game();

    game.save(null, {
        useMasterKey: true,
        sessionToken: 'sometoken',
        cascadeSave: false,
    }).then(result => result);

    if (!game.isNew()) {
        console.error('Game should be new');
    }

    if (game.toPointer().className !== 'Game') {
        console.log("Class name should be 'Game");
    }

    game.fetch({
        success(g: Game) {},
    });

    // Create a new instance of that class.
    const gameScore = new GameScore();

    gameScore.set('score', 1337);
    gameScore.set('playerName', 'Sean Plott');
    gameScore.set('cheatMode', false);

    // Setting attrs using object
    gameScore.set({
        level: '10',
        difficult: 15,
    });

    const score = gameScore.get('score');
    const playerName = gameScore.get('playerName');
    const cheatMode = gameScore.get('cheatMode');

    gameScore.increment('score');
    gameScore.addUnique('skills', 'flying');
    gameScore.addUnique('skills', 'kungfu');
    gameScore.addAll('skills', ['kungfu']);
    gameScore.addAllUnique('skills', ['kungfu']);
    gameScore.remove('skills', 'flying');
    gameScore.removeAll('skills', ['kungFu']);
    game.set('gameScore', gameScore);

    const gameCopy = Game.fromJSON(JSON.parse(JSON.stringify(game)), true);

    const object = new Parse.Object('TestObject');
    object.equals(gameScore);
    object.fetchWithInclude(['key1', 'key2']);
}

function test_errors() {
    try {
        throw new Parse.Error(Parse.Error.INTERNAL_SERVER_ERROR, 'sdfds');
    } catch (error) {
        if (error.code !== 1) {
            console.error('Error code did not match expected number.');
        }
    }
}

function test_query() {
    const gameScore = new GameScore();

    const query = new Parse.Query(GameScore);
    query.equalTo('playerName', 'Dan Stemkoski');
    query.notEqualTo('playerName', 'Michael Yabuti');
    query.fullText('playerName', 'dan', { language: 'en', caseSensitive: false, diacriticSensitive: true });
    query.greaterThan('playerAge', 18);
    query.limit(10);
    query.skip(10);

    // Sorts the results in ascending order by the score field
    query.ascending('score');

    // Sorts the results in descending order by the score field
    query.descending('score');

    // Restricts to wins < 50
    query.lessThan('wins', 50);

    // Restricts to wins <= 50
    query.lessThanOrEqualTo('wins', 50);

    // Restricts to wins > 50
    query.greaterThan('wins', 50);

    // Restricts to wins >= 50
    query.greaterThanOrEqualTo('wins', 50);

    query.containedBy('place', ['1', '2']);
    // Finds scores from any of Jonathan, Dario, or Shawn
    query.containedIn('playerName', ['Jonathan Walsh', 'Dario Wunsch', 'Shawn Simon']);

    // Finds scores from anyone who is neither Jonathan, Dario, nor Shawn
    query.notContainedIn('playerName', ['Jonathan Walsh', 'Dario Wunsch', 'Shawn Simon']);

    // Finds objects that have the score set
    query.exists('score');

    // Finds objects that don't have the score set
    query.doesNotExist('score');
    query.matchesKeyInQuery('hometown', 'city', query);
    query.doesNotMatchKeyInQuery('hometown', 'city', query);
    query.select('score', 'playerName');

    // Find objects where the array in arrayKey contains 2.
    query.equalTo('arrayKey', 2);

    // Find objects where the array in arrayKey contains all of the elements 2, 3, and 4.
    query.containsAll('arrayKey', [2, 3, 4]);
    query.containsAllStartingWith('arrayKey', [2, 3, 4]);

    query.startsWith('name', "Big Daddy's");
    query.equalTo('score', gameScore);
    query.exists('score');
    query.include('score');
    query.include(['score.team']);
    query.includeAll();
    query.sortByTextScore();
    // Find objects that match the aggregation pipeline
    query.aggregate({
        group: {
            objectId: '$name',
        },
    });

    // Find objects with distinct key
    query.distinct('name');

    const testQuery = Parse.Query.or(query, query);
}

async function test_query_promise() {
    // Test promise with a query
    const findQuery = new Parse.Query('Test');
    findQuery
        .find()
        .then(() => {
            // success
        })
        .catch(() => {
            // error
        });

    const getQuery = new Parse.Query('Test');
    try {
        await getQuery.get('objectId');
    } catch (error) {
        // noop
    }
}

async function test_live_query() {
    const subscription = await new Parse.Query('Test').subscribe();
    subscription.on('close', (object) => {
        (object instanceof Parse.Object) == true;
    });
    subscription.on('create', (object) => {
        (object instanceof Parse.Object) == true;
    });
    subscription.on('delete', (object) => {
        (object instanceof Parse.Object) == true;
    });
    subscription.on('enter', (object) => {
        (object instanceof Parse.Object) == true;
    });
    subscription.on('leave', (object) => {
        (object instanceof Parse.Object) == true;
    });
    subscription.on('open', (object) => {
        (object instanceof Parse.Object) == true;
    });
    subscription.on('update', (object) => {
        (object instanceof Parse.Object) == true;
    });
}

function return_a_generic_query(): Parse.Query<Game> {
    return new Parse.Query(Game);
}

function return_a_query(): Parse.Query {
    return new Parse.Query(Game);
}

function test_file() {
    const base64 = 'V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=';
    let file = new Parse.File('myfile.txt', { base64: base64 });

    file = new Parse.File('nana', { uri: 'http://example.com/image.jps' });

    const bytes = [0xbe, 0xef, 0xca, 0xfe];
    file = new Parse.File('myfile.txt', bytes);

    file = new Parse.File('myfile.zzz', new Blob(), 'image/png');

    const src = file.url();

    file.save().then(
        () => {
            // The file has been saved to Parse.
        },
        error => {
            // The file either could n ot be read, or could not be saved to Parse.
        },
    );

    Parse.Cloud.httpRequest({ url: file.url() }).then((response: Parse.Cloud.HttpResponse) => {
        // result
    });

    // TODO: Check
}

function test_analytics() {
    const dimensions = {
        // Define  ranges to bucket data points into meaningful segments
        priceRange: '1000-1500',
        // Did the user filter the query?
        source: 'craigslist',
        // Do searches happen more often on weekdays or weekends?
        dayType: 'weekday',
    };
    // Send the dimensions to Parse along with the 'search' event
    Parse.Analytics.track('search', dimensions);

    const codeString = '404';
    Parse.Analytics.track('error', { code: codeString });
}

function test_relation() {
    var game1 = new Game();
    var game2 = new Game();

    new Parse.User()
        .relation('games')
        .query()
        .find()
        .then((g: Game[]) => {});
    new Parse.User().relation('games').add(game1);
    new Parse.User().relation('games').add([game1, game2]);

    new Parse.User().relation('games').remove(game1);
    new Parse.User().relation('games').remove([game1, game2]);
}

function test_user() {
    const user = new Parse.User();
    user.set('username', 'my name');
    user.set('password', 'my pass');
    user.set('email', 'email@example.com');
    user.signUp(null, { useMasterKey: true });

    const anotherUser: Parse.User = Parse.User.fromJSON({});
    anotherUser.set('email', 'email@example.com');
}

async function test_user_currentAsync() {
    const asyncUser = await Parse.User.currentAsync();
    if (asyncUser) {
        asyncUser.set('email', 'email@example.com');
    } else if (asyncUser === null) {
        Parse.User.logIn('email@example.com', 'my pass');
    }
}

function test_user_acl_roles() {
    const user = new Parse.User();
    user.set('username', 'my name');
    user.set('password', 'my pass');
    user.set('email', 'email@example.com');

    // other fields can be set just like with Parse.Object
    user.set('phone', '415-392-0202');

    const currentUser = Parse.User.current();
    if (currentUser) {
        // do stuff with the user
    } else {
        // show the signup or login page
    }

    Parse.User.become('session-token-here').then(
        function(user) {
            // The current user is now set to user.
        },
        function(error) {
            // The token could not be validated.
        },
    );

    Parse.User.hydrate({}).then(
        function(user) {
            // The current user is now set to user.
        },
        function(error) {
            // The token could not be validated.
        },
    );

    const game = new Game();
    game.set('score', new GameScore());
    game.setACL(new Parse.ACL(Parse.User.current()));
    game.save().then((game: Game) => {});
    game.save(null, { useMasterKey: true });
    game.save({ score: '10' }, { useMasterKey: true }).then(
        function(game) {
            // Update game then revert it to the last saved state.
            game.set('score', '20');
            game.revert('score');
            game.revert('score', 'ACL');
            game.revert();
        },
        function(error) {
            // The save failed
        },
    );

    const groupACL = new Parse.ACL();

    const userList: Parse.User[] = [Parse.User.current()!];
    // userList is an array with the users we are sending this message to.
    for (let i = 0; i < userList.length; i++) {
        groupACL.setReadAccess(userList[i], true);
        groupACL.setWriteAccess(userList[i], true);
    }

    groupACL.setPublicReadAccess(true);

    game.setACL(groupACL);

    Parse.User.requestPasswordReset('email@example.com').then(
        function(data) {
            // The current user is now set to user.
        },
        function(error) {
            // The token could not be validated.
        },
    );

    // By specifying no write privileges for the ACL, we can ensure the role cannot be altered.
    const role = new Parse.Role('Administrator', groupACL);
    role.getUsers().add(userList[0]);
    role.getRoles().add(role);
    role.save();

    Parse.User.logOut().then(function(data) {
        // logged out
    });
}

function test_facebook_util() {
    Parse.FacebookUtils.init({
        appId: 'YOUR_APP_ID', // Facebook App ID
        channelUrl: '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
        cookie: true, // enable cookies to allow Parse to access the session
        xfbml: true, // parse XFBML
    });

    Parse.FacebookUtils.logIn(null, {
        success: (user: Parse.User) => {
            if (!user.existed()) {
                alert('User signed up and logged in through Facebook!');
            } else {
                alert('User logged in through Facebook!');
            }
        },
        error: (user: Parse.User, error: any) => {
            alert('User cancelled the Facebook login or did not fully authorize.');
        },
    });

    const user = Parse.User.current()!;

    if (!Parse.FacebookUtils.isLinked(user)) {
        Parse.FacebookUtils.link(user, null, {
            success: (user: any) => {
                alert('Woohoo, user logged in with Facebook!');
            },
            error: (user: any, error: any) => {
                alert('User cancelled the Facebook login or did not fully authorize.');
            },
        });
    }

    Parse.FacebookUtils.unlink(user, {
        success: (user: Parse.User) => {
            alert('The user is no longer associated with their Facebook account.');
        },
    });
}

function test_cloud_functions() {
    Parse.Cloud.run(
        'hello',
        {},
        {
            success: (result: any) => {
                // result
            },
            error: (error: any) => {},
        },
    );

    Parse.Cloud.afterDelete('MyCustomClass', (request: Parse.Cloud.AfterDeleteRequest) => {
        // result
    });

    Parse.Cloud.afterSave('MyCustomClass', (request: Parse.Cloud.AfterSaveRequest) => {
        if (!request.context) {
            throw new Error('Request context should be defined');
        }
        // result
    });

    Parse.Cloud.beforeDelete('MyCustomClass', (request: Parse.Cloud.BeforeDeleteRequest) => {
        // result
    });

    Parse.Cloud.beforeDelete('MyCustomClass', async (request: Parse.Cloud.BeforeDeleteRequest) => {
        // result
    });

    const CUSTOM_ERROR_INVALID_CONDITION = 1001;
    const CUSTOM_ERROR_IMMUTABLE_FIELD = 1002;

    Parse.Cloud.beforeSave('MyCustomClass', async (request: Parse.Cloud.BeforeSaveRequest) => {
        if (request.object.isNew()) {
            if (!request.object.has('immutable')) throw new Error('Field immutable is required');
        } else {
            const original = request.original;
            if (original == null) {
                // When the object is not new, request.original must be defined
                throw new Parse.Error(
                    CUSTOM_ERROR_INVALID_CONDITION,
                    'Original must me defined for an existing object',
                );
            }

            if (original.get('immutable') !== request.object.get('immutable')) {
                throw new Parse.Error(CUSTOM_ERROR_IMMUTABLE_FIELD, 'This field cannot be changed');
            }
        }
        if (!request.context) {
            throw new Error('Request context should be defined');
        }
    });

    Parse.Cloud.beforeFind('MyCustomClass', (request: Parse.Cloud.BeforeFindRequest) => {
        let query = request.query; // the Parse.Query
        let user = request.user; // the user
        let isMaster = request.master; // if the query is run with masterKey
        let isCount = request.count; // if the query is a count operation (available on parse-server 2.4.0 or up)
        let isGet = request.isGet; // if the query is a get operation

        // All possible read preferences
        request.readPreference = Parse.Cloud.ReadPreferenceOption.Primary;
        request.readPreference = Parse.Cloud.ReadPreferenceOption.PrimaryPreferred;
        request.readPreference = Parse.Cloud.ReadPreferenceOption.Secondary;
        request.readPreference = Parse.Cloud.ReadPreferenceOption.SecondaryPreferred;
        request.readPreference = Parse.Cloud.ReadPreferenceOption.Nearest;
    });

    Parse.Cloud.beforeFind('MyCustomClass', (request: Parse.Cloud.BeforeFindRequest) => {
        let query = request.query; // the Parse.Query

        return new Parse.Query('QueryMe!');
    });

    Parse.Cloud.beforeFind('MyCustomClass', async (request: Parse.Cloud.BeforeFindRequest) => {
        let query = request.query; // the Parse.Query

        return new Parse.Query('QueryMe, IN THE FUTURE!');
    });

    Parse.Cloud.afterFind('MyCustomClass', async (request: Parse.Cloud.AfterFindRequest) => {
        return new Parse.Object('MyCustomClass');
    });

    Parse.Cloud.beforeLogin((request: Parse.Cloud.TriggerRequest) => {
        return 'Some result';
    });

    Parse.Cloud.define('AFunc', (request: Parse.Cloud.FunctionRequest) => {
        return 'Some result';
    });

    Parse.Cloud.job('AJob', (request: Parse.Cloud.JobRequest) => {
        request.message('Message to associate with this job run');
    });

    Parse.Cloud.startJob('AJob', {}).then(v => v);

    Parse.Cloud.getJobStatus('AJob').then(v => v);

    Parse.Cloud.getJobsData().then(v => v);
}

class PlaceObject extends Parse.Object {}

function test_geo_points() {
    const point = new Parse.GeoPoint({ latitude: 40.0, longitude: -30.0 });

    const userObject = Parse.User.current()!;

    // User's location
    const userGeoPoint = userObject.get('location');

    // Create a query for places
    const query = new Parse.Query(Parse.User);
    // Interested in locations near user.
    query.near('location', userGeoPoint);
    // Limit what could be a lot of points.
    query.limit(10);

    const southwestOfSF = new Parse.GeoPoint(37.708813, -122.526398);
    const northeastOfSF = new Parse.GeoPoint(37.822802, -122.373962);

    const query2 = new Parse.Query(PlaceObject);
    query2.withinGeoBox('location', southwestOfSF, northeastOfSF);

    const query3 = new Parse.Query('PlaceObject').find().then((o: Parse.Object[]) => {});
}

function test_push() {
    Parse.Push.send(
        {
            channels: ['Gia nts', 'Mets'],
            data: {
                alert: 'The Giants won against the Mets 2-3.',
            },
        },
        {
            success: () => {
                // Push was successful
            },
            error: (error: any) => {
                // Handle error
            },
        },
    );

    const query = new Parse.Query(Parse.Installation);
    query.equalTo('injuryReports', true);

    Parse.Push.send(
        {
            where: query, // Set our Installation query
            data: {
                alert: 'Willie Hayes injured by own pop fly.',
            },
        },
        {
            success: function() {
                // Push was successful
            },
            error: function(error: any) {
                // Handle error
            },
        },
    );
}

function test_batch_operations() {
    const game1 = new Game();
    const game2 = new Game();
    const games = [game1, game2];

    // Master key
    Parse.Object.saveAll(games, { useMasterKey: true });
    Parse.Object.destroyAll(games, { useMasterKey: true });
    Parse.Object.fetchAll(games, { useMasterKey: true });
    Parse.Object.fetchAllIfNeeded(games, { useMasterKey: true });

    // Session token
    Parse.Object.saveAll(games, { sessionToken: '' });
    Parse.Object.destroyAll(games, { sessionToken: '' });
    Parse.Object.fetchAll(games, { sessionToken: '' });
    Parse.Object.fetchAllIfNeeded(games, { sessionToken: '' });
}

async function test_query_subscribe() {
    // create new query from Game object type
    const query = new Parse.Query(Game);

    // create subscription to Game object
    const subscription = await query.subscribe();

    // listen for new Game objects created on Parse server
    subscription.on('create', (game: any) => {
        console.log(game);
    });

    // unsubscribe
    subscription.unsubscribe();
}

function test_serverURL() {
    Parse.serverURL = 'http://localhost:1337/parse';
}
function test_polygon() {
    const point = new Parse.GeoPoint(1, 2);
    const polygon1 = new Parse.Polygon([[0, 0], [1, 0], [1, 1], [0, 1]]);
    const polygon2 = new Parse.Polygon([point, point, point]);
    polygon1.equals(polygon2);
    polygon1.containsPoint(point);

    const query = new Parse.Query('TestObject');
    query.polygonContains('key', point);
    query.withinPolygon('key', [point, point, point]);
}

async function test_local_datastore() {
    Parse.enableLocalDatastore();
    const name = 'test_pin';
    const obj = new Parse.Object('TestObject');
    await obj.pin();
    await obj.unPin();
    await obj.isPinned();
    await obj.pinWithName(name);
    await obj.unPinWithName(name);
    await obj.fetchFromLocalDatastore();

    await Parse.Object.pinAll([obj]);
    await Parse.Object.unPinAll([obj]);
    await Parse.Object.pinAllWithName(name, [obj]);
    await Parse.Object.unPinAllWithName(name, [obj]);
    await Parse.Object.unPinAllObjects();
    await Parse.Object.unPinAllObjectsWithName(name);

    const flag = Parse.isLocalDatastoreEnabled();
    const LDS = await Parse.dumpLocalDatastore();

    const query = new Parse.Query('TestObject');
    query.fromPin();
    query.fromPinWithName(name);
    query.fromLocalDatastore();

    Parse.setLocalDatastoreController({});
}

async function test_schema() {
    Parse.Schema.all({ useMasterKey: true });
    Parse.Schema.all({ sessionToken: '' });

    const schema = new Parse.Schema('TestSchema');

    schema.addField('defaultFieldString');
    schema.addString('stringField');
    schema.addNumber('numberField');
    schema.addBoolean('booleanField');
    schema.addDate('dateField');
    schema.addFile('fileField');
    schema.addGeoPoint('geoPointField');
    schema.addPolygon('polygonField');
    schema.addArray('arrayField');
    schema.addObject('objectField');
    schema.addPointer('pointerField', '_User');
    schema.addRelation('relationField', '_User');

    schema.addIndex('testIndex', { stringField: 1 });

    schema.deleteField('defaultFieldString');
    schema.deleteIndex('testIndex');

    // Master Key
    schema.delete({ useMasterKey: true }).then(results => {});

    schema.get({ useMasterKey: true }).then(results => {});

    schema.purge().then(results => {});

    schema.save({ useMasterKey: true }).then(results => {});

    schema.update({ useMasterKey: true }).then(results => {});

    // Session Token
    schema.delete({ sessionToken: '' }).then(results => {});

    schema.get({ sessionToken: '' }).then(results => {});

    schema.purge().then(results => {});

    schema.save({ sessionToken: '' }).then(results => {});

    schema.update({ sessionToken: '' }).then(results => {});
}

function test_generic_object() {
    // Test Parse.Object instantiation with no type assertion
    const objAny = new Parse.Object('TestObject')
    objAny.attributes.whatever    // any
    objAny.attributes.createdAt   // Date | undefined
    objAny.attributes.updatedAt   // Date | undefined
    objAny.attributes.objectId    // string | undefined
    objAny.attributes.ACL         // Parse.ACL | undefined

    // Test Parse.Object instantiation with manual type assertion
    const objWithTypedAttrs = new Parse.Object<{ example: string }>('TestObject')
    const exampleAttr = objWithTypedAttrs.attributes.example     // string
    const exampleGet = objWithTypedAttrs.get('example')    // string
    // const badAttr = objWithTypedAttrs.attributes.other  // error

    // Test Parse.Object instantiation with attributes
    const objWithAttrsAndOptions = new Parse.Object('TestObject', { example: 200 })
    const exampleAttrFromOptions = objWithAttrsAndOptions.attributes.example  // number
    const exampleGetFromOptions = objWithAttrsAndOptions.get('example') // number
    // const badAttr2 = objWithAttrsAndOptions.attributes.other     // error

}

function test_to_json_generic() {

    const exampleObjAny = new Parse.Object('TestObject')
    const exampleJsonAny = exampleObjAny.toJSON()   // Parse.Object.Attributes

    const exampleObjTyped = new Parse.Object('TestObject', {
        exampleProp: false,
        regexProp: new RegExp(''),
        dateProp: new Date(),
        parseProp: new Parse.Object('nestedObject', {
            exampleProp: false,
            regexProp: new RegExp(''),
            dateProp: new Date(),
            parseProp2: new Parse.Object('nestedObject', {
                exampleProp2: false,
                regexProp2: new RegExp(''),
                dateProp2: new Date()
            })
        })
    })
    const exampleJsonTyped = exampleObjTyped.toJSON()
    exampleJsonTyped.exampleProp           // boolean
    exampleJsonTyped.dateProp              // string
    exampleJsonTyped.regexProp             // string
    exampleJsonTyped.parseProp.dateProp    // string
    exampleJsonTyped.parseProp.parseProp2.regexProp2    // string
    exampleJsonTyped.parseProp.ACL         // Parse.ACL | undefined
    exampleJsonTyped.parseProp.objectId    // string | undefined
}

async function test_save_generic() {
    const exampleObjAny = new Parse.Object('TestObject')
    const savedAny = await exampleObjAny.save()
    savedAny.attributes.anything    // any
    const savedNewExampleAttrAny = await exampleObjAny.save({ example: true })
    savedNewExampleAttrAny.attributes.anythingElse  // any

    // Calling Parse.Object.save({}) with an existing attribute type checks
    const exampleObjTyped = new Parse.Object<{ example: number; newExample: string }>('TestObject')
    // const badSavedExampleAttr = await exampleObjTyped.save({ example: 'hello' })     // error
    const savedExampleAttr = await exampleObjTyped.save({ example: 5 })
    savedExampleAttr.attributes.example     // number

    // const badSavedExampleAttr = await exampleObjTyped.save({ createdAt: new Date() }) // never

    // Calling Parse.Object.save({}) with a new attribute adds that attribute as a known key
    const savedNewExampleAttr = await exampleObjTyped.save({ newExample: 'hello' })
    savedNewExampleAttr.attributes.example      // number
    savedNewExampleAttr.attributes.newExample    // string

    // Parse.Object.save(key, value) type checks existing keys
    // const badSavedExampleAttr2 = await exampleObjTyped.save('example', 'hello')    // error
    const savedExampleAttr2 = await exampleObjTyped.save('example', 10)
    savedExampleAttr2.attributes.example    // number

    // const badSavedExampleAttr2 = await exampleObjTyped.save('createdAt', 10) // never

    // Parse.Object.save(key, value) with a new attribute adds that attribute as a known key
    const savedNewExampleAttr2 = await exampleObjTyped.save('newExample', 'hello again')
    savedNewExampleAttr2.attributes.example     // number
    savedNewExampleAttr2.attributes.newExample  // string
}

function test_set_generic() {
    const exampleObjAny = new Parse.Object('TestObject')
    exampleObjAny.attributes    // any
    exampleObjAny.set('propA', 'some value')

    const exampleObjTyped = new Parse.Object<{ example: boolean }>('TestObject')

    // Parse.Object.set({}) type checks existing keys, does not allow new keys
    const setThingObj = exampleObjTyped.set({ example: false })
    setThingObj && setThingObj.attributes.example   // boolean
    // exampleObjTyped.set({ example: 100 })   // error
    // const badSetNewThingObj = exampleObjTyped.set({ newExample: 'something' })    // error

    // Parse.Object.set(key, value) does not allow new keys
    const setThingKeyVal = exampleObjTyped.set('example', false)
    setThingKeyVal && setThingKeyVal.attributes.example // boolean
    // const badSetThingNewKeyVal = exampleObjTyped.set('newExample', 100)    // error
}

async function test_query_generic() {
    const exampleQuery = new Parse.Query<Parse.Object<{ example: string }>>('TestObject')

    const gotExampleObj = await exampleQuery.get('objectId')
    const gotAttrExample = gotExampleObj.attributes.example // string
    const gotGetExample = gotExampleObj.get('example')     // string
    // const badGotGetExample = gotExampleObj.get('anything') // error

    const foundExampleObj = await exampleQuery.find()
    foundExampleObj[0] && foundExampleObj[0].attributes.example // string

    const firstExampleObj = await exampleQuery.first()
    firstExampleObj && firstExampleObj.attributes.example   // string
}

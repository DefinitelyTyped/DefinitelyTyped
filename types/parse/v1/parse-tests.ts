

function test_events() {

    const object = new Parse.Events();
    object.on("alert", (eventName: string) => alert("Triggered " + eventName));

    object.trigger("alert", "an event");

    const onChange = () => console.log('whatever');
    let context: any;

    object.off("change", onChange);
    object.off("change");
    object.off(null, onChange);
    object.off(null, null, context);
    object.off();
}

class GameScore extends Parse.Object {

    constructor(options?: any) {

        super("GameScore", options);
    }
}

class Game extends Parse.Object {

    constructor(options?: any) {

        super("Game", options);
    }
}

function test_object() {

    const game = new Game();

    if (!game.isNew()) {
        console.error("Game should be new");
    }

    if (game.toPointer().className !== "Game") {
        console.log("Class name should be 'Game")
    }

    game.fetch({
        success(g: Game) { }
    });

    // Create a new instance of that class.
    const gameScore = new GameScore();

    gameScore.set("score", 1337);
    gameScore.set("playerName", "Sean Plott");
    gameScore.set("cheatMode", false);


    // Setting attrs using object
    gameScore.set({
        level: '10',
        difficult: 15
    });

    const score = gameScore.get("score");
    const playerName = gameScore.get("playerName");
    const cheatMode = gameScore.get("cheatMode");

    gameScore.increment("score");
    gameScore.addUnique("skills", "flying");
    gameScore.addUnique("skills", "kungfu");

    game.set("gameScore", gameScore);

    const gameCopy = Game.fromJSON(JSON.parse(JSON.stringify(game)), true);
}

function test_query() {

    const gameScore = new GameScore();

    const query = new Parse.Query(GameScore);
    query.equalTo("playerName", "Dan Stemkoski");
    query.notEqualTo("playerName", "Michael Yabuti");
    query.fullText("playerName", "dan", { language: 'en', caseSensitive: false, diacriticSensitive: true });
    query.greaterThan("playerAge", 18);
    query.limit(10);
    query.skip(10);

    // Sorts the results in ascending order by the score field
    query.ascending("score");

    // Sorts the results in descending order by the score field
    query.descending("score");

    // Restricts to wins < 50
    query.lessThan("wins", 50);

    // Restricts to wins <= 50
    query.lessThanOrEqualTo("wins", 50);

    // Restricts to wins > 50
    query.greaterThan("wins", 50);

    // Restricts to wins >= 50
    query.greaterThanOrEqualTo("wins", 50);

    // Finds scores from any of Jonathan, Dario, or Shawn
    query.containedIn("playerName",
        ["Jonathan Walsh", "Dario Wunsch", "Shawn Simon"]);

    // Finds scores from anyone who is neither Jonathan, Dario, nor Shawn
    query.notContainedIn("playerName",
        ["Jonathan Walsh", "Dario Wunsch", "Shawn Simon"]);

    // Finds objects that have the score set
    query.exists("score");

    // Finds objects that don't have the score set
    query.doesNotExist("score");
    query.matchesKeyInQuery("hometown", "city", query);
    query.doesNotMatchKeyInQuery("hometown", "city", query);
    query.select("score", "playerName");

    // Find objects where the array in arrayKey contains 2.
    query.equalTo("arrayKey", 2);

    // Find objects where the array in arrayKey contains all of the elements 2, 3, and 4.
    query.containsAll("arrayKey", [2, 3, 4]);

    query.startsWith("name", "Big Daddy's");
    query.equalTo("score", gameScore);
    query.exists("score");
    query.include("score");
    query.include(["score.team"]);

    // Find objects that match the aggregation pipeline
    query.aggregate({
        group:{
            objectId: '$name'
        }
    });

    // Find objects with distinct key
    query.distinct('name');

    const testQuery = Parse.Query.or(query, query);
}

class TestCollection extends Parse.Collection<Object> {

    constructor(models?: Parse.Object[]) {

        super(models);
    }
}

function return_a_generic_query(): Parse.Query<Game> {
    return new Parse.Query(Game);
}

function return_a_query(): Parse.Query {
    return new Parse.Query(Game);
}

function test_collections() {

    let collection = new TestCollection();

    const query = new Parse.Query(Game);
    query.equalTo("temperature", "hot");
    query.greaterThan("degreesF", 100);

    collection = query.collection();

    collection.comparator = (object) => {
        return object.get("temperature");
    };

    collection.add([
        { "name": "Duke" },
        { "name": "Scarlett" }
    ]);

    collection.fetch().then(
        (data) => {

        },
        (error) => {
            console.log("Error: " + error.code + " " + error.message);
        }
    );

    const model = collection.at(0);

    // Or you can get it by Parse objectId.
    const modelAgain = collection.get(model.id);

    // Remove "Duke" from the collection.
    collection.remove(model);

    // Completely replace all items in the collection.
    collection.reset([
        { "name": "Hawk" },
        { "name": "Jane" }
    ]);
}

function test_file() {

    const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    let file = new Parse.File("myfile.txt", { base64: base64 });

    const bytes = [0xBE, 0xEF, 0xCA, 0xFE];
    file = new Parse.File("myfile.txt", bytes);

    file = new Parse.File("myfile.zzz", {}, "image/png");

    const src = file.url();

    file.save().then(
        () => {
            // The file has been saved to Parse.
        },
        (error) => {
            // The file either could n ot be read, or could not be saved to Parse.
        });

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
        dayType: 'weekday'
    };
    // Send the dimensions to Parse along with the 'search' event
    Parse.Analytics.track('search', dimensions);

    const codeString = '404';
    Parse.Analytics.track('error', { code: codeString })
}

function test_relation() {
    var game1 = new Game();
    var game2 = new Game();

    new Parse.User().relation("games").query().find().then((g: Game[]) => { });
    new Parse.User().relation("games").add(game1)
    new Parse.User().relation("games").add([game1, game2])

    new Parse.User().relation("games").remove(game1)
    new Parse.User().relation("games").remove([game1, game2])
}

function test_user() {
    const user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");
    user.signUp(null, { useMasterKey: true });
}

function test_user_acl_roles() {

    const user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");

    // other fields can be set just like with Parse.Object
    user.set("phone", "415-392-0202");

    const currentUser = Parse.User.current();
    if (currentUser) {
        // do stuff with the user
    } else {
        // show the signup or login page
    }

    Parse.User.become("session-token-here").then(function (user) {
        // The current user is now set to user.
    }, function (error) {
        // The token could not be validated.
    });

    const game = new Game();
    game.set("score", new GameScore());
    game.setACL(new Parse.ACL(Parse.User.current()));
    game.save().then((game: Game) => { });
    game.save(null, { useMasterKey: true });
    game.save({ score: '10' }, { useMasterKey: true }).then(function (game) {
        // Update game then revert it to the last saved state.
        game.set("score", '20');
        game.revert();
    }, function (error) {
        // The save failed
    });

    const groupACL = new Parse.ACL();

    const userList: Parse.User[] = [Parse.User.current()!];
    // userList is an array with the users we are sending this message to.
    for (let i = 0; i < userList.length; i++) {
        groupACL.setReadAccess(userList[i], true);
        groupACL.setWriteAccess(userList[i], true);
    }

    groupACL.setPublicReadAccess(true);

    game.setACL(groupACL);

    Parse.User.requestPasswordReset("email@example.com").then(function (data) {
        // The current user is now set to user.
    }, function (error) {
        // The token could not be validated.
    });

    // By specifying no write privileges for the ACL, we can ensure the role cannot be altered.
    const role = new Parse.Role("Administrator", groupACL);
    role.getUsers().add(userList[0]);
    role.getRoles().add(role);
    role.save();

    Parse.User.logOut().then(function (data) {
        // logged out
    });
}

function test_facebook_util() {

    Parse.FacebookUtils.init({
        appId: 'YOUR_APP_ID', // Facebook App ID
        channelUrl: '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
        cookie: true, // enable cookies to allow Parse to access the session
        xfbml: true  // parse XFBML
    });

    Parse.FacebookUtils.logIn(null, {
        success: (user: Parse.User) => {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook!");
            } else {
                alert("User logged in through Facebook!");
            }
        },
        error: (user: Parse.User, error: any) => {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });

    const user = Parse.User.current()!;

    if (!Parse.FacebookUtils.isLinked(user)) {
        Parse.FacebookUtils.link(user, null, {
            success: (user: any) => {
                alert("Woohoo, user logged in with Facebook!");
            },
            error: (user: any, error: any) => {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });
    }

    Parse.FacebookUtils.unlink(user, {
        success: (user: Parse.User) => {
            alert("The user is no longer associated with their Facebook account.");
        }
    });
}

function test_cloud_functions() {

    Parse.Cloud.run('hello', {}, {
        success: (result: any) => {
            // result
        },
        error: (error: any) => {
        }
    });

    Parse.Cloud.afterDelete('MyCustomClass', (request: Parse.Cloud.AfterDeleteRequest) => {
        // result
    });

    Parse.Cloud.afterSave('MyCustomClass', (request: Parse.Cloud.AfterSaveRequest) => {
        // result
    });

    Parse.Cloud.beforeDelete('MyCustomClass', (request: Parse.Cloud.BeforeDeleteRequest,
        response: Parse.Cloud.BeforeDeleteResponse) => {
        // result
    });

    const CUSTOM_ERROR_INVALID_CONDITION = 1001
    const CUSTOM_ERROR_IMMUTABLE_FIELD = 1002

    Parse.Cloud.beforeSave('MyCustomClass', (request: Parse.Cloud.BeforeSaveRequest,
        response: Parse.Cloud.BeforeSaveResponse) => {

            if (request.object.isNew()) {
                if (!request.object.has('immutable')) return response.error('Field immutable is required')
            } else {
                const original = request.original;
                if (original == null) { // When the object is not new, request.original must be defined
                    return response.error(CUSTOM_ERROR_INVALID_CONDITION, 'Original must me defined for an existing object')
                }

                if (original.get('immutable') !== request.object.get('immutable')) {
                    return response.error(CUSTOM_ERROR_IMMUTABLE_FIELD, 'This field cannot be changed')
                }
            }
            response.success()
    });

    Parse.Cloud.beforeFind('MyCustomClass', (request: Parse.Cloud.BeforeFindRequest) => {
        let query = request.query; // the Parse.Query
        let user = request.user; // the user
        let isMaster = request.master; // if the query is run with masterKey
        let isCount = request.count; // if the query is a count operation (available on parse-server 2.4.0 or up)
        let isGet = request.isGet; // if the query is a get operation

        // All possible read preferences
        request.readPreference = Parse.Cloud.ReadPreferenceOption.Primary
        request.readPreference = Parse.Cloud.ReadPreferenceOption.PrimaryPreferred
        request.readPreference = Parse.Cloud.ReadPreferenceOption.Secondary
        request.readPreference = Parse.Cloud.ReadPreferenceOption.SecondaryPreferred
        request.readPreference = Parse.Cloud.ReadPreferenceOption.Nearest
    });
}

class PlaceObject extends Parse.Object { }

function test_geo_points() {

    const point = new Parse.GeoPoint({ latitude: 40.0, longitude: -30.0 });

    const userObject = Parse.User.current()!;

    // User's location
    const userGeoPoint = userObject.get("location");

    // Create a query for places
    const query = new Parse.Query(Parse.User);
    // Interested in locations near user.
    query.near("location", userGeoPoint);
    // Limit what could be a lot of points.
    query.limit(10);

    const southwestOfSF = new Parse.GeoPoint(37.708813, -122.526398);
    const northeastOfSF = new Parse.GeoPoint(37.822802, -122.373962);

    const query2 = new Parse.Query(PlaceObject);
    query2.withinGeoBox("location", southwestOfSF, northeastOfSF);

    const query3 = new Parse.Query("PlaceObject").find().then((o: Parse.Object[]) => { });
}

function test_push() {

    Parse.Push.send({
        channels: ["Gia nts", "Mets"],
        data: {
            alert: "The Giants won against the Mets 2-3."
        }
    }, {
            success: () => {
                // Push was successful
            },
            error: (error: any) => {
                // Handle error
            }
        });

    const query = new Parse.Query(Parse.Installation);
    query.equalTo('injuryReports', true);

    Parse.Push.send({
        where: query, // Set our Installation query
        data: {
            alert: "Willie Hayes injured by own pop fly."
        }
    }, {
            success: function () {
                // Push was successful
            },
            error: function (error: any) {
                // Handle error
            }
        });
}

function test_view() {

    const model = Parse.User.current();
    const view = new Parse.View<Parse.User>();
}

function test_promise() {
    let resolved = Parse.Promise.as(true);
    let rejected = Parse.Promise.error("an error object");
    Parse.Promise.when([resolved, rejected]).then(function () {
        // success
    }, function () {
        // failed
    });

    // Test promise with a query
    const query = new Parse.Query('Test');
    query.find()
    .then(() => {
        // success
    }).catch(() => {
        // error
    });

    // can check whether an object is a Parse.Promise object or not
    Parse.Promise.is(resolved);
}

function test_batch_operations() {
    const game1 = new Game()
    const game2 = new Game()
    const games = [game1, game2]

    // Master key
    Parse.Object.saveAll(games, { useMasterKey: true })
    Parse.Object.destroyAll(games, { useMasterKey: true })
    Parse.Object.fetchAll(games, { useMasterKey: true })
    Parse.Object.fetchAllIfNeeded(games, { useMasterKey: true })

    // Session token
    Parse.Object.saveAll(games, { sessionToken: '' })
    Parse.Object.destroyAll(games, { sessionToken: '' })
    Parse.Object.fetchAll(games, { sessionToken: '' })
    Parse.Object.fetchAllIfNeeded(games, { sessionToken: '' })
}

function test_query_subscribe() {
    // create new query from Game object type
    const query = new Parse.Query(Game);

    // create subscription to Game object
    const subscription = query.subscribe();

    // listen for new Game objects created on Parse server
    subscription.on('create', (game: any) => {
        console.log(game);
    });
}


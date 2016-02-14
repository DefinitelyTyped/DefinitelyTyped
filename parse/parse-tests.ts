/// <reference path="parse.d.ts" />

function test_events() {

    var object = new Parse.Events();
    object.on("alert", (eventName: string) => alert("Triggered " + eventName));

    object.trigger("alert", "an event");

    var onChange = () => console.log('whatever');
    var context: any;

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

        super("GameScore", options);
    }
}

function test_object() {

    var game = new Game();

// Create a new instance of that class.
    var gameScore = new GameScore();

    gameScore.set("score", 1337);
    gameScore.set("playerName", "Sean Plott");
    gameScore.set("cheatMode", false);


    var score = gameScore.get("score");
    var playerName = gameScore.get("playerName");
    var cheatMode = gameScore.get("cheatMode");

    gameScore.increment("score");
    gameScore.addUnique("skills", "flying");
    gameScore.addUnique("skills", "kungfu");

    game.set("gameScore", gameScore);
}

function test_query() {

    var gameScore = new GameScore();

    var query = new Parse.Query(GameScore);
    query.equalTo("playerName", "Dan Stemkoski");
    query.notEqualTo("playerName", "Michael Yabuti");
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

    var testQuery = Parse.Query.or(query, query);
}

class TestCollection extends Parse.Collection<Object> {

    constructor(models?: Parse.Object[]) {

        super(models);
    }
}

function test_collections() {

    var collection = new TestCollection();

    var query = new Parse.Query(Game);
    query.equalTo("temperature", "hot");
    query.greaterThan("degreesF", 100);

    collection = query.collection();

    collection.comparator = (object) => {
        return object.get("temperature");
    };

    collection.add([
       {"name": "Duke"},
       {"name": "Scarlett"}
   ]);

    collection.fetch().then(
        (data) => {

        },
        (error) => {
            console.log("Error: " + error.code + " " + error.message);
        }
    );

    var model = collection.at(0);

    // Or you can get it by Parse objectId.
    var modelAgain = collection.get(model.id);

    // Remove "Duke" from the collection.
    collection.remove(model);

    // Completely replace all items in the collection.
    collection.reset([
         {"name": "Hawk"},
         {"name": "Jane"}
     ]);
}

function test_file() {

    var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    var file = new Parse.File("myfile.txt", { base64: base64 });

    var bytes = [ 0xBE, 0xEF, 0xCA, 0xFE ];
    var file = new Parse.File("myfile.txt", bytes);

    var file = new Parse.File("myfile.zzz", {}, "image/png");

    var src = file.url();

    file.save().then(
    () => {
        // The file has been saved to Parse.
    },
    (error) => {
        // The file either could n ot be read, or could not be saved to Parse.
    });

    Parse.Cloud.httpRequest({ url: file.url() }).then((response: Parse.Promise<Parse.Cloud.HttpResponse>) => {
        // result
    });

    // TODO: Check
}

function test_analytics() {

    var dimensions = {
        // Define  ranges to bucket data points into meaningful segments
        priceRange: '1000-1500',
        // Did the user filter the query?
        source: 'craigslist',
        // Do searches happen more often on weekdays or weekends?
        dayType: 'weekday'
    };
   // Send the dimensions to Parse along with the 'search' event
    Parse.Analytics.track('search', dimensions);

    var codeString = '404';
    Parse.Analytics.track('error', { code: codeString })
}

function test_user_acl_roles() {

    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");

// other fields can be set just like with Parse.Object
    user.set("phone", "415-392-0202");

    var currentUser = Parse.User.current();
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

    var game = new Game();
    game.set("score", new GameScore());
    game.setACL(new Parse.ACL(Parse.User.current()));
    game.save();

    var groupACL = new Parse.ACL();

    var userList: Parse.User[] = [Parse.User.current()];
    // userList is an array with the users we are sending this message to.
    for (var i = 0; i < userList.length; i++) {
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
    var role = new Parse.Role("Administrator", groupACL);
    role.getUsers().add(role);
    role.getRoles().add(role);
    role.save();

    Parse.User.logOut().then(function (data) {
      // logged out
    });
}

function test_facebook_util() {

    Parse.FacebookUtils.init({
         appId      : 'YOUR_APP_ID', // Facebook App ID
         channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
         cookie     : true, // enable cookies to allow Parse to access the session
         xfbml      : true  // parse XFBML
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

    var user = Parse.User.current();

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
}

class PlaceObject extends Parse.Object {}

function test_geo_points() {

    var point = new Parse.GeoPoint({latitude: 40.0, longitude: -30.0});

    var userObject = Parse.User.current();

    // User's location
    var userGeoPoint = userObject.get("location");

    // Create a query for places
    var query = new Parse.Query(Parse.User);
// Interested in locations near user.
    query.near("location", userGeoPoint);
        // Limit what could be a lot of points.
    query.limit(10);

    var southwestOfSF = new Parse.GeoPoint(37.708813, -122.526398);
    var northeastOfSF = new Parse.GeoPoint(37.822802, -122.373962);

    var query = new Parse.Query(PlaceObject);
    query.withinGeoBox("location", southwestOfSF, northeastOfSF);
}

function test_push() {

    Parse.Push.send({
        channels: [ "Gia nts", "Mets" ],
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

    var query = new Parse.Query(Parse.Installation);
    query.equalTo('injuryReports', true);

    Parse.Push.send({
        where: query, // Set our Installation query
        data: {
            alert: "Willie Hayes injured by own pop fly."
        }
    }, {
        success: function() {
            // Push was successful
        },
        error: function(error: any) {
            // Handle error
        }
    });
}

function test_view() {

    var model = Parse.User.current();
    var view = new Parse.View<Parse.User>();
}

function test_promise() {
    let resolved = Parse.Promise.as(true);
    let rejected = Parse.Promise.error("an error object");
    Parse.Promise.when([resolved, rejected]).then(function() {
        // success
    }, function() {
        // failed
    });

    // can check whether an object is a Parse.Promise object or not
    Parse.Promise.is(resolved);
}

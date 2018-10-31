// This file may use only modules that have corresponding globals, because
// `globals/meteor-tests.ts` is generated from it.  Tests that involve modules
// that don't have corresponding globals belong in
// `meteor-tests-module-only.ts`.

/**
 * All code below was copied from the examples at http://docs.meteor.com/.
 * When necessary, code was added to make the examples work (e.g. declaring a variable
 * that was assumed to have been declared earlier)
 */

/*********************************** Begin setup for tests ******************************/
import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check, Match } from "meteor/check";
import { Tracker } from "meteor/tracker";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { Session } from "meteor/session";
import { HTTP } from "meteor/http";
import { ReactiveVar } from "meteor/reactive-var";
import { Accounts } from "meteor/accounts-base";
import { BrowserPolicy } from "meteor/browser-policy-common";
import { DDPRateLimiter } from "meteor/ddp-rate-limiter";

// Avoid conflicts between `meteor-tests.ts` and `globals/meteor-tests.ts`.
namespace MeteorTests {

var Rooms = new Mongo.Collection('rooms');
var Messages = new Mongo.Collection('messages');
interface MonkeyDAO {
    _id: string;
    name: string;
}
var Monkeys = new Mongo.Collection<MonkeyDAO>('monkeys');
//var x = new Mongo.Collection<xDAO>('x');
//var y = new Mongo.Collection<yDAO>('y');
/********************************** End setup for tests *********************************/


/**
 * From Core, Meteor.startup section
 * Tests Meteor.isServer, Meteor.startup, Collection.insert(), Collection.find()
 */
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Rooms.find().count() === 0) {
            Rooms.insert({ name: "Initial room" });
        }
    });
}

/**
 * From Publish and Subscribe, Meteor.publish section
 **/
Meteor.publish("rooms", function () {
    return Rooms.find({}, { fields: { secretInfo: 0 } });
});

Meteor.publish("adminSecretInfo", function () {
    return Rooms.find({ admin: this.userId }, { fields: { secretInfo: 1 } });
});

Meteor.publish("roomAndMessages", function (roomId: string) {
    check(roomId, String);
    return [
        Rooms.find({ _id: roomId }, { fields: { secretInfo: 0 } }),
        Messages.find({ roomId: roomId })
    ];
});

/**
 * Also from Publish and Subscribe, Meteor.publish section
 */
Meteor.publish("counts-by-room", function (roomId: string) {
    var self = this;
    check(roomId, String);
    var count = 0;
    var initializing = true;
    var handle = Messages.find({ roomId: roomId }).observeChanges({
        added: function (id: any) {
            count++;
            // if (!initializing)
            //   this.changed("counts", roomId, {count: count});
        },
        removed: function (id: any) {
            count--;
            // Todo: Not sure how to define in typescript
            //      self.changed("counts", roomId, {count: count});
        }
    });

    initializing = false;

    // Todo: Not sure how to define in typescript
    //  self.added("counts", roomId, {count: count});
    self.ready();

    self.onStop(function () {
        handle.stop();
    });
});

var Counts = new Mongo.Collection("counts");

Tracker.autorun(function () {
    Meteor.subscribe("counts-by-room", Session.get("roomId"));
});

// Checking status
let status: DDP.Status = 'connected';

console.log("Current room has " +
    Counts.find(Session.get("roomId")).count +
    " messages.");

/**
 * From Publish and Subscribe, Meteor.subscribe section
 */
Meteor.subscribe("allplayers");

/**
 * Also from Meteor.subscribe section
 */
Tracker.autorun(function () {
    Meteor.subscribe("chat", { room: Session.get("current-room") });
    Meteor.subscribe("privateMessages");
});

/**
 * From Methods, Meteor.methods section
 */
Meteor.methods({
    foo: function (arg1: string, arg2: number[]) {
        check(arg1, String);
        check(arg2, [Number]);

        var you_want_to_throw_an_error = true;
        if (you_want_to_throw_an_error)
            throw new Meteor.Error("404", "Can't find my pants");
        return "some return value";
    },

    bar: function () {
        // .. do other stuff ..
        return "baz";
    }
});

/**
 * From Methods, Meteor.Error section
 */
function meteorErrorTestFunction1() {
    throw new Meteor.Error("logged-out",
        "The user must be logged in to post a comment.");
}

function meteorErrorTestFunction2() {
    throw new Meteor.Error(403,
        "The user must be logged in to post a comment.");
}

Meteor.call("methodName", function (error: Meteor.Error) {
    if (error.error === "logged-out") {
        Session.set("errorMessage", "Please log in to post a comment.");
    }
});
var error = new Meteor.Error("logged-out", "The user must be logged in to post a comment.");
console.log(error.error === "logged-out");
console.log(error.reason === "The user must be logged in to post a comment.");
console.log(error.details !== "");

/**
 * From Methods, Meteor.call section
 */
Meteor.call('foo', 1, 2, function (error: any, result: any) { });
var result = Meteor.call('foo', 1, 2);

/**
 * From Collections, Mongo.Collection section
 */
// DA: I added the "var" keyword in there

interface ChatroomsDAO {
    _id?: string;
}
interface MessagesDAO {
    _id?: string;
}
var Chatrooms = new Mongo.Collection<ChatroomsDAO>("chatrooms");
Messages = new Mongo.Collection<MessagesDAO>("messages");

var myMessages: any[] = Messages.find({ userId: Session.get('myUserId') }).fetch();

Messages.insert({ text: "Hello, world!" });

Messages.update(myMessages[0]._id, { $set: { important: true } });

var Posts = new Mongo.Collection("posts");
Posts.insert({ title: "Hello world", body: "First post" });

// Couldn't find assert() in the meteor docs
//assert(Posts.find().count() === 1);

/**
 * Todo: couldn't figure out how to make this next line work with Typescript
 * since there is already a Collection constructor with a different signature
 *
 var Scratchpad = new Mongo.Collection;
 for (var i = 0; i < 10; i++)
 Scratchpad.insert({number: i * 2});
 assert(Scratchpad.find({number: {$lt: 9}}).count() === 5);
 **/

class Animal {
    constructor(doc: any) {}
}

interface AnimalDAO {
    _id?: string;
    name: string;
    sound: string;
    makeNoise?: () => void;
}

// Define a Collection that uses Animal as its document
var Animals = new Mongo.Collection<AnimalDAO>("Animals", {
    transform: function (doc: any): Animal { return new Animal(doc); }
});

// Create an Animal and call its makeNoise method
Animals.insert({ name: "raptor", sound: "roar" });
Animals.findOne({ name: "raptor" }).makeNoise(); // prints "roar"

/**
 * From Collections, Collection.insert section
 */
// DA: I added the variable declaration statements to make this work
var Lists = new Mongo.Collection('Lists');
var Items = new Mongo.Collection('Lists');

var groceriesId = Lists.insert({ name: "Groceries" });
Items.insert({ list: groceriesId, name: "Watercress" });
Items.insert({ list: groceriesId, name: "Persimmons" });

/**
 * From Collections, collection.update section
 */
var Players = new Mongo.Collection('Players');

Template['adminDashboard'].events({
    'click .givePoints': function () {
        Players.update(Session.get("currentPlayer"), { $inc: { score: 5 } });
    }
});

/**
 * Also from Collections, collection.update section
 */
Meteor.methods({
    declareWinners: function () {
        Players.update({ score: { $gt: 10 } },
            { $addToSet: { badges: "Winner" } },
            { multi: true });
    }
});

/**
 * From Collections, collection.remove section
 */
Template['chat'].events({
    'click .remove': function () {
        Messages.remove(this._id);
    }
});

// DA: I added this next line
var Logs = new Mongo.Collection('logs');

Meteor.startup(function () {
    if (Meteor.isServer) {
        Logs.remove({});
        Players.remove({ karma: { $lt: -2 } });
    }
});

/***
 * From Collections, collection.allow section
 */

interface iPost {
    _id: string;
    owner: string;
    userId: string;
    locked: boolean;
}

Posts = new Mongo.Collection<iPost>("posts");

Posts.allow({
    insert: function (userId: string, doc: iPost) {
        // the user must be logged in, and the document must be owned by the user
        return (userId && doc.owner === userId);
    },
    update: function (userId: string, doc: iPost, fields: string[], modifier: any) {
        // can only change your own documents
        return doc.owner === userId;
    },
    remove: function (userId: string, doc: iPost) {
        // can only remove your own documents
        return doc.owner === userId;
    },
    fetch: ['owner']
});

Posts.deny({
    update: function (userId: string, doc: iPost, fields: string[], modifier: any) {
        // can't change owners
        return doc.userId !== userId;
    },
    remove: function (userId: string, doc: iPost) {
        // can't remove locked documents
        return doc.locked;
    },
    fetch: ['locked'] // no need to fetch 'owner'
});

/**
 * From Collections, cursor.forEach section
 */
var topPosts = Posts.find({}, { sort: { score: -1 }, limit: 5 });
var count = 0;
topPosts.forEach(function (post: { title: string }) {
    console.log("Title of post " + count + ": " + post.title);
    count += 1;
});

/**
 * From Collections, cursor.observeChanges section
 */
// DA: I added this line to make it work
var Users = new Mongo.Collection('users');

var count1 = 0;
var query = Users.find({ admin: true, onlineNow: true });
var handle = query.observeChanges({
    added: function (id: string, user: { name: string }) {
        count1++;
        console.log(user.name + " brings the total to " + count1 + " admins.");
    },
    removed: function () {
        count1--;
        console.log("Lost one. We're now down to " + count1 + " admins.");
    }
});

let cursor: Mongo.Cursor<Object>;

// After five seconds, stop keeping the count.
setTimeout(function () { handle.stop(); }, 5000);

// Additional testing for Mongo.Collection<T>
enum InlineObjectType {
    Invalid,
    Link,
    Image,
    Video,
    Person
}
interface CommentsDAO {
    text: string;
    authorId: string;
    inlineLinks: { objectType: InlineObjectType, objectId: string, objectUrl: string }[],
    tags: string[],
    viewNumber: number,
    private: boolean
}

var Comments = new Mongo.Collection<CommentsDAO>("comments");

Comments.find({ text: { $regex: /test/ } });
Comments.find({ viewNumber: { $gt: 100 } });
Comments.find({ viewNumber: { $not: { $lt: 100, $gt: 1000 } } });
Comments.find({ tags: { $in: [ "tag-1", "tag-2", "tag-3" ] } });
Comments.find({ $or: [ { text: "hello" }, { text: "world" } ] });
Comments.find({ $or: [ 
    { text: "hello" }, 
    { text: "world", viewNumber: { $gt: 0 } } 
], authorId: "test-author-id" });
Comments.find({ $and: [ 
    { $or: [{ authorId: "author-id-1" }, { authorId: "author-id-2" }] }, 
    { $or: [{ tags: "tag-1" }, { tags: "tag-2" }] }
]});

Comments.find({ $query: { inlineLinks: { $exists: true, $type: "array" } } });
Comments.find({ inlineLinks: { $elemMatch: { 
    objectType: InlineObjectType.Image, 
    objectUrl: { $regex: "https://(www\.?)youtube\.com" } 
} } });
Comments.find({ "inlineLinks.objectType": InlineObjectType.Person });
Comments.find({ tags: "tag-1" });
Comments.find({ tags: { $all: ["tag-1", "tag2"] } });

Comments.update({ viewNumber: { $exists: false } }, { $set: { viewNumber: 0 } });
Comments.update({ authorId: "author-id-1" }, { $push: { tags: "test-tag-1" } });
Comments.update({ authorId: "author-id-1" }, { $push: { tags: { $each: [ "test-tag-2", "test-tag-3" ] } } });

Comments.update({ authorId: "author-id-1" }, { $push: { inlineLinks: {
    objectId: "test-object-id",
    objectType: InlineObjectType.Link,
    objectUrl: "https://test.url/"
} } });
Comments.update({ viewNumber: { $exists: false } }, { $set: { viewNumber: 0 } });
Comments.update({ private: true }, { $unset: { tags: true } });

/**
 * From Sessions, Session.set section
 */
Tracker.autorun(function () {
    Meteor.subscribe("chat-history", { room: Session.get("currentRoomId") });
});

// Causes the function passed to Tracker.autorun to be re-run, so
// that the chat-history subscription is moved to the room "home".
Session.set("currentRoomId", "home");

/**
 * From Sessions, Session.get section
 */
// Page will say "We've always been at war with Eastasia"

// DA: commented out since transpiler didn't like append()
//document.body.append(frag1);

// Page will change to say "We've always been at war with Eurasia"
Session.set("enemy", "Eurasia");

/**
 * From Sessions, Session.equals section
 */
var value: string;
Session.get("key") === value;
Session.equals("key", value);

/**
 * From Accounts, Meteor.users section
 */
Meteor.publish("userData", function () {
    return Meteor.users.find({ _id: this.userId },
        { fields: { 'other': 1, 'things': 1 } });
});

Meteor.users.deny({ update: function () { return true; } });

/**
 * From Accounts, Meteor.loginWithExternalService section
 */
Meteor.loginWithGithub({
    requestPermissions: ['user', 'public_repo']
}, function (err: Meteor.Error) {
    if (err)
        Session.set('errorMessage', err.reason || 'Unknown error');
});

/**
 * From Accounts, Accounts.ui.config section
 */
Accounts.ui.config({
    requestPermissions: {
        facebook: ['user_likes'],
        github: ['user', 'repo']
    },
    requestOfflineToken: {
        google: true
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

/**
 * From Accounts, Accounts.validateNewUser section
 */
Accounts.validateNewUser(function (user: { username: string }) {
    if (user.username && user.username.length >= 3)
        return true;
    throw new Meteor.Error("403", "Username must have at least 3 characters");
});
// Validate username, without a specific error message.
Accounts.validateNewUser(function (user: { username: string }) {
    return user.username !== "root";
});

/**
 * From Accounts, Accounts.onCreateUser section
 */
Accounts.onCreateUser(function (options: { profile: any }, user: { profile: any, dexterity: number }) {
    var d6 = function () { return Math.floor(Math.random() * 6) + 1; };
    user.dexterity = d6() + d6() + d6();
    // We still want the default hook's 'profile' behavior.
    if (options.profile)
        user.profile = options.profile;
    return user;
});

/**
 * From Passwords, Accounts.emailTemplates section
 */
Accounts.emailTemplates.siteName = "AwesomeSite";
Accounts.emailTemplates.from = "AwesomeSite Admin <accounts@example.com>";
Accounts.emailTemplates.enrollAccount.subject = function (user: { profile: { name: string } }) {
    return "Welcome to Awesome Town, " + user.profile.name;
};
Accounts.emailTemplates.enrollAccount.text = function (user: any, url: string) {
    return "You have been selected to participate in building a better future!"
        + " To activate your account, simply click the link below:\n\n"
        + url;
};

/**
 * From Templates, Template.myTemplate.helpers section
 */
Template['adminDashboard'].helpers({
    foo: function () {
        return Session.get("foo");
    }
});

Template['newTemplate'].helpers({
    helperName: function () {
    }
});

Template['newTemplate'].created = function () {

};

Template['newTemplate'].rendered = function () {

};

Template['newTemplate'].destroyed = function () {

};

Template['newTemplate'].events({
    'click .something': function (event: Meteor.Event, template: Blaze.TemplateInstance) {
    }
});

Template.registerHelper('testHelper', function () {
    return 'tester';
});

var instance = Template.instance();
var data = Template.currentData();
var data = Template.parentData(1);
var body = Template.body;

/**
 * From Match section
 */
var Chats = new Mongo.Collection('chats');

Meteor.publish("chats-in-room", function (roomId: string) {
    // Make sure roomId is a string, not an arbitrary mongo selector object.
    check(roomId, String);
    return Chats.find({ room: roomId });
});

Meteor.methods({
    addChat: function (roomId: string, message: { text: string, timestamp: Date, tags: string }) {
        check(roomId, String);
        check(message, {
            text: String,
            timestamp: Date,
            // Optional, but if present must be an array of strings.
            tags: Match.Optional('Test String')
        });

        // ... do something with the message ...
    }
});

/**
 * From Match patterns section
 */
var pat = { name: Match.Optional('test') };
check({ name: "something" }, pat) // OK
check({}, pat) // OK
check({ name: undefined }, pat) // Throws an exception

// Outside an object
check(undefined, Match.Optional('test')); // OK

/**
 * From Deps, Tracker.autorun section
 */
Tracker.autorun(function () {
    var oldest = Monkeys.findOne('age = 20');

    if (oldest)
        Session.set("oldest", oldest.name);
});

Tracker.autorun(function (c) {
    if (!Session.equals("shouldAlert", true))
        return;

    c.stop();
    alert("Oh no!");
});

/**
 * From Deps, Deps.Computation
 */
if (Tracker.active) {
    Tracker.onInvalidate(function () {
        console.log('invalidated');
    });
}

/**
 * From Tracker, Tracker.Dependency
 */
var weather = "sunny";
var weatherDep = new Tracker.Dependency;

var getWeather = function () {
    weatherDep.depend();
    return weather;
};

var setWeather = function (w: string) {
    weather = w;
    // (could add logic here to only call changed()
    // if the new value is different from the old)
    weatherDep.changed();
};

/**
 * From HTTP, HTTP.call section
 */
Meteor.methods({
    checkTwitter: function (userId: string) {
        check(userId, String);
        this.unblock();
        var result = HTTP.call("GET", "http://api.twitter.com/xyz",
            { params: { user: userId } });
        if (result.statusCode === 200)
            return true
        return false;
    }
});


HTTP.call("POST", "http://api.twitter.com/xyz",
    { data: { some: "json", stuff: 1 } },
    function (error: Meteor.Error, result: any) {
        if (result.statusCode === 200) {
            Session.set("twizzled", true);
        }
    });

/**
 * From Email, Email.send section
 */
Meteor.methods({
    sendEmail: function (to: string, from: string, subject: string, text: string) {
        check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
    }
});

// In your client code: asynchronously send an email
Meteor.call('sendEmail',
    'alice@example.com',
    'Hello from Meteor!',
    'This is a test of Email.send.');

var testTemplate = new Blaze.Template('foo');
var testView = new Blaze.View('foo');
Blaze.Template.instance();

declare var el: HTMLElement;
Blaze.render(testTemplate, el);
Blaze.renderWithData(testTemplate, { testData: 123 }, el);
Blaze.remove(testView);
Blaze.getData(el);
Blaze.getData(testView);
Blaze.toHTML(testTemplate);
Blaze.toHTML(testView);
Blaze.toHTMLWithData(testTemplate, { test: 1 });
Blaze.toHTMLWithData(testTemplate, function () { });
Blaze.toHTMLWithData(testView, { test: 1 });
Blaze.toHTMLWithData(testView, function () { });

var reactiveVar1 = new ReactiveVar<string>('test value');
var reactiveVar2 = new ReactiveVar<string>('test value', function (oldVal: any) { return true; });

var varValue: string = reactiveVar1.get();
reactiveVar1.set('new value');

// Covers this PR:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/8233
var isConfigured: boolean = Accounts.loginServicesConfigured();
Accounts.onPageLoadLogin(function () {
    // do something
});

// Covers this PR:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/8065
var loginOpts = <Meteor.LoginWithExternalServiceOptions>{
    requestPermissions: ["a", "b"],
    requestOfflineToken: true,
    loginUrlParameters: { asdf: 1, qwer: "1234" },
    loginHint: "Help me",
    loginStyle: "Bold and powerful",
    redirectUrl: "popup",
    profile: "asdfasdf"
};
Meteor.loginWithMeteorDeveloperAccount(loginOpts, function (error: Meteor.Error) { });

Accounts.emailTemplates.siteName = "AwesomeSite";
Accounts.emailTemplates.from = "AwesomeSite Admin <accounts@example.com>";
Accounts.emailTemplates.headers = { asdf: 'asdf', qwer: 'qwer' };

Accounts.emailTemplates.enrollAccount.subject = function (user: Meteor.User) {
    return "Welcome to Awesome Town, " + user.profile.name;
};
Accounts.emailTemplates.enrollAccount.html = function (user: Meteor.User, url: string) {
    return "<h1>Some html here</h1>";
};
Accounts.emailTemplates.enrollAccount.from = function () {
    return "asdf@asdf.com";
};
Accounts.emailTemplates.enrollAccount.text = function (user: Meteor.User, url: string) {
    return "You have been selected to participate in building a better future!"
        + " To activate your account, simply click the link below:\n\n"
        + url;
};

var handle = Accounts.validateLoginAttempt(function (attemptInfoObject: Accounts.IValidateLoginAttemptCbOpts) {
    var type: string = attemptInfoObject.type;
    var allowed: boolean = attemptInfoObject.allowed;
    var error: Meteor.Error = attemptInfoObject.error;
    var user: Meteor.User = attemptInfoObject.user;
    var connection: Meteor.Connection = attemptInfoObject.connection;
    var methodName: string = attemptInfoObject.methodName;
    var methodArguments: any[] = attemptInfoObject.methodArguments;
    return true;
});
handle.stop();


// Covers https://github.com/meteor-typings/meteor/issues/8
const publicSetting = Meteor.settings.public['somePublicSetting'];
const deeperPublicSetting = Meteor.settings.public['somePublicSetting']['deeperSetting'];
const privateSetting = Meteor.settings['somePrivateSetting'];
const deeperPrivateSetting = Meteor.settings['somePrivateSettings']['deeperSetting'];


// Covers https://github.com/meteor-typings/meteor/issues/9
const username = (<HTMLInputElement>Template.instance().find('#username')).value;


// Covers https://github.com/meteor-typings/meteor/issues/3
BrowserPolicy.framing.disallow();
BrowserPolicy.content.allowEval();


// Covers https://github.com/meteor-typings/meteor/issues/18
if (Meteor.isDevelopment) {
    Rooms._dropIndex({ field: 1 });
}


// Covers https://github.com/meteor-typings/meteor/issues/20
Rooms.find().count(true);


// Covers https://github.com/meteor-typings/meteor/issues/21
if (Meteor.isTest) {
    // do something
}

DDPRateLimiter.addRule({ userId: 'foo' }, 5, 1000);

DDPRateLimiter.addRule({ userId: userId => userId == 'foo' }, 5, 1000);

Template.instance().autorun(() => { }).stop();

// Mongo Collection without connection (local collection)
const collectionWithoutConnection = new Mongo.Collection<MonkeyDAO>("monkey", {
    connection: null
});

}  // End of namespace

import  * as AV from 'avoscloud-sdk'
// 创建一个新的 TestObject 对象
AV.initialize('uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap','kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww');
var TestObject = AV.Object.extend('TestObject');

function avobject_Test() {


    var testObject = new TestObject();

    testObject.set("testBoolean", false);
    testObject.set("testInteger", 178);
    testObject.set("testString", "leancloud");
    testObject.set("testDate",  new Date());
    testObject.set("testArray", ["leancloud","is","great"]);
    testObject.set("testDictionary", {key:"value"});


    testObject.increment("testInteger");
    testObject.addUnique("testArray", "service");

    testObject.save();
}

function test_query() {

    var TestObject = AV.Object.extend('TestObject')
    var todoObject = new TestObject();

    var query = new AV.Query(TestObject);

    query.equalTo("testString", "leancloud");
    query.notEqualTo("testString", "aws");
    query.greaterThan("testInteger", 150);
    query.limit(10);
    query.skip(10);

    // Sorts the results in ascending order by the score field
    query.ascending("testString");

    // Sorts the results in descending order by the score field
    query.descending("testString");

    // Restricts to wins < 50
    query.lessThan("testInteger", 50);

    // Restricts to wins <= 50
    query.lessThanOrEqualTo("testInteger", 50);

    // Restricts to wins > 50
    query.greaterThan("testInteger", 50);

    // Restricts to wins >= 50
    query.greaterThanOrEqualTo("testInteger", 50);

    // Finds scores from any of Jonathan, Dario, or Shawn
    query.containedIn("testString",
                      ["leancloud", "aws", "azure"]);

    // Finds scores from anyone who is neither Jonathan, Dario, nor Shawn
    query.notContainedIn("testString",
                         ["leancloud", "aws", "azure"]);

    // Finds objects that have the score set
    query.exists("testInteger");

    // Finds objects that don't have the score set
    query.doesNotExist("testInteger");

    query.select("testInteger", "leancloud");

    // Find objects where the array in arrayKey contains 2.
    query.equalTo("arrayKey", 2);

    // Find objects where the array in arrayKey contains all of the elements 2, 3, and 4.
    query.containsAll("arrayKey", [2, 3, 4]);

    query.startsWith("testString", "l");
}

function test_file() {

    var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    var file = new AV.File("myfile.txt", { base64: base64 });

    var bytes = [ 0xBE, 0xEF, 0xCA, 0xFE ];
    var file = new AV.File("myfile.txt", bytes);

    var file = new AV.File("myfile.zzz", {}, "image/png");

    var src = file.url();

    file.save().then(
    () => {
        // The file has been saved to Parse.
    },
    (error) => {
        // The file either could n ot be read, or could not be saved to Parse.
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
    AV.Analytics.track('search', dimensions);

    var codeString = '404';
    AV.Analytics.track('error', { code: codeString })
}

function test_user_acl_roles() {

    var user = new AV.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");

// other fields can be set just like with Parse.Object
    user.set("phone", "415-392-0202");

    var currentUser = AV.User.current();
    if (currentUser) {
        // do stuff with the user
    } else {
        // show the signup or login page
    }

    AV.User.become("session-token-here").then(function (user) {
        // The current user is now set to user.
    }, function (error) {
        // The token could not be validated.
    });

    var groupACL = new AV.ACL();

    var userList: AV.User[] = [AV.User.current()];
    // userList is an array with the users we are sending this message to.
    for (var i = 0; i < userList.length; i++) {
        groupACL.setReadAccess(userList[i], true);
        groupACL.setWriteAccess(userList[i], true);
    }

    groupACL.setPublicReadAccess(true);

    AV.User.requestPasswordReset("email@example.com").then(function (data) {
        // The current user is now set to user.
    }, function (error) {
        // The token could not be validated.
    });

    // By specifying no write privileges for the ACL, we can ensure the role cannot be altered.
    var role = new AV.Role("Administrator", groupACL);
    role.getUsers().add(role);
    role.getRoles().add(role);
    role.save();

    AV.User.logOut().then(function (data) {
      // logged out
    });
}


function test_push() {

    AV.Push.send({
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

    var query = new AV.Query(AV.Installation);
    query.equalTo('injuryReports', true);

    AV.Push.send({
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


function test_promise() {
    let resolved = AV.Promise.as(true);
    let rejected = AV.Promise.error("an error object");
    AV.Promise.when([resolved, rejected]).then(function() {
        // success
    }, function() {
        // failed
    });

    // can check whether an object is a Parse.Promise object or not
    AV.Promise.is(resolved);
}



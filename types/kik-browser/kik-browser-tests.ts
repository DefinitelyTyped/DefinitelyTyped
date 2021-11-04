if (kik.enabled) {
    // running in kik
}

if (kik.send) {
    // can send messages
}

kik.getUser(function (user) {
    if (!user) {
        // user denied access to their information
    } else {
        typeof user.username;  // "string"
        typeof user.fullName;  // "string"
        typeof user.firstName; // "string"
        typeof user.lastName;  // "string"
        typeof user.pic;       // "string"
        typeof user.thumbnail; // "string"
    }
});

if (kik.hasPermission()) {
    // your webpage has permission
}

kik.getAnonymousUser(function (token) {
    typeof token; // "string"
});

kik.sign("my data", function (signedData, username, host) {
    if (!signedData) {
        // failed to sign
        // perhaps user denied permissions
    } else {
        // successfully signed
        typeof signedData; // "string", signed data
        typeof username;   // "string", user who signed
        typeof host;       // "string", host of your webpage
        // all of these fields must be passed to the
        // verification service to be successful
    }
});

kik.anonymousSign("my data", function (signedData, anonToken, host) {
    if (!signedData) {
        // failed to sign
    } else {
        // successfully signed
        typeof signedData; // "string", signed data
        typeof anonToken;  // "string", anonymous user who signed
        typeof host;       // "string", host of your webpage
    }
});

kik.send({
    title     : "Message title"         ,
    text      : "Message body"          ,
    pic       : "http://mysite.com/pic" , // optional
    big       : true                    , // optional
    noForward : true                    , // optional
    data      : { some : "json" }         // optional
});

kik.send("myFriend", {
    title : "Message title" ,
    text  : "Message body"  ,
});

if (kik.message) {
    // your webpage was launched from a message
    // kik.message is exactly what was provided in kik.send
    // in this case: { some "json" }
}

kik.openConversation("kikteam");

kik.metrics.enableGoogleAnalytics("id", "mydomain.com");
kik.metrics.enableGoogleAnalytics();
kik.showProfile("kikteam");

kik.pickUsers(function (users) {
    if (!users) {
        // action was cancelled by user
    } else {
        users.forEach(function (user) {
            typeof user.username;  // "string"
            typeof user.fullName;  // "string"
            typeof user.firstName; // "string"
            typeof user.lastName;  // "string"
            typeof user.pic;       // "string"
            typeof user.thumbnail; // "string"
        });
    }
});

kik.pickUsers({
    minResults : 2 , // number >= 0
    maxResults : 4   // number >  0
}, function (users) {
    // do something with data
});

kik.pickUsers({
    preselected : [
        { username : "foo" /*, etc */ },
        // any user object obtained from previous call to pickUsers
    ]
}, function (users) {
    // do something with data
});

kik.pickUsers({
    filterSelf: false
}, function (users) {
    // do something with data
});

kik.photo.get(function (photos) {
    if (!photos) {
        // action cancelled by user
    } else {
        // photos is a list of data URLs
    }
});

kik.photo.get({
    quality    : 0.7  , // number between 0-1
    minResults : 2    , // number between 1-25
    maxResults : 25   , // number between 1-25
    maxHeight  : 1280 , // number in pixels between 0-1280
    maxWidth   : 1280 , // number in pixels between 0-1280
}, function (photos) {
    // do something with the photos
});

kik.photo.getFromCamera({
    onSelect : function (numPhotos) {
        // called immediately after the user has selected photos
        // "numPhotos" is the number of photos selected by the user
        // that many "onPhoto" events will be fired after this
        // "onComplete" will fire after all "onPhoto" events are done
    },
    onPhoto : function (photo, index) {
        // "photo" is a data URL representing a single image
        // "photo" may be null if there was an error in processing
        // this will be called once for each image when it is ready
        // "index" is an integer relating to the order of selection
        // event may not come in order so use index if you care
    },
    onComplete : function (photos) {
        // "photos" is list of all photos from all photo events
        // this event is identical to normal callback
    },
    onCancel : function () {
        // the action was cancelled by the user
        // no other events will be called
    }
});

kik.photo.get({
    quality    : 0.7  , // number between 0-1
    minResults : 2    , // number between 1-25
    maxResults : 25   , // number between 1-25
    maxHeight  : 1280 , // number in pixels between 0-1280
    maxWidth   : 1280 , // number in pixels between 0-1280
}, function (photos) {
    // do something with the photos
});

kik.photo.getFromCamera({
    onSelect : function (numPhotos) {
        // called immediately after the user has selected photos
        // 'numPhotos' is the number of photos selected by the user
        // that many 'onPhoto' events will be fired after this
        // 'onComplete' will fire after all 'onPhoto' events are done
    },
    onPhoto : function (photo, index) {
        // 'photo' is a data URL representing a single image
        // 'photo' may be null if there was an error in processing
        // this will be called once for each image when it is ready
        // 'index' is an integer relating to the order of selection
        // event may not come in order so use index if you care
    },
    onComplete : function (photos) {
        // 'photos' is list of all photos from all photo events
        // this event is identical to normal callback
    },
    onCancel : function () {
        // the action was cancelled by the user
        // no other events will be called
    }
});

kik.photo.getFromGallery(function (photos) {
    // do something with the photos
});

kik.photo.saveToGallery("url", function (status) {
    if (status) {
        // save succeeded
    } else {
        // save failed
    }
});

kik.picker(
    "http://othersite.com/",
    { arbitrary : "request data" },
    function (response) {
        // do something with the picked data!
    }
);

if (kik.picker.reply) {
    // webpage was launched in "picker mode"
    // kik.picker.url  === the url of the calling webpage
    // kik.picker.data === { arbitrary : "request data" }
    kik.picker.reply({ arbitrary : "response data" });
}

kik.ready(function () {
    // expensive task that should not block loading
});

function handleBackButton () {
    // called when back button is pressed
    return false; // optionally cancel default behavior
}

kik.browser.back(handleBackButton);       // handle back button
kik.browser.unbindBack(handleBackButton); // unbind from handling back button

kik.open("http://www.google.com/");
kik.open("https://pop.kik.com/");
kik.open("twitter://post");

kik.open("http://mysite.com/", true); // opens in popup mode

kik.open("https://thirdparty.com/auth/page/path", true);

kik.open("http://mysite.com/#response-data");

kik.linkData; // "response-data"

kik.on("linkData", function () {
    kik.linkData; // "response-data"
});

if (kik.browser.background) {
    // the webpage is in the background
}

kik.browser.on("background", function () {
    // the webpage is now in the background
});
kik.browser.on("foreground", function () {
    // the webpage has returned to the foreground
});

// lock the orientation in landscape mode
kik.browser.setOrientationLock("landscape");

// unlock the orientation
kik.browser.setOrientationLock("free");

kik.browser.statusBar(false); // hide status bar
kik.browser.statusBar(true);  // show status bar

kik.formHelpers.show();      // show helpers
kik.formHelpers.hide();      // hide helpers
kik.formHelpers.isEnabled(); // check if enabled

// backlight will not turn off as long
// as your webpage is visible to the user
kik.browser.backlightTimeout(false);

// backlight will timeout as per OS rules
kik.browser.backlightTimeout(true);

function eventHandler () {
    // do something when event occurs
}

// bind to event
kik.on("message", eventHandler);

// unbind from event
kik.off("message", eventHandler);

// bind to an event once (ignoring subsequent occurrences)
kik.once("message", eventHandler);

kik.trigger("message", {
    title : "Fake message" ,
    // object will be passed to all event listeners
});

let os = kik.utils.platform.os;
typeof os.name    === "string"; // "ios", "android", "osx", "windows", etc
typeof os.version === "number"; // numeric version number

let browser = kik.utils.platform.browser;
typeof browser.name    === "string"; // "chrome", "safari", "opera", etc
typeof browser.version === "number"; // numeric version number

let version = kik.utils.platform.version;
typeof browser.name    === "string";
typeof browser.version === "number"; // numeric version number

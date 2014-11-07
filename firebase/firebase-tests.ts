/// <reference path="firebase.d.ts" />
var AUTH_TOKEN: string = "12345";
var dataRef:Firebase = new Firebase("https://SampleChat.firebaseio-demo.com/");
//Log me in
dataRef.auth(AUTH_TOKEN, function(error, result) {
  if(error) {
    console.log("Login Failed!", error);
  } else {
    console.log('Authenticated successfully with payload:', result.auth);
    console.log('Auth expires at:', new Date(result.expires * 1000));
  }
});

// Log me in
dataRef.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    console.log('Authenticated successfully with payload:', authData);
  }
});

// Log me in
dataRef.authAnonymously(function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    console.log('Authenticated successfully with payload:', authData);
  }
});

// Log me in
dataRef.authWithPassword({
  "email"    : "bobtony@firebase.com",
  "password" : "correcthorsebatterystaple"
}, function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    console.log('Authenticated successfully with payload:', authData);
  }
});

// Log me in
dataRef.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    console.log('Authenticated successfully with payload:', authData);
  }
});

// Log me in
dataRef.authWithOAuthRedirect("twitter", function(error) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    // We'll never get here, as the page will redirect on success.
  }
});

// Authenticate with Facebook using an existing OAuth 2.0 access token
dataRef.authWithOAuthToken("facebook", "<ACCESS-TOKEN>", function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    console.log('Authenticated successfully with payload:', authData);
  }
});
// Authenticate with Twitter using an existing OAuth 1.0a credential set
dataRef.authWithOAuthToken("twitter", {
  "user_id"            : "<USER-ID>",
  "oauth_token"        : "<ACCESS-TOKEN>",
  "oauth_token_secret" : "<ACCESS-TOKEN-SECRET>",
}, function(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    console.log('Authenticated successfully with payload:', authData);
  }
});

var authData = dataRef.getAuth();
if (authData) {
  console.log('Authenticated user with uid:', authData.uid);
}

var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
firebaseRef.onAuth(function(authData) {
  if (authData) {
    console.log('Client is authenticated with uid ' + authData.uid);
  } else {
    // Client is unauthenticated
  }
});

var onAuthChange = function(authData) { /*...*/ };
firebaseRef.onAuth(onAuthChange);
// Sometime later...
firebaseRef.offAuth(onAuthChange);

//Time to log out!
dataRef.unauth();

var usersRef:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/');
var fredRef:Firebase = usersRef.child('fred');
var fredFirstNameRef:Firebase = fredRef.child('name/first');
var x:string = fredFirstNameRef.toString();
// x is now 'https://SampleChat.firebaseIO-demo.com/users/fred/name/first'.

var usersRef2:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/');
var sampleChatRef:Firebase = usersRef2.parent();
var x2:string = sampleChatRef.toString();
// x is now 'https://SampleChat.firebaseIO-demo.com'.
var y:Firebase = sampleChatRef.parent();
// y is now null, since sampleChatRef refers to the root of the Firebase.

var fredRef2:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/fred');
var sampleChatRef2 :Firebase= fredRef2.root();
var x3:string = sampleChatRef2.toString();
// x is now 'https://SampleChat.firebaseIO-demo.com'.

var fredRef = new Firebase("https://samplechat.firebaseio-demo.com/users/fred");
var key = fredRef.key();  // key === "fred"
key = fredRef.child("name/last").key();  // key === "last"
key = fredRef.root().key();  // key === null, since fredRef refers to the root of the Firebase.

var fredRef3:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/fred');
var x4:string = fredRef3.name();
// x is now 'fred'.

/*
 * $set
 */
var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
fredNameRef.child('first').set('Fred');
fredNameRef.child('last').set('Flintstone');
// We've written 'Fred' to the Firebase location storing fred's first name,
// and 'Flintstone' to the location storing his last name

fredNameRef.set({ first: 'Fred', last: 'Flintstone' });
// Exact same effect as the previous example, except we've written
// fred's first and last name simultaneously

var onComplete = function(error) {
  if (error) {
    console.log('Synchronization failed');
  } else {
    console.log('Synchronization succeeded');
  }
};
fredNameRef.set({ first: 'Fred', last: 'Flintstone' }, onComplete);
// Same as the previous example, except we will also log a message
// when the data has finished synchronizing


/*
 * $update
 */
var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
// Modify the 'first' and 'last' children, but leave other data at fredNameRef unchanged
fredNameRef.update({ first: 'Fred', last: 'Flintstone' });

// Same as the previous example, except we will also display an alert
// message when the data has finished synchronizing.
var onComplete = function(error) {
  if (error) {
    console.log('Synchronization failed');
  } else {
    console.log('Synchronization succeeded');
  }
};
fredNameRef.update({ first: 'Wilma', last: 'Flintstone' }, onComplete);

var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');
//The following 2 function calls are equivalent
fredRef.update({ name: { first: 'Fred', last: 'Flintstone' }});
fredRef.child('name').set({ first: 'Fred', last: 'Flintstone' });


// Increment Fred's rank by 1.
var fredRankRef:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/fred/rank');
fredRankRef.transaction(function(currentRank: number) {
  return currentRank+1;
});

// Try to create a user for wilma, but only if the user id 'wilma' isn't already taken.
var wilmaRef: Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/wilma');
wilmaRef.transaction(function(currentData) {
  if (currentData === null) {
    return {name: {first: 'Wilma', last: 'Flintstone'} };
  } else {
    console.log('User wilma already exists.');
    return; // Abort the transaction.
  }
}, function(error: any, committed: boolean, snapshot: IFirebaseDataSnapshot) {
  if (error)
    console.log('Transaction failed abnormally!', error);
  else if (!committed)
    console.log('We aborted the transaction (because wilma already exists).');
  else
    console.log('User wilma added!');
  console.log('Wilma\'s data: ', snapshot.val());
});

var messageListRef: Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/message_list');
var lastMessagesQuery:IFirebaseQuery = messageListRef.endAt().limit(500);
lastMessagesQuery.on('child_added', function(childSnapshot: IFirebaseDataSnapshot) { /* handle child add */ });

var messageListRef2:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/message_list');
var firstMessagesQuery:IFirebaseQuery = messageListRef2.startAt().limit(500);
firstMessagesQuery.on('child_added', function(childSnapshot: IFirebaseDataSnapshot) { /* handle child add */ });

var usersRef3: Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users');
var usersQuery: IFirebaseQuery = usersRef3.startAt(1000).limit(50);
usersQuery.on('child_added', function(userSnapshot: IFirebaseDataSnapshot) { /* handle user */ });

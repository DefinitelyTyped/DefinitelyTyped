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

var fredRef3:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users/fred');
var x4:string = fredRef3.name();
// x is now 'fred'.

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
}, function(error: any, committed: bool, snapshot: IFirebaseDataSnapshot) {
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

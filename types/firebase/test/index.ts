
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

var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com/');
/*
 * Firebase.authWithCustomToken()
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Log me in
	dataRef.authWithCustomToken(AUTH_TOKEN, function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');

	var onComplete = function (authData: FirebaseAuthData) {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	// Log me in
	dataRef.authWithCustomToken(AUTH_TOKEN).then(onComplete, onError);
	// Same as before but use returned Promise to handle the result
}

/*
 * Firebase.authAnonymously()
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');

	var onComplete = function (authData: FirebaseAuthData) {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	// Log me in
	dataRef.authAnonymously().then(onComplete, onError);
	// Same as before but use returned Promise to handle the result
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Log me in
	dataRef.authAnonymously(function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

/*
 * Firebase.authWithPassword()
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Log me in
	dataRef.authWithPassword({
		"email": "bobtony@firebase.com",
		"password": "correcthorsebatterystaple"
	}, function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	var onComplete = function (authData: FirebaseAuthData) {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	// Log me in
	dataRef.authWithPassword({
		"email": "bobtony@firebase.com",
		"password": "correcthorsebatterystaple"
	}).then(onComplete, onError);
	// Same as before but use returned Promise to handle the result
}

/*
 * Firebase.authWithOAuthPopup()
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Log me in
	dataRef.authWithOAuthPopup("twitter", function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');

	var onComplete = function (authData: FirebaseAuthData) {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	// Log me in
	dataRef.authWithOAuthPopup("twitter").then(onComplete, onError);
	// Same as before but use returned Promise to handle the result
}

/*
 * Firebase.authWithOAuthRedirect
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Log me in
	dataRef.authWithOAuthRedirect("twitter", function (error) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			// We'll never get here, as the page will redirect on success.
		}
	});
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');

	var onComplete = function () {
		// We'll never get here, as the page will redirect on success.
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	// Log me in
	dataRef.authWithOAuthRedirect("twitter").then(onComplete, onError);
	// Same as before but use returned Promise to handle the result
}

/*
 * Firebase.authWithOAuthToken()
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Authenticate with Facebook using an existing OAuth 2.0 access token
	dataRef.authWithOAuthToken("facebook", "<ACCESS-TOKEN>", function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');

	var onComplete = function (authData: FirebaseAuthData) {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	// Authenticate with Facebook using an existing OAuth 2.0 access token
	dataRef.authWithOAuthToken("facebook", "<ACCESS-TOKEN>").then(onComplete, onError);
	// Same as before but use returned Promise to handle the result
}

() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	// Authenticate with Twitter using an existing OAuth 1.0a credential set
	dataRef.authWithOAuthToken("twitter", {
		"user_id": "<USER-ID>",
		"oauth_token": "<ACCESS-TOKEN>",
		"oauth_token_secret": "<ACCESS-TOKEN-SECRET>",
	}, function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

/*
 * Firebase.getAuth()
 */
() => {
	var dataRef = new Firebase('https://samplechat.firebaseio-demo.com');
	var authData = dataRef.getAuth();

	if (authData) {
		console.log('Authenticated user with uid:', authData.uid);
	}
}

/*
 * Firebase.onAuth()
 */
() => {
	var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
	firebaseRef.onAuth(function (authData) {
		if (authData) {
			console.log('Client is authenticated with uid ' + authData.uid);
		} else {
			// Client is unauthenticated
		}
	});
}

/*
 * Firebase.offAuth
 */
() => {
	var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
	var onAuthChange = function (authData: FirebaseAuthData) { /*...*/ };
	firebaseRef.onAuth(onAuthChange);
	// Sometime later...
	firebaseRef.offAuth(onAuthChange);
}

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

/*
 * Firebase.key()
 */
() => {
	var fredRef = new Firebase("https://samplechat.firebaseio-demo.com/users/fred");
	var key = fredRef.key();  // key === "fred"
	key = fredRef.child("name/last").key();  // key === "last"
}
() => {
	// Calling key() on the root of a Firebase will return null:
	var rootRef = new Firebase("https://samplechat.firebaseio-demo.com");
	var key = rootRef.key();  // key === null
}

/*
 * Firebase.set()
 */
() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	fredNameRef.child('first').set('Fred');
	fredNameRef.child('last').set('Flintstone');
	// We've written 'Fred' to the Firebase location storing fred's first name,
	// and 'Flintstone' to the location storing his last name
}
() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' });
	// Exact same effect as the previous example, except we've written
	// fred's first and last name simultaneously
}
() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	var onComplete = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		} else {
			console.log('Synchronization succeeded');
		}
	};
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' }, onComplete);
	// Same as the previous example, except we will also log a message
	// when the data has finished synchronizing
}

() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	var onComplete = function () {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' }).then(onComplete, onError);
	// Same as the previous example but use returned Promise to handle the result
}

/*
 * Firebase.update()
 */
() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	// Modify the 'first' and 'last' children, but leave other data at fredNameRef unchanged
	fredNameRef.update({ first: 'Fred', last: 'Flintstone' });
}
() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	// Same as the previous example, except we will also display an alert
	// message when the data has finished synchronizing.
	var onComplete = function (error:any) {
		if (error) {
			console.log('Synchronization failed');
		} else {
			console.log('Synchronization succeeded');
		}
	};
	fredNameRef.update({ first: 'Wilma', last: 'Flintstone' }, onComplete);
}

() => {
	var fredNameRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/name');
	var onComplete = function () {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};
	fredNameRef.update({ first: 'Fred', last: 'Flintstone' }).then(onComplete, onError);
	// Same as the previous example but use returned Promise to handle the result
}

() => {
	var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');
	//The following 2 function calls are equivalent
	fredRef.update({ name: { first: 'Fred', last: 'Flintstone' }});
	fredRef.child('name').set({ first: 'Fred', last: 'Flintstone' });
}

/*
 * Firebase.remove()
 */
() => {
	var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');
	fredRef.remove();
	// All data at the Firebase location for user 'fred' has been deleted
	// (including any child data)
}
() => {
	var onComplete = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		} else {
			console.log('Synchronization succeeded');
		}
	};
	fredRef.remove(onComplete);
	// Same as the previous example, except we will also log
	// a message when the delete has finished synchronizing
}

() => {
	var onComplete = function () {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};
	fredRef.remove().then(onComplete, onError);
	// Same as the previous example but use returned Promise to handle the result
}

/*
 * Firebase.push()
 */
() => {
	var messageListRef = new Firebase('https://samplechat.firebaseio-demo.com/message_list');
	var newMessageRef = messageListRef.push();
	newMessageRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
	// We've appended a new message to the message_list location.
	var path = newMessageRef.toString();
	// path will be something like
	// 'https://samplechat.firebaseio-demo.com/message_list/-IKo28nwJLH0Nc5XeFmj'
}
() => {
	var messageListRef = new Firebase('https://SampleChat.firebaseIO-demo.com/message_list');
	messageListRef.push({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
	// Same effect as the previous example, but we've combined the push() and the set().
}

/*
 * Firebase.setWithPriority()
 */
() => {
	var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');

	var user = {
		name: {
			first: 'Fred',
			last: 'Flintstone'
		},
		rank: 1000
	};

	fredRef.setWithPriority(user, 1000);
	// We've written Fred's name and rank to firebase, and used his rank (1000) as the
	// priority of the data so he'll be ordered relative to other users by his rank
}


() => {
	var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');

	var user = {
		name: {
			first: 'Fred',
			last: 'Flintstone'
		},
		rank: 1000
	};

	fredRef.setWithPriority(user, 1000);

	var onComplete = function () {
		console.log('Synchronization succeeded');
	};
	var onError = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		}
	};

	fredRef.setWithPriority(user, 1000).then(onComplete, onError);
	// Same as the previous example but use returned Promise to handle the result
}

/*
 * Firebase.setPriority()
 */
() => {
	var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');
	fredRef.setPriority(1000);
	// We have changed the priority of fred's user data to 1000
}

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
}, function(error: any, committed: boolean, snapshot: FirebaseDataSnapshot) {
  if (error)
    console.log('Transaction failed abnormally!', error);
  else if (!committed)
    console.log('We aborted the transaction (because wilma already exists).');
  else
    console.log('User wilma added!');
  console.log('Wilma\'s data: ', snapshot.val());
});

/*
 * Firebase.createUser()
 */
() => {
	var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
	firebaseRef.createUser({
		email: "bobtony@firebase.com",
		password: "correcthorsebatterystaple"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'EMAIL_TAKEN':
				// The new user account cannot be created because the email is already in use.
				case 'INVALID_EMAIL':
				// The specified email is not a valid email.
				default:
			}
		} else {
			// User account created successfully!
		}
	});
}

/*
 * Firebase.changePassword()
 */
() => {
	var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
	firebaseRef.changePassword({
		email: "bobtony@firebase.com",
		oldPassword: "correcthorsebatterystaple",
		newPassword: "shinynewpassword"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'INVALID_PASSWORD':
				// The specified user account password is incorrect.
				case 'INVALID_USER':
				// The specified user account does not exist.
				default:
			}
		} else {
			// User password changed successfully!
		}
	});
}

/*
 * Firebase.removeUser()
 */
() => {
	var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
	firebaseRef.removeUser({
		email: "bobtony@firebase.com",
		password: "correcthorsebatterystaple"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'INVALID_USER':
				// The specified user account does not exist.
				case 'INVALID_PASSWORD':
				// The specified user account password is incorrect.
				default:
			}
		} else {
			// User account deleted successfully!
		}
	});
}

/*
 * Firebase.resetPassword()
 */
() => {
	var firebaseRef = new Firebase('https://samplechat.firebaseio-demo.com');
	firebaseRef.resetPassword({
		email: "bobtony@firebase.com"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'INVALID_USER':
				// The specified user account does not exist.
				default:
			}
		} else {
			// Password reset email sent successfully!
		}
	});
}

//var messageListRef: Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/message_list');
//var lastMessagesQuery:FirebaseQuery = messageListRef.endAt().limit(500);
//lastMessagesQuery.on('child_added', function(childSnapshot: FirebaseDataSnapshot) { /* handle child add */ });

//var messageListRef2:Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/message_list');
//var firstMessagesQuery:FirebaseQuery = messageListRef2.startAt().limit(500);
//firstMessagesQuery.on('child_added', function(childSnapshot: FirebaseDataSnapshot) { /* handle child add */ });

//var usersRef3: Firebase = new Firebase('https://SampleChat.firebaseIO-demo.com/users');
//var usersQuery: FirebaseQuery = usersRef3.startAt(1000).limit(50);
//usersQuery.on('child_added', function(userSnapshot: FirebaseDataSnapshot) { /* handle user */ });

/*
 * Firebase.goOffline()
 * Firebase.goOnline()
 */
() => {
	var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
	Firebase.goOffline(); // All Firebase instances are disconnected
	Firebase.goOnline(); // All Firebase instances automatically reconnect
}

/*
 * FirebaseQuery.on()
 */
() => {
	firebaseRef.on('value', function (dataSnapshot) {
		// code to handle new value.
	});

	firebaseRef.on('child_added', function (childSnapshot, prevChildName) {
		// code to handle new child.
	});

	firebaseRef.on('child_removed', function (oldChildSnapshot) {
		// code to handle child removal.
	});

	firebaseRef.on('child_changed', function (childSnapshot, prevChildName) {
		// code to handle child data changes.
	});

	firebaseRef.on('child_changed', function (childSnapshot, prevChildName) {
		// code to handle child data changes.
	});
}

/*
 * FirebaseQuery.off()
 */
() => {
	var onValueChange = function (dataSnapshot: FirebaseDataSnapshot) { /* handle... */ };
	firebaseRef.on('value', onValueChange);
	// Sometime later...
	firebaseRef.off('value', onValueChange);
}
() => {
	// Or you can save a line of code by using an inline function
	// and on()'s return value.
	var onValueChange = firebaseRef.on('value', function (dataSnapshot) { /* handle... */ });
	// Sometime later...
	firebaseRef.off('value', onValueChange);
}

/*
 * FirebaseQuery.once()
 */
() => {
	// Basic usage of .once() to read the data located at firebaseRef.
	firebaseRef.once('value', function (dataSnapshot) {
		// handle read data.
	});
}
() => {
	// Provide a failureCallback to be notified when this
	// callback is revoked due to security violations.
	firebaseRef.once('value', function (dataSnapshot) {
		// code to handle new value
	}, function (err: any) {
		// code to handle read error
	});
}
() => {
	// Provide a context to override "this" when callbacks are triggered.
	firebaseRef.once('value', function (dataSnapshot) {
		// this.x is 1
	}, { x: 1 });
}

() => {
	// Use a Promise in place of a callback
	firebaseRef.once('value').then(function(dataSnapshot){
		// handle read data
	})
}

/*
 * FirebaseQuery.orderByChild()
 */
() => {
	// For example, using our sample Firebase of dinosaur facts,
	// we can read all dinosaurs ordered by height using the following query:
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByChild("height").on("child_added", function (snapshot) {
		console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
	});
}

/*
 * FirebaseQuery.orderByKey()
 */
() => {
	// For example, using our sample Firebase of dinosaur facts, 
	// we can read all dinosaurs in alphabetical order, ignoring their priority, 
	// using the following query:
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByKey().on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}

/*
 * FirebaseQuery.orderByPriority()
 */
() => {
	// For example, using our sample Firebase of dinosaur facts, 
	// we can read all dinosaurs in priority order using the following query:
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByPriority().on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}

/*
 * FirebaseQuery.startAt()
 */
() => {
	// For example, using our sample Firebase of dinosaur facts, 
	// we can find all dinosaurs that are at least three meters tall 
	// by combining orderByChild() and startAt():
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByChild("height").startAt(3).on("child_added", function (snapshot) {
		console.log(snapshot.key())
	});
}

/*
 * FirebaseQuery.endAt()
 */
() => {
	// For example, using our sample Firebase of dinosaur facts, 
	// we can find all dinosaurs whose names come before Pterodactyl lexicographically 
	// by combining orderByKey() and endAt():
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByKey().endAt("pterodactyl").on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}

/*
 * FirebaseQuery.equalTo()
 */
() => {
	// For example, using our sample Firebase of dinosaur facts, 
	// we can find all dinosaurs whose height is exactly 25 meters 
	// by combining orderByChild() and equalTo():
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByChild("height").equalTo(25).on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}

/*
 * FirebaseQuery.limitToFirst
 */
() => {
	// Using our sample Firebase of dinosaur facts, 
	// we can find the two shortest dinosaurs with this query:
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByChild("height").limitToFirst(2).on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}

/*
 * FirebaseQuery.limitToLast
 */
() => {
	// Using our sample Firebase of dinosaur facts, 
	// we can find the two heaviest dinosaurs with this query:
	var ref = new Firebase("https://dinosaur-facts.firebaseio.com/");
	ref.orderByChild("weight").limitToLast(2).on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}

/*
 * FirebaseQuery.ref()
 */
() => {
	// The Firebase reference returned by ref() is equivalent to the Firebase reference used to create the Query.
	var ref = new Firebase("https://samplechat.firebaseio-demo.com/users");
	var query = ref.limitToFirst(5);
	var refToSameLocation = query.ref();  // ref === refToSameLocation
}

/*
 * Firebase.onDisconnect().set()
 */
() => {
	var disconnectRef = new Firebase('https://samplechat.firebaseio-demo.com/disconnectmessage');
	disconnectRef.onDisconnect().set('I disconnected!');
}

/*
 * Firebase.onDisconnect().update()
 */
() => {
	var disconnectRef = new Firebase('https://samplechat.firebaseio-demo.com/disconnectmessage');
	disconnectRef.onDisconnect().update({ message: 'I disconnected!' });
}

/*
 * Firebase.onDisconnect().remove()
 */
() => {
	var disconnectRef = new Firebase('https://samplechat.firebaseio-demo.com/disconnectdata');
	disconnectRef.onDisconnect().remove();
}

/*
 * Firebase.onDisconnect().setWithPriority()
 */
() => {
	var disconnectRef = new Firebase('https://samplechat.firebaseio-demo.com/disconnectMessage');
	disconnectRef.onDisconnect().setWithPriority('I disconnected', 10);
}

/*
 * Firebase.onDisconnect().cancel()
 */
() => {
	var fredOnlineRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred/online');
	fredOnlineRef.onDisconnect().set(false);

	// cancel the previously set onDisconnect().set() event
	fredOnlineRef.onDisconnect().cancel();
}

/*
 * Firebase.ServerValue.TIMESTAMP
 */
() => {
	// Record the current time immediately, and queue an event to
	// record the time at which the user disconnects.
	var sessionsRef = new Firebase('https://samplechat.firebaseio-demo.com/sessions/');
	var mySessionRef = sessionsRef.push();
	mySessionRef.onDisconnect().update({ endedAt: Firebase.ServerValue.TIMESTAMP });
	mySessionRef.update({ startedAt: Firebase.ServerValue.TIMESTAMP });
}

/*
 * DataSnapshot.val()
 */
() => {
	// Demonstrate writing data and then reading it back as a Javascript object.
	var fredNameRef = new Firebase('https://SampleChat.firebaseIO-demo.com/users/fred');
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' });

	fredNameRef.once('value', function (nameSnapshot) {
		var val = nameSnapshot.val();
		// val now contains the object { first: 'Fred', last: 'Flintstone' }.
	});
}

/*
 * DataSnapshot.child()
 */
(dataSnapshot:FirebaseDataSnapshot) => {
	// Given a DataSnapshot containing a child 'name' that has children 'first'
	// (set to 'Fred') and 'last' (set to 'Flintstone'):
	var nameSnapshot = dataSnapshot.child('name');
	var name = nameSnapshot.val();
	// name now contains { first: 'Fred', last: 'Flintstone'}.

	var firstNameSnapshot = dataSnapshot.child('name/first');
	var firstName = firstNameSnapshot.val();
	// firstName now contains 'Fred'.

	var favoriteColorSnapshot = dataSnapshot.child('favorite_color');
	var favoriteColor = favoriteColorSnapshot.val();
	// favoriteColor will be null, because there is no 'favorite_color' child in dataSnapshot.
}

/*
 * DataSnapshot.forEach()
 */
(dataSnapshot:FirebaseDataSnapshot) => {
	// Given a DataSnapshot containing a child "fred" and a child "wilma", this callback
	// function will be called twice
	dataSnapshot.forEach(function (childSnapshot) {
		// key will be "fred" the first time and "wilma" the second time
		var key = childSnapshot.key();

		// childData will be the actual contents of the child
		var childData = childSnapshot.val();
	});
}
(dataSnapshot:FirebaseDataSnapshot) => {
	// Given a DataSnapshot containing a child "fred" and a child "wilma", this callback
	// funciton will only be called once (since we return true)
	dataSnapshot.forEach(function (childSnapshot) {
		var key = childSnapshot.key();  // key will be "fred"
		return true;
	});
}

/*
 * DataSnapshot.hasChild()
 */
(dataSnapshot: FirebaseDataSnapshot) => {
	// Given a DataSnapshot with child 'fred' and no other children:
	var x = dataSnapshot.hasChild('fred');
	var y = dataSnapshot.hasChild('whales');
	// x is true and y is false.
}

/*
 * DataSnapshot.hasChildren()
 */
(dataSnapshot: FirebaseDataSnapshot) => {
	// Given a DataSnapshot containing a child 'name' with children 'first'
	// (set to 'Fred') and 'last' (set to 'Flintstone'):
	var x = dataSnapshot.hasChildren();
	// x is true.
	var y = dataSnapshot.child('name').hasChildren();
	// y is true.
	var z = dataSnapshot.child('name/first').hasChildren();
	// z is false since 'Fred' is a string and therefore has no children.
}

/*
 * DataSnapshot.key()
 */
() => {
	// Calling key() on any DataSnapshot (except for one which represents the root of a Firebase) 
	// will return the key name of the location that generated it:
	var fredRef = new Firebase("https://samplechat.firebaseio-demo.com/users/fred");
	fredRef.on("value", function (fredSnapshot) {
		var key = fredSnapshot.key();  // key === "fred"
		key = fredSnapshot.child("name/last").key();  // key === "last"
	});
}
() => {
	// Calling key() on a DataSnapshot generated from a reference to the root of a Firebase return null:
	var rootRef = new Firebase("https://samplechat.firebaseio-demo.com");
	rootRef.on("value", function (rootSnapshot) {
		var key = rootSnapshot.key();  // key === null
	});
}

/*
 * DataSnapshot.name()
 */
() => {
	var fredRef = new Firebase("https://samplechat.firebaseio-demo.com/users/fred");
	fredRef.on("value", function (fredSnapshot) {
		var key = fredSnapshot.name();  // key === "fred"
		key = fredSnapshot.child("name/last").name();  // key === "last"
	});
}
() => {
	var rootRef = new Firebase("https://samplechat.firebaseio-demo.com");
	rootRef.on("value", function (rootSnapshot) {
		var key = rootSnapshot.name();  // key === null
	});
}

/*
 * DataSnapshot.numChildren()
 */
(dataSnapshot: FirebaseDataSnapshot) => {
	// Given a DataSnapshot containing a child 'name' with children 'first'
	// (set to 'Fred') and 'last' (set to 'Flintstone'):
	var x = dataSnapshot.numChildren();
	// x is 1.
	var y = dataSnapshot.child('name').numChildren();
	// y is 2.
	var z = dataSnapshot.child('name/first').numChildren();
	// z is 0 since 'Fred' is a string and therefore has no children.
}

/*
 * DataSnaphot.ref()
 */
() => {
	var fredRef = new Firebase('https://samplechat.firebaseio-demo.com/users/fred');
	fredRef.on('value', function (fredSnapshot) {
		var fredRef2 = fredSnapshot.ref();
		// fredRef and fredRef2 both point to the same location.
	});
}

/*
 * DataSnapshot.getPriority()
 */
(dataSnapshot: FirebaseDataSnapshot) => {
	// Given a snapshot for data with priority 1000:
	var x = dataSnapshot.getPriority();
	// x is now 1000.
}

/*
 * DataSnapshot.exportVal()
 */
(dataSnapshot: FirebaseDataSnapshot) => {
	firebaseRef.setWithPriority('hello', 500);
	firebaseRef.once('value', function (dataSnapshot) {
		var x = dataSnapshot.exportVal();
		// x now contains { '.value': 'hello', '.priority': 500 }
	});
}
(dataSnapshot: FirebaseDataSnapshot) => {
	firebaseRef.set('hello');
	firebaseRef.once('value', function (dataSnapshot) {
		var x = dataSnapshot.exportVal();
		// x now contains 'hello'
	});
}
(dataSnapshot: FirebaseDataSnapshot) => {
	// Note: To access these variables in JavaScript, you can use x['.value'] and x['.priority'].
	firebaseRef.setWithPriority({ a: 'hello', b: 'hi' }, 500);
	firebaseRef.once('value', function (dataSnapshot) {
		var x = dataSnapshot.exportVal();
		// x now contains { 'a': 'hello', 'b': 'hi', '.priority': 500 }
	});
}

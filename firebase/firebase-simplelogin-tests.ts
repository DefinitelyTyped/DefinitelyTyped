/// <reference path="./firebase-simplelogin.d.ts" />

var chatRef: Firebase = new Firebase('https://<YOUR-FIREBASE>.firebaseio.com');
var auth: FirebaseSimpleLogin = new FirebaseSimpleLogin(chatRef, function(error, user) {
    if (error) {
        // an error occurred while attempting login
        switch(error.code) {
            case 'INVALID_EMAIL':
            case 'INVALID_PASSWORD':
            default:
        }
    } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } else {
        // user is logged out
    }
});

var email = 'my@email.com';
var password = 'secret';
var oldPassword = 'secret';
var newPassword = 'secret';

auth.login('password', {
    email: '<email@domain.com>',
    password: '<password>',
    rememberMe: true
});

auth.login('facebook', {
    rememberMe: true,
    scope: 'email,user_likes'
});

auth.login('github', {
    rememberMe: true,
    scope: 'user,gist'
});

auth.login('google', {
    rememberMe: true,
    scope: 'https://www.googleapis.com/auth/plus.login'
});

auth.login('persona', {
    rememberMe: true
});

auth.login('twitter', {
    rememberMe: true
});

auth.login('anonymous');

auth.createUser(email, password, function(error, user) {
    if (!error) {
        console.log('User Id: ' + user.id + ', Email: ' + user.email);
    }
});

auth.createUser(email, password);

auth.changePassword(email, oldPassword, newPassword, function(error, success) {
    if (!error) {
        console.log('Password changed successfully');
    }
});

auth.changePassword(email, oldPassword, newPassword);

auth.sendPasswordResetEmail(email, function(error, success) {
    if (!error) {
        console.log('Password reset email sent successfully');
    }
});

auth.sendPasswordResetEmail(email);

auth.removeUser(email, password, function(error, success) {
    if (!error) {
        console.log('User deleted successfully');
    }
});

auth.removeUser(email, password);
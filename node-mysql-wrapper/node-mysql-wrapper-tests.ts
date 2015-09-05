/// <reference path="./node-mysql-wrapper.d.ts" />
var express = require('express');
var app = express();
var server = require('http').createServer(app);
import wrapper2 = require("node-mysql-wrapper");
var db = wrapper2.wrap("mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8");

class User { //or interface
    userId: number;
    username: string;
    mail: string;
    comments: Comment[];
}

interface Comment {
    commentId: number;
    content: string;

}

db.ready(() => {


    var usersDb = db.table<User>("users");
    usersDb.rules.orderBy("userId", true);
  

     usersDb.findAll().then(users=> {
             users.forEach(user=> {
                 console.log(user.userId);
             });
     });
    
  
    //define new table rules: usersDb.rules.clear().orderBy....limit....groupBy...
    
    //define rules but keep unchanged (table's rules) in find method:
    usersDb.find({ yearsOld: 22 }, (_users) => {
    
        console.log("-------------------------------------------------------");
        _users.forEach(_user=> {
            console.log(_user.userId + " " + _user.username + " found with limit 3 but this doesnt...");

        });

    }).limit(3).execute();
    
    usersDb.findById(16, (_user) => {

        console.log("TEST1: \n");
        console.log("FOUND USER WITH USERNAME: " + _user.username);
    });

    /* OR   usersDb.findById(18).then(_user=> {
         console.log("FOUND USER WITH USERNAME: " + _user.username);
     }, (err) => { console.log("ERROR ON FETCHING FINDBY ID: " + err) });
   */

    usersDb.find({ userId: 18, comments: { userId: '=' } }, _users=> {

        var _user = _users[0];

        console.log("TEST2: \n");
        console.log(_user.username + " with ");
        console.log(_user.comments.length + " comments ");
        _user.comments.forEach(_comment=> {
            console.log("--------------\n" + _comment.content);
        });

    }).execute();

    usersDb.safeRemove(5620, answer=> {
        console.log("TEST 3: \n");
        console.log(answer.affectedRows + ' (1) has removed from table:  ' + answer.table);

    });

    var auser = new User();
    auser.username = ' just a username';
    auser.mail = ' just an email';

    usersDb.save(auser, newUser=> {
        console.log("TEST 4: \n");
        console.log("NEW USER HAS CREATED WITH NEW USER ID: " + newUser.userId);

    });


});


var httpPort = 1193;//config.get('Server.port') || 1193;
server.listen(httpPort, function() {
    console.log("Server is running on " + httpPort);
});

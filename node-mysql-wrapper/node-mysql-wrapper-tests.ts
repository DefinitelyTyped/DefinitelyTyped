///<reference path='./node-mysql-wrapper.d.ts' />

import wrapper = require("node-mysql-wrapper");
var db = wrapper.wrap("mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8");


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

    });

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

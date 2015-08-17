///<reference path='./node-mysql-wrapper.d.ts' />

import wrapper = require("node-mysql-wrapper");
var db = wrapper("mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8");

db.ready(() => {

    db.table("users").on("insert", (parsedResults) => {

    });

    db.table("users").findAll().then((results) => {
        console.dir(results);
    });

    db.table("users").find({ userId: 18 }, (results) => {
        console.dir(results[0]);
    });



});

///<reference path='./node-mysql-wrapper.d.ts' />

var wrapper = require("node-mysql-wrapper");
var db = wrapper.wrap("mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8");

db.ready(() => {

    db.table("users").on("insert", (parsedResults:any[]) => {

    });

    db.table("users").findAll().then((results:any[]) => {
        console.dir(results);
    });

    db.table("users").find({ yearsOld: 22 }, (results:any[]) => {
        console.dir(results);
    });

    db.table("users").findById(18, (result:any) => {
        console.dir(result);
    });

});

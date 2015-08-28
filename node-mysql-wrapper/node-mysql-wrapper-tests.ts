///<reference path='./node-mysql-wrapper.d.ts' />

var wrapper = require("node-mysql-wrapper");
var db = wrapper.wrap("mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8");

db.ready(() => {

    db.table("users").on("insert", (parsedResults) => {

    });

    db.table("users").findAll().then((results) => {
        console.dir(results);
    });

    db.table("users").find({ yearsOld: 22 }, (results) => {
        console.dir(results);
    });

	 db.table("users").findById(18, (result) => {
        console.dir(result);
    });

});

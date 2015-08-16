///<reference path='./node-mysql-wrapper.d.ts' />
var wrapper = require("node-mysql-wrapper");
var db = wrapper("mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8");
db.ready(function () {
    db.table("users").on("insert", function (parsedResults) {
    });
    db.table("users").findAll().then(function (results) {
        console.dir(results);
    });
    db.table("users").find({ userId: 18 }, function (results) {
        console.dir(results[0]);
    });
});
//# sourceMappingURL=node-mysql-wrapper-tests.js.map

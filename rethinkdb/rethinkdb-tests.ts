/// <reference path="rethinkdb.d.ts" />

import r = require("rethinkdb")

r.connect({host:"localhost", port: 28015}, function(err, conn) {
    console.log("HI", err, conn)
    var testDb = r.db('test')
    testDb.tableCreate('users').run(conn, function(err, stuff) {
        var users = testDb.table('users')
        
        users.insert({name: "bob"}).run(conn, function() {})
        
        users.filter(function(doc?) {
            return doc("henry").eq("bob")
        })
        .between("james", "beth")
        .limit(4)
        .run(conn, function() {

        })


    })
})
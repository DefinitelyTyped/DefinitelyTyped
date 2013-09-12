/// <reference path="levelup.d.ts" />

import levelup = require("levelup");

var db = levelup('./mydb')
db.open();
db.close();
db.open((error)=> {

});

db.close((error)=> {

});


db.put("key", {});
db.put("key", {}, (error)=>{});
db.put("key", {}, { sync: true}, (error)=>{});

db.get("key", {keyEncoding: "json"}, (error, val) => {});
db.get("key", {fillCache: true}, (error, val) => {});
db.get("key", (error, val) => {});

db.del("key");
db.del("key", (error)=>{});
db.del("key", {keyEncoding: "json"}, (error)=>{});
db.del("key", {sync: true}, (error)=>{});

db.batch([{
    type          : 'put'
    , key           : ([1, 2, 3])
    , value         : { some: 'json' }
    , keyEncoding   : 'binary'
    , valueEncoding : 'json'
}], (error)=> {});


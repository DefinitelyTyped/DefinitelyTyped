import JsonDB = require('node-json-db');

// The second argument is used to tell the DB to save after each push 
// If you put false, you'll have to call the save() method. 
// The third argument is to ask JsonDB to save the database in an human readable format. (default false) 
let db = new JsonDB("myDataBase", true, false);
 
// Pushing the data into the database 
// With the wanted DataPath 
// By default the push will override the old value 
db.push("/test1", "super test");
 
// It also create automatically the hierarchy when pushing new data for a DataPath that doesn't exists 
db.push("/test2/my/test", 5);
 
// You can also push directly objects 
db.push("/test3", {
    test: "test", 
    json: {
        test: ["test"]
    }
});
 
// If you don't want to override the data but to merge them 
// The merge is recursive and work with Object and Array. 
db.push("/test3", {
    new: "cool", 
    json: {
        important: 5
    }
}, false);
/*
This give you this results :
{
   "test":"test",
   "json":{
      "test":[
         "test"
      ],
      "important":5
   },
   "new":"cool"
}
*/

// You can't merge primitive. 
// If you do this: 
db.push("/test2/my/test/", 10, false);
// the data will be overriden 
 
// Get the data from the root 
var data = db.getData("/");
 
//From a particular DataPath 
var data = db.getData("/test1");
 
// If you try to get some data from a DataPath that doesn't exists 
// You'll get an Error 
try {
    var data = db.getData("/test1/test/dont/work");
} catch(error) {
    // The error will tell you where the DataPath stopped. In this case test1 
    // Since /test1/test does't exist. 
    console.error(error);
}
 
// Deleting data 
db.delete("/test1");
 
// Save the data (useful if you disable the saveOnPush) 
db.save();
 
// In case you have a exterior change to the databse file and want to reload it 
// use this method 
db.reload();
import levelup = require("levelup");

interface BufferEncoding {
    encode(val: any): Buffer;
    decode(val: Buffer): any;
    buffer: boolean;
    type: string;
}

interface StringEncoding {
    encode(val: any): string;
    decode(val: string): any;
    buffer: boolean;
    type: string;
}

declare const bufferEncoding: BufferEncoding;
declare const stringEncoding: StringEncoding;

var db1 = levelup("db1", {
    keyEncoding: bufferEncoding,
    valueEncoding: bufferEncoding
});
var db2 = levelup("db2", {
    keyEncoding: stringEncoding,
    valueEncoding: stringEncoding
});

var db = levelup('./mydb')
db.open();
db.close();
db.open((error) => {

});

db.close((error) => {

});


db.put("key", {});
db.put("key", {}, (error) => { });
db.put("key", {}, { sync: true }, (error) => { });

db.get("key", { keyEncoding: "json" }, (error, val) => { });
db.get("key", { fillCache: true }, (error, val) => { });
db.get("key", (error, val) => { });

db.del("key");
db.del("key", (error) => { });
db.del("key", { keyEncoding: "json" }, (error) => { });
db.del("key", { sync: true }, (error) => { });

db.batch([{
    type: 'put'
    , key: ([1, 2, 3])
    , value: { some: 'json' }
    , keyEncoding: 'binary'
    , valueEncoding: 'json'
}], (error) => { });

db.batch()
    .del('father')
    .put('name', 'Yuri Irsenovich Kim')
    .put('dob', '16 February 1941')
    .put('spouse', 'Kim Young-sook')
    .put('occupation', 'Clown')
    .write(function () { console.log('Done!') })

var open: boolean = db.isOpen();
var closed: boolean = db.isClosed();
db.createReadStream()
    .on('data', function (data: any) {
        console.log(data.key, '=', data.value)
    })
    .on('error', function (err: any) {
        console.log('Oh my!', err)
    })
    .on('close', function () {
        console.log('Stream closed')
    })
    .on('end', function () {
        console.log('Stream closed')
    })

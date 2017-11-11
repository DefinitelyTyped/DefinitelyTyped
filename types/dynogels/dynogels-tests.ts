/// <reference path="index.d.ts" />
import * as dynogels from "dynogels";
import { DynamoDB } from "aws-sdk";
dynogels.AWS;

dynogels.log.info("test", "123", {});
dynogels.log.warn("test", "123", {});

var dynamoDb = new DynamoDB();
dynamoDb.getItem()
dynogels.dynamoDriver(dynamoDb);
dynogels.reset();
var model = dynogels.define("asdfas", {
    hashKey: "Asdf", schema: {

    }
});

let a = new model({ test: 12312 });


model.get("asdfas,", (err, test) => {

});

model.create({}, (err, data) => {
    var a = data.get("hello");
    a.asdfs = 1;
    data.set({ test: "12312" });
})

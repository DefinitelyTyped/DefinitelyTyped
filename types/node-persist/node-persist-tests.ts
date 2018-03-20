
// node-persist tests
// compile with --module=common

import nodePersist = require("node-persist");

var opts = Node
nodePersist.init({
    dir: __dirname + "/test",
    continuous: false
});
nodePersist.setItem("someArray", [1,2,3], (err)=> {
    nodePersist.getItem("someArray", (err: any, value: any)=> {
        nodePersist.removeItem("someArray", (err) => err);
    });
});
nodePersist.setItem("someString", "foo")
           .then(() => nodePersist.getItem("someString"))
           .then(() => nodePersist.removeItem("someString"))
           .then(() => nodePersist.clear())
           .then(() => null);

interface TestObject {
    foo: string;
    two: number;
}
nodePersist.clear((err) => {
    var testObject: TestObject = {foo: "bar", two: 2};
    nodePersist.setItemSync("someObject", testObject);
    testObject = nodePersist.getItemSync("someObject");
    nodePersist.removeItem("someObject");
    nodePersist.clearSync();
});

var values: Array<any> = nodePersist.values();
var valuesWithKeyMatch: Array<any> = nodePersist.valuesWithKeyMatch("some");
var keys: Array<string> = nodePersist.keys();
var size: number = nodePersist.length();
nodePersist.forEach((val) => {});
try {
    nodePersist.persist((err) => err);
    nodePersist.persist().then(() => null);
    nodePersist.persistSync;
    nodePersist.persistKey("this", (err) => null);
    nodePersist.persistKey("this").then(() => null);
    nodePersist.persistKeySync("this");
} catch(anyError){}

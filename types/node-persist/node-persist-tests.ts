// node-persist tests
// compile with --module=common

import nodePersist = require("node-persist");

(async test => {
    // Test with the global instance
    await test(nodePersist);

    // Test with a local instance
    const storage = nodePersist.create();
    await test(storage);
})(async (storage: nodePersist.LocalStorage) => {
    await storage.init({
        dir: __dirname + "/test"
    });

    await storage.setItem("someArray", [1, 2, 3]);
    const value = await storage.getItem("someArray");
    await storage.removeItem("someArray");

    await storage.setItem("someString", "foo").then(() => {
        return storage.getItem("someString");
    }).then(() => {
        return storage.removeItem("someString");
    });

    interface TestObject {
        foo: string;
        two: number;
    }

    await storage.clear();
    let testObject: TestObject = {foo: "bar", two: 2};
    await storage.setItem("someObject", testObject);
    testObject = await storage.getItem("someObject");
    await storage.removeItem("someObject");

    const values: any[] = await storage.values();
    const valuesWithKeyMatch: any[] = await storage.valuesWithKeyMatch("some");
    const keys: string[] = await storage.keys();
    const size: number = await storage.length();

    await storage.forEach((val) => {});

    await storage.clear();
});

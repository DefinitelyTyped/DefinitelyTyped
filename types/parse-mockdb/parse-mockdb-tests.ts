import * as ParseMockDB from "parse-mockdb";

ParseMockDB.mockDB(); // Mock the Parse RESTController

// from parse-mockdb test suite
ParseMockDB.registerHook("Foo", "beforeSave", (request) => {
    const object = request.object;
    if (object.get('error')) {
        return Parse.Promise.error('whoah');
    }
    object.set('cool', true);
    return Parse.Promise.as(object);
});

// from parse-mockdb test suite
ParseMockDB.registerHook("Foo", "beforeDelete", (request) => {
    const object = request.object;
    if (object.get('error')) {
        return Parse.Promise.error('whoah');
    }
    return Parse.Promise.as({});
});

ParseMockDB.cleanUp(); // Clear the Database
ParseMockDB.unMockDB(); // Un-mock the Parse RESTController

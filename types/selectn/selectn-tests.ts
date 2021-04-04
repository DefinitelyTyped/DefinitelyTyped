import selectn = require("selectn");

const TEST_OBJECT = {
    a: "test",
    b: {
        c: "test",
    },
};

// Call selectn on object parameter
selectn("a", TEST_OBJECT); // $ExpectType any
selectn(["b", "c"], TEST_OBJECT); // $ExpectType any

selectn("d", TEST_OBJECT); // $ExpectType any
selectn("a", undefined); // $ExpectType any
selectn("a", null); // $ExpectType any

// Call selectn partially applied overload
const getPropertyA = selectn("a"); // $ExpectType (object: any) => any
getPropertyA(TEST_OBJECT); // $ExpectType any

const getPropertyCD = selectn(["b", "c"]); // $ExpectType (object: any) => any
getPropertyCD(TEST_OBJECT); // $ExpectType any

const getPropertyThatDoesntExist = selectn("d"); // $ExpectType (object: any) => any
getPropertyThatDoesntExist(TEST_OBJECT); // $ExpectType any
getPropertyThatDoesntExist(undefined); // $ExpectType any
getPropertyThatDoesntExist(null); // $ExpectType any

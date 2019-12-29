import getFuncName = require('get-func-name');

const unknownFunction = function myCoolFunction(word: string) {
    return word + 'is cool';
};

const anonymousFunction = (() => {
    return () => {};
})();

getFuncName(unknownFunction); // $ExpectType string
getFuncName(anonymousFunction); // $ExpectType string

import ud = require("urban-dictionary");

// Callback
ud.autocomplete("test", (error, results) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }
    results; // $ExpectType string[]
});

// Promise
ud.autocomplete("test")
    .then(results => {
        results; // $ExpectType string[]
    })
    .catch(error => {
        error; // $ExpectType any
    });

// Callback
ud.autocompleteExtra("test", (error, results) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }

    results; // $ExpectType AutocompleteExtraObject[]
});

// Promise
ud.autocompleteExtra("test")
    .then(results => {
        results; // $ExpectType AutocompleteExtraObject[]
    })
    .catch(error => {
        error; // $ExpectType any
    });

// Callback
ud.getDefinitionByDefid(217456, (error, result) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }

    result; // $ExpectType DefinitionObject
});

// Promise
ud.getDefinitionByDefid(217456)
    .then(result => {
        result; // $ExpectType DefinitionObject
    })
    .catch(error => {
        error; // $ExpectType any
    });

// Callback
ud.random((error, results) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }
    results; // $ExpectType DefinitionObject[]
});

// Promise
ud.random()
    .then(results => {
        results; // $ExpectType DefinitionObject[]
    })
    .catch(error => {
        error; // $ExpectType any
    });

// Callback
ud.wordsOfTheDay((error, results) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }
    results; // $ExpectType DefinitionObject[]
});

// Promise
ud.wordsOfTheDay()
    .then(results => {
        results; // $ExpectType DefinitionObject[]
    })
    .catch(error => {
        error; // $ExpectType any
    });

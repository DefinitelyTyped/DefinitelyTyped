
import Confidence = require('confidence');

let criteria = {
    "env": "production",
    "platform": "ios",
    "xfactor": "yes",
    "random": {
        "a": 15
    }
};

/**
* The configurations in Confidence style
*/
let config = {
    "key1": "abc",
    "key2": {
        "$filter": "env",
        "production": {
            "deeper": {
                "$value": "value"
            }
        },
        "$default": {
            "$filter": "platform",
            "android": 0,
            "ios": 1,
            "$default": 2
        }
    },
    "key3": {
        "sub1": 123,
        "sub2": {
            "$filter": "xfactor",
            "yes": 6
        }
    },
    "ab": {
        "$filter": "random.a",
        "$range": [
            { "limit": 10, "value": 4 },
            { "limit": 20, "value": 5 }
        ],
        "$default": 6
    },
    "$meta": {
        "description": "example file"
    }
};


/**
* Creates an empty configuration storage container
*/
let store = new Confidence.Store(config);


/**
* Validates the provided configuration, clears any existing configuration, then loads the configuration
*/
store.load(config);


/**
* Retrieves a value from the configuration document after applying the provided criteria
*/
store.get('/key1');
//criteria - optional object
store.get('/key2', criteria);


/**
* Retrieves the metadata (if any) from the configuration document after applying the provided criteria
*/
store.meta('/key1');
//criteria - optional object
store.meta('/key2', criteria);

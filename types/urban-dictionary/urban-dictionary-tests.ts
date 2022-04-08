import methods = require("urban-dictionary");

methods.defid(10085618); // $ExpectType Promise<WordDefinition>

methods.random(); // $ExpectType Promise<WordDefinition>

methods.term("nodejs"); // $ExpectType Promise<{ entries: WordDefinition[]; tags: string[]; sounds: string[]; }>

methods.random((error, object) => {
    object; // $ExpectType WordDefinition
});

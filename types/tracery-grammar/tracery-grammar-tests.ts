import tracery = require("tracery-grammar");

const grammar = tracery.createGrammar({
    animal: ["panda", "fox", "capybara", "iguana"],
    emotion: ["sad", "happy", "angry", "jealous"],
    origin: ["I am #emotion.a# #animal#."],
});

grammar.addModifiers(tracery.baseEngModifiers);
grammar.addModifiers({
    custom: s => s,
});

grammar.flatten("#origin#"); // $ExpectType string

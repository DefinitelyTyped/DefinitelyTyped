$(document).on(":passageinit", event => {
    event.passage; // $ExpectType Passage
});

$(document).on(":passagestart", event => {
    event.passage; // $ExpectType Passage
    event.content; // $ExpectType HTMLElement
});

$(document).on(":passagerender", event => {
    event.passage; // $ExpectType Passage
    event.content; // $ExpectType HTMLElement
});

$(document).one(":passagedisplay", event => {
    event.passage; // $ExpectType Passage
    event.content; // $ExpectType HTMLElement
});

$(document).one(":passageend", event => {
    event.passage; // $ExpectType Passage
    event.content; // $ExpectType HTMLElement
});

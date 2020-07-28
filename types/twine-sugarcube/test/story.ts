let b = false;
let s: string;

function testPassage(p: TwineSugarCube.Passage): boolean {
    p.description(); // $ExpectType string
    p.domId; // $ExpectType string
    p.processText(); // $ExpectType string
    p.tags; // $ExpectType string[]
    p.text; // $ExpectType string
    p.title; // $ExpectType string

    return p.tags.indexOf(p.processText()) > 0;
}

s = Story.domId;
// @ts-expect-error
Story.domId = s;

testPassage(Story.get("passageName"));
b = Story.has("passage");

Story.lookup("tags", "forest").forEach(p => {testPassage(p); });
Story.lookup("tags", 123).forEach(p => { testPassage(p); });
Story.lookup("tags", "forest", "string").forEach(p => { testPassage(p); });

Story.lookupWith(testPassage);

s = Story.title;
// @ts-expect-error
Story.title = s;

export {};

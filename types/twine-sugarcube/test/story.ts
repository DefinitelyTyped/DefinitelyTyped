let b = false;
let s: string;

function testPassageBase(p: TwineSugarCube.PassageBase): boolean {
    p.tags; // $ExpectType string[]
    p.text; // $ExpectType string
    p.name; // $ExpectType string

    return p.tags.indexOf("") > 0;
}

function testPassage(p: TwineSugarCube.Passage): boolean {
    p.id; // $ExpectType string
    p.processText(); // $ExpectType string

    return testPassageBase(p);
}

function testPassageWithThis(this: DocumentFragment, p: TwineSugarCube.Passage): boolean {
    p.id; // $ExpectType string
    p.processText(); // $ExpectType string

    return testPassageBase(p);
}

s = Story.id;
// @ts-expect-error
Story.id = s;

s = Story.ifId;
// @ts-expect-error
Story.ifId = s;

testPassage(Story.get("passageName"));
b = Story.has("passage");

Story.filter(testPassage).forEach(p => {
    testPassage(p);
});
Story.filter(testPassageWithThis, new DocumentFragment()).forEach(p => {
    testPassage(p);
});

let p: TwineSugarCube.Passage | undefined = Story.find(testPassage);

p = Story.find(testPassageWithThis, new DocumentFragment());

s = Story.name;
// @ts-expect-error
Story.name = s;

export {};

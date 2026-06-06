/// <reference types="markup-js" />

Mark.compact = true;
Mark.delimiter = ".";
Mark.globals = {
    room: true,
};
Mark.includes = {
    emoji: ":coffee:",
    heated: () => "202",
};

const template = `
Coffee: {{emoji}}
Status: {{status}}
Heated: {{heated}}
Room: {{room}}
`;

const context = {
    status: "buzzing",
};

Mark.up(template, context); // $ExpectType string

Mark.pipes.empty([]); // $ExpectType false | never[]
Mark.pipes.empty(12); // $ExpectType false | 12
Mark.pipes.notempty([]); // $ExpectType false | never[]
Mark.pipes.notempty(12); // $ExpectType false | 12
Mark.pipes.more(-1, 0); // $ExpectType false | -1
Mark.pipes.more(["example"], 1); // $ExpectType false | string[]
Mark.pipes.less(-1, 0); // $ExpectType false | -1
Mark.pipes.less(["example"], 1); // $ExpectType false | string[]
Mark.pipes.ormore(-1, 0); // $ExpectType false | -1
Mark.pipes.ormore(["example"], 1); // $ExpectType false | string[]
Mark.pipes.orless(-1, 0); // $ExpectType false | -1
Mark.pipes.orless(["example"], 1); // $ExpectType false | string[]
Mark.pipes.between(50, 0, 100); // $ExpectType false | 50
Mark.pipes.between(["example"], 0, 1); // $ExpectType false | string[]
Mark.pipes.equals(12, 3 * 4); // $ExpectType false | 12
Mark.pipes.equals(["example"], ["example"]); // $ExpectType false | string[]
Mark.pipes.notequals(12, 3 * 4); // $ExpectType false | 12
Mark.pipes.notequals(["example"], ["example"]); // $ExpectType false | string[]
Mark.pipes.like("example", /^exam/); // $ExpectType false | string
Mark.pipes.like("example", "test"); // $ExpectType false | string
Mark.pipes.notlike("example", "exam"); // $ExpectType false | string
Mark.pipes.notlike("example", "test"); // $ExpectType false | string
Mark.pipes.blank(12, "twelve"); // $ExpectType string | 12
Mark.pipes.blank("", "nothing"); // $ExpectType string
Mark.pipes.upcase("example"); // $ExpectType string
Mark.pipes.downcase("TEST"); // $ExpectType string
Mark.pipes.capcase("showcase"); // $ExpectType string
Mark.pipes.chop("showcase", 4); // $ExpectType string
Mark.pipes.tease("a test run", 2); // $ExpectType string
Mark.pipes.trim(" spaces "); // $ExpectType string
Mark.pipes.pack(" spaces  tab "); // $ExpectType string
Mark.pipes.round(1.23); // $ExpectType number
Mark.pipes.clean("<p>greetings</p>"); // $ExpectType string
Mark.pipes.length("count"); // $ExpectType number
Mark.pipes.length([1, 2, 3]); // $ExpectType number
Mark.pipes.size("count"); // $ExpectType number
Mark.pipes.size([1, 2, 3]); // $ExpectType number
Mark.pipes.reverse([1, 2, 3]); // $ExpectType number[]
Mark.pipes.reverse(["a", "b"]); // $ExpectType string[]
Mark.pipes.join(["a", "b"]); // $ExpectType string
Mark.pipes.join([192, 168, 0, 1], "."); // $ExpectType string
Mark.pipes.limit(["a", "b"], 1); // $ExpectType string[]
Mark.pipes.limit([192, 168, 0, 1], 2, 2); // $ExpectType number[]
Mark.pipes.split("a,b"); // $ExpectType string[]
Mark.pipes.split("192.168.0.1", "."); // $ExpectType string[]
Mark.pipes.choose(true, "yes"); // $ExpectType string
Mark.pipes.choose(false, "yes", "no"); // $ExpectType string
Mark.pipes.toggle(0, "0,1", "T,F"); // $ExpectType string
Mark.pipes.toggle("2", "0,1", "T,F", "N/A"); // $ExpectType string
Mark.pipes.sort(["a", "b"]); // $ExpectType string[]
Mark.pipes.sort([{ "n": 0 }, { "n": 1 }], "n"); // $ExpectType { n: number; }[]
Mark.pipes.fix(1, 2); // $ExpectType string
Mark.pipes.mod(4, 2); // $ExpectType number
Mark.pipes.divisible(4, 2); // $ExpectType false | number
Mark.pipes.divisible(4, 3); // $ExpectType false | number
Mark.pipes.even(2); // $ExpectType false | number
Mark.pipes.even(1); // $ExpectType false | number
Mark.pipes.odd(0); // $ExpectType false | number
Mark.pipes.odd(-1); // $ExpectType false | number
Mark.pipes.number("3.14"); // $ExpectType number
Mark.pipes.url("https://example.com/"); // $ExpectType string
Mark.pipes.bool("ok"); // $ExpectType boolean
Mark.pipes.bool(200); // $ExpectType boolean
Mark.pipes.falsy([]); // $ExpectType boolean
Mark.pipes.falsy(0); // $ExpectType boolean
Mark.pipes.first(1); // $ExpectType boolean
Mark.pipes.last(10); // $ExpectType boolean
Mark.pipes.call({ now: (): number => 0 }, "now"); // $ExpectType any
Mark.pipes.call({ ok: (_status: number): void => {} }, "ok", 200); // $ExpectType any
Mark.pipes.set(4, "count"); // $ExpectType ""
Mark.pipes.set({ points: 96 }, "score"); // $ExpectType ""
Mark.pipes.log([1, 2, 3]); // $ExpectType number[]
Mark.pipes.log("example"); // $ExpectType "example"
Mark.pipes.custom("todo", "a", "b"); // $ExpectType any

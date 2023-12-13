let script = "[#name=[Jane | Bill]] was from [#place=[New York | Berlin]]."
    + " $name finds $place cold and wet in winter.";

let rs = new RiScript(); // $ExpectType RiScript
rs.addTransform("name", () => "hello"); // $ExpectType RiScript
rs.removeTransform("name"); // $ExpectType RiScript
rs.getTransforms(); // $ExpectType string[]
rs.evaluate(script); // $ExpectType string

new RiScript({ compatibility: 2 }); // $ExpectType RiScript

RiScript.evaluate(script); // $ExpectType string
RiScript.evaluate(script, {}); // $ExpectType string
RiScript.evaluate(script, {}, {}); // $ExpectType string

RiScript.VERSION; // $ExpectType string

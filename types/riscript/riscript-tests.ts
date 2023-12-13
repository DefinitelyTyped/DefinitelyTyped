/// <reference types="node" />

let script = "[#name=[Jane | Bill]] was from [#place=[New York | Berlin]]."
  + " $name finds $place cold and wet in winter.";

let rs = new RiScript(); // $ExpectType RiScript
rs.evaluate(script); // $ExpectType string

new RiScript({ compatibility: 2 }); // $ExpectType RiScript

RiScript.evaluate(script); // $ExpectType string


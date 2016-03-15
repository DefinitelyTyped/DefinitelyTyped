/// <reference path="uri-templates.d.ts" />

var template1 = new UriTemplate("/prefix/{?params*}");;
var template2 = new UriTemplate("/prefix/{?params*}");

// Substitution using an object
// "/categories/green/round/"
var uri1 = template1.fillFromObject({colour: "green", shape: "round"});
// "/prefix/?a=A&b=B&c=C
var uri2 = template2.fillFromObject({
    params: {a: "A", b: "B", c: "C"}
});

// Substitution using a callback
// "/categories/example_colour/example_shape/"
var uri1b = template1.fill(function (varName) {
    return "example_" + varName;
});

// Guess variables from URI ("de-substitution")
var url2b = "/prefix/?beep=boop&bleep=bloop";
var params = template2.fromUri(url2b);

// Extended test cases
var template = new UriTemplate("{/id*}{?fields,token}");
var values = template.fromUri("/person/albums?fields=id,name,picture&token=12345");

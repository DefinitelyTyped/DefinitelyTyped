/// <reference path="maquette.d.ts" />


// The hello world example from the homepage of maquettejs.org:


var h = maquette.h;
var domNode = document.body;
var projector = maquette.createProjector();

var you = ""; // A piece of data

// An ordinary event handler
function handleNameInput(evt: MouseEvent) {
    you = (<HTMLInputElement>evt.target).value;
}

// This function uses the 'hyperscript' notation to create the virtual DOM. 
// The 'you' variable is used twice here
function renderMaquette() {
    return h("div", [
        h("input", {
            type: "text", placeholder: "What is your name?", value: you, oninput: handleNameInput
        }),
        h("p.output", ["Hello " + (you || "you") + "!"])
    ]);
}

// Project the renderMaquette function to the DOM and update the DOM when needed
projector.append(domNode, renderMaquette);



// Some snapshots taken from  the maquette unit tests


// createDOM

var projection = maquette.dom.create(h("div", ["text"]));
projection.update(h("div", ["text2", h("span", ["a"])]));

// cache

var cache = maquette.createCache();
var calculationCalled = false;
var calculate = function () {
  calculationCalled = true;
  return "calculation result";
};
var result = cache.result([1], calculate);

// h

h("div",{onclick: (ev:MouseEvent) => true})

var vnode = h("div", [
  "text",
  null,
  [ /* empty nested array */],
  [null],
  ["nested text"],
  [h("span")],
  [h("button", ["click me"])],
  [[[["deep"], null], "here"]]
]);

// mapping

interface Target {
  source: number;
  updateCount: number;
  alreadyPresent: boolean;
}

var createTarget = function(source:number): Target {
  return {
    source: source,
    updateCount: 0,
    alreadyPresent: false
  };
};

var updateTarget = function(source: number, target:Target) {
  target.updateCount++;
};

var permutations = [[1,2], [2,1]];
for (var i=0;i<permutations.length;i++) {
  for (var j=0;j<permutations.length;j++) {
    var mapping = maquette.createMapping(function(source){return source;}, createTarget, updateTarget);
    mapping.map(permutations[i]);
    mapping.results.forEach(function(target) {target.alreadyPresent = true;});
    mapping.map(permutations[j]);
  }
}

// styles

var projection = maquette.dom.create(h("div", { styles: { height: "20px" } }));
projection.update(h("div", { styles: { height: null } }));

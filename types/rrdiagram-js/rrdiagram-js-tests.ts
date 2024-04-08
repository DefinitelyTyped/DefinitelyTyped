import * as RRDiagram from "rrdiagram-js";

const bnfDisplay = new RRDiagram.bnfdisplay.BNFDisplay();
bnfDisplay.replaceBNF("oldClassName", "newClassName"); // $ExpectType void

const rrElement = new RRDiagram.model.Literal("a").toRRElement(bnfDisplay.getGrammarToRRDiagram()); // $ExpectType RRElement
var rrDiagram = new RRDiagram.ui.RRDiagram(rrElement); // $ExpectType RRDiagram
var rrDiagramToSVG = new RRDiagram.ui.RRDiagramToSVG(); // $ExpectType RRDiagramToSVG
var svg = rrDiagramToSVG.convert(rrDiagram); // $ExpectType string

var grammar = new RRDiagram.model.Grammar([]); // $ExpectType Grammar
var grammarToRRDiagram = new RRDiagram.model.GrammarToRRDiagram(); // $ExpectType GrammarToRRDiagram
var rules = grammar.getRules(); // $ExpectType Rule[]
for (var i = 0; i < rules.length; i++) {
    var rrDiagram = grammarToRRDiagram.convert(rules[i]); // $ExpectType RRDiagram
    // Do something with diagram, like get the SVG.
}

var bnfToGrammar = new RRDiagram.model.BNFToGrammar(); // $ExpectType BNFToGrammar
var grammar = bnfToGrammar.convert("text"); // $ExpectType Grammar
// Do something with grammar, like get the diagram for SVG output.

var grammarToBNF = new RRDiagram.model.GrammarToBNF(); // $ExpectType GrammarToBNF
// Set options on the grammarToBNF object
var bnf = grammarToBNF.convert(grammar); // $ExpectType string

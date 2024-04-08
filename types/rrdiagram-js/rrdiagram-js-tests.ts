import * as RRDiagram from 'rrdiagram-js';

// Test BNFDisplay class
const bnfDisplay = new RRDiagram.bnfdisplay.BNFDisplay();
const bnfToGrammar = bnfDisplay.getBNFToGrammar(); // $ExpectType BNFToGrammar
const grammarToRRDiagram = bnfDisplay.getGrammarToRRDiagram(); // $ExpectType GrammarToRRDiagram
const rrDiagramToSVG = bnfDisplay.getRRDiagramToSVG(); // $ExpectType RRDiagramToSVG
bnfDisplay.replaceBNF('oldClassName', 'newClassName'); // $ExpectType void

// Test BNFToGrammar class
const grammar = bnfToGrammar.convert('text'); // $ExpectType Grammar

// Test Choice class
const choice = new RRDiagram.model.Choice(new RRDiagram.model.Expression()); // $ExpectType Choice
const expressions = choice.getExpressions(); // $ExpectType Expression[]
expressions[0]; // $ExpectType Expression

// Test Grammar class
const grammarInstance = new RRDiagram.model.Grammar({}); // $ExpectType Grammar
const rules = grammarInstance.rules; // $ExpectType any
rules[0]; // $ExpectType any

// Test GrammarToBNF class
const grammarToBNF = new RRDiagram.model.GrammarToBNF(); // $ExpectType GrammarToBNF
const bnf = grammarToBNF.convert(grammarInstance); // $ExpectType string

// Test GrammarToRRDiagram class
const rrDiagram = grammarToRRDiagram.convert(grammarInstance); // $ExpectType RRDiagram

// Test Literal class
const literal = new RRDiagram.model.Literal('text'); // $ExpectType Literal

// Test Repetition class
const repetition = new RRDiagram.model.Repetition(new RRDiagram.model.Expression()); // $ExpectType Repetition
const expressionRepetition = repetition.expression; // $ExpectType Expression

// Test Rule class
const rule = new RRDiagram.model.Rule('name', new RRDiagram.model.Expression()); // $ExpectType Rule
const name = rule.name; // $ExpectType string
const expression = rule.expression; // $ExpectType Expression

// Test RuleReference class
const ruleReference = new RRDiagram.model.RuleReference('name'); // $ExpectType RuleReference
const nameRuleReference = ruleReference.name; // $ExpectType string

// Test Sequence class
const sequence = new RRDiagram.model.Sequence(new RRDiagram.model.Expression()); // $ExpectType Sequence
const expressionsSequence = sequence.getExpressions(); // $ExpectType Expression[]
expressionsSequence[0]; // $ExpectType Expression

// Test SpecialSequence class
const specialSequence = new RRDiagram.model.SpecialSequence('text'); // $ExpectType SpecialSequence

// Test RRBreak class
const rrBreak = new RRDiagram.model.RRBreak(); // $ExpectType RRBreak

// Test RRChoice class
const rrChoice = new RRDiagram.model.RRChoice(); // $ExpectType RRChoice

// Test RRDiagram class
const rrDiagramInstance = new RRDiagram.model.RRDiagram(new RRDiagram.model.Expression()); // $ExpectType RRDiagram
const expressionRRDiagram = rrDiagramInstance.expression; // $ExpectType Expression

// Test RRDiagramToSVG class
const svg = rrDiagramToSVG.convert(rrDiagramInstance); // $ExpectType string

// Test RRLine class
const rrLine = new RRDiagram.model.RRLine(); // $ExpectType RRLine

// Test RRLoop class
const rrLoop = new RRDiagram.model.RRLoop(); // $ExpectType RRLoop

// Test RRSequence class
const rrSequence = new RRDiagram.model.RRSequence(); // $ExpectType RRSequence

// Test RRText class
const rrText = new RRDiagram.model.RRText('text'); // $ExpectType RRText
const text = rrText.text; // $ExpectType string

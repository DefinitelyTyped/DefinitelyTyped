const a: any = null;
let b = false;
let s = "string";

Wikifier.createExternalLink(s, s, s);
Wikifier.createInternalLink(s, s, s, () => {});
Wikifier.evalExpression(s); // $ExpectType any
Wikifier.evalStatements(s); // $ExpectType any
Wikifier.getValue(s); // $ExpectType any
b = Wikifier.isExternalLink(s);
Wikifier.parse(s); // $ExpectType any
b = Wikifier.setValue(s, a);
s = Wikifier.wikifyEval(s);

export {};

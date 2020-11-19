const a: any = null;
let b = false;
let s = "string";

const output: DocumentFragment | HTMLElement | JQuery = new DocumentFragment();

Wikifier.createExternalLink(output, s, s);
Wikifier.createInternalLink(output, s, s, () => {});
s = Wikifier.wikifyEval(s);
b = Wikifier.isExternalLink(s);

new Wikifier(output, s);
new Wikifier(null, s, {profile: s, ignoreTerminatorCase: b});

export {};

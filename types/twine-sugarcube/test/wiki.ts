const a: any = null;
let b = false;
const s = "string";
let df: DocumentFragment;
let anchor: HTMLAnchorElement;

const output: DocumentFragment | HTMLElement | JQuery = new DocumentFragment();

anchor = Wikifier.createExternalLink(output, s, s);
anchor = Wikifier.createInternalLink(output, s, s, () => {});
df = Wikifier.wikifyEval(s);
b = Wikifier.isExternalLink(s);

new Wikifier(output, s);
new Wikifier(null, s, {profile: s, ignoreTerminatorCase: b});

export {};

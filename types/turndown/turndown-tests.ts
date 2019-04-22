import TurndownService = require('turndown');

const replacementFunction: TurndownService.ReplacementFunction =
    (content: string, node: TurndownService.Node, options: TurndownService.Options) => content;

const options: TurndownService.Options = {
    headingStyle: "setext",
    hr: '',
    br: '',
    bulletListMarker: "-",
    codeBlockStyle: "indented",
    emDelimiter: "_",
    fence: "```",
    strongDelimiter: "__",
    linkStyle: "inlined",
    linkReferenceStyle: "full",

    keepReplacement: replacementFunction,
    blankReplacement: replacementFunction,
    defaultReplacement: replacementFunction,
};

const turndownService = new TurndownService(options);

const rule: TurndownService.Rule = {
    filter: ['em'],
    replacement: replacementFunction,
};

const filter: TurndownService.Filter = (node: HTMLElement, options: TurndownService.Options) => true;

turndownService.addRule('em', rule);
turndownService.keep(filter);
turndownService.remove(filter);

const plugin: TurndownService.Plugin = (turndownService: TurndownService) => {};
turndownService.use(plugin);

const escpedString = turndownService.escape('');
const markdownTitle = turndownService.turndown('<h1>Title</h1>');

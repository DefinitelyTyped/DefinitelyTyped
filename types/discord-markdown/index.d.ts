// Type definitions for discord-markdown 2.4
// Project: https://github.com/brussell98/discord-markdown#readme
// Definitions by: cherryblossom <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

import type * as md from 'simple-markdown';

export interface BaseNode {
    type: string;
}

export interface NodeWithChildren extends BaseNode {
    content: ASTNode[];
}

// This stuff should proabbly go in simpke-markdown...
export interface BreakNode extends BaseNode {
    type: 'br';
}

export interface TextNode extends BaseNode {
    type: 'text';
    content: string;
}

export interface CodeBlockNode extends BaseNode {
    type: 'codeBlock';
    lang: string;
    content: string;
    inQuote: boolean;
}

export interface InlineCodeNode extends BaseNode {
    type: 'inlineCode';
    content: string;
}

export interface AutolinkNode extends BaseNode {
    type: 'autolink';
    content: [TextNode];
    target: string;
}

export interface URLNode extends BaseNode {
    type: 'url';
    content: [TextNode];
    target: string;
}

export interface BlockQuoteNode extends NodeWithChildren {
    type: 'blockQuote';
}

export interface EmphasisNode extends NodeWithChildren {
    type: 'em';
}

export interface SpoilerNode extends NodeWithChildren {
    type: 'spoiler';
}

export interface StrikeNode extends NodeWithChildren {
    type: 'strike';
}

export interface StrongNode extends NodeWithChildren {
    type: 'strong';
}

export interface UnderlineNode extends NodeWithChildren {
    type: 'u';
}

export interface DiscordEveryoneNode extends BaseNode {
    type: 'discordEveryone';
}

export interface DiscordHereNode extends BaseNode {
    type: 'discordHere';
}

export interface NodeWithID extends BaseNode {
    id: string;
}

export interface DiscordChannelNode extends NodeWithID {
    type: 'discordChannel';
}

export interface DiscordRoleNode extends NodeWithID {
    type: 'discordRole';
}

export interface DiscordUserNode extends NodeWithID {
    type: 'discordUser';
}

export interface DiscordEmojiNode extends NodeWithID {
    type: 'discordEmoji';
    animated: boolean;
    name: string;
}

export type DiscordASTNode =
    | DiscordChannelNode
    | DiscordEmojiNode
    | DiscordEveryoneNode
    | DiscordHereNode
    | DiscordRoleNode
    | DiscordUserNode;

export type StandardASTNode =
    | AutolinkNode
    | BlockQuoteNode
    | BreakNode
    | CodeBlockNode
    | EmphasisNode
    | InlineCodeNode
    | SpoilerNode
    | StrikeNode
    | StrongNode
    | TextNode
    | UnderlineNode
    | URLNode;

export type ASTNode = DiscordASTNode | StandardASTNode;

export interface DiscordCallback {
    user?: (node: DiscordUserNode) => string;
    channel?: (node: DiscordChannelNode) => string;
    role?: (node: DiscordRoleNode) => string;
    everyone?: (node: DiscordEveryoneNode) => string;
    here?: (node: DiscordHereNode) => string;
}

export interface HTMLTagState {
    /**
     * An object mapping css classes to css module classes
     * @default null
     */
    cssModuleNames?: Record<string, string> | null;
}

export interface ToHTMLOptions extends HTMLTagState {
    /**
     * Parse as embed content
     * @default false
     */
    embed?: boolean;

    /**
     * Escape HTML in the output
     * @default true
     */
    escapeHTML?: boolean;

    /**
     * Only parse Discord-specific stuff (such as mentions)
     * @default false
     */
    discordOnly?: boolean;

    /** Provide custom handling for mentions and emojis */
    discordCallback?: DiscordCallback;
}

export type Rule<R extends md.ParserRule, N extends md.SingleASTNode> = Omit<R, 'parse'> & {
    parse: (...args: Parameters<R['parse']>) => Omit<N, 'type'>;
};

export type DiscordMarkdownRule = md.NonNullHtmlOutputRule & md.ParserRule;

export interface DiscordRules {
    discordUser: Rule<DiscordMarkdownRule, DiscordUserNode>;
    discordChannel: Rule<DiscordMarkdownRule, DiscordChannelNode>;
    discordRole: Rule<DiscordMarkdownRule, DiscordRoleNode>;
    discordEmoji: Rule<DiscordMarkdownRule, DiscordEmojiNode>;
    discordEveryone: Rule<DiscordMarkdownRule, DiscordEveryoneNode>;
    discordHere: Rule<DiscordMarkdownRule, DiscordHereNode>;
    text: Rule<md.DefaultRules['text'], TextNode>;
}

export interface Rules extends DiscordRules {
    blockQuote: Rule<md.DefaultRules['blockQuote'], BlockQuoteNode>;
    codeBlock: Rule<md.DefaultRules['codeBlock'], CodeBlockNode>;
    newline: md.DefaultRules['newline'];
    escape: md.DefaultRules['escape'];
    autolink: Rule<md.DefaultRules['autolink'], AutolinkNode>;
    url: Rule<md.DefaultRules['url'], URLNode>;
    em: Rule<md.DefaultRules['em'], EmphasisNode>;
    strong: Rule<md.DefaultRules['strong'], StrongNode>;
    u: Rule<md.DefaultRules['u'], UnderlineNode>;
    strike: Rule<md.DefaultRules['del'], StrikeNode>;
    inlineCode: Rule<md.DefaultRules['inlineCode'], InlineCodeNode>;
    emoticon: Rule<DiscordMarkdownRule, TextNode>;
    br: Rule<md.DefaultRules['br'], BreakNode>;
    spoiler: Rule<DiscordMarkdownRule, SpoilerNode>;
}

// This is NOT part of ASTNode because embed rules aren't included in the rules
// for parser
export interface LinkNode extends NodeWithChildren {
    type: 'link';
    target: string;
    title?: string;
}

export interface EmbedRules extends Rules {
    link: Rule<md.DefaultRules['link'], LinkNode>;
}

export function parser(source: string, state?: md.OptionalState): ASTNode[];
export let htmlOutput: md.Output<string>;

/**
 * Parse markdown and return the HTML output
 * @param source Source markdown content
 * @param options Options for the parser
 */
export function toHTML(source: string, options?: ToHTMLOptions): string;
export function toHTML<T>(
    source: string,
    options: ToHTMLOptions,
    customParser: md.Parser,
    customHtmlOutput: md.Output<T>,
): T;

export let rules: Rules;
export let rulesDiscordOnly: DiscordRules;
export let rulesEmbed: EmbedRules;
export let markdownEngine: typeof md;

/**
 * @param [attributes={}]
 * @param [isClosed=true]
 * @param [state={}]
 */
export function htmlTag(
    tagName: string,
    content: string,
    attributes?: Record<string, md.Attr>,
    ...args: [isClosed?: boolean, state?: HTMLTagState] | [state?: HTMLTagState]
): string;

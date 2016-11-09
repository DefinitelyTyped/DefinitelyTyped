// Type definitions for react-markdown
// Project: https://github.com/rexxars/react-markdown
// Definitions by: Greg Rosenbaum <https://github.com/GregRos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="react"/>
declare namespace ReactMarkdown {
	import Component = React.Component;
	import ReactChild = React.ReactChild;
	import ReactElement = React.ReactElement;
	export type NodeName =
		"HtmlBlock"
			| "HtmlInline"
			| "Text"
			| "Paragraph"
			| "Heading"
			| "Softbreak"
			| "Hardbreak"
			| "Link"
			| "Image"
			| "Emph"
			| "Code"
			| "CodeBlock"
			| "BlockQuote"
			| "List"
			| "Item"
			| "Strong"
			| "ThematicBreak";

	export interface Node {
		readonly nodeKey : string;
		readonly "data-sourcepos" ?: string;

	}
	export interface HtmlNode extends Node {
		readonly isBlock : boolean;
		readonly escapeHtml : boolean;
		readonly skipHtml : boolean;
		readonly literal :string;
	}

	export interface CodeBlockNode extends Node  {
		readonly literal : string;
		readonly language ?: string;
	}

	export interface CodeNode extends Node {
		readonly children : string;
		readonly literal : string;
		readonly inline : boolean;
	}

	export interface HeadingNode extends Node {
		readonly level : number;
		readonly children : React.ReactChild[];
	}

	export interface SoftbreakNode extends Node {
		readonly softBreak : any;
	}

	export interface LinkNode extends Node {
		readonly href : string;
		readonly title : string;
		readonly children : React.ReactChild[];
	}

	export interface ImageNode extends Node {
		readonly src : string;
		readonly title : string;
		readonly alt : string;
	}

	export interface ListNode extends Node {
		readonly start : number;
		readonly type : "Bullet" | "Ordered";
		readonly tight : boolean;
		readonly children : React.ReactChild[];
	}

	export interface ItemNode extends Node {
		readonly children : React.ReactChild[];
	}

	export interface TextNode extends Node {
		readonly literal : string;
	}

	export interface ParagraphNode extends Node {
		readonly children : React.ReactChild[];
	}

	export interface HardBreakNode extends Node {}

	export interface EmphNode extends Node {
		readonly children : React.ReactChild[];
	}

	export interface StrongNode extends Node {
		readonly children : React.ReactChild[];
	}

	export interface ThematicBreakNode extends Node {}

	export interface BlockQuoteNode extends Node {
		readonly children : React.ReactChild[];
	}

	export interface NodeRenderer<Props> {
		(props : Props) : ReactChild;
	}

	export interface Renderers {
		HtmlBlock ?: NodeRenderer<HtmlNode>
		HtmlInline ?: NodeRenderer<HtmlNode>
		Text ?: NodeRenderer<TextNode>
		Paragraph ?: NodeRenderer<ParagraphNode>
		Heading ?: NodeRenderer<HeadingNode>
		Softbreak ?: NodeRenderer<SoftbreakNode>
		Hardbreak ?: NodeRenderer<HardBreakNode>
		Link ?: NodeRenderer<LinkNode>
		Image ?: NodeRenderer<ImageNode>
		Emph ?: NodeRenderer<EmphNode>
		Code ?: NodeRenderer<CodeNode>
		CodeBlock ?: NodeRenderer<CodeBlockNode>
		BlockQuote ?: NodeRenderer<BlockQuoteNode>
		List ?: NodeRenderer<ListNode>
		Item ?: NodeRenderer<ItemNode>
		Strong ?: NodeRenderer<StrongNode>
		ThematicBreak ?: NodeRenderer<ThematicBreakNode>
	}

	export interface NodeInfo {
		readonly type : NodeName;
		readonly renderer : NodeRenderer<Node>;
		readonly props : Node;
		readonly children : Node[];
	}

	export interface ReactMarkdownProps {
		readonly source : string;

		readonly className ?: string;

		readonly containerTagName ?: string;

		readonly containerProps ?: Object;

		readonly childBefore ?: ReactElement<any>;

		readonly childAfter ?: ReactElement<any>;

		readonly escapeHtml ?: boolean;

		readonly skipHtml ?: boolean;

		readonly sourcePos ?: boolean;

		readonly softBreak ?: string | "br";

		readonly allowedTypes ?: NodeName[];

		readonly disallowedTypes ?: NodeName[];

		readonly unwrapDisallowed ?: boolean;

		readonly allowNode ?: (node : NodeInfo) => boolean;

		readonly renderers ?: Renderers;

		readonly transformLinkUri ?: (raw : string) => string;

		readonly transformImageUri ?: (raw : string) => string;
	}

	export class MarkdownComponent extends Component<ReactMarkdownProps, {}> {

	}
}
declare module "react-markdown" {
	export = ReactMarkdown.MarkdownComponent;
}

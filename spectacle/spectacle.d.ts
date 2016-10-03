// Type definitions for Spectacle 1.1.1
// Project: https://github.com/FormidableLabs/victory
// Definitions by: Zachary Maybury <https://github.com/zmaybury>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
declare module "spectacle" {
	import * as React from "react";

	/**
	 * Transition Types for Spectacle
	 */
	type transitionType = "slide"|"zoom"|"fade"|"spin";

	/**
	 * Progress Types for Spectacle
	 */
	type progressType = "pacman"|"bar"|"number"|"none";

	/**
	 * Alignment Types for Spectacle
	 */
	type alignType =
		"flex-start flex-start"|"flex-start center"|"flex-start flex-end"|
		"center flex-start"|"center center"|"center flex-end"|
		"flex-end flex-start"|"flex-end center"|"flex-end flex-end";

	/**
	 * Base props for many Spectacle components
	 */
	export interface BaseProps {
		italic?:boolean,
		bold?:boolean,
		caps?:boolean,
		margin?:number|string,
		padding?:number|string,
		textColor?:string,
		textSize?:string,
		textAlign?:string,
		textFont?:string,
		bgColor?:string,
		bgImage?:string,
		bgDarken?:number
	}

	export interface SpectacleProps {
		theme?:{ [key: string ]: string | number }
	}

	export interface DeckProps {
		transition?:transitionType[],
		transitionDuration?:number,
		progress?:progressType,
		controls?:boolean
	}

	export interface SlideProps extends BaseProps {
		align?:alignType,
		transition?:transitionType[],
		transitionDuration?:number,
		notes?:string,
		id?:string
	}

	export interface MarkdownProps {
		source?:string,
		mdastConfig?:{ [key: string ]: string | number }
	}

	export interface CodePaneProps extends BaseProps {
		lang?:string,
		source?:string
	}

	export interface HeadingProps extends BaseProps {
		fit?:boolean,
		lineHeight?:number
		size?:number;
	}

	export interface ImageProps extends BaseProps {
		display?:string,
		height?:number,
		src?:string,
		width?:number|string
	}

	export interface LinkProps extends BaseProps {
		href?:string
	}

	export interface SProps extends BaseProps {
		type?:string
	}

	export interface TextProps extends BaseProps {
		fit?:boolean,
		lineHeight?:number
	}

	export class Spectacle extends React.Component<SpectacleProps, any> {}

	export class Deck extends React.Component<DeckProps, any> {}

	export class Slide extends React.Component<SlideProps, any> {}

	export class Layout extends React.Component<any, any> {}

	export class Fit extends React.Component<any, any> {}

	export class Fill extends React.Component<any, any> {}

	export class Markdown extends React.Component<MarkdownProps, any> {}

	export class Appear extends React.Component<any, any> {}

	export class BlockQuote extends React.Component<BaseProps, any> {}

	export class Quote extends React.Component<BaseProps, any> {}

	export class Cite extends React.Component<BaseProps, any> {}

	export class CodePane extends React.Component<CodePaneProps, any> {}

	export class Code extends React.Component<BaseProps, any> {}

	export class Heading extends React.Component<HeadingProps, any> {}

	export class Image extends React.Component<ImageProps, any> {}

	export class Link extends React.Component<LinkProps, any> {}

	export class List extends React.Component<BaseProps, any> {}

	export class ListItem extends React.Component<BaseProps, any> {}

	export class S extends React.Component<SProps, any> {}

	export class Table extends React.Component<BaseProps, any> {}

	export class TableRow extends React.Component<BaseProps, any> {}

	export class TableHeaderItem extends React.Component<BaseProps, any> {}

	export class TableItem extends React.Component<BaseProps, any> {}

	export class Text extends React.Component<TextProps, any> {}
}
// These CSS typings adapted from TypeStyle: https://github.com/typestyle/typestyle

import { Observable } from './observable'
import * as csstype from 'csstype'

/**
 * Value of a CSS Property.  Could be a single value or a list of fallbacks
 * NOTE: array is for fallbacks
 */
export type CSSValue<T> = T | Observable<T>;

/**
 * Remove the variants of the second union of string literals from
 * the first.
 */
export type Diff<T extends string, U extends string> = (
  & { [P in T]: P }
  & { [P in U]: never }
  & { [x: string]: never }
)[T];

/**
 * Drop keys `K` from `T`.
 */
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export interface SimpleProperties extends Omit<
  csstype.Properties<number>,
  'display' | 'width' | 'height'
> {
  // https://github.com/frenic/csstype/issues/7
  width: number | string;
  height: number | string;
  // https://github.com/frenic/csstype/issues/8
  display:
    | csstype.All
    | csstype.DisplayOutside
    | csstype.DisplayInside
    | csstype.DisplayInternal
    | csstype.DisplayBox
    | csstype.DisplayLegacy
    ;
}

export type CSSProperties = {
  [K in keyof csstype.Properties]: CSSValue<SimpleProperties[K]>
}

export interface JssProps {
	'@global'?: CSSProperties;
	extend?: string;
	composes?: string | string[];
}

export interface JssExpand {
	animation:
		| {
				delay: CSSProperties['animationDelay'];
				direction: CSSProperties['animationDirection'];
				duration: CSSProperties['animationDuration'];
				iterationCount: CSSProperties['animationIterationCount'];
				name: CSSProperties['animationName'];
				playState: CSSProperties['animationPlayState'];
				timingFunction: any;
			}
		| CSSProperties['animation'];
	background:
		| {
				attachment: CSSProperties['backgroundAttachment'];
				color: CSSProperties['backgroundColor'];
				image: CSSProperties['backgroundImage'];
				position: CSSProperties['backgroundPosition'] | number[]; // Can be written using array e.g. `[0 0]`
				repeat: CSSProperties['backgroundRepeat'];
				size: Array<CSSProperties['backgroundSize'] | CSSProperties['backgroundSize']>; // Can be written using array e.g. `['center' 'center']`
			}
		| CSSProperties['background'];
	border:
		| {
				color: CSSProperties['borderColor'];
				style: CSSProperties['borderStyle'];
				width: CSSProperties['borderWidth'];
			}
		| CSSProperties['border'];
	boxShadow:
		| {
				x: any;
				y: any;
				blur: any;
				spread: any;
				color: CSSProperties['color'];
				inset?: 'inset'; // If you want to add inset you need to write "inset: 'inset'"
			}
		| CSSProperties['boxShadow'];
	flex:
		| {
				basis: CSSProperties['flexBasis'];
				direction: CSSProperties['flexDirection'];
				flow: CSSProperties['flexFlow'];
				grow: CSSProperties['flexGrow'];
				shrink: CSSProperties['flexShrink'];
				wrap: CSSProperties['flexWrap'];
			}
		| CSSProperties['flex'];
	font:
		| {
				family: CSSProperties['fontFamily'];
				size: CSSProperties['fontSize'];
				stretch: CSSProperties['fontStretch'];
				style: CSSProperties['fontStyle'];
				variant: CSSProperties['fontVariant'];
				weight: CSSProperties['fontWeight'];
			}
		| CSSProperties['font'];
	listStyle:
		| {
				image: CSSProperties['listStyleImage'];
				position: CSSProperties['listStylePosition'];
				type: CSSProperties['listStyleType'];
			}
		| CSSProperties['listStyle'];
	margin:
		| {
				bottom: CSSProperties['marginBottom'];
				left: CSSProperties['marginLeft'];
				right: CSSProperties['marginRight'];
				top: CSSProperties['marginTop'];
			}
		| CSSProperties['margin'];
	padding:
		| {
				bottom: CSSProperties['paddingBottom'];
				left: CSSProperties['paddingLeft'];
				right: CSSProperties['paddingRight'];
				top: CSSProperties['paddingTop'];
			}
		| CSSProperties['padding'];
	outline:
		| {
				color: CSSProperties['outlineColor'];
				style: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
				width: any;
			}
		| CSSProperties['outline'];
	textShadow:
		| {
				x: any;
				y: any;
				blur: any;
				color: CSSProperties['color'];
			}
		| CSSProperties['textShadow'];
	transition:
		| {
				delay: CSSProperties['transitionDelay'];
				duration: CSSProperties['transitionDuration'];
				property: CSSProperties['transitionProperty'];
				timingFunction: CSSProperties['transitionTimingFunction'];
			}
		| CSSProperties['transition'];
}

export type JssExpandArr = { [k in keyof JssExpand]?: JssExpand[k] | Array<JssExpand[k]> };

export type SimpleStyle = CSSProperties & JssProps & JssExpandArr;
export type Style = Observable<SimpleStyle> | SimpleStyle;

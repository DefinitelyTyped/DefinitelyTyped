import React = require('react');
import LinesEllipsis = require('react-lines-ellipsis');
import HTMLEllipsis = require('react-lines-ellipsis/lib/html');
import LinesEllipsisLoose = require('react-lines-ellipsis/lib/loose');
import responsiveHOC = require('react-lines-ellipsis/lib/responsiveHOC');
import { LinesEllipsisLooseProps, CommonReactLinesEllipsisProps, ReactLinesEllipsisProps, HTMLEllipsisProps } from 'react-lines-ellipsis';

// $ExpectType string | number | undefined
type commonPropsType0 = CommonReactLinesEllipsisProps['maxLine'];
// $ExpectType string | undefined
type commonPropsType1 = CommonReactLinesEllipsisProps['ellipsis'];
// $ExpectType boolean | undefined
type commonPropsType2 = CommonReactLinesEllipsisProps['trimRight'];
// $ExpectType "letters" | "words" | undefined || "words" | "letters" | undefined
type commonPropsType3 = CommonReactLinesEllipsisProps['basedOn'];
// $ExpectType number | undefined
type commonPropsType4 = CommonReactLinesEllipsisProps['winWidth'];
// $ExpectType (({ clamped, text }: { clamped: boolean; text: string; }) => void) | undefined
type commonPropsType5 = CommonReactLinesEllipsisProps['onReflow'];
// $ExpectType string | undefined
type commonPropsType6 = CommonReactLinesEllipsisProps['component'];

// $ExpectType string | undefined
type reactLinesEllipsisPropsType0 = ReactLinesEllipsisProps['text'];

// $ExpectType string | undefined
type HTMLEllipsisPropsType0 = HTMLEllipsisProps['unsafeHTML'];
// $ExpectType string | undefined
type HTMLEllipsisPropsType1 = HTMLEllipsisProps['ellipsisHTML'];

// $ExpectType number | undefined
type linesEllipsisLoosePropsType0 = LinesEllipsisLooseProps['lineHeight'];
// $ExpectType boolean | undefined
type linesEllipsisLoosePropsType1 = LinesEllipsisLooseProps['overflowFallback'];

declare const linesEllipsisProps: Readonly<ReactLinesEllipsisProps>;
<LinesEllipsis {...linesEllipsisProps}>children</LinesEllipsis>;

declare const htmlEllipsisProps: Readonly<HTMLEllipsisProps>;
<HTMLEllipsis {...htmlEllipsisProps}>children</HTMLEllipsis>;

declare const linesEllipsisLooseProps: Readonly<LinesEllipsisLooseProps>;
<LinesEllipsisLoose {...linesEllipsisLooseProps}>children</LinesEllipsisLoose>;

/* $ExpectType <P extends CommonReactLinesEllipsisProps>(WrappedComponent: ComponentType<P>)
 * => ComponentType<P & { innerRef?: LegacyRef<HTMLDivElement> | undefined; }>
 */
responsiveHOC();
/* $ExpectType <P extends CommonReactLinesEllipsisProps>(WrappedComponent: ComponentType<P>)
 * => ComponentType<P & { innerRef?: LegacyRef<HTMLDivElement> | undefined; }>
 */
responsiveHOC(10, { leading: true, maxWait: 10, trailing: true });
// @ts-expect-error
responsiveHOC('10', {});
// @ts-expect-error
responsiveHOC(10, { leading: 1, maxWait: '10', trailing: 1 });

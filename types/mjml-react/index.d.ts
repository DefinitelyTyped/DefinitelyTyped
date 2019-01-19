// Type definitions for mjml-react 1.0
// Project: https://github.com/wix-incubator/mjml-react
// Definitions by: Henri Normak <https://github.com/henrinormak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export namespace extensions {
    class MjmlComment extends React.Component<{ children: string }> { }
    class MjmlConditionalComment extends React.Component<{ children: string; condition: string }> { }
    class MjmlTrackingPixel extends React.Component<{ src: string }> { }
    class MjmlYahooStyle extends React.Component<{ children: string }> { }
}

export namespace utils {
    function namedEntityToHexCode(html: string): string;
    function fixConditionalComment(html: string, havingContent: string, newCondition: string): string;
    function useHttps(url?: string): string | undefined;
    function toMobileFontSize(sizeWithUnit: string): number;
    function addQueryParams(url: string, params: { [key: string]: any }): string;

    type TextAlignment = 'left' | 'right' | 'center' | 'justify' | 'inherit';
    function getTextAlign(value: string, fallback?: TextAlignment): TextAlignment;
}

export function renderToMjml(email: React.ReactElement<any>): string;

export interface Mjml2HtmlOptions {
    fonts?: { [key: string]: string };
    keepComments?: boolean;
    beautify?: boolean;
    minify?: boolean;
    validationLevel?: 'strict' | 'soft' | 'skip';
    filePath?: string;
}

export function render(email: React.ReactElement<any>, options?: Mjml2HtmlOptions): { html: string; errors: Error[] };

// Components

export interface RequiredChildrenProps {
    children: React.ReactNode;
}

export interface PaddingProps {
    padding?: string | number;
    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
}

export interface BorderProps {
    border?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderTop?: string;
    borderRight?: string;
    borderRadius?: string | number;
}

export interface ClassNameProps {
    cssClass?: string;
}

export interface HrefProps {
    href?: string;
    target?: string;
    rel?: string;
}

// mjml
export interface MjmlProps {
    lang?: string;
    owa?: string;
}

export class Mjml extends React.Component<MjmlProps & RequiredChildrenProps> { }

// mj-head
export class MjmlHead extends React.Component<RequiredChildrenProps> { }

// mj-attributes
export class MjmlAttributes extends React.Component<RequiredChildrenProps> { }
export class MjmlAll extends React.Component<{ [key: string]: any; children?: React.ReactNode }> { }
export class MjmlClass extends React.Component<{ [key: string]: any; children?: React.ReactNode; name: string }> { }

// mj-breakpoint
export interface MjmlBreakpointProps {
    width?: string | number;
}

export class MjmlBreakpoint extends React.Component<MjmlBreakpointProps> { }

// mj-body
export interface MjmlBodyProps {
    width ?: number;
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlBody extends React.Component<RequiredChildrenProps & MjmlBodyProps & ClassNameProps> { }

// mj-font
export interface MjmlFontProps {
    href?: string;
    name?: string;
}

export class MjmlFont extends React.Component<MjmlFontProps> { }

// mj-preview
export class MjmlPreview extends React.Component<{ children: string }> { }

// mj-style
export class MjmlStyle extends React.Component<{ children: string, inline?: boolean }> { }

// mj-title
export class MjmlTitle extends React.Component<{ children: string }> { }

// mj-accordion
export class MjmlAccordion extends React.Component<RequiredChildrenProps & MjmlAccordionElementProps> { }

export interface MjmlAccordionElementProps {
    fontFamily?: string;
    iconAlign?: string;
    iconWrappedUrl?: string;
    iconWrappedAlt?: string;
    iconUnwrappedAlt?: string;
    iconUnwrappedUrl?: string;
    iconPosition?: 'left' | 'right';
    iconHeight?: string;
    iconWidth?: string;
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlAccordionElement extends React.Component<RequiredChildrenProps & MjmlAccordionElementProps & ClassNameProps> { }

export interface MjmlAccordionTextProps {
    color?: ReactDOM.CSSProperties['color'];
    fontFamily?: string;
    fontSize?: string | number;
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlAccordionText extends React.Component<RequiredChildrenProps & MjmlAccordionTextProps & PaddingProps & ClassNameProps> { }

export interface MjmlAccordionTitleProps {
    color?: ReactDOM.CSSProperties['color'];
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    fontFamily?: string;
    fontSize?: string | number;
}

export class MjmlAccordionTitle extends React.Component<RequiredChildrenProps & MjmlAccordionTitleProps & PaddingProps & ClassNameProps> { }

// mj-button
export interface MjmlButtonProps {
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    fontStyle?: string;
    fontSize?: string | number;
    fontWeight?: number;
    fontFamily?: string;
    color?: ReactDOM.CSSProperties['color'];
    textAlign?: ReactDOM.CSSProperties['textAlign'];
    textDecoration?: string;
    textTransform?: string;
    align?: string;
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
    lineHeight?: string | number;
    innerPadding?: string;
    width?: string | number;
    height?: string | number;
}

export class MjmlButton extends React.Component<RequiredChildrenProps & MjmlButtonProps & PaddingProps & ClassNameProps & HrefProps & BorderProps> { }

// mj-carousel
export interface MjmlCarouselProps {
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    align?: string;
    borderRadius?: string | number;
    thumbnails?: 'hidden' | 'visible';
    tbBorder?: ReactDOM.CSSProperties['border'];
    tbBorderRadius?: ReactDOM.CSSProperties['borderRadius'];
    tbHoverBorderColor?: string;
    tbSelectedBorderColor?: string;
    tbWidth?: string;
    leftIcon?: string;
    rightIcon?: string;
    iconWidth?: string;
}

export class MjmlCarousel extends React.Component<RequiredChildrenProps & MjmlCarouselProps & ClassNameProps> {}

export interface MjmlCarouselImageProps {
    src?: string;
    thumbnailsSrc?: string;
    alt?: string;
    title?: string;
}

export class MjmlCarouselImage extends React.Component<MjmlCarouselImageProps & ClassNameProps & HrefProps> { }

// mj-carousel
export interface MjmlColumnProps {
    width?: string | number;
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlColumn extends React.Component<RequiredChildrenProps & MjmlColumnProps & PaddingProps & ClassNameProps & BorderProps> { }

// mj-divider
export interface MjmlDividerProps {
    borderColor?: ReactDOM.CSSProperties['borderColor'];
    borderStyle?: ReactDOM.CSSProperties['borderStyle'];
    borderWidth?: string | number;
    width?: string | number;
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlDivider extends React.Component<MjmlDividerProps & ClassNameProps & PaddingProps> { }

// mj-group
export interface MjmlGroupProps {
    width?: string | number;
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlGroup extends React.Component<MjmlGroupProps & RequiredChildrenProps & ClassNameProps> { }

// mj-hero
export interface MjmlHeroProps {
    width?: string | number;
    height?: string | number;
    mode?: 'fluid-height' | 'fixed-height';
    backgroundWidth?: string;
    backgroundHeight?: string;
    backgroundUrl?: string;
    backgroundPosition?: ReactDOM.CSSProperties['backgroundPosition'];
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlHero extends React.Component<MjmlHeroProps & ClassNameProps & PaddingProps> { }

// mj-image
export interface MjmlImageProps {
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    border?: ReactDOM.CSSProperties['border'];
    borderRadius?: string | number;
    width?: string | number;
    height?: string | number;
    src?: string;
    srcset?: string;
    alt?: string;
    align?: string;
    title?: string;
    fluidOnMobile?: string;
}

export class MjmlImage extends React.Component<MjmlImageProps & PaddingProps & ClassNameProps & HrefProps> { }

// mj-navbar
export interface MjmlNavbarProps {
    baseUrl?: string;
    hamburger?: 'hamburger';
    align?: string;
    icoOpen?: string;
    icoClose?: string;
    icoPadding?: string;
    icoPaddingTop?: string;
    icoPaddingRight?: string;
    icoPaddingBottom?: string;
    icoPaddingLeft?: string;
    icoAlign?: string;
    icoColor?: ReactDOM.CSSProperties['color'];
    icoFontSize?: string;
    icoTextTransform?: string;
    icoTextDecoration?: string;
    icoLineHeight?: string;
}

export class MjmlNavbar extends React.Component<MjmlNavbarProps & RequiredChildrenProps> { }

export interface MjmlNavbarLinkProps {
    color?: ReactDOM.CSSProperties['color'];
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: number;
    lineHeight?: string | number;
    textDecoration?: string;
    textTransform?: string;
}

export class MjmlNavbarLink extends React.Component<MjmlNavbarLinkProps & HrefProps & PaddingProps> { }

// mj-raw
export class MjmlRaw extends React.Component<RequiredChildrenProps> { }

// mj-section
export interface MjmlSectionProps {
    fullWidth?: boolean;
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    backgroundUrl?: string;
    backgroundRepeat?: ReactDOM.CSSProperties['backgroundRepeat'];
    backgroundSize?: ReactDOM.CSSProperties['backgroundSize'];
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
    textAlign?: ReactDOM.CSSProperties['textAlign'];
    direction?: 'ltr' | 'rtl';
}

export class MjmlSection extends React.Component<MjmlSectionProps & RequiredChildrenProps & BorderProps & PaddingProps & ClassNameProps> { }

// mj-social
export interface MjmlSocialProps {
    borderRadius?: string | number;
    fontFamily?: string;
    fontSize?: string | number;
    iconSize?: string;
    iconHeight?: string;
    lineHeight?: string | number;
    mode?: 'vertical' | 'horizontal';
    textDecoration?: string;
    align?: string;
    color?: ReactDOM.CSSProperties['color'];
    innerPadding?: string;
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlSocial extends React.Component<MjmlSocialProps & PaddingProps> { }

export interface MjmlSocialElementProps {
    borderRadius?: string | number;
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    fontFamily?: string;
    fontSize?: string | number;
    iconSize?: string;
    iconHeight?: string;
    lineHeight?: string | number;
    mode?: 'vertical' | 'horizontal';
    textDecoration?: string;
    align?: string;
    color?: ReactDOM.CSSProperties['color'];
    name?: 'facebook' | 'facebook-noshare' | 'twitter' | 'twitter-noshare' | 'google' | 'google-noshare' | 'pinterest' | 'pinterest-noshare' |
        'linkedin' | 'linkedin-noshare' | 'tumblr' | 'tumblr-noshare' | 'xing' | 'xing-noshare' |
        'github' | 'instagram' | 'web' | 'snapchat' | 'youtube' | 'vimeo' | 'medium' | 'soundcloud' | 'dribbble';
    src?: string;
    alt?: string;
}

export class MjmlSocialElement extends React.Component<MjmlSocialElementProps & RequiredChildrenProps & HrefProps & PaddingProps> { }

// mj-spacer
export interface MjmlSpacerProps {
    height?: string | number;
    width?: string | number;
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
}

export class MjmlSpacer extends React.Component<MjmlSpacerProps & BorderProps & PaddingProps & ClassNameProps> { }

// mj-table
export interface MjmlTableProps {
    color?: ReactDOM.CSSProperties['color'];
    cellpadding?: string;
    cellspacing?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    lineHeight?: string | number;
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    width?: string | number;
    tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
}

export class MjmlTable extends React.Component<MjmlTableProps & RequiredChildrenProps & PaddingProps> { }

// mj-text
export interface MjmlTextProps {
    color?: ReactDOM.CSSProperties['color'];
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: number;
    lineHeight?: string;
    letterSpacing?: string;
    height?: string | number;
    textDecoration?: string;
    textTransform?: string;
    align?: string;
    containerBackgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
}

export class MjmlText extends React.Component<MjmlTextProps & RequiredChildrenProps & PaddingProps & ClassNameProps> { }

// mj-wrapper
export interface MjmlWrapperProps {
    fullWidth?: boolean;
    backgroundColor?: ReactDOM.CSSProperties['backgroundColor'];
    backgroundUrl?: string;
    backgroundRepeat?: ReactDOM.CSSProperties['backgroundRepeat'];
    backgroundSize?: ReactDOM.CSSProperties['backgroundSize'];
    verticalAlign?: ReactDOM.CSSProperties['verticalAlign'];
    textAlign?: ReactDOM.CSSProperties['textAlign'];
}

export class MjmlWrapper extends React.Component<MjmlWrapperProps & RequiredChildrenProps & BorderProps & PaddingProps & ClassNameProps> { }

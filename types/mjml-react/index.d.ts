import * as React from "react";

export function renderToMjml(email: React.ReactElement): string;

export interface Mjml2HtmlOptions {
    fonts?: { [key: string]: string } | undefined;
    keepComments?: boolean | undefined;
    beautify?: boolean | undefined;
    minify?: boolean | undefined;
    validationLevel?: "strict" | "soft" | "skip" | undefined;
    filePath?: string | undefined;
}

export interface MjmlError {
    line: number;
    message: string;
    tagName: string;
    formattedMessage: string;
}

export function render(email: React.ReactElement, options?: Mjml2HtmlOptions): { html: string; errors: MjmlError[] };

// Components

/**
 * @deprecated forcing MJML components to define children prevents them from being used in the header element see https://github.com/wix-incubator/mjml-react/issues/32
 */
export interface RequiredChildrenProps {
    children: React.ReactNode;
}

export interface PaddingProps {
    padding?: string | number | undefined;
    paddingTop?: string | number | undefined;
    paddingRight?: string | number | undefined;
    paddingBottom?: string | number | undefined;
    paddingLeft?: string | number | undefined;
}

export interface BorderProps {
    border?: string | undefined;
    borderBottom?: string | undefined;
    borderLeft?: string | undefined;
    borderTop?: string | undefined;
    borderRight?: string | undefined;
    borderRadius?: string | number | undefined;
}

export interface InnerBorderProps {
    innerBorder?: string | undefined;
    innerBorderBottom?: string | undefined;
    innerBorderLeft?: string | undefined;
    innerBorderTop?: string | undefined;
    innerBorderRight?: string | undefined;
    innerBorderRadius?: string | number | undefined;
}

export interface ClassNameProps {
    cssClass?: string | undefined;
    mjClass?: string | undefined;
}

export interface HrefProps {
    href?: string | undefined;
    target?: string | undefined;
    rel?: string | undefined;
}

// mjml
export interface MjmlProps {
    children?: React.ReactNode;
    lang?: string | undefined;
    owa?: string | undefined;
}

export class Mjml extends React.Component<MjmlProps> {}

// mj-head
export class MjmlHead extends React.Component<{ children?: React.ReactNode }> {}

// mj-attributes
export class MjmlAttributes extends React.Component<{ children?: React.ReactNode }> {}
export class MjmlAll extends React.Component<{ [key: string]: any; children?: React.ReactNode | undefined }> {}
export class MjmlClass
    extends React.Component<{ [key: string]: any; children?: React.ReactNode | undefined; name: string }>
{}

// mj-html-attributes
export class MjmlHtmlAttributes extends React.Component<{ children?: React.ReactNode }> {}
export class MjmlSelector extends React.Component<{ children?: React.ReactNode | undefined; path: string }> {}
export class MjmlHtmlAttribute extends React.Component<{ children?: React.ReactNode | undefined; name: string }> {}

// mj-breakpoint
export interface MjmlBreakpointProps {
    width?: string | number | undefined;
}

export class MjmlBreakpoint extends React.Component<MjmlBreakpointProps> {}

// mj-body
export interface MjmlBodyProps {
    children?: React.ReactNode;
    width?: number | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlBody extends React.Component<MjmlBodyProps & ClassNameProps> {}

// mj-font
export interface MjmlFontProps {
    children?: React.ReactNode;
    href?: string | undefined;
    name?: string | undefined;
}

export class MjmlFont extends React.Component<MjmlFontProps> {}

// mj-preview
export class MjmlPreview extends React.Component<{ children?: string | undefined }> {}

// mj-style
export class MjmlStyle extends React.Component<{ children?: string | undefined; inline?: boolean | undefined }> {}

// mj-title
export class MjmlTitle extends React.Component<{ children?: string | undefined }> {}

// mj-accordion
export interface MjmlAccordionProps {
    children?: React.ReactNode;
    border?: string | undefined;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    fontFamily?: string | undefined;
    iconAlign?: string | undefined;
    iconHeight?: string | undefined;
    iconPosition?: "left" | "right" | undefined;
    iconUnwrappedAlt?: string | undefined;
    iconUnwrappedUrl?: string | undefined;
    iconWidth?: string | undefined;
    iconWrappedAlt?: string | undefined;
    iconWrappedUrl?: string | undefined;

    /**
     * @deprecated backgroundColor doesn't exist on the mj-accordion element.
     * It is included for backwards compatibility with an erroneous version of the mjml-react types.
     */
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlAccordion extends React.Component<MjmlAccordionProps & PaddingProps & ClassNameProps> {}

export interface MjmlAccordionElementProps {
    children?: React.ReactNode;
    border?: string | undefined;
    fontFamily?: string | undefined;
    iconAlign?: string | undefined;
    iconWrappedUrl?: string | undefined;
    iconWrappedAlt?: string | undefined;
    iconUnwrappedAlt?: string | undefined;
    iconUnwrappedUrl?: string | undefined;
    iconPosition?: "left" | "right" | undefined;
    iconHeight?: string | undefined;
    iconWidth?: string | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlAccordionElement extends React.Component<MjmlAccordionElementProps & ClassNameProps> {}

export interface MjmlAccordionTextProps {
    children?: React.ReactNode;
    color?: React.CSSProperties["color"] | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    fontWeight?: string | number | undefined;
    letterSpacing?: string | number | undefined;
    lineHeight?: string | number | undefined;
}

export class MjmlAccordionText extends React.Component<MjmlAccordionTextProps & PaddingProps & ClassNameProps> {}

export interface MjmlAccordionTitleProps {
    children?: React.ReactNode;
    color?: React.CSSProperties["color"] | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
}

export class MjmlAccordionTitle extends React.Component<MjmlAccordionTitleProps & PaddingProps & ClassNameProps> {}

// mj-button
export interface MjmlButtonProps {
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    children?: React.ReactNode;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    fontStyle?: string | undefined;
    fontSize?: string | number | undefined;
    fontWeight?: React.CSSProperties["fontWeight"] | undefined;
    fontFamily?: string | undefined;
    color?: React.CSSProperties["color"] | undefined;
    textAlign?: React.CSSProperties["textAlign"] | undefined;
    textDecoration?: string | undefined;
    textTransform?: string | undefined;
    align?: string | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
    letterSpacing?: string | number | undefined;
    lineHeight?: string | number | undefined;
    innerPadding?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
}

export class MjmlButton
    extends React.Component<MjmlButtonProps & PaddingProps & ClassNameProps & HrefProps & BorderProps>
{}

// mj-carousel
export interface MjmlCarouselProps {
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    align?: string | undefined;
    borderRadius?: string | number | undefined;
    children?: React.ReactNode;
    thumbnails?: "hidden" | "visible" | undefined;
    tbBorder?: React.CSSProperties["border"] | undefined;
    tbBorderRadius?: React.CSSProperties["borderRadius"] | undefined;
    tbHoverBorderColor?: string | undefined;
    tbSelectedBorderColor?: string | undefined;
    tbWidth?: string | undefined;
    leftIcon?: string | undefined;
    rightIcon?: string | undefined;
    iconWidth?: string | undefined;
}

export class MjmlCarousel extends React.Component<MjmlCarouselProps & ClassNameProps> {}

export interface MjmlCarouselImageProps {
    children?: React.ReactNode;
    src?: string | undefined;
    thumbnailsSrc?: string | undefined;
    alt?: string | undefined;
    title?: string | undefined;
}

export class MjmlCarouselImage extends React.Component<MjmlCarouselImageProps & ClassNameProps & HrefProps> {}

export interface MjmlColumnProps {
    children?: React.ReactNode;
    width?: string | number | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    innerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlColumn
    extends React.Component<MjmlColumnProps & PaddingProps & ClassNameProps & BorderProps & InnerBorderProps>
{}

// mj-divider
export interface MjmlDividerProps {
    borderColor?: React.CSSProperties["borderColor"] | undefined;
    borderStyle?: React.CSSProperties["borderStyle"] | undefined;
    borderWidth?: string | number | undefined;
    children?: React.ReactNode;
    width?: string | number | undefined;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlDivider extends React.Component<MjmlDividerProps & ClassNameProps & PaddingProps> {}

// mj-group
export interface MjmlGroupProps {
    children?: React.ReactNode;
    width?: string | number | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    direction?: "ltr" | "rtl" | undefined;
}

export class MjmlGroup extends React.Component<MjmlGroupProps & ClassNameProps> {}

// mj-hero
export interface MjmlHeroProps {
    children?: React.ReactNode;
    width?: string | number | undefined;
    height?: string | number | undefined;
    mode?: "fluid-height" | "fixed-height" | undefined;
    backgroundWidth?: string | undefined;
    backgroundHeight?: string | undefined;
    backgroundUrl?: string | undefined;
    backgroundPosition?: React.CSSProperties["backgroundPosition"] | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlHero extends React.Component<MjmlHeroProps & ClassNameProps & PaddingProps> {}

// mj-image
export interface MjmlImageProps {
    children?: React.ReactNode;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    border?: React.CSSProperties["border"] | undefined;
    borderRadius?: string | number | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    src?: string | undefined;
    srcset?: string | undefined;
    alt?: string | undefined;
    align?: string | undefined;
    title?: string | undefined;
    fluidOnMobile?: string | undefined;
}

export class MjmlImage extends React.Component<MjmlImageProps & PaddingProps & ClassNameProps & HrefProps> {}

// mj-navbar
export interface MjmlNavbarProps {
    baseUrl?: string | undefined;
    children?: React.ReactNode;
    hamburger?: "hamburger" | undefined;
    align?: string | undefined;
    icoOpen?: string | undefined;
    icoClose?: string | undefined;
    icoPadding?: string | undefined;
    icoPaddingTop?: string | undefined;
    icoPaddingRight?: string | undefined;
    icoPaddingBottom?: string | undefined;
    icoPaddingLeft?: string | undefined;
    icoAlign?: string | undefined;
    icoColor?: React.CSSProperties["color"] | undefined;
    icoFontSize?: string | undefined;
    icoTextTransform?: string | undefined;
    icoTextDecoration?: string | undefined;
    icoLineHeight?: string | undefined;
}

export class MjmlNavbar extends React.Component<MjmlNavbarProps> {}

export interface MjmlNavbarLinkProps {
    children?: React.ReactNode;
    color?: React.CSSProperties["color"] | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    fontStyle?: string | undefined;
    fontWeight?: number | undefined;
    lineHeight?: string | number | undefined;
    textDecoration?: string | undefined;
    textTransform?: string | undefined;
}

export class MjmlNavbarLink extends React.Component<MjmlNavbarLinkProps & HrefProps & PaddingProps> {}

// mj-raw
export class MjmlRaw extends React.Component<{ children?: React.ReactNode }> {}

// mj-section
export interface MjmlSectionProps {
    children?: React.ReactNode;
    fullWidth?: boolean | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    backgroundUrl?: string | undefined;
    backgroundRepeat?: React.CSSProperties["backgroundRepeat"] | undefined;
    backgroundSize?: React.CSSProperties["backgroundSize"] | undefined;
    backgroundPosition?: React.CSSProperties["backgroundPosition"] | undefined;
    backgroundPositionX?: React.CSSProperties["backgroundPositionX"] | undefined;
    backgroundPositionY?: React.CSSProperties["backgroundPositionY"] | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
    textAlign?: React.CSSProperties["textAlign"] | undefined;
    direction?: "ltr" | "rtl" | undefined;
}

export class MjmlSection extends React.Component<MjmlSectionProps & BorderProps & PaddingProps & ClassNameProps> {}

// mj-social
export interface MjmlSocialProps {
    borderRadius?: string | number | undefined;
    children?: React.ReactNode;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    iconSize?: string | undefined;
    iconHeight?: string | undefined;
    lineHeight?: string | number | undefined;
    mode?: "vertical" | "horizontal" | undefined;
    textDecoration?: string | undefined;
    align?: string | undefined;
    color?: React.CSSProperties["color"] | undefined;
    innerPadding?: string | undefined;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlSocial extends React.Component<MjmlSocialProps & PaddingProps & ClassNameProps> {}

export interface MjmlSocialElementProps {
    borderRadius?: string | number | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    children?: React.ReactNode;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    iconSize?: string | undefined;
    iconHeight?: string | undefined;
    lineHeight?: string | number | undefined;
    mode?: "vertical" | "horizontal" | undefined;
    textDecoration?: string | undefined;
    align?: string | undefined;
    color?: React.CSSProperties["color"] | undefined;
    name?:
        | "facebook"
        | "facebook-noshare"
        | "twitter"
        | "twitter-noshare"
        | "google"
        | "google-noshare"
        | "pinterest"
        | "pinterest-noshare"
        | "linkedin"
        | "linkedin-noshare"
        | "tumblr"
        | "tumblr-noshare"
        | "xing"
        | "xing-noshare"
        | "github"
        | "instagram"
        | "web"
        | "snapchat"
        | "youtube"
        | "vimeo"
        | "medium"
        | "soundcloud"
        | "dribbble"
        | undefined;
    src?: string | undefined;
    alt?: string | undefined;
    iconPadding?: string | undefined;
    direction?: "ltr" | "rtl" | undefined;
}

export class MjmlSocialElement extends React.Component<MjmlSocialElementProps & HrefProps & PaddingProps> {}

// mj-spacer
export interface MjmlSpacerProps {
    children?: React.ReactNode;
    height?: string | number | undefined;
    width?: string | number | undefined;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
}

export class MjmlSpacer extends React.Component<MjmlSpacerProps & BorderProps & PaddingProps & ClassNameProps> {}

// mj-table
export interface MjmlTableProps {
    children?: React.ReactNode;
    color?: React.CSSProperties["color"] | undefined;
    cellpadding?: string | undefined;
    cellspacing?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    fontStyle?: string | undefined;
    lineHeight?: string | number | undefined;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    width?: string | number | undefined;
    tableLayout?: "auto" | "fixed" | "initial" | "inherit" | undefined;
    align?: "left" | "right" | "center" | undefined;
    role?: "presentation" | "none";
    border?: React.CSSProperties["border"] | undefined;
}

export class MjmlTable extends React.Component<MjmlTableProps & PaddingProps & ClassNameProps> {}

// mj-text
export interface MjmlTextProps {
    children?: React.ReactNode;
    color?: React.CSSProperties["color"] | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    fontStyle?: string | undefined;
    fontWeight?: number | undefined;
    lineHeight?: string | undefined;
    letterSpacing?: string | undefined;
    height?: string | number | undefined;
    textDecoration?: string | undefined;
    textTransform?: string | undefined;
    align?: string | undefined;
    containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

export class MjmlText extends React.Component<MjmlTextProps & PaddingProps & ClassNameProps> {}

// mj-wrapper
export interface MjmlWrapperProps {
    children?: React.ReactNode;
    fullWidth?: boolean | undefined;
    backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
    backgroundUrl?: string | undefined;
    backgroundRepeat?: React.CSSProperties["backgroundRepeat"] | undefined;
    backgroundSize?: React.CSSProperties["backgroundSize"] | undefined;
    backgroundPosition?: React.CSSProperties["backgroundPosition"] | undefined;
    backgroundPositionX?: React.CSSProperties["backgroundPositionX"] | undefined;
    backgroundPositionY?: React.CSSProperties["backgroundPositionY"] | undefined;
    verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
    textAlign?: React.CSSProperties["textAlign"] | undefined;
}

export class MjmlWrapper extends React.Component<MjmlWrapperProps & BorderProps & PaddingProps & ClassNameProps> {}

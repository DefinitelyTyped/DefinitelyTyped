// Type definitions for Rebass 0.2.5
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="react" />

import * as React from "react";

export interface BaseProps<C> extends React.Props<C> {
    tagName?: string;
    className?: string;
    baseStyle?: Object;
    style?: Object;
    m?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    mx?: number;
    my?: number;
    p?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    px?: number;
    py?: number;
    color?: string;
    backgroundColor?: string;
    inverted?: boolean;
    rounded?: boolean | "top" | "right" | "bottom" | "left";
    circle?: boolean;
    pill?: boolean;
}

export interface ArrowProps extends BaseProps<ArrowClass> {
    direction?: "up" | "down";
}
type ArrowClass = React.StatelessComponent<ArrowProps>
export declare const Arrow: ArrowClass;

export interface AvatarProps extends BaseProps<AvatarClass> {
    size?: number;
    src?: string;
}
type AvatarClass = React.StatelessComponent<AvatarProps>
export declare const Avatar: AvatarClass;

export interface BadgeProps extends BaseProps<BadgeClass> {
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
    rounded?: boolean | "top" | "right" | "bottom" | "left";
    pill?: boolean;
    circle?: boolean;
}
type BadgeClass = React.StatelessComponent<BadgeProps>
export declare const Badge: BadgeClass;

export interface BannerProps extends BaseProps<BannerClass> {
    align?: "left" | "center" | "right";
    backgroundImage: string;
}
type BannerClass = React.StatelessComponent<BannerProps>
export declare const Banner: BannerClass;

export interface BlockProps extends BaseProps<BlockClass> {
    m?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    mx?: number;
    my?: number;
    p?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    px?: number;
    py?: number;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    border?: boolean;
    borderTop?: boolean;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    rounded?: boolean | "top" | "right" | "bottom" | "left";
}
type BlockClass = React.StatelessComponent<BlockProps>
export declare const Block: BlockClass;

export interface BlockquoteProps extends BaseProps<BlockquoteClass> {
    source: string;
    href: string;
}
type BlockquoteClass = React.StatelessComponent<BlockquoteProps>
export declare const Blockquote: BlockquoteClass;

export interface BreadcrumbsProps extends BaseProps<BreadcrumbsClass> {
    links: {
        children: any;
        href: string;
    }[];
}
type BreadcrumbsClass = React.StatelessComponent<BreadcrumbsProps>
export declare const Breadcrumbs: BreadcrumbsClass;

export interface ButtonProps extends BaseProps<ButtonClass> {
    href?: string;
    color?: string;
    backgroundColor?: string;
    rounded?: boolean | "top" | "right" | "bottom" | "left";
    pill?: boolean;
    big?: boolean;
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
}
type ButtonClass = React.StatelessComponent<ButtonProps>
export declare const Button: ButtonClass;

export interface ButtonCircleProps extends BaseProps<ButtonCircleClass> {
    title?: string;
    href?: string;
    color?: string;
    backgroundColor?: string;
    size?: number;
}
type ButtonCircleClass = React.StatelessComponent<ButtonCircleProps>
export declare const ButtonCircle: ButtonCircleClass;

export interface ButtonOutlineProps extends BaseProps<ButtonOutlineClass> {
    href?: string;
    color?: string;
    rounded?: boolean | "top" | "right" | "bottom" | "left";
    pill?: boolean;
    big?: boolean;
}
type ButtonOutlineClass = React.StatelessComponent<ButtonOutlineProps>
export declare const ButtonOutline: ButtonOutlineClass;

export interface CardProps extends BaseProps<CardClass> {
    width?: number | string;
}
type CardClass = React.StatelessComponent<CardProps>
export declare const Card: CardClass;

export interface CardImageProps extends BaseProps<CardImageClass> {
    src?: string;
}
type CardImageClass = React.StatelessComponent<CardImageProps>
export declare const CardImage: CardImageClass;

export interface CheckboxProps extends BaseProps<CheckboxClass> {
    label?: string;
    checked?: boolean;
    name?: string;
    readOnly?: boolean;
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
}
type CheckboxClass = React.StatelessComponent<CheckboxProps>
export declare const Checkbox: CheckboxClass;

export interface CloseProps extends BaseProps<CloseClass> {
}
type CloseClass = React.StatelessComponent<CloseProps>
export declare const Close: CloseClass;

export interface ContainerProps extends BaseProps<ContainerClass> {
}
type ContainerClass = React.StatelessComponent<ContainerProps>
export declare const Container: ContainerClass;

export interface DividerProps extends BaseProps<DividerClass> {
    width?: number;
}
type DividerClass = React.StatelessComponent<DividerProps>
export declare const Divider: DividerClass;

export interface DonutProps extends BaseProps<DonutClass> {
    value?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
}
type DonutClass = React.StatelessComponent<DonutProps>
export declare const Donut: DonutClass;

export interface DotIndicatorProps extends BaseProps<DotIndicatorClass> {
    length?: number;
    active?: number;
    onClick?: Function;
}
type DotIndicatorClass = React.StatelessComponent<DotIndicatorProps>
export declare const DotIndicator: DotIndicatorClass;

export interface DrawerProps extends BaseProps<DrawerClass> {
    size?: number;
    open?: boolean;
    position?: "top" | "right" | "bottom" | "left";
    onDismiss?: Function;
}
type DrawerClass = React.StatelessComponent<DrawerProps>
export declare const Drawer: DrawerClass;

export interface DropdownProps extends BaseProps<DropdownClass> {
}
type DropdownClass = React.StatelessComponent<DropdownProps>
export declare const Dropdown: DropdownClass;

export interface DropdownMenuProps extends BaseProps<DropdownMenuClass> {
    open?: boolean;
    right?: boolean;
    top?: boolean;
    onDismiss?: Function;
}
type DropdownMenuClass = React.StatelessComponent<DropdownMenuProps>
export declare const DropdownMenu: DropdownMenuClass;

export interface EmbedProps extends BaseProps<EmbedClass> {
    ratio?: number;
}
type EmbedClass = React.StatelessComponent<EmbedProps>
export declare const Embed: EmbedClass;

export interface FixedProps extends BaseProps<FixedClass> {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    zIndex?: number;
}
type FixedClass = React.StatelessComponent<FixedProps>
export declare const Fixed: FixedClass;

export interface FooterProps extends BaseProps<FooterClass> {
}
type FooterClass = React.StatelessComponent<FooterProps>
export declare const Footer: FooterClass;

export interface HeadingProps extends BaseProps<HeadingClass> {
    big?: boolean;
    level?: number;
    size?: number;
    alt?: boolean;
}
type HeadingClass = React.StatelessComponent<HeadingProps>
export declare const Heading: HeadingClass;

export interface HeadingLinkProps extends BaseProps<HeadingLinkClass> {
    level?: number;
    size?: number;
    href?: string;
}
type HeadingLinkClass = React.StatelessComponent<HeadingLinkProps>
export declare const HeadingLink: HeadingLinkClass;

export interface InlineFormProps extends BaseProps<InlineFormClass> {
    label?: string;
    name?: string;
    value?: number | string;
    placeholder?: string;
    onChange?: Function;
    buttonLabel?: string;
    onClick?: Function;
}
type InlineFormClass = React.StatelessComponent<InlineFormProps>
export declare const InlineForm: InlineFormClass;

export interface InputProps extends BaseProps<InputClass> {
    label?: string;
    name?: string;
    type?: string;
    message?: string;
    hideLabel?: boolean;
    rounded?: boolean | "top" | "right" | "bottom" | "left";
    placeholder?: string;
}
type InputClass = React.StatelessComponent<InputProps>
export declare const Input: InputClass;

export interface LabelProps extends BaseProps<LabelClass> {
    hide?: boolean;
}
type LabelClass = React.StatelessComponent<LabelProps>
export declare const Label: LabelClass;

export interface LinkBlockProps extends BaseProps<LinkBlockClass> {
    is?: string | Object | Function;
    href?: string;
}
type LinkBlockClass = React.StatelessComponent<LinkBlockProps>
export declare const LinkBlock: LinkBlockClass;

export interface MediaProps extends BaseProps<MediaClass> {
    img?: string;
    right?: boolean;
    align?: "top" | "center" | "bottom";
}
type MediaClass = React.StatelessComponent<MediaProps>
export declare const Media: MediaClass;

export interface MenuProps extends BaseProps<MenuClass> {
}
type MenuClass = React.StatelessComponent<MenuProps>
export declare const Menu: MenuClass;

export interface MessageProps extends BaseProps<MessageClass> {
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
}
type MessageClass = React.StatelessComponent<MessageProps>
export declare const Message: MessageClass;

export interface NavItemProps extends BaseProps<NavItemClass> {
    small?: boolean;
    is?: string | Object | Function;
}
type NavItemClass = React.StatelessComponent<NavItemProps>
export declare const NavItem: NavItemClass;

export interface OverlayProps extends BaseProps<OverlayClass> {
    open?: boolean;
    dark?: boolean;
    box?: boolean;
    fullWidth?: boolean;
    onDismiss?: Function;
}
type OverlayClass = React.StatelessComponent<OverlayProps>
export declare const Overlay: OverlayClass;

export interface PageHeaderProps extends BaseProps<PageHeaderClass> {
    heading?: string;
    description?: string;
}
type PageHeaderClass = React.StatelessComponent<PageHeaderProps>
export declare const PageHeader: PageHeaderClass;

export interface PanelProps extends BaseProps<PanelClass> {
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
}
type PanelClass = React.StatelessComponent<PanelProps>
export declare const Panel: PanelClass;

export interface PanelFooterProps extends BaseProps<PanelFooterClass> {
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
}
type PanelFooterClass = React.StatelessComponent<PanelFooterProps>
export declare const PanelFooter: PanelFooterClass;

export interface PanelHeaderProps extends BaseProps<PanelHeaderClass> {
    theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error";
}
type PanelHeaderClass = React.StatelessComponent<PanelHeaderProps>
export declare const PanelHeader: PanelHeaderClass;

export interface PreProps extends BaseProps<PreClass> {
}
type PreClass = React.StatelessComponent<PreProps>
export declare const Pre: PreClass;

export interface ProgressProps extends BaseProps<ProgressClass> {
    value?: number;
    color?: string;
}
type ProgressClass = React.StatelessComponent<ProgressProps>
export declare const Progress: ProgressClass;

export interface RadioProps extends BaseProps<RadioClass> {
    checked?: boolean;
    group?: string;
    label?: string;
    name?: string;
    readOnly?: boolean;
}
type RadioClass = React.StatelessComponent<RadioProps>
export declare const Radio: RadioClass;

export interface RatingProps extends BaseProps<RatingClass> {
    value?: number;
    onClick?: Function;
}
type RatingClass = React.StatelessComponent<RatingProps>
export declare const Rating: RatingClass;

export interface SectionProps extends BaseProps<SectionClass> {
}
type SectionClass = React.StatelessComponent<SectionProps>
export declare const Section: SectionClass;

export interface SectionHeaderProps extends BaseProps<SectionHeaderClass> {
    heading?: string;
    href?: string;
    description?: string;
}
type SectionHeaderClass = React.StatelessComponent<SectionHeaderProps>
export declare const SectionHeader: SectionHeaderClass;

export interface SelectProps extends BaseProps<SelectClass> {
    label?: string;
    name?: string;
    options?: {
        children: any;
        value: any;
    }[];
    message?: string;
    hideLabel?: boolean;
}
type SelectClass = React.StatelessComponent<SelectProps>
export declare const Select: SelectClass;

export interface SequenceMapProps extends BaseProps<SequenceMapClass> {
    steps?: {
        children: any;
        href: string;
    }[];
    active?: number;
}
type SequenceMapClass = React.StatelessComponent<SequenceMapProps>
export declare const SequenceMap: SequenceMapClass;

export interface SequenceMapStepProps extends BaseProps<SequenceMapStepClass> {
    width?: string;
    first?: boolean;
    active?: boolean;
}
type SequenceMapStepClass = React.StatelessComponent<SequenceMapStepProps>
export declare const SequenceMapStep: SequenceMapStepClass;

export interface SliderProps extends BaseProps<SliderClass> {
    label?: string;
    name?: string;
    fill?: boolean;
    hideLabel?: boolean;
    value?: number;
    defaultValue?: number;
    readOnly?: boolean;
}
type SliderClass = React.StatelessComponent<SliderProps>
export declare const Slider: SliderClass;

export interface SpaceProps extends BaseProps<SpaceClass> {
    x?: number;
    auto?: boolean;
}
type SpaceClass = React.StatelessComponent<SpaceProps>
export declare const Space: SpaceClass;

export interface StatProps extends BaseProps<StatClass> {
    value?: number | string;
    unit?: string;
    label?: string;
    topLabel?: boolean;
}
type StatClass = React.StatelessComponent<StatProps>
export declare const Stat: StatClass;

export interface SwitchProps extends BaseProps<SwitchClass> {
    checked?: boolean;
}
type SwitchClass = React.StatelessComponent<SwitchProps>
export declare const Switch: SwitchClass;

export interface TableProps extends BaseProps<TableClass> {
    headings?: any[];
    data?: any[][];
}
type TableClass = React.StatelessComponent<TableProps>
export declare const Table: TableClass;

export interface TextProps extends BaseProps<TextClass> {
    small?: boolean;
    bold?: boolean;
}
type TextClass = React.StatelessComponent<TextProps>
export declare const Text: TextClass;

export interface TextareaProps extends BaseProps<TextareaClass> {
    label?: string;
    name?: string;
    message?: string;
    hideLabel?: boolean;
}
type TextareaClass = React.StatelessComponent<TextareaProps>
export declare const Textarea: TextareaClass;

export interface ToolbarProps extends BaseProps<ToolbarClass> {
}
type ToolbarClass = React.StatelessComponent<ToolbarProps>
export declare const Toolbar: ToolbarClass;

export interface TooltipProps extends BaseProps<TooltipClass> {
    title?: string;
}
type TooltipClass = React.StatelessComponent<TooltipProps>
export declare const Tooltip: TooltipClass;

import * as React from "react";
import * as Blessed from "blessed";

export {};

/* RENDERER *****************************************************************/

export type Callback = () => void | null | undefined;
export type renderer = (c: JSX.Element, s: Blessed.Widgets.Screen, callback?: Callback) => React.Component | null;
export function render(c: JSX.Element, s: Blessed.Widgets.Screen, callback?: Callback): React.Component | null;

export function createBlessedRenderer(bls: any): renderer;

/* BLESSED ELEMENTS **********************************************************/

export type Element = Blessed.Widgets.BlessedElement;
export type ScrollableBoxElement = Blessed.Widgets.ScrollableBoxElement;
export type ScrollableTextElement = Blessed.Widgets.ScrollableTextElement;
export type BoxElement = Blessed.Widgets.BoxElement;
export type TextElement = Blessed.Widgets.TextElement;
export type LineElement = Blessed.Widgets.LineElement;
export type BigTextElement = Blessed.Widgets.BigTextElement;
export type ListElement = Blessed.Widgets.ListElement;
export type FileManagerElement = Blessed.Widgets.FileManagerElement;
export type ListTableElement = Blessed.Widgets.ListTableElement;
export type ListbarElement = Blessed.Widgets.ListbarElement;
export type InputElement = Blessed.Widgets.InputElement;
export type TextareaElement = Blessed.Widgets.TextareaElement;
export type TextboxElement = Blessed.Widgets.TextboxElement;
export type ButtonElement = Blessed.Widgets.ButtonElement;
export type CheckboxElement = Blessed.Widgets.CheckboxElement;
export type RadioSetElement = Blessed.Widgets.RadioSetElement;
export type RadioButtonElement = Blessed.Widgets.RadioButtonElement;
export type TableElement = Blessed.Widgets.TableElement;
export type PromptElement = Blessed.Widgets.PromptElement;
export type QuestionElement = Blessed.Widgets.QuestionElement;
export type MessageElement = Blessed.Widgets.MessageElement;
export type LoadingElement = Blessed.Widgets.LoadingElement;
export type LogElement = Blessed.Widgets.Log;
export type ProgressBarElement = Blessed.Widgets.ProgressBarElement;
export type TerminalElement = Blessed.Widgets.TerminalElement;
export type LayoutElement = Blessed.Widgets.LayoutElement;

/* EVENTS *******************************************************************/

type Prefix<T extends string, P extends string> = `${T}${P}`;

// create event handlers that map to 'blessed' events. see
// https://github.com/Yomguithereal/react-blessed/blob/f5e1f791dea1788745695d557040b91f573f9ef5/src/fiber/events.js
type EventHandlerProp<T extends string, E extends (...args: never) => void> = {
    [key in `on${Capitalize<T>}`]?: E;
};

// 'react-blessed' handles 'blessed' events by matching event names to
// handlers by prefixing event names with with "on" and camelCasing the
// result. this cannot be fully recreated in TS so we must manually map them
// here.
type ScreenElement = "click" | "mouseover" | "mouseout" | "mouseup";
type ScreenElementPrefix = "element";
type ExludedScreenEventNames = Prefix<ScreenElementPrefix, Prefix<" ", ScreenElement>>;
type CamelCasedScreenEventNames = Prefix<ScreenElementPrefix, Capitalize<ScreenElement>>;

type ScreenEventNames =
    | Exclude<Blessed.Widgets.NodeScreenEventType, ExludedScreenEventNames>
    | CamelCasedScreenEventNames;

type GenericContentPrefix = "set" | "parsed";
type GenericContent = "content";
type ExludedGenericEventNames = Prefix<GenericContentPrefix, Prefix<" ", GenericContent>>;
type CamelCasedGenericEventNames = Prefix<GenericContentPrefix, Capitalize<GenericContent>>;

type GenericEventNames =
    | Exclude<Blessed.Widgets.NodeGenericEventType, ExludedGenericEventNames>
    | CamelCasedGenericEventNames;

type ProgressBarEventNames = Parameters<Blessed.Widgets.ProgressBarElement["on"]>[0];

type SpreadableArgs<T, K = T extends unknown[] ? T : [T]> = K;

interface EventHandler<T> {
    (...args: SpreadableArgs<T>): void;
}

// event args need to be manually typed because Blessed.Widgets.NodeWithEvents
// overloads the event handlers (making it impossible? to extract the
// parameters with TS utils) and does not expose the event callbacks as
// importable types

export type ScreenEvent = Blessed.Widgets.Screen;
export type ScreenEventHandler = EventHandler<ScreenEvent>;
type ScreenEventProps = EventHandlerProp<ScreenEventNames, ScreenEventHandler>;

export type MouseEvent = Blessed.Widgets.Events.IMouseEventArg;
export type MouseEventHandler = EventHandler<MouseEvent>;
type MouseEventProps = EventHandlerProp<Blessed.Widgets.NodeMouseEventType, MouseEventHandler>;

export type GenericEvent = undefined;
export type GenericEventHandler = EventHandler<GenericEvent>;
type GenericEventProps = EventHandlerProp<GenericEventNames, GenericEventHandler>;

export type KeyPressEvent = [key: any, event: Blessed.Widgets.Events.IKeyEventArg];
export type KeyPressEventHandler = EventHandler<KeyPressEvent>;
type KeyPressEventProps = EventHandlerProp<"keypress", KeyPressEventHandler>;

export type WarningEvent = string;
export type WarningEventHandler = EventHandler<WarningEvent>;
type WarningEventProps = EventHandlerProp<"warning", WarningEventHandler>;

export type ProgressBarEvent = undefined;
export type ProgressBarEventHandler = EventHandler<ProgressBarEvent>;
type ProgressBarEventProps = EventHandlerProp<ProgressBarEventNames, ProgressBarEventHandler>;
interface EventProps
    extends ScreenEventProps,
        GenericEventProps,
        MouseEventProps,
        KeyPressEventProps,
        WarningEventProps {}

/* BLESSED-REACT LOCALLY DEFINED PROPS **************************************/

// @types/blessed defines 'styles' as 'any' but 'blessed' can only can only
// take certain values. define them here.

interface BorderStyle {
    type?: "line" | "bg";
    ch?: string;
    bg?: string;
    fg?: string;
    bold?: boolean;
    underline?: boolean;
}
interface ItemStyle {
    bg?: string;
    fg?: string;
    bold?: boolean;
    underline?: boolean;
    blink?: boolean;
    inverse?: boolean;
    invisible?: boolean;
}
interface ListStyle extends ElementStyle {
    selected?: ItemStyle;
    item?: ItemStyle;
}
interface ProgressBarStyle extends ElementStyle {
    bar?: { bg?: string; fg?: string };
}
interface ElementStyle extends ItemStyle {
    border?: BorderStyle;
    focus?: { bg?: string; fg?: string };
    hover?: { bg?: string; fg?: string };
    transparent?: boolean;
    scrollbar?: { bg?: string; fg?: string; track?: { bg?: string; fg?: string } };
}

// remove indexers
// https://stackoverflow.com/questions/51465182/how-to-remove-index-signature-using-mapped-types
type KnownKeys<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};

type WithClassProp<T, K = T | undefined | false | null> = T & { class?: K | K[] };
type ProgressBarProps<T> = T extends ProgressBarElement ? ProgressBarEventProps & { style?: ProgressBarStyle } : {};
type ListProps<T> = T extends ListElement ? ProgressBarEventProps & { style?: ListStyle; selected?: number } : {};
// layout does not require prop 'layout' in Blessed.Widgets.LayoutOptions--make it optional
type LayoutProps<T> = T extends LayoutElement ? Partial<Blessed.Widgets.LayoutOptions> : {};

// remove {[key: string]: any} indexer defined in Blessed.Widgets.IOptions.
// 'blessed' doesn't exist in a DOM so it probably doesn't make sense to allow any property
type FilterOptions<T extends Record<any, any>> = Partial<Omit<KnownKeys<T>, "style" | "children">>;

type ModifiedBlessedOptions<T extends Record<any, any>> = FilterOptions<T> & { children?: React.ReactNode; style?: ElementStyle } & EventProps;

/* REACT-BLESSED JSX ********************************************************/

/**
 *
 * this type can be used to get props for 'react-blessed' elements in the same
 * manner that React.HTMLProps can be used to get DOM element props. e.g.
 * ```ts
 * import { FC } from 'react'
 * import { BlessedProps, BoxElement } from 'react-blessed';
 * type MyBoxProps = BlessedProps<BoxElement>;
 * const MyBox: React.FC<MyBoxProps> = props => <box {...props} />;
 * ```
 * @see DetailedBlessedProps
 * @see React.HTMLAttributes
 */
export type BlessedAttributes<E extends Element> = WithClassProp<
    ModifiedBlessedOptions<E["options"]> & ProgressBarProps<E> & ListProps<E> & LayoutProps<E>
>;

/**
 * mirrors react prop generation for HTML JSX.IntrinsicElements.
 * @see React.DetailedHTMLProps
 */
export type DetailedBlessedProps<E extends Element> = BlessedAttributes<E> & React.ClassAttributes<E>;

export interface BlessedIntrinsicElements {
    element: DetailedBlessedProps<Element>;
    box: DetailedBlessedProps<BoxElement>;
    scrollablebox: DetailedBlessedProps<ScrollableBoxElement>;
    scrollabletext: DetailedBlessedProps<ScrollableTextElement>;
    bigtext: DetailedBlessedProps<BigTextElement>;
    list: DetailedBlessedProps<ListElement>;
    filemanager: DetailedBlessedProps<FileManagerElement>;
    listtable: DetailedBlessedProps<ListTableElement>;
    listbar: DetailedBlessedProps<ListbarElement>;
    textbox: DetailedBlessedProps<TextboxElement>;
    checkbox: DetailedBlessedProps<CheckboxElement>;
    radioset: DetailedBlessedProps<RadioSetElement>;
    radiobutton: DetailedBlessedProps<RadioButtonElement>;
    prompt: DetailedBlessedProps<PromptElement>;
    question: DetailedBlessedProps<QuestionElement>;
    message: DetailedBlessedProps<MessageElement>;
    loading: DetailedBlessedProps<LoadingElement>;
    log: DetailedBlessedProps<LogElement>;
    progressbar: DetailedBlessedProps<ProgressBarElement>;
    terminal: DetailedBlessedProps<Blessed.Widgets.TerminalElement>;
    layout: DetailedBlessedProps<Blessed.Widgets.LayoutElement>;
    // escape: Blessed.escape is not an element
    // program: Blessed.Widgets.Program is not an element
}

// 'react-blessed' accepts JSX with 'blessed' element names with and without
// a 'blessed-' prefix. see
// https://github.com/Yomguithereal/react-blessed/blob/f5e1f791dea1788745695d557040b91f573f9ef5/src/fiber/fiber.js#L49
export type BlessedIntrinsicElementsPrefixed = {
    [Key in keyof BlessedIntrinsicElements as Prefix<"blessed-", Key>]: BlessedIntrinsicElements[Key];
};

// it isn't possible to use the global JSX namespace because some 'blessed'
// elements will collide with ones set in react defs.

// augment react JSX when old JSX transform is used
declare module "react" {
    namespace JSX {
        interface ButtonHTMLAttributes<T>
            extends HTMLAttributes<T>,
                Omit<
                    DetailedBlessedProps<ButtonElement>,
                    'draggable' | 'onBlur' | 'onClick' | 'onFocus' | 'onResize' | 'ref' | 'style'
                > {}

        interface TableHTMLAttributes<T>
            extends HTMLAttributes<T>,
                Omit<
                    DetailedBlessedProps<TableElement>,
                    'border' | 'draggable' | 'onBlur' | 'onClick' | 'onFocus' | 'onResize' | 'ref' | 'style'
                > {}

        interface TextareaHTMLAttributes<T>
            extends HTMLAttributes<T>,
                Omit<
                    DetailedBlessedProps<TextElement>,
                    'draggable' | 'fill' | 'focusable' | 'onBlur' | 'onClick' | 'onFocus' | 'onResize' | 'ref' | 'style'
                > {}

        interface InputHTMLAttributes<T>
            extends HTMLAttributes<T>,
                Omit<
                    DetailedBlessedProps<InputElement>,
                    'draggable' | 'onBlur' | 'onClick' | 'onFocus' | 'onResize' | 'ref' | 'style'
                > {}

        interface SVGLineElementAttributes<T>
            extends SVGProps<T>,
                Omit<
                    DetailedBlessedProps<LineElement>,
                    'focusable' | 'onBlur' | 'onClick' | 'onFocus' | 'onResize' | 'orientation' | 'ref' | 'style'
                > {}

        interface SVGTextElementAttributes<T>
            extends SVGProps<T>,
                Omit<
                    DetailedBlessedProps<TextElement>,
                    'fill' | 'focusable' | 'onBlur' | 'onClick' | 'onFocus' | 'onResize' | 'ref' | 'style'
                > {}

        // set IntrinsicElements to 'react-blessed' elements both with and without
        // 'blessed-' prefix
        interface IntrinsicElements extends BlessedIntrinsicElementsPrefixed, BlessedIntrinsicElements {}
    }
}

// augment react/jsx-runtime JSX when new JSX transform is used
declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements extends BlessedIntrinsicElementsPrefixed, BlessedIntrinsicElements {}
    }
}
declare module "react/jsx-dev-runtime" {
    namespace JSX {
        interface IntrinsicElements extends BlessedIntrinsicElementsPrefixed, BlessedIntrinsicElements {}
    }
}

// Type definitions for react-burger-menu 2.8
// Project: https://github.com/negomi/react-burger-menu
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
//                 David Acevedo <https://github.com/dacevedo12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface HoverState {
    isMouseIn: boolean;
}

export interface State {
    isOpen: boolean;
}

export interface Styles {
    bmBurgerBars: Partial<CSSStyleDeclaration>;
    bmBurgerButton: Partial<CSSStyleDeclaration>;
    bmCross: Partial<CSSStyleDeclaration>;
    bmCrossButton: Partial<CSSStyleDeclaration>;
    bmItemList: Partial<CSSStyleDeclaration>;
    bmMenuWrap: Partial<CSSStyleDeclaration>;
    bmMenu: Partial<CSSStyleDeclaration>;
    bmMorphShape: Partial<CSSStyleDeclaration>;
    bmOverlay: Partial<CSSStyleDeclaration>;
}

export interface Props {
    bodyClassName?: string | undefined;
    burgerBarClassName?: string | undefined;
    burgerButtonClassName?: string | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    crossButtonClassName?: string | undefined;
    crossClassName?: string | undefined;
    customBurgerIcon?: JSX.Element | false | undefined;
    customCrossIcon?: JSX.Element | false | undefined;
    customOnKeyDown?(event: React.KeyboardEvent): void;
    disableAutoFocus?: boolean | undefined;
    disableCloseOnEsc?: boolean | undefined;
    disableOverlayClick?: boolean | (() => boolean) | undefined;
    htmlClassName?: string | undefined;
    id?: string | undefined;
    isOpen?: boolean | undefined;
    itemClassName?: string | undefined;
    itemListClassName?: string | undefined;
    itemListElement?: "div" | "nav" | undefined;
    menuClassName?: string | undefined;
    morphShapeClassName?: string | undefined;
    noOverlay?: boolean | undefined;
    noTransition?: boolean | undefined;
    onClose?: (() => void) | undefined;
    onIconHoverChange?: ((state: HoverState) => void) | undefined;
    onOpen?: (() => void) | undefined;
    onStateChange?(state: State): void;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.outerContainer ? PropTypes.string.isRequired : PropTypes.string
    outerContainerId?: string | undefined;
    overlayClassName?: string | undefined;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.pageWrap ? PropTypes.string.isRequired : PropTypes.string,
    pageWrapId?: string | undefined;
    right?: boolean | undefined;
    styles?: Partial<Styles> | undefined;
    width?: number | string | undefined;
}

export class ReactBurgerMenu extends React.Component<Props> {}

export class slide extends ReactBurgerMenu {}
export class stack extends ReactBurgerMenu {}
export class elastic extends ReactBurgerMenu {}
export class bubble extends ReactBurgerMenu {}
export class push extends ReactBurgerMenu {}
export class pushRotate extends ReactBurgerMenu {}
export class scaleDown extends ReactBurgerMenu {}
export class scaleRotate extends ReactBurgerMenu {}
export class fallDown extends ReactBurgerMenu {}
export class reveal extends ReactBurgerMenu {}

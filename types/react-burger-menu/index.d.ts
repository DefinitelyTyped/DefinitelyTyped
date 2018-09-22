// Type definitions for react-burger-menu 2.2
// Project: https://github.com/negomi/react-burger-menu
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface State {
    isOpen: boolean;
}

export interface Styles {
    bmBurgerBars: Partial<CSSStyleDeclaration>;
    bmBurgerButton: Partial<CSSStyleDeclaration>;
    bmCross: Partial<CSSStyleDeclaration>;
    bmCrossButton: Partial<CSSStyleDeclaration>;
    bmItemList: Partial<CSSStyleDeclaration>;
    bmMenu: Partial<CSSStyleDeclaration>;
    bmMorphShape: Partial<CSSStyleDeclaration>;
    bmOverlay: Partial<CSSStyleDeclaration>;
}

export interface Props {
    bodyClassName?: string;
    burgerBarClassName?: string;
    burgerButtonClassName?: string;
    crossButtonClassName?: string;
    crossClassName?: string;
    customBurgerIcon?: JSX.Element | false;
    customCrossIcon?: JSX.Element | false;
    disableOverlayClick?: boolean;
    id?: string;
    isOpen?: boolean;
    itemListClassName?: string;
    menuClassName?: string;
    morphShapeClassName?: string;
    noOverlay?: boolean;
    onStateChange?(state: State): void;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.outerContainer ? PropTypes.string.isRequired : PropTypes.string
    outerContainerId?: string;
    overlayClassName?: string;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.pageWrap ? PropTypes.string.isRequired : PropTypes.string,
    pageWrapId?: string;
    right?: boolean;
    styles?: Styles;
    width?: number | string;
}

export class ReactBurgerMenu extends React.Component<Props> { }

export class slide extends ReactBurgerMenu { }
export class stack extends ReactBurgerMenu { }
export class elastic extends ReactBurgerMenu { }
export class bubble extends ReactBurgerMenu { }
export class push extends ReactBurgerMenu { }
export class pushRotate extends ReactBurgerMenu { }
export class scaleDown extends ReactBurgerMenu { }
export class scaleRotate extends ReactBurgerMenu { }
export class fallDown extends ReactBurgerMenu { }
export class reveal extends ReactBurgerMenu { }

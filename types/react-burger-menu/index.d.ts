// Type definitions for react-burger-menu 2.1
// Project: https://github.com/negomi/react-burger-menu
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface State {
  isOpen: boolean;
}

export interface Props {
    burgerBarClassName?: string;
    burgerButtonClassName?: string;
    crossButtonClassName?: string;
    crossClassName?: string;
    customBurgerIcon?: JSX.Element | false;
    customCrossIcon?: JSX.Element | false;
    id?: string;
    isOpen?: boolean;
    itemListClassName?: string;
    menuClassName?: string;
    morphShapeClassName?: string;
    noOverlay?: boolean;
    disableOverlayClick?: boolean;
    onStateChange?(state: State): void;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.outerContainer ? PropTypes.string.isRequired : PropTypes.string
    outerContainerId?: string;
    overlayClassName?: string;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.pageWrap ? PropTypes.string.isRequired : PropTypes.string,
    pageWrapId?: string;
    right?: boolean;
    styles?: {
        bmBurgerButton: CSSStyleDeclaration;
        bmBurgerBars: CSSStyleDeclaration;
        bmCrossButton: CSSStyleDeclaration;
        bmCross: CSSStyleDeclaration;
        bmMenu: CSSStyleDeclaration;
        bmMorphShape: CSSStyleDeclaration;
        bmItemList: CSSStyleDeclaration;
        bmOverlay: CSSStyleDeclaration;
    };
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

// Type definitions for react-burger-menu 2.1
// Project: https://github.com/negomi/react-burger-menu
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

// TODO (Rajab) actually I don't want export Props, but
// `npm run lint react-burger-menu` error doesn't allow me to do it;
export interface Props {
    burgerBarClassName?: string;
    burgerButtonClassName?: string;
    crossButtonClassName?: string;
    crossClassName?: string;
    customBurgerIcon?: Element | false;
    customCrossIcon?: Element | false;
    id?: string;
    isOpen?: boolean;
    itemListClassName?: string;
    menuClassName?: string;
    morphShapeClassName?: string;
    noOverlay?: boolean;
    onStateChange?(): void;
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

// TODO (Rajab) actually I don't want export ReactBurgerMenu, but
// `npm run lint react-burger-menu` error doesn't allow me to do it;
export class ReactBurgerMenu extends React.Component<Props, {}> { }

export class slide extends ReactBurgerMenu { }
export class stack extends ReactBurgerMenu { }
export class elastic extends ReactBurgerMenu { }
export class bubble extends ReactBurgerMenu { }
export class push extends ReactBurgerMenu { }
export class pushRotate extends ReactBurgerMenu { }
export class scaleDown extends ReactBurgerMenu { }
export class scaleRotate extends ReactBurgerMenu { }
export class fallDown extends ReactBurgerMenu { }

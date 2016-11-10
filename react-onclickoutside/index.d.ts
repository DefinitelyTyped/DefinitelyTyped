// Type definitions for react-onclickoutside v5.7.0
// Project: https://github.com/Pomax/react-onclickoutside
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactOnClickOutside {
    import React = __React

    interface OnClickOutsideComponent {
        handleClickOutside(e: React.MouseEvent): void
    }

    interface OnClickOutsideProps {
        disableOnClickOutside?: boolean | Function
        enableOnClickOutside?: Function
        eventTypes?: string | Array<string>
        outsideClickIgnoreClass?: string
        preventDefault?: boolean
        stopPropagation?: boolean
    }

    interface onClickOutside {
        <A>(component: React.ComponentClass<A> | React.StatelessComponent<A>): React.ComponentClass<A & OnClickOutsideProps>
    }
}

declare module "react-onclickoutside" {
    const onClickOutside: ReactOnClickOutside.onClickOutside
    export = onClickOutside
}

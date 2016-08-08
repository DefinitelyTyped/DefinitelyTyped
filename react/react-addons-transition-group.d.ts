// Type definitions for React v0.14 (react-addons-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {

    interface TransitionGroupProps {
        component?: ReactType;
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    type TransitionGroup = ComponentClass<TransitionGroupProps>;

    namespace __Addons {
        export var TransitionGroup: __React.TransitionGroup;
    }
}

declare module "react-addons-transition-group" {
    var TransitionGroup: __React.TransitionGroup;
    type TransitionGroup = __React.TransitionGroup;
    export = TransitionGroup;
}

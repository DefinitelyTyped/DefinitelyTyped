// Type definitions for rackt/react-redux v2.1.0
// Project: https://github.com/rackt/react-redux
// Definitions by: Jamie Winder <https://github.com/jamiewinder/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module ReactRedux {

    // Connect
    type MapStateToPropsFunc = (state: any, ownProps?: boolean) => Object;
    type MapDispatchToPropsFunc = (dispatch: any, ownProps?: boolean) => Object;
    type MergePropsFunc = (stateProps: any, dispatchProps: any, ownProps: boolean) => Object;

    interface ConnectOptions {
        pure: boolean
    }

    function connect(
        mapStateToProps?: MapStateToPropsFunc,
        mapDispatchToProps?: Object | MapDispatchToPropsFunc,
        mergeProps?: MergePropsFunc,
        options?: ConnectOptions
    ): void;

    // Provider
    class Provider extends __React.Component<any, any>
    {
    }
}

declare module "react-redux" {
    export = ReactRedux;
}

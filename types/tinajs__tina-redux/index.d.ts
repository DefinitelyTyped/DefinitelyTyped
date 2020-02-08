// Type definitions for @tinajs/tina-redux 1.4
// Project: https://github.com/tinajs/tina-redux
// Definitions by: Jiayu Liu <https://github.com/Jimexist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tinajs__tina-redux
// TypeScript Version: 2.8

import { Store, Dispatch, Action } from "redux";

type MapStateToProps = (state: any) => any;
type mapDispatchToProps = (dispatch: Dispatch) => any;

interface HOC {
    onLoad: () => void;
    onUnload: () => void;
    methods: object;
}

declare class TinaRedux<S, A extends Action> {
    constructor(reduxStore: Store<S, A>);
    connect(mapState?: MapStateToProps, mapDispatch?: mapDispatchToProps): HOC;
}

export = TinaRedux;

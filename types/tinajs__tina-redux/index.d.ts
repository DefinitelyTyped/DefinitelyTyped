import { Action, Dispatch, Store } from "redux";

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

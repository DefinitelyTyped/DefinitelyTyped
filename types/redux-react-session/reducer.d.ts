export interface SessionState {
    authenticated: boolean;
    checked: boolean;
    invalid: boolean;
    user: any;
}

declare function reducer(state: SessionState, action: any): SessionState;

export default reducer;

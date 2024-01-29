import { Action } from "redux";
import { SessionState } from "./reducer";

export const initialState: SessionState;
export default immutableReducer;
declare function immutableReducer(state: SessionState, action: Action): SessionState;

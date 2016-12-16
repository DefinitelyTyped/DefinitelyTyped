import { Reducer } from "redux";
import { default as recycleState } from "redux-recycle";

const reducer: Reducer<any> = (state: any, action: any) => ({})
const otherReducer: Reducer<any> = (state: any, action: any) => ({})

const resetReducer: Reducer<any> = recycleState(reducer, ["reset"], {})
const resetToOtherReducer: Reducer<any> = recycleState(reducer, ["reset"], otherReducer)

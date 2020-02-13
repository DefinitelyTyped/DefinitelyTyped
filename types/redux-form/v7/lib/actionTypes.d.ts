export interface ActionTypes {
    ARRAY_INSERT: string;
    ARRAY_MOVE: string;
    ARRAY_POP: string;
    ARRAY_PUSH: string;
    ARRAY_REMOVE: string;
    ARRAY_REMOVE_ALL: string;
    ARRAY_SHIFT: string;
    ARRAY_SPLICE: string;
    ARRAY_UNSHIFT: string;
    ARRAY_SWAP: string;
    AUTOFILL: string;
    BLUR: string;
    CHANGE: string;
    CLEAR_SUBMIT: string;
    CLEAR_SUBMIT_ERRORS: string;
    CLEAR_ASYNC_ERROR: string;
    CLEAR_FIELDS: string;
    DESTROY: string;
    FOCUS: string;
    INITIALIZE: string;
    REGISTER_FIELD: string;
    RESET: string;
    RESET_SECTION: string;
    SET_SUBMIT_FAILED: string;
    SET_SUBMIT_SUCCEEDED: string;
    START_ASYNC_VALIDATION: string;
    START_SUBMIT: string;
    STOP_ASYNC_VALIDATION: string;
    STOP_SUBMIT: string;
    SUBMIT: string;
    TOUCH: string;
    UNREGISTER_FIELD: string;
    UNTOUCH: string;
    UPDATE_SYNC_ERRORS: string;
    UPDATE_SYNC_WARNINGS: string;
}

export const actionTypes: ActionTypes;

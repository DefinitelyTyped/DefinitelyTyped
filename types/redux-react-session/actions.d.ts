import {
    GET_SESSION_ERROR,
    GET_SESSION_SUCCESS,
    GET_USER_SESSION_ERROR,
    GET_USER_SESSION_SUCCESS,
    INVALID_SESSION,
} from "./actionTypes";

export interface GetSessionSuccessAction {
    type: typeof GET_SESSION_SUCCESS;
}

export interface GetSessionErrorAction {
    type: typeof GET_SESSION_ERROR;
}

export interface GetUserSessionSuccessAction<UserType> {
    type: typeof GET_USER_SESSION_SUCCESS;
    user: UserType;
}

export interface GetUserSessionErrorAction {
    type: typeof GET_USER_SESSION_ERROR;
}

export interface InvalidSessionAction {
    type: typeof INVALID_SESSION;
}

export function getSessionSuccess(): GetSessionSuccessAction;
export function getSessionError(): GetSessionErrorAction;
export function getUserSessionSuccess<UserType>(user: UserType): GetUserSessionSuccessAction<UserType>;
export function getUserSessionError(): GetUserSessionErrorAction;
export function invalidSession(): InvalidSessionAction;

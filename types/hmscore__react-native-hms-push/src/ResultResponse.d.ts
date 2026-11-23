import { HmsPushResultCodeEnum } from "./HmsPushResultCode";

export interface ResultResponse<T> {
    result: T;
    resultCode: HmsPushResultCodeEnum;
}

export interface ErrorResponse {
    nativeStackAndroid: any;
    userInfo: null | object;
    message: string;
    code: HmsPushResultCodeEnum;
}

import { HmsPushResultCodeEnum } from "./HmsPushResultCode";

export interface ResultResponse<T> {
    result: T;
    result_code: HmsPushResultCodeEnum;
}

export interface ErrorResponse {
    nativeStackAndroid: any;
    userInfo: null | object;
    message: string;
    code: HmsPushResultCodeEnum;
}

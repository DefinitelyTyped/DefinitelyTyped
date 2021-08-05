import { HmsPushResultCode } from './HmsPushResultcode';

export interface ResultResponse<T> {
    result: T;
    result_code: HmsPushResultCode;
}

export interface ErrorResponse {
    nativeStackAndroid: any;
    userInfo: null | object;
    message: string;
    code: HmsPushResultCode;
}

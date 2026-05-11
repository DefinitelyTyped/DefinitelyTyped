/**
 * API 请求类型
 */
type RequestType = "GET" | "POST";

/**
 * API 请求参数
 */
interface RequestParams {
    url: string;
    type?: RequestType;
    params?: object;
    header?: object;
}

/**
 * API 返回值
 */
interface RequestResponse {
    code: number;
    message: string;
    data: any;
}

export default class XMLY {
    /**
     * 通用请求方法，支持开放平台对外输出的所有接口请求。
     * 这是一个万金油方法，只要 url 对了，都可以请求通；
     *
     * @param param0
     * @param param0.url 请求 url
     * @param param0.type 请求类型
     * @param param0.params 业务参数
     */
    request({ url, type, params }: RequestParams): Promise<RequestResponse>;
    /**
     * 通用请求方法 - 快捷方法 - get
     * @param url 请求 url
     * @param params  业务参数
     */
    get(url?: string, params?: object): Promise<RequestResponse>;
    /**
     * 通用请求方法 - 快捷方法 - post
     * @param url 请求 url
     * @param params 业务参数
     */
    post(url?: string, params?: object): Promise<RequestResponse>;
    /**
     *  绑定第三方账户，需要当前已登陆喜马账号
     *  @param uid 第三方账户id
     */
    bindThirdUid(uid: string): Promise<RequestResponse>;
    /**
     *  解绑第三方账户，需要当前已登陆喜马账号
     *  @param uid 第三方账户id
     */
    unbindThirdUid(uid: string): Promise<RequestResponse>;
}

export = DevAuthToken;
/**
 * devAuthToken类
 * 百度开发者token信息包装类
 *
 * @param {string} token access_token
 * @param {number} expireTime 多久之后过期
 * @param {string} scope 权限
 */
declare class DevAuthToken {
    constructor(token: string, expireTime: number, scope: string);
    token: any;
    expireTime: any;
    scope: any;
    authDate: Date;
    hasScopeFlag: boolean;
    initScope(): void;
    hasScope(scope: any): boolean;
    isExpired(): boolean;
}
declare namespace DevAuthToken {
    /**
     * 设置提前获取access_token的时间
     */
    function setExpireAhead(duration: any): void;
    let DEFAULT_EXPIRE_DURATION: number;
}

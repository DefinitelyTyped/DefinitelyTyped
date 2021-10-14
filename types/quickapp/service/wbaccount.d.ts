/**
 * 微博账户 [1010+]
 * 接口声明: {"name": "service.wbaccount"}
 */
declare module '@service.wbaccount' {
    /**
     * 获取当前的微博登录方式
     * @returns string APP: SSO授权：在有微博客户端的情况下，同时手机系统支持时，使用SSO授权登陆; WEB: Web授权：不支持SSO授权时，使用webview形式授权; NONE: 当前无可用的微博登陆方式;
     */
    function getType(): string;

    /**
     * 发起微信登陆，调用之前应该先使用getType函数查询APP登陆方式是否被支持
     * @param obj
     *  redirectUri 授权回调地址，与微博开放平台配置保持一致，默认可填写 https://api.weibo.com/oauth2/default.html
     *  scope 申请scope权限所需参数，可一次申请多个scope权限，用逗号分隔。示例：follow_app_official_microblog
     *  success 成功回调
     *  fail 失败回调
     *  cancel 取消回调
     */
    function authorize(obj: {
        /**
         * 授权回调地址，与微博开放平台配置保持一致，默认可填写 https://api.weibo.com/oauth2/default.html
         */
        redirectUri: string;
        /**
         * 申请 scope 权限所需参数，可一次申请多个 scope 权限，用逗号分隔。示例：follow_app_official_microblog，
         * [可参考：http://open.weibo.com/wiki/Scope ]
         */
        scope?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 授权 token
             */
            accessToken: string;
            /**
             * 过期时间
             */
            expiresIn: number;
            /**
             * 用户 uid
             */
            uid: string;
            /**
             * 刷新 token，可用于刷新授权 token 有效期
             */
            refreshToken: string;
            /**
             * 用户输入的手机号码
             */
            phone: string;
        }) => void;
        /**
         * 失败回调
         * -2004: 用户拒绝授权
         * -2006: 微信错误码-6，该操作被微信屏蔽，原因是 rpk 签名和微信后台签名不符或者无权限
         * 1000: 微信未安装
         * 1001: 接口声明中没有配置 appId
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
    }): void;
}

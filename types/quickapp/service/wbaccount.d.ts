/**
 * 微博账户 [1010+]
 * 接口声明: {"name": "service.wbaccount"}
 * @link https://doc.quickapp.cn/features/service/wbaccount.html
 */
declare module "@service.wbaccount" {
    /**
     * 获取当前的微博登录方式
     * @returns
     * |返回值|备注|
     * |:-|:-|
     * |APP|SSO 授权：在有微博客户端的情况下，同时手机系统支持时，使用 SSO 授权登陆|
     * |WEB|Web 授权：不支持 SSO 授权时，使用 webview 形式授权|
     * |NONE|当前无可用的微博登陆方式|
     */
    function getType(): "APP" | "WEB" | "NONE";

    interface AuthorizeOptions {
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
        success?: (data: AuthorizeSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
    }

    interface AuthorizeSuccessOptions {
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
    }

    /**
     * 发起微信登陆，调用之前应该先使用getType函数查询APP登陆方式是否被支持
     */
    function authorize(obj: AuthorizeOptions): void;
}

declare module "quickapp:@service.wbaccount" {
    export * from "@service.wbaccount";
}

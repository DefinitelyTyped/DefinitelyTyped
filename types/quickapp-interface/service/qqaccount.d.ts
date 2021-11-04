/**
 * QQ账户
 * [1010+]
 * 接口声明: {"name": "service.qqaccount"}
 */
declare module '@service.qqaccount' {
    /**
     * 获取当前的QQ登陆方式
     * @returns string APP: QQ的app登陆方式; WEB: QQ的网页登陆方式; none: 当前无可用的QQ登陆方式;
     */
    function getType(): string;

    /**
     * 发起qq登陆，不同的登陆方式下，应该传入不同的参数，调用之前应该先使用getType函数查询当前的登陆方式．
     * @param obj
     */
    function authorize(obj: {
        /**
         * client 端的状态值。用于第三方应用防止 CSRF 攻击，成功授权后回调时会原样带回。请务必严格按照流程检查用户与 state 参数状态的绑定。app 方式下不使用该参数
         */
        state: string;
        /**
         * 授权回调地址,APP 方式下,不使用该参数
         */
        redirectUri: string;
        /**
         * 请求用户授权时向用户显示的可进行授权的列表。可填写的值是API 文档中列出的接口，以及一些动作型的授权（目前仅有：do_like），如果要填写多个接口名称，请用逗号隔开
         * [详见: https://wiki.open.qq.com/wiki/website/API%E5%88%97%E8%A1%A8 ]
         */
        scope?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * QQ 回调给出的完整 url,仅在网页方式下会返回
             */
            url: string;
            /**
             * 用于换取 accessToken 的 Authorization_Code,仅在网页方式下会返回，通过 code 换取 AccessToken 的方法参考QQ 的文档
             */
            code: string;
            /**
             * 原始的 state 值,仅在网页方式下会返回
             */
            state: string;
            /**
             * QQ 登陆后给该用户的唯一标示,仅在 app 方式下会返回
             */
            openId: string;
            /**
             * 用于访问 api 的 accessToken,仅在 app 方式下会返回
             */
            accessToken: string;
            /**
             * accessToken 的有效时长，以秒为单位
             */
            expiresIn: number;
        }) => void;
        /**
         * 失败回调
         * 1000: 来自 QQ 的未知错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
    }): void;
}

/**
 * 微信账户
 * 接口声明: {"name": "service.wxaccount"}
 */
declare module '@service.wxaccount' {
    /**
     * 获取当前的微信登陆方式
     * @returns string APP: 微信app登陆方式; none: 当前微信登录不可用，微信未安装或者手机系统不支持;
     */
    function getType(): string;

    /**
     * 发起微信登陆，调用之前应该先使用getType函数查询APP登陆方式是否被支持
     * @param obj
     *  scope 应用授权作用域，如获取用户个人信息则填写snsapi_userinfo
     *  state 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验
     *  success 成功回调
     *  fail 失败回调
     *  cancel 取消回调
     */
    function authorize(obj: {
        /**
         * 应用授权作用域，如获取用户个人信息则填写 snsapi_userinfo，微信关于 scope 的说明
         * [详见: https://open.weixin.qq.com/cgi-bin/showdocument?action=doc&id=open1419317851&t=0.8029775868076203#scope ]
         */
        scope: string;
        /**
         * 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止 csrf 攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加 session 进行校验
         */
        state?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 用于换取 accessToken 的 code，方法参考微信的文档
             * [详见: https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317853&token=&lang=zh_CN ]
             */
            code: string;
            /**
             * 第三方程序发送时用来标识其请求的唯一性的标志，由第三方程序调用 sendReq 时传入，由微信终端回传，state 字符串长度不能超过 1K
             */
            state: string;
            /**
             * 微信客户端当前语言
             */
            lang: string;
            /**
             * 微信用户当前国家信息
             */
            country: string;
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

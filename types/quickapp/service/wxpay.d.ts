/**
 * 微信支付
 * 接口声明: {"name": "service.wxpay"}
 */
declare module '@service.wxpay' {
    /**
     * 获取当前可用的微信支付调用方式
     * @returns APP: 微信app调用方式，服务端向微信支付下单时，trade_type需要是APP; MWEB: 微信网页调用方式，服务端向微信支付下单时，trade_type需要是MWEB; none: 微信未安装; 返回值为APP时, 开发者将只能使用app方式, 不能使用网页方式
     */
    function getType(): string;

    /**
     * 发起微信支付
     * @param obj
     */
    function pay(obj: {
        /**
         * 微信支付服务器生成的预支付订单 id，参考微信 app 支付和微信网页支付
         */
        prepayid: string;
        /**
         * 在微信支付后台配置的域名。从1040版本开始，在使用微信网页方式调用时，若该参数不为空，将通过直接设置referer的方式拉起微信客户端
         * [1040+]
         */
        referer?: string;
        /**
         * 当前支付方式下，需要填入的额外订单信息，具体见下文的 extra 参数说明
         */
        extra: {
            /**
             * 微信支付订单中的 app_id
             */
            app_id?: string;
            /**
             * 微信支付订单中的 partner_id
             */
            partner_id?: string;
            /**
             * 微信支付订单中的 package_value
             */
            package_value?: string;
            /**
             * 微信支付订单中的 nonce_str
             */
            nonce_str?: string;
            /**
             * 微信支付订单中的 time_stamp
             */
            time_stamp?: string;
            /**
             * 微信支付订单中的 order_sign
             */
            order_sign?: string;
            /**
             * 在微信的支付服务器下单以后，微信返回的 MWEB_URL，在 CP 用于微信支付的 h5 页面中，直接将 mweb_url 取出后跳转过去即可，但这个做法并不是强制的，您也可以通过其他自定义键值向您自己的服务器换取 MWEB_URL。从1040版本开始，若使用直接设置referer的方式拉起微信客户端支付，则此参数必选
             */
            mweb_url?: string;
            /**
             * 其他的自定义键值，cp 可以根据需要增加其他自己认为需要的键名和键值
             */
            custome_key?: string;
        };
        /**
         * 成功后的回调函数，App 方式下，回调发生在用户支付完成之后，网页方式下，回调发生在订单提交给微信 app 之后
         */
        success?: (data: {
            /**
             * 只在 App 支付方式下会出现，微信支付订单的 prepayId
             */
            prepayid: string;
            /**
             * 只在网页方式下会出现，拼接参数之后，最终用于打开网页的 url
             */
            final_url: string;
        }) => void;
        /**
         * 失败回调
         * 900: 在 manifest.json 中配置的应用签名有误，无法解析
         * 901: 在 manifest.json 中配置的应用包名有误
         * 1000: 微信未安装
         * 1001: 用于微信网页支付的 url 配置找不到
         * 2001: 订单已经提交给微信，但是微信返回错误, 可能的原因：签名错误、未注册 APPID、项目设置 APPID 不正确、注册的 APPID 与设置的不匹配、其他异常等。
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}

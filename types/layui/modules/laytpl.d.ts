declare namespace Layui {
    interface LayTplOptions {
        /**
         * 起始符号
         */
        open?: string;
        /**
         * 结束符号
         */
        close?: string;
    }

    interface LayTplReturn {
        tpl: string;
        /**
         * 执行解析,不常用，推荐 render
         * @param tpl  模板串
         * @param data  数据
         */
        parse(tpl: string, data: object): string;
        /**
         * 执行解析
         * @param data 数据
         * @param callback  解析后的回调，即可通过回调中参数也可通过 render 返回值获取解析后结果串
         */
        render(data: Record<string, any>, callback?: (str: string) => any): string;
    }

    /**
     * 模板引擎
     * @see https://layui.dev/docs/2/laytpl/
     */
    interface Laytpl {
        /**
         * @param tpl 模板原始字符
         * @param options 属性配置项，重新定义界定符，局部配置
         */
        (tpl: string, options?: LayTplOptions): LayTplReturn;
        /**
         * 重新定义界定符
         * 如果模版默认的 {{ }} 界定符符与你的其它模板（一般是服务端模板）存在冲突，你也可以重新定义界定符
         * @param option 例如：`{open: '<%', close: '%>'}`
         */
        config(option?: LayTplOptions): void;
    }
}

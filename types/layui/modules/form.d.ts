declare namespace Layui {
    interface LayFormData {
        /**
         * 被执行事件的元素 DOM 对象，一般为 button 对象,可能是 `input select button` 等不能用 HTMLElement
         */
        elem: HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        /**
         * 表单元素美化后的 jQuery 对象
         */
        othis: JQuery;
        /**
         * DOM 对象值
         */
        value: string;
        /**
         * 被执行提交的 form 对象，一般在存在 form 标签时才会返回
         */
        form: HTMLFormElement;
        /**
         * 当前容器的全部表单字段，名值对形式：{name: value}
         */
        field: any;
    }

    interface LayFormVerifyConfigCallback {
        /**
         * @param value 当前进入验证的表单项的值
         * @param elem 当前进入验证的表单项的 DOM 元素
         * @return 返回验证信息；返回 true 阻止默认提示风格
         */
        (
            value: string,
            elem: HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
        ): string | boolean | undefined;
    }
    interface LayFormVerifyConfig {
        [index: string]: LayFormVerifyConfigCallback | [RegExp, string];
    }

    interface FormConfig {
        /**
         * 设置表单元素的自动完成属性，等同于原生表单的 autocomplete 属性
         */
        autocomplete: string;
        /**
         * form内置的验证
         */
        verify: {
            /**
             * 日期验证 date[0] 是正则,date[1] 是验证失败的提示（"日期格式不正确"）
             */
            date: [RegExp, string];
            /**
             * 邮箱验证 email[0] 是正则,email[1] 是验证失败的提示（"邮箱格式不正确"）
             */
            email: [RegExp, string];
            /**
             * 身份证号验证 identity[0]是正则, identity[1] 是验证失败的提示（ 请输入正确的身份证号"）
             */
            identity: [RegExp, string];
            /**
             * 验证数字，如果参数不是数字则返回"只能填写数字"，是数字则无返回值
             * @param arg 参数 比如 1,"1",-1
             */
            number: (arg: any) => string | null;
            /**
             * 手机号验证 phone[0] 是正则,phone[1] 是验证失败的提示（"请输入正确的手机号"）
             */
            phone: [RegExp, string];
            /**
             * 空值验证 required[0] 是正则,required[1] 是为空的提示（"必填项不能为空"）
             */
            required: [RegExp, string];
            /**
             * url验证 url[0] 是正则,url[1] 是验证失败的提示（"链接格式不正确"）
             */
            url: [RegExp, string];
            [index: string]: [RegExp, string] | AnyFn;
        };
    }

    /**
     * 表单
     * @see https://layui.dev/docs/2/form/
     */
    interface Form {
        config: FormConfig;
        /**
         * 取值，取出所有子元素是 `input,select,textarea` 且有 `name` 属性的表单元素值
         * @param filter 表单容器 `lay-filter=""` 属性的值
         * @param itemForm 表单 field 子元素的父容器，没有则是第一个 `.layui-form` 作为父元素。实例：`$(".layui-form")`
         */
        getValue(filter: string, itemForm?: JQuery): Record<string, string>;
        /**
         * 表单 field 元素回调事件 （每个表单都有一个默认事件）
         * @param event 类似：`select(x)|checkbox(x)|switch(x)|radio(x)|submit(x)` x 为 field上的 `lay-filter="x"`
         * @param callback 回调函数
         */
        on(event: string, callback: (data: LayFormData) => any): any;
        /**
         * 渲染元素，对动态插入的元素渲染
         * @param type 对应表单组件类型，若不填，则指向所有类型
         * @param filter 对应 class="layui-form" 所在元素的 lay-filter 属性值，用于指定需渲染的表单区域
         */
        render(type?: "input" | "select" | "checkbox" | "radio" | null, filter?: string): Form;
        /**
         * 允许指定表单元素的 jQuery 对象，从而完成定向渲染。且支持两种方式的指向：
         * - 若 jQuery 对象指向表单域容器（class="layui-form"），则渲染该表单域中的所有表单项(2.8.0)
         * - 若 jQuery 对象指向的不是表单域容器，则只对该对象进行渲染
         * @example
         * ```
         * // 定向渲染（一般当表单存在动态生成时，进行渲染）
         * // 传入需要渲染的相应表单元素的 jQuery 对象
         * form.render($('#form-id')); // 渲染 id="form-id" 的表单域中的所有表单项
         * form.render($('#select-id')); // 仅渲染 id="select-id" 的表单项
         * ```
         * @param obj 表单元素的 jQuery 对象
         * @since 2.7.0
         */
        render(obj?: JQuery): Form;
        /**
         * 提交方法，可以实现在任意位置对指定表单的主动提交
         * @param filter 表单域容器的 lay-filter 属性值
         * @param callback 执行提交事件后的回调函数
         * @since 2.7.0
         */
        submit(filter: string, callback?: (data: LayFormData) => any): any;
        /**
         * 触发指定表单项的验证。验证通过，返回 true，否则返回 false
         * @param elem 元素选择器或 jQuery 对象
         * @since 2.7.0
         */
        validate(elem: string | JQuery): boolean;
        /**
         * 表单取值
         * @param filter 单域容器的 lay-filter 属性值
         */
        val(filter: string): Record<string, any>;
        /**
         * 表单赋值
         * @param filter 单域容器的 lay-filter 属性值
         * @param obj 要设置的值
         */
        val(filter: string, obj: Record<string, any>): Record<string, any>;
        /**
         * 维护表单验证
         * @param config 验证参数
         */
        verify(config: LayFormVerifyConfig): Form;
        /**
         * 设置验证规则中是否同时包含必填
         * @since 2.8.11
         * @deprecated 2.8.17 已移除
         */
        verIncludeRequired: boolean;
    }
}

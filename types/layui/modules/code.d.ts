declare namespace Layui {
    interface CodeOptions {
        /**
         * 指定元素的选择器 默认值为 `.layui-code`
         * @default '.layui-code'
         */
        elem?: string;
        /**
         * 是否开启 Code 预览功能，可选值有：
         * - `true` 开启 Code 的普通预览
         * - `false` 关闭 Code 预览（默认）
         * - `"iframe"` 开启 Code 在 iframe 模式中预览
         *
         * 当开启该\属性时，elem 指定的元素需要设置成以下结构：
         * ```html
         * <pre class="layui-code" lay-options="{}">
         *   <textarea>
         * code content
         *   </textarea>
         * </pre>
         * ```
         * @default false
         * @since 2.8.0
         */
        preview?: boolean | "iframe";
        /**
         * 开启预览后的面板布局方式，值为一个数组，数组的可选成员有：
         * - code 代码区域
         * - preview 预览区域
         *
         * 面板将根据数组的排列顺序来显示，如：
         * ```js
         * layout: ['code', 'preview']
         * ```
         * @since 2.8.0
         */
        layout?: Array<"code" | "preview">;
        /**
         * 设置 Code 和预览区域的公共样式
         * @since 2.8.0
         */
        style?: string;
        /**
         * 设置 Code 区域的局部样式，优先级高于 {@link CodeOptions.style|style} 属性
         * @since 2.8.0
         */
        codeStyle?: string;
        /**
         * 设置预览区域的局部样式，优先级高于 {@link CodeOptions.style|style} 属性
         * @since 2.8.0
         */
        previewStyle?: string;
        /**
         * 设置实例的唯一索引
         * @since 2.8.0
         */
        id?: string;
        /**
         * 追加实例面板的 `className`，以便对其自定义样式
         * @since 2.8.0
         */
        className?: string;
        /**
         * 用于开启 `preview` 属性后的面板头部右侧区域工具栏图标，值为一个数组，内置成员：
         * - `full` 最大化显示
         * - `window` 在新窗口预览。一般当 `layout: 'iframe'` 时开启，且 `code` 中须包含完整的 `HTML` 方可在新窗口正常预览
         *
         * 工具图标将根据数组的排列顺序来显示，如：
         * ```js
         * tools: ['full', 'window']
         * ```
         * 亦可自定义值，值对应图标 `className` 的 `layui-icon-` 后的名称，并通过 `toolsEvent` 回调函数中处理事件
         * 自定义扩展 2.8.17
         * @since 2.8.0
         */
        tools?: Array<"full" | "window" | { title: string[]; type: string; event: (obj: any) => void }>;
        /**
         * 点击工具栏的回调函数，函数返回 tools 设置的名称
         * @param othis 当前图标元素对象
         * @param type tools 中设置的对应值
         * @since 2.8.0
         */
        toolsEvent?(othis: JQuery, type: string): void;
        /**
         * 自定义默认文本
         * @since 2.8.0
         * @example
         * ```js
         * text: {
         *   code: '代码栏标题', // 默认:  </>
         *   preview: '预览栏标题' // 默认: Preview
         * }
         * ```
         */
        text?: { code?: string; preview?: string };
        /**
         * 是否开启 Code 栏头部区域
         * @default false
         * @since 2.8.0
         */
        header?: boolean;
        /**
         * 是否显示行号
         * @default true
         * @since 2.7.3
         */
        ln?: boolean;
        /**
         * 设定标题 默认值为code
         */
        title?: string;
        /**
         * 设置最大高度,请注意必须加px,默认无：则会自适应高度，且不会出现滚动条
         */
        height?: string;
        /**
         * 是否转义html标签
         * @default true
         */
        encode?: boolean;
        /**
         * 风格选择，默认可不填（浅色模式），若为深色模式，填写：skin:'dark'
         */
        skin?: string;
        /**
         * 自定义右上角内容，可传入任意 html
         * @deprecated 2.8.2 已弃用，请使用 {@link CodeOption.tools|tools}
         */
        about?: boolean;
        /**
         * 组件渲染完毕的回调函数
         * @param obj 参数
         * - `obj.container` 当前面板的容器对象
         * - `obj.render()` 对预览中的 `element,form` 等组件进行渲染
         * @since 2.8.0
         */
        done?(obj: { container: JQuery; options: Required<CodeOptions>; render(): void }): void;
        /**
         * 所有实例渲染完毕后的回调
         */
        allDone?(): void;
        /**
         * 开启代码复制功能图标
         * @since 2.8.2
         */
        copy?: boolean;
        /**
         * 点击复制按钮的回调函数
         * 返回 false 阻止内置提示(2.9.21+)
         * @param code 当前 code 内容
         * @param cpoied 是否复制成功(2.9.21+)
         * @since 2.8.2
         */
        onCopy?(code: string, cpoied: boolean): undefined | boolean;
        /**
         * 用于重新渲染 code，例如代码高亮处理
         * @param code 当前 code 内容
         * @param opts 当前选项
         * @since 2.8.17
         */
        codeRender?(code: string, opts: Required<CodeOptions>): string;
        /**
         * 用于解析 code 内容，例如去掉注释，替换链接等
         *
         * 内部私有方法
         * @internal
         * @param code 当前 code 内容
         * @param opts 当前选项
         * @since 2.8.0
         */
        codeParse?(code: string, opts: Required<CodeOptions>): string;
        /**
         * 指定语法高亮器，支持 `hljs,prism,shiki`
         * @since 2.8.17
         */
        highlighter?: "hljs" | "prism" | "shiki";
        /**
         * 指定语言类型
         * @since 2.8.17
         */
        lang?: string;
        /**
         * 是否在代码域右上角显示语言类型
         * @default false
         * @since 2.8.17
         */
        langMarker?: boolean;
        /**
         * 是否自动换行
         * @default true
         * @since 2.8.17
         */
        wordWrap?: boolean;
        /**
         * 设置原始 code 值，默认取目标元素中的内容
         * @since 2.8.18
         */
        code?: string;
    }

    interface CodeReturn {
        config: Required<CodeOptions>;
        reload(opts?: Partial<CodeOptions>): void;
        updateOptions(opts: Partial<CodeOptions>): Required<CodeOptions>;
        reloadCode(opts?: Partial<CodeOptions>): void;
    }

    /**
     * 代码预览
     * @see https://layui.dev/docs/2/code/
     */
    interface Code {
        /**
         * 渲染代码面板
         * @param options
         * @param _mod 传入 `reloadCode` 则重新渲染代码面板。仅供内部使用的私有属性
         */
        (options?: CodeOptions, _mod?: "reloadCode"): CodeReturn;
    }
}

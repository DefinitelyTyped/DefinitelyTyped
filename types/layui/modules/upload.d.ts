declare namespace Layui {
    interface UploadOptions {
        /**
         * 绑定元素选择器或 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 触发上传的元素
         * @deprecated 已废弃，请使用 bindAction
         */
        readonly item?: HTMLElement;
        /**
         * 服务端上传接口
         */
        url?: string;
        /**
         * 请求上传接口的额外参数,支持属性为 function 设置动态值
         * @since 2.9.3新增了函数的参数，参数: index 当前文件索引；file 当前文件对象
         */
        data?: { [index: string]: ((index?: number, file?: File) => string | number) | string | number };
        /**
         * 接口的请求头。如：`headers: {token: 'sasasas'}`
         */
        headers?: object;
        /**
         * 指定允许上传时校验的文件类型
         *
         * 可选值有：
         * - `images` 图片类型
         * - `file` 所有文件类型
         * - `video` 视频类型
         * - `audio` 音频类型
         */
        accept?: "images" | "file" | "video" | "audio";
        /**
         * 规定打开文件选择框筛选出的文件类型，多个 MIME 类型可用逗号隔开。示例：
         * ```
         * acceptMime: 'image/*' // 筛选所有图片类型
         * acceptMime: 'image/jpeg, image/png'// 只显示 jpg 和 png 文件
         * ```
         * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types|MIME类型}
         */
        acceptMime?: string;
        /**
         * 规定强制返回的数据格式
         * - 若值为 'json'，则强制校验 JSON 数据格式
         * @default null
         * @since 2.6.9
         */
        force?: string | null;
        /**
         * 允许上传的文件后缀。一般结合 accept 属性来设定。
         *
         * - 假设 accept: 'file' 类型时，那么设置 exts: 'zip|rar|7z' 即代表只允许上传压缩格式的文件。
         * - 默认为常见图片后缀，即 jpg|png|gif|bmp|jpeg|svg
         */
        exts?: string;
        /**
         * 是否选完文件后自动上传。若为 false，则需设置 bindAction 属性来指向其它按钮提交上传
         * @default true
         */
        auto?: boolean;
        /**
         * 设置触发上传的元素选择器或 DOM 对象。一般配合 auto: false 来使用
         */
        bindAction?: string | HTMLElement;
        /**
         * 文件域的字段名
         * @default 'file'
         */
        field?: string;
        /**
         * 设置文件最大可允许上传的大小，单位 KB。不支持 ie8/9 ，默认:0（即无限制）
         * @default 0
         */
        size?: number;
        /**
         * 是否允许多文件上传。设置 true即可开启。不支持 ie8/9
         * @default false
         */
        multiple?: boolean;
        /**
         * 设置同时可上传的文件数量，一般配合 multiple 参数出现。默认:0（即无限制）
         * @default 0
         */
        number?: number;
        /**
         * 更新文件域相关属性
         * @deprecated
         */
        name?: string;
        /**
         * 是否接受拖拽的文件上传，设置 false 可禁用。不支持 ie8/9
         * @default true
         */
        drag?: boolean;
        /**
         * 请求上传的 http 类型
         * @deprecated
         */
        method?: string;
        /**
         * 选择多文件时是否统一上传，即只发送一次请求
         * @default false
         * @since 2.8.8
         */
        unified?: boolean;
        /**
         * 自定义内部各类场景下的提示文本
         * @since 2.8.9
         */
        text?: UploadText;
        /**
         * 服务端返回的数据类型
         * @default 'json''
         * @since 2.8.17
         */
        dataType?: string;
        /**
         * 选择文件后的回调函数
         * @param obj 回调参数(工具对象)
         */
        choose?(this: UploadOptionsThis, obj: UploadCallbackArg): void;
        /**
         * 文件提交上传前的回调，返回 false 则停止上传
         * @since 2.9.11+ 新增支持 Promise
         * @param obj 回调参数(工具对象)
         */
        before?(this: UploadOptionsThis, obj: UploadCallbackArg): undefined | MaybePromise<boolean>;
        /**
         * 上传后的回调
         * @param res 服务端response json
         * @param index 当前文件索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param upload 上传函数
         */
        done?(this: UploadOptionsThis, res: any, index: string, upload: (files?: Blob[]) => void): void;
        /**
         * 执行上传请求出现异常的回调（一般为网络异常、URL 404等）。
         * 返回两个参数，分别为：index（当前文件的索引）、upload（重新上传的方法
         * @param index 当前文件索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param upload 上传函数
         * @param res 返回值（纯文本）2.9.13+
         * @param xhr jQuery xhr 对象 2.9.16+
         */
        error?(
            this: UploadOptionsThis,
            index: string,
            upload: (files?: Blob[]) => void,
            res: string,
            xhr: JQuery.jqXHR,
        ): void;
        /**
         *  当文件全部被提交后，才触发
         * @param obj 回调参数
         */
        allDone?(this: UploadOptionsThis, obj: UploadAllDoneArg): void;
        /**
         * 进度回调
         * @param percent 数字进度
         * @param elem render参数中的elem（即点击元素dom）
         * @param event 事件
         * @param index 当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
         */
        progress?(
            this: UploadOptionsThis,
            percent: number,
            elem: HTMLElement,
            event: ProgressEvent,
            index: string,
        ): void;
    }

    type UploadOptionsThis = Required<UploadOptions>;

    interface UploadAllDoneArg {
        /**
         * 得到总文件数
         */
        total: number;
        /**
         * 请求成功的文件数
         */
        successful: number;
        /**
         * 请求失败的文件数
         * @deprecated 使用 {@link UploadAllDoneArg.failed|failed}
         */
        aborted: number;
        /**
         * 请求失败的文件数
         */
        failed: number;
    }

    interface UploadCallbackArg {
        /**
         * 预览
         * @param callback index索引，file文件，result 文件 base64 编码
         */
        preview(callback: (index: string, file: File, result: string) => void): void;
        /**
         * 上传单个文件
         *
         * 对上传失败的单个文件重新上传，一般在某个事件中使用
         * @param index 索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param file 文件
         */
        upload(index: string, file: Blob): void;
        /**
         * 追加文件到队列, 比如 choose 回调中将每次选择的文件追加到文件队列
         */
        pushFile(): Record<string, File>;
        /**
         * 重置文件和文件名
         * @param index 被重置的文件索引 (选择文件时自动生成的：new Date().getTime()+'-'+i)
         * @param file 新的文件
         * @param filename 新的名字
         */
        resetFile(index: string, file: Blob, filename: any): void;
        /**
         * 获取本次选取的文件，大文件建议用此方法获取文件信息
         * @since 2.9.9
         */
        getChooseFiles(): File[];
    }

    interface UploadReturn {
        /**
         * 参数信息
         */
        config: Record<string, any>;
        /**
         * 重载该实例，支持重载全部基础参数
         * @param options 基础参数
         */
        reload(options?: Partial<UploadOptions>): void;
        /**
         * 重新上传的方法，一般在某个事件中使用
         * @param files 需要上传的文件数组
         */
        upload(files?: Blob[]): void;
    }

    interface UploadText {
        /**
         * 数据格式错误的提示
         */
        "data-format-error"?: string;
        /**
         * 文件格式校验失败的提示
         */
        "check-error"?: string;
        /**
         * 上传失败的提示
         */
        error?: string;
        /**
         * 限制 number 属性的提示。若设置，需为函数写法
         */
        "limit-number"?: (options: UploadOptionsThis, fileLength: number) => string;
        /**
         * 限制 size 属性的提示。若设置，需为函数写法
         */
        "limit-size"?: (options: UploadOptionsThis, limitSize: number) => string;
        /**
         * IE 下跨域的提示
         */
        "cross-domain"?: string;
    }

    /**
     * 上传
     * @see https://layui.dev/docs/2/upload/
     */
    interface Upload {
        /**
         * 全局参数项
         */
        config: Record<string, any>;
        /**
         * 绑定事件，内部 modName 默认为 upload，绑定参考 layui.onevent，触发参考 layui.event
         * @param events
         * @param callback
         */
        on(events: string, callback: (this: Layui, obj: any) => any): any;
        /**
         * 核心方法
         * @param option 属性选项
         */
        render(option: UploadOptions): UploadReturn;
        /**
         * 设置upload全局参数(预设基础参数值)
         * @param option 属性选项
         */
        set(option?: Partial<UploadOptions>): Upload;
    }
}

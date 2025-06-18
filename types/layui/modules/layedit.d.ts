declare namespace Layui {
    interface LayEditOptions {
        /**
         * 重新定制编辑器工具栏，如：`tool: ['link', 'unlink', 'face']` 。可选值：
         * - 'strong' 加粗
         * - 'italic' 斜体
         * - 'underline' 下划线
         * - 'del' 删除线
         * - '|' 分割线
         * - 'left' 左对齐
         * - 'center' 居中对齐
         * - 'right' 右对齐
         * - 'link' 超链接
         * - 'unlink' 清除链接
         * - 'face' 表情
         * - 'image' 插入图片
         * - 'help' 帮助
         */
        tool?: string[];
        /**
         * 不显示编辑器工具栏，一般用于隐藏默认配置的工具 bar
         */
        hideTool?: string[];
        /**
         * 设定编辑器的初始高度
         */
        height?: number | string;
        /**
         * 设定图片上传接口，如：uploadImage: {url: '/upload/', type: 'post'}，需要服务端返回
         * ```
         * {
         *   "code": 0, // 0表示成功，其它失败
         *   "msg": "" // 提示信息  一般上传失败后返回
         *   "data": {
         *     "src": "图片路径",
         *     "title": "图片名称" //可选
         *    }
         *  }
         * ```
         */
        uploadImage?: { url: string; type: string };
    }

    /**
     * 富文本编辑器
     * @deprecated 2.8.0 已移除
     */
    interface Layedit {
        /**
         * 用于建立编辑器的核心方法
         * @param id 实例元素（一般为 textarea）的id值
         * @param options 编辑器的可配置项
         */
        build(id: string, options?: Partial<LayEditOptions>): any;
        /**
         * 设置编辑器的全局属性
         * @param options
         */
        set(options: Partial<LayEditOptions>): Layedit;
        /**
         * 获得编辑器的内容
         * @param index 即执行 layedit.build 返回的值
         */
        getContent(index: number): string;
        /**
         *  获得编辑器的纯文本内容
         * @param index 即执行 layedit.build 返回的值
         */
        getText(index: number): string;
        /**
         *  用于同步编辑器内容到 textarea（一般用于异步提交）
         * @param index 即执行 layedit.build 返回的值
         */
        sync(index: number): void;
        /**
         * 获取编辑器选中的文本
         * @param index 即执行 layedit.build 返回的值
         */
        getSelection(index: number): string;
    }
}

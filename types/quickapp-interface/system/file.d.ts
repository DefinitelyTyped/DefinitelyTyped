/**
 * 文件存储
 * 接口声明: {"name": "system.file"}
 */
declare module '@system.file' {
    /**
     * 将源文件移动到指定位置，接口中使用的 URI 描述请参考文件组织
     * @param obj
     */
    function move(obj: {
        /**
         * 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        srcUri: string;
        /**
         * 目标文件的uri，不能是应用资源路径和tmp类型的uri
         */
        dstUri: string;
        /**
         * 成功回调
         */
        success?: (uri: string) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 将源文件复制一份并存储到指定位置，接口中使用的 URI 描述请参考文件组织
     * @param obj
     */
    function copy(obj: {
        /**
         * 源文件的uri，不能是应用资源路径和tmp类型的uri
         */
        srcUri: string;
        /**
         * 目标文件的uri，不能是应用资源路径和tmp类型的uri
         */
        dstUri: string;
        /**
         * 成功回调
         */
        success?: (uri: string) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取指定目录下的文件列表，接口中使用的 URI 描述请参考文件组织
     * @param obj
     */
    function list(obj: {
        /**
         * 目录 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 文件列表，每个文件的格式为{uri:'file1',lastModifiedTime:1234456, length:123456}
             */
            fileList: File[];
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取本地文件的文件信息，接口中使用的 URI 描述请参考
     * @param obj
     */
    function get(obj: {
        /**
         * 文件的 uri，不能是应用资源路径
         */
        uri: string;
        /**
         * 1060+
         * 是否递归获取子目录文件列表。默认false
         */
        recursive?: boolean;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 文件的 uri，该 uri 可以被其他组件或 Feature 访问
             */
            uri: string;
            /**
             * 文件大小，单位 B
             */
            length: number;
            /**
             * 文件的保存是的时间戳，从 1970/01/01 08:00:00 到当前时间的毫秒数
             */
            lastModifiedTime: number;
            /**
             * 1060+
             * 文件类型，dir：目录；file：文件
             */
            type: string;
            /**
             * 1060+
             * 文件列表，recursive为true且type为dir时递归返回子目录文件细信息，否则不返回
             */
            subFiles: string[];
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 删除本地存储的文件，接口中使用的 URI 描述请参考文件组织
     * @param obj
     */
    function _delete(obj: {
        /**
         * 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: any) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
    export { _delete as delete };

    /**
     * 写文本到文件
     * [1010+]
     * @param obj
     */
    function writeText(obj: {
        /**
         * 本地文件路径，不支持资源文件路径和tmp分区，如果文件不存在会创建文件
         */
        uri: string;
        /**
         * 需要写入的字符串
         */
        text: string;
        /**
         * 编码格式，默认UTF-8
         */
        encoding?: string;
        /**
         * 1060+
         * 是否追加模式，默认false
         */
        append?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 写Buffer到文件
     * [1010+]
     * @param obj
     *  uri
     */
    function writeArrayBuffer(obj: {
        /**
         * 本地文件路径，不支持资源文件路径和tmp分区，如果文件不存在会创建文件
         */
        uri: string;
        /**
         * 需要写入的Buffer
         */
        buffer: Uint8Array[];
        /**
         * 指向文件开始写入数据的位置的偏移量，默认 0
         */
        position?: number;
        /**
         * 1060+
         * 是否追加模式，默认false。当为true时，position参数无效
         */
        append?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 从文件中读取文本
     * [1010+]
     * @param obj
     */
    function readText(obj: {
        /**
         * 本地文件路径
         */
        uri: string;
        /**
         * 编码格式，默认UTF-8
         */
        encoding?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 读取的文本
             */
            text: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 从文件中读取Buffer
     * [1010+]
     * @param obj
     */
    function readArrayBuffer(obj: {
        /**
         * 本地文件路径
         */
        uri: string;
        /**
         * 读取的起始位置，默认值为文件的起始位置
         */
        position?: number;
        /**
         * 读取的长度，不填写则读取到文件结尾
         */
        length?: number;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 读取的文件内容
             */
            buffer: Uint8Array;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 1060+
     * 判断文件或目录是否存在
     * @param obj
     */
    function access(obj: {
        /**
         * 目录或文件uri，不能是应用资源路径和tmp类型的uri
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 1060+
     * 创建目录
     * @param obj
     */
    function mkdir(obj: {
        /**
         * 目录的uri，不能是应用资源路径和tmp类型的uri
         */
        uri: string;
        /**
         * 是否递归创建该目录的上级目录后再创建该目录。默认false
         */
        recursive?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 1060+
     * 删除目录
     */
    function rmdir(obj: {
        /**
         * 目录的uri，不能是应用资源路径和tmp类型的uri
         */
        uri: string;
        /**
         * 是否递归创建该目录的上级目录后再创建该目录。默认false
         */
        recursive?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}

interface File {
    /**
     * 文件的 uri，该 uri 可以被其他组件或 Feature 访问
     */
    uri: string;
    /**
     * 文件大小，单位 B
     */
    length: number;
    /**
     * 文件的保存是的时间戳，从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数
     */
    lastModifiedTime: number;
}

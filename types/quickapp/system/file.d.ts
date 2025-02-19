/**
 * 文件存储
 * 接口声明: {"name": "system.file"}
 */
declare module "@system.file" {
    interface MoveOptions {
        /**
         * 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        srcUri: string;
        /**
         * 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        dstUri: string;
        /**
         * 成功回调，返回目标文件的 uri
         */
        success?: (uri: string) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface CopyOptions {
        /**
         * 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        srcUri: string;
        /**
         * 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        dstUri: string;
        /**
         * 成功回调，返回目标文件的 uri
         */
        success?: (uri: string) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ListOptions {
        /**
         * 目录 uri，不能是应用资源路径和 tmp 类型的 uri。[1080+]支持应用资源路径
         */
        uri: string;
        /**
         * 成功回调，返回目录下的文件列表
         */
        success?: (data: ListSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ListSuccessOptions {
        /**
         * 文件列表，每个文件的格式为{uri:'file1', lastModifiedTime:1234456, length:123456}
         */
        fileList: FileMeta[];
    }

    interface FileMeta {
        /**
         * 文件的 uri，该 uri 可以被其他组件或 Feature 访问
         */
        uri: string;
        /**
         * 文件的保存是的时间戳，从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数
         */
        lastModifiedTime: number;
        /**
         * 文件大小，单位 B
         */
        length: number;
    }

    interface GetOptions {
        /**
         * 文件的 uri，不能是应用资源路径。[1080+]支持应用资源路径
         */
        uri: string;
        /**
         * 是否递归获取子目录文件列表。默认 false
         */
        recursive?: boolean;
        /**
         * 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456}
         */
        success?: (data: FileMeta) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface DeleteOptions {
        /**
         * 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface WriteTextOptions {
        /**
         * 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件
         */
        uri: string;
        /**
         * 需要写入的字符串
         */
        text: string;
        /**
         * 编码格式，默认 UTF-8
         */
        encoding?: string;
        /**
         * 是否追加模式，默认 false
         * [1060+]
         */
        append?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface WriteArrayBufferOptions {
        /**
         * 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件
         */
        uri: string;
        /**
         * 需要写入的 Buffer
         */
        buffer: Uint8Array;
        /**
         * 指向文件开始写入数据的位置的偏移量，默认 0
         */
        position?: number;
        /**
         * 是否追加模式，默认 false。当为 true 时，position 参数无效
         * [1060+]
         */
        append?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ReadTextOptions {
        /**
         * 本地文件路径
         */
        uri: string;
        /**
         * 编码格式，默认 UTF-8
         */
        encoding?: string;
        /**
         * 成功回调
         */
        success?: (data: ReadTextSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ReadTextSuccessOptions {
        text: string;
    }

    interface ReadArrayBufferOptions {
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
        success?: (data: ReadArrayBufferSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ReadArrayBufferSuccessOptions {
        buffer: Uint8Array;
    }

    interface AccessOptions {
        /**
         * 目录或文件 uri，不能是应用资源路径和 tmp 类型的 uri。[1080+]支持应用资源路径
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface MkdirOptions {
        /**
         * 目录的 uri，不能是应用资源路径和 tmp 类型的 uri
         */
        uri: string;
        /**
         * 是否递归创建该目录的上级目录后再创建该目录。默认 false
         */
        recursive?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface RmdirOptions {
        /**
         * 目录或文件 uri，不能是应用资源路径和 tmp 类型的 uri。[1080+]支持应用资源路径
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    class File {
        /**
         * 将源文件移动到指定位置，接口中使用的 URI 描述请参考文件组织
         */
        move(obj: MoveOptions): void;
        /**
         * 将源文件复制一份并存储到指定位置，接口中使用的 URI 描述请参考文件组织
         */
        copy(obj: CopyOptions): void;
        /**
         * 获取指定目录下的文件列表，接口中使用的 URI 描述请参考文件组织
         */
        list(obj: ListOptions): void;
        /**
         * 获取本地文件的文件信息，接口中使用的 URI 描述请参考文件组织
         */
        get(obj: GetOptions): void;
        /**
         * 删除本地存储的文件，接口中使用的 URI 描述请参考文件组织
         */
        delete(obj: DeleteOptions): void;
        /**
         * 写文本到文件
         * [1010+]
         */
        writeText(obj: WriteTextOptions): void;
        /**
         * 写 Buffer 到文件
         * [1010+]
         */
        writeArrayBuffer(obj: WriteArrayBufferOptions): void;
        /**
         * 从文件中读取文本
         * [1010+]
         */
        readText(obj: ReadTextOptions): void;
        /**
         * 从文件中读取 Buffer
         * [1010+]
         */
        readArrayBuffer(obj: ReadArrayBufferOptions): void;
        /**
         * 判断文件或目录是否存在
         * [1060+]
         */
        access(obj: AccessOptions): void;
        /**
         * 创建目录
         * [1060+]
         */
        mkdir(obj: MkdirOptions): void;
        /**
         * 删除目录
         * [1060+]
         */
        rmdir(obj: RmdirOptions): void;
    }

    const file: InstanceType<typeof File>;

    export default file;
}

declare module "quickapp:@system.file" {
    export * from "@system.file";
    import file from "@system.file";
    export default file;
}

/**
 * 图片编辑 [1000+]
 * 接口声明: {"name": "system.image"}
 */
declare module '@system.image' {
    /**
     * 获取图片信息
     * @param obj
     */
    function getImageInfo(obj: {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 图片地址
             */
            uri: string;
            /**
             * 图片的宽度，单位为 px
             */
            width: number;
            /**
             * 图片的高度，单位为 px
             */
            height: number;
            /**
             * 图片的大小，单位为 Byte
             */
            size: number;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件路径不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 压缩图片
     * @param obj
     */
    function compressImage(obj: {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 图片的压缩质量，0-100 之间，默认是 75
         */
        quality?: number;
        /**
         * 尺寸压缩倍数，必须大于 0，尺寸会变为原图的 1/ratio 大小
         */
        ratio?: number;
        /**
         * 图片保存格式，支持 JPEG，PNG，WEBP 三种格式。默认使用 JPEG 格式
         */
        format?: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 压缩后的图片地址
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件路径不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取图片的exif信息。支持的格式：JPEG,DNG,CR2,NEF,NRW,ARW,RW2,ORF,PEF,SRW,RAF,HEIF
     * @param obj
     */
    function getExifAttributes(obj: {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 图片地址
             */
            uri: string;
            /**
             * 图片的exif信息
             * [详见：https://doc.quickapp.cn/features/system/image.html?h=%E6%8E%A5%E5%8F%97%E7%9A%84exif%E5%B1%9E%E6%80%A7 ]
             */
            attributes: object;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件路径不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 设置图片的exif信息。设置操作会直接在所给图片上进行，不会生成新的图片。支持的格式：JPEG
     * [1040+]
     * @param obj
     */
    function setExifAttributes(obj: {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 要设置的exif属性列表
         * [详见：https://doc.quickapp.cn/features/system/image.html?h=%E6%8E%A5%E5%8F%97%E7%9A%84exif%E5%B1%9E%E6%80%A7 ]
         */
        attributes: object;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 图片地址
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件路径不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 对图片按顺序执行编辑操作。在顺序执行编辑操作列表中的操作时，上一步操作生成的结果会作为下一步操作的输入，坐标系也是以上一步操作生成的结果的左上角为坐标原点重新确定的。
     * [1000+]
     * @param obj
     */
    function applyOperations(obj: {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 编辑操作列表，按照先后顺序执行。如果未提供，则不会执行编辑操作，仅重新保存图片
         * [详见：https://doc.quickapp.cn/features/system/image.html?h=applyOperations ]
         */
        operations?: object[];
        /**
         * 图片的压缩质量，0-100 之间，默认是 75
         */
        quality?: number;
        /**
         * 图片保存格式，支持 JPEG，PNG，WEBP 三种格式。默认使用 JPEG 格式
         */
        format?: string;
        /**
         * 生成的图片的地址
         */
        success?: (data: {
            /**
             * 图片地址
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件路径不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 打开编辑器来编辑图片。目前支持选择图片范围并裁剪
     * @param obj
     */
    function editImage(obj: {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 用于限定裁剪结果的宽高比，该参数指定宽高比中宽度比率。例如：aspectRatioX为16，aspectRatioY为9，则限定裁剪结果必须是16:9的图
         * [1050+]
         */
        aspectRatioX?: number;
        /**
         * 用于限定裁剪结果的宽高比，该参数指定宽高比中宽度比率。例如：aspectRatioX为16，aspectRatioY为9，则限定裁剪结果必须是16:9的图
         * [1050+]
         */
        aspectRatioY?: number;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 生成的图片的地址
             */
            uri: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 300: I/O 错误
         * 301: 文件路径不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}

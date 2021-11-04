/**
 * 多媒体
 * 接口声明: {"name": "system.media"}
 */
declare module '@system.media' {
    /**
     * 拍摄照片[权限要求:使用相机]
     * @param obj
     */
    function takePhoto(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string;
            /**
             * 1060+
             * 选取的文件名称
             */
            name: string;
            /**
             * 1060+
             * 选取的文件大小，单位B
             */
            size: number;
        }) => void;
        /**
         * 失败回调
         * 201: 用户拒绝，获取相机权限失败
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

    /**
     * 拍摄视频[权限要求:使用相机]
     * @param obj
     */
    function takeVideo(obj: {
        /**
         * 拍摄视频最长拍摄时间，单位 s，默认 60s
         */
        maxDuration?: number;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string;
            /**
             * 1060+
             * 选取的文件名称
             */
            name: string;
            /**
             * 1060+
             * 选取的文件大小，单位B
             */
            size: number;
        }) => void;
        /**
         * 失败回调
         * 201: 用户拒绝，获取相机权限失败
         * 202: maxDuration 参数错误，不能小于等于 0
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

    /**
     * 选择图片[权限要求:读手机存储]
     * @param obj
     */
    function pickImage(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string;
            /**
             * 1060+
             * 选取的文件名称
             */
            name: string;
            /**
             * 1060+
             * 选取的文件大小，单位B
             */
            size: number;
        }) => void;
        /**
         * 失败回调
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

    /**
     * 选择视频[权限要求:读手机存储]
     * @param obj
     */
    function pickVideo(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string;
            /**
             * 1060+
             * 选取的文件名称
             */
            name: string;
            /**
             * 1060+
             * 选取的文件大小，单位B
             */
            size: number;
        }) => void;
        /**
         * 失败回调
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

    /**
     * 选择文件[权限要求:读手机存储]
     * [1010+]
     * @param obj
     */
    function pickFile(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径
             */
            uri: string;
            /**
             * 1060+
             * 选取的文件名称
             */
            name: string;
            /**
             * 1060+
             * 选取的文件大小，单位B
             */
            size: number;
        }) => void;
        /**
         * 失败回调
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

    /**
     * 将图片/视频保存到相册中[权限要求:读手机存储]
     * @param obj
     */
    function saveToPhotosAlbum(obj: {
        /**
         * 源文件的uri，文件的扩展名必须是图片或视频的扩展名
         */
        uri: string;
        /**
         * 图片/视频保存在相册中的自定义文件夹名，最大长度为 50 个字符，最多支持 10 级目录，每级目录名不超过 10 个字符。不能包含下列任何英文字符之一：\:*?"<> | .
         */
        folderName?: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 201: 用户拒绝
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
     * 获取系统铃声。如果是获取来电铃声，双卡情况下，获取的是卡1对应的铃声。[权限要求:读手机存储]
     * [1040+]
     * @param obj
     */
    function getRingtone(obj: {
        /**
         * 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
         */
        type: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 铃声名称，若铃声被删除，返回空字符串
             */
            title: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误，即铃声类型不对
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 设置系统铃声，目前只支持本地文件。如果是设置来电铃声，双卡情况下，卡1卡2对应的铃声都会设置。
     * [权限要求:写手机存储。而且每次设置铃声时，都有弹框来让用户选择是否同意设置铃声]
     * [1040+]
     * @param obj
     */
    function setRingtone(obj: {
        /**
         * 铃声文件路径，只支持本地文件
         */
        uri: string;
        /**
         * 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
         */
        type: string;
        /**
         * 铃声名称，没有设置默认取文件名
         */
        title?: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 201: 用户拒绝
         * 202: 参数错误，参数错误，即铃声类型不对，目前支持的铃声类型有15种，文件后缀分别为：.mp3、 .ogg、 .oga、 .flac、 .wav、 .m4a、 .amr、 .awb、 .wma、 .aac、 .mka、 .mid、 .midi、 .smf、 .imy
         * 1001: 件不存在
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 预览图片，调用之后会在新打开的页面中全屏预览传入的图片，预览的过程中用户可以左右滑动浏览，可以通过双指缩放图片，可以保存图片到相册
     * [权限要求:写手机存储]
     * [1040+]
     * @param obj
     */
    function previewImage(obj: {
        /**
         * 数据类型可选择Number或者String：
         * Number：当前显示的图片的下标，默认0；
         * String：当前显示的图片链接，默认为uris中的第一张的地址
         */
        current?: number | string;
        /**
         * 需要预览的图片链接列表，同时支持网络和本地地址
         */
        uris: string[];
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
    }): void;

    /**
     * 选择多张图片[权限要求:读手机存储]
     * [1040+]
     * @param obj
     */
    function pickImages(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径列表
             */
            uris: string[];
            /**
             * 1060+
             * 选取的文件列表，是一个file对象的数组
             */
            files: MediaFile[];
        }) => void;
        /**
         * 失败回调
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

    /**
     * 选择多个视频[权限要求:读手机存储]
     * [1040+]
     * @param obj
     */
    function pickVideos(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 选取的文件路径列表
             */
            uris: string[];
            /**
             * 1060+
             * 选取的文件列表，是一个file对象的数组
             */
            files: MediaFile[];
        }) => void;
        /**
         * 失败回调
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

interface MediaFile {
    /**
     * 选取的文件路径
     */
    uri: string;
    /**
     * 选取的文件名称
     */
    name: string;
    /**
     * 选取的文件大小，单位B
     */
    size: number;
}

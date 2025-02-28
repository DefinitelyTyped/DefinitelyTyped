/**
 * 多媒体
 * 接口声明: {"name": "system.media"}
 */
declare module "@system.media" {
    interface MediaFile {
        /**
         * 文件路径
         */
        uri: string;
        /**
         * 文件名称
         * [1060+]
         */
        name: string;
        /**
         * 文件大小，单位B
         * [1060+]
         */
        size: number;
    }

    interface TakePhotoOptions {
        /**
         * 成功回调
         */
        success?: (data: MediaFile) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取相机权限失败|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
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
    }

    /**
     * 拍摄照片
     * @description
     * 权限要求
     * - 使用相机
     */
    function takePhoto(obj?: TakePhotoOptions): void;

    interface TakeVideoOptions {
        /**
         * 拍摄视频最长拍摄时间，单位 s，默认 60s
         * [1080+]
         */
        maxDuration?: number;
        /**
         * 成功回调，参数示例如： {uri: 'file:///video.mp4'}
         */
        success?: (data: MediaFile) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |201|用户拒绝，获取相机权限失败|
         * |202|maxDuration 参数错误，不能小于等于 0 [1080+]|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
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
    }

    /**
     * 拍摄视频
     * @description
     * 权限要求
     * - 使用相机
     */
    function takeVideo(obj?: TakeVideoOptions): void;

    interface PickImageOptions {
        /**
         * 成功回调
         */
        success?: (data: MediaFile) => void;
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
    }

    /**
     * 选择图片
     * @description
     * 权限要求
     * - 读手机存储
     */
    function pickImage(obj?: PickImageOptions): void;

    interface PickImagesOptions {
        /**
         * 成功回调
         */
        success?: (data: PickImagesSuccessOptions) => void;
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
    }

    interface PickImagesSuccessOptions {
        /**
         * 选取的文件路径列表
         */
        uris: string[];
        /**
         * 选取的文件列表，是一个file对象的数组
         * [1060+]
         */
        files: MediaFile[];
    }

    /**
     * 选择多张图片
     * [1040+]
     * @description
     * 权限要求
     * - 读手机存储
     */
    function pickImages(obj?: PickImagesOptions): void;

    interface PickVideoOptions {
        /**
         * 成功回调
         */
        success?: (data: MediaFile) => void;
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
    }

    /**
     * 选择视频
     * @description
     * 权限要求
     * - 读手机存储
     */
    function pickVideo(obj?: PickVideoOptions): void;

    interface PickVideosOptions {
        /**
         * 成功回调
         */
        success?: (data: PickVideosSuccessOptions) => void;
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
    }

    interface PickVideosSuccessOptions {
        /**
         * 选取的文件路径列表
         */
        uris: string[];
        /**
         * 选取的文件列表，是一个file对象的数组
         * [1060+]
         */
        files: MediaFile[];
    }

    /**
     * 选择多个视频
     * [1040+]
     * @description
     * 权限要求
     * - 读手机存储
     */
    function pickVideos(obj?: PickVideosOptions): void;

    interface PickFileOptions {
        /**
         * 成功回调
         */
        success?: (data: MediaFile) => void;
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
    }

    /**
     * 选择文件
     * [1010+]
     * @description
     * 权限要求
     * - 读手机存储
     */
    function pickFile(obj?: PickFileOptions): void;

    interface SaveToPhotosAlbumOptions {
        /**
         * 源文件的uri，文件的扩展名必须是图片或视频的扩展名
         */
        uri: string;
        /**
         * 图片/视频保存在相册中的自定义文件夹名，最大长度为 50 个字符，最多支持 10 级目录，每级目录名不超过 10 个字符。不能包含下列任何英文字符之一：\:*?"<> | .
         * [1080+]
         */
        folderName?: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |201|用户拒绝|
         * |202|参数错误|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 将图片/视频保存到相册中
     * @description
     * 注：从1080版本开始，图片和视频的保存路径发生了改变，以图片为例，规则如下：（视频场景下 Pictures 目录改为 Movies 即可）
     *
     * 快应用包名：manifest.json 的package属性值
     *
     * 快应用的应用名： manifest.json 的name属性值
     *
     * 1.没有设置 folderName
     *
     * 图片保存地址格式：sdcard/Pictures/"快应用包名"/"快应用的应用名"/xxx.jpg
     *
     * 2.手动设置了 folderName
     *
     * 图片保存地址格式：sdcard/Pictures/"快应用包名"/"folderName"/yyy.jpg
     *
     * 另外，从1090版本开始，Android 10+系统且硬件能力支持的机器，可以保存HEIF/HEIC类照片
     *
     * 权限要求
     * - 读手机存储
     */
    function saveToPhotosAlbum(obj: SaveToPhotosAlbumOptions): void;

    interface PreviewImageOptions {
        /**
         * 数据类型可选择 Number 或者 String：
         * - Number：当前显示的图片的下标，默认 0；
         * - String：当前显示的图片链接，默认为 uris 中的第一张的地址
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
    }

    /**
     * 预览图片，调用之后会在新打开的页面中全屏预览传入的图片，预览的过程中用户可以左右滑动浏览，可以通过双指缩放图片，可以保存图片到相册
     * [1040+]
     * @description
     * 权限要求
     * - 写手机存储
     */
    function previewImage(obj: PreviewImageOptions): void;

    interface GetRingtoneOptions {
        /**
         * 铃声类型，ringtone：来电，notification：通知，alarm：闹钟
         */
        type: string;
        /**
         * 成功回调
         */
        success?: (data: GetRingtoneSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |202|参数错误，即铃声类型不对|
         * |203|获取铃声能力不可用 [1120+]|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetRingtoneSuccessOptions {
        /**
         * 铃声名称，若铃声被删除，返回空字符串。
         */
        title: string;
    }

    /**
     * 获取系统铃声。如果是获取来电铃声，双卡情况下，获取的是卡1对应的铃声。
     * [1040+]
     * @description
     * 权限要求
     * - 读手机存储
     */
    function getRingtone(obj: GetRingtoneOptions): void;

    interface SetRingtoneOptions {
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
         * @description
         * |错误码|说明|
         * |----|----|
         * |201|用户拒绝|
         * |202|参数错误，参数错误，即铃声类型不对，目前支持的铃声类型有15种，文件后缀分别为：.mp3、 .ogg、 .oga、 .flac、 .wav、 .m4a、 .amr、 .awb、 .wma、 .aac、 .mka、 .mid、 .midi、 .smf、 .imy|
         * |203|设置铃声能力不可用 [1120+]|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1001|文件不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 设置系统铃声，目前只支持本地文件。如果是设置来电铃声，双卡情况下，卡1卡2对应的铃声都会设置。
     * [1040+]
     * @description
     * 权限要求
     * - 写手机存储。而且每次设置铃声时，都有弹框来让用户选择是否同意设置铃声
     */
    function setRingtone(obj: SetRingtoneOptions): void;
}

declare module "quickapp:@system.media" {
    export * from "@system.media";
}

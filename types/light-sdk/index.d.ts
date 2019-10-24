// Type definitions for light-sdk 1.0.62
// Project: https://www.npmjs.com/package/light-sdk
// Definitions by: cklwblove <https://github.com/cklwblove>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = LightSDK;
export as namespace LightSDK;


interface IInfo {
    error_code: string;
    error_message: string;
}

interface IBridgeResponse {
    info: IInfo;
    data: any;
}

interface Native {
    /**
     * 通过网页js获取客户端基本信息
     *
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getSystemInfo(params: any, cb: any): void;
    /**
     * 通过js接口获取当前网络状态
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getNetworkStatus(params: any, cb: any): void;
    /**
     * 获取设备唯一标识码
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getUDID(params: any, cb: any): void;
    /**
     * 通过网页js获取客户端版本信息
     *
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getVersion(params: any, cb: any): void;
    /**
     * 打开native系统特殊的外部链接 如电话，邮箱，短信，网页，其他APP等。
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    openURL(params: any, cb: any): void;
    /**
     * 打印日志
     * @param {Object} params - 接口入参
     * @param {string} params.level -日志级别，取值有info,error,debug,warn,verbose
     * @param {string} params.content -日志内容
     * @param {callback} cb 功能处理后的回调函数
     */
    log(params: any, cb: any): void;
    /**
     * 通过js添加导航栏按钮，目前允许在左右两边各加一个扩展按钮
     * @param {Object} params - 接口入参
     * @param {Object} params.title            文本按钮标题
     * @param {Object} params.icon            "图片按钮的图标，可支持格式：
     * 1. 远程图片url，必须以http://或https://开头
     * 2. 图片Base64编码，以base64://开头
     * 3. gmu／gmu_icon目录下的本地文件，相对路径且不包括文件后缀，如使用图片gmu/gmu_icon/test.png, 则次此参数为test"
     * @param {Object} params.action            "用户点击按钮触发的事件，可支持格式：
     * 1. 标准http或https url
     * 2. 标准gmu协议url
     * 3. JavaScript，以javascript：开头"
     * @param {Object} params.position            若为“left”，按钮添加在左侧，若为“right”，按钮添加在右侧，默认为“right”
     * @param {callback} cb 功能处理后的回调函数
     */
    addButton(params: any, cb: any): void;
    /**
     * 控制导航栏红点按钮是否隐藏
     * @param {Object} params - 接口入参
     * @param {string} params.type    -控制导航栏按钮红点是否隐藏，若为show 则显示红点,否则隐藏红点。
     * @param {string} params.badgeId    -红点Id,供查询红点信息使用。注意:要跟你创建导航栏红点时Id保持一致。
     * @param {callback} cb 功能处理后的回调函数
     */
    showNativeBadge(params: any, cb: any): void;
    /**
     * 修改导航栏透明度
     * @param {Object} params - 接口入参
     * @param {Object} params.alpha -设置透明度，透明度设置越小越透明
     * @param {callback} cb 功能处理后的回调函数
     */
    headSetAlpha(params: any, cb: any): void;
    /**
     * 通过js删除已添加的导航栏按钮
     * @param {Object} params - 接口入参
     * @param {Object} params.position    -若为“left”，则删除左侧按钮，若为“right”，则删除右侧按钮，默认为“right”
     * @param {callback} cb 功能处理后的回调函数
     */
    removeButton(params: any, cb: any): void;
    /**
     * 通过js修改导航栏背景色
     * @param {Object} params - 接口入参
     * @param {Object} params.color    -颜色，格式为 #ffffff
     * @param {callback} cb 功能处理后的回调函数
     */
    setBackgroundColor(params: any, cb: any): void;
    /**
     * 设置标题栏标题接口
     * @param {Object} params - 接口入参
     * @param {Object} params.title    -标题
     * @param {callback} cb 功能处理后的回调函数
     */
    setTitle(params: any, cb: any): void;
    /**
     * 通过js修改导航栏背景色
     * @param {Object} params - 接口入参
     * @param {Object} params.title    -标题
     * @param {Object} params.subtitle    -副标题
     * @param {callback} cb 功能处理后的回调函数
     */
    setSubtitle(params: any, cb: any): void;
    /**
     * 设置导航栏搜索视图
     * @param {Object} params - 接口入参
     * @param {Object} params.prod_code -产品代码,关键字，如：prod_code=00570 表示查询含 00570 的证券代码
     * @param {Object} params.en_finance_mic -交易所识别码集合,多个交易所识别码,逗号(,)分割。如："finance_mic":["SS","SZ"]，且按照参数的先后顺序优先查找
     * @param {Object} params.data_count -数据个数,不指定默认返回50个代码
     * @param {callback} cb 功能处理后的回调函数
     */
    headSetSearchView(params: any, cb: any): void;
    /**
     * 通过js调用web返回事件
     * @param {Object} params - 接口入参
     * @param {string} params.number - 返回的页数
     * @param {callback} cb 功能处理后的回调函数
     */
    back(params: any, cb: any): void;
    /**
     * 通过js调用web返回事件
     */
    close(): void;
    /**
     * 通过js接口在网页中切换底部tab
     *
     * @param {Object} params - 接口入参
     * @param {string} params.index - 切换至下标为index位置的tab
     * @param {callback} cb 功能处理后的回调函数
     */
    switchTab(params: any, cb: any): void;
    /**
     * 设置首页tab小红点
     * @param {Object} params - 接口入参
     * @param {number} params.index -tab的index，值从0开始计数，须在tab个数范围内
     * @param {number} params.type -0表示红点，1表示文本，默认为0
     * @param {string} params.value -type为0时，忽略value字段值为""以外的所有值。若value为"",则清除红点。type为1时，value为必须字段，显示在红点中心的文本,若value为"",则清除文本
     * @param {callback} cb 功能处理后的回调函数
     */
    setTabBarBadge(params: any, cb: any): void;
    /**
     * 通过JS发送统计分析埋点事件
     * @param {Object} params - 接口入参
     * @param {string} params.event -事件ID，被统计事件的唯一标识
     * @param {object} params.attributes -事件附加属性，用户可根据业务需求为事件添加附加属性，默认值为{}
     * @param {number} params.duration -事件时长（毫秒），该字段可以为持续性事件标识事件持续的时长，默认值为0
     * @param {callback} cb 功能处理后的回调函数
     */
    analyticsSendEvent(params: any, cb: any): void;
    /**
     * 通过js接口获得当前框架页面堆栈信息
     * @param params
     * @param cb
     */
    getCurrentPages(params: any, cb: any): void;
    /**
     * 用于实现网络请求
     * @param {Object} params - 接口入参
     * @param {Object} params.url - 请求的 URL
     * @param {Object} params.method - HTTP 方法 GET 或 POST ，默认GET
     * @param {Object} params.headers - HTTP 请求头
     * @param {Object} params.type - 响应类型， json，text 或是 jsonp （在原生实现中其实与 json 相同）
     * @param {Object} params.body - HTTP 请求体
     * @param {Object} params.timeout - 请求超时时间，单位ms,默认30000ms
     */
    streamFetch(params: any, cb: any): void;
    /**
     * 显示蒙层
     * @param {Object} params - 接口入参
     * @param {Number} params.data - 加载到蒙层WebView中页面数据，可以是字符串格式的HTML或URL（URL为远程地址或本地www下的HTML）
     * @param {StringArray} params.dataType -data的类型 strh5 或 url ，默认strh5 （strh5: 加载字符串格式HTML, url: 远程地址或本地www下的HTML）
     * @param {StringArray} params.callbackDataType - 返回的data字段类型 json 或 text，默认是text
     */
    showOverlay(params: any, cb: any): void;
    /**
     * 设置屏幕方向
     * @param {Object} params - 接口入参
     * @param {Object} params.screenOrientation    -    landscape_left:左横屏  landscape_right：右横屏 portrait：竖屏
     * @param {callback} cb 功能处理后的回调函数
     */
    setScreenOrientation(params: any, cb: any): void;
    /**
     * 设置屏幕方向
     * @param {Object} params - 接口入参
     * @param {Object} params.supportScreenOrientation    -    以数组形式，添加可设置方向。
     * @param {callback} cb 功能处理后的回调函数
     */
    setSupportScreenOrientation(params: any, cb: any): void;
    /**
     * 通过js控制是否隐藏状态栏
     * @param {Object} params - 接口入参
     * @param {Object} params.hidden    -是否隐藏
     * @param {callback} cb 功能处理后的回调函数
     */
    setSystemStatusBar(params: any, cb: any): void;
    /**
     * 获取App的顶部状态栏高度
     * @param {Object} params - 接口入参
     */
    getStatusBarHeight(params: any, cb: any): void;
    /**
     * 通过js登录用户
     * @param {Object} params - 接口入参
     * @param {Object} params.uid			-用户hsid
     * @param {Object} params.mobile			-用户手机号码
     * @param {Object} params.token			-用户令牌
     * @param {Object} params.nickname			-用户昵称
     * @param {Object} params.photoURL			-用户头像地址
     * @param {Object} params.logoutWhenExit			-app退出后是否注销当前用户
     * @param {callback} cb 功能处理后的回调函数
     */
    userLogin(params: any, cb: any): void;
    /**
     * 获取用户信息
     * @param cb
     */
    userGetInfo(cb: any): void;
    /**
     * 通过js设置登录用户信息
     * @param {Object} params - 接口入参
     * @param {Object} params.uid			-用户hsid
     * @param {Object} params.mobile			-用户手机号码
     * @param {Object} params.token			-用户令牌
     * @param {Object} params.nickname			-用户昵称
     * @param {Object} params.photoURL			-用户头像地址
     * @param {Object} params.logoutWhenExit			-app退出后是否注销当前用户
     * @param {Object} params.extraInfo			-用户额外信息
     * @param {callback} cb 功能处理后的回调函数
     */
    userSetInfo(params: any, cb: any): void;
    /**
     * 通过JS退出用户登录
     * @param cb
     */
    userlogout(cb: any): void;
    /**
     * 用于向系统日历增加事件
     * @param {Object} params - 接口入参
     * @param {Object} params.startDate - 开始时间，格式：yyyy-MM-dd hh:mm:ss ，示例："2019-6-12 15:05:00"
     * @param {Object} params.endDate - 结束时间，格式同开始时间，默认值为开始时间，不填或所填时间小于开始时间，则为默认值
     * @param {Object} params.title - 标题
     * @param {Object} params.location - 位置信息
     * @param {Object} params.notes - 备注信息
     * @param {Object} params.alarmOffset - 提前提醒时间，单位：分 ，默认值为0，即事件开始时间提醒.注意事项：类型必须为整数，入参小于0时为默认值
     */
    createCalendar(params: any, cb: any): void;
    /**
     * 用于向系统日历更新相应事件信息
     * @param {Object} params - 接口入参
     * @param {Object} params.id - 事件id
     * @param {Object} params.startDate - 开始时间，格式：yyyy-MM-dd hh:mm:ss ，示例："2019-6-12 15:05:00"
     * @param {Object} params.endDate - 结束时间，格式同开始时间，默认值为开始时间，不填或所填时间小于开始时间，则为默认值
     * @param {Object} params.title - 标题
     * @param {Object} params.location - 位置信息
     * @param {Object} params.notes - 备注信息
     * @param {Object} params.alarmOffset - 提前提醒时间，单位：分 ，默认值为0，即事件开始时间提醒.注意事项：类型必须为整数，入参小于0时为默认值
     */
    updateCalendar(params: any, cb: any): void;
    /**
     * 用于向系统日历删除事件
     * @param {Object} params - 接口入参
     * @param {Object} params.startDate - 开始时间，格式：yyyy-MM-dd hh:mm:ss ，示例："2019-6-12 15:05:00"
     * @param {Object} params.endDate - 结束时间，格式同开始时间，默认值为开始时间，不填或所填时间小于开始时间，则为默认值
     * @param {Object} params.id - 事件id
     */
    deleteCalendar(params: any, cb: any): void;
    /**
     * 用于向系统日历查询事件
     * @param {Object} params - 接口入参
     * @param {Object} params.startDate - 开始时间，格式：yyyy-MM-dd hh:mm:ss ，示例："2019-6-12 15:05:00"
     * @param {Object} params.endDate - 结束时间，格式同开始时间，默认值为开始时间，不填或所填时间小于开始时间，则为默认值
     * @param {Object} params.id - 事件id
     */
    queryCalendar(params: any, cb: any): void;
    /**
     * 通过js接口在网页中查询存储在native的属性
     * @param {Object} params - 接口入参
     * @param {string} params.key - native存储数据的key
     * @param {bool} params.keepType - 传true：value可以支持string、object、Array、bool、number等类型的数据。默认false，即只支持string或object类型的数据
     * @param {Array} params.multi_param - 一次性读取多个值如[{key:key1},{key:key2}]
     * @param {string} params.scope - native存储域
     * @param {callback} cb 功能处理后的回调函数
     */
    readData(params: any, cb: any): void;
    /**
     * 通过js接口在网页中向native保存数据
     * @param {Object} params - 接口入参
     * @param {string} params.key - native存储数据的key
     * @param {string} params.value - 向native保存的数据
     * @param {bool} params.keepType - 传true：value可以支持string、object、Array、bool、number等类型的数据。默认false，即只支持string或object类型的数据
     * @param {Array} params.multi_param - 一次性存储多个值如[{key:key1,value:value1},{key:key2,value:value1}]
     * @param {string} params.scope - native存储域
     * @param {callback} cb 功能处理后的回调函数
     */
    writeData(params: any, cb: any): void;
    /**
     * 通过js接口在网页中删除存储在native的属性
     * @param {Object} params - 接口入参
     * @param {string} params.key - native存储数据的key
     * @param {Array} params.multi_param - 一次性删除多个值如[{key:key1},{key:key2}]
     * @param {string} params.scope - native存储域
     * @param {callback} cb 功能处理后的回调函数
     */
    deleteData(params: any, cb: any): void;
    /**
     * 通过js接口获取客户端系统剪贴板内容
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getClipBoardContent(params: any, cb: any): void;
    /**
     * 通过js接口在网页中复制内容到剪贴板
     * @param {Object} params - 接口入参
     * @param {string} params.value - 需要复制到剪贴板的内容，目前只支持字符串
     * @param {callback} cb 功能处理后的回调函数
     */
    setClipBoardContent(params: any, cb: any): void;
    /**
     * 通过js获取手机通讯录信息
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getContactInfo(params: any, cb: any): void;
    /**
     * 通过js接口返回指定字符串内容的二维码图片的base64编码字符串
     *
     * @param {Object} params - 接口入参
     * @param {string} params.desc - 需要被编码成二维码的内容
     * @param {string} params.size - 二维码尺寸,默认为300x300，
     * @param {callback} cb 功能处理后的回调函数
     */
    genCode(params: any, cb: any): void;
    /**
     * 通过js接口打开本地二维码扫描页面，扫码成功后在网页中返回扫码结果信息
     *
     * @param {Object} params - 接口入参
     * @param {string} params.sideLength - 扫描区域边长相对于屏幕较短边长的百分比，取值范围(0,1]
     * @param {string} params.offsetX - 扫描区域相对于屏幕左侧的偏移百分比，取值范围[0,1]
     * @param {string} params.offsetY - 扫描区域相对于屏幕顶部的偏移百分比，取值范围[0,1]
     * @param {callback} cb 功能处理后的回调函数
     */
    scanCode(params: any, cb: any): void;
    /**
     * 通过js调用获取经纬度
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getLocation(params: any, cb: any): void;
    /**
     * 通过js调用关闭定位服务
     * @deprecated
     * @param {Object} params - 接口入参
     * @param cb
     */
    stopLocation(params: any, cb: any): void;
    /**
     * 获取当前是否可获取定位状态
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    getLocationStatus(params: any, cb: any): void;
    /**
     * 通过JS获取推送registrationID
     * @deprecated
     * @param {Object} params - 接口入参
     * @param cb
     */
    pushGetRegistrationID(params: any, cb: any): void;
    /**
     * 当前用户添加标签
     * @deprecated
     * @param {Object} params - 接口入参
     * @param {array} params.tags -用户所传的标签集合
     * @param cb
     */
    pushAddTags(params: any, cb: any): void;
    /**
     * 当前用户删除标签
     * @deprecated
     * @param {Object} params - 接口入参
     * @param {array} params.tags -用户所传的标签集合
     * @param cb
     */
    pushDeleteTags(params: any, cb: any): void;
    /**
     * 获取当前用户的所有标签
     * @deprecated
     * @param params
     * @param cb
     */
    pushGetTags(params: any, cb: any): void;
    /**
     * 通过JS向客户端传递推送alias，用于推送服务器定点推送
     * @param {Object} params - 接口入参
     * @param {Object} params.alias    -推送alias，为空字符串时为清除已有alias
     * @param {callback} cb 功能处理后的回调函数
     */
    pushSetAlias(params: any, cb: any): void;
    /**
     * 通过JS获取推送消息
     * @param {Object} params - 接口入参
     * @param {callback} cb 功能处理后的回调函数
     */
    pushAddEventListener(params: any, cb: any): void;
    /**
     * 通过js接口在网页中返回指定图片的文件ID，协议格式为LightResource://xxx.image
     * @param {Object} params - 接口入参
     * @param {Number} params.count - 最大可选照片数，默认 9 张，取值范围：1-9
     * @param {StringArray} params.sizeType -original原图，compressed 压缩图，默认 ['original','compressed']
     * @param {StringArray} params.sourceType - 相册选取或者拍照，默认 ['camera','album']
     */
    imagePicker(params: any, cb: any): void;
    /**
     * 通过js接口在网页中返回指定文件ID对应的base64编码字符串
     * @param {Object} params - 接口入参
     * @param {Object} params.path - 文件ID,协议为LightResource://xxx.类型
     */
    getBase64(params: any, cb: any): void;
    /**
     * 通过js接口页面中返回指定图片的base64编码字符串
     *
     * @param {Object} params - 接口入参
     * @param {string} params.imagePickType - 选择用摄像头还是相册进行选择，默认2种都显示(carmer,album)单选图片，多选图片传入type为：(CAMERA_MUTIL-ALBUM)
     * @param {string} params.cropPhoto - 是否剪裁
     * @param {string} params.maxWidth - 最大宽度
     * @param {string} params.aspectXY - 宽高比
     * @param {string} params.maxCount - 宽高比
     * @param {string} params.allowTakePicture - 多选图片(即type为CAMERA_MUTIL-ALBUM或MUTIL-ALBUM)情况下可选的最大照片数，默认为9。
     * @param {string} params.reverselyOrdered - 多选图片(即type为CAMERA_MUTIL-ALBUM或MUTIL-ALBUM)情况下相册选择器是否倒序显示，默认正序显示，仅支持iOS
     * @param {callback} cb 功能处理后的回调函数
     */
    chooseImage(params: any, cb: any): void;
    /**
     * 通过js对web页或JSNative页面上的图片进行本地化处理，保存至本地相册
     * @param {Object} params - 接口入参
     * @param {string} params.image -图片数据，支持以下格式：1. 标准http或https图片链接 2. 图片base64编码，以data:image/png;base64, //开头
     * @param {callback} cb 功能处理后的回调函数
     */
    saveImage(params: any, cb: any): void;
    /**
     *图片预览功能，支持预览多张图片。
     * @param {Object} params - 接口入参
     * @param {Array} params.images -图片地址
     * @param {Array} params.selectedIndex -预览时的图片数组下标(从0开始)，表示展示当前选中的图片。默认情况为0
     * @param {callback} cb 功能处理后的回调函数
     */
    imagePreview(params: any, cb: any): void;
    /**
     * 通过js接口录制音频
     * @param {Object} params - 接口入参
     * @param {Number} params.duration -音频录制的最长时间，以秒为单位
     * @param {callback} cb 功能处理后的回调函数
     */
    startRecord(params: any, cb: any): void;
    /**
     * 通过js接口结束录制音频
     * @param cb
     */
    stopRecord(cb: any): void;
    /**
     * 文件预览，支持doc，docx ，xls，xlsx，pdf，txt，ppt ，pptX。
     * @param {Object} params - 接口入参
     * @param {string} params.url -需要打开的文件地址
     * @param {string} params.title -预览页面标题，如果不传title，默认为文件名（参见注意事项
     * @param {callback} cb 功能处理后的回调函数
     */
    filePreview(params: any, cb: any): void;
    /**
     * 文件下载保存功能。文件支持doc，docx ，xls，xlsx，pdf，txt，ppt ，pptX。
     * @param {Object} params - 接口入参
     * @param {string} params.path -文件存放的相对路径，以’/‘开头，例’/aaa/bbb.docx’
     * @param {string} params.url -文件的远程地址
     * @param {string} params.data -文件数据的base64编码字符串（url与data至少有一个不为空，优先取url的值
     * @param {bool} params.overwrite -是否覆盖（默认不覆盖）
     * @param {callback} cb 功能处理后的回调函数
     */
    fileSave(params: any, cb: any): void;
    /**
     * 通过js获取是否含有手势或指纹验证信息
     * @param {Object} params - 接口入参
     * @param {Object} params.verifyType    -验证方式（FP:指纹 GL:手势）
     * @param {callback} cb 功能处理后的回调函数
     */
    preVerifyOpeation(params: any, cb: any): void;
    /**
     * 通过js调用手势或指纹验证
     * @param {Object} params - 接口入参
     * @param {Object} params.GLOpeationType    -只有verifyType为GL才可用，字段说明(verify:手势验证 set:手势设置 update:手势更新 close:清除手势)
     * @param {Object} params.otherTitle    -其他方式点击按钮title
     * @param {Object} params.additionalTitle    -附加方式点击按钮title
     * @param {callback} cb 功能处理后的回调函数
     */
    verifyOpeation(params: any, cb: any): void;
    /**
     * show打开安全键盘
     * @deprecated
     * @param {Object} params - 接口入参
     * @param {string} params.textshow -股票代码
     * @param {string} params.disorderEffect -appear:首次打开键盘时就乱序 click:点击按钮时才乱序，appearandclick:打开键盘就乱序且点击按钮也乱序。若无配置或配置字符串不符合这三个，则默认为click效果。注意:该字段须配合disorder字段一起使用。
     * @param {string} params.disorder -数字顺序是否打乱，none:不乱序。number:只有数字乱序
     * @param {string} params.pressEffect -按钮点击效果，default:按钮点击后有点击效果,none:没有点击效果
     * @param {string} params.keyboardType -number:数字键盘,alpha:字母键盘,symbol:符号键盘。配置组合支持四种：number|alpha、alpha|symbol、number、alpha|number|symbol、三者之间配置顺序可改变。默认为alpha|number|symbol
     * @param {string} params.maxLength -设置最大输入长度，默认为16
     * @param {string} params.encryptMode -设置加密方式，可选项有:AES（16个倍数的任意字符）、RSA（一大串字符）、MD5、SM2（x&y）、SM3(无)、SM4（16个任意字符）。不配置默认为MD5加密。
     * @param {string} params.secretKey -密钥，若指定加密方式需要密钥则必须传递，否则不需要传递。若加密方式为SM2则传入的x,y密钥之间用‘&’符号连接，例如: "aaaaaaa&bbbbbb"
     * @param {string} params.titleText -设置键盘顶部自定义文案，不配置或者配置字符串为空默认为“恒生安全输入键盘”。注意:不配置字段时，安全键盘顶部文案默认显示为safekeyboard.gmu中的配置。如果gmu中再没有的话，则默认显示为”恒生安全输入键盘”。
     * @param cb
     */
    safekeyboardShow(params: any, cb: any): void;
    /**
     * 通过js关闭安全键盘
     * @deprecated
     * @param {Object} params - 接口入参
     * @param {string} params.finishedText - 关闭安全键盘的结果
     * @param cb
     */
    safekeyboardHide(params: any, cb: any): void;
    /**
     * 通过js展现交易键盘
     * @deprecated
     * @param {Object} params - 接口入参
     * @param {string} params.type -验证方式（price:交易价格键盘 volume:交易量键盘 search:股票代码搜索键盘）
     * @param {array} params.buttons -键盘工具栏按钮
     * @param {string} params.describe -键盘工具类描述
     * @param cb
     */
    tradekeyboardShow(params: any, cb: any): void;
    /**
     * t通过js关闭交易键盘
     * @deprecated
     * @param {Object} params - 接口入参
     * @param {string} params.type -关闭的键盘类型（price:交易价格键盘 volume:交易量键盘 search:股票代码搜索键盘）
     * @param cb
     */
    tradekeyboardHide(params: any, cb: any): void;
    /**
     * 通过js分享内容到各平台
     * @param {Object} params - 接口入参
     * @param {string} params.title            分享标题
     * @param {string} params.content            分享的描述信息
     * @param {string} params.url            用户点击分享后打开的链接地址，
     * @param {string} params.image    一般是标准http或https请求,可支持格式
     * 1.远程图片url，必须以http://或https://开头
     * 2. 图片Base64编码，以base64://开头
     * 3. gmu／gmu_icon目录下的本地文件，相对路径且不包括文件后缀，如使用图片gmu/gmu_icon/test.png, 则次此参数为test"
     * @param {string} params.type    可选值：
      “webpage”（分享网页)
      “image”（分享图片) (注意:分享图片目前支持微信，微博，qq，钉钉。其他则不支持分享图片功能）
      “file”（分享文件) (注意:本地地址需要为文件预览或文件下载接口所传的文件存放的相对路径地址。文件分享目前只支持微信，其他如qq，微博，钉钉则不支持文件分享功能。注意:微信朋友圈不支持文件分享功能）
      (默认值：”webpage”)
      * @param {string} params.channel 设置分享渠道，用户可指定将信息分享到哪个渠道上 ，注意：若配置了此参数，则无分享对话框弹出UI，不配置则会根据开发者的share.gmu中的配置生成动态生成分享对话框弹出，供用户选择分享渠道。
      可选值：
      “weixin” （微信）
      “weixin_timeline”（微信朋友圈）
      “qq”（QQ）
      “weibo”(微博)
      “dingtalk”（钉钉）
      “system”(系统分享)”
     * @param {callback} cb 功能处理后的回调函数
     */
    socialShare(params: any, cb: any): void;
    /**
     * 三方登录接口
     * @param {Object} params - 接口入参
     * @param {string} params.type            登录平台类别,只支持qq,weibo,weixin三个type
     * @param {callback} cb 功能处理后的回调函数
     */
    socialLogin(params: any, cb: any): void;
    /**
     * 通过js判断各个平台app在设备上是否已安装
     * @param {Object} params - 接口入参
     * @param {string} params.type -平台类型，目前type值只支持'qq'，'weibo'，'weixin'三个
     * @param {callback} cb 功能处理后的回调函数
     */
    socialAppInstalled(params: any, cb: any): void;
    /**
     * 苹果内购接口
     * @param {Object} params - 接口入参
     * @param {string} params.apple_product_id -苹果商品ID(需要在苹果itunes connect平台创建商品)
     * @param {string} params.orderId -商户订单号(此订单号为客户自己业务生成的订单号，用于最后一步校验苹果收据时做检测唯一性使用，保证内购链路完整性)
     * @param {callback} cb 功能处理后的回调函数
     */
    iapPurchase(params: any, cb: any): void;
    /**
     * 通过js传入经服务器加签后的订单信息(orderInfo)并调用相应支付渠道SDK的支付接口
     * @param {Object} params - 接口入参
     * @param {string} params.channel_id -021:支付宝钱包022:微信钱包
     * @param {Object} params.orderInfo			-
     * @param {Object} params.isSandBox			-是否进入沙箱环境
     * @param {callback} cb 功能处理后的回调函数
     */
    tradePay(params: any, cb: any): void;
}

declare namespace LightSDK {
    function register(options: any): void;
    const config: any;
    const native: Native;
    const net: any;
    const openAPI: any;
}

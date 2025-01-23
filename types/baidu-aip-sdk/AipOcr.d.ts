export = AipOcr;
/**
 * AipOcr类
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipOcr extends BaseClient {
    constructor(appId: any, ak: any, sk: any);
    commonImpl(param: any): any;
    /**
     * 通用文字识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    generalBasic(image: string, options: any): Promise<any>;
    /**
     * 通用文字识别接口
     *
     * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    generalBasicUrl(url: string, options: any): Promise<any>;
    /**
     * 通用文字识别（高精度版）接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    accurateBasic(image: string, options: any): Promise<any>;
    /**
     * 通用文字识别（含位置信息版）接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     *   vertexes_location 是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    general(image: string, options: any): Promise<any>;
    /**
     * 通用文字识别（含位置信息版）接口
     *
     * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     *   vertexes_location 是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    generalUrl(url: string, options: any): Promise<any>;
    /**
     * 通用文字识别（含位置高精度版）接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   vertexes_location 是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    accurate(image: string, options: any): Promise<any>;
    /**
     * 通用文字识别（含生僻字版）接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    generalEnhance(image: string, options: any): Promise<any>;
    /**
     * 通用文字识别（含生僻字版）接口
     *
     * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     *   probability 是否返回识别结果中每一行的置信度
     * @return {Promise} - 标准Promise对象
     */
    generalEnhanceUrl(url: string, options: any): Promise<any>;
    /**
     * 网络图片文字识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     * @return {Promise} - 标准Promise对象
     */
    webImage(image: string, options: any): Promise<any>;
    /**
     * 网络图片文字识别接口
     *
     * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
     * @return {Promise} - 标准Promise对象
     */
    webImageUrl(url: string, options: any): Promise<any>;
    /**
     * 身份证识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {string} idCardSide - front：身份证含照片的一面；back：身份证带国徽的一面
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   detect_risk 是否开启身份证风险类型(身份证复印件、临时身份证、身份证翻拍、修改过的身份证)功能，默认不开启，即：false。可选值:true-开启；false-不开启
     * @return {Promise} - 标准Promise对象
     */
    idcard(image: string, idCardSide: string, options: any): Promise<any>;
    /**
     * 银行卡识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    bankcard(image: string, options: any): Promise<any>;
    /**
     * 驾驶证识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     * @return {Promise} - 标准Promise对象
     */
    drivingLicense(image: string, options: any): Promise<any>;
    /**
     * 行驶证识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   accuracy normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延
     * @return {Promise} - 标准Promise对象
     */
    vehicleLicense(image: string, options: any): Promise<any>;
    /**
     * 车牌识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   multi_detect 是否检测多张车牌，默认为false，当置为true的时候可以对一张图片内的多张车牌进行识别
     * @return {Promise} - 标准Promise对象
     */
    licensePlate(image: string, options: any): Promise<any>;
    /**
     * 营业执照识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    businessLicense(image: string, options: any): Promise<any>;
    /**
     * 通用票据识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     *   probability 是否返回识别结果中每一行的置信度
     *   accuracy normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     * @return {Promise} - 标准Promise对象
     */
    receipt(image: string, options: any): Promise<any>;
    /**
     * 表格文字识别同步接口接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    form(image: string, options: any): Promise<any>;
    /**
     * 表格文字识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    tableBegin(image: string, options: any): Promise<any>;
    /**
     * 表格识别结果接口
     *
     * @param {string} requestId - 发送表格文字识别请求时返回的request id
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   result_type 期望获取结果的类型，取值为“excel”时返回xls文件的地址，取值为“json”时返回json格式的字符串,默认为”excel”
     * @return {Promise} - 标准Promise对象
     */
    tableGetresult(requestId: string, options: any): Promise<any>;
    /**
     * 增值税发票识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    vatInvoice(image: string, options: any): Promise<any>;
    /**
     * 增值税发票识别接口
     *
     * @param {string} image - url
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    vatInvoiceUrl(image: string, options: any): Promise<any>;
    /**
     * 增值税发票识别接口
     *
     * @param {string} image - pdf
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    vatInvoicePdf(image: string, options: any): Promise<any>;
    /**
     * 二维码识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    qrcode(image: string, options: any): Promise<any>;
    /**
     * 数字识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     * @return {Promise} - 标准Promise对象
     */
    numbers(image: string, options: any): Promise<any>;
    /**
     * 彩票识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     * @return {Promise} - 标准Promise对象
     */
    lottery(image: string, options: any): Promise<any>;
    /**
     * 护照识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    passport(image: string, options: any): Promise<any>;
    /**
     * 名片识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    businessCard(image: string, options: any): Promise<any>;
    /**
     * 手写文字识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     * @return {Promise} - 标准Promise对象
     */
    handwriting(image: string, options: any): Promise<any>;
    /**
     * 自定义模板文字识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {string} templateSign - 您在自定义文字识别平台制作的模板的ID
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    custom(image: string, templateSign: string, options: any): Promise<any>;
    tableRecorgnize(image: any, type: any, timeout: any, interval: any): Promise<any>;
    /**
     * 文档版面分析与识别
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param languageType
         识别语言类型，默认为CHN_ENG  可选值包括：CHN_ENG：中英文, ENG：英文
     * @param resultType
         返回识别结果是按单行结果返回，还是按单字结果返回，默认为big。
         big：返回行识别结果
         small：返回行识别结果之上还会返回单字结果
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *      detect_direction：
     *                  类型: string   可选值范围: true/false  说明：是否检测图像朝向，默认不检测，即：false。
     *      line_probability:
     *                  类型: string   可选值范围: true/false  说明：是否返回每行识别结果的置信度。默认为false
     *      words_type:
     *                  类型: string   可选值范围: handwring_only/handprint_mix  说明：文字类型, 默认 印刷文字识别
     *      layout_analysis：
     *                  类型: string   可选值范围: true/false  说明：是否分析文档版面：包括图、表、标题、段落的分析输出
     * @return {Promise} - 标准Promise对象
     */
    docAnalysis(image: string, languageType: any, resultType: any, options: any): Promise<any>;
    /**
     * 仪器仪表盘读数识别
     {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param options - options列表
     *      probability：
     *                  类型: string   可选值范围: true/false  说明：是否返回每行识别结果的置信度。默认为false
     *      poly_location:
     *                  类型: string   可选值范围: true/false  说明：位置信息返回形式，默认：false
     * @return
     */
    meter(image: any, options: any): any;
    /**
     * 网络图片文字识别（含位置版）
     * {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param options - options列表
     *      detect_direction：
     *                  类型: string   可选值范围: true/false  说明：是否检测图像朝向，默认不检测，即：false。
     *      probability:
     *                  类型: string   可选值范围: true/false  说明：是否返回每行识别结果的置信度。默认为false
     *      poly_location:
     *                  类型: string   可选值范围: handwring_only/handprint_mix  说明：是否返回文字所在区域的外接四边形的4个点坐标信息。默认为false
     *      recognize_granularity：
     *                  类型: string   可选值范围: true/false  说明：是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
     * @return
     */
    webimageLoc(image: any, options: any): any;
    /**
     * 出租车票识别
     * {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param options - options列表
     * @return
     */
    taxiReceipt(image: any, options: any): any;
    /**
     * 出租车票识别
     * {string} image - url
     * @param options - options列表
     * @return
     */
    taxiReceiptUrl(image: any, options: any): any;
    /**
     * VIN码识别
     * {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param options - options列表
     * @return
     */
    vinCode(image: any, options: any): any;
    /**
     * VIN码识别
     * {string} image - url
     * @param options - options列表
     * @return
     */
    vinCodeUrl(image: any, options: any): any;
    /**
     * 火车票识别
     * {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param options - options列表
     * @return
     */
    trainTicket(image: any, options: any): any;
    /**
     * 火车票识别
     * {string} image - url
     * @param options - options列表
     * @return
     */
    trainTicketUrl(image: any, options: any): any;
    /**
     * 二维码识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    qrcodeUrl(url: string, options: any): Promise<any>;
    /**
     * 试卷分析与识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   multi_detect 控制是否开启多航班信息识别功能,默认值：false
     * @return {Promise} - 标准Promise对象
     */
    docAnalysisUrl(url: string, options: any): Promise<any>;
    /**
     * 机动车销售发票
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    vehicleInvoice(image: string, options: any): Promise<any>;
    /**
     * 机动车销售发票
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    vehicleInvoiceUrl(url: string, options: any): Promise<any>;
    /**
     * 车辆合格证
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   language_type 识别语言类型，默认为CHN_ENG
     *   result_type 返回识别结果是按单行结果返回，还是按单字结果返回，默认为big
     *   detect_direction 是否检测图像朝向，默认不检测，即：false
     *   line_probability 是否返回每行识别结果的置信度。默认为false
     *   words_type 文字类型。
     * @return {Promise} - 标准Promise对象
     */
    vehicleCertificate(image: string, options: any): Promise<any>;
    /**
     * 车辆合格证
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   language_type 识别语言类型，默认为CHN_ENG
     *   result_type 返回识别结果是按单行结果返回，还是按单字结果返回，默认为big
     *   detect_direction 是否检测图像朝向，默认不检测，即：false
     *   line_probability 是否返回每行识别结果的置信度。默认为false
     *   words_type 文字类型。
     * @return {Promise} - 标准Promise对象
     */
    vehicleCertificateUrl(url: string, options: any): Promise<any>;
    /**
     * 户口本识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    householdRegister(image: string, options: any): Promise<any>;
    /**
     * 户口本识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    householdRegisterUrl(url: string, options: any): Promise<any>;
    /**
     * 手写文字识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   recognize_granularity 是否定位单字符位置，
     *   probability 是否返回识别结果中每一行的置信度，默认为false，不返回置信度
     *   detect_direction 是否检测图像朝向，默认不检测，即：false
     * @return {Promise} - 标准Promise对象
     */
    handwritingUrl(url: string, options: any): Promise<any>;
    /**
     * 飞机行程单识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   multi_detect 控制是否开启多航班信息识别功能,默认值：false
     * @return {Promise} - 标准Promise对象
     */
    airTicket(image: string, options: any): Promise<any>;
    /**
     * 飞机行程单识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   multi_detect 控制是否开启多航班信息识别功能,默认值：false
     * @return {Promise} - 标准Promise对象
     */
    airTicketUrl(url: string, options: any): Promise<any>;
    /**
     * 通用机打发票
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   location 是否输出位置信息，true：输出位置信息，false：不输出位置信息，默认false
     * @return {Promise} - 标准Promise对象
     */
    invoice(image: string, options: any): Promise<any>;
    /**
     * 通用机打发票
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   location 是否输出位置信息，true：输出位置信息，false：不输出位置信息，默认false
     * @return {Promise} - 标准Promise对象
     */
    invoiceUrl(url: string, options: any): Promise<any>;
    /**
     * 护照识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    passportUrl(url: string, options: any): Promise<any>;
    /**
     * 网约车行程单识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     * @return {Promise} - 标准Promise对象
     */
    onlineTaxiItinerary(image: string): Promise<any>;
    /**
     * 网约车行程单识别
     *
     * @param {string} url - 图片完整URL路径
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     * @return {Promise} - 标准Promise对象
     */
    onlineTaxiItineraryUrl(url: string): Promise<any>;
    /**
     * 网约车行程单识别
     *
     * @param {string} pdf_file - pdf文件二进制数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     * @return {Promise} - 标准Promise对象
     */
    onlineTaxiItineraryPdf(pdf_file: string, options: any): Promise<any>;
    /**
     * 磅单识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    weightNote(image: string, options: any): Promise<any>;
    /**
     * 磅单识别
     *
     * @param {string} url - 图片完整URL路径
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    weightNoteUrl(url: string, options: any): Promise<any>;
    /**
     * 磅单识别
     *
     * @param {string} pdf_file - 图片完整URL路径
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    weightNotePdf(pdf_file: string, options: any): Promise<any>;
    /**
     * 医疗费用明细识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   location 是否返回字段的位置信息，默认为 false，可缺省
                - false：不返回字段位置信息
                - true：返回字段的位置信息，包括上边距（top）、左边距（left）、宽度（width）、高度（height）
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    medicalDetail(image: string, options: any): Promise<any>;
    /**
     * 医疗费用明细识别
     *
     * @param {string} url - 图片完整URL路径
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   location 是否返回字段的位置信息，默认为 false，可缺省
                - false：不返回字段位置信息
                - true：返回字段的位置信息，包括上边距（top）、左边距（left）、宽度（width）、高度（height）
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    medicalDetailUrl(url: string, options: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");

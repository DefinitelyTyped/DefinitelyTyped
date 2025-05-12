export = AipImageProcess;
/**
 * AipImageProcess类
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipImageProcess extends BaseClient {
    constructor(appId: string, ak: string, sk: string);
    commonImpl(param: any): any;
    jsonRequestImpl(param: any): any;
    /**
     * 图像修复
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    inpaintingByMask(image: string, rectangle: any): Promise<any>;
    /**
     * 图像风格转换
     *
     * @param {string} image - 二进制图像数据
     * @param {string} option - 转换风格
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    styleTrans(image: string, options: any): Promise<any>;
    /**
     * 图像风格转换
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {string} option - 转换风格
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   pdf_file_num 需要识别的PDF文件的对应页码，当 pdf_file 参数有效时，识别传入页码的对应页面内容，若不传入，则默认识别第 1 页
     *   probability 是否返回字段识别结果的置信度，默认为 false，可缺省
                - false：不返回字段识别结果的置信度
                - true：返回字段识别结果的置信度，包括字段识别结果中各字符置信度的平均值（average）和最小值（min）
     * @return {Promise} - 标准Promise对象
     */
    styleTransUrl(url: string, options: any): Promise<any>;
    /**
     * 图像清晰度增强
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    imageDefinitionEnhance(image: string): Promise<any>;
    /**
     * 图像清晰度增强
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    imageDefinitionEnhanceUrl(url: string): Promise<any>;
    /**
     * 图像去雾
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    dehaze(image: string): Promise<any>;
    /**
     * 图像去雾
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    dehazeUrl(url: string): Promise<any>;
    /**
     * 拉伸图像恢复
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    stretchRestore(image: string): Promise<any>;
    /**
     * 拉伸图像恢复
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    stretchRestoreUrl(url: string): Promise<any>;
    /**
     * 图像色彩增强
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    colorEnhance(image: string): Promise<any>;
    /**
     * 图像色彩增强
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    colorEnhanceUrl(url: string): Promise<any>;
    /**
     * 天空分割
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    skySeg(image: string): Promise<any>;
    /**
     * 天空分割
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    skySegUrl(url: string): Promise<any>;
    /**
     * 黑白图像上色
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    colourize(image: string, options: any): Promise<any>;
    /**
     * 黑白图像上色
     *
     * @param {string} url - 图片完整URL路径
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    colourizeUrl(url: string, options: any): Promise<any>;
    /**
     * 图像对比度增强
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    contrastEnhance(image: string): Promise<any>;
    /**
     * 图像对比度增强
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    contrastEnhanceUrl(url: string): Promise<any>;
    /**
     * 图像无损放大
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    imageQualityEnhance(image: string): Promise<any>;
    /**
     * 图像无损放大
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    imageQualityEnhanceUrl(url: string): Promise<any>;
    /**
     * 人像动漫化
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   type anime或者anime_mask。前者生成二次元动漫图，后者生成戴口罩的二次元动漫人像
     *   mask_id 在type参数填入anime_mask时生效，1～8之间的整数，用于指定所使用的口罩的编码。type参数没有填入anime_mask，
                或mask_id 为空时，生成不戴口罩的二次元动漫图。
     * @return {Promise} - 标准Promise对象
     */
    selfieAnime(image: string, options: any): Promise<any>;
    /**
     * 人像动漫化
     *
     * @param {string} url - 图片完整URL路径,URL长度不超过1024字节
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   type anime或者anime_mask。前者生成二次元动漫图，后者生成戴口罩的二次元动漫人像
     *   mask_id 在type参数填入anime_mask时生效，1～8之间的整数，用于指定所使用的口罩的编码。type参数没有填入anime_mask，
                或mask_id 为空时，生成不戴口罩的二次元动漫图。
     * @return {Promise} - 标准Promise对象
     */
    selfieAnimeUrl(url: string, options: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");

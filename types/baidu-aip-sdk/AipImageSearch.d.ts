export = AipImageSearch;
/**
 * AipImageSearch类
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipImageSearch extends BaseClient {
    constructor(appId: string, ak: string, sk: string);
    commonImpl(param: any): any;
    /**
     * 相同图检索—入库接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   brief 检索时原样带回,最长256B。
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     * @return {Promise} - 标准Promise对象
     */
    sameHqAdd(image: string, brief: any, options: any): Promise<any>;
    /**
     * 相同图检索—入库接口
     *
     * @param {string} url - 图像url
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   brief 检索时原样带回,最长256B。
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     * @return {Promise} - 标准Promise对象
     */
    sameHqAddUrl(url: string, brief: any, options: any): Promise<any>;
    /**
     * 相同图检索—检索接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
     *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
     *   rn 分页功能，截取条数，例：250
     * @return {Promise} - 标准Promise对象
     */
    sameHqSearch(image: string, options: any): Promise<any>;
    /**
     * 相同图检索—检索接口
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
     *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
     *   rn 分页功能，截取条数，例：250
     * @return {Promise} - 标准Promise对象
     */
    sameHqSearchUrl(url: string, options: any): Promise<any>;
    /**
     * 相同图片搜索—更新-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    sameHqUpdate(image: string, options: any): Promise<any>;
    /**
     *  相同图片搜索—更新-url
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    sameHqUpdateUrl(url: string, options: any): Promise<any>;
    /**
     * 相同图片搜索——更新-cont_sign
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    sameHqUpdateContSign(contSign: string, options: any): Promise<any>;
    /**
     * 相同图检索—删除接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    sameHqDeleteByImage(image: string, options: any): Promise<any>;
    /**
     * 相同图检索—删除接口
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    sameHqDeleteBySign(contSign: string, options: any): Promise<any>;
    /**
     * 相同图检索—删除接口
     *
     * @param {string} url - 图片url
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    sameHqDeleteByUrl(url: string, options: any): Promise<any>;
    /**
     * 相似图检索—入库接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   brief 检索时原样带回,最长256B。
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     * @return {Promise} - 标准Promise对象
     */
    similarAdd(image: string, options: any): Promise<any>;
    /**
     * 相似图检索—入库接口
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   brief 检索时原样带回,最长256B。
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     * @return {Promise} - 标准Promise对象
     */
    similarAddUrl(url: string, options: any): Promise<any>;
    /**
     * 相似图检索—检索接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
     *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
     *   rn 分页功能，截取条数，例：250
     * @return {Promise} - 标准Promise对象
     */
    similarSearch(image: string, options: any): Promise<any>;
    /**
     * 相似图检索—检索接口
     *
     * @param {string} image - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
     *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
     *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
     *   rn 分页功能，截取条数，例：250
     * @return {Promise} - 标准Promise对象
     */
    similarSearchUrl(url: any, options: any): Promise<any>;
    /**
     * 相似图检索—更新-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    similarUpdate(image: string, options: any): Promise<any>;
    /**
     *  相似图检索——更新-url
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    similarUpdateUrl(url: string, options: any): Promise<any>;
    /**
     * 相似图检索——更新-cont_sign
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    similarUpdateContSign(contSign: string, options: any): Promise<any>;
    /**
     * 相似图检索—删除接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    similarDeleteByImage(image: string, options: any): Promise<any>;
    /**
     * 相似图检索—删除接口
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    similarDeleteByUrl(url: string, options: any): Promise<any>;
    /**
     * 相似图检索—删除接口
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    similarDeleteBySign(contSign: string, options: any): Promise<any>;
    /**
     * 商品检索—入库接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   brief 检索时原样带回,最长256B。**请注意，检索接口不返回原图，仅反馈当前填写的brief信息，所以调用该入库接口时，brief信息请尽量填写可关联至本地图库的图片id或者图片url、图片名称等信息**
     *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     * @return {Promise} - 标准Promise对象
     */
    productAdd(image: string, options: any): Promise<any>;
    /**
     * 商品检索—入库接口
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   brief 检索时原样带回,最长256B。**请注意，检索接口不返回原图，仅反馈当前填写的brief信息，所以调用该入库接口时，brief信息请尽量填写可关联至本地图库的图片id或者图片url、图片名称等信息**
     *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     * @return {Promise} - 标准Promise对象
     */
    productAddUrl(url: string, options: any): Promise<any>;
    /**
     * 商品检索—检索接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
     *   rn 分页功能，截取条数，例：250
     * @return {Promise} - 标准Promise对象
     */
    productSearch(image: string, options: any): Promise<any>;
    /**
     * 商品检索—检索接口
     *
     * @param {string} url - 图片url
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
     *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
     *   rn 分页功能，截取条数，例：250
     * @return {Promise} - 标准Promise对象
     */
    productSearchUrl(url: string, options: any): Promise<any>;
    /**
     * 商品检索—更新-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    productUpdate(image: string, options: any): Promise<any>;
    /**
     *  商品检索——更新-url
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    productUpdateUrl(url: string, options: any): Promise<any>;
    /**
     * 商品检索——更新-cont_sign
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    productUpdateContSign(contSign: string, options: any): Promise<any>;
    /**
     * 商品检索—删除接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    productDeleteByImage(image: string, options: any): Promise<any>;
    /**
     * 商品检索—删除接口
     *
     * @param {string} url - 图像url
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    productDeleteByUrl(url: string, options: any): Promise<any>;
    /**
     * 商品检索—删除接口
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    productDeleteBySign(contSign: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—入库-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {string} brief - 简介
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookAddImage(image: string, brief: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—入库-url
     *
     * @param {string} url - 图片地址
     * @param {string} brief - 简介
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookAddUrl(url: string, brief: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—检索-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookSearchImage(image: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—检索-url
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookSearchUrl(url: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—更新-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookUpdate(image: string, options: any): Promise<any>;
    /**
     *  绘本图片搜索—更新-url
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookUpdateUrl(url: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—更新-cont_sign
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookUpdateContSign(contSign: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—删除-image
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookDeleteByImage(image: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—删除-url
     *
     * @param {string} url - 图片地址
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookDeleteByUrl(url: string, options: any): Promise<any>;
    /**
     * 绘本图片搜索—删除-cont_sign
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    pictureBookDeleteBySign(contSign: string, options: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");

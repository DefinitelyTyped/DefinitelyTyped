export = AipImageClassify;
/**
 * AipImageClassify类
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipImageClassify extends BaseClient {
    constructor(appId: string, ak: string, sk: string);
    commonImpl(param: any): any;
    /**
     * 通用物体识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    advancedGeneral(image: string, options: any): Promise<any>;
    /**
     * 菜品识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   top_num 返回预测得分top结果数，默认为5
     * @return {Promise} - 标准Promise对象
     */
    dishDetect(image: string, options: any): Promise<any>;
    /**
     * 车辆识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   top_num 返回预测得分top结果数，默认为5
     * @return {Promise} - 标准Promise对象
     */
    carDetect(image: string, options: any): Promise<any>;
    /**
     * logo商标识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   custom_lib 是否只使用自定义logo库的结果，默认false：返回自定义库+默认库的识别结果
     * @return {Promise} - 标准Promise对象
     */
    logoSearch(image: string, options: any): Promise<any>;
    /**
     * logo商标识别—添加接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {string} brief - brief，检索时带回。此处要传对应的name与code字段，name长度小于100B，code长度小于150B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    logoAdd(image: string, brief: string, options: any): Promise<any>;
    /**
     * logo商标识别—删除接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    logoDeleteByImage(image: string, options: any): Promise<any>;
    /**
     * logo商标识别—删除接口
     *
     * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    logoDeleteBySign(contSign: string, options: any): Promise<any>;
    /**
     * 动物识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   top_num 返回预测得分top结果数，默认为6
     * @return {Promise} - 标准Promise对象
     */
    animalDetect(image: string, options: any): Promise<any>;
    /**
     * 植物识别接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    plantDetect(image: string, options: any): Promise<any>;
    /**
     * 图像主体检测接口
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   with_face 如果检测主体是人，主体区域是否带上人脸部分，0-不带人脸区域，其他-带人脸区域，裁剪类需求推荐带人脸，检索/识别类需求推荐不带人脸。默认取1，带人脸。
     * @return {Promise} - 标准Promise对象
     */
    objectDetect(image: string, options: any): Promise<any>;
    /**
     * 自定义菜品识别—入库
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {string} brief - 简介
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    customDishesAddImage(image: string, brief: string, options: any): Promise<any>;
    /**
     * 自定义菜品识别—检索
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    customDishesSearch(image: string, options: any): Promise<any>;
    /**
     * 自定义菜品识别—删除
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    customDishesDeleteImage(image: string, options: any): Promise<any>;
    /**
     * 自定义菜品识别—删除
     *
     * @param {string} cont_sign - 图片签名
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    customDishesDeleteContSign(cont_sign: string, options: any): Promise<any>;
    /**
     * 图像多主体检测
     *
     * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    multiObjectDetect(image: string, options: any): Promise<any>;
    /**
     * 车辆属性识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   type 是否选定某些属性输出对应的信息，可从12种输出属性中任选若干，用英文逗号分隔（例如vehicle_type,roof_rack,skylight）。默认输出全部属性
     * @return {Promise} - 标准Promise对象
     */
    vehicleAttr(image: string, options: any): Promise<any>;
    /**
     * 车辆属性识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   type 是否选定某些属性输出对应的信息，可从12种输出属性中任选若干，用英文逗号分隔（例如vehicle_type,roof_rack,skylight）。默认输出全部属性
     * @return {Promise} - 标准Promise对象
     */
    vehicleAttrUrl(url: string, options: any): Promise<any>;
    /**
     * 车辆检测-高空版
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   area 只统计该矩形区域内的车辆数，缺省时为全图统计。逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的x、y坐标（默认尾点和首点相连），形成闭合矩形区域。
     * @return {Promise} - 标准Promise对象
     */
    vehicleDetectHigh(image: string, options: any): Promise<any>;
    /**
     * 车辆检测-高空版
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   area 只统计该矩形区域内的车辆数，缺省时为全图统计。逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的x、y坐标（默认尾点和首点相连），形成闭合矩形区域。
     * @return {Promise} - 标准Promise对象
     */
    vehicleDetectHighUrl(url: string, options: any): Promise<any>;
    /**
     * 车型识别
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   top_num 返回结果top n，默认5。e
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return {Promise} - 标准Promise对象
     */
    carDetectUrl(url: string, options: any): Promise<any>;
    /**
     * 车辆检测
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   area 只统计该矩形区域内的车辆数，缺省时为全图统计。逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的x、y坐标（默认尾点和首点相连），形成闭合矩形区域。
     * @return {Promise} - 标准Promise对象
     */
    vehicleDetect(image: string, options: any): Promise<any>;
    /**
     * 车辆检测
     *
     * @param {string} url - 图片完整URL
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   area 只统计该矩形区域内的车辆数，缺省时为全图统计。逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的x、y坐标（默认尾点和首点相连），形成闭合矩形区域。
     * @return {Promise} - 标准Promise对象
     */
    vehicleDetectUrl(url: string, options: any): Promise<any>;
    /**
     * 车辆分割
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   type 可以通过设置type参数，自主设置返回哪些结果图，避免造成带宽的浪费。1）可选值说明：labelmap - 二值图像，需二次处理方能查看分割效果scoremap - 车辆前景灰度图2）type 参数值可以是可选值的组合，用逗号分隔；如果无此参数默认输出全部3类结果图
     * @return {Promise} - 标准Promise对象
     */
    vehicleSeg(image: string, options: any): Promise<any>;
    /**
     * 车辆外观损伤识别
     *
     * @param {string} image - 二进制图像数据
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    vehicleDamage(image: string, options: any): Promise<any>;
    /**
     * 车流统计
     *
     * @param {string} image - 二进制图像数据
     * @param {string} case_id - 任务ID（通过case_id区分不同视频流，自拟，不同序列间不可重复）
     * @param {string} case_init - 每个case的初始化信号，为true时对该case下的跟踪算法进行初始化，为false时重载该case的跟踪状态。当为false且读取不到相应case的信息时，直接重新初始化
     * @param {string} area - 只统计进出该区域的车辆。逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的x、y坐标（默认尾点和首点相连），形成闭合多边形区域。
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   show 是否返回结果图（含统计值和跟踪框）。选true时返回渲染后的图片(base64)，其它无效值或为空则默认false。
     * @return {Promise} - 标准Promise对象
     */
    trafficFlow(image: string, case_id: string, case_init: string, area: string, options: any): Promise<any>;
    /**
     * 车流统计
     *
     * @param {string} url - 图片完整URL
     * @param {string} case_id - 任务ID（通过case_id区分不同视频流，自拟，不同序列间不可重复）
     * @param {string} case_init - 每个case的初始化信号，为true时对该case下的跟踪算法进行初始化，为false时重载该case的跟踪状态。当为false且读取不到相应case的信息时，直接重新初始化
     * @param {string} area - 只统计进出该区域的车辆。逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的x、y坐标（默认尾点和首点相连），形成闭合多边形区域。
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   show 是否返回结果图（含统计值和跟踪框）。选true时返回渲染后的图片(base64)，其它无效值或为空则默认false。
     * @return {Promise} - 标准Promise对象
     */
    trafficFlowUrl(url: string, case_id: string, case_init: string, area: string, options: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");

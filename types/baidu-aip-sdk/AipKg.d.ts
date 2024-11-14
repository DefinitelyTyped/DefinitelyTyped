export = AipKg;
/**
 * AipKg类
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipKg extends BaseClient {
    constructor(appId: string, ak: string, sk: string);
    commonImpl(param: any): any;
    /**
     * 创建任务接口
     *
     * @param {string} name - 任务名字
     * @param {string} templateContent - json string 解析模板内容
     * @param {string} inputMappingFile - 抓取结果映射文件的路径
     * @param {string} outputFile - 输出文件名字
     * @param {string} urlPattern - url pattern
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   limit_count 限制解析数量limit_count为0时进行全量任务，limit_count&gt;0时只解析limit_count数量的页面
     * @return {Promise} - 标准Promise对象
     */
    createTask(
        name: string,
        templateContent: string,
        inputMappingFile: string,
        outputFile: string,
        urlPattern: string,
        options: any,
    ): Promise<any>;
    /**
     * 更新任务接口
     *
     * @param {number} id - 任务ID
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   name 任务名字
     *   template_content json string 解析模板内容
     *   input_mapping_file 抓取结果映射文件的路径
     *   url_pattern url pattern
     *   output_file 输出文件名字
     * @return {Promise} - 标准Promise对象
     */
    updateTask(id: number, options: any): Promise<any>;
    /**
     * 获取任务详情接口
     *
     * @param {number} id - 任务ID
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    getTaskInfo(id: number, options: any): Promise<any>;
    /**
     * 以分页的方式查询当前用户所有的任务信息接口
     *
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   id 任务ID，精确匹配
     *   name 中缀模糊匹配,abc可以匹配abc,aaabc,abcde等
     *   status 要筛选的任务状态
     *   page 页码
     *   per_page 页码
     * @return {Promise} - 标准Promise对象
     */
    getUserTasks(options: any): Promise<any>;
    /**
     * 启动任务接口
     *
     * @param {number} id - 任务ID
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    startTask(id: number, options: any): Promise<any>;
    /**
     * 查询任务状态接口
     *
     * @param {number} id - 任务ID
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    getTaskStatus(id: number, options: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");

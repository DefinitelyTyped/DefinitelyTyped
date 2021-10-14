/**
 * 数据存储
 * 接口声明: {"name": "system.storage"}
 */
declare module '@system.storage' {
    /**
     * 存储里的数据项的数量
     */
    export const length: number;

    /**
     * 读取存储内容
     * @param obj
     */
    function get(obj: {
        /**
         * 索引
         */
        key: string;
        /**
         * 如果 key 不存在，返回 default。如果 default 未指定，返回长度为 0 的空字符串
         */
        default?: string;
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
     * 修改存储内容
     * @param obj
     */
    function set(obj: {
        /**
         * 索引
         */
        key: string;
        /**
         * 新值。如果新值是长度为0的空字符串，会删除以key为索引的数据项
         */
        value?: string;
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
     * 清空存储内容
     * @param obj
     */
    function clear(obj: {
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
     * 删除存储内容
     * @param obj
     */
    function _delete(obj: {
        /**
         * 索引
         */
        key: string;
        /**
         * 成功回调
         */
        success?: (data: any) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
    export { _delete as delete };

    /**
     * 返回存储中某个index的键名
     * [1050+]
     * @param obj
     */
    function key(obj: {
        /**
         * 要查询的键名对应的索引
         */
        index: number;
        /**
         * 成功回调
         */
        success?: (data: string) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}

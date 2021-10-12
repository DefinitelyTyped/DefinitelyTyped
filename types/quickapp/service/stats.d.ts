/**
 * 统计
 * 接口声明: {"name": "service.stats"}
 */
declare module '@service.stats' {
    /**
     * 获取服务提供商
     * @returns string 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    /**
     * 计数类型事件。通常用来描述⼀个事件累积发⽣的次数，适用的场景如按钮点击、界面进入、用户输入等。
     * @param obj
     */
    function recordCountEvent(obj: {
        /**
         * 定义事件的类别.开发者可使用该参数对⾃定义打点做整理归类
         */
        category?: string;
        /**
         * 定义事件的主键，作为该事件的唯⼀标识
         */
        key: string;
        /**
         * 定义事件的属性和取值（Key-Value 键值对）
         */
        map?: object;
    }): void;

    /**
     * 计算类型事件。用通常用来描述⼀个带数值的事件的发⽣，适用的场景如用户消费事件，附带的数值是每次消费的⾦额；下载⽂件事件，附带的数值是每次下载消耗的时间等。
     * @param obj
     */
    function recordCalculateEvent(obj: {
        /**
         * 定义事件的类别.开发者可使用该参数对⾃定义打点做整理归类
         */
        category?: string;
        /**
         * 定义事件的主键，作为该事件的唯⼀标识
         */
        key: string;
        /**
         * 定义事件的值
         */
        value: number;
        /**
         * 定义事件的属性和取值（Key-Value 键值对）
         */
        map?: object;
    }): void;
}

import Vue from 'vue';

/**
 * 定义 vue-cookie 的类型定义文件。
 *
 * @author ChenYong
 * @date 2018-09-07
 */
export declare class VueCookie {
    /**
     * 构造器
     */
    constructor();

    /**
     * 插件入口。
     *
     * @param vue Vue 类
     */
    static install(vue: typeof Vue): void;

    /**
     * 设置 cookie。
     *
     * @param name 名称
     * @param value 值
     * @param daysOrOptions 过期配置
     */
    set(name: string, value: string | number, daysOrOptions?: number | Expires): void;

    /**
     * 获取 cookie。
     *
     * @param name 名称
     */
    get(name: string): string;

    /**
     * 删除 cookie。
     *
     * @param name 名称
     * @param options 配置
     */
    delete(name: string, options?: object): string;
}

/**
 * 过期类型。
 */
type Expires = {
    expires: number;
};

/**
 * 数据存储
 * 接口声明: {"name": "system.storage"}
 */
declare module "@system.storage" {
    interface GetOptions {
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
        success?: (data: string) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface SetOptions {
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
    }

    interface ClearOptions {
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

    interface DeleteOptions {
        /**
         * 索引
         */
        key: string;
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

    interface KeyOptions {
        /**
         * 要查询的键名对应的索引
         */
        index: number;
        /**
         * 成功回调
         */
        success?: (data: string[]) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    class Storage {
        /**
         * 存储里的数据项的数量
         * [1050+]
         */
        length: number;

        /**
         * 读取存储内容
         */
        get(obj: GetOptions): void;

        /**
         * 修改存储内容
         */
        set(obj: SetOptions): void;

        /**
         * 清空存储内容
         */
        clear(obj?: ClearOptions): void;

        /**
         * 删除存储内容
         */
        delete(obj: DeleteOptions): void;

        /**
         * 返回存储中某个index的键名
         * [1050+]
         */
        key(obj: KeyOptions): void;
    }

    const storage: InstanceType<typeof Storage>;

    export default storage;
}

declare module "quickapp:@system.storage" {
    export * from "@system.storage";
    import storage from "@system.storage";
    export default storage;
}

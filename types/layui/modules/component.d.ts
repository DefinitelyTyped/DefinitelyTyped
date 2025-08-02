declare namespace Layui {
    interface ComponentOptions<TConfig, TInstance> {
        /** 组件名称 */
        name: string;
        /** 是否默认为深度重载 */
        isDeepReload?: boolean;
        /** 组件常量集 */
        CONST?: Record<string, any>;
        /** 组件默认配置 */
        config?: TConfig;
        /** 初始化前回调 */
        beforeInit?(this: TInstance, config: TConfig): void;
        /** 渲染前回调 */
        beforeRender?(this: TInstance, config: TConfig): void;
        /** 渲染函数 */
        render(this: TInstance, rerender?: boolean): void;
        /** 事件绑定函数 */
        events?(this: TInstance): void;
        /** 扩展实例对象的方法 */
        extendsInstance?(this: TInstance): Record<string, any>;
    }

    class Component<TConfig extends Record<string, any> = {}> {
        constructor(config: TConfig);
        /** 实例配置 */
        config: TConfig;
        /** 实例索引 */
        index: number;
        /** 初始化方法 */
        init(rerender?: boolean, type?: any): void;
        /** 重载方法 */
        reload(options: Partial<TConfig>, type?: any): void;
        /** 缓存操作 */
        cache(key: string, value?: any, remove?: boolean): any;
        /** 删除缓存 */
        removeCache(key: string): void;
        /** 渲染函数 */
        render: ComponentOptions<TConfig, this>["render"];
        /** 事件绑定函数 */
        events: ComponentOptions<TConfig, this>["events"];
    }

    interface ComponentReturn<TConfig> {
        config: TConfig;
        id: string;
        reload: (options?: Partial<TConfig>) => void;
    }

    interface ComponentInterface<
        TConfig extends Record<string, any> = {},
        TInstance extends Component<TConfig> = Component<TConfig>,
        TReturn extends ComponentReturn<TConfig> = ComponentReturn<TConfig>,
    > {
        /** 全局配置 */
        config: TConfig;
        /** 组件索引 */
        index: number;
        /** 组件常量集 */
        CONST: {
            MOD_NAME: ComponentOptions<TConfig, TInstance>["name"];
            MOD_ID: `lay-${ComponentOptions<TConfig, TInstance>["name"]}-id`;
            CLASS_THIS: "layui-this";
            CLASS_SHOW: "layui-show";
            CLASS_HIDE: "layui-hide";
            CLASS_HIDEV: "layui-hide-v";
            CLASS_DISABLED: "layui-disabled";
            CLASS_NONE: "layui-none";
        } & Record<string, any>;
        /** 设置全局配置 */
        set(options: Partial<TConfig>): this;
        /** 事件监听 */
        on(events: string, callback: AnyFn): this;
        /** 获取实例 */
        getInst(id: string): TInstance | undefined;
        /**
         * 获取实例
         * @deprecated 2.10.3 已废弃，请使用 {@link getInst} 方法
         */
        getThis: ComponentInterface<TConfig, TInstance, TReturn>["getInst"];
        /** 获取所有实例 */
        getAllInst(): Record<string, TInstance>;
        /** 删除实例 */
        removeInst(id: string): void;
        /** 组件缓存 */
        cache: {
            id: Record<string, any>;
        };
        /** 组件构造函数 */
        Class: new(config: TConfig) => TInstance;
        /** 组件重载 */
        reload(
            id: string,
            options: Partial<TConfig>,
        ): ReturnType<ComponentInterface<TConfig, TInstance, TReturn>["render"]>;
        /** 组件渲染 */
        render(options: TConfig): TReturn;
    }

    /**
     * 组件构建器
     */
    interface ComponentBuilder<
        TConfig extends Record<string, any> = {},
        TInstance extends Component<TConfig> = Component<TConfig>,
        TReturn extends ComponentReturn<TConfig> = ComponentReturn<TConfig>,
    > {
        (options: ComponentOptions<TConfig, TInstance>): ComponentInterface<TConfig, TInstance, TReturn>;
    }
}

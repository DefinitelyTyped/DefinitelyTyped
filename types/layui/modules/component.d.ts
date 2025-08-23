declare namespace Layui {
    interface ComponentBuilderOptions<TConfig, TInstance> {
        /**
         * 组件名称
         * @since 2.10.0
         */
        name: string;
        /**
         * 是否默认为深度重载
         * @since 2.10.0
         */
        isDeepReload?: boolean;
        /**
         * 组件常量集
         * @since 2.10.0
         */
        CONST?: Record<string, string>;
        /**
         * 组件默认配置
         */
        config?: TConfig;
        /**
         * 初始化前回调
         * @since 2.10.0
         */
        beforeInit?(this: TInstance, config: TConfig): void;
        /**
         * 渲染前回调
         * @since 2.10.0
         */
        beforeRender?(this: TInstance, config: TConfig): void;
        /**
         * 渲染函数
         * @since 2.10.0
         */
        render(this: TInstance, rerender?: boolean): void;
        /**
         * 事件绑定函数
         * @since 2.10.0
         */
        events?(this: TInstance): void;
        /**
         * 扩展实例对象的方法
         * @since 2.10.0
         */
        extendsInstance?(this: TInstance): Record<string, any>;
    }

    class Component<TConfig extends Record<string, any> = {}> {
        constructor(config: TConfig);
        /**
         * 实例配置
         */
        config: TConfig;
        /**
         * 实例索引
         * @since 2.10.0
         */
        index: number;
        /**
         * 初始化方法
         * @since 2.10.0
         */
        init(rerender?: boolean, type?: any): void;
        /**
         * 重载方法
         * @since 2.10.0
         */
        reload(options: Partial<TConfig>, type?: any): void;
        /**
         * 缓存操作
         * @since 2.10.0
         */
        cache(key: string, value?: any, remove?: boolean): any;
        /**
         * 删除缓存
         * @since 2.10.0
         */
        removeCache(key: string): void;
        /**
         * 渲染函数
         * @since 2.10.0
         */
        render: ComponentBuilderOptions<TConfig, this>["render"];
        /**
         * 事件绑定函数
         * @since 2.10.0
         */
        events: ComponentBuilderOptions<TConfig, this>["events"];
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
        /**
         * 全局配置
         */
        config: TConfig;
        /**
         * 组件索引
         * @since 2.10.0
         */
        index: number;
        /**
         * 组件常量集
         * @since 2.10.0
         */
        CONST: {
            MOD_NAME: string;
            MOD_ID: string;
            CLASS_THIS: string;
            CLASS_SHOW: string;
            CLASS_HIDE: string;
            CLASS_HIDEV: string;
            CLASS_DISABLED: string;
            CLASS_NONE: string;
        } & Record<string, string>;
        /**
         * 设置全局配置
         * @since 2.10.0
         */
        set(options: Partial<TConfig>): this;
        /**
         * 事件监听
         * @since 2.10.0
         */
        on(events: string, callback: AnyFn): this;
        /**
         * 获取实例
         * @since 2.10.3
         */
        getInst(id: string): TInstance | undefined;
        /**
         * 获取实例
         * @deprecated 2.10.3 已废弃，请使用 {@link getInst} 方法
         */
        getThis: ComponentInterface<TConfig, TInstance, TReturn>["getInst"];
        /**
         * 获取所有实例
         * @since 2.10.0
         */
        getAllInst(): Record<string, TInstance>;
        /**
         * 删除实例
         * @since 2.10.3
         */
        removeInst(id: string): void;
        /**
         * 组件缓存
         * @since 2.10.0
         */
        cache: {
            id: Record<string, any>;
        };
        /**
         * 组件构造函数
         * @since 2.10.0
         */
        Class: new(config: TConfig) => TInstance;
        /**
         * 组件重载
         * @since 2.10.0
         */
        reload(
            id: string,
            options: Partial<TConfig>,
        ): ReturnType<ComponentInterface<TConfig, TInstance, TReturn>["render"]>;
        /**
         * 组件渲染
         * @since 2.10.0
         */
        render(options: TConfig): TReturn;
    }

    /**
     * 组件构建器
     * @since 2.10.0
     */
    interface ComponentBuilder<
        TConfig extends Record<string, any> = {},
        TInstance extends Component<TConfig> = Component<TConfig>,
        TReturn extends ComponentReturn<TConfig> = ComponentReturn<TConfig>,
    > {
        (options: ComponentBuilderOptions<TConfig, TInstance>): ComponentInterface<TConfig, TInstance, TReturn>;
    }
}

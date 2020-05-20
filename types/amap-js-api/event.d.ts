declare namespace AMap {
    abstract class EventEmitter {
        /**
         * 注册事件
         * @param eventName 事件名称
         * @param handler 事件回调函数
         * @param context 事件回调中的上下文
         * @param once 触发一次
         * @param unshift 更改事件顺序
         */
        on<C = this>(
            eventName: string,
            handler: (this: C, event: any) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        /**
         * 移除事件绑定
         * @param eventName 事件名称
         * @param handler 事件功能函数
         * @param context 事件上下文
         */
        off<C = this>(
            eventName: string,
            handler: ((this: C, event: any) => void) | 'mv',
            context?: C
        ): this;
        /**
         * 触发事件
         * @param eventName 事件名称
         * @param data 事件数据
         */
        emit(eventName: string, data?: any): this;
    }

    namespace event {
        interface EventListener<T extends 0 | 1> {
            type: T;
        }
        /**
         * 注册DOM对象事件
         * @param instance 需注册事件的DOM对象
         * @param eventName 事件名称
         * @param handler 事件功能函数
         * @param context 事件上下文
         */
        function addDomListener<N extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, C = HTMLElementTagNameMap[N]>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: HTMLElementTagNameMap[N],
            eventName: E,
            handler: (this: C, event: HTMLElementEventMap[E]) => void,
            context?: C
        ): EventListener<0>;
        /**
         * 给对象注册事件
         * @param instance 需注册事件的对象
         * @param eventName 事件名称
         * @param handler 事件功能函数
         * @param context 事件上下文
         */
        function addListener<I extends EventEmitter, C = I>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: I,
            eventName: string,
            handler: (this: C, event: any) => void,
            context?: C
        ): EventListener<1>;
        /**
         * 给对象注册一次性事件
         * @param instance 需注册事件的对象
         * @param eventName 事件名称
         * @param handler 事件功能函数
         * @param context 事件上下文
         */
        function addListenerOnce<I extends EventEmitter, C = I>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: I,
            eventName: string,
            handler: (this: C, event: any) => void,
            context?: C
        ): EventListener<1>;
        /**
         * 删除事件
         * @param listener 侦听器
         */
        function removeListener(listener: EventListener<0 | 1>): void;
        /**
         * 触发非DOM事件
         * @param instance 触发对象
         * @param eventName 事件名称
         * @param data 事件数据
         */
        function trigger(instance: EventEmitter, eventName: string, data?: any): void;
    }
}

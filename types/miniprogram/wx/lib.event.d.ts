/**
 * 事件对象类型
 */
declare namespace event {
    interface Target {
        /**
         * 事件组件的id
         */
        id: string;
        /**
         * 当前组件的类型
         */
        tagName: string;
        /**
         * 事件组件上由data-开头的自定义属性组成的集合
         */
        dataset: Record<string, any>;
    }

    /**
     * base事件参数
     */
    interface Base {
        /**
         * 事件类型
         */
        type: string;
        /**
         * 页面打开到触发事件所经过的毫秒数
         */
        timeStamp: number;
        /**
         * 触发事件的源组件
         */
        target: Target;
        /**
         * 事件绑定的当前组件
         */
        currentTarget: Target;
    }

    /**
     * 自定义事件
     */
    interface Custom<P extends Record<string, any> = Record<string, any>>
        extends Base {
        /**
         * 额外的信息
         */
        detail: P;
    }

    /**
     * Touch 对象
     */
    interface TouchDetail {
        /**
         * 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴
         */
        clientX: number;
        /**
         * 距离页面可显示区域（屏幕除去导航条）左上角距离，纵向为Y轴
         */
        clientY: number;
        /**
         * 触摸点的标识符
         */
        identifier: number;
        /**
         * 距离文档左上角的距离，文档的左上角为原点，横向为X轴
         */
        pageX: number;
        /**
         * 距离文档左上角的距离，文档的左上角为原点，纵向为Y轴
         */
        pageY: number;
    }

    /**
     * 触摸事件响应
     */
    interface Touch<
        P extends Record<string, any> = Record<string, any>,
        T extends TouchDetail | TouchCanvasDetail = TouchDetail
    > extends Custom<P> {
        /**
         * 触摸事件，当前停留在屏幕中的触摸点信息的数组
         */
        touches: T[];
        /**
         * 触摸事件，当前变化的触摸点信息的数组
         */
        changedTouches: T[];
    }

    /**
     * canvas Touch 对象
     */
    interface TouchCanvasDetail {
        /**
         * 触摸点的标识符
         */
        identifier: number;
        /**
         * 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为X轴
         */
        x: number;
        /**
         * 距离 Canvas 左上角的距离，Canvas 的左上角为原点 纵向为Y轴
         */
        y: number;
    }

    /**
     * canvas触摸事件响应
     */
    interface TouchCanvas extends Touch<never, TouchCanvasDetail> {
        /**
         * <canvas> 中的触摸事件不可冒泡，所以没有 currentTarget。
         */
        currentTarget: never;
    }
}

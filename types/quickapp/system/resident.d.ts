/**
 * 后台运行[1050+]
 * 为了节省系统资源，通常情况下，快应用切换到后台后将会暂停运行。如果有后台运行的需求，快应用需要在 manifest 中申请， 并使用本接口启动后台运行模式。后台运行详细使用方法参见后台运行 脚本。
 * 接口声明: { "name": "system.resident" }
 */
declare module '@system.resident' {
    /**
     * 启动后台运行。此接口可多次调用，最后一次调用时的 desc 参数作为描述文案显示到通知栏上(有音乐播放通知时，不显示本通知)。
     * @param obj
     */
    function start(obj: {
        /**
         * 更新后台通知的描述信息
         */
        desc?: string;
    }): void;

    /**
     * 停止后台运行。即使start调用多次，stop调用一次即可停止后台运行。
     */
    function stop(): void;
}

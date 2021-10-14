/**
 * 日历事件
 * 接口声明: {"name": "system.calendar"}
 */
declare module '@system.calendar' {
    /**
     * 插入日历事件
     * @param obj
     */
    function insert(obj: {
        /**
         * 事件的标题
         */
        title: string;
        /**
         * 事件开始时间，以从公元纪年开始计算的协调世界时毫秒数表示
         */
        startDate: number;
        /**
         * 事件结束时间，以从公元纪年开始计算的协调世界时毫秒数表示
         */
        endDate: number;
        /**
         * 事件的描述
         */
        description?: string;
        /**
         * 事件的时区
         */
        timezone?: string;
        /**
         * true 表示此事件占用一整天（按照本地时区的定义）。 false 表示它是常规事件，可在一天内的任何时间开始和结束
         */
        allDay?: boolean;
        /**
         * 事件的重复发生规则格式。例如，"FREQ=WEEKLY;COUNT=10;WKST=SU"。 您可以在此处找到更多示例
         */
        rrule?: string;
        /**
         * 在事件开始前几分钟进行提醒。例如：[5,15,30]
         */
        remindMinutes?: number[];
        /**
         * 事件组织者（所有者）的电子邮件
         */
        organizer?: string;
        /**
         * 成功回调，值为插入成功的 id
         */
        success?: (id: any) => void;
        /**
         * 失败回调
         * 201: 用户拒绝，获取写日历权限失败
         * 202: 参数非法，如输入时间格式不对、参数不符合标准
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
    }): void;
}

function laydateTest() {
    layui.use("laydate", () => {
        const laydate = layui.laydate;

        // 日期范围选择
        laydate.render({
            elem: "#test",
            range: true, // 或 range: '~' 来自定义分割字符
        });

        // 日期时间范围选择
        laydate.render({
            elem: "#test",
            type: "datetime",
            range: true,
        });

        // 时间范围选择
        laydate.render({
            elem: "#test",
            type: "time",
            range: true,
        });

        // 年范围选择
        laydate.render({
            elem: "#test",
            type: "year",
            range: true,
        });

        // 年月范围选择
        const ins1 = laydate.render({
            elem: "#test",
            type: "month",
            range: true,
            show: true, // 直接显示
            closeStop: "#test1",
            position: "static",

            showBottom: false,
            zIndex: 99999999,
            btns: ["now"],
            calendar: true,
            mark: {
                "0-10-14": "生日",
                "0-12-31": "跨年", // 每年12月31日
                "0-0-10": "工资", // 每个月10号
                "2017-8-15": "", // 具体日期
                "2017-8-20": "预发", // 如果为空字符，则默认显示数字+徽章
                "2017-8-21": "发布",
            },
            ready: date => {
                ins1.hint("打开"); // 在控件上弹出value值
                console.log(date); // 得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            },
            done: (value, date, endDate) => {
                console.log(value); // 得到日期生成的值，如：2017-08-18
                console.log(date); // 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); // 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            },
            change: (value, date, endDate) => {
                console.log(value); // 得到日期生成的值，如：2017-08-18
                console.log(date); // 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); // 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            },
            disabledDate(date, type) {
                return true;
            },
            disabledTime(date) {
                return {
                    hours() {
                        return [];
                    },
                    minutes(hour) {
                        return [];
                    },
                    seconds(h, m) {
                        return [];
                    },
                };
            },
            close() {
            },
            onClear() {
            },
            onNow() {
            },
            onConfirm() {
            },
            holidays(ymd, render) {
                console.log(ymd);
                console.log(render("test"));
                render([["2017-08-15"]]);
            },
        });
        ins1.hint("123");
        laydate.render({
            elem: "test",
            mark(ymd, render) {
            },
        });

        laydate.path = "/static/xxx/"; // laydate.js 所在目录
        layui.laydate.getEndDate();
        laydate.hint("tesr");
        laydate.getInst("test");
        laydate.unbind("test");
    });
}

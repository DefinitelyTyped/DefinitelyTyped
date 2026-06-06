function utilTest() {
    // 单个模块导入测试
    function useTest1() {
        // 导出的模块
        const exported: any[] = [];

        const x = layui.use(
            "util",
            util => {
                util.toDateString;
            },
            exported,
        );
        console.log(x.v);

        // config的设置是全局的
        layui
            .config({
                base: "/res/js/", // 假设这是你存放拓展模块的根目录
            })
            .extend({
                // 设定模块别名
                mymod: "mymod", // 如果 mymod.js 是在根目录，也可以不用设定别名
                mod1: "admin/mod1", // 相对于上述 base 目录的子目录
            });

        // 你也可以忽略 base 设定的根目录，直接在 extend 指定路径（主要：该功能为 layui 2.2.0 新增）
        layui.extend({
            mod2: "{/}http:// cdn.xxx.com/lib/mod2", //  {/}的意思即代表采用自有路径，即不跟随 base 路径
        });

        // 使用拓展模块
        layui.use(["mymod", "mod1"], () => {
            // let mymod = layui['mymod'];
            // mymod.hello('World!'); // 弹出 Hello World!
        });
    }

    // 多个模块导入测试
    function useTest2() {
        // 导出的模块
        const exported: any[] = [];
        // 单个存在
        let x = layui.use(
            "util",
            util => {
                util.toDateString;
            },
            exported,
        );
        console.log(x.v);
        // 单个不存在
        x = layui.use(
            "a",
            util => {
                util.toDateString;
            },
            exported,
        );
        console.log(x.v);

        // 单个数组存在
        x = layui.use(
            ["util"],
            util => {
                util.toDateString;
            },
            exported,
        );
        console.log(x.v);
        // 单个数组不存在
        x = layui.use(
            ["a"],
            util => {
                util.toDateString;
            },
            exported,
        );
        console.log(x.v);

        x = layui.use(["util", "form", "b"], (a: Layui.Util, b, c) => {}, exported);
        layui.use(aa => {
            aa.config;
            aa.time;
        });
    }

    layui.use(["layer", "util"], (layer, util) => {
        util.event("lay-active", {
            btnA: (othis: JQuery) => {
                othis[0];
                alert("触发了事件1");
            },
            btnB: (othis: JQuery) => {
                alert("触发了事件2");
            },
            btnC: (othis: JQuery) => {
                alert("触发了事件3");
            },
        });
    });

    layui.use("util", () => {
        const util = layui.util;

        // 执行
        util.fixbar({
            bar1: true,
            click: type => {
                console.log(type);
                if (type === "bar1") {
                    alert("点击了bar1");
                }
            },
        });

        util.fixbar({
            bars: [{
                type: "QQ",
                content: "",
            }],
        });

        // 示例
        const endTime = new Date(2099, 1, 1).getTime(); // 假设为结束日期
        const serverTime = new Date(); // .getTime(); // 假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的

        util.countdown(endTime, serverTime, (date, serverTime2, timer) => {
            const str = ` ${date[0]}天${date[1]}时${date[2]}分${date[3]}秒`;
            layui.$("#test").html(`'距离2099年1月1日还有：${str}`);
        });

        util.timeAgo(new Date(2099, 1, 1), true);
        layui.util.toDateString(new Date(), "yyyy-MM-dd HH:mm:ss", {
            customMeridiem(hours, minutes) {
                return "";
            },
        });
        layui.util.toDateString(new Date());

        layui.util.digit(1, 4);
        layui.util.escape("s");

        // 处理属性 为 lay-active 的所有元素事件
        util.event("lay-active", {
            e1: othis => {
                alert("触发了事件1");
            },
            e2: othis => {
                alert("触发了事件2");
            },
            e3: othis => {
                alert("触发了事件3");
            },
        });
        util.event("lay-on", { t: () => {} }, "blur");
        util.event("lay-on", { t: () => {} });
        util.on("lay-on", { t: () => {} }, "click");
        util.on("lay-on", { t: () => {} });
        var onRet = util.on("lay-on", {
            e1: (el, e) => {
            },
            e2: function(el, e) {
            },
        }, { trigger: "dblclick" });

        util.on({ t: () => {} }, "dblclick");
        util.on({ t: () => {} });
        util.on({
            e1: (el, e) => {
            },
            e2: function(el, e) {
            },
        }, { trigger: "dblclick", elem: document });

        util.openWin({
            target: "",
        });
        util.countdown({
            data: 1,
            now: 1,
        });
    });
}

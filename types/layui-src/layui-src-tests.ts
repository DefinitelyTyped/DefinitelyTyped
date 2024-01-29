/// <reference types="jquery" />

// layui方法和属性
function B_method() {
    window.lay().find;
    window.layer.v;
    window.layui.v;
    layui["layui.all"];
    layui.v;
    $.ajax;
    // layui.modules['all'];
    // layui.modules['notExists'];

    // layui.define
    layui.define(["layer", "form"], exports => {
        const layer = layui.layer;
        const form = layui.form;
        layer.msg("Hello World");
        exports("index", {}); // 注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
    });
    layui.define(exports => {
        // 从 layui 2.6 开始，如果你引入的是构建后的 layui.js，里面即包含了 layui 所有的内置模块，无需再指定内置模块。如
        //  需确保您的 layui.js 是引入的构建后的版本（即官网下载或 git 平台的发行版）
        // 直接可得到各种内置模块
        const layer = layui.layer;
        const form = layui.form;
        const table = layui.table;

        // …
        layer.msg("Hello World");

        exports("index", {}); // 注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
    });
    layui.define(["layer", "laypage", "mod1"], exports => {
        // 此处 mod1 为你的任意扩展模块
        // do something

        exports("demo", {
            msg: "Hello Demo",
        });
    });

    // layui 模块的使用
    layui.use(["mod1", "mod2"], args => {
        // 缺陷1：没法给namespace添加数组支持
        // layui["a"];
        // ……
    });
    // 引用指定模块
    layui.use(["layer", "laydate"], () => {
        // console.log(this.$);
        const layer = layui.layer;
        const laydate = layui.laydate;

        // do something
    });

    // 引用所有模块（layui 2.6 开始支持）
    layui.use(() => {
        // console.log(this.carousel);
        const layer = layui.layer;
        const laydate = layui.laydate;
        const table = layui.table;
        // …

        // do something
    });
    // 通过回调的参数得到模块对象
    layui.use(["layer", "laydate", "table"], (layer: Layui.Layer, laydate, table) => {
        // console.log(this.carousel);
        // 使用 layer
        layer.msg("test");

        // 使用 laydate
        laydate.render({});

        // 使用 table
        table.render({});
    });
    layui
        .config({
            base: "/res/js/modules/", // 你的扩展模块所在目录
        })
        .use(() => {}); // 这里的 main 模块包含了 mod1、mod2、mod3 等等扩展模块
    layui.config({
        dir: "/res/layui/", // layui.js 所在目录（如果是 script 单独引入 layui.js，无需设定该参数）一般可无视
        version: false, // 一般用于更新模块缓存，默认不开启。设为 true 即让浏览器不缓存。也可以设为一个固定的值，如：201610
        debug: false, // 用于开启调试模式，默认 false，如果设为 true，则JS模块的节点会保留在页面
        base: "", // 设定扩展的 layui 模块的所在目录，一般用于外部模块扩展
    });
    layui.use(["layer", "form"], () => {
        const layer = layui.layer;
        const form = layui.form;

        layer.msg("Hello World");
    });
    layui.use(() => {});
    layui.link("a.js");
    layui.link("a.js", alert);
    layui.link("a.js", alert, "cc");

    layui.config({ debug: true });
    // 【增】：向 test 表插入一个 nickname 字段，如果该表不存在，则自动建立。
    layui.data("test", {
        key: "nickname",
        value: "贤心",
    });

    // 【删】：删除 test 表的 nickname 字段
    layui.data("test", {
        key: "nickname",
        remove: true,
    });
    layui.data("test", null); // 删除test表
    // 【改】：同【增】，会覆盖已经存储的数据

    // 【查】：向 test 表读取全部的数据
    let localTest = layui.data("test");
    layui.data("test");
    console.log(localTest.nickname); // 获得“贤心”

    const device = layui.device();
    device.os === "Windows";
    device.android;
    layui.device("android");
    layui.device("myflag");
    layui.device().myflag;
    layui.device()["myflag"];
    layui.device("os");

    // 其他底层方法
    layui["cache"];
    layui.cache.base;
    // layui.cache.builtin['all'];
    // layui.cache.callback.colorpicker;
    //  layui.cache.callback['notExists'];
    layui.cache.dir;
    layui.cache.event;
    layui.cache.event["carousel.change"];
    layui.cache.event["element.tab:"];
    layui.cache.event["form.select"];
    layui.cache.event["carousel.change"]["site-top-carousel"][0].call;
    layui.cache.host;
    layui.cache.modules["global"];
    layui.cache.modules.global;
    layui.cache.status.colorpicker;
    layui.cache.status["notExists"];
    layui.cache.timeout;
    layui.cache.version;

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
        mod2: "{/}http://cdn.xxx.com/lib/mod2", // {/}的意思即代表采用自有路径，即不跟随 base 路径
    });
    layui.extend({ test: "/res/js/test" });
    // 使用拓展模块
    layui.use(["mymod", "mod1"], () => {
        // let mymod = layui.mymod;
        // mymod.hello('World!'); // 弹出 Hello World!
    });

    layui.each({ a: 1 }, (k, v) => {
        console.log(k + v);
    });

    layui.each(["a", "b"], (k, v) => {
        console.log(k + v);
    });
    layui._typeof("");
    layui._typeof([]);
    layui._typeof(() => 1);
    layui._isArray([]);

    layui.getStyle(document.forms[0], "font-size");
    layui.getStyle(document.getElementById("test"), "font-size");

    layui.img("");
    layui.img("", () => 1);
    layui.img(
        "",
        img => {
            img.sizes;
        },
        e => {},
    );

    layui.router(location.hash);
    layui.router().href == null;
    layui.router().path[0];
    layui.router().search["m"];
    layui.router().search.constructor;

    // 【增】：向 test 表插入一个 nickname 字段，如果该表不存在，则自动建立。
    layui.sessionData("test", {
        key: "nickname",
        value: "贤心",
    });

    // 【删】：删除 test 表的 nickname 字段
    layui.sessionData("test", {
        key: "nickname",
        remove: true,
    });
    layui.sessionData("test", null); // 删除test表
    // 【改】：同【增】，会覆盖已经存储的数据

    // 【查】：向 test 表读取全部的数据
    localTest = layui.sessionData("test");
    layui.sessionData("test");
    console.log(localTest.nickname); // 获得“贤心”

    layui.sort([{ a: 3 }, { a: 1 }, { a: 5 }], "a");
    layui.sort([1, 2, 3, 4], "a");

    window.document.onkeydown = e => {
        console.log(e);
        layui.stope(e);
    };

    layui.url().hash.href;
    layui.url("").hash.href;
    layui.url().pathname[0];

    layui.hint().error("出错啦");
    layui.hint().error(null, "log");

    layui.on("select(*)", "form").v;
    layui.on("select(*)", "form", console.log)();

    layui.onevent("form", "select(*)").v === "";
    const x = layui.onevent("form", "select(*)", console.log);
    let y = layui.event("form", "select(abc)", 2);
    y = layui.event("form", "select(abc)", [1, 2, 3]);

    layui.off("select(filter)", "form");
    const factoryCallback = layui.factory("form");
    if (factoryCallback) {
        factoryCallback();
    }
}

// ---------------------------- 组件测试----------

function carousel() {
    layui.use("carousel", () => {
        const carousel = layui.carousel;
        carousel.config["a"];
        carousel.config.nothing;

        // 建造实例
        carousel.render({
            elem: "#test1",
            width: "100%", // 设置容器宽度
            arrow: "always", // 始终显示箭头
            anim: "updown", // 切换动画方式
        });
        carousel.reload({
            elem: "#test1",
            width: "100%", // 设置容器宽度
            arrow: "always", // 始终显示箭头
            anim: "updown", // 切换动画方式
        });
        carousel.on("change(test1)", obj => {
            // test1来源于对应HTML容器的 lay-filter="test1" 属性值
            // this.config.width;
            // this.elemItem;
            // this.render();
            // this.reload({});
            // this.prevIndex() == 1;
            // this.nextIndex() == 2;
            // this.addIndex(1);
            // this.events();

            console.log(obj.index); // 当前条目的索引
            console.log(obj.prevIndex); // 上一个条目的索引
            console.log(obj.item); // 当前条目的元素对象
            obj.item.length;
        });
        carousel.set({ autoplay: true });
    });
}

function code() {
    layui.use("code", () => {
        // 加载code模块
        layui.code(); // 引用code方法
        layui.code({
            title: "NotePad++的风格",
            skin: "notepad", // 如果要默认风格，不用设定该key。
        });
    });
}

function colorpicker() {
    layui.use("colorpicker", () => {
        const colorpicker = layui.colorpicker;
        // 渲染
        colorpicker.render({
            elem: "#test1",
            predefine: true,
            colors: ["#F00", "#0F0", "#00F", "rgb(255, 69, 0)", "rgba(255, 69, 0, 0.5)"],
        });
        colorpicker.render({
            elem: "#test1",
            change: color => {
                console.log(color);
            },
        });
        colorpicker.render({
            elem: "#test1",
            done: color => {
                // this.format;
                // this.change;
                console.log(color);
                // 譬如你可以在回调中把得到的 color 赋值给表单
            },
        });
        colorpicker.index === 0;
        colorpicker.set({
            elem: "#test1",
            predefine: true,
            colors: ["#F00", "#0F0", "#00F", "rgb(255, 69, 0)", "rgba(255, 69, 0, 0.5)"],
        });
        colorpicker.on("confirm", a => {
            console.log(a + ",");
        });
        layui.event("colorpicker", "confirm", [1, 2]);
    });
}

function dropdown() {
    layui.use("dropdown", () => {
        const dropdown = layui.dropdown;
        const ret = dropdown.render({
            elem: "#demo1", // 可绑定在任意元素中，此处以上述按钮为例
            data: [
                {
                    title: "menu item 1",
                    id: 100,
                    href: "#",
                },
                {
                    title: "menu item 2",
                    id: 101,
                    href: "https:// www.layui.com/", // 开启超链接
                    target: "_blank", // 新窗口方式打开
                },
                { type: "-" },
                {
                    title: "menu item 3",
                    id: 102,
                    type: "group", // 菜单类型，支持：normal/group/parent/-
                    child: [
                        {
                            title: "menu item 3-1",
                            id: 103,
                        },
                        {
                            title: "menu item 3-2",
                            id: 104,
                            child: [
                                {
                                    title: "menu item 3-2-1",
                                    id: 105,
                                },
                                {
                                    title: "menu item 3-2-2",
                                    id: 106,
                                },
                            ],
                        },
                        {
                            title: "menu item 3-3",
                            id: 107,
                        },
                    ],
                },
                { type: "-" },
                {
                    title: "menu item 4",
                    id: 108,
                },
                {
                    title: "menu item 5",
                    id: 109,
                    child: [
                        {
                            title: "menu item 5-1",
                            id: 11111,
                            child: [
                                {
                                    title: "menu item 5-1-1",
                                    id: 2111,
                                },
                                {
                                    title: "menu item 5-1-2",
                                    id: 3111,
                                },
                            ],
                        },
                        {
                            title: "menu item 5-2",
                            id: 52,
                        },
                    ],
                },
                { type: "-" },
                {
                    title: "menu item 6",
                    id: 6,
                    type: "group",
                    isSpreadItem: false,
                    child: [
                        {
                            title: "menu item 6-1",
                            id: 61,
                        },
                        {
                            title: "menu item 6-2",
                            id: 62,
                        },
                    ],
                },
            ],
            id: "demo1",
            // 菜单被点击的事件
            click: (data, othis) => {
                console.log(data); // 得到当前所点击的菜单项对应的数据
                console.log(othis); // 得到当前所点击的菜单项 DOM 对象
                // console.log(this.elem); // 得到当前组件绑定的原始 DOM 对象，批量绑定中常用。
            },
            ready: (elemPanel, elem) => {
                console.log(elemPanel[0]); // 得到组件面板的 DOM 对象
                console.log(elem.hide()); // 得到基础参数 elem 所绑定的元素 DOM 对象
            },
        });
        ret.reload({ elem: "" });
        ret.config.data[0].child;
        ret.config.data[0].notExists;
        const c = layui.dropdown.reload("demo1", {
            data: [
                {
                    title: "abc",
                    id: 100,
                    href: "#",
                },
            ],
        });
        c.config.data;
        c.reload;

        function cb(this: HTMLElement, obj: any): any {
            console.log(this.title);
            console.log(obj.nothing);
        }

        layui.dropdown.on("click(id)", cb);
    });
}

function elementTest() {
    layui.use("element", () => {
        const element = layui.element;
        element.config["notExists"];
        //  一些事件监听
        element.on("tab(demo)", data => {
            console.log(data);
        });
        element.tabDelete("demo", "xxx"); // 删除 lay-id="xxx" 的这一项

        element.tabAdd("demo", {
            title: "选项卡的标题",
            content: "选项卡的内容", // 支持传入html
            id: "选项卡标题的lay-id属性值",
        });
        element.tabAdd("demo", {});
        element.tabChange("demo", "layid");
        element.tab({
            headerElem: "#tabHeader>li", // 指定tab头元素项
            bodyElem: "#tabBody>.xxx", // 指定tab主体元素项
        });
        element.tab({
            headerElem: $(), // 指定tab头元素项
            bodyElem: document.body, // 指定tab主体元素项
        });
        element.progress("demo", "30%");

        element.init(); //  更新全部  2.1.6 可用 element.render() 方法替代
        element.render("nav"); //  重新对导航进行渲染。注：layui 2.1.6 版本新增
        element.render("nav", "test1"); //  对 lay-filter="test1" 所在导航重新渲染。注：layui 2.1.6 版本新增
        element.on("tab(filter)", data => {
            // console.log(this); //  当前Tab标题所在的原始DOM元素
            console.log(data.index); //  得到当前Tab的所在下标
            console.log(data.elem); //  得到当前的Tab大容器
        });
        element.on("tabDelete(filter)", data => {
            // console.log(this); //  当前Tab标题所在的原始DOM元素
            console.log(data.index); //  得到当前Tab的所在下标
            console.log(data.elem); //  得到当前的Tab大容器
        });
        element.on("nav(filter)", elem => {
            console.log(elem); //  得到当前点击的DOM对象
        });
        element.on("collapse(filter)", data => {
            console.log(data.show); // 得到当前面板的展开状态，true或者false
            console.log(data.title); // 得到当前点击面板的标题区域DOM对象
            console.log(data.content); // 得到当前点击面板的内容区域DOM对象
        });
    });
}

function flowTest() {
    layui.use("flow", () => {
        const flow = layui.flow;
        // 信息流
        flow.load({ elem: "" });
        flow.load({ elem: "", scrollElem: "" });

        // 图片懒加载
        flow.lazyimg({});
    });
    layui.use("flow", () => {
        const $ = layui.jquery; // 不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
        const flow = layui.flow;
        flow.load({
            elem: "#demo", // 指定列表容器
            done: (page, next) => {
                // 到达临界点（默认滚动触发），触发下一页
                const lis: string[] = [];
                // 以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                $.get("/api/list?page=" + page, res => {
                    // 假设你的列表返回在data集合中
                    layui.each(res.data, (index, item) => {
                        lis.push(`<li>${item.title}</li>`);
                    });

                    // 执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                    // pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                    next(lis.join(""), page < res.pages);
                });
            },
        });
    });
}

function formTest() {
    layui.use("form", () => {
        const form = layui.form;

        // 监听提交
        form.on("submit(formDemo)", data => {
            // layer.msg(JSON.stringify(data.field));
            return false;
        });

        form.verify({
            username: (value: string, item: HTMLElement) => {
                // value：表单的值、item：表单的DOM对象

                if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                    return "用户名不能有特殊字符";
                }
                if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                    return "用户名首尾不能出现下划线'_'";
                }
                if (/^\d+\d+\d$/.test(value)) {
                    return "用户名不能全为数字";
                }

                // 如果不想自动弹出默认提示框，可以直接返回 true，这时你可以通过其他任意方式提示（v2.5.7 新增）
                if (value === "xxx") {
                    alert("用户名不能为敏感词");
                    return true;
                }
            },

            // 我们既支持上述函数式的方式，也支持下述数组的形式
            // 数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
            pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
        });
    });

    layui.form.getValue("test2")["file"];
    const t = $(document.body);
    layui.form.getValue("test2");

    layui.form.on("select(select)", data => {
        console.log(data);
    });
    layui.form.on("checkbox(checkbox)", data => {
        data.othis.find("");
        console.log(data);
    });
    layui.form.val("filter", new Date());
    layui.form.val("filter", { a: 1, b: true });

    layui.form.config.autocomplete;
    layui.form.config.verify.date;
}

function testJquery() {
    layui.define(exports => {
        layui.$ = jQuery;
        exports("jquery", jQuery);
    });
}

function layTest() {
    const a = { a: [1, 2, 3] };
    const b = {};
    layui.lay.extend(b, a, { b: "ok" });
    layui.lay.ie;
    layui.lay.layui;
    layui.lay.getPath;
    layui.lay.stope;
    layui.each([1, 2, 3], console.log);
    layui.lay.digit(1, 4);
    const input = layui.lay.elem("input", { id: "abc" });
    const img = layui.lay.elem("img", { id: "abc" });
    layui.lay.hasScrollbar;
    layui.lay.position;
    layui.lay.options(".a");
    layui.lay.options(".a", "id");

    const ll = layui.lay(document.body);
    ll.addClass("abc a", false);
    ll.addClass("abc b", true);
    ll.removeClass("")[0].title;
    ll.hasClass("abc");
    ll.css("");
    ll.css("", "");
    const x = window.lay.each([0, 1])("div");
    x.selector;
    window.lay.each({})("div").selector;
    layui.lay.each([]);
    layui.lay("div").each((index, ele) => {
        // console.log(index+ele)
    })[0].title;
    window.lay("div").find("input").addClass;
    layui.lay("");
    layui.lay("").each;
    layui.lay("").addClass("");
    layui.lay("").length;
    layui.lay("#abc").on("click", e => {
        console.log();
    });
    layui.laypage.on(document.getElementById("abc"), "click", e => {
        console.log(e);
    });
    const eme = document.getElementById("abc");
    if (eme) {
        // let elem: HTMLButtonElement = eme;
        layui.laypage.on(null, "click", e => {
            console.log(e);
        });
    }
}

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
        });
        laydate.path = "/static/xxx/"; // laydate.js 所在目录
        layui.laydate.getEndDate();
    });
}

function layeditTest() {
    layui.use("layedit", () => {
        const layedit = layui.layedit;
        layedit.build("demo"); // 建立编辑器

        layedit.build("id", {
            tool: ["left", "center", "right", "|", "face"],
        });
        layedit.build("id", {
            tool: [
                "strong", // 加粗
                "italic", // 斜体
                "underline", // 下划线
                "del", // 删除线

                "|", // 分割线

                "left", // 左对齐
                "center", // 居中对齐
                "right", // 右对齐
                "link", // 超链接
                "unlink", // 清除链接
                "face", // 表情
                "image", // 插入图片
                "help", // 帮助
            ],
        });

        layedit.set({
            uploadImage: {
                url: "", // 接口url
                type: "", // 默认post
            },
        });
        // 注意：layedit.set 一定要放在 build 前面，否则配置全局接口将无效。
        layedit.build("demo"); // 建立编辑器
    });
}

function layerTest() {
    layui.use("layer", layer => {
        /*
        如果是页面层
        */
        layer.open({
            type: 1,
            content: "传入任意的文本或html", // 这里content是一个普通的String
        });
        layer.open({
            type: 1,
            content: $("#id"), // 这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
        });
        // Ajax获取
        $.post("url", {}, str => {
            layer.open({
                type: 1,
                content: str, // 注意，如果str是object，那么需要字符拼接。
            });
        });
        /*
        如果是iframe层
        */
        layer.open({
            type: 2,
            content: "http://sentsin.com", // 这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
        });
        /*
        如果是用layer.open执行tips层
        */
        layer.open({
            type: 4,
            content: ["内容", "#id"], // 数组第二项即吸附元素选择器或者DOM
        });

        // 单个使用
        layer.open({
            skin: "demo-class",
        });
        // 全局使用。即所有弹出层都默认采用，但是单个配置skin的优先级更高
        layer.config({
            skin: "demo-class",
        });
        // eg1
        layer.alert("酷毙了", { icon: 1 });
        // eg2
        layer.msg("不开心。。", { icon: 5 });
        // eg3
        layer.load(1); // 风格1的加载

        // eg1
        layer.confirm(
            "纳尼？",
            {
                btn: ["按钮一", "按钮二", "按钮三"], // 可以无限个按钮
                btn3: (index, layero) => {
                    // 按钮【按钮三】的回调
                },
            },
            (index, layero) => {
                // 按钮【按钮一】的回调
            },
            index => {
                // 按钮【按钮二】的回调
            },
        );

        // eg2
        layer.open({
            content: "test",
            btn: ["按钮一", "按钮二", "按钮三"],
            yes: (index, layero) => {
                // 按钮【按钮一】的回调
            },
            btn2: (index, layero) => {
                // 按钮【按钮二】的回调
                // return false 开启该代码可禁止点击该按钮关闭
            },
            btn3: (index, layero) => {
                // 按钮【按钮三】的回调
                // return false 开启该代码可禁止点击该按钮关闭
            },
            cancel: () => {
                // 右上角关闭回调
                // return false 开启该代码可禁止点击该按钮关闭
            },
            resizing: layero => {
                console.log(layero);
            },
            success: (layero, index) => {
                console.log(layero, index);
            },
        });

        layer.msg("hello");

        layer.open({
            minStack: true,
            content: "测试回调",
            success: (layero, index) => {
                console.log(layero, index);
            },
            cancel: (index, layero) => {
                if (confirm("确定要关闭么")) {
                    // 只有当点击confirm框的确定时，该层才会关闭
                    layer.close(index);
                }
                return false;
            },
        });
        layer.config({
            anim: 1, // 默认动画风格
            skin: "layui-layer-molv", // 默认皮肤
            //  …
        });
        //  除此之外，extend 还允许你加载拓展的 css 皮肤，如：
        layer.config({
            //  如果是独立版的layer，则将 myskin 存放在 ./skin 目录下
            //  如果是layui中使用layer，则将 myskin 存放在 ./css/modules/layer 目录下
            extend: "myskin/style.css",
        });
        // 页面一打开就执行弹层
        layer.ready(() => {
            layer.msg("很高兴一开场就见到你");
        });
        let index = layer.open({
            content: "test",
        });

        // eg1
        layer.alert("只想简单的提示");
        // eg2
        layer.alert("加了个图标", { icon: 1 }); // 这时如果你也还想执行yes回调，可以放在第三个参数中。
        // eg3
        layer.alert("有了回调", index => {
            // do something

            layer.close(index);
        });

        layer.confirm(1);
        // eg1
        layer.confirm("is not?", { icon: 3, title: "提示" }, index => {
            // do something

            layer.close(index);
        });
        // eg2
        layer.confirm("is not?", (index, layero) => {
            // do something

            layer.close(index);
        });
        layer.confirm(
            "is not?",
            {
                icon: 3,
                title: "提示",
                cancel: (index, layero) => {
                    console.log("点击了右上角关闭");
                    // return false  // 点击右上角叉号不能关闭
                },
            },
            (index, layero) => {
                console.log("点击了下边的第一个按钮'确定'");
                layer.close(index); // 需要手动关闭
            },
            (index, layero) => {
                console.log("点击了下边的第二个按钮'取消'");
                // return false // 点击取消不能关闭
            },
        );
        layer.confirm(
            "is not?",
            (index, layero) => {
                // do something

                layer.close(index);
            },
            (index, layero) => {},
        );
        // eg1
        layer.msg("只想弱弱提示");
        // eg2
        layer.msg("有表情地提示", { icon: 6 });
        // eg3
        layer.msg("关闭后想做些什么", () => {
            // do something
        });
        // eg
        layer.msg(
            "同上",
            {
                icon: 1,
                time: 2000, // 2秒关闭（如果不配置，默认是3秒）
            },
            () => {
                // do something
            },
        );
        // eg1
        index = layer.load();
        // eg2
        index = layer.load(1); // 换了种风格
        // eg3
        index = layer.load(2, { time: 10 * 1000 }); // 又换了种风格，并且设定最长等待10秒
        // 关闭

        // eg1
        layer.tips("只想提示地精准些", "#id");
        // eg 2
        $("#id").on("click", () => {
            layer.tips("只想提示地精准些"); // 在元素的事件回调体中，follow直接赋予this即可
        });
        // eg 3
        layer.tips("在上面", "#id", {
            tips: 1,
        });

        // 当你想关闭当前页的某个层时
        index = layer.open();
        index = layer.alert();
        index = layer.load();
        index = layer.tips();
        // 正如你看到的，每一种弹层调用方式，都会返回一个index
        layer.close(index); // 此时你只需要把获得的index，轻轻地赋予layer.close即可

        // 如果你想关闭最新弹出的层，直接获取layer.index即可
        layer.close(layer.index); // 它获取的始终是最新弹出的某个层，值是由layer内部动态递增计算的

        layer.ie;
        layer.index;
        layer.path;
        layer.v;
        layer.zIndex;

        // 当你在iframe页面关闭自身时

        window.layui;
        window.lay;
        window.layer;
        if (parent) {
            parent.layer;
            parent.layer.close(index); // 再执行关闭
        }

        index = layui.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引

        // 关闭后的回调（layui 2.6.5、layer 3.4.0 新增）
        layer.close(index, () => {
            // do something
        });
        layer.open({
            type: 2,
            shade: false,
            area: "500px",
            maxmin: true,
            content: "http://www.layui.com",
            zIndex: layer.zIndex, // 重点1
            success: layero => {
                layer.setTop(layero); // 重点2
                layero.css("z-index", 0);
            },
        });

        layer.closeAll(); // 疯狂模式，关闭所有层
        layer.closeAll("dialog"); // 关闭信息框
        layer.closeAll("page"); // 关闭所有页面层
        layer.closeAll("iframe"); // 关闭所有的iframe层
        layer.closeAll("loading"); // 关闭加载层
        layer.closeAll("tips"); // 关闭所有的tips层

        // 关闭后的回调（layui 2.6.5、layer 3.4.0 新增）
        layer.closeAll("loading", () => {
            // 关闭 loading 并执行回调
            // do something
        });
        layer.closeAll(() => {
            // 关闭所有层并执行回调
            // do something
        });

        layer.style(index, {
            width: "1000px",
            top: "10px",
        });

        layer.title("标题变了", index);

        layer.open({
            type: 2,
            content: "test/iframe.html",
            success: (layero, index) => {
                const body = layer.getChildFrame("body", index);
                // let iframeWin = window[layero.find('iframe')[0]['name']]; // 得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                console.log(body.html()); // 得到iframe页的body内容
                body.find("input").val("Hi，我是从父页来的");
            },
        });
        // 假设这是iframe页
        if (parent) {
            index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
            parent.layer.close(index); // 再执行关闭
        }

        // 通过这种方式弹出的层，每当它被选择，就会置顶。
        layer.open({
            type: 2,
            shade: false,
            area: "500px",
            maxmin: true,
            content: "http://www.layui.com",
            zIndex: layer.zIndex, // 重点1
            success: layero => {
                layer.setTop(layero); // 重点2
            },
        });

        layer.full(index); // 执行最大化
        layer.min(index); // 执行最小化
        layer.restore(index); // 执行还原

        // 例子1
        layer.prompt((value, index, elem) => {
            alert(value); // 得到value
            layer.close(index);
        });

        // 例子2
        layui.layer.prompt(
            {
                formType: 2, // 输入框类型，支持0（文本）默认1（密码）2（多行文本）
                value: "初始值", // 初始时的值，默认空字符
                maxlength: 140, // 可输入文本的最大长度，默认500
                title: "请输入值",
                area: ["800px", "350px"], // 自定义文本域宽高
            },
            (value, index, elem) => {
                layui.layer.alert(value); // 得到value
                layui.layer.close(index);
            },
        );

        layer.tab({
            area: ["600px", "300px"],
            tab: [
                {
                    title: "TAB1",
                    content: "内容1",
                },
                {
                    title: "TAB2",
                    content: "内容2",
                },
                {
                    title: "TAB3",
                    content: "内容3",
                },
            ],
        });
        $.getJSON("/jquery/layer/test/photos.json", json => {
            layer.photos({
                photos: json,
                anim: 5, // 0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
            });
        });
        layer.photos({
            photos: {
                title: "", // 相册标题
                id: 123, // 相册id
                start: 0, // 初始显示的图片序号，默认0
                data: [
                    // 相册包含的图片，数组格式
                    {
                        alt: "图片名",
                        pid: 666, // 图片id
                        src: "", // 原图地址
                        thumb: "", // 缩略图地址
                    },
                ],
            },
            tab: (pic, layero) => {
                console.log(pic); // 当前图片的一些信息
            },
        });
    });
}

function laytplTest() {
    layui.use("laytpl", () => {
        const laytpl = layui.laytpl;

        // 直接解析字符
        laytpl("{{ d.name }}是一位公猿").render(
            {
                name: "贤心",
            },
            string => {
                console.log(string); // 贤心是一位公猿
            },
        );

        // 你也可以采用下述同步写法，将 render 方法的回调函数剔除，可直接返回渲染好的字符
        const string = laytpl("{{ d.name }}是一位公猿").render({
            name: "贤心",
        });
        console.log(string); // 贤心是一位公猿

        // 如果模板较大，你也可以采用数据的写法，这样会比较直观一些
        laytpl(["{{ d.name }}是一位公猿", "其它字符 {{ d.content }}  其它字符"].join(""));

        const data = {
            // 数据
            title: "Layui常用模块",
            list: [
                { modname: "弹层", alias: "layer", site: "layer.layui.com" },
                { modname: "表单", alias: "form" },
            ],
        };
        const getTpl = document.body.innerHTML;
        const view = document.getElementById("view");
        laytpl(getTpl).render(data, html => {
            if (view) {
                view["innerHTML"] = html;
            }
        });
        laytpl("").parse("", {});
        laytpl("").render({});

        laytpl("").tpl;
        laytpl.config({
            open: "<%",
            close: "%>",
        });
        laytpl.config({
            // open: '<%',
            close: "%>",
        });
        laytpl.config();
        // 分割符将必须采用上述定义的
        laytpl(
            [
                "<%# let type = \"公\"; %>", // JS 表达式
                "<% d.name %>是一位<% type %>猿。",
            ].join(""),
        ).render(
            {
                name: "贤心",
            },
            string => {
                console.log(string); // 贤心是一位公猿
            },
        );
    });
}

function rateTest() {
    layui.use("rate", () => {
        const rate = layui.rate;
        rate.set();
        rate.config;
        rate.on;
        rate.index;

        // 渲染
        const ins1 = rate.render({
            elem: "#test1", // 绑定元素
        });
        ins1;
        rate.render({
            elem: "#test1",
            setText(value) {
                /*                let arrs = {
                    1: '极差',
                    2: '差',
                    3: '中等',
                    4: '好',
                };*/
                // arrs[String(value)] || ( value + "星");
            },
        });
    });
}

function SliderTest() {
    layui.use("slider", () => {
        const slider = layui.slider;
        // 渲染
        const x = slider.render({
            elem: "#slideTest1",
            range: true,
            change: value => {
                // console.log(value[0]); // 得到开始值
                // console.log(value[1]); // 得到结尾值
                // do something
            },
        });
        slider.config;
        slider.set;
        slider.on;
        x.config.disabled;
        x.setValue(1);
        x.setValue(1, 0);
    });
}

function tableTest() {
    layui.use(a => {
        layui.layer.load(1, {});
        layui.form.on("", a => {
            layui.form.val("", {});
        });
        layui.form.getValue("", $(""));

        layui.table.init;
        const rendered = layui.table.render({
            elem: "#demo",
            cols: [
                [
                    // 标题栏
                    { checkbox: true },
                    { field: "test", title: "abc", width: "12", minWidth: 12, type: "space", templet: "#titleTpl" },
                    { LAY_CHECKED: true, fixed: "left", hide: true },
                    {
                        totalRow: { score: "666", experience: "999" },
                        templet: d => {
                            return d.aa;
                        },
                    },
                    { totalRowText: "合计：", sort: true, unresize: true, edit: "text" },
                    { event: "btn01", style: "background-color: #5FB878; color: #fff;" },
                    { align: "left", colspan: 1, rowspan: 2 },
                    {
                        templet() {
                            return "{{d.test}}";
                        },
                        toolbar: "#barDemo",
                    },
                ],
            ],
            url: "/demo/table/user/", // 数据接口
            toolbar: "default",
            defaultToolbar: ["", { title: "", layEvent: "", icon: "" }],
            width: "12",
            height: 12,
            cellMinWidth: 12,
            done(a, b, c) {},
            data: [{}, {}],
            totalRow: true,
            page: { theme: "#c00" },
            limit: 10,
            limits: [1, 2, 3],
            loading: true,
            title: "标题",
            text: { none: "abc" },
            autoSort: true,
            initSort: { field: "id", type: "desc" },
            id: "id",
            skin: "nob",
            even: true,
            size: "lg",

            method: "get",
            where: null, // {}
            contentType: "application/json'",
            headers: { token: "" },
            parseData(res) {
                // res 即为原始返回的数据
                return {
                    code: 200, // 解析接口状态
                    msg: "res", // 解析提示文本
                    // count: 123, // 解析数据长度
                    data: res, // 解析数据列表
                };
            },
            request: {
                pageName: "curr", // 页码的参数名称，默认：page
                limitName: "nums", // 每页数据量的参数名，默认：limit
            },
            response: {
                statusName: "status", // 规定数据状态的字段名称，默认：code
                statusCode: 200, // 规定成功的状态码，默认：0
                msgName: "hint", // 规定状态信息的字段名称，默认：msg
                countName: "total", // 规定数据总数的字段名称，默认：count
                dataName: "rows", // 规定数据列表的字段名称，默认：data
            },
        });
        rendered.config.cols;
        layui.use(["table", "laytpl", "element"], () => {
            const table = layui.table;

            const rr = table.render({
                elem: "#demo",
                toolbar: true,
                title: "用户数据表",
                totalRow: true,
                text: {
                    none: "暂无相关数据", // 默认：无数据。
                },
                defaultToolbar: ["filter", { title: "123", layEvent: "", icon: "" }],

                cols: [
                    [
                        // {LAY_CHECKED: true,checkbox: true,fixed: "left"}
                        { field: "id", title: "ID", unresize: true, sort: true, totalRowText: "合计行", rowspan: 2 },
                        { field: "username", title: "用户名", edit: "text", rowspan: 2 },
                        { title: "个人信息", colspan: 2, align: "center" },
                        /*

                    ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true,rowspan:2}
                    ,{field:'logins', title:'登入次数', width:100, sort: true, totalRow: true,rowspan:2}
                    ,{field:'sign', title:'签名',rowspan:2}
                    ,{field:'city', title:'城市', width:100,rowspan:2}
                    ,{field:'ip', title:'IP', width:120,rowspan:2 }
                    ,{field:'joinTime', title:'加入时间', width:120,event: "btn01", style: "background-color: #5FB878; color: #fff;",rowspan:2 }
                    ,{title:"no",templet(d) {return d.city;},rowspan:2 }
                    */
                    ],
                    [
                        {
                            field: "email",
                            title: "邮箱",
                            edit: "text",
                            rowspan: 1,
                            templet(d) {
                                d.LAY_COL.type;
                                d["你可以用 d.xx 来使用当前行的其他属性"] === undefined;
                                return d.LAY_COL.type + d.email;
                            },
                        },
                        { field: "experience", title: "积分", sort: true, totalRow: true, rowspan: 1 },
                    ],
                ],
                data: [
                    {
                        id: "10001",
                        username: "杜甫",
                        email: "test@email.com",
                        sex: "男",
                        city: "浙江杭州",
                        sign: "点击此处，显示更多。当内容超出时，点击单元格会自动显示更多内容。",
                        experience: "116",
                        ip: "192.168.0.8",
                        logins: "108",
                        joinTime: "2016-10-14",
                    },
                    {
                        id: "10002",
                        username: "李白",
                        email: "test@email.com",
                        sex: "男",
                        city: "浙江杭州",
                        sign: "君不见，惟 美酒，与尔同销万古愁。",
                        experience: "12.25",
                        ip: "192.168.0.8",
                        logins: "106",
                        joinTime: "2016-10-14",
                    },
                ],
                page: true,
                response: {
                    statusCode: 200, // 重新规定成功的状态码为 200，table 组件默认为 0
                },
                parseData: res => {
                    // 将原始数据解析成 table 组件所规定的数据
                    return {
                        code: res.status, // 解析接口状态
                        msg: res.message, // 解析提示文本
                        count: res.total, // 解析数据长度
                        data: res.rows.item, // 解析数据列表
                    };
                },
                done(res) {
                    res;
                },
                error(e, msg) {
                    console.log(e, msg);
                },
            });
            rr.reload({}, false);
            layui.table.reload("id", {});
        });

        rendered.config.id;
        rendered.reload({});
        rendered.setColsWidth();
        rendered.resize();

        layui.table.on("tool(test)", obj => {
            //  注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            const data = obj.data; // 获得当前行数据
            const layEvent = obj.event; // 获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            const tr = obj.tr; // 获得当前行 tr 的 DOM 对象（如果有的话）

            switch (layEvent) {
                case "detail":
                    break;
                case "del":
                    layui.layer.confirm("真的删除行么", index => {
                        obj.del(); // 删除对应行（tr）的DOM结构，并更新缓存
                        layui.layer.close(index);
                        // 向服务端发送删除指令
                    });
                    break;
                case "edit":
                    obj.update({
                        username: "123",
                        title: "xxx",
                    });
                    break;
                case "LAYTABLE_TIPS":
                    layui.layer.alert("Hi，头部工具栏扩展的右侧图标。");
                    break;
            }
        });
        const checkStatus = layui.table.checkStatus("idTest"); // idTest 即为基础参数 id 对应的值

        if (checkStatus.isAll) {
            checkStatus.data.length;
        }
        layui.table.exportFile("id", []);
        layui.table.on("sort(test)", obj => {
            // 注：sort 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            console.log(obj.field); // 当前排序的字段名
            console.log(obj.type); // 当前排序类型：desc（降序）、asc（升序）、null（空对象，默认排序）
            // console.log(this); // 当前排序的 th 对象

            // 尽管我们的 table 自带排序功能，但并没有请求服务端。
            // 有些时候，你可能需要根据当前排序的字段，重新向服务端发送请求，从而实现服务端排序，如：
            layui.table.reload("idTest", {
                initSort: obj, // 记录初始排序，如果不设的话，将无法标记表头的排序状态。
                where: {
                    // 请求参数（注意：这里面的参数可任意定义，并非下面固定的格式）
                    field: obj.field, // 排序字段
                    order: obj.type, // 排序方式
                },
            });

            layui.layer.msg(`服务端排序。order by {obj.field} ={obj.type}`);
        });
    });

    layui.table.on("checkbox(test)", obj => {
        const data: Layui.TableOnCheckbox = obj;
        data.del;
        data.checked;
        data.tr[0];
        data.type;
        data.update({});
    });

    layui.table.on("toolbar(test)", obj => {
        const data: Layui.TableOnToolbar = obj;
        data.config.autoSort;
        data.event;
    });
    layui.table.on("tool(test)", obj => {
        const data: Layui.TableOnTool = obj;
        data.data;
        data.del();
        data.event;
        data.tr[0];
        data.update({});
    });

    layui.table.on("row(test)", obj => {
        const data: Layui.TableOnRow = obj;
        data.data;
        data.del();
        data.tr[0];
        data.update({});
    });
    layui.table.on("edit(test)", obj => {
        const data: Layui.TableOnEdit = obj;
        data.data;
        data.del();
        data.field;
        data.tr[0];
        data.update({});
        data.value;
    });
    layui.table.on("sort(test)", obj => {
        const data: Layui.TableOnSort = obj;
        data.field;
        data.type;
    });
    layui.table.reload("id", {
        url: null,
        data: [],
        where: null,
    });

    // 工具条事件
    layui.table.on("tool(test)", obj => {
        // 注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        const data = obj.data; // 获得当前行数据
        const layEvent = obj.event; // 获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        const tr = obj.tr; // 获得当前行 tr 的 DOM 对象（如果有的话）
        switch (layEvent) {
            case "detail": {
                break;
            }
            case "del": {
                // 删除
                layui.layer.confirm("真的删除行么", index => {
                    obj.del(); // 删除对应行（tr）的DOM结构，并更新缓存
                    layui.layer.close(index);
                    // 向服务端发送删除指令
                });
            }
            case "edit": {
                // 编辑
                // do something

                // 同步更新缓存对应的值
                obj.update({
                    username: "123",
                    title: "xxx",
                });
            }
            case "LAYTABLE_TIPS": {
                layui.layer.alert("Hi，头部工具栏扩展的右侧图标。");
            }
        }
    });
    layui.table.set({}); // 设定全局默认参数。options即各项基础参数
    layui.table.on("event(filter)", () => {}); // 事件。event为内置事件名（详见下文），filter为容器lay-filter设定的值
    layui.table.init("filter", {}); // filter为容器lay-filter设定的值，options即各项基础参数。例子见：转换静态表格
    layui.table.checkStatus("id"); // 获取表格选中行（下文会有详细介绍）。id 即为 id 参数对应的值
    layui.table.render({}); // 用于表格方法级渲染，核心方法。应该不用再过多解释了，详见：方法级渲染
    layui.table.reload("id", {}, false); // 表格重载
    layui.table.resize("id"); // 重置表格尺寸
    layui.table.exportFile("id", [], "type"); // 导出数据
    layui.table.getData("id"); // 用于获取表格当前页的所有行数据（layui 2.6.0 开始新增）

    // 所获得的 tableIns 即为当前容器的实例
    const tableIns = layui.table.render({
        elem: "#id",
        cols: [], // 设置表头
        url: "/api/data", // 设置异步接口
        id: "idTest",
    });

    // 这里以搜索为例
    tableIns.reload({
        where: {
            // 设定异步数据接口的额外参数，任意设
            aaaaaa: "xxx",
            bbb: "yyy",
            // …
        },
        page: {
            curr: 1, // 重新从第 1 页开始
        },
    });
    // 上述方法等价于
    layui.table.reload("idTest", {
        where: {
            // 设定异步数据接口的额外参数，任意设
            aaaaaa: "xxx",
            bbb: "yyy",
            // …
        },
        page: {
            curr: 1, // 重新从第 1 页开始
        },
    }); // 只重载数据
    layui.table.exportFile("abc");
    layui.table.exportFile("abc", null);
    layui.table.exportFile(
        ["名字", "性别", "年龄"],
        [
            ["张三", "男", "20"],
            ["李四", "女", "18"],
            ["王五", "女", "19"],
        ],
        "csv",
    );
    layui.table.exportFile(
        "abc",
        [
            ["张三", "男", "20"],
            ["李四", "女", "18"],
            ["王五", "女", "19"],
        ],
        "csv",
    );
}

function transferTest() {
    layui.use("transfer", () => {
        const transfer = layui.transfer;

        // 渲染
        transfer.render({
            elem: "#test1", // 绑定元素
            data: [
                { value: "1", title: "李白", disabled: "", checked: "" },
                { value: "2", title: "杜甫", disabled: "", checked: "" },
                { value: "3", title: "贤心", disabled: "", checked: "" },
            ],
            id: "demo1", // 定义索引
        });
        transfer.render({
            elem: "#test",
            data: [],
            id: "demo1", // 定义索引
        });

        // 可以重载所有基础参数
        transfer.reload("demo1", {
            title: ["新列表1", "新列表2"],
        });
        // 获得右侧数据
        const getData = transfer.getData("demo1");
        transfer.set({}); // 设定全局默认参数。options 即各项基础参数
        transfer.getData("id"); // 获得右侧数据
        transfer.reload("id", {}); // 重载实例
    });
}

function treeTest() {
    layui.use("tree", () => {
        const tree = layui.tree;

        // 渲染
        const inst1 = tree.render({
            elem: "#test1", // 绑定元素
            data: [
                {
                    title: "江西", // 一级菜单
                    children: [
                        {
                            title: "南昌", // 二级菜单
                            children: [
                                {
                                    title: "高新区", // 三级菜单
                                    // …… // 以此类推，可无限层级
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "陕西", // 一级菜单
                    children: [
                        {
                            title: "西安", // 二级菜单
                        },
                    ],
                },
            ],
        });

        layui.tree.render({
            elem: "#test1",
            click: obj => {
                console.log(obj.data); // 得到当前点击的节点数据
                console.log(obj.state); // 得到当前节点的展开状态：open、close、normal
                console.log(obj.elem); // 得到当前节点元素

                console.log(obj.data.children); // 当前节点下是否有子节点
            },
            oncheck: obj => {
                const checkData = tree.getChecked("abcd");
                checkData[0].checked;
                tree.setChecked("abcd", [1]);
                const x = tree.reload("abcd", {
                    showCheckbox: false,
                    edit: [],
                    accordion: true,
                    // 新的参数
                });
                console.log(obj.data); // 得到当前点击的节点数据
                console.log(obj.checked); // 得到当前节点的展开状态：open、close、normal
                console.log(obj.elem); // 得到当前节点元素
            },
            operate: obj => {
                const type = obj.type; // 得到操作类型：add、update、del
                const data = obj.data; // 得到当前节点的数据
                const elem = obj.elem; // 得到当前节点元素

                // Ajax 操作
                const id = data.id; // 得到节点索引
                switch (type) {
                    case "add": {
                        // 增加节点
                        // 返回 key 值
                        return 123;
                    }
                    case "update": {
                        // 修改节点
                        console.log(elem.find(".layui-tree-txt").html()); // 得到修改后的内容
                        break;
                    }
                    default: {
                        // 删除节点
                        break;
                    }
                }
            },
        });

        const treeReloaded = tree.reload("demoId", {
            showCheckbox: false,
            edit: [],
            accordion: true,
            // 新的参数
        });
        treeReloaded.config.abc;
        layui.tree.on("click", () => {
            console.log();
        });
        layui.event("tree", "click", "params-a");
    });
}

function uploadTest() {
    layui.use("upload", () => {
        const upload = layui.upload;

        // 执行实例
        const uploadInst = upload.render({
            elem: "#test1", // 绑定元素
            url: "/upload/", // 上传接口
            method: "", // 可选项。HTTP类型，默认post
            data: { a: "123", b: () => 123 },
            accept: "images", // 允许上传的文件类型：images/file/video/audio
            exts: "", // 允许上传的文件后缀名
            auto: true, // 是否选完文件后自动上传
            bindAction: "", // 手动上传触发的元素
            // ,url: '' // 上传地址
            field: "file", // 文件字段名
            acceptMime: "", // 筛选出的文件类型，默认为所有文件
            // ,method: 'post' // 请求上传的 http 类型
            // ,data: {} // 请求上传的额外参数
            drag: true, // 是否允许拖拽上传
            size: 0, // 文件限制大小，默认不限制
            number: 0, // 允许同时上传的文件数，默认不限制
            multiple: false, // 是否允许多文件上传，不支持ie8-9
            before: obj => {
                // obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                // this.item;
                layui.layer.load(); // 上传loading
            },
            allDone: obj => {
                // 当文件全部被提交后，才触发
                console.log(obj.total); // 得到总文件数
                console.log(obj.successful); // 请求成功的文件数
                console.log(obj.aborted); // 请求失败的文件数
            },
            progress: (n, elem: HTMLButtonElement, res, index) => {
                const x: HTMLButtonElement = elem;
                x.value;
                x.addEventListener("click", e => 1);
                elem.value;
                const percent = n + "%"; // 获取进度百分比
                layui.element.progress("demo", percent); // 可配合 layui 进度条元素使用

                console.log(elem); // 得到当前触发的元素 DOM 对象。可通过该元素定义的属性值匹配到对应的进度条。
                console.log(res); // 得到 progress 响应信息
                console.log(index); // 得到当前上传文件的索引，多文件上传时的进度条控制，如：
                layui.element.progress("demo-" + index, n + "%"); // 进度条
            },
            done: (res, index, upload) => {
                // 假设code=0代表上传成功

                // this.item;

                if (res.code === 0) {
                    // do something （比如将res返回的图片链接保存到表单的隐藏域）
                }

                // 获取当前触发上传的元素，一般用于 elem 绑定 class 的情况，注意：此乃 layui 2.1.0 新增
                // let item = this.item;

                // 文件保存失败
                // do something

                upload([]);
            },
            error: (index, upload) => {
                upload();
                // 当上传失败时，你可以生成一个“重新上传”的按钮，点击该按钮时，执行 upload() 方法即可实现重新上传
            },
            choose: obj => {
                const f = new File(["", ""], "");
                const formData = new FormData();
                formData.append(",", f);
                // 将每次选择的文件追加到文件队列
                const files = obj.pushFile();
                files["a"].lastModified;
                // 预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview((index, file, result) => {
                    console.log(index); // 得到文件索引
                    console.log(file.lastModified); // 得到文件对象
                    console.log(result); // 得到文件base64编码，比如图片

                    obj.resetFile(index, file, "123.jpg"); // 重命名文件名，layui 2.3.0 开始新增

                    // 这里还可以做一些 append 文件列表 DOM 的操作

                    obj.upload(index, file); // 对上传失败的单个文件重新上传，一般在某个事件中使用
                    // delete files[index]; // 删除列表中对应的文件，一般在某个事件中使用
                });
            },
        });
        uploadInst.config;
        uploadInst.reload({
            accept: "images", // 只允许上传图片
            acceptMime: "image/*", // 只筛选图片
            size: 1024 * 2, // 限定大小
        });
        uploadInst.upload();
    });
}

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

        // 示例
        const endTime = new Date(2099, 1, 1).getTime(); // 假设为结束日期
        const serverTime = new Date(); // .getTime(); // 假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的

        util.countdown(endTime, serverTime, (date, serverTime2, timer) => {
            const str = ` ${date[0]}天${date[1]}时${date[2]}分${date[3]}秒`;
            layui.$("#test").html(`'距离2099年1月1日还有：${str}`);
        });

        util.timeAgo(new Date(2099, 1, 1), true);
        layui.util.toDateString(new Date(), "yyyy-MM-dd HH:mm:ss");
        layui.util.toDateString(new Date());

        layui.util.digit(1, 4);
        layui.util.escape();

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
    });
}

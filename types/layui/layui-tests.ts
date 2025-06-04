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
    layui.define(["layer", "form"], (exports) => {
        const layer = layui.layer;
        const form = layui.form;
        layer.msg("Hello World");
        exports("index", {}); // 注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
    });
    layui.define((exports) => {
        // 从 layui 2.6 开始，如果你引入的是构建后的 layui.js，里面即包含了 layui 所有的内置模块，无需再指定内置模块。如
        // 需确保您的 layui.js 是引入的构建后的版本（即官网下载或 git 平台的发行版）
        // 直接可得到各种内置模块
        const layer = layui.layer;
        const form = layui.form;
        const table = layui.table;

        // …
        layer.msg("Hello World");

        exports("index", {}); // 注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
    });
    layui.define(["layer", "laypage", "mod1"], (exports) => {
        // 此处 mod1 为你的任意扩展模块
        // do something

        exports("demo", {
            msg: "Hello Demo",
        });
    });

    // layui 模块的使用
    layui.use(["mod1", "mod2"], (args) => {
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
    var myDevice = layui.device("myflag");
    myDevice.myflag;
    myDevice["myflag"];
    // layui.device().myflag;
    layui.device("os");

    // 其他底层方法
    layui["cache"];
    layui.cache.base;
    // layui.cache.builtin['all'];
    // layui.cache.callback.colorpicker;
    // layui.cache.callback['notExists'];
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
        (img) => {
            img.sizes;
        },
        (e) => {},
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

    window.document.onkeydown = (e) => {
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

    layui.disuse("flow");
    layui.disuse(["form", "lay"]);
    layui.disuse("t");
    layui.disuse(["t", "form"]);

    var dFn = layui.debounce((a: number, b: string) => {
        return a + b;
    }, 0);
    dFn(1, "2");
    var tFn = layui.throttle((a: number, b: string) => {
        return a + b;
    }, 0);
    tFn(1, "2");
}

function layerTest() {
    layui.use("layer", layer => {
        /*
      如果是页面层
      */
        layer.open({
            type: 1,
            content: "传入任意的文本或html", // 这里content是一个普通的String
            offset: "25px",
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
                    return true;
                },
            },
            (index, layero) => {
                // 按钮【按钮一】的回调
                return undefined;
            },
            index => {
                // 按钮【按钮二】的回调
                return undefined;
            },
        );

        // eg2
        layer.open({
            content: "test",
            btnAsync: true, // 开启按钮异步加载
            hideOnClose: true,
            removeFocus: true,
            btn: ["按钮一", "按钮二", "按钮三"],
            yes: (index, layero) => {
                // 按钮【按钮一】的回调
                return undefined;
            },
            btn1() {
                return undefined;
            },
            btn2: (index, layero) => {
                // 按钮【按钮二】的回调
                // return false 开启该代码可禁止点击该按钮关闭
                return undefined;
            },
            btn3: (index, layero) => {
                // 按钮【按钮三】的回调
                // return false 开启该代码可禁止点击该按钮关闭
                return undefined;
            },
            cancel: () => {
                // 右上角关闭回调
                // return false 开启该代码可禁止点击该按钮关闭
                return undefined;
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
            beforeEnd(o, i, t) {
                return undefined;
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
            return undefined;
        });

        layer.confirm(1);
        // eg1
        layer.confirm("is not?", { icon: 3, title: "提示" }, index => {
            // do something

            layer.close(index);
            return undefined;
        });
        // eg2
        layer.confirm("is not?", (index, layero) => {
            // do something

            layer.close(index);
            return undefined;
        });
        layer.confirm(
            "is not?",
            {
                icon: 3,
                title: "提示",
                cancel: (index, layero) => {
                    console.log("点击了右上角关闭");
                    // return false  // 点击右上角叉号不能关闭
                    return undefined;
                },
            },
            (index, layero) => {
                console.log("点击了下边的第一个按钮'确定'");
                layer.close(index); // 需要手动关闭
                return undefined;
            },
            (index, layero) => {
                console.log("点击了下边的第二个按钮'取消'");
                // return false // 点击取消不能关闭
                return undefined;
            },
        );
        layer.confirm(
            "is not?",
            (index, layero) => {
                // do something

                layer.close(index);
                return undefined;
            },
            (index, layero) => {
                return undefined;
            },
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
        index = layer.alert("提示层");
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
            anim: 0,
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
        layer.closeLast();
        layer.closeLast("dialog", () => {});
        layer.closeLast(["dialog", "page"], () => {});

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
            toolbar: true, // 是否显示工具栏
            footer: false,
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

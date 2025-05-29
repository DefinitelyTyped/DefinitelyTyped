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

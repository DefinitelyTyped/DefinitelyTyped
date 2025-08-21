function tabsTest() {
    layui.use("tabs", () => {
        const tabs = layui.tabs;
        // 自定义元素
        tabs.render({
            elem: "#demo1",
            id: "tabs1",
            headerMode: "scroll",
            header: ["#tabsHeader", ">li"],
            body: ["#tabsBody", ">div"],
        });

        // 方法渲染
        var ret = tabs.render({
            elem: "#demo1",
            id: "tabs1",
            headerMode: "scroll",
            header: [{ title: "Tab 1", layId: "tab1" }, { title: "Tab 2", layId: "tab2" }, {
                title: "Tab 3",
                layId: "tab3",
            }],
            body: [{ content: "内容 1" }, { content: "内容 2" }, { content: "内容 3" }],
        });
        ret.reload();
        ret.config.id;

        tabs.add("test", {
            title: "Tab 4",
            id: "tab4",
            content: "内容 4",
            mode: "append",
            done(done) {
                console.log(done);
            },
        });
        tabs.close("test", "tab4");
        tabs.close("test", "tab4", true);
        tabs.closeMult("test", "all");
        tabs.change("test", "tab1");
        var d = tabs.data("test");
        d.container;

        var hel = tabs.getHeaderItem("test", "tab1");
        var bel = tabs.getBodyItem("test", "tab1");
        hel.html("Tab 11");
        tabs.refresh("test");

        tabs.on("afterChange", (data) => {
            console.log(data);
        });
        tabs.on("beforeChange(test)", (data) => {
            console.log(data.from.headerItem);
            return undefined;
        });
        new tabs.Class({
            elem: "#demo1",
            id: "tabs1",
        });

        tabs.CONST.MOD_ID;
    });
}

function tabTest() {
    layui.use("tab", () => {
        const tab = layui.tab;
        tab.render({
            elem: "#tab",
        });
        tab.tabDelete("demo", "xxx"); // 删除 lay-id="xxx" 的这一项
        tab.tabAdd("demo", {
            title: "选项卡的标题",
            content: "<div>选项卡的内容</div>", // 支持传入html
            id: "选项卡标题的lay-id属性值",
        });
        tab.tabChange("demo", "layid");
        tab.tab({
            headerElem: "#tabHeader>li", // 指定tab头元素项
            bodyElem: "#tabBody>.xxx", // 指定tab主体元素项
        });
    });
}

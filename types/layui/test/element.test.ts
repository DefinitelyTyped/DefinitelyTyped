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
        element.tabAdd("demo", {
            title: "选项卡的标题",
            content: "<div>选项卡的内容</div>", // 支持传入html
            id: "选项卡标题的lay-id属性值",
        });
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
            console.log(data.id);
        });
        element.on("tabDelete(filter)", data => {
            // console.log(this); //  当前Tab标题所在的原始DOM元素
            console.log(data.index); //  得到当前Tab的所在下标
            console.log(data.elem); //  得到当前的Tab大容器
        });
        element.on("tabBeforeChange(filter)", function(d) {
            d.elem;
            d.from.id;
            d.to.id;
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

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
            dblclick(obj) {
                return false;
            },
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

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
            customName: {
                id: "menuId",
            },
            // 新的参数
        });
        treeReloaded.config.abc;
        layui.tree.on("click", () => {
            console.log();
        });
        layui.event("tree", "click", "params-a");
    });
}

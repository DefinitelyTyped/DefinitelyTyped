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
                    disabled: true, // 禁用该项
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
            delay: [120, 120],
            // 菜单被点击的事件
            click(data, othis) {
                console.log(data); // 得到当前所点击的菜单项对应的数据
                console.log(othis); // 得到当前所点击的菜单项 DOM 对象
                // console.log(this.elem); // 得到当前组件绑定的原始 DOM 对象，批量绑定中常用。
                return undefined;
            },
            ready: (elemPanel, elem) => {
                console.log(elemPanel[0]); // 得到组件面板的 DOM 对象
                console.log(elem.hide()); // 得到基础参数 elem 所绑定的元素 DOM 对象
            },
            shade: 0.3, // 是否开启遮罩层
            close(elem) {
            },
            customName: {
                child: "children",
            },
            onClickOutside(e) {
                return false;
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

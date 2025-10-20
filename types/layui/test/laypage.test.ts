function laypageTest() {
    layui.use("laypage", () => {
        const laypage = layui.laypage;
        laypage.on;
        laypage.index;

        // 渲染
        laypage.render({
            elem: "#test1",
            count: 100,
            limit: 10,
            countText: ["Total ", ""],
            prev: "上一页",
            next: "下一页",
            first: "首页",
            last: "尾页",
            curr: 1,
            groups: 1,
            layout: ["prev", "page", "next", "limit", "count"],
            jump: (obj, first) => {
                console.log(obj, first);
            },
            skipText: ["Go to", "", "Confirm"],
        });
    });
}

function carousel() {
    layui.use("carousel", () => {
        const carousel = layui.carousel;
        carousel.config["anim"] = "updown";

        // 建造实例
        const inst = carousel.render({
            elem: "#test1",
            width: "100%", // 设置容器宽度
            arrow: "always", // 始终显示箭头
            anim: "updown", // 切换动画方式
            change(obj) {
                obj.index;
                obj.item;
            },
        });
        inst.reload({
            elem: "#test1",
            width: "100%", // 设置容器宽度
            arrow: "always", // 始终显示箭头
            anim: "updown", // 切换动画方式
        });
        carousel.on("change(test1)", function(obj) {
            // test1来源于对应HTML容器的 lay-filter="test1" 属性值
            this.config.width;
            // this.elemItem;
            // this.render();
            // this.reload({});
            // this.prevIndex() == 1;
            // this.nextIndex() == 2;
            // this.addIndex(1);
            // this.events();

            console.log(obj.index); // 当前条目的索引
            console.log(obj.prevIndex); // 上一个条目的索引
            console.log(obj.item); // 当前条目的元素对象
            obj.item.length;
        });
        carousel.set({ autoplay: true });

        inst.goto(0);
    });
}

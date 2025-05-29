function rateTest() {
    layui.use("rate", () => {
        const rate = layui.rate;
        rate.set();
        rate.config;
        rate.on;
        rate.index;

        // 渲染
        const ins1 = rate.render({
            elem: "#test1", // 绑定元素
        });
        ins1;
        rate.render({
            elem: "#test1",
            setText(value) {
                /*                let arrs = {
                  1: '极差',
                  2: '差',
                  3: '中等',
                  4: '好',
              };*/
                // arrs[String(value)] || ( value + "星");
            },
        });
    });
}

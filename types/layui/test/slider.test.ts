function SliderTest() {
    layui.use("slider", () => {
        const slider = layui.slider;
        // 渲染
        const x = slider.render({
            elem: "#slideTest1",
            range: true,
            change: value => {
                // console.log(value[0]); // 得到开始值
                // console.log(value[1]); // 得到结尾值
                // do something
            },
            done() {
            },
            tipsAlways: false,
        });
        slider.config;
        slider.set;
        slider.on;
        x.config.disabled;
        x.setValue(1);
        x.setValue(1, 0);
    });
}

function colorpicker() {
    layui.use("colorpicker", () => {
        const colorpicker = layui.colorpicker;
        // 渲染
        colorpicker.render({
            elem: "#test1",
            predefine: true,
            colors: ["#F00", "#0F0", "#00F", "rgb(255, 69, 0)", "rgba(255, 69, 0, 0.5)"],
        });
        colorpicker.render({
            elem: "#test1",
            change: color => {
                console.log(color);
            },
        });
        colorpicker.render({
            elem: "#test1",
            done: color => {
                // this.format;
                // this.change;
                console.log(color);
                // 譬如你可以在回调中把得到的 color 赋值给表单
            },
            cancel: function() {
                this.size = "lg";
            },
            close: function() {
                this.size = "lg";
            },
        });
        colorpicker.index === 0;
        colorpicker.set({
            elem: "#test1",
            predefine: true,
            colors: ["#F00", "#0F0", "#00F", "rgb(255, 69, 0)", "rgba(255, 69, 0, 0.5)"],
        });
        colorpicker.on("confirm", a => {
            console.log(a + ",");
        });
        layui.event("colorpicker", "confirm", [1, 2]);
    });
}

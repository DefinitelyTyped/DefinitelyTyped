function progressTest() {
    layui.use("progress", () => {
        const progress = layui.progress;
        progress.render({
            elem: "#progress1",
        });
        progress.setValue("progress1", "50%");
    });
}

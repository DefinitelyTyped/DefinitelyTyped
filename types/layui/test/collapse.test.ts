function collapseTest() {
    layui.use("collapse", () => {
        const collapse = layui.collapse;
        collapse.render({
            elem: "#collapse",
        });
    });
}

function navTest() {
    layui.use("nav", () => {
        const nav = layui.nav;
        nav.render({
            elem: "#nav",
        });
    });
}

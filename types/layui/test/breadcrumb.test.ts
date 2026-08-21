function breadcrumbTest() {
    layui.use("breadcrumb", () => {
        const breadcrumb = layui.breadcrumb;
        breadcrumb.render({
            elem: "#breadcrumb",
        });
    });
}

function testComponent() {
    const component = layui.component({
        config: {
            hello: "hello world",
        },
        name: "test",
        render() {
        },
        events() {
        },
    });
    component.CONST.MOD_NAME;
    component.getInst("test");
    component.getThis("test");
    component.getAllInst();

    new component.Class({});
}

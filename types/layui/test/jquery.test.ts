function testJquery() {
    layui.define(exports => {
        layui.$ = jQuery;
        exports("jquery", jQuery);
    });
}

function layTest() {
    const a = { a: [1, 2, 3] };
    const b = {};
    layui.lay.extend(b, a, { b: "ok" });
    layui.lay.extend(b, a, { a: [4, 5, 6] }, (objValue: any[], srcValue: any) => {
        if (Array.isArray(objValue)) {
            return objValue.concat(srcValue);
        }
    });
    layui.lay.ie;
    layui.lay.layui;
    layui.lay.getPath;
    layui.lay.stope;
    layui.each([1, 2, 3], console.log);
    layui.lay.digit(1, 4);
    const input = layui.lay.elem("input", { id: "abc" });
    const img = layui.lay.elem("img", { id: "abc" });
    layui.lay.hasScrollbar;
    layui.lay.position;
    layui.lay.options(".a");
    layui.lay.options(".a", "id");

    lay();
    lay(window);
    lay(document);
    lay(document.documentElement);
    lay([document.body, document.body]);
    lay(lay.elem("select"));
    lay(lay());
    lay($("div"));
    lay("div");
    lay(".touchEventsSupported");
    const ll = layui.lay(document.body);
    ll.addClass("abc a", false);
    ll.addClass("abc b", true);
    ll.removeClass("")[0].title;
    ll.hasClass("abc");
    ll.css("");
    ll.css("", "");
    const x = window.lay.each([0, 1], () => {});
    x.selector;
    window.lay.each;
    layui.lay.each({}, () => {});
    layui.lay("div").each((index, ele) => {
        // console.log(index+ele)
    })[0].title;
    window.lay("div").find("input").addClass;
    layui.lay("");
    layui.lay("").each;
    layui.lay("").addClass("");
    layui.lay("").length;
    layui.lay("#abc").on("click", function(e) {
        console.log(this, e);
    });
    lay(window).on("resize", e => {});
    lay(document).on("load", e => {});
    layui.laypage.on(document.getElementById("abc"), "click", e => {
        console.log(e);
    });
    const eme = document.getElementById("abc");
    if (eme) {
        // let elem: HTMLButtonElement = eme;
        layui.laypage.on(null, "click", e => {
            console.log(e);
        });
    }
    var hasown = lay.hasOwn(window, "name");
    var stop = lay.onClickOutside(document.body, (e) => {});
    lay.onClickOutside(document.body, (e) => {}, {
        event: "pointerdown",
        scope: window,
        capture: true,
        detectIframe: true,
    });
    lay.clipboard.writeText("123");
    lay.isPlainObject({});
    lay.isPlainObject([]);
    lay.isPlainObject(new Date());

    lay.escape("123");
    lay.unescape("123");
    const resizeObserver = lay.createSharedResizeObserver("test");
    lay.removeEvent(window, "click", e => {});
    lay.removeEvent(document.body, "click", e => {});
    lay.addEvent(document, "click", e => {}, true);
    lay.addEvent(document, "click", e => {}, {
        capture: true,
    });
    const flat1 = lay.treeToFlat([{
        id: 1,
        children: [{
            id: 2,
        }],
    }]);
    flat1[0].parentId;
    flat1[1].children[0].id;
    const flat2 = lay.treeToFlat([{
        id: 1,
        children: [{
            id: 2,
        }],
    }], {
        idKey: "id2",
        parentKey: "parent2",
        childrenKey: "children2",
    });
    flat2[0].parent2;
    flat2[1].children2[0].id2;
    const tree1 = lay.flatToTree(flat1);
    tree1[0].id;
    tree1[0].children[0].id;
}

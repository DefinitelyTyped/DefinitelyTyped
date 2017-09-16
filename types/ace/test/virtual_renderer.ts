const aceVirtualRendererTests = {
    "test: screen2text the column should be rounded to the next character edge": function () {
        var el = document.createElement("div");

        if (!el.getBoundingClientRect) {
            console.log("Skipping test: This test only runs in the browser");
            return;
        }

        el.style.left = "20px";
        el.style.top = "30px";
        el.style.width = "300px";
        el.style.height = "100px";
        document.body.appendChild(el);

        var renderer = new AceAjax.VirtualRenderer(el);
        renderer.setPadding(0);
        renderer.setScrollMargin(0,0,0,0)
        renderer.setSession(new AceAjax.EditSession("1234"));

        var r = renderer.scroller.getBoundingClientRect();
        function testPixelToText(x, y, row, column) {
            assert.position(renderer.screenToTextCoordinates(x + r.left, y + r.top), row, column);
        }

        renderer.characterWidth = 10;
        renderer.lineHeight = 15;

        testPixelToText(4, 0, 0, 0);
        testPixelToText(5, 0, 0, 1);
        testPixelToText(9, 0, 0, 1);
        testPixelToText(10, 0, 0, 1);
        testPixelToText(14, 0, 0, 1);
        testPixelToText(15, 0, 0, 2);
        document.body.removeChild(el);
    }

    // change tab size after setDocument (for text layer)
};

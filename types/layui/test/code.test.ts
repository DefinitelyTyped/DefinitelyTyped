function code() {
    layui.use("code", () => {
        // 加载code模块
        layui.code(); // 引用code方法
        var inst = layui.code({
            preview: "iframe",
            title: "NotePad++的风格",
            skin: "notepad", // 如果要默认风格，不用设定该key。
            height: "auto",
            className: "layui-bg-black",
            code: `123`,
            codeRender(code, opts) {
                opts.encode = true;
                return "<pre>" + code.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</pre>";
            },
            codeStyle: "2",
            copy: true,
            done(obj) {
            },
            elem: ".code-block",
            encode: true,
            header: false,
            langMarker: true,
            highlighter: "shiki",
            id: "code-block",
            lang: "javascript",
            layout: ["code"],
            ln: true,
            onCopy(code, cpoied) {
                return true;
            },
            previewStyle: "shiki",
            text: {
                code: "code",
                preview: "preview",
            },
            style: "shiki",
            tools: ["full", "window", { title: ["复制"], type: "copy", event: (obj) => {} }],
            wordWrap: true,
        });

        inst.reloadCode({
            code: "123",
        });
    });
}

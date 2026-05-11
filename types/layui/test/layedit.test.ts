function layeditTest() {
    layui.use("layedit", () => {
        const layedit = layui.layedit;
        layedit.build("demo"); // 建立编辑器

        layedit.build("id", {
            tool: ["left", "center", "right", "|", "face"],
        });
        layedit.build("id", {
            tool: [
                "strong", // 加粗
                "italic", // 斜体
                "underline", // 下划线
                "del", // 删除线

                "|", // 分割线

                "left", // 左对齐
                "center", // 居中对齐
                "right", // 右对齐
                "link", // 超链接
                "unlink", // 清除链接
                "face", // 表情
                "image", // 插入图片
                "help", // 帮助
            ],
        });

        layedit.set({
            uploadImage: {
                url: "", // 接口url
                type: "", // 默认post
            },
        });
        // 注意：layedit.set 一定要放在 build 前面，否则配置全局接口将无效。
        layedit.build("demo"); // 建立编辑器
    });
}

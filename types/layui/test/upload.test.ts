function uploadTest() {
    layui.use("upload", () => {
        const upload = layui.upload;

        // 执行实例
        const uploadInst = upload.render({
            elem: "#test1", // 绑定元素
            url: "/upload/", // 上传接口
            method: "", // 可选项。HTTP类型，默认post
            data: { a: "123", b: () => 123 },
            accept: "images", // 允许上传的文件类型：images/file/video/audio
            exts: "", // 允许上传的文件后缀名
            auto: true, // 是否选完文件后自动上传
            bindAction: "", // 手动上传触发的元素
            // ,url: '' // 上传地址
            field: "file", // 文件字段名
            acceptMime: "", // 筛选出的文件类型，默认为所有文件
            // ,method: 'post' // 请求上传的 http 类型
            // ,data: {} // 请求上传的额外参数
            drag: true, // 是否允许拖拽上传
            size: 0, // 文件限制大小，默认不限制
            number: 0, // 允许同时上传的文件数，默认不限制
            multiple: false, // 是否允许多文件上传，不支持ie8-9
            before: obj => {
                // obj参数包含的信息，跟 choose回调完全一致，可参见上文。
                // this.item;
                layui.layer.load(); // 上传loading
                return undefined;
            },
            allDone: obj => {
                // 当文件全部被提交后，才触发
                console.log(obj.total); // 得到总文件数
                console.log(obj.successful); // 请求成功的文件数
                console.log(obj.aborted); // 请求失败的文件数
            },
            progress: (n, elem: HTMLButtonElement, res, index) => {
                const x: HTMLButtonElement = elem;
                x.value;
                x.addEventListener("click", e => 1);
                elem.value;
                const percent = n + "%"; // 获取进度百分比
                layui.element.progress("demo", percent); // 可配合 layui 进度条元素使用

                console.log(elem); // 得到当前触发的元素 DOM 对象。可通过该元素定义的属性值匹配到对应的进度条。
                console.log(res); // 得到 progress 响应信息
                console.log(index); // 得到当前上传文件的索引，多文件上传时的进度条控制，如：
                layui.element.progress("demo-" + index, n + "%"); // 进度条
            },
            done: (res, index, upload) => {
                // 假设code=0代表上传成功

                // this.item;

                if (res.code === 0) {
                    // do something （比如将res返回的图片链接保存到表单的隐藏域）
                }

                // 获取当前触发上传的元素，一般用于 elem 绑定 class 的情况，注意：此乃 layui 2.1.0 新增
                // let item = this.item;

                // 文件保存失败
                // do something

                upload([]);
            },
            error: (index, upload) => {
                upload();
                // 当上传失败时，你可以生成一个“重新上传”的按钮，点击该按钮时，执行 upload() 方法即可实现重新上传
            },
            choose: obj => {
                const f = new File(["", ""], "");
                const formData = new FormData();
                formData.append(",", f);
                // 将每次选择的文件追加到文件队列
                const files = obj.pushFile();
                files["a"].lastModified;
                // 预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview((index, file, result) => {
                    console.log(index); // 得到文件索引
                    console.log(file.lastModified); // 得到文件对象
                    console.log(result); // 得到文件base64编码，比如图片

                    obj.resetFile(index, file, "123.jpg"); // 重命名文件名，layui 2.3.0 开始新增

                    // 这里还可以做一些 append 文件列表 DOM 的操作

                    obj.upload(index, file); // 对上传失败的单个文件重新上传，一般在某个事件中使用
                    // delete files[index]; // 删除列表中对应的文件，一般在某个事件中使用
                });
            },
        });
        uploadInst.config;
        uploadInst.reload({
            accept: "images", // 只允许上传图片
            acceptMime: "image/*", // 只筛选图片
            size: 1024 * 2, // 限定大小
        });
        uploadInst.upload();
    });
}

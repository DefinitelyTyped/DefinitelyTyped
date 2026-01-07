function tableTest() {
    layui.use(a => {
        layui.layer.load(1, {});
        layui.form.on("", a => {
            layui.form.val("", {});
        });
        layui.form.getValue("", $(""));

        layui.table.init;
        const rendered = layui.table.render({
            elem: "#demo",
            cols: [
                [
                    // 标题栏
                    { checkbox: true },
                    { field: "test", title: "abc", width: "12", minWidth: 12, type: "space", templet: "#titleTpl" },
                    { LAY_CHECKED: true, fixed: "left", hide: true, edit: "text" },
                    {
                        fieldTitle: "test",
                        maxWidth: 60,
                        expandedWidth: 60,
                        edit(d) {
                            return "text";
                        },
                        totalRow: { score: "666", experience: "999" },
                        templet: d => {
                            return d.aa;
                        },
                        escape: true,
                        expandedMode: "tips",
                        ignoreExport: true,
                        type: "normal",
                    },
                    { totalRowText: "合计：", sort: true, unresize: true, edit: "text" },
                    { event: "btn01", style: "background-color: #5FB878; color: #fff;" },
                    { align: "left", colspan: 1, rowspan: 2 },
                    {
                        templet() {
                            return "{{d.test}}";
                        },
                        toolbar: "#barDemo",
                    },
                ],
            ],
            url: "/demo/table/user/", // 数据接口
            toolbar: "default",
            defaultToolbar: ["", { title: "", layEvent: "", icon: "" }],
            width: "12",
            height: 12,
            cellMinWidth: 12,
            done(a, b, c) {},
            data: [{}, {}],
            totalRow: true,
            page: { theme: "#c00" },
            limit: 10,
            limits: [1, 2, 3],
            loading: true,
            title: "标题",
            text: { none: "abc" },
            autoSort: true,
            initSort: { field: "id", type: "desc" },
            id: "id",
            skin: "nob",
            even: true,
            size: "lg",
            maxHeight: 500,
            cellMaxWidth: 60,
            lineStyle: "height:95px",
            className: "text",
            css: ".{color:red}",
            cellExpandedMode: "tips",
            cellExpandedWidth: 12,
            pagebar: "#123",
            scrollPos: "fixed",
            editTrigger: "dbclick",

            method: "get",
            where: null, // {}
            contentType: "application/json'",
            headers: { token: "" },
            dataType: "json",
            jsonpCallback: "callback",
            before(opt) {
                console.log(opt);
            },
            complete(x, t) {
            },
            parseData(res) {
                // res 即为原始返回的数据
                return {
                    code: 200, // 解析接口状态
                    msg: "res", // 解析提示文本
                    // count: 123, // 解析数据长度
                    data: res, // 解析数据列表
                };
            },
            request: {
                pageName: "curr", // 页码的参数名称，默认：page
                limitName: "nums", // 每页数据量的参数名，默认：limit
            },
            response: {
                statusName: "status", // 规定数据状态的字段名称，默认：code
                statusCode: 200, // 规定成功的状态码，默认：0
                msgName: "hint", // 规定状态信息的字段名称，默认：msg
                countName: "total", // 规定数据总数的字段名称，默认：count
                dataName: "rows", // 规定数据列表的字段名称，默认：data
            },
        });
        rendered.config.cols;
        layui.use(["table", "laytpl", "element"], () => {
            const table = layui.table;

            const rr = table.render({
                elem: "#demo",
                toolbar: true,
                title: "用户数据表",
                totalRow: true,
                text: {
                    none: "暂无相关数据", // 默认：无数据。
                },
                defaultToolbar: ["filter", { title: "123", layEvent: "", icon: "" }],

                cols: [
                    [
                        // {LAY_CHECKED: true,checkbox: true,fixed: "left"}
                        { field: "id", title: "ID", unresize: true, sort: true, totalRowText: "合计行", rowspan: 2 },
                        { field: "username", title: "用户名", edit: "text", rowspan: 2 },
                        { title: "个人信息", colspan: 2, align: "center" },
                        /*

                  ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true,rowspan:2}
                  ,{field:'logins', title:'登入次数', width:100, sort: true, totalRow: true,rowspan:2}
                  ,{field:'sign', title:'签名',rowspan:2}
                  ,{field:'city', title:'城市', width:100,rowspan:2}
                  ,{field:'ip', title:'IP', width:120,rowspan:2 }
                  ,{field:'joinTime', title:'加入时间', width:120,event: "btn01", style: "background-color: #5FB878; color: #fff;",rowspan:2 }
                  ,{title:"no",templet(d) {return d.city;},rowspan:2 }
                  */
                    ],
                    [
                        {
                            field: "email",
                            title: "邮箱",
                            edit: "text",
                            rowspan: 1,
                            templet(d) {
                                d.LAY_COL.type;
                                d["你可以用 d.xx 来使用当前行的其他属性"] === undefined;
                                return d.LAY_COL.type + d.email;
                            },
                        },
                        { field: "experience", title: "积分", sort: true, totalRow: true, rowspan: 1 },
                    ],
                ],
                data: [
                    {
                        id: "10001",
                        username: "杜甫",
                        email: "test@email.com",
                        sex: "男",
                        city: "浙江杭州",
                        sign: "点击此处，显示更多。当内容超出时，点击单元格会自动显示更多内容。",
                        experience: "116",
                        ip: "192.168.0.8",
                        logins: "108",
                        joinTime: "2016-10-14",
                    },
                    {
                        id: "10002",
                        username: "李白",
                        email: "test@email.com",
                        sex: "男",
                        city: "浙江杭州",
                        sign: "君不见，惟 美酒，与尔同销万古愁。",
                        experience: "12.25",
                        ip: "192.168.0.8",
                        logins: "106",
                        joinTime: "2016-10-14",
                    },
                ],
                page: true,
                response: {
                    statusCode: 200, // 重新规定成功的状态码为 200，table 组件默认为 0
                },
                parseData: res => {
                    // 将原始数据解析成 table 组件所规定的数据
                    return {
                        code: res.status, // 解析接口状态
                        msg: res.message, // 解析提示文本
                        count: res.total, // 解析数据长度
                        data: res.rows.item, // 解析数据列表
                    };
                },
                done(res) {
                    res;
                },
                error(e, msg) {
                    console.log(e, msg);
                },
            });
            rr.reload({}, false);
            layui.table.reload("id", {});
        });

        rendered.config.id;
        rendered.reload({});
        rendered.setColsWidth();
        rendered.resize();

        layui.table.on("tool(test)", obj => {
            //  注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            const data = obj.data; // 获得当前行数据
            const layEvent = obj.event; // 获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            const tr = obj.tr; // 获得当前行 tr 的 DOM 对象（如果有的话）

            switch (layEvent) {
                case "detail":
                    break;
                case "del":
                    layui.layer.confirm("真的删除行么", index => {
                        obj.del(); // 删除对应行（tr）的DOM结构，并更新缓存
                        layui.layer.close(index);
                        // 向服务端发送删除指令
                        return undefined;
                    });
                    break;
                case "edit":
                    obj.update({
                        username: "123",
                        title: "xxx",
                    });
                    break;
                case "LAYTABLE_TIPS":
                    layui.layer.alert("Hi，头部工具栏扩展的右侧图标。");
                    break;
            }
        });
        const checkStatus = layui.table.checkStatus("idTest"); // idTest 即为基础参数 id 对应的值

        if (checkStatus.isAll) {
            checkStatus.data.length;
        }
        layui.table.exportFile("id", null);
        layui.table.on("sort(test)", obj => {
            // 注：sort 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            console.log(obj.field); // 当前排序的字段名
            console.log(obj.type); // 当前排序类型：desc（降序）、asc（升序）、null（空对象，默认排序）
            // console.log(this); // 当前排序的 th 对象

            // 尽管我们的 table 自带排序功能，但并没有请求服务端。
            // 有些时候，你可能需要根据当前排序的字段，重新向服务端发送请求，从而实现服务端排序，如：
            layui.table.reload("idTest", {
                initSort: obj, // 记录初始排序，如果不设的话，将无法标记表头的排序状态。
                where: {
                    // 请求参数（注意：这里面的参数可任意定义，并非下面固定的格式）
                    field: obj.field, // 排序字段
                    order: obj.type, // 排序方式
                },
            });

            layui.layer.msg(`服务端排序。order by {obj.field} ={obj.type}`);
        });
    });

    layui.table.on("checkbox(test)", obj => {
        const data: Layui.TableOnCheckbox = obj;
        data.del;
        data.checked;
        data.tr[0];
        data.type;
        data.update({});
    });

    layui.table.on("toolbar(test)", obj => {
        const data: Layui.TableOnToolbar = obj;
        data.config.autoSort;
        data.event;
    });
    layui.table.on("tool(test)", obj => {
        const data: Layui.TableOnTool = obj;
        data.data;
        data.del();
        data.event;
        data.tr[0];
        data.update({});
    });

    layui.table.on("row(test)", obj => {
        const data: Layui.TableOnRow = obj;
        data.data;
        data.del();
        data.tr[0];
        data.update({});
    });
    layui.table.on("edit(test)", obj => {
        const data: Layui.TableOnEdit = obj;
        data.data;
        data.del();
        data.field;
        data.tr[0];
        data.update({});
        data.value;
    });
    layui.table.on("sort(test)", obj => {
        const data: Layui.TableOnSort = obj;
        data.field;
        data.type;
    });
    layui.table.on("colResized", obj => {
        console.log(obj.col);
    });
    layui.table.on("colToggled", obj => {
        console.log(obj.col);
    });
    layui.table.on("rowContextmenu", obj => {
        console.log(obj.data);
    });
    layui.table.reload("id", {
        url: null,
        data: [],
        where: null,
    });

    // 工具条事件
    layui.table.on("tool(test)", obj => {
        // 注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        const data = obj.data; // 获得当前行数据
        const layEvent = obj.event; // 获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        const tr = obj.tr; // 获得当前行 tr 的 DOM 对象（如果有的话）
        switch (layEvent) {
            case "detail": {
                break;
            }
            case "del": {
                // 删除
                layui.layer.confirm("真的删除行么", index => {
                    obj.del(); // 删除对应行（tr）的DOM结构，并更新缓存
                    layui.layer.close(index);
                    // 向服务端发送删除指令
                    return undefined;
                });
            }
            case "edit": {
                // 编辑
                // do something

                // 同步更新缓存对应的值
                obj.update({
                    username: "123",
                    title: "xxx",
                });
            }
            case "LAYTABLE_TIPS": {
                layui.layer.alert("Hi，头部工具栏扩展的右侧图标。");
            }
        }
    });
    layui.table.set({}); // 设定全局默认参数。options即各项基础参数
    layui.table.on("event(filter)", () => {}); // 事件。event为内置事件名（详见下文），filter为容器lay-filter设定的值
    layui.table.init("filter", {}); // filter为容器lay-filter设定的值，options即各项基础参数。例子见：转换静态表格
    layui.table.checkStatus("id"); // 获取表格选中行（下文会有详细介绍）。id 即为 id 参数对应的值
    layui.table.render({ elem: "test", cols: [[]] }); // 用于表格方法级渲染，核心方法。应该不用再过多解释了，详见：方法级渲染
    layui.table.reload("id", {}, false); // 表格重载
    layui.table.resize("id"); // 重置表格尺寸
    layui.table.exportFile("id", null, "csv"); // 导出数据
    layui.table.exportFile("id", null, { title: "test", type: "csv" }); // 导出数据
    layui.table.exportFile([], [], "csv"); // 导出数据
    layui.table.exportFile([], [], { title: "test" }); // 导出数据
    layui.table.getData("id"); // 用于获取表格当前页的所有行数据（layui 2.6.0 开始新增）

    // 所获得的 tableIns 即为当前容器的实例
    const tableIns = layui.table.render({
        elem: "#id",
        cols: [], // 设置表头
        url: "/api/data", // 设置异步接口
        id: "idTest",
    });

    // 这里以搜索为例
    tableIns.reload({
        where: {
            // 设定异步数据接口的额外参数，任意设
            aaaaaa: "xxx",
            bbb: "yyy",
            // …
        },
        page: {
            curr: 1, // 重新从第 1 页开始
        },
    });
    // 上述方法等价于
    layui.table.reload("idTest", {
        where: {
            // 设定异步数据接口的额外参数，任意设
            aaaaaa: "xxx",
            bbb: "yyy",
            // …
        },
        page: {
            curr: 1, // 重新从第 1 页开始
        },
    }); // 只重载数据
    layui.table.exportFile("abc");
    layui.table.exportFile("abc", null);
    layui.table.exportFile(
        ["名字", "性别", "年龄"],
        [
            ["张三", "男", "20"],
            ["李四", "女", "18"],
            ["王五", "女", "19"],
        ],
        "csv",
    );
    layui.table.getOptions("idTest"); // 获取表格的配置信息
    layui.table.hideCol("idTest", true); // 隐藏列
    layui.table.hideCol("idTest", { field: "a", hide: true }); // 隐藏列
    layui.table.updateRow("test", { index: 1, data: {} }, (f, i) => true);
}

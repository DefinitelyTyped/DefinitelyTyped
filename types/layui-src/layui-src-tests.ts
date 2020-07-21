/// <reference types="jquery" />

layui.use('element', function () {
    const element = layui.element;
    // 一些事件监听
    element.on('tab(demo)', function (data) {
        console.log(data);
    });
    element.init(); // 更新全部  2.1.6 可用 element.render() 方法替代
    element.render('nav'); // 重新对导航进行渲染。注：layui 2.1.6 版本新增
    element.render('nav', 'test1'); // 对 lay-filter="test1" 所在导航重新渲染。注：layui 2.1.6 版本新增
    element.on('tab(filter)', function (data) {
        console.log(this); // 当前Tab标题所在的原始DOM元素
        console.log(data.index); // 得到当前Tab的所在下标
        console.log(data.elem); // 得到当前的Tab大容器
    });
    element.on('tabDelete(filter)', function (data) {
        console.log(this); // 当前Tab标题所在的原始DOM元素
        console.log(data.index); // 得到当前Tab的所在下标
        console.log(data.elem); // 得到当前的Tab大容器
    });
    element.on('nav(filter)', function (elem) {
        console.log(elem); // 得到当前点击的DOM对象
    });
    element.on('collapse(filter)', function (data) {
        console.log(data.show); // 得到当前面板的展开状态，true或者false
        console.log(data.title); // 得到当前点击面板的标题区域DOM对象
        console.log(data.content); // 得到当前点击面板的内容区域DOM对象
    });
});
layui.use('layer', function (a, b) {
    layui.layer.load(1, {});
    layui.form.on('', function (a) {
        layui.form.val('', {});
    });
    layui.form.getValue('', $(''));

    const rendered = layui.table.render({
        elem: '#demo',
        cols: [
            [
                // 标题栏
                { checkbox: true },
                { field: 'test', title: 'abc', width: '12', minWidth: 12, type: 'space' },
                { LAY_CHECKED: true, fixed: 'left', hide: true },
                { totalRow: { score: '666', experience: '999' } },
                { totalRowText: '合计：', sort: true, unresize: true, edit: 'text' },
                { event: 'btn01', style: 'background-color: #5FB878; color: #fff;' },
                { align: 'left', colspan: 1, rowspan: 2 },
                {
                    templet() {
                        return '{{d.test}}';
                    },
                    toolbar: '#barDemo',
                },
            ],
        ],
        url: '/demo/table/user/', // 数据接口
        toolbar: 'default',
        defaultToolbar: ['', { title: '', layEvent: '', icon: '' }],
        width: '12',
        height: 12,
        cellMinWidth: 12,
        done(a, b, c) {},
        data: [{}, {}],
        totalRow: true,
        page: { theme: '#c00' },
        limit: 10,
        limits: [1, 2, 3],
        loading: true,
        title: '标题',
        text: { none: 'abc' },
        autoSort: true,
        initSort: { field: 'id', type: 'desc' },
        id: 'id',
        skin: 'nob',
        even: true,
        size: 'lg',

        method: 'get',
        where: null, // {}
        contentType: "application/json'",
        headers: { token: '' },
        parseData(res) {
            // res 即为原始返回的数据
            return {
                code: 200, // 解析接口状态
                msg: 'res', // 解析提示文本
                count: 123, // 解析数据长度
                data: res, // 解析数据列表
            };
        },
        request: {
            pageName: 'curr', // 页码的参数名称，默认：page
            limitName: 'nums', // 每页数据量的参数名，默认：limit
        },
        response: {
            statusName: 'status', // 规定数据状态的字段名称，默认：code
            statusCode: 200, // 规定成功的状态码，默认：0
            msgName: 'hint', // 规定状态信息的字段名称，默认：msg
            countName: 'total', // 规定数据总数的字段名称，默认：count
            dataName: 'rows', // 规定数据列表的字段名称，默认：data
        },
    });
    rendered.config.id;
    rendered.reload({});
    rendered.setColsWidth();
    rendered.resize();

    layui.table.on('tool(test)', function (obj) {
        // 注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        const data = obj.data; // 获得当前行数据
        const layEvent = obj.event; // 获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        const tr = obj.tr; // 获得当前行 tr 的 DOM 对象（如果有的话）

        switch (layEvent) {
            case 'detail':
                break;
            case 'del':
                layui.layer.confirm('真的删除行么', function (index) {
                    obj.del(); // 删除对应行（tr）的DOM结构，并更新缓存
                    layui.layer.close(index);
                    // 向服务端发送删除指令
                });
                break;
            case 'edit':
                obj.update({
                    username: '123',
                    title: 'xxx',
                });
                break;
            case 'LAYTABLE_TIPS':
                layui.layer.alert('Hi，头部工具栏扩展的右侧图标。');
                break;
        }
    });
    const checkStatus = layui.table.checkStatus('idTest'); // idTest 即为基础参数 id 对应的值

    if (checkStatus.isAll) {
        checkStatus.data.length;
    }
    layui.table.exportFile('id', '');
    layui.table.on('sort(test)', function (obj) {
        // 注：sort 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        console.log(obj.field); // 当前排序的字段名
        console.log(obj.type); // 当前排序类型：desc（降序）、asc（升序）、null（空对象，默认排序）
        console.log(this); // 当前排序的 th 对象

        // 尽管我们的 table 自带排序功能，但并没有请求服务端。
        // 有些时候，你可能需要根据当前排序的字段，重新向服务端发送请求，从而实现服务端排序，如：
        layui.table.reload('idTest', {
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

layui.table.on('checkbox(test)', function (obj) {
    const data: layui.TableOnCheckbox = obj;
    data.del;
    data.checked;
    data.tr[0];
    data.type;
    data.update({});
});

layui.table.on('toolbar(test)', function (obj) {
    const data: layui.TableOnToolbar = obj;
    data.config.autoSort;
    data.event;
});
layui.table.on('tool(test)', function (obj) {
    const data: layui.TableOnTool = obj;
    data.data;
    data.del();
    data.event;
    data.tr[0];
    data.update({});
});

layui.table.on('row(test)', function (obj) {
    const data: layui.TableOnRow = obj;
    data.data;
    data.del();
    data.tr[0];
    data.update({});
});
layui.table.on('edit(test)', function (obj) {
    const data: layui.TableOnEdit = obj;
    data.data;
    data.del();
    data.field;
    data.tr[0];
    data.update({});
    data.value;
});
layui.table.on('sort(test)', function (obj) {
    const data: layui.TableOnSort = obj;
    data.field;
    data.type;
});
layui.table.reload('id', {
    url: null,
    data: [],
    where: null,
});

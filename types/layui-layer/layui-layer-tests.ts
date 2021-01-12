declare let index: layer.Index;

interface Window {
    readonly layer: layer.Layer;
}

/********************************************************************************/
// 如果是页面层
layer.open({
    type: 1,
    content: '传入任意的文本或html' // 这里content是一个普通的String
});
layer.open({
    type: 1,
    content: $('#id') // 这里content是一个DOM
});
// Ajax获取
$.post('url', {}, (str) => {
    layer.open({
        type: 1,
        content: str // 注意，如果str是object，那么需要字符拼接。
    });
});
// 如果是iframe层
layer.open({
    type: 2,
    content: 'http:// sentsin.com' // 这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http:// sentsin.com', 'no']
});
// 如果是用layer.open执行tips层
layer.open({
    type: 4,
    content: ['内容', '#id'] // 数组第二项即吸附元素选择器或者DOM
});

/********************************************************************************/
// 单个使用
layer.open({
    skin: 'demo-class'
});
// 全局使用。即所有弹出层都默认采用，但是单个配置skin的优先级更高
layer.config({
    skin: 'demo-class'
});

/********************************************************************************/
// eg1
layer.alert('酷毙了', { icon: 1 });
// eg2
layer.msg('不开心。。', { icon: 5 });
// eg3
layer.load(1); // 风格1的加载

/********************************************************************************/
// eg1
layer.confirm('纳尼？', {
    btn: ['按钮一', '按钮二', '按钮三'] // 可以无限个按钮
    , btn3(index, layero) {
        // 按钮【按钮三】的回调
    }
}, (index, layero) => {
    // 按钮【按钮一】的回调
}, (index) => {
    // 按钮【按钮二】的回调
});

// eg2
layer.open({
    content: 'test'
    , btn: ['按钮一', '按钮二', '按钮三']
    , yes(index, layero) {
        // 按钮【按钮一】的回调
    }
    , btn2(index, layero) {
        // 按钮【按钮二】的回调

        return false; // 开启该代码可禁止点击该按钮关闭
    }
    , btn3(index, layero) {
        // 按钮【按钮三】的回调

        // return false 开启该代码可禁止点击该按钮关闭
    }
    , cancel() {
        // 右上角关闭回调

        // return false 开启该代码可禁止点击该按钮关闭
    }
});

/********************************************************************************/
layer.open({
    content: '测试回调',
    success(layero, index) {
        console.log(layero, index);
    }
});

/********************************************************************************/
layer.open({
    content: '测试回调',
    yes(index, layero) {
        // do something
        layer.close(index); // 如果设定了yes回调，需进行手工关闭
    }
});

/********************************************************************************/
layer.config({
    path: '/res/layer/' // layer.js所在的目录，可以是绝对目录，也可以是相对目录
});
// 这样的话，layer就会去加载一些它所需要的配件，比如css等。
// 当然，你即便不用seajs或者requirejs，也可以通过上述方式设定路径

/********************************************************************************/
layer.config({
    path: '/res/layer/' // layer.js所在的目录，可以是绝对目录，也可以是相对目录
});

/********************************************************************************/
layer.config({
    shift: 1, // 默认动画风格
    skin: 'layui-layer-molv' // 默认皮肤
});
// 除此之外，extend还允许你加载css。这对于layer的第三方皮肤有极大的帮助，如：
layer.config({
    extend: [
        'skin/layer-ext-myskin/style.css' // layer-ext-myskin即是你拓展的皮肤文件
    ]
});
// 扩展css的规范：您必须在你扩展中的css文件加上这段

/********************************************************************************/
// 页面一打开就执行弹层
layer.ready(() => {
    layer.msg('很高兴一开场就见到你');
});

/********************************************************************************/
index = layer.open({
    content: 'test'
});
// 拿到的index是一个重要的凭据，它是诸如layer.close(index)等方法的必传参数。

/********************************************************************************/
// eg1
layer.alert('只想简单的提示');
// eg2
layer.alert('加了个图标', { icon: 1 }); // 这时如果你也还想执行yes回调，可以放在第三个参数中。
// eg3
layer.alert('有了回调', (index) => {
    // do something

    layer.close(index);
});

/********************************************************************************/
// eg1
layer.confirm('is not?', { icon: 3, title: '提示' }, (index) => {
    // do something

    layer.close(index);
});
// eg2
layer.confirm('is not?', (index) => {
    // do something

    layer.close(index);
});

/********************************************************************************/
// eg1
layer.msg('只想弱弱提示');
// eg2
layer.msg('有表情地提示', { icon: 6 });
// eg3
layer.msg('关闭后想做些什么', () => {
    // do something
});
// eg
layer.msg('同上', {
    icon: 1,
    time: 2000 // 2秒关闭（如果不配置，默认是3秒）
}, () => {
    // do something
});

/********************************************************************************/
// eg1
index = layer.load();
// eg2
index = layer.load(1); // 换了种风格
// eg3
index = layer.load(2, { time: 10 * 1000 }); // 又换了种风格，并且设定最长等待10秒
// 关闭
layer.close(index);

/********************************************************************************/
// eg1
layer.tips('只想提示地精准些', '#id');
// eg 2
$('#id').on('click', function() {
    const that = this;
    layer.tips('只想提示地精准些', that); // 在元素的事件回调体中，follow直接赋予this即可
});
// eg 3
layer.tips('在上面', '#id', {
    tips: 1
});

/********************************************************************************/
// 当你想关闭当前页的某个层时
index = layer.open();
index = layer.alert();
index = layer.load();
index = layer.tips("", "#id");
// 正如你看到的，每一种弹层调用方式，都会返回一个index
layer.close(index); // 此时你只需要把获得的index，轻轻地赋予layer.close即可
// 当你在iframe页面关闭自身时
index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
parent.layer.close(index); // 再执行关闭

/********************************************************************************/
layer.closeAll(); // 疯狂模式，关闭所有层
layer.closeAll('dialog'); // 关闭信息框
layer.closeAll('page'); // 关闭所有页面层
layer.closeAll('iframe'); // 关闭所有的iframe层
layer.closeAll('loading'); // 关闭加载层
layer.closeAll('tips'); // 关闭所有的tips层

/********************************************************************************/
// 重新给指定层设定width、top等
layer.style(index, {
    width: '1000px',
    top: '10px'
});

/********************************************************************************/
layer.open({
    type: 2,
    content: 'test/iframe.html',
    success(layero, index) {
        const body = layer.getChildFrame('body', index);
        // const iframeWin = window[layero.find('iframe')[0]['name']]; // 得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
        console.log(body.html()); // 得到iframe页的body内容
        body.find('input').val('Hi，我是从父页来的');
    }
});

/********************************************************************************/
// 假设这是iframe页
index = parent.layer.getFrameIndex(window.name); // 先得到当前iframe层的索引
parent.layer.close(index); // 再执行关闭

/********************************************************************************/
layer.iframeSrc(index, 'http:// sentsin.com');

/********************************************************************************/
// 通过这种方式弹出的层，每当它被选择，就会置顶。
layer.open({
    type: 2,
    shade: false,
    area: '500px',
    maxmin: true,
    content: 'http:// www.layui.com',
    zIndex: layer.zIndex, // 重点1
    success(layero) {
        layer.setTop(layero); // 重点2
    }
});

/********************************************************************************/
layer.config({
    extend: 'extend/layer.ext.js'
});

/********************************************************************************/
// prompt层新定制的成员如下
let opt = {
    formType: 1, // 输入框类型，支持0（文本）默认1（密码）2（多行文本）
    value: '', // 初始时的值，默认空字符
    maxlength: 140, // 可输入文本的最大长度，默认500
};
// 例子1
layer.prompt((value, index, elem) => {
    alert(value); // 得到value
    layer.close(index);
});
// 例子2
layer.prompt({
    formType: 2,
    value: '初始值',
    title: '请输入值'
}, (value, index, elem) => {
    alert(value); // 得到value
    layer.close(index);
});

/********************************************************************************/
layer.tab({
    area: ['600px', '300px'],
    tab: [{
        title: 'TAB1',
        content: '内容1'
    }, {
        title: 'TAB2',
        content: '内容2'
    }, {
        title: 'TAB3',
        content: '内容3'
    }]
});

/********************************************************************************/
$.getJSON('/jquery/layer/test/photos.json', (json) => {
    layer.photos({
        photos: json
        , shift: 5 // 0-6的选择，指定弹出图片动画类型，默认随机
    });
});
let photos: layer.PhotosData = {
    title: "", // 相册标题
    id: 123, // 相册id
    start: 0, // 初始显示的图片序号，默认0
    data: [   // 相册包含的图片，数组格式
        {
            alt: "图片名",
            pid: 666, // 图片id
            src: "", // 原图地址
            thumb: "" // 缩略图地址
        }
    ]
};

/********************************************************************************/
// HTML示例
`<div id="layer-photos-demo" class="layer-photos-demo">
  <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
  <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
</div>`;

`<script>`;
// 调用示例
layer.photos({
    photos: '#layer-photos-demo'
    , anim: 5 // 0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
});
`</script>`;

/********************************************************************************/
layer.photos({
    photos: "json/选择器",
    tab(pic, layero) {
        console.log(pic); // 当前图片的一些信息
    }
});

/********************************************************************************/

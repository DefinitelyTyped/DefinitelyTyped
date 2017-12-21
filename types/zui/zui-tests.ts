/// <reference types="node" />

new $.zui.Messager();

new $.zui.Messager('提示消息：成功', {
    type: 'success' // 定义颜色主题
}).show();
new $.zui.Messager("message");
let messagarOption: MessagerOption = {};
new $.zui.Messager(messagarOption);
new $.zui.Messager("message", messagarOption);
$.zui.messager.show("ok");

/********   store  *****/
$.zui.store.set('name', 'catouse');                      // 使用本地存储设置'name'值为'catouse'
$.zui.store.set('date', { year: 2014, month: 8, day: 6 }); // 将一个对象存储到本地存储

console.log($.zui.store.get('name'));                    // 从本地存储获取'name'的值
console.log($.zui.store.get<any>('date').year);               // 从本地存储获取'date'值的year属性

$.zui.store.forEach((key: string, value: any) => {               // 遍历所有本地存储的条目
    console.log(value);
});

console.log($.zui.store.key(0));                         // 获取本地存储第一个条目的名称

$.zui.store.remove('name');                              // 从本地存储移除‘name’的值
$.zui.store.clear();                                     // 清空所有本地存储的条目

/* 以下操作的键值仅针对当前页面 */
$.zui.store.pageSet('name', 'catouse');                      // 使用本地存储设置'name'值为'catouse'
$.zui.store.pageSet('date', { year: 2014, month: 8, day: 6 }); // 将一个对象存储到本地存储

console.log($.zui.store.pageGet('name'));                    // 从本地存储获取'name'的值
console.log($.zui.store.pageGet('date').year);               // 从本地存储获取'date'值的year属性

$.zui.store.pageRemove('name');                              // 从本地存储移除‘name’的值
$.zui.store.pageClear();                                     // 清空所有本地存储的条目

/**
 * modal
 */
$('#myModal').modal({
    keyboard: false,
    show: true
});

/**
 * modal trigger
 */

$('#triggerButton').modalTrigger({ title: '新的标题' });

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({ title: '新的标题' })).show();
$.zui.modalTrigger.show({ title: '标题' });

/**
 * tabs
 */
$().tab('show');
$('#myTabLink').tab('show');

/**
 * tooltip
 */
$('[data-toggle="tooltip"]').tooltip();
$('#element').tooltip('show');
$('#element').tooltip('show', '这是新的工具提示内容');

/**
 * popover
 */
// 或者在初始化时指定弹出方向
$('[data-toggle="popover"]').popover({
    placement: 'bottom'
});
$('#myPopover').popover('show');

/**
 * collapse
 */
$('#myCollapseContent').collapse({
    toggle: false
});
$().collapse('show');

$('#myCollapseContent').on('hidden.zui.collapse', () => {
    console.log('折叠内容已隐藏。');
});

/**
 * carousel
 */
$('.carousel').carousel();

/**
 * datetime picker
 */
// 仅选择日期
$(".form-date").datetimepicker(
    {
        language: "zh-CN",
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: "yyyy-mm-dd"
    });
// 选择时间
$(".form-time").datetimepicker({
    language: "zh-CN",
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
    format: 'hh:ii'
});
// 选择时间和日期
$(".form-datetime").datetimepicker(
    {
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        format: "yyyy-mm-dd hh:ii"
    });

// 仅选择日期
$(".form-date").datetimepicker(
    {
        language: "zh-CN",
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: "yyyy-mm-dd"
    });
// 选择时间
$(".form-time").datetimepicker({
    language: "zh-CN",
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
    format: 'hh:ii'
});

// /**
//  * chosen
//  */

// $('select.chosen-select').chosen({
//     no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本
//     disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
//     search_contains: true         // 从任意位置开始检索
// });

/**
 * color
 */
// 创建颜色实例
const myColor = new $.zui.Color('#095823');

// 调用实例方法
const myHsl = myColor.toHsl();

const zuiPrimaryColor = $.zui.colorset.get('primary');
console.log('ZUI primary color is', zuiPrimaryColor.toCssStr());

/**
 * draggable
 */
let count = 0;
$('#draggableBtn').draggable({
    container: '#draggableBox',
    before: () => {
        console.log(`${count++}: [开始] 拖动...\n`);
        return true;
    },
    drag: (e: DraggableEvent) => {
        console.log(`${count++}: 拖动: pos = ${JSON.stringify(e.pos)}, offset = ${JSON.stringify(e.offset)}\n`);
        //        console.log('(' + e.pos.left + ', ' + e.pos.top + ')');
    },
    finish: (e: DraggableEvent) => {
        console.log(`${count++}: [完毕]：pos = ${JSON.stringify(e.pos)}, offset = ${JSON.stringify(e.offset)}\n`);
    }
});

/**
 * droppable
 */
$('#multiDroppableContainer').droppable({
    selector: '.btn-droppable', // 定义允许拖放的元素
    target: '.droppable-target',
    start: () => {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里吗？');
    },
    drop: (event: DroppableEvent) => {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if (event.target && event.element) {
            const elementId = event.element.find('.btn-droppable-id').text();
            let msg = '真棒！';
            event.target.addClass('panel-success').find('.panel-heading').text(`成功将【按钮#${elementId}】拖到目的地。`);
            msg += `成功拖动【按钮#${elementId}】到区域${event.target.find('.area-name').text()}`;

            $.zui.messager.show(msg);
        }
    },
    drag: (event: DroppableEvent) => {
        $('#multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
        if (event.target) event.target.addClass('panel-warning');
    }
});

/**
 * sortable
 */
// 定义选项对象
const options = {
    selector: '.sortable-item',
    finish: (e: SortEvent) => {
        console.log('排序完成：', e);
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#sortableList').sortable(options);

/**
 * selectable
 */

$('#selectable').selectable({
    selector: 'div', // #selectable 内的所有 div 都可以进行选中
    rangeStyle: {
        border: '1px solid red' // 拖选范围指示矩形边框设置为红色
    },
    finish: (data: SelectableEvent) => {  // 选择结束时的回调函数
        // 所有元素的选中或非选中状态
        console.log(data.selections);

        // 所有已选中的元素 ID 值的数组
        console.log(data.selected);
    }
});

/**
 * image cutter
 */

// 获取 imgCutter 实例
const myImgCutter = $('#imgCutter').data('zui.imgCutter');

// 调用 resetImg 方法
myImgCutter.resetImage('http://zui.sexy/docs/img/img1.jpg');

// 调用 getData 方法
const myImgCutterData = myImgCutter.getData();

/**
 * treemenu
 */
const myTreeData = [{
    title: '水果',
    url: 'http://zui.sexy',
    open: true,
    children: [
        { title: '橘子' },
        {
            title: '瓜',
            children: [
                { title: '西瓜' },
                { title: '黄瓜' }
            ]
        }
    ]
}, {
    title: '坚果',
    children: [
        { title: '向日葵' },
        { title: '瓜子' }
    ]
}, {
    title: '蔬菜'
}];

$('#myTree').tree({ data: myTreeData });

/**
 * datatable
 */
$('table.datatable').datatable({ sortable: true });
// 使用data参数更新数据：
$('table.datatable').datatable('load', {
    cols: [
        { width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center' },
        { width: 160, text: '时间', type: 'date', flex: false, sort: 'down' },
        { width: 80, text: '名称', type: 'string', flex: true, colClass: '' }
    ],
    rows: [
        { checked: false, data: [1, '2016-01-18 11:09:36', '新的名称示例1'] },
        { checked: false, data: [2, '2016-01-22 12:06:16', '新的名称示例2'] },
        // 更多数据
    ]
});

/**
 * uplaoder
 */
$('#myUploader').uploader({
    url: '...',
    // ...,
    onUploadFile: (file: FileObj) => {
        console.log('上传成功', file);
    }
});

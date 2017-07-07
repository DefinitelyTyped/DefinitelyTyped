///<reference types="node" />
new $.zui.Messager();

new $.zui.Messager('提示消息：成功', <MessagerOption>{
    type: 'success' // 定义颜色主题
}).show();
new $.zui.Messager("message")
let messagarOption: MessagerOption = <MessagerOption>{};
new $.zui.Messager(messagarOption)
new $.zui.Messager("message", messagarOption);
$.zui.messager.show("ok");

/********   store  *****/
$.zui.store.set('name', 'catouse');                      // 使用本地存储设置'name'值为'catouse'
$.zui.store.set('date', { year: 2014, month: 8, day: 6 }); // 将一个对象存储到本地存储

console.log($.zui.store.get('name'));                    // 从本地存储获取'name'的值
console.log($.zui.store.get<any>('date').year);               // 从本地存储获取'date'值的year属性

$.zui.store.forEach(function (key, value) {               // 遍历所有本地存储的条目
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
})


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
$().collapse('show')

$('#myCollapseContent').on('hidden.zui.collapse', function () {
    console.log('折叠内容已隐藏。');
})

/**
 * carousel
 */
$('.carousel').carousel()

/**
 * datetime picker
 */
// 仅选择日期
$(".form-date").datetimepicker(
{
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    format: "yyyy-mm-dd"
});
// 选择时间
$(".form-time").datetimepicker({
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
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
    todayBtn:  1,
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
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    format: "yyyy-mm-dd"
});
// 选择时间
$(".form-time").datetimepicker({
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
    format: 'hh:ii'
});

/**
 * chosen
 */

$('select.chosen-select').chosen({
    no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本
    disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
    search_contains: true         // 从任意位置开始检索
});

/**
 * color
 */
// 创建颜色实例
var myColor = new $.zui.Color('#095823');

// 调用实例方法
var myHsl = myColor.toHsl();

var zuiPrimaryColor = $.zui.colorset.get('primary');
console.log('ZUI primary color is', zuiPrimaryColor.toCssStr());
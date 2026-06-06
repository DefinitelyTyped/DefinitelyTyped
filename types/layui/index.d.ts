/// <reference types="jquery" />
/// <reference path="modules/breadcrumb.d.ts" />
/// <reference path="modules/carousel.d.ts" />
/// <reference path="modules/code.d.ts" />
/// <reference path="modules/collapse.d.ts" />
/// <reference path="modules/colorpicker.d.ts" />
/// <reference path="modules/component.d.ts" />
/// <reference path="modules/dropdown.d.ts" />
/// <reference path="modules/element.d.ts" />
/// <reference path="modules/flow.d.ts" />
/// <reference path="modules/form.d.ts" />
/// <reference path="modules/i18n.d.ts" />
/// <reference path="modules/lay.d.ts" />
/// <reference path="modules/laydate.d.ts" />
/// <reference path="modules/layedit.d.ts" />
/// <reference path="modules/layer.d.ts" />
/// <reference path="modules/laypage.d.ts" />
/// <reference path="modules/laytpl.d.ts" />
/// <reference path="modules/nav.d.ts" />
/// <reference path="modules/progress.d.ts" />
/// <reference path="modules/rate.d.ts" />
/// <reference path="modules/slider.d.ts" />
/// <reference path="modules/tab.d.ts" />
/// <reference path="modules/table.d.ts" />
/// <reference path="modules/tabs.d.ts" />
/// <reference path="modules/transfer.d.ts" />
/// <reference path="modules/tree.d.ts" />
/// <reference path="modules/treeTable.d.ts" />
/// <reference path="modules/upload.d.ts" />
/// <reference path="modules/util.d.ts" />
/// <reference path="Layui.d.ts" />
/// <reference path="misc.d.ts" />

declare const layui: Layui;
declare const lay: Layui.LayStatic;
declare const layer: Layui.Layer;
declare const LAYUI_GLOBAL: Layui.GlobalProperties;

interface Window {
    layui: Layui;
    lay: Layui.LayStatic;
    layer: Layui.Layer;
    LAYUI_GLOBAL: Layui.GlobalProperties;
}

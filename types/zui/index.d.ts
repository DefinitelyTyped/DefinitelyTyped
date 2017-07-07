// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery/v1" />
/// <reference path="store.d.ts" />
/// <reference path="messager.d.ts" />

/// <reference path="bootstrap.d.ts" />
/// <reference path="bootstrap.datetimepicker.d.ts" />
/// <reference types="chosen-js" />

/// <reference path="modal.trigger.d.ts" />
/// <reference path="color.d.ts" />
/// <reference path="draggable.d.ts" />
/// <reference path="droppable.d.ts" />
/// <reference path="sortable.d.ts" />
/// <reference path="selectable.d.ts" />
/// <reference path="imagecutter.d.ts" />
/// <reference path="treemenu.d.ts" />
/// <reference path="datatable.d.ts" />
/// <reference path="uploader.d.ts" />

interface ZuiStatic {
    // $.zui.messager
    messager: Messager;
    Messager: MessagerStatic;

    store: StoreStatic;
}
interface JQueryStatic {
    zui: ZuiStatic;
}

// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="jquery" />
///<reference path="store.d.ts" />
///<reference path="messager.d.ts" />

///<reference path="bootstrap.d.ts" />
///<reference path="boostrap.datetimepicker/index.d.ts" />
///<reference types="chosen-js" />

///<reference path="modal.trigger.d.ts" />


/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */


interface ZuiStatic {
    //$.zui.messager
    messager: Messager;
    Messager: MessagerStatic;

    store: StoreStatic;
}
interface JQueryStatic {
    zui: ZuiStatic;

}
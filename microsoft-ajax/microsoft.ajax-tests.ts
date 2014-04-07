// Type definitions for Microsoft ASP.NET Ajax client side library
// Project: http://msdn.microsoft.com/en-us/library/ee341002(v=vs.100).aspx
// Definitions by: Patrick Magee <https://github.com/pjmagee/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="microsoft.ajax.d.ts" />

//#region Global Namespace Tests

var arrayVar = new Array("Saturn", "Mars", "Jupiter");

//#endregion


//#region Sys.Application Tests

var component = new Sys.Component();
var element = document.getElementById("#test");
var id = "#test";
var propertyName = "test";
var parent = component;
var registerObject = new Object();

function loadHandler() { }
function initHandler() { }
function navigateHandler() { }
function unloadHandler() { }

Sys.Application.add_load(loadHandler);
Sys.Application.remove_load(loadHandler);
Sys.Application.add_init(initHandler);
Sys.Application.remove_init(initHandler);
Sys.Application.add_navigate(navigateHandler);
Sys.Application.remove_navigate(navigateHandler);
Sys.Application.add_unload(unloadHandler);
Sys.Application.remove_unload(unloadHandler);
Sys.Application.addComponent(component);
Sys.Application.addHistoryPoint("state", "title");
Sys.Application.beginCreateComponents();
Sys.Application.beginUpdate();
Sys.Application.dispose();
Sys.Application.disposeElement(element, false);
Sys.Application.endCreateComponents();
Sys.Application.endUpdate();
Sys.Application.findComponent(id, parent);
Sys.Application.findComponent(id);
$find(id, parent);

var componentArray = Sys.Application.getComponents();
for (var i = 0; i < componentArray.length; i++) {
    var id = componentArray[i].get_id();
}

Sys.Application.initialize();
Sys.Application.notifyScriptLoaded();
Sys.Application.raiseLoad();
Sys.Application.raisePropertyChanged(propertyName);
Sys.Application.registerDisposableObject(registerObject);
Sys.Application.removeComponent(component);
Sys.Application.unregisterDisposableObject(registerObject);
Sys.Application.endUpdate();
Sys.Application.get_enableHistory();
Sys.Application.set_enableHistory(true);
Sys.Application.get_isCreatingComponents();
Sys.Application.get_isDisposing();

//#endregion 

//#region ASP.NET Types Tests

Type.registerNamespace("Samples");

var Samples;
Samples.A = function () { }
var a = <Type> Samples.A;
a.registerClass('Samples.A');


Samples.B = function () { }
var b = <Type> Samples.B;
b.registerClass('Samples.B');

Samples.C = function () {
    var c = <Type> Samples.C;
    c.initializeBase(this);
}

Samples.C.registerClass('Samples.C', Samples.A, Samples.B);

var isDerived;
isDerived = Samples.B.inheritsFrom(Samples.A);
// Output: "false".
alert(isDerived);

isDerived = Samples.C.inheritsFrom(Samples.A);
// Output: "true".
alert(isDerived);

var implementsInterface;
implementsInterface = Samples.C.implementsInterface(Samples.B);
// Output: "true".
alert(implementsInterface);

//#endregion

//#region Global Shortcut Methods

$addHandler($get("Button1"), "click", () => { });
$addHandlers($get("Button1"), { });
$removeHandler($get("Button1"), "click", () => { });
$find('MyComponent');
$find('MyComponent', $find('#test'));

//#endregion
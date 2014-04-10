// Type definitions for Microsoft ASP.NET Ajax client side library
// Project: http://msdn.microsoft.com/en-us/library/ee341002(v=vs.100).aspx
// Definitions by: Patrick Magee <https://github.com/pjmagee/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="microsoft.ajax.d.ts" />

//#region Global Namespace Tests

var arrayVar = new Array("Saturn", "Mars", "Jupiter");

//#endregion

//#region Global Shortcut Methods

$addHandler($get("Button1"), "click", () => { });
$addHandlers($get("Button1"), {});
$removeHandler($get("Button1"), "click", () => { });
$find('MyComponent');
$find('MyComponent', $find('#test'));

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

//#region Sys.ApplicationLoadEventArgs Tests

var a = new Sys.ApplicationLoadEventArgs(new Array<Sys.Component>(), true);

var components = a.get_components();
var isPartialReload = a.get_isPartialLoad();

//#endregion

//#region Sys.Browser Tests

var browser = Sys.Browser();

//#endregion

//#region Sys.CancelEventArgs Tests

var args = new Sys.CancelEventArgs();

var divElem = 'AlertDiv';
var messageElem = 'AlertMessage';

Sys.WebForms.PageRequestManager.getInstance().add_initializeRequest(CheckStatus);

function CheckStatus(sender, args) {

    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (prm.get_isInAsyncPostBack() && args.get_postBackElement().id == 'CancelRefresh') {
        prm.abortPostBack();
    }
    else if (prm.get_isInAsyncPostBack() && args.get_postBackElement().id == 'RefreshButton') {

        args.set_cancel(true);
        ActivateAlertDiv('visible', 'Still working on previous request.');
    }
    else if (!prm.get_isInAsyncPostBack() && args.get_postBackElement().id == 'RefreshButton') {
        ActivateAlertDiv('visible', 'Processing....');
    }
}

function ActivateAlertDiv(visString, msg) {
    var adiv = $get(divElem);
    var aspan = $get(messageElem);
    adiv.style.visibility = visString;
    aspan.innerHTML = msg;
}

//#endregion

//#region Sys.CollectionChange Tests

var action = Sys.NotifyCollectionChangedAction.add;
var newItems = [];
var newStartingIndex = 1;
var oldItems = [];
var oldStartingIndex = 2;

var MyCChg = new Sys.CollectionChange(action, newItems, newStartingIndex, oldItems, oldStartingIndex);

action = MyCChg.action;
newItems = MyCChg.newItems;
newStartingIndex = MyCChg.newStartingIndex;
oldItems = MyCChg.oldItems;
oldStartingIndex = MyCChg.oldStartingIndex;

//#endregion

//#region Sys.CommandEventArg Tests

var commandName = "command name";
var commandArgument = "command argument";
var commandSource = "command source";
var argsObj = new Sys.CommandEventArgs(commandName, commandArgument, commandSource);
var empty = argsObj.Empty;
commandName = argsObj.get_commandName();
commandArgument = argsObj.get_commandArgument();

//#endregion

//#region Sys.Component Tests

var aComponent = new Sys.Component();

aComponent.add_disposing(() => { });
aComponent.remove_disposing(() => { });

aComponent.add_propertyChanged(() => { });
aComponent.remove_propertyChanged(() => { });

aComponent.beginUpdate();

aComponent.create(type, properties, events, references, element);

aComponent.dispose();

aComponent.endUpdate();

aComponent.initialize();

aComponent.raisePropertyChanged("propertyName");

aComponent.updated();

//#endregion

//#region Sys.CultureInfo Tests

var currentCultureInfoObj = Sys.CultureInfo.CurrentCulture;
var dtfCCObject = currentCultureInfoObj.dateTimeFormat;
var invariantCultureInfoObj = Sys.CultureInfo.InvariantCulture;
var dtfICObject = invariantCultureInfoObj.dateTimeFormat;

var newCulture = new Sys.CultureInfo("name", "numberFormat", "dateTimeFormat");

var format = newCulture.dateTimeFormat;
var name = newCulture.name;
var numberFormat = newCulture.numberFormat;

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


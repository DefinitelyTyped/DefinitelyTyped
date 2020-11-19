// Type definitions for Microsoft ASP.NET Ajax client side library
// Project: http://msdn.microsoft.com/en-us/library/ee341002(v=vs.100).aspx
// Definitions by: Patrick Magee <https://github.com/pjmagee/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


function GlobalNamespace_Tests() {

    var arrayVar = new Array("Saturn", "Mars", "Jupiter");

    // Get
    $get("Button1");
    $get("Button1", $get("Button2"));

    // Add handler
    $addHandler($get("Button1"), "click", () => { });
    $addHandlers($get("Button1"), {});

    // Remove handler
    $removeHandler($get("Button1"), "click", () => { });

    // Find
    $find('MyComponent');
    $find('MyComponent', $find('#test'));

    // Clear
    $clearHandlers($get("Button1"));

}

function BaseClassExtensions_Error_Tests() {

    // http://msdn.microsoft.com/en-us/library/bb310947(v=vs.100).aspx

    function validateNumberRange(input: any, min: number, max: number) {

        // Verify the required parameters were defined.
        if (input === undefined) {
            // Throw a standard exception type.
            var err = Error.argumentNull("input", "A parameter was undefined.");
            throw err;
        }
        else if (min === undefined) {
            var err = Error.argumentNull("min", "A parameter was undefined.");
            throw err;
        }
        else if (max === undefined) {
            var err = Error.argumentNull("max", "A parameter was undefined.");
            throw err;
        }
        else if (min >= max) {
            var err = Error.invalidOperation("The min parameter must be smaller than max parameter.");
            throw err;
        }
        else if (isNaN(input)) {
            var msg = "A number was not entered.  ";
            msg += String.format("Please enter a number between {0} and {1}.", min, max);

            var err = Error.create(msg);
            throw err;
        }
        else if (input < min || input > max) {
            msg = "The number entered was outside the acceptable range.  ";
            msg += String.format("Please enter a number between {0} and {1}.", min, max);

            var err = Error.create(msg);

            throw err;
        }

        alert("The number entered was within the acceptable range.");
    }

    var input: any = undefined;
    var min = -10;
    var max = 10;

    // Result: A thrown ErrorArgumentNull exception with the following Error object message:
    // "Sys.ArgumentNullException: A parameter was undefined. Parameter name: input"
    validateNumberRange(input, min, max);
}

function BaseClassExtensions_String_Tests() {

    String.format("Please enter a number between {0} and {1}.", 1, 2);
    "test".endsWith("test");
    String.localeFormat("Please enter a number between {0} and {1}", 1, 2);
    "test".trim();
    "test".trimEnd();
    "test".trimStart();
}

function BaseClassExtensions_Function_Tests() {

    /** Sample code from http://msdn.microsoft.com/en-us/library/dd409287(v=vs.100).aspx */
    var createDelegateTest = function () {
        var context = "";
        var method: Function;
        var a = Function.createCallback(method, context);
    }

    /** Sample code from http://msdn.microsoft.com/en-us/library/dd393582(v=vs.100).aspx */
    var createDelegateTest = function () {
        var instance = this;
        var method: Function;
        var a = Function.createDelegate(instance, method);
    }

    /** Sample code from http://msdn.microsoft.com/en-us/library/dd393712(v=vs.100).aspx */
    var validateParametersTest = function () {
        var arguments = ['test1', 'test2'];
        var insert = function Array$insert(array: any[], index: number, item: any) {
            var e = Function.validateParameters(arguments, [
                { name: "array", type: Array, elementMayBeNull: true },
                { name: "index", mayBeNull: true },
                { name: "item", mayBeNull: true }
            ]);
            if (e) throw e;
        }
    };
}

function BaseClassExtensions_Array_Tests() {

    var arrayVar =["one", "two", "three"];

    Array.add(arrayVar, "four");
    Array.addRange(arrayVar, ["one", "two", "three"]);
    Array.clear(arrayVar);
    Array.clone(arrayVar);
    Array.contains(arrayVar, "zero");
    Array.dequeue(arrayVar);
    Array.enqueue(arrayVar, "zero");
    Array.insert([1, 2, 3], 1, 123);
    Array.isArray({});
    Array.parse("1, 2, 3, 4, 5");
    Array.remove([1, 2, 3], 2);
    Array.removeAt([1, 2, 3], 1);

}

function BaseClassExtensions_Date_Tests() {

    var date = new Date(2014, 5, 25);
    date.format("g");
    date.localeFormat("g");
    Date.parseLocale("2014/05/25");
    Date.parseInvariant("2014/05/25");
}

function BaseClassExtensions_Boolean_Tests() {
    Boolean.parse("false");
}

function BaseClassExtensions_Number_Tests() {

    var x: number = 5;

    x.format("d");
    x.localeFormat("c");
    Number.parseInvariant("1");
    Number.parseLocale("1");
}

function Sys_Application_Tests() {

    var component = new Sys.Component();
    var element = document.getElementById("#test");
    var id = "#test";
    var propertyName = "test";
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
    Sys.Application.findComponent(id, element);
    Sys.Application.findComponent(id, component);
    Sys.Application.findComponent(id);

    $find(id, element);

    var componentArray = Sys.Application.getComponents();
    for (var i = 0; i < componentArray.length; i++) {
        var cid = componentArray[i].get_id();
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
}

function Sys_Application_LoadEventArgs_Tests() {

    var a = new Sys.ApplicationLoadEventArgs(new Array<Sys.Component>(), true);

    var components = a.get_components();
    var isPartialReload = a.get_isPartialLoad();
}

function Sys_Browser_Tests() {

    var browser = Sys.Browser();
    var agent = browser.agent;
    var name = browser.name;
    var version = browser.version;
    var hasDebuggerStatement = browser.hasDebuggerStatement;
    
}

function Sys_EventArgs_Tests() {
    
    var anEventArgs = new Sys.EventArgs();
    var eventArgs = anEventArgs.Empty;

}

function Sys_CancelEventArgs_Tests() {

    var args = new Sys.CancelEventArgs();

    var divElem = 'AlertDiv';
    var messageElem = 'AlertMessage';

    Sys.WebForms.PageRequestManager.getInstance().add_initializeRequest(CheckStatus);

    var CheckStatus = function (sender: any, args: any) {

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

    var ActivateAlertDiv = function (visString: string, msg: string) {
        var adiv = <HTMLElement> $get(divElem);
        var aspan = <HTMLElement> $get(messageElem);
        adiv.style.visibility = visString;
        aspan.innerHTML = msg;
    }
}

function Sys_CollectionChange_Tests() {

    var action = Sys.NotifyCollectionChangedAction.add;
    var newItems: any[] = [];
    var newStartingIndex = 1;
    var oldItems: any[] = [];
    var oldStartingIndex = 2;

    var MyCChg = new Sys.CollectionChange(action, newItems, newStartingIndex, oldItems, oldStartingIndex);

    action = MyCChg.action;
    newItems = MyCChg.newItems;
    newStartingIndex = MyCChg.newStartingIndex;
    oldItems = MyCChg.oldItems;
    oldStartingIndex = MyCChg.oldStartingIndex;
}

function Sys_CommandEventArg_Tests() {

    var commandName = "command name";
    var commandArgument = "command argument";
    var commandSource = "command source";
    var argsObj = new Sys.CommandEventArgs(commandName, commandArgument, commandSource);
    var empty = argsObj.Empty;
    commandName = argsObj.get_commandName();
    commandArgument = argsObj.get_commandArgument();
}

function Sys_Component_Tests() {

    var aComponent = new Sys.Component();
    var properties: any;
    var events: any;
    var references: any;
    var element: HTMLElement;
    var handler: Function;
    var MyControl = new Type;

    aComponent.add_disposing(() => { });
    aComponent.remove_disposing(() => { });

    aComponent.add_propertyChanged(() => { });
    aComponent.remove_propertyChanged(() => { });

    aComponent.beginUpdate();

    var component = $create(MyControl, { id: 'c1', visible: true }, { click: handler }, null, $get('button1'));

    aComponent.dispose();
    aComponent.endUpdate();
    aComponent.initialize();
    aComponent.raisePropertyChanged("propertyName");
    aComponent.updated();

    var id = aComponent.get_id();
    aComponent.set_id("#button1");
    var isInitialized = aComponent.get_isInitialized();
    var isUpdating = aComponent.get_isUpdating();
}

function Sys_UI_Key_Tests() {

    var backspace: number = Sys.UI.Key.backspace;
    var del: number = Sys.UI.Key.del;
    var down: number = Sys.UI.Key.down;
    var end: number = Sys.UI.Key.end;
    var pageDown: number = Sys.UI.Key.pageDown;
    var pageUp: number = Sys.UI.Key.pageUp;
    var home: number = Sys.UI.Key.home;
    var enter: number = Sys.UI.Key.enter;
    var esc: number = Sys.UI.Key.esc;
    var tab: number = Sys.UI.Key.tab;
    var key: number = Sys.UI.Key.up;
    var left: number = Sys.UI.Key.left;
    var right: number = Sys.UI.Key.right;
    var space: number = Sys.UI.Key.space;

}

function Sys_UI_Control_Tests() {

    var domElementObj: any;
    var className = "class Name";

    var a = new Sys.UI.Control(domElementObj);

    a.addCssClass(className);
    a.toggleCssClass(className);
    a.removeCssClass(className);

    a.initialize();
    a.raiseBubbleEvent(domElementObj, className);
    a.onBubbleEvent(domElementObj, className);
    a.dispose();
}

function Sy_UI_Point_Tests() {

    var elementRef: HTMLElement;
    var result: string;
    // Get the location of the element
    var elementLoc = Sys.UI.DomElement.getLocation(elementRef);
    result += "Before move - Label1 location (x,y) = (" +
    elementLoc.x + "," + elementLoc.y + ")<br/>";
    // Move the element
    Sys.UI.DomElement.setLocation(elementRef, 100, elementLoc.y);
    elementLoc = Sys.UI.DomElement.getLocation(elementRef);
    result += "After move  - Label1 location (x,y) = (" +
    elementLoc.x + "," + elementLoc.y + ")<br/>";

}

function Sys_UI_DomEvent_Tests() {

    var object: any;

    Sys.UI.DomEvent.addHandler(object, "eventName", () => { });
    Sys.UI.DomEvent.addHandler(object, "eventName", () => { }, true);

    Sys.UI.DomEvent.addHandlers(object, object, object, true);
    Sys.UI.DomEvent.removeHandler(object, "eventName", () => { });
    Sys.UI.DomEvent.clearHandlers(object);

    var domEvent = new Sys.UI.DomEvent(object);
    var altKey: boolean = domEvent.altKey;
    var mouseButton: Sys.UI.MouseButton = domEvent.button;
    var charCode: number = domEvent.charCode;
    var clientX: number = domEvent.clientX;
    var ctrlKey: boolean = domEvent.ctrlKey;
    var screenX: number = domEvent.screenX;
    var screenY: number = domEvent.screenY;
    var target: any = domEvent.target;
    var shiftKey: boolean = domEvent.shiftKey;
    var type: string = domEvent.type;
}

function Sys_UI_DomElement_Tests() {
    
    // Add CSS class
    Sys.UI.DomElement.addCssClass($get("Button1"), "redBackgroundColor");

    var elementRef = $get("Label1");
    var elementBounds = Sys.UI.DomElement.getBounds(elementRef);
    var toggleCssClassMethod = () => {};
    var removeCssClassMethod = () => {};
    var containsClass = Sys.UI.DomElement.containsCssClass(elementRef, "class-name");

    // Add handler using the getElementById method
    $addHandler(Sys.UI.DomElement.getElementById("Button1"), "click", toggleCssClassMethod);
    // Add handler using the shortcut to the getElementById method
    $addHandler($get("Button2"), "click", removeCssClassMethod);

    Sys.UI.DomElement.toggleCssClass($get("id"), "redBackgroundColor");


    // Add handlers using the $get shortcut to the 
    // Sys.UI.DomElement.getElementById method
    $addHandler($get("Button1"), "click", toggleVisible);
    $addHandler($get("Button2"), "click", toggleVisibilityMode);

    // This method is called when Button2 is clicked.
    function toggleVisible() {
        var anElement = $get("Label1");
        if (Sys.UI.DomElement.getVisible(anElement)) {
            Sys.UI.DomElement.setVisible(anElement, false);
        }
        else {
            Sys.UI.DomElement.setVisible(anElement, true);
        }
    }
    
    // This method is called when Button1 is clicked.
    function toggleVisibilityMode() {

        var anElement = $get("Label1");

        var visMode = Sys.UI.DomElement.getVisibilityMode(anElement);

        var status = visMode;

        if (visMode === 0) {
            Sys.UI.DomElement.setVisibilityMode(anElement, Sys.UI.VisibilityMode.collapse);
            if (document.all) {
                anElement.innerText =
                "Label1  VisibilityMode: Sys.UI.VisibilityMode.collapse";
            }
            else {
                //Firefox
                anElement.textContent =
                "Label1  VisibilityMode: Sys.UI.VisibilityMode.collapse";
            }
        }
        else {
            Sys.UI.DomElement.setVisibilityMode(anElement, Sys.UI.VisibilityMode.hide);
            if (document.all) {
                anElement.innerText = "Label1  VisibilityMode: Sys.UI.VisibilityMode.hide";
            }
            else {
                //Firefox
                anElement.textContent = "Label1  VisibilityMode: Sys.UI.VisibilityMode.hide";
            }
        }
    }


}

function Sys_Debug_Tests() {
    
    var condition = true;

    Sys.Debug.assert(condition);
    Sys.Debug.assert(condition, "true");
    Sys.Debug.assert(condition, "true", true);

    var obj = {};
    Sys.Debug.traceDump(obj, "Name");
    Sys.Debug.trace("Trace text");
    Sys.Debug.fail("Fail message");

    Sys.Debug.clearTrace();
}

function Sys_CultureInfo_Tests() {

    var currentCultureInfoObj = Sys.CultureInfo.CurrentCulture;
    var dtfCCObject = currentCultureInfoObj.dateTimeFormat;
    var invariantCultureInfoObj = Sys.CultureInfo.InvariantCulture;
    var dtfICObject = invariantCultureInfoObj.dateTimeFormat;

    var newCulture = new Sys.CultureInfo("name", "numberFormat", "dateTimeFormat");

    var format = newCulture.dateTimeFormat;
    var name = newCulture.name;
    var numberFormat = newCulture.numberFormat;
}

function Sys_Res_Tests() {

    var actualValue = Sys.Res.actualValue;
    var appLoadTimedout = Sys.Res.appLoadTimedout;
    var argument = Sys.Res.argument;
    var argumentNull = Sys.Res.argumentNull;
    var argumentOutOfRange = Sys.Res.argumentOutOfRange;
    var argumentType = Sys.Res.argumentType;
    var argumentTypeWithTypes = Sys.Res.argumentTypeWithTypes;
    var argumentUndefined = Sys.Res.argumentUndefined;
    var assertFailed = Sys.Res.assertFailed;
    var assetFailedCaller = Sys.Res.assetFailedCaller;
    var badBaseUrl1 = Sys.Res.badBaseUrl1;
    var badBaseUrl2 = Sys.Res.badBaseUrl2;
    var badBaseUrl3 = Sys.Res.badBaseUrl3;
    var breakIntoDebugger = Sys.Res.breakIntoDebugger;
    var cannotAbortBeforeStart = Sys.Res.cannotAbortBeforeStart;
    var cannotCallBeforeResponse = Sys.Res.cannotCallBeforeResponse;
    var cannotCallOnceStarted = Sys.Res.cannotCallOnceStarted;
    var cannotCallOutsideHandler = Sys.Res.cannotCallOutsideHandler;
    var cannotDeserializeEmptyString = Sys.Res.cannotDeserializeEmptyString;
    var cannotSerializeNonFiniteNumbers = Sys.Res.cannotSerializeNonFiniteNumbers;
    var controlCantSetId = Sys.Res.controlCantSetId;
    var enumInvalidValue = Sys.Res.enumInvalidValue;
    var eventHandlerInvalid = Sys.Res.eventHandlerInvalid;
    var format = Sys.Res.format;
    var formatBadDate = Sys.Res.formatBadDate;
    var formatBadFormatSpecifier = Sys.Res.formatBadFormatSpecifier;
    var formatInvalidString = Sys.Res.formatInvalidString;
    var invalidExecutorType = Sys.Res.invalidExecutorType;
    var invalidHttpVerb = Sys.Res.invalidHttpVerb;
    var invalidOperation = Sys.Res.invalidOperation;
    var invalidTimeout = Sys.Res.invalidTimeout;
    var invokeCalledTwice = Sys.Res.invokeCalledTwice;
    var notImplemented = Sys.Res.notImplemented;
    var nullWebRequest = Sys.Res.nullWebRequest;
    var undefinedEvent = Sys.Res.undefinedEvent;
    var eventHandlerNotFunction = Sys.Res.eventHandlerNotFunction;
    var propertyUndefined = Sys.Res.propertyUndefined;
    var propertyNotAnArray = Sys.Res.propertyNotAnArray;
    var propertyNotWritable = Sys.Res.propertyNotWritable;
}

function Sys_StringBuilder_Tests() {
    
    // Example taken from http://msdn.microsoft.com/en-us/library/bb310852(v=vs.100).aspx
    function buildAString(title: string) {
        var headTagStart = "<head>";
        var headTagEnd = "</head>";
        var titleTagStart = "<title>";
        var titleTagEnd = "</title>";

        var sb = new Sys.StringBuilder(this._headTagStart);
        sb.append(titleTagEnd);
        sb.append(title);
        sb.append(titleTagEnd);
        sb.append(headTagEnd);
        // Displays: "The result: <head><title>A Title</title></head>"
        alert("The result" + sb.toString());
    }

    var title = "A Title";
    buildAString(title);


}

function Sys_Services_Profile_Service_Group_Tests() {

    var Street = Sys.Services.ProfileService.properties.Address.Street;
    var City = Sys.Services.ProfileService.properties.Address.City;

    Sys.Services.ProfileService.properties.Address = new Sys.Services.ProfileGroup();
    Sys.Services.ProfileService.properties.Address.Street = "street name";
    Sys.Services.ProfileService.properties.Address.City = "city name";
    Sys.Services.ProfileService.properties.Address.State = "state name";

    var SaveCompletedCallback = () => { };
    var ProfileFailedCallback = () => { };
    var LoadCompletedCallback = () => { };

    Sys.Services.ProfileService.save(null, SaveCompletedCallback, ProfileFailedCallback, null);
    Sys.Services.ProfileService.load(null, LoadCompletedCallback, ProfileFailedCallback, null);

    Sys.Services.ProfileService.set_defaultFailedCallback("Function");
    var defaultFailedCallback = Sys.Services.ProfileService.get_defaultFailedCallback();

    Sys.Services.ProfileService.set_defaultLoadCompletedCallback("Function");
    var defaultLoadCompletedCallback = Sys.Services.ProfileService.get_defaultLoadCompletedCallback();

    Sys.Services.ProfileService.set_defaultSaveCompletedCallback("Function");
    var defaultSaveCompletedCallback = Sys.Services.ProfileService.get_defaultSaveCompletedCallback();

    Sys.Services.ProfileService.set_path("path");
    Sys.Services.ProfileService.get_path();

    var timeout = Sys.Services.ProfileService.get_timeout();

}

function Sys_Net_NetworkRequestEventArgs_Tests() {

    var value = new Sys.Net.WebRequest();
    var netWorkEventArgs = new Sys.Net.NetworkRequestEventArgs(value);
    var webRequest = netWorkEventArgs.get_webRequest();
}

function Sys_Net_WebRequestManager_Tests() {
    
    var handler = (sender: any, args: any) => { }

    Sys.Net.WebRequestManager.add_completedRequest(handler);
    Sys.Net.WebRequestManager.add_invokingRequest(handler);
    Sys.Net.WebRequestManager.executeRequest(new Sys.Net.WebRequest());
    Sys.Net.WebRequestManager.remove_completedRequest(handler);
    Sys.Net.WebRequestManager.set_defaultTimeout(100);
    var customDefaultTimeout = Sys.Net.WebRequestManager.get_defaultTimeout();

}

function Sys_WebForms_PageRequestManager_Tests() {

    var pageRequestManager: Sys.WebForms.PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();

    var beginRequestHandler = (sender: any, args: Sys.WebForms.BeginRequestEventArgs) => {
        var postBackElement: HTMLElement = args.get_postBackElement();
        var webRequest: Sys.Net.WebRequest = args.get_request();
        var updatePanelsToUpdate: string[] = args.get_updatePanelsToUpdate();
        var empty: Sys.EventArgs = args.Empty;
    }
    var endRequestHandler = (sender: any, args: Sys.WebForms.EndRequestEventArgs) => {
        var dataItems: any = args.get_dataItems();
        var error: Error = args.get_error();
        var errorHandled: boolean = args.get_errorHandled();
        var webRequestExecutor: Sys.Net.WebRequestExecutor = args.get_response();
        args.set_errorHandled(true);

    }
    var initializeRequestHandler = (sender: any, args: Sys.WebForms.InitializeRequestEventArgs) => {
        var postBackElement: HTMLElement = args.get_postBackElement();
        var webRequestExecutor: Sys.Net.WebRequestExecutor = args.get_request();
        var updatePanelsToUpdate: string[] = args.get_updatePanelsToUpdate();
        var empty: Sys.EventArgs = args.Empty;
    }
    var pageLoadedRequestHandler = (sender: any, args: Sys.WebForms.PageLoadedEventArgs) => {
        var dataItems: any = args.get_dataItems();
        var panelsCreated: HTMLDivElement[] = args.get_panelsCreated();
        var panelsUpdated: HTMLDivElement[] = args.get_panelsUpdated();
        var empty: Sys.EventArgs = args.Empty;
    }
    var pageLoadingRequestHandler = (sender: any, args: Sys.WebForms.PageLoadingEventArgs) => {
        var dataItems: any = args.get_dataItems();
        var panelsDeleted: HTMLDivElement[] = args.get_panelsDeleting();
        var panelsUpdating = args.get_panelsUpdating();
        var empty: Sys.EventArgs = args.Empty;
    }


    var isInAsyncPostBack: boolean = pageRequestManager.get_isInAsyncPostBack();
    
    pageRequestManager.add_beginRequest(beginRequestHandler);
    pageRequestManager.add_endRequest(endRequestHandler);
    pageRequestManager.add_initializeRequest(initializeRequestHandler);
    pageRequestManager.add_pageLoading(pageLoadingRequestHandler);
    pageRequestManager.add_pageLoaded(pageLoadedRequestHandler);
    pageRequestManager.remove_beginRequest(beginRequestHandler);
    pageRequestManager.remove_pageLoaded(pageLoadedRequestHandler);
    pageRequestManager.remove_pageLoading(pageLoadingRequestHandler);
    pageRequestManager.beginAsyncPostBack();
    pageRequestManager.abortPostBack();
    pageRequestManager.dispose();
}

function Sys_WebForms_EndRequestEventArgs_Tests() {
    
    var pageRequestManager: Sys.WebForms.PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();

    var handler = (sender: any, args: Sys.WebForms.EndRequestEventArgs) => {
        
        var error: Error = args.get_error();
        var message: string = error.message;
        var name: string = error.name;
        var response: Sys.Net.WebRequestExecutor = args.get_response();
        var dataItems: any = args.get_dataItems();
        var eventArgs: Sys.EventArgs = args.Empty;

        args.set_errorHandled(true);
        var errorHandled: boolean = args.get_errorHandled();
    }

    pageRequestManager.add_endRequest(handler);
}

function AspNetTypes_Tests() {

    Type.registerNamespace("Samples");

    var Samples: any;

    Samples.A = function () { };
    var a = <Type> Samples.A;
    a.registerClass('Samples.A');


    Samples.B = function () { };
    var b = <Type> Samples.B;
    b.registerClass('Samples.B');

    Samples.C = function () {
        var c = <Type> Samples.C;
        c.initializeBase(this);
    };

    Samples.C.registerClass('Samples.C', Samples.A, Samples.B);

    var isDerived: boolean;
    isDerived = Samples.B.inheritsFrom(Samples.A);
    // Output: "false".
    alert(isDerived);

    isDerived = Samples.C.inheritsFrom(Samples.A);
    // Output: "true".
    alert(isDerived);

    var implementsInterface: boolean;
    implementsInterface = Samples.C.implementsInterface(Samples.B);
    // Output: "true".
    alert(implementsInterface);
}

/** Sample code from http://msdn.microsoft.com/en-us/library/bb386520(v=vs.100).aspx */
function CreatingCustomNonVisualClientComponentsTests() {

    var Demo: any;
    Type.registerNamespace("Demo");

    Demo.Timer = function () {
        Demo.Timer.initializeBase(this);

        this._interval = 1000;
        this._enabled = false;
        this._timer = null;
    }

    Demo.Timer.prototype = {
        // OK to declare value types in the prototype

        get_interval: function () {
            /// <value type="Number">Interval in milliseconds</value>
            return this._interval;
        },
        set_interval: function (value: any) {
            if (this._interval !== value) {
                this._interval = value;
                this.raisePropertyChanged('interval');

                if (!this.get_isUpdating() && (this._timer !== null)) {
                    this._restartTimer();
                }
            }
        },

        get_enabled: function () {
            /// <value type="Boolean">True if timer is enabled, false if disabled.</value>
            return this._enabled;
        },
        set_enabled: function (value: any) {
            if (value !== this.get_enabled()) {
                this._enabled = value;
                this.raisePropertyChanged('enabled');
                if (!this.get_isUpdating()) {
                    if (value) {
                        this._startTimer();
                    }
                    else {
                        this._stopTimer();
                    }
                }
            }
        },

        // events
        add_tick: function (handler: Function) {
            /// <summary>Adds a event handler for the tick event.</summary>
            /// <param name="handler" type="Function">The handler to add to the event.</param>
            this.get_events().addHandler("tick", handler);
        },
        remove_tick: function (handler: Function) {
            /// <summary>Removes a event handler for the tick event.</summary>
            /// <param name="handler" type="Function">The handler to remove from the event.</param>
            this.get_events().removeHandler("tick", handler);
        },

        dispose: function () {
            // call set_enabled so the property changed event fires, for potentially attached listeners.
            this.set_enabled(false);
            // make sure it stopped so we aren't called after disposal
            this._stopTimer();
            // be sure to call base.dispose()
            Demo.Timer.callBaseMethod(this, 'dispose');
        },

        updated: function () {
            Demo.Timer.callBaseMethod(this, 'updated');
            // called after batch updates, this.beginUpdate(), this.endUpdate().
            if (this._enabled) {
                this._restartTimer();
            }
        },

        _timerCallback: function () {
            var handler = this.get_events().getHandler("tick");
            if (handler) {
                handler(this, Sys.EventArgs.Empty);
            }
        },

        _restartTimer: function () {
            this._stopTimer();
            this._startTimer();
        },

        _startTimer: function () {
            // save timer cookie for removal later
            this._timer = window.setInterval(Function.createDelegate(this, this._timerCallback), this._interval);
        },

        _stopTimer: function () {
            if (this._timer) {
                window.clearInterval(this._timer);
                this._timer = null;
            }
        }
    }

    Demo.Timer.registerClass('Demo.Timer', Sys.Component);

    // Since this script is not loaded by System.Web.Handlers.ScriptResourceHandler
    // invoke Sys.Application.notifyScriptLoaded to notify ScriptManager 
    // that this is the end of the script.
    if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();

}

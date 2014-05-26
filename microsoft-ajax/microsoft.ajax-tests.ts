// Type definitions for Microsoft ASP.NET Ajax client side library
// Project: http://msdn.microsoft.com/en-us/library/ee341002(v=vs.100).aspx
// Definitions by: Patrick Magee <https://github.com/pjmagee/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="microsoft.ajax.d.ts" />

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
            var err = (<MicrosoftAjaxBaseTypeExtensions.Error>Error).argumentNull("input", "A parameter was undefined.");
            throw err;
        }
        else if (min === undefined) {
            var err = (<MicrosoftAjaxBaseTypeExtensions.Error>Error).argumentNull("min", "A parameter was undefined.");
            throw err;
        }
        else if (max === undefined) {
            var err = (<MicrosoftAjaxBaseTypeExtensions.Error>Error).argumentNull("max", "A parameter was undefined.");
            throw err;
        }
        else if (min >= max) {
            var err = (<MicrosoftAjaxBaseTypeExtensions.Error>Error).invalidOperation("The min parameter must be smaller than max parameter.");
            throw err;
        }
        else if (isNaN(input)) {
            var msg = "A number was not entered.  ";
            msg += (<MicrosoftAjaxBaseTypeExtensions.String>String).format("Please enter a number between {0} and {1}.", min, max);

            var err = (<MicrosoftAjaxBaseTypeExtensions.Error>Error).create(msg);
            throw err;
        }
        else if (input < min || input > max) {
            msg = "The number entered was outside the acceptable range.  ";
            msg += (<MicrosoftAjaxBaseTypeExtensions.String>String).format("Please enter a number between {0} and {1}.", min, max);

            var err = (<MicrosoftAjaxBaseTypeExtensions.Error>Error).create(msg);

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

    (<MicrosoftAjaxBaseTypeExtensions.String>String).format("Please enter a number between {0} and {1}.", 1, 2);
    (<MicrosoftAjaxBaseTypeExtensions.String>String).endsWith("test");
    (<MicrosoftAjaxBaseTypeExtensions.String>String).localeFormat("Please enter a number between {0} and {1}", 1, 2);
    (<MicrosoftAjaxBaseTypeExtensions.String>String).trim();
    (<MicrosoftAjaxBaseTypeExtensions.String>String).trimEnd();
    (<MicrosoftAjaxBaseTypeExtensions.String>String).trimStart();
}

function BaseClassExtensions_Function_Tests() {

    /** Sample code from http://msdn.microsoft.com/en-us/library/dd409287(v=vs.100).aspx */
    var createDelegateTest = function () {
        var context = "";
        var method: MicrosoftAjaxBaseTypeExtensions.Function;
        var a = (<MicrosoftAjaxBaseTypeExtensions.Function>Function).createCallback(method, context);
    }

    /** Sample code from http://msdn.microsoft.com/en-us/library/dd393582(v=vs.100).aspx */
    var createDelegateTest = function () {
        var instance = this;
        var method: MicrosoftAjaxBaseTypeExtensions.Function;
        var a = (<MicrosoftAjaxBaseTypeExtensions.Function>Function).createDelegate(instance, method);
    }

    /** Sample code from http://msdn.microsoft.com/en-us/library/dd393712(v=vs.100).aspx */
    var validateParametersTest = function () {
        var arguments = ['test1', 'test2'];
        var insert = function Array$insert(array: any[], index: number, item: any) {
            var e = (<MicrosoftAjaxBaseTypeExtensions.Function>Function).validateParameters(arguments, [
                { name: "array", type: Array, elementMayBeNull: true },
                { name: "index", mayBeNull: true },
                { name: "item", mayBeNull: true }
            ]);
            if (e) throw e;
        }
    };
}

function BaseClassExtensions_Array_Tests() {

    var arrayVar = Array<string>("one", "two", "three");

    arrayVar.add(["one"], {});
    arrayVar.addRange({}, ["one", "two", "three"]);
    arrayVar.clear();
    arrayVar.clone();
    arrayVar.contains({});
    arrayVar.dequeue();
    arrayVar.enqueue({});
    arrayVar.insert([1, 2, 3], 1, {});
    arrayVar.isArray({});
    arrayVar.parse("1, 2, 3, 4, 5");
    arrayVar.remove([1, 2, 3], 2);
    arrayVar.removeAt([1, 2, 3], 1);

}

function BaseClassExtensions_Date_Tests() {

    var date = new Date(2014, 5, 25);
    date.format("g");
    date.localeFormat("g");
    date.parseLocale("2014/05/25");
    date.parseInvariant("2014/05/25");
}

function BaseClassExtensions_Boolean_Tests() {

    (<MicrosoftAjaxBaseTypeExtensions.Boolean>Boolean).parse("false");
}

function BaseClassExtensions_Number_Tests() {

    var x: number = 5;

    x.format("d");
    x.localeFormat("c");
    x.parseInvariant("1");
    x.parseLocale("1");
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
        var adiv = $get(divElem);
        var aspan = $get(messageElem);
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

    $create(MyControl, { id: 'c1', visible: true }, { click: handler }, null, $get('button1'));

    aComponent.dispose();

    aComponent.endUpdate();

    aComponent.initialize();

    aComponent.raisePropertyChanged("propertyName");

    aComponent.updated();
}

function Sys_UI_Key_Tests() {

    var backspace = Sys.UI.Key.backspace;
    var del = Sys.UI.Key.del;
    var down = Sys.UI.Key.down;
    var end = Sys.UI.Key.end;
    var pageDown = Sys.UI.Key.pageDown;
    var pageUp = Sys.UI.Key.pageUp;
    var home = Sys.UI.Key.home;
    var enter = Sys.UI.Key.enter;
    var esc = Sys.UI.Key.esc;
    var tab = Sys.UI.Key.tab;
    var key = Sys.UI.Key.up;
    var left = Sys.UI.Key.left;
    var right = Sys.UI.Key.right;
    var space = Sys.UI.Key.space;

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
            this._timer = window.setInterval((<MicrosoftAjaxBaseTypeExtensions.Function>Function).createDelegate(this, this._timerCallback), this._interval);
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
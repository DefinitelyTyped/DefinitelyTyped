/// <reference path="sfdcaura.d.ts" />


// *********************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_attr_values.htm
// *********************************************************************************************

// Get an Attribute Value
var cmp = $A.get<SFDCAura.Component>('foo');
var myLabel = cmp.find<SFDCAura.Component>('button1').get<string>('v.label');

//Set an Attribute Value
cmp.set('v.label', 'This is a label');

// Validate that an Attribute Value is Defined
var isDefined = !$A.util.isUndefined(cmp.get<string>('v.label'));

//Validate that an Attribute Value is Empty
var isEmpty = $A.util.isEmpty(cmp.get<string>('v.label'));

// *******************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_cmp_body.htm
// *******************************************************************************************

// Replace a Component's Bod
var cmp2 = $A.get<SFDCAura.Component>('foo2');
cmp.set('v.body', cmp2);

// Clear a Component's Body
cmp.set('v.body', []);

// Append a Component to a Component's Body
var body = cmp.get<SFDCAura.Component[]>('v.body');
body.push(cmp2);
cmp.set('v.body', body);

// Prepend a Component to a Component's Body
var body = cmp.get<SFDCAura.Component[]>('v.body');
body.unshift(cmp2);
cmp.set('v.body', body);

// Remove a Component from a Component's Body
var body = cmp.get<SFDCAura.Component[]>("v.body");
body.splice(3, 1);
cmp.set("v.body", body);

// *******************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_renderers.htm
// *******************************************************************************************
if (cmp.get<boolean>("v.disabled")) {
    var disabled = $A.util.getBooleanValue(cmp.get<boolean>("v.disabled"));
    var button = cmp.find<SFDCAura.Component>("button");
    if (button) {
        var element = button.getElement();
        if (element) {
            if (disabled) {
                element.setAttribute('disabled', 'disabled');
            } else {
                element.removeAttribute('disabled');
            }
        }
    }
}

// ***********************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm
// ***********************************************************************************************
window.setTimeout(
    $A.getCallback(function () {
        if (cmp.isValid()) {
            cmp.set("v.visible", true);
        }
    }), 5000
);

// ************************************************************************************************
//https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_validate_fields.htm
// ************************************************************************************************

// Default Error Handling
var controllerDefault = {
    doAction: function (component: SFDCAura.Component) {
        var inputCmp = component.find<SFDCAura.Component>("inputCmp");
        var value = inputCmp.get<number>("v.value");

        // Is input numeric?
        if (isNaN(value)) {
            // Set error
            inputCmp.set("v.errors", [{message: "Input not a number: " + value}]);
        } else {
            // Clear error
            inputCmp.set("v.errors", null);
        }
    }
}

var controllerCustom = {
    doAction: function (component: SFDCAura.Component, event: SFDCAura.AuraEvent) {
        var inputCmp = component.find<SFDCAura.Component>("inputCmp");
        var value = inputCmp.get<number>("v.value");

        // is input numeric?
        if (isNaN(value)) {
            inputCmp.set("v.errors", [{message: "Input not a number: " + value}]);
        } else {
            inputCmp.set("v.errors", null);
        }
    },

    handleError: function (component: SFDCAura.Component, event: SFDCAura.AuraEvent) {
        /* do any custom error handling
         * logic desired here */
    },

    handleClearError: function (component: SFDCAura.Component, event: SFDCAura.AuraEvent) {
        /* do any custom error handling
         * logic desired here */
    }
}


// *********************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_throw_error.htm
// *********************************************************************************************
var recoverableErrorController = ({
    throwErrorForKicks: function (cmp: SFDCAura.Component) {
        // this sample always throws an error to demo try/catch
        var hasPerm = false;
        try {
            if (!hasPerm) {
                throw new Error("You don't have permission to edit this record.");
            }
        }
        catch (e) {
            $A.createComponents([
                    ["ui:message", {
                        "title": "Sample Thrown Error",
                        "severity": "error",
                    }],
                    ["ui:outputText", {
                        "value": e.message
                    }]
                ],
                function (components, status) {
                    if (status === "SUCCESS") {
                        var message = components[0];
                        var outputText = components[1];
                        // set the body of the ui:message to be the ui:outputText
                        message.set("v.body", outputText);
                        var div1 = cmp.find<SFDCAura.Component>("div1");
                        // Replace div body with the dynamic component
                        div1.set("v.body", message);
                    }
                }
            );
        }
    }
})

// *********************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm
// *********************************************************************************************
interface SampleComponent extends SFDCAura.Component {
    sampleMethod(val: string): void;
}
var auraMethodController = ({
    handleClick: function (cmp: SampleComponent, event: SFDCAura.AuraEvent) {
        console.log("in handleClick");
        // call the method declared by <aura:method> in the markup
        cmp.sampleMethod("1");
    },

    doAction: function (cmp: SampleComponent, event: SFDCAura.AuraEvent) {
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.param1;
            console.log("param1: " + param1);
            // add your code here
        }
    },
})

// **************************************************************************************************************
// https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm
// **************************************************************************************************************

var callingServerAction = ({
    "echo": function (cmp: SFDCAura.Component) {
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
        var action = cmp.get<SFDCAura.Action>("c.serverEcho");
        action.setParams({firstName: cmp.get("v.firstName")});

        // Create a callback that is executed after
        // the server-side action returns
        action.setCallback(this, function (response) {
            var state = response.getState();
            // This callback doesn’t reference cmp. If it did,
            // you should run an isValid() check
            //if (cmp.isValid() && state === "SUCCESS") {
            if (state === "SUCCESS") {
                // Alert the user with the value returned
                // from the server
                alert("From server: " + response.getReturnValue());

                // You would typically fire a event here to trigger
                // client-side notification that the server-side
                // action is complete
            }
            //else if (cmp.isValid() && state === "ERROR") {
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        // optionally set abortable flag here

        // A client-side action could cause multiple events,
        // which could trigger other events and
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    }
})

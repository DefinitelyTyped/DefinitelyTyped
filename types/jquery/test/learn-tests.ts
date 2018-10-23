// From https://learn.jquery.com/plugins/basic-plugin-creation/

// Basic Plugin Authoring

interface JQuery {
    greenify: GreenifyPlugin;
}

interface GreenifyPlugin {
    // tslint:disable-next-line:callable-types
    (this: JQuery): void;
}

jQuery.fn.greenify = function() {
    this.css("color", "green");
};

jQuery("a").greenify(); // Makes all the links green.

// https://learn.jquery.com/events/event-extensions/

// Events

function fixHooks() {
    function setHook() {
        jQuery.event.fixHooks.drop = {
            props: ["dataTransfer"]
        };
    }

    function conflictResolution() {
        if (jQuery.event.fixHooks.drop) {
            throw new Error("Someone else took the jQuery.event.fixHooks.drop hook!");
        }

        jQuery.event.fixHooks.drop = {
            props: ["dataTransfer"]
        };
    }
}

function special() {
    function defineSpecialEvent() {
        jQuery.event.special.pushy = {
            bindType: "click",
            delegateType: "click"
        };
    }

    function handleObj() {
        jQuery.event.special.multiclick = {
            delegateType: "click",
            bindType: "click",
            handle(event) {
                const handleObj = event.handleObj;
                const targetData = jQuery.data(event.target);
                let ret = null;

                // If a multiple of the click count, run the handler
                targetData.clicks = (targetData.clicks || 0) + 1;

                if (targetData.clicks % event.data.clicks === 0) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = handleObj.type;
                    return ret;
                }
            }
        };

        // Sample usage
        $("p").on("multiclick", {
            clicks: 3
        }, () => {
            alert("clicked 3 times");
        });
    }
}

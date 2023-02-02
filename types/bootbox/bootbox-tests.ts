// QUnit Tests for Bootbox 4.4.0


bootbox.alert("Are we ok?");
bootbox.alert("Are we ok with callback?", function () {
    console.log("Callback called!");
});
bootbox.alert({
    size: "small",
    message: "Are we ok with callback and custom button?",
    callback: function () {
        console.log("Callback called!");
    }
});
bootbox.alert({
    size: "extra-large",
    message: "Are we ok with new sizes?",
});
bootbox.alert({
    size: "lg",
    message: "Are we ok with new alternative size keys?",
});
bootbox.alert({
    scrollable: true,
    message: "Are we ok with scrollable?",
});
bootbox.alert({
    swapButtonOrder: true,
    message: "Are we ok with swapButtonOrder?",
});
bootbox.alert({
    centerVertical: true,
    message: "Are we ok with centerVertical?",
});

bootbox.confirm("Click cancel to pass test", function (result) {
    console.log(!result);
});
bootbox.confirm({
    title: "Click confirm to pass test",
    message: "Please confirm this.",
    callback: function (result) {
        console.log(result);
    }
});

bootbox.prompt("Enter 'ok' to pass test", function (result) {
    console.log(result);
});
bootbox.prompt({
    title: "Enter 'ok' to pass test", callback: function (result) {
        console.log(result);
    }
});
bootbox.prompt({
    size: "large",
    title: "Enter 'ok' to pass test", callback: function (result) {
        console.log(result);
    }
});
bootbox.prompt({
    size: "xl",
    title: "Enter 'ok' to pass test", callback: function (result) {
        console.log(result);
    }
});
bootbox.prompt({
    scrollable: true,
    title: "Enter 'ok' to pass test", callback: function (result) {
        console.log(result);
    }
});
bootbox.prompt({
    title: "This is a prompt with a set of checkbox inputs!",
    message: '<p>Please select an option below:</p>',
    inputType: 'checkbox',
    inputOptions: [
        {
            text: 'Choice One',
            value: '1',
            group: 'Group 1'
        },
        {
            text: 'Choice Two',
            value: '2',
            group: 'Group 1'
        },
        {
            text: 'Choice Three',
            value: '3'
        }
    ],
    callback: function (result) {
        console.log(result);
    }
});

bootbox.dialog({
    title: "Wassup?",
    message: "Test Dialog",
    callback: function () { }
});

// Testing the return object of the call. Using the pointer to disable the animation on success callback.
var bBox : JQuery;

bBox = bootbox.dialog({
    message: "Test Dialog",
    buttons: {
        cancel: {
            label: "Cancel"
        },
        confirm: {
            label: "Continue",
            callback: function () {
                bBox.removeClass("fade");
                console.log("Outer callback.");
            }
        }
    },
    animate: true,
});

var bdo: BootboxDialogOptions;
var sampleButton: BootboxButton = {
    label: 'ButtonLabelToUse',
    callback: function () {
        return 'callback of button click'
    },
    className: 'additionalButtonClassName'
};

bdo = {
    message: '',
    className: 'callName',
    buttons: {
        'ButtonTextLabel': sampleButton
    }
};

bootbox.dialog(bdo);

bootbox.setDefaults({
    locale: 'en_US',
    animate: false,
    backdrop: false,
    className: 'newClassName',
    closeButton: true,
    show: true,
    container: 'body',
    value: '',
    inputType: "textarea",
    swapButtonOrder: true,
    centerVertical: true,
    multiple: true,
    scrollable: true,
    reusable: true
})

bootbox.hideAll();

var localeOptions: BootboxLocaleValues = {
    OK: 'Hus',
    CANCEL: 'Nai',
    CONFIRM: 'Pakka'
}

bootbox.addLocale("Nepali", localeOptions);
bootbox.setLocale("Nepali");
bootbox.removeLocale("Nepali");

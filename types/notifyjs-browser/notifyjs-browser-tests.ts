// setting defaults for notification plugin
$.notify.defaults({
    clickToHide: true,
    autoHide: false,
    autoHideDelay: 5000,
    arrowShow: true,
    arrowSize: 5,
    position: 'top center',
    elementPosition: 'bottom left',
    globalPosition: 'top center',
    style: 'bootstrap',
    className: 'error',
    showAnimation: 'slideDown',
    showDuration: 400,
    hideAnimation: 'slideUp',
    hideDuration: 200,
    gap: 2
});

$(".elem-demo").notify("Hello Box");
$.notify("Access granted", "success");
$.notify("Do not press this button", "info");
$.notify('hello !!', {
    style: 'happyblue'
});
$.notify('hello !!', {
    style: 'happyblue'
});
//add a new style 'foo'
$.notify.addStyle('foo', {
    html:
    "<div>" +
    "<div class='clearfix'>" +
    "<div class='title' data-notify-html='title'/>" +
    "<div class='buttons'>" +
    "<button class='no'>Cancel</button>" +
    "<button class='yes' data-notify-text='button'></button>" +
    "</div>" +
    "</div>" +
    "</div>"
});

$.notify({
    title: 'Would you like some Foo ?',
    button: 'Confirm'
}, {
        style: 'foo',
        autoHide: false,
        clickToHide: false
    });
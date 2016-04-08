/// <reference path="notify.d.ts" />

$.notify.addStyle("bootstrap", {
  html: "<div>\n<span data-notify-text></span>\n</div>",
  classes: {
    base: {
      "font-weight": "bold",
      "padding": "8px 15px 8px 14px",
    },
    error: {
      "color": "#B94A48",
    },
    info: {
      "color": "#3A87AD",
      "background-color": "#D9EDF7",
      "border-color": "#BCE8F1",
    }
  }
});

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

$.notify.defaults({
    style: "bootstrap",
    className: "info"
});

$.notify("Hello world!");

$.notify("Error text", "error");

$(".my-element").notify("Hello Box", {
    arrowSize: 25,
    autoHide: false,
    elementPosition: "top center",
    showAnimation: "slideDown",
    showDuration: 100,
    hideAnimation: "slideUp",
    hideDuration: 5000,
    gap: 20
});

$.notify({
        title: 'Would you like some Foo ?',
        button: 'Confirm'
    }, {
        style: 'foo',
        clickToHide: false
});

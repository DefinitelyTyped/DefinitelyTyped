import xhook = require("xhook");

xhook.disable();
xhook.enable();

xhook.before(request => {
    console.log(request.url);
});

xhook.after((_, response) => {
    console.log(response.text);
});

xhook.before((request, callback) => {
    console.log(request.url);
    callback({
        status: 200,
        data: new Document(),
        headers: {},
        statusText: "",
        text: "",
        xml: new XMLDocument(),
    });
});

xhook.after((_, response, callback) => {
    console.log(response.data);
    callback();
});

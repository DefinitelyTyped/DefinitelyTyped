import JsReport = require('jsreport-core');

const template: JsReport.Template = {
    content: '<h1>Hello {{:foo}}</h1>',
    engine: 'jsrender',
    recipe: 'phantom-pdf'
};

const options: JsReport.RequestOptions = { };

const request: JsReport.Request = {
    template,
    data: {
        foo: "world"
    },
    options,
};

const jsreport = JsReport();
jsreport.init().then(() => {
    return jsreport.render(request).then((resp) => {
        // prints pdf with headline Hello world
        console.log(resp.content.toString());
    });
}).catch((e) => {
    console.log(e);
});

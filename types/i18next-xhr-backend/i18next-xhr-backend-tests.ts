import * as i18next from "i18next";
import * as XHR from "i18next-xhr-backend";

const options: XHR.BackendOptions = {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: false,
    parse: (data: string) => data.replace(/a/g, ""),
    crossDomain: false,
    withCredentials: false,
    ajax: (url: string, options: XHR.BackendOptions, callback: XHR.AjaxRequestCallback, data: {}) => { },
    queryStringParams: { v: "1.3.5" }
};

i18next
    .use(XHR)
    .init({
        backend: options
    });

const xhr = new XHR();
xhr.init(options);
const xhr2 = new XHR(null, options);
const type: string = xhr.type;
const newOptions: XHR.BackendOptions = xhr.options;
xhr.create("en", "ns", "key", "value");
xhr.create(["en", "us"], "ns", "key", "value");
xhr.read("en", "ns", (error: any, result: string | false) => { });
xhr.readMulti(["en"], ["ns"], (error: any, result: string | false) => { });
xhr.loadUrl("someurl", (error: any, result: string) => { });

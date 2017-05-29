import * as i18next from 'i18next';
import XHR from 'i18next-xhr-backend';

let options = {
    loadPath: '',
    addPath: '',
    allowMultiLoading: false,
    parse: function(data:string) { return data.replace(/a/g, ''); },
    crossDomain: false,
    withCredentials: false,
    ajax: function (url:string, options:Object, callback: Function, data: Object) {}
};

i18next.use(XHR).init({
    backend: options
});

let xhr = new XHR(null, options);


function callbackWithoutData() {

}

function callback(data:jsf.ajax.RequestData) {

}

class RequestOptionsImpl implements jsf.ajax.RequestOptions {
    execute = "@all";
    render = "@none";
}


jsf.ajax.addOnEvent(callbackWithoutData);
jsf.ajax.addOnEvent(callback);

jsf.ajax.addOnError(callbackWithoutData);
jsf.ajax.addOnError(callback);

jsf.ajax.request("someSource");
jsf.ajax.request("someSource", "change");
jsf.ajax.request("someSource", "change", new RequestOptionsImpl());

jsf.ajax.response("someRequestObject", {context: "someContextObject"});

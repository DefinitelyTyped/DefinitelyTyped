import JSONAPIAdapter from "@ember-data/adapter/json-api";
import Store from "@ember-data/store";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { ModelSchema } from "ember-data";
import $ from "jquery";

class JsonApi extends JSONAPIAdapter {
    // Application specific overrides go here
}

const Customized = JSONAPIAdapter.extend({
    host: "https://api.example.com",
    namespace: "api/v1",
    headers: {
        API_KEY: "secret key",
        ANOTHER_HEADER: "Some header value",
    },
});

const AuthTokenHeader = JSONAPIAdapter.extend({
    session: service("session"),
    headers: computed("session.authToken", function() {
        return {
            API_KEY: this.get("session.authToken"),
            ANOTHER_HEADER: "Some header value",
        };
    }),
});

const UseAjax = JSONAPIAdapter.extend({
    query(store: Store, type: ModelSchema, query: object) {
        const url = "https://api.example.com/my-api";
        return this.ajax(url, "POST", {
            param: "foo",
        });
    },
});

const UseAjaxOptions = JSONAPIAdapter.extend({
    query(store: Store, type: ModelSchema, query: object) {
        const url = "https://api.example.com/my-api";
        const options = this.ajaxOptions(url, "DELETE", {
            foo: "bar",
        });
        return $.ajax(url, {
            ...options,
        });
    },
});

const UseAjaxOptionsWithOptionalThirdParams = JSONAPIAdapter.extend({
    query(store: Store, type: ModelSchema, query: object) {
        const url = "https://api.example.com/my-api";
        const options = this.ajaxOptions(url, "DELETE");
        return $.ajax(url, {
            ...options,
        });
    },
});

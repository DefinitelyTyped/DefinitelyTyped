import Controller, { inject } from "@ember/controller";

Controller.extend({
    queryParams: ["category"],
    category: null,
    isExpanded: false,

    first: inject(),
    second: inject("second"),

    toggleBody() {
        this.toggleProperty("isExpanded");
    },
});

class CustomController extends Controller {
    queryParams = ["category"];
    category = null;
    isExpanded = false;

    toggleBody() {
        this.toggleProperty("isExpanded");
    }
}

class CustomController2 extends Controller {
    queryParams = Object.freeze(["category"]);
}

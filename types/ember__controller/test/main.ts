import Controller, { inject } from "@ember/controller";

Controller.extend({
    queryParams: ["category"],
    category: null,
    isExpanded: false,

    first: inject(),
    second: inject('second'),

    toggleBody() {
        this.toggleProperty("isExpanded");
    }
});

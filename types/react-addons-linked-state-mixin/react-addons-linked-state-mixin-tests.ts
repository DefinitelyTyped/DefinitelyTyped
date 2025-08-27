import * as LinkedStateMixin from "react-addons-linked-state-mixin";
import * as DOM from "react-dom-factories";
import createReactClass = require("create-react-class");

createReactClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            isChecked: false,
            message: "hello!",
        };
    },
    render() {
        return DOM.div(
            null,
            DOM.input({
                type: "checkbox",
                checkedLink: this.linkState("isChecked"),
            }),
            DOM.input({
                type: "text",
                valueLink: this.linkState("message"),
            }),
        );
    },
});

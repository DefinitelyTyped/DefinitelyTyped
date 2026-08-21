import * as PureRenderMixin from "react-addons-pure-render-mixin";
import createReactClass = require("create-react-class");
import * as DOM from "react-dom-factories";

createReactClass({
    mixins: [PureRenderMixin],
    render() {
        return DOM.div(null);
    },
});

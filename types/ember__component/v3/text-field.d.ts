import Component from "@ember/component";
import TextSupport from "@ember/component/-private/text-support";
/**
 * The internal class used to create text inputs when the `{{input}}`
 * helper is used with `type` of `text`.
 */
export default class TextField extends Component.extend(TextSupport) {
    /**
     * The `value` attribute of the input element. As the user inputs text, this
     * property is updated live.
     */
    value: string;
    /**
     * The `type` attribute of the input element.
     */
    type: string;
    /**
     * The `size` of the text field in characters.
     */
    size: string;
    /**
     * The `pattern` attribute of input element.
     */
    pattern: string;
    /**
     * The `min` attribute of input element used with `type="number"` or `type="range"`.
     */
    min: string;
    /**
     * The `max` attribute of input element used with `type="number"` or `type="range"`.
     */
    max: string;
}

import Component from "@ember/component";
import TextSupport from "@ember/component/-private/text-support";

/**
 * The internal class used to create textarea element when the `{{textarea}}`
 * helper is used.
 */
export default class TextArea extends Component.extend(TextSupport) {}

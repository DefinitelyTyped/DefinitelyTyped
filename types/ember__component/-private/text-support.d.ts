import TargetActionSupport from "@ember/component/-private/target-action-support";
import Mixin from "@ember/object/mixin";

/**
 * `TextSupport` is a shared mixin used by both `Ember.TextField` and
 * `Ember.TextArea`. `TextSupport` adds a number of methods that allow you to
 * specify a controller action to invoke when a certain event is fired on your
 * text field or textarea. The specifed controller action would get the current
 * value of the field passed in as the only argument unless the value of
 * the field is empty. In that case, the instance of the field itself is passed
 * in as the only argument.
 */
interface TextSupport extends TargetActionSupport {
    // tslint:disable-next-line:ban-types
    cancel(event: Function): void;
    // tslint:disable-next-line:ban-types
    focusIn(event: Function): void;
    // tslint:disable-next-line:ban-types
    focusOut(event: Function): void;
    // tslint:disable-next-line:ban-types
    insertNewLine(event: Function): void;
    // tslint:disable-next-line:ban-types
    keyPress(event: Function): void;
    action: string;
    bubbles: boolean;
    onEvent: string;
}
declare const TextSupport: Mixin<TextSupport>;

export default TextSupport;

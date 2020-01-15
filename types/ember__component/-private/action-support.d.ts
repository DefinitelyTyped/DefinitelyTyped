import Mixin from "@ember/object/mixin";

interface ActionSupport {
    sendAction(action: string, ...params: any[]): void;
}
declare const ActionSupport: Mixin<ActionSupport>;

export default ActionSupport;

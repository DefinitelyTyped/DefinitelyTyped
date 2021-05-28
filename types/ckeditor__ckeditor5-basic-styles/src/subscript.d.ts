import { Plugin } from "@ckeditor/ckeditor5-core";
import SubscriptEditing from "./subscript/subscriptediting";
import SubscriptUI from "./subscript/subscriptui";

export default class Subscript extends Plugin {
    static readonly requires: [typeof SubscriptEditing, typeof SubscriptUI];
    static readonly pluginName: "Subscript";
}

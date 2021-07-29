import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import ContextPlugin from "./contextplugin";
import Editor from "./editor/editor";

export default class PendingActions extends ContextPlugin implements Iterable<Observable & { message: string }> {
    readonly first: null | (Observable & { message: string });
    readonly hasAny: boolean;

    static pluginName: "PendingActions";

    constructor(editor: Editor);
    [Symbol.iterator](): Iterator<Observable & { message: string }>;
    add(message: string): Observable & { message: string };
    remove(action: Observable & { message: string }): void;
    init(): void;
}

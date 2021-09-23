import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Command from "./command";

export default class MultiCommand extends Command implements Emitter, Observable {
    registerChildCommand(command: Command): void;
}

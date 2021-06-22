import English = require("./English");
import Language = require("./Language");

declare namespace Chinese {
    interface Vocabulary extends English.Vocabulary {}

    interface Library extends English.Library {}
}

declare const Chinese: Language<Chinese.Library>;

export = Chinese;

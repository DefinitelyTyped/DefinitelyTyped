import English = require("./English");
import Language = require("./Language");

declare namespace German {
    interface Vocabulary extends English.Vocabulary {}

    interface Library extends English.Library {}
}

declare const German: Language<German.Library>;

export = German;

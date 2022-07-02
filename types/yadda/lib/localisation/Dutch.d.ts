import English = require("./English");
import Language = require("./Language");

declare namespace Dutch {
    interface Vocabulary extends English.Vocabulary {}

    interface Library extends English.Library {}
}

declare const Dutch: Language<Dutch.Library>;

export = Dutch;

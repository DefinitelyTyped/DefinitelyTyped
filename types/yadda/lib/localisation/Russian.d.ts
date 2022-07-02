import English = require("./English");
import Language = require("./Language");

declare namespace Russian {
    interface Vocabulary extends English.Vocabulary {}

    interface Library extends English.Library {}
}

declare const Russian: Language<Russian.Library>;

export = Russian;

import English = require("./English");
import Language = require("./Language");

declare namespace Ukrainian {
    interface Vocabulary extends English.Vocabulary {}

    interface Library extends English.Library {}
}

declare const Ukrainian: Language<Ukrainian.Library>;

export = Ukrainian;

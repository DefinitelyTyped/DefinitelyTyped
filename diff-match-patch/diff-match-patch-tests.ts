
import DiffMatchPatch = require("diff-match-patch");

var oldValue = "hello world, how are you?";
var newValue = "hello again world. how have you been?";

var diffEngine = new DiffMatchPatch.diff_match_patch();
var diffs = diffEngine.diff_main(oldValue, newValue);
diffEngine.diff_cleanupSemantic(diffs);

var changes = "";
var pattern = "";

diffs.forEach(function(diff) {
    var operation = diff[0]; // Operation (insert, delete, equal)
    var text = diff[1]; // Text of change
    
    switch (operation) {
        case DiffMatchPatch.DIFF_INSERT:
            pattern += "I";
            break;
        case DiffMatchPatch.DIFF_DELETE:
            pattern += "D";
            break;
        case DiffMatchPatch.DIFF_EQUAL:
            pattern += "E";
            break;
    }

    changes += text;
});

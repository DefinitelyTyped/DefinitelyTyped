import "./Settings";
import "./Methods";
import "./Triggers";
import "./Events";
import "./Variables";

/**
 * Basic usage
 */
$("#").tablesorter();
$("#").tablesorter({
    sortList: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 0]
    ]
});

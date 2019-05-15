import "./Settings";
import "./Methods";
import "./Triggers";
import "./Events";
import "./Variables";
import { SortDefinitionOrder } from "tablesorter";

/**
 * Basic usage
 */
$("#").tablesorter();
$("#").tablesorter({
    sortList: [
        [0, 0],
        [1, SortDefinitionOrder.Descending],
        [2, SortDefinitionOrder.None],
        [3, SortDefinitionOrder.Ascending]
    ]
});

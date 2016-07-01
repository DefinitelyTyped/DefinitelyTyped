/// <reference path="chosen.jquery.d.ts" />

$(".chzn-select").chosen({ no_results_text: "No results matched" });
$("#form_field").chosen().change();
$("#form_field").trigger("liszt:updated");

$(".chzn-select").chosen();
$(".chzn-select-deselect").chosen({ allow_single_deselect: true });
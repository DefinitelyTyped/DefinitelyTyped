// Options
$(".my_select_box").chosen();

$(".my_select_box").chosen({});

$(".my_select_box").chosen({
    disable_search_threshold: 10,
    max_selected_options: 5,
    no_results_text: "Oops, nothing found!",
    width: "95%"
});

$(".chosen-select").chosen({
    rtl: true
});

// Destroy
$(".my_select_box").chosen("destroy");

// Triggered Events
$(".my_select_box").on("change", (evt, params) => {
    evt.preventDefault();
    const s: string = params.selected;
    const d: string = params.deselected;
    console.log(s, d);
});

$(".chosen-select").on("chosen:maxselected", () => {
    alert("Max selected");
});

// Triggerable Events
$(".my_select_box").trigger("chosen:updated");

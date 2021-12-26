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
    // $ExpectType TriggeredEvent<any, any, any, any>
    evt;
    evt.preventDefault();
    if ("selected" in params) {
        const s: string = params.selected;
    } else {
        const d: string = params.deselected;
    }
    if ("deselected" in params) {
        const s: string = params.deselected;
    } else {
        const d: string = params.selected;
    }
});

$(".chosen-select").on("chosen:maxselected", () => {
    alert("Max selected");
});

// Triggerable Events
$(".my_select_box").trigger("chosen:updated");

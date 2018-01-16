

// Options
$(".my_select_box").chosen();

$(".my_select_box").chosen({});

$(".my_select_box").chosen({
    disable_search_threshold: 10,
    max_selected_options: 5,
    no_results_text: "Oops, nothing found!",
    width: "95%"
});

// Destroy
$(".my_select_box").chosen("destroy");

// Triggered Events
$(".my_select_box").on("change", function(evt, params) {
    evt.preventDefault();
    let s = params.selected;
    console.log(s);
});

// Triggerable Events
$(".my_select_box").trigger("chosen:updated");

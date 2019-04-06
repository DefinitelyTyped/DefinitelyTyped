$.extend($.fn.select2.defaults, {
  width: 'copy',
  minimumInputLength: 12
});

$("#e9").select2();
$("#e2").select2({
    placeholder: "Select a State",
    allowClear: true
});
$("#e2_2").select2({
    placeholder: "Select a State"
});
$("#e3").select2({
    minimumInputLength: 2
});
function format(state: any) {
    if (!state.id) return state.text;
    return `<img class='flag' src='images/flags/${state.id.toLowerCase()}.png'/>${state.text}`;
}
$("#e4").select2({
    formatResult: format,
    formatSelection: format
});
$("#e5").select2({
    minimumInputLength: 1,
    query: function (query) {
        console.info('current element value:', query.element.val());
        const data = { results: [] as IdTextPair[] };
        for (let i = 1; i < 5; i++) {
            let s = "";
            for (let j = 0; j < i; j++) { s = s + query.term; }
            data.results.push({ id: query.term + i, text: s });
        }
    }
});

$("#e19").select2({ maximumSelectionSize: 3 });
$("#e10").select2({
    data: [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }]
});

const data = [{ id: 0, tag: 'enhancement' }, { id: 1, tag: 'bug' }, { id: 2, tag: 'duplicate' }, { id: 3, tag: 'invalid' }, { id: 4, tag: 'wontfix' }];

$("#e10_2").select2({
    data: { results: data, text: 'tag' },
    formatSelection: format,
    formatResult: format
});

$("#e10_3").select2({
    data: {
        results: data,
        text: (item: {tag: string}) => {
            console.log('called with', item);
            return item.tag;
        }
    },
    formatSelection: format,
    formatResult: format
});

let movieFormatResult;
let movieFormatSelection;

$("#e6").select2({
    placeholder: "Search for a movie",
    minimumInputLength: 1,
    ajax: {
        url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
        dataType: 'jsonp',
        cache: false,
        data: function (term, page) {
            return {
                q: term,
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results: function (data, page) {
            return { results: data.movies };
        }
    },
    formatResult: movieFormatResult,
    formatSelection: movieFormatSelection,
    dropdownCssClass: "bigdrop"
});
$("#e6").select2({
    placeholder: "Search for a movie",
    minimumInputLength: 1,
    ajax: {
        url: () => "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
        dataType: 'jsonp',
        data: function (term, page) {
            return {
                q: term,
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results: function (data, page) {
            return { results: data.movies };
        }
    },
    formatResult: movieFormatResult,
    formatSelection: movieFormatSelection,
    dropdownCssClass: "bigdrop"
});
$("#e6").select2({
    placeholder: "Search for a movie",
    minimumInputLength: 1,
    ajax: {
        url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        data: function (term, page) {
            return {
                q: term,
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results: function (data, page) {
            return { results: data.movies };
        }
    },
    formatResult: movieFormatResult,
    formatSelection: movieFormatSelection,
    dropdownCssClass: "bigdrop"
});
$("#e7").select2({
    placeholder: "Search for a movie",
    minimumInputLength: 3,
    ajax: {
        url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
        dataType: 'jsonp',
        quietMillis: 100,
        data: function (term, page) {
            return {
                q: term,
                page_limit: 10,
                page: page,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results: function (data, page) {
            const more = (page * 10) < data.total;
            return { results: data.movies, more: more };
        }
    },
    formatResult: movieFormatResult,
    formatSelection: movieFormatSelection,
    dropdownCssClass: "bigdrop"
});

function sort(elements: any) {
    return elements.sort();
}

$("#e8").select2();
$("#e8_get").click(function () { alert("Selected value is: " + $("#e8").select2("val")); });
$("#e8_set").click(function () { $("#e8").select2("val", "CA"); });
$("#e8_cl").click(function () { $("#e8").select2("val", ""); });
$("#e8_get2").click(function () { alert("Selected data is: " + JSON.stringify($("#e8").select2("data"))); });
$("#e8_set2").click(function () { $("#e8").select2("data", { id: "CA", text: "California" }); });
$("#e8_open").click(function () { $("#e8").select2("open"); });
$("#e8_close").click(function () { $("#e8").select2("close"); });
$("#e8_2").select2();
$("#e8_2_get").click(function () { alert("Selected value is: " + $("#e8_2").select2("val")); });
$("#e8_2_set").click(function () { $("#e8_2").select2("val", ["CA", "MA"]); });
$("#e8_2_get2").click(function () { alert("Selected value is: " + JSON.stringify($("#e8_2").select2("data"))); });
$("#e8_2_set2").click(function () { $("#e8_2").select2("data", [{ id: "CA", text: "California" }, { id: "MA", text: "Massachusetts" }]); });
$("#e8_2_cl").click(function () { $("#e8_2").select2("val", ""); });
$("#e8_2_open").click(function () { $("#e8_2").select2("open"); });
$("#e8_2_close").click(function () { $("#e8_2").select2("close"); });
$("#e11").select2({
    placeholder: "Select report type",
    allowClear: true,
    data: [{ id: 0, text: 'story' }, { id: 1, text: 'bug' }, { id: 2, text: 'task' }]
});
$("#e11_2").select2({
    createSearchChoice: function (term, data) { if ($(data).filter(function () { return this.textContent.localeCompare(term) === 0; }).length === 0) { return { id: term, text: term }; } },
    multiple: true,
    data: [{ id: 0, text: 'story' }, { id: 1, text: 'bug' }, { id: 2, text: 'task' }]
});
function log(e: string) {
    const item = $(`<li>${e}</li>`);
    $("#events_11").append(item);
    item.animate({ opacity: 1 }, 10000, 'linear', function () { item.animate({ opacity: 0 }, 2000, 'linear', function () { item.remove(); }); });
}
$("#e11")
    .on("change", function (e: Select2JQueryEventObject) { log(JSON.stringify({ val: e.val, added: e.added, removed: e.removed })); })
    .on("open", function () { log("open"); });
$("#e11_2")
    .on("change", function (e: Select2JQueryEventObject) { log(JSON.stringify({ val: e.val, added: e.added, removed: e.removed })); })
    .on("open", function () { log("open"); });
$("#e12").select2({ tags: ["red", "green", "blue"] });
$("#e20").select2({
    tags: ["red", "green", "blue"],
    tokenSeparators: [",", " "]
});
$("#e13").select2();
$("#e13_ca").click(function () { $("#e13").val("CA").trigger("change"); });
$("#e13_ak_co").click(function () { $("#e13").val(["AK", "CO"]).trigger("change"); });
$("#e14").val(["AL", "AZ"]).select2();
$("#e14_init").click(function () { $("#e14").select2(); });
$("#e14_destroy").click(function () { $("#e14").select2("destroy"); });
$("#e15").select2({ tags: ["red", "green", "blue", "orange", "white", "black", "purple", "cyan", "teal"] });
$("#e15").on("change", function () { $("#e15_val").html($("#e15").val() as string); });

$("#e16").select2();
$("#e16_2").select2();
$("#e16_enable").click(function () { $("#e16,#e16_2").select2("enable"); });
$("#e16_disable").click(function () { $("#e16,#e16_2").select2("enable", false); });
$("#e17").select2({
    matcher: function (term, text) { return text.toUpperCase().indexOf(term.toUpperCase()) === 0; }
});
$("#e17_2").select2({
    matcher: function (term, text, opt) {
        return text.toUpperCase().indexOf(term.toUpperCase()) >= 0
            || opt.attr("alt").toUpperCase().indexOf(term.toUpperCase()) >= 0;
    }
});
$("#e18,#e18_2").select2();
alert("Selected value is: " + $("#e8").select2("val"));
$("#e8").select2("val", {id: "CA", text: "Califoria"});

$("#e1").select2({
    nextSearchTerm: (selectedObject: object, currentSearchTerm: string) => {
        return currentSearchTerm;
    }
});

$("#id").select2({
    tokenizer: (textInput, selection, selectCallback, options) => {
        if (options.dropdownAutoWidth) {
            selectCallback();
            return null;
        } else if (options.allowClear) {
            selectCallback(textInput + '_');
            return textInput + '_';
        }
        selection.push('extra');
    }
});

$("#e8").select2("val");
$("#e8").select2("val", "CA");
$("#e8").select2("data");
$("#e8").select2("data", { id: "CA", text: "Califoria" });
$("#e8").select2("destroy");
$("#e8").select2("open");
$("#e8").select2("opened");
$("#e8").select2("focus");
$("#e8").select2("isFocused");
$("#e8").select2("disable");
$("#e8").select2("enable", false);
$("#e8").select2("readonly", false);
$("#e8").select2('container');
$("#e8").select2('onSortStart');
$("#e8").select2('onSortEnd');

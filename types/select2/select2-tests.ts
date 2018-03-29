$("#e9").select2();
$("#e2").select2({
    placeholder: "Select a State",
    allowClear: true
});
$("#e2_2").select2({
    placeholder: "Select a State"
});
$("#e2_3").select2({
    placeholder: { id: "1", text: "Select options" }
});
$("#e3").select2({
    minimumInputLength: 2
});
function format(state: any) {
    if (!state.id) return state.text;
    return `<img class="flag" src="images/flags/${state.id.toLowerCase()}.png"/>` + state.text;
}
$("#e4").select2({
    formatResult: format,
    formatSelection: format
});
$("#e5").select2({
    minimumInputLength: 1,
    query(query) {
        const data = { results: [] as IdTextPair[] };
        for (let i = 1; i < 5; i++) {
            let s = "";
            for (let j = 0; j < i; j++) { s = s + query.term; }
            data.results.push({ id: query.term + i, text: s });
        }
    }
});

$("#e19").select2({ maximumSelectionLength: 3 });
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
    }},
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
        data(params, page) {
            return {
                q: params.term,
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results(data, page) {
            return { results: data.movies };
        }
    },
    formatResult: movieFormatResult,
    formatSelection: movieFormatSelection,
    dropdownCssClass: "bigdrop"
});

let t: ArrayLike<string>;
$("#e6").select2({
    placeholder: "Search for a movie",
    minimumInputLength: 1,
    ajax: {
        url: () => "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
        dataType: 'jsonp',
        data(params, page) {
            return {
                q: params.term,
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results(data, page) {
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
        data(params, page) {
            return {
                q: params.term,
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results(data, page) {
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
        delay: 100,
        data(params, aPage) {
            return {
                q: params.term,
                page_limit: 10,
                page: aPage,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
        },
        results(data, page) {
            const moreValue = (page * 10) < data.total;
            return { results: data.movies, more: moreValue };
        }
    },
    formatResult: movieFormatResult,
    formatSelection: movieFormatSelection,
    dropdownCssClass: "bigdrop"
});

function sort(elements: any) {
    return elements.sort();
}
$("#e20").select2({
    sorter: sort
});

$("#e8").select2();
$("#e8_get").click(() => alert("Selected value is: " + $("#e8").select2("val")));
$("#e8_set").click(() => $("#e8").select2("val", "CA"));
$("#e8_cl").click(() => $("#e8").select2("val", ""));
$("#e8_get2").click(() => alert("Selected data is: " + JSON.stringify($("#e8").select2("data"))));
$("#e8_set2").click(() => $("#e8").select2("data", { id: "CA", text: "California" }));
$("#e8_open").click(() => $("#e8").select2("open"));
$("#e8_close").click(() => $("#e8").select2("close"));
$("#e8_2").select2();
$("#e8_2_get").click(() => alert("Selected value is: " + $("#e8_2").select2("val")));
$("#e8_2_set").click(() => $("#e8_2").select2("val", ["CA", "MA"]));
$("#e8_2_get2").click(() => alert("Selected value is: " + JSON.stringify($("#e8_2").select2("data"))));
$("#e8_2_set2").click(() => $("#e8_2").select2("data", [{ id: "CA", text: "California" }, { id: "MA", text: "Massachusetts" }]));
$("#e8_2_cl").click(() => $("#e8_2").select2("val", ""));
$("#e8_2_open").click(() => $("#e8_2").select2("open"));
$("#e8_2_close").click(() => $("#e8_2").select2("close"));
$("#e11").select2({
    placeholder: "Select report type",
    allowClear: true,
    data: [{ id: 0, text: 'story' }, { id: 1, text: 'bug' }, { id: 2, text: 'task' }]
});
$("#e11_2").select2({
    multiple: true,
    data: [{ id: 0, text: 'story' }, { id: 1, text: 'bug' }, { id: 2, text: 'task' }]
});
function log(e: string) {
    const item = $(`<li>${e}</li>`);
    $("#events_11").append(item);
    item.animate({ opacity: 1 }, 10000, 'linear', () => item.animate({ opacity: 0 }, 2000, 'linear', () => item.remove()));
}
$("#e11")
    // TS 0.9.5: correct overload not resolved https://typescript.codeplex.com/discussions/472172
    .on("change", (e: Select2JQueryEventObject) => log(JSON.stringify({ val: e.val, added: e.added, removed: e.removed })))
    .on("open", () => log("open"));
$("#e11_2")
    .on("change", (e: Select2JQueryEventObject) => log(JSON.stringify({ val: e.val, added: e.added, removed: e.removed })))
    .on("open", () => log("open"));
$("#e12").select2({ tags: ["red", "green", "blue"] });
$("#e20").select2({
    tags: ["red", "green", "blue"],
    tokenSeparators: [",", " "]
});
$("#e13").select2();
$("#e13_ca").click(() => $("#e13").val("CA").trigger("change"));
$("#e13_ak_co").click(() => $("#e13").val(["AK", "CO"]).trigger("change"));
$("#e14").val(["AL", "AZ"]).select2();
$("#e14_init").click(() => $("#e14").select2());
$("#e14_destroy").click(() => $("#e14").select2("destroy"));
$("#e15").select2({ tags: ["red", "green", "blue", "orange", "white", "black", "purple", "cyan", "teal"] });
$("#e15").on("change", () => $("#e15_val").html($("#e15").val() as string));

$("#e16").select2();
$("#e16_2").select2();
$("#e16_enable").click(() => $("#e16,#e16_2").select2("enable"));
$("#e16_disable").click(() => $("#e16,#e16_2").select2("disable"));
$("#e17").select2({
    matcher: (term, text) => text.toUpperCase().indexOf(term.toUpperCase()) === 0
});
$("#e17_2").select2({
    matcher: (term, text, opt) => {
        return text.toUpperCase().indexOf(term.toUpperCase()) >= 0
            || opt.attr("alt").toUpperCase().indexOf(term.toUpperCase()) >= 0;
    }
});
$("#e18,#e18_2").select2();
alert("Selected value is: " + $("#e8").select2("val")); $("#e8").select2("val", { id: "CA", text: "Califoria" });

$("#e8").select2("val");
$("#e8").select2("val", "CA");
$("#e8").select2("data");
$("#e8").select2("data", { id: "CA", text: "Califoria" });
$("#e8").select2("destroy");
$("#e8").select2("open");
$("#e8").select2("enable", false);
$("#e8").select2("readonly", false);
$("#e8").select2('container');
$("#e8").select2('onSortStart');
$("#e8").select2('onSortEnd');

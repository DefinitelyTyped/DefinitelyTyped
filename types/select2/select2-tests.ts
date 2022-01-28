// =====================================================
// Configuration -- Global defaults
// =====================================================
// See: https://select2.org/configuration/defaults

$.fn.select2.defaults.set("theme", "classic");
$.fn.select2.defaults.set("ajax--cache", false);
$.fn.select2.defaults.reset();

// =====================================================
// Appearance
// =====================================================
// See: https://select2.org/appearance

$(".js-example-responsive").select2({
    width: "resolve"
});

$(".js-example-theme-single").select2({
    theme: "classic"
});

// =====================================================
// Data sources -- The Select2 data format
// =====================================================
// See: https://select2.org/data-sources/formats

let dataFormat: Select2.DataFormat[];
let groupedDataFormat: Select2.GroupedDataFormat[];

dataFormat = [
    {id: 1, text: "Option 1"},
    {id: 2, text: "Option 2"},
];

dataFormat = [
    {id: 1, text: "Option 1"},
    {id: 2, text: "Option 2", selected: true},
    {id: 3, text: "Option 3", disabled: true},
];

groupedDataFormat = [
    {
        text: "Group 1",
        children : [
            {id: 1, text: "Option 1.1"},
            {id: 2, text: "Option 1.2"},
        ]
    },
    {
        text: "Group 2",
        children : [
            {id: 3, text: "Option 2.1"},
            {id: 4, text: "Option 2.2"},
        ]
    }
];

// =====================================================
// Data sources -- Ajax (remote data)
// =====================================================
// See: https://select2.org/data-sources/ajax

// Request parameters

$("#mySelect2").select2({
    ajax: {
        url: "https://api.github.com/orgs/select2/repos",
        data: (params) => {
            return {
                search: params.term,
                type: "public"
            };
        }
    }
});

// Transforming response data

interface ServerResult {
    items: Select2.DataFormat[];
}

$("#mySelect2").select2({
    ajax: {
        url: "/example/api",
        delay: 250,
        cache: true,
        dataType: "json",
        processResults: (data: ServerResult) => {
            return {
                results: data.items,
            };
        },
        transport: (params, success, failure) => {
            const $request = $.ajax(params);

            $request.then(success);
            $request.fail(failure);

            return $request;
        },
        data: params => {
            const queryParameters = {
                q: params.term,
            };

            return queryParameters;
        },
    }
});

// Pagination

$("#mySelect2").select2({
    ajax: {
        url: "https://api.github.com/search/repositories",
        data: (params) => {
            return {
                search: params.term,
                page: params.page || 1
            };
        }
    }
});

interface ServerPaginatedResult {
    results: Select2.DataFormat[];
    count_filtered: number;
}

$("#mySelect2").select2({
    ajax: {
        url: "/example/api",
        processResults: (data: ServerPaginatedResult, params) => {
            params.page = params.page || 1;
            return {
                results: data.results,
                pagination: {
                    more: (params.page * 10) < data.count_filtered
                }
            };
        }
    }
});

// Rate-limiting requests

$("#mySelect2").select2({
    ajax: {
        delay: 250
    }
});

// Dynamic URLs

$("#mySelect2").select2({
    ajax: {
        url: (params) => {
            return "/some/url/" + params.term;
        }
    }
});

// Alternative transport methods

declare let AjaxSettings2RequestInit: (s: JQueryAjaxSettings) => RequestInit;

$("#mySelect2").select2({
    ajax: {
        transport: (params: JQueryAjaxSettings, success?: (data: any) => undefined, failure?: () => undefined) => {
            const p = AjaxSettings2RequestInit(params);
            fetch(params.url!, p)
                .then(success)
                .catch(failure);
        }
    }
});

// Additional examples

interface GithubApiResult {
    total_count: number;
    incomplete_results: boolean;
    items: GithubRepositories[];
}

interface GithubRepositories {
    id: string;
    name: string;
    full_name: string;
    owner: {
        avatar_url: string
        gravatar_id: string
    };
    description?: string | undefined;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;

    loading: undefined;
}

$(".js-example-data-ajax").select2<GithubRepositories, GithubApiResult>({
    ajax: {
        url: "https://api.github.com/search/repositories",
        dataType: "json",
        delay: 250,
        data: (params: Select2.QueryOptions) => {
            return {
                q: params.term,
                page: params.page
            };
        },
        processResults: (data: GithubApiResult, params: Select2.QueryOptions) => {
            params.page = params.page || 1;

            return {
                results: data.items,
                pagination: {
                    more: (params.page * data.items.length) < data.total_count
                }
            };
        },
        cache: true
    },
    placeholder: "Search for a repository",
    escapeMarkup: (markup: string) => markup,
    minimumInputLength: 1,
    templateResult: formatRepo,
    templateSelection: formatRepoSelection
});

function formatRepo(obj: Select2.LoadingData | GithubRepositories) {
    if (obj.loading) {
        return obj.text;
    }

    const repo = obj as GithubRepositories;

    let markup = '<div class="select2-result-repository clearfix">' +
        `<div class="select2-result-repository__avatar"><img src="${repo.owner.avatar_url}"></div>` +
        '<div class="select2-result-repository__meta">' +
        `<div class="select2-result-repository__title"> ${repo.full_name} </div>`;

    if (repo.description) {
        markup += `<div class="select2-result-repository__description">${repo.description}</div>`;
    }

    markup += '<div class="select2-result-repository__statistics">' +
        `<div class="select2-result-repository__forks"><i class="fa fa-flash"></i> ${repo.forks_count} Forks</div>` +
        `<div class="select2-result-repository__stargazers"><i class="fa fa-star"></i> ${repo.stargazers_count} Stars</div>` +
        `<div class="select2-result-repository__watchers"><i class="fa fa-eye"></i> ${repo.watchers_count} Watchers</div>` +
        "</div>" +
        "</div></div>";

    return markup;
}

function formatRepoSelection(repo: Select2.IdTextPair | Select2.LoadingData | GithubRepositories) {
    return (repo as GithubRepositories).full_name ||
        (repo as Select2.IdTextPair | Select2.LoadingData).text;
}

// =====================================================
// Data sources -- Ajax (remote data)
// =====================================================
// See: https://select2.org/data-sources/ajax

$(".js-example-data-array").select2({
    data: dataFormat
});

$(".js-example-data-array").select2({
    data: groupedDataFormat
});

// =====================================================
// Dropdown
// =====================================================
// See: https://select2.org/dropdown

// Templating

function formatState(state: Select2.LoadingData | Select2.OptionData) {
    const opt = state as Select2.OptionData;
    if (!opt.id) {
        return (state as Select2.LoadingData).text;
    }
    const baseUrl = "/user/pages/images/flags";
    const $state = $(
        `<span><img src="${baseUrl}/${opt.element.value.toLowerCase()}.png" class="img-flag"> ${opt.text}</span>`
    );
    return $state;
}

$(".js-example-templating").select2({
    templateResult: formatState
});

// Automatic selection

$("#mySelect2").select2({
    selectOnClose: true
});

// Forcing the dropdown to remain open after selection

$("#mySelect2").select2({
    closeOnSelect: false
});

// Dropdown placement

$("#mySelect2").select2({
    dropdownParent: $("#myModal")
});

// =====================================================
// Selections
// =====================================================
// See: https://select2.org/selections

// Limiting the number of selections

$(".js-example-basic-multiple-limit").select2({
    maximumSelectionLength: 2
});

// Clearable selections

$("select").select2({
    placeholder: "This is my placeholder",
    allowClear: true
});

// =====================================================
// Dynamic option creation
// =====================================================
// See: https://select2.org/tagging

$(".js-example-tags").select2({
    tags: true
});

// Automatic tokenization into tags

$(".js-example-tokenizer").select2({
    tags: true,
    tokenSeparators: [",", " "]
});

// Customizing tag creation

$("select").select2({
    tags: true,
    createTag: (params) => {
        const term = params.term.trim();

        if (term === "") {
            return null;
        }

        return {
            id: term,
            text: term,
            newTag: true, // not for select2 use
        };
    }
});

$("select").select2({
    tags: true,
    createTag: (params) => {
        if (params.term.indexOf("@") === -1) {
            return null;
        }

        return {
            id: params.term,
            text: params.term
        };
    }
});

// Customizing tag placement in the dropdown

$("select").select2({
    tags: true,
    insertTag: (data, tag) => {
        data.push(tag);
    }
});

// =====================================================
// Placeholders
// =====================================================
// See: https://select2.org/placeholders

// Single select placeholders

$(".js-example-placeholder-single").select2({
    placeholder: "Select a state",
    allowClear: true
});

// Multi-select placeholders

$(".js-example-placeholder-multiple").select2({
    placeholder: "Select a state"
});

// Default selection placeholders

$("select").select2({
    placeholder: {
        id: "-1",
        text: "Select an option"
    }
});

// Customizing placeholder appearance

$("select").select2({
    templateSelection: (data: Select2.IdTextPair | Select2.LoadingData | Select2.OptionData, container: JQuery) => {
        if (data.id === "") {
            container.css("background-color", "#f6f6f6");

            return "Custom styled placeholder";
        }
        return data.text;
    }
});

// =====================================================
// Search
// =====================================================
// See: https://select2.org/searching

// Customizing how results are matched

$(".js-example-matcher").select2({
    matcher: (params, data) => {
        if (params.term.trim() === "") {
            return data;
        }

        if (typeof data.text === "undefined") {
            return null;
        }

        if (data.text.indexOf(params.term) > -1) {
            const modifiedData = {...data};
            modifiedData.text += " (matched)";
            return modifiedData;
        }

        return null;
    }
});

// Matching grouped options

function matchStart(params: Select2.SearchOptions, data: Select2.OptGroupData | Select2.OptionData) {
    if (params.term.trim() === "") {
        return data;
    }

    if (typeof data.children === "undefined") {
        return null;
    }

    const filteredChildren: Select2.OptionData[] = [];
    data.children.forEach((child, idx) => {
        if (child.text.toUpperCase().indexOf(params.term.toUpperCase()) === 0) {
            filteredChildren.push(child);
        }
    });

    if (filteredChildren.length) {
        const modifiedData = {...data};
        modifiedData.children = filteredChildren;

        return modifiedData;
    }

    return null;
}

$(".js-example-matcher-start").select2({
    matcher: matchStart
});

// Minimum search term length

$("select").select2({
    minimumInputLength: 3
});

// Maximum search term length

$("select").select2({
    maximumInputLength: 20
});

// Limiting display of the search box to large result sets

$("select").select2({
    minimumResultsForSearch: 20
});

// Hiding the search box

$("#js-example-basic-hide-search").select2({
    minimumResultsForSearch: Infinity
});

$("#js-example-basic-hide-search-multi").select2();
$("#js-example-basic-hide-search-multi").on("select2:opening select2:closing", function(event) {
    const $searchfield = $(this).parent().find(".select2-search__field");
    $searchfield.prop("disabled", true);
});

// =====================================================
// Programmatic control -- Add, select, or clear items
// =====================================================
// See: https://select2.org/programmatic-control/add-select-clear-items

// Preselecting options in an remotely-sourced (AJAX) Select2

interface StudentAjaxResult {
    id: string;
    text: string;
    full_name: string;
}

const studentSelect = $("#mySelect2");
$.ajax({
    type: "GET",
    url: "/api/students/s/123"
}).then((res: StudentAjaxResult) => {
    const option = new Option(res.full_name, res.id, true, true);
    studentSelect.append(option).trigger("change");

    studentSelect.trigger({
        type: "select2:select",
        params: {
            data: res
        }
    });
});

// =====================================================
// Programmatic control -- Retrieving selections
// =====================================================
// See: https://select2.org/programmatic-control/retrieving-selections

// Using the data method

$("#mySelect2").select2("data");

// Using a jQuery selector

// TODO
// $("#mySelect2").select2<GithubRepositories>({
//     templateSelection: (data) => {
//         $(data.element).attr("data-custom-attribute", (data as GithubRepositories).owner.gravatar_id);
//         return data.text;
//     }
// });

// =====================================================
// Programmatic control -- Methods
// =====================================================
// See: https://select2.org/programmatic-control/methods

// Opening the dropdown

$("#mySelect2").select2("open");

// Closing the dropdown

$("#mySelect2").select2("close");

// Destroying the Select2 control

$("#mySelect2").select2("destroy");

// Event unbinding

$("#example").select2();

$("#example").on("select2:select", (e) => {
    console.log("select event");
});

$("#example").select2("destroy");

$("#example").off("select2:select");

// Examples

const $example = $(".js-example-programmatic").select2();
const $exampleMulti = $(".js-example-programmatic-multi").select2();

$(".js-programmatic-set-val").on("click", () => {
    $example.val("CA").trigger("change");
});

$(".js-programmatic-open").on("click", () => {
    $example.select2("open");
});

$(".js-programmatic-close").on("click", () => {
    $example.select2("close");
});

$(".js-programmatic-init").on("click", () => {
    $example.select2();
});

$(".js-programmatic-destroy").on("click", () => {
    $example.select2("destroy");
});

$(".js-programmatic-multi-set-val").on("click", () => {
    $exampleMulti.val(["CA", "AL"]).trigger("change");
});

$(".js-programmatic-multi-clear").on("click", () => {
    $exampleMulti.val([]).trigger("change");
});

// =====================================================
// Programmatic control -- Events
// =====================================================
// See: https://select2.org/programmatic-control/events

// Listening for events

$("#mySelect2").on("select2:select", (e) => {
    // Do something
});

// Event data

$("#mySelect2").on("select2:select", (e) => {
    const data = e.params.data;
    console.log(data);
});

// Triggering events

const triggerData = {
    id: "1",
    text: "Tyto alba",
    genus: "Tyto",
    species: "alba"
};

$("#mySelect2").trigger({
    type: "select2:select",
    params: {
        data: triggerData
    }
});

// Examples

const $eventLog = $(".js-event-log");
const $eventSelect = $(".js-example-events");

$eventSelect.select2();

$eventSelect.on("select2:open", (e) => { log("select2:open", e); });
$eventSelect.on("select2:close", (e) => { log("select2:close", e); });
$eventSelect.on("select2:select", (e) => { log("select2:select", e); });
$eventSelect.on("select2:unselect", (e) => { log("select2:unselect", e); });
$eventSelect.on("change", (e) => { log("change"); });

function log(name: string, evt?: Select2.Event<HTMLElement, {} | Select2.IngParams | Select2.DataParams>) {
    let args = "{}";
    if (evt) {
        args = JSON.stringify(evt.params, (key, value) => {
            if (value && value.nodeName) return "[DOM node]";
            if (value instanceof $.Event) return "[$.Event]";
            return value;
        });
    }
    const $e = $(`<li>${name} -> ${args}</li>`);
    $eventLog.append($e);
    $e.animate({ opacity: 1 }, 10000, "linear", () => {
        $e.animate({ opacity: 0 }, 2000, "linear", () => {
            $e.remove();
        });
    });
}

// =====================================================
// Internationalization
// =====================================================
// See: https://select2.org/i18n

// Language files

$(".js-example-language").select2({
    language: "es"
});

// Translation objects

const fr: Select2.Translation = {
    errorLoading: () => {
        return "Les résultats ne peuvent pas être chargés.";
    },
    inputTooLong: (args) => {
        const overChars = args.input.length - args.maximum;
        return `Supprimez ${overChars} caractère${overChars > 1 ? "s" : ""}`;
    },
    inputTooShort: (args) => {
        const remainingChars = args.minimum - args.input.length;
        return `Saisissez au moins ${remainingChars} caractère${remainingChars > 1 ? "s" : ""}`;
    },
    loadingMore: () => {
        return "Chargement de résultats supplémentaires…";
    },
    maximumSelected: (args) => {
        return `Vous pouvez seulement sélectionner ${args.maximum}` +
            ` élément${args.maximum > 1 ? "s" : ""}`;
    },
    noResults: () => {
        return "Aucun résultat trouvé";
    },
    searching: () => {
        return "Recherche en cours…";
    }
};

$(".js-example-language").select2({
    language: {
        inputTooShort: () => "You must enter more characters..."
    }
});

// RTL support

$(".js-example-rtl").select2({
    dir: "rtl"
});

// =====================================================
// Advanced Features and Developer Guide
// =====================================================
// See: https://select2.org/advanced

$.fn.select2.amd.require(
    ["select2/utils", "select2/selection/single", "select2/selection/placeholder"],
    (Utils: any, SingleSelection: any, Placeholder: any) => {
        const CustomSelectionAdapter = Utils.Decorate(SingleSelection, Placeholder);
    }
);

// TODO (Adapters)

// =====================================================
// Others
// =====================================================
// Code not from the official documentation

$().data("select2").$container.on("keyup", "input", console.log);

$(".js-multiple").select2({
    multiple: false,
});

$(".js-states").select2({
    sorter: (data) => {
        return data.sort((a, b) => a.text > b.text ? 1 : 0);
    }
});

$("#mySelect2").select2({
    theme: "bootstrap",
}).on("select2:closing", function() {
    $(this).val("Bye");
}).on("select2:close", function() {
    $(this).trigger("change");
});

const selectedData: Select2.OptionData[] = $("#mySelect2").select2("data");
// TODO
// const selectedRepo: GithubRepositories[] = $(".js-example-data-ajax").select2("data") as GithubRepositories[];

// jQuery Generic

declare let select: HTMLSelectElement;
const $select: JQuery<HTMLSelectElement> = $(select);

select = $select.select2().get(0)!;
select = $select.select2({tags: true}).get(0)!;
select = $select.select2("open").get(0)!;
select = $select.select2("close").get(0)!;
select = $select.select2("destroy").get(0)!;

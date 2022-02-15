import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Autocomplete
const _autocomplete = new M.Autocomplete(elem);
// $ExpectType Autocomplete
const el = M.Autocomplete.init(elem);
// $ExpectType Autocomplete[]
const els = M.Autocomplete.init(document.querySelectorAll('.whatever'));

// $ExpectType Autocomplete
new materialize.Autocomplete(elem);
// $ExpectType Autocomplete
const autocomplete = new materialize.Autocomplete(elem, {
    data: {
        Apple: null,
        Google: "https://placehold.it/250x250"
    },
    minLength: 3,
    limit: 3,
    onAutocomplete(text) {
        // $ExpectType Autocomplete
        this;
        // $ExpectType string
        text;
    },
    sortFunction(a, b, input) {
        // $ExpectType string
        a;
        // $ExpectType string
        b;
        // $ExpectType string
        input;
        return 0;
    }
});
// $ExpectType void
autocomplete.updateData({ Microsoft: null });
// $ExpectType void
autocomplete.open();
// $ExpectType void
autocomplete.close();
// $ExpectType void
autocomplete.destroy();
// $ExpectType AutocompleteOptions
autocomplete.options;
// $ExpectType Element
autocomplete.el;
// $ExpectType boolean
autocomplete.isOpen;

$(".whatever").autocomplete({
    data: {
        Apple: null,
        Google: "https://placehold.it/250x250"
    }
});
$(".whatever").autocomplete("updateData", { Microsoft: null });

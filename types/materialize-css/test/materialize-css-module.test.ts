import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// Sidenav
// $ExpectType Sidenav
new materialize.Sidenav(elem);
// $ExpectType Sidenav
const sidenav = new materialize.Sidenav(elem, {
    edge: "left",
    inDuration: 300,
    onCloseStart(el) {
        // $ExpectType Sidenav
        this;
        // $ExpectType Element
        el;
    }
});
// $ExpectType void
sidenav.open();
// $ExpectType void
sidenav.destroy();
// $ExpectType SidenavOptions
sidenav.options;
// $ExpectType Element
sidenav.el;
// $ExpectType boolean
sidenav.isOpen;

// Tabs
// $ExpectType Tabs
new materialize.Tabs(elem);
// $ExpectType Tabs
const tabs = new materialize.Tabs(elem, {
    duration: 200,
    onShow(content) {
        // $ExpectType Tabs
        this;
        // $ExpectType Element
        content;
    }
});
// $ExpectType void
tabs.destroy();
// $ExpectType void
tabs.select("id");
// $ExpectType TabsOptions
tabs.options;
// $ExpectType Element
tabs.el;
// $ExpectType number
tabs.index;

// Modal
// $ExpectType Modal
new materialize.Modal(elem);
// $ExpectType Modal
const modal = new materialize.Modal(elem, {
    inDuration: 300,
    ready(el, trigger) {
        // $ExpectType Modal
        this;
        // $ExpectType Element
        el;
        // $ExpectType Element
        trigger;
    }
});
// $ExpectType void
modal.open();
// $ExpectType void
modal.destroy();
// $ExpectType ModalOptions
modal.options;
// $ExpectType Element
modal.el;
// $ExpectType boolean
modal.isOpen;

// CharacterCounter
// $ExpectType CharacterCounter
const characterCounter = new materialize.CharacterCounter(elem);
// $ExpectType void
characterCounter.destroy();
// $ExpectType Element
characterCounter.el;

// Autocomplete
// $ExpectType Autocomplete
new materialize.Autocomplete(elem);
// $ExpectType Autocomplete
const autocomplete = new materialize.Autocomplete(elem, {
    data: {
        Apple: null,
        Google: "https://placehold.it/250x250"
    },
    minLength: 3,
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
autocomplete.destroy();
// $ExpectType AutocompleteOptions
autocomplete.options;
// $ExpectType Element
autocomplete.el;
// $ExpectType boolean
autocomplete.isOpen;

// Tooltip
// $ExpectType Tooltip
new materialize.Tooltip(elem);
// $ExpectType Tooltip
const tooltip = new materialize.Tooltip(elem, {
    inDuration: 300,
    position: "right"
});
// $ExpectType void
tooltip.open();
// $ExpectType void
tooltip.destroy();
// $ExpectType TooltipOptions
tooltip.options;
// $ExpectType Element
tooltip.el;
// $ExpectType boolean
tooltip.isOpen;

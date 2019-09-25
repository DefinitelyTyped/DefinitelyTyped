import Expander = require('makeup-expander');

const widgetEl: HTMLElement | null = document.querySelector('.expander');

const options: Expander.Options = {
    expandOnClick: true,
    expandedClass: 'widget--expanded'
};

if (widgetEl) {
    // $ExpectType Expander
    new Expander(widgetEl);

    // $ExpectType Expander
    const widget = new Expander(widgetEl, options);

    // $ExpectType void
    widget.expand(true);

    // $ExpectType boolean
    const expanded = widget.isExpanded();
}

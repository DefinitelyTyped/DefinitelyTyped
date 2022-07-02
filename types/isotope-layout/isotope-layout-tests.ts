/// <reference types="jquery"/>
/* inspired by documentation at http://isotope.metafizzy.co/ */

// test all options
let $grid = $('.grid').isotope({
    cellsByColumn: {
        columnWidth: 10,
        rowHeight: '.height-sizer'
    },
    cellsByRow: {
        columnWidth: '.width-sizer',
        rowHeight: 250
    },
    containerStyle: {
        display: 'block'
    },
    filter: 'filter',
    fitRows: {
        gutter: 10
    },
    initLayout: true,
    itemSelector: '.grid-item',
    layoutMode: 'cellsByRow',
    getSortData: {
        value: '.value',
        key: (itemElm: JQuery): string => {
            return '.key';
        },
        description: (itemElm: JQuery): number => {
            return 1;
        }
    },
    hiddenStyle: {
        display: 'none'
    },
    horiz: {
        verticalAligment: 10
    },
    masonry: {
        columnWidth: '.grid-sizer',
        fitWidth: true,
        gutter: 50
    },
    masontryHorizontal: {
        gutter: '.gutter',
        rowHeight: 20
    },
    originLeft: true,
    originTop: false,
    packery: {
        columnWidth: 10,
        gutter: 'div',
        horizontal: true,
        rowHeight: 15
    },
    percentPosition: true,
    resize: false,
    sortAscending: false,
    sortBy: 'value',
    stagger: 10,
    stamp: '.grid',
    transitionDuration: '0.5s',
    vertical: {
        horizontalAlignment: 10
    },
    visibleStyle: {
        display: 'inline-block'
    }
});

// test the ones not used in upper test
$grid = $('.grid').isotope({
    filter: (itemElem): boolean => {
        return itemElem ? true : false;
    },
    sortAscending: {
        key: true
    },
    stagger: 'a',
    transitionDuration: 0.4
});

// test methods using jquery
$grid.isotope();
$grid.isotope('addItems', $('.items'));
$grid.isotope('appended', $('.items')[0]);
$grid.isotope('hideItemElements', [ new HTMLElement() ]);
$grid.isotope('insert', new HTMLElement());
$grid.isotope('prepended', new NodeList());
$grid.isotope('remove', $('.items'));
$grid.isotope('revealItemElements', $('div'));
$grid.isotope('stamp', new HTMLElement());
$grid.isotope('unstamp', new HTMLElement());
$grid.isotope('updateSortData', new HTMLElement());
$grid.isotope('destroy');
let elements: Element[] = $grid.isotope('getFilteredItemElements');
elements = $grid.isotope('getItemElements');
$grid.isotope('layoutItems', [new HTMLElement()], true);
$grid.isotope('layout').isotope('reloadItems').isotope('shuffle');
let iso: Isotope = $grid.data('isotope');

// test native javascript methods
iso = new Isotope('.grid', {});
iso.addItems($('.items'));
iso.appended(new HTMLElement());
iso.arrange({ cellsByColumn: { columnWidth: 101, rowHeight: 12 } });
iso.destroy();
elements = iso.getFilteredItemElements();
elements = iso.getItemElements();
iso.hideItemElements(new NodeList());
iso.insert($('div')[0]);
iso.layout();
iso.layoutItems([new HTMLElement()], true);
iso.prepended(new NodeList());
iso.reloadItems();
iso.remove(new HTMLElement());
iso.revealItemElements([new HTMLElement()]);
iso.shuffle();
iso.stamp($("div"));
iso.unstamp($("div"));
iso.updateSortData($("div"));

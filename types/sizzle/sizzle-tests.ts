/// <reference types="jquery" />

function pseudos() {
    const $test = jQuery(document);
    Sizzle.selectors.pseudos['fixed'] = (elem) => {
        // $test[0] = elem as HTMLElement;
        return $test.css('position') === 'fixed';
    };
}

function createPseudos_0() {
    Sizzle.selectors.pseudos['not'] =
        Sizzle.selectors.createPseudo((subSelector) => {
            const matcher = Sizzle.compile(subSelector);
            return (elem) => {
                return !matcher(elem);
            };
        });
}

function createPseudos_1() {
    // An implementation of a case-insensitive contains pseudo
    // made for all versions of jQuery
    (($) => {
        function icontains(elem: HTMLElement, text: string) {
            return (
                    elem.textContent ||
                    elem.innerText ||
                    $(elem).text() ||
                    ''
                ).toLowerCase().indexOf((text || '').toLowerCase()) > -1;
        }

        // $.expr.pseudos.icontains = $.expr.createPseudo(function(text) {
        //     return function(elem) {
        //         return icontains(elem as HTMLElement, text);
        //     };
        // });
    })(jQuery);
}

function setFilters_0() {
    Sizzle.selectors.setFilters['first'] = (elements, argument, not) => {
        // No argument for first
        return not ? elements.slice(1) : [elements[0]];
    };
}

function setFilters_1(oldPOS: RegExp) {
    Sizzle.selectors.match.POS = new RegExp(oldPOS.source.replace('first', 'uno'), 'gi');
    Sizzle.selectors.setFilters.uno = Sizzle.selectors.setFilters.first;
    delete Sizzle.selectors.setFilters.first;
    Sizzle('div:uno'); // ==> [ <div> ]
}

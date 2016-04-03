declare module goog {
    function require(name: 'goog.string.html.HtmlSanitizer'): typeof goog.string$.html.HtmlSanitizer;
    function require(name: 'goog.string.html.HtmlSanitizer.AttributeType'): typeof goog.string$.html.HtmlSanitizer.AttributeType;
    function require(name: 'goog.string.html.HtmlSanitizer.Attributes'): typeof goog.string$.html.HtmlSanitizer.Attributes;
}

declare module goog.string$.html {

    /**
     * An implementation of the {@code goog.string.HtmlSaxHandler} interface that
     * will take each of the html tags and sanitize it.
     *
     * @param {goog.string.StringBuffer} stringBuffer A string buffer, used to
     *     output the html as we sanitize it.
     * @param {?function(string):string} opt_urlPolicy An optional function to be
     *     applied in URLs.
     * @param {?function(string):string} opt_nmTokenPolicy An optional function to
     *     be applied in names.
     * @constructor
     * @extends {goog.string.html.HtmlSaxHandler}
     */
    class HtmlSanitizer extends goog.string$.html.HtmlSaxHandler {
        constructor(stringBuffer: goog.string$.StringBuffer, opt_urlPolicy: (arg0: string) => string, opt_nmTokenPolicy: (arg0: string) => string);
    }

    /**
     * Strips unsafe tags and attributes from HTML.
     *
     * @param {string} htmlText The HTML text to sanitize.
     * @param {function(string): string=} opt_urlPolicy A transform to apply to URL
     *     attribute values.
     * @param {function(string): string=} opt_nmTokenPolicy A transform to apply to
     *     names, IDs, and classes.
     * @return {string} A sanitized HTML, safe to be embedded on the page.
     */
    function htmlSanitize(htmlText: string, opt_urlPolicy?: (arg0: string) => string, opt_nmTokenPolicy?: (arg0: string) => string): string;
}

declare module goog.string$.html.HtmlSanitizer {

    /**
     * The HTML types the parser supports.
     * @enum {number}
     */
    type AttributeType = number;
    var AttributeType: {
        NONE: AttributeType;
        URI: AttributeType;
        URI_FRAGMENT: AttributeType;
        SCRIPT: AttributeType;
        STYLE: AttributeType;
        ID: AttributeType;
        IDREF: AttributeType;
        IDREFS: AttributeType;
        GLOBAL_NAME: AttributeType;
        LOCAL_NAME: AttributeType;
        CLASSES: AttributeType;
        FRAME_TARGET: AttributeType;
    };

    /**
     * A map of attributes to types it has.
     * @enum {number}
     */
    type Attributes = number;
    var Attributes: {
        '*::class': Attributes;
        '*::dir': Attributes;
        '*::id': Attributes;
        '*::lang': Attributes;
        '*::onclick': Attributes;
        '*::ondblclick': Attributes;
        '*::onkeydown': Attributes;
        '*::onkeypress': Attributes;
        '*::onkeyup': Attributes;
        '*::onload': Attributes;
        '*::onmousedown': Attributes;
        '*::onmousemove': Attributes;
        '*::onmouseout': Attributes;
        '*::onmouseover': Attributes;
        '*::onmouseup': Attributes;
        '*::style': Attributes;
        '*::title': Attributes;
        '*::accesskey': Attributes;
        '*::tabindex': Attributes;
        '*::onfocus': Attributes;
        '*::onblur': Attributes;
        'a::coords': Attributes;
        'a::href': Attributes;
        'a::hreflang': Attributes;
        'a::name': Attributes;
        'a::onblur': Attributes;
        'a::rel': Attributes;
        'a::rev': Attributes;
        'a::shape': Attributes;
        'a::target': Attributes;
        'a::type': Attributes;
        'area::accesskey': Attributes;
        'area::alt': Attributes;
        'area::coords': Attributes;
        'area::href': Attributes;
        'area::nohref': Attributes;
        'area::onfocus': Attributes;
        'area::shape': Attributes;
        'area::tabindex': Attributes;
        'area::target': Attributes;
        'bdo::dir': Attributes;
        'blockquote::cite': Attributes;
        'br::clear': Attributes;
        'button::accesskey': Attributes;
        'button::disabled': Attributes;
        'button::name': Attributes;
        'button::onblur': Attributes;
        'button::onfocus': Attributes;
        'button::tabindex': Attributes;
        'button::type': Attributes;
        'button::value': Attributes;
        'caption::align': Attributes;
        'col::align': Attributes;
        'col::char': Attributes;
        'col::charoff': Attributes;
        'col::span': Attributes;
        'col::valign': Attributes;
        'col::width': Attributes;
        'colgroup::align': Attributes;
        'colgroup::char': Attributes;
        'colgroup::charoff': Attributes;
        'colgroup::span': Attributes;
        'colgroup::valign': Attributes;
        'colgroup::width': Attributes;
        'del::cite': Attributes;
        'del::datetime': Attributes;
        'dir::compact': Attributes;
        'div::align': Attributes;
        'dl::compact': Attributes;
        'font::color': Attributes;
        'font::face': Attributes;
        'font::size': Attributes;
        'form::accept': Attributes;
        'form::action': Attributes;
        'form::autocomplete': Attributes;
        'form::enctype': Attributes;
        'form::method': Attributes;
        'form::name': Attributes;
        'form::onreset': Attributes;
        'form::onsubmit': Attributes;
        'form::target': Attributes;
        'h1::align': Attributes;
        'h2::align': Attributes;
        'h3::align': Attributes;
        'h4::align': Attributes;
        'h5::align': Attributes;
        'h6::align': Attributes;
        'hr::align': Attributes;
        'hr::noshade': Attributes;
        'hr::size': Attributes;
        'hr::width': Attributes;
        'img::align': Attributes;
        'img::alt': Attributes;
        'img::border': Attributes;
        'img::height': Attributes;
        'img::hspace': Attributes;
        'img::ismap': Attributes;
        'img::longdesc': Attributes;
        'img::name': Attributes;
        'img::src': Attributes;
        'img::usemap': Attributes;
        'img::vspace': Attributes;
        'img::width': Attributes;
        'input::accept': Attributes;
        'input::accesskey': Attributes;
        'input::autocomplete': Attributes;
        'input::align': Attributes;
        'input::alt': Attributes;
        'input::checked': Attributes;
        'input::disabled': Attributes;
        'input::ismap': Attributes;
        'input::maxlength': Attributes;
        'input::name': Attributes;
        'input::onblur': Attributes;
        'input::onchange': Attributes;
        'input::onfocus': Attributes;
        'input::onselect': Attributes;
        'input::readonly': Attributes;
        'input::size': Attributes;
        'input::src': Attributes;
        'input::tabindex': Attributes;
        'input::type': Attributes;
        'input::usemap': Attributes;
        'input::value': Attributes;
        'ins::cite': Attributes;
        'ins::datetime': Attributes;
        'label::accesskey': Attributes;
        'label::for': Attributes;
        'label::onblur': Attributes;
        'label::onfocus': Attributes;
        'legend::accesskey': Attributes;
        'legend::align': Attributes;
        'li::type': Attributes;
        'li::value': Attributes;
        'map::name': Attributes;
        'menu::compact': Attributes;
        'ol::compact': Attributes;
        'ol::start': Attributes;
        'ol::type': Attributes;
        'optgroup::disabled': Attributes;
        'optgroup::label': Attributes;
        'option::disabled': Attributes;
        'option::label': Attributes;
        'option::selected': Attributes;
        'option::value': Attributes;
        'p::align': Attributes;
        'pre::width': Attributes;
        'q::cite': Attributes;
        'select::disabled': Attributes;
        'select::multiple': Attributes;
        'select::name': Attributes;
        'select::onblur': Attributes;
        'select::onchange': Attributes;
        'select::onfocus': Attributes;
        'select::size': Attributes;
        'select::tabindex': Attributes;
        'table::align': Attributes;
        'table::bgcolor': Attributes;
        'table::border': Attributes;
        'table::cellpadding': Attributes;
        'table::cellspacing': Attributes;
        'table::frame': Attributes;
        'table::rules': Attributes;
        'table::summary': Attributes;
        'table::width': Attributes;
        'tbody::align': Attributes;
        'tbody::char': Attributes;
        'tbody::charoff': Attributes;
        'tbody::valign': Attributes;
        'td::abbr': Attributes;
        'td::align': Attributes;
        'td::axis': Attributes;
        'td::bgcolor': Attributes;
        'td::char': Attributes;
        'td::charoff': Attributes;
        'td::colspan': Attributes;
        'td::headers': Attributes;
        'td::height': Attributes;
        'td::nowrap': Attributes;
        'td::rowspan': Attributes;
        'td::scope': Attributes;
        'td::valign': Attributes;
        'td::width': Attributes;
        'textarea::accesskey': Attributes;
        'textarea::cols': Attributes;
        'textarea::disabled': Attributes;
        'textarea::name': Attributes;
        'textarea::onblur': Attributes;
        'textarea::onchange': Attributes;
        'textarea::onfocus': Attributes;
        'textarea::onselect': Attributes;
        'textarea::readonly': Attributes;
        'textarea::rows': Attributes;
        'textarea::tabindex': Attributes;
        'tfoot::align': Attributes;
        'tfoot::char': Attributes;
        'tfoot::charoff': Attributes;
        'tfoot::valign': Attributes;
        'th::abbr': Attributes;
        'th::align': Attributes;
        'th::axis': Attributes;
        'th::bgcolor': Attributes;
        'th::char': Attributes;
        'th::charoff': Attributes;
        'th::colspan': Attributes;
        'th::headers': Attributes;
        'th::height': Attributes;
        'th::nowrap': Attributes;
        'th::rowspan': Attributes;
        'th::scope': Attributes;
        'th::valign': Attributes;
        'th::width': Attributes;
        'thead::align': Attributes;
        'thead::char': Attributes;
        'thead::charoff': Attributes;
        'thead::valign': Attributes;
        'tr::align': Attributes;
        'tr::bgcolor': Attributes;
        'tr::char': Attributes;
        'tr::charoff': Attributes;
        'tr::valign': Attributes;
        'ul::compact': Attributes;
        'ul::type': Attributes;
    };
}

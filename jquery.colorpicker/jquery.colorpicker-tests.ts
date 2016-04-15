/// <reference path="jquery.colorpicker.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts" />

// Default options copied from the source
var colorpicker = $("<input type=\"text\"/>").colorpicker({
    alpha: false,                // Show alpha controls and mode
    altAlpha: true,                // change opacity of altField as well?
    altField: '',                        // selector for DOM elements which change background color on change.
    altOnChange: true,                // true to update on each change, false to update only on close.
    altProperties: 'background-color',        // comma separated list of any of 'background-color', 'color', 'border-color', 'outline-color'
    autoOpen: false,                // Open dialog automatically upon creation
    buttonClass: null,                // If set, the button will get this/these classname(s).
    buttonColorize: false,
    buttonImage: 'images/ui-colorpicker.png',
    buttonImageOnly: false,
    buttonText: null,                // Text on the button and/or title of button image.
    closeOnEscape: true,                // Close the dialog when the escape key is pressed.
    closeOnOutside: true,                // Close the dialog when clicking outside the dialog (not for inline)
    color: '#00FF00',        // Initial color (for inline only)
    colorFormat: 'HEX',                // Format string for output color format
    draggable: true,                // Make popup dialog draggable if header is visible.
    duration: 'fast',
    hsv: true,                // Show HSV controls and modes
    inline: true,                // Show any divs as inline by default
    inlineFrame: true,                // Show a border and background when inline.
    layout: {
        map: [0, 0, 1, 5],        // Left, Top, Width, Height (in table cells).
        bar: [1, 0, 1, 5],
        preview: [2, 0, 1, 1],
        hsv: [2, 1, 1, 1],
        rgb: [2, 2, 1, 1],
        alpha: [2, 3, 1, 1],
        hex: [2, 4, 1, 1],
        lab: [3, 1, 1, 1],
        cmyk: [3, 2, 1, 2],
        swatches: [4, 0, 1, 5]
    },
    limit: '',                        // Limit color "resolution": '', 'websafe', 'nibble', 'binary', 'name'
    modal: false,                // Modal dialog?
    mode: 'h',                // Initial editing mode, h, s, v, r, g, b or a
    okOnEnter: false,                // Close (with OK) when pressing the enter key
    parts: '',                        // leave empty for automatic selection
    part: {
        map: { size: 256 },
        bar: { size: 256 }
    },                        // options per part
    regional: '',
    revert: false,                // Revert color upon non
    rgb: true,                // Show RGB controls and modes
    showAnim: 'fadeIn',
    showCancelButton: true,
    showNoneButton: false,
    showCloseButton: true,
    showOn: 'focus click alt',                // 'focus', 'click', 'button', 'alt', 'both'
    showOptions: {},
    swatches: null,                // null for default or kv-object or names swatches set
    swatchesWidth: 84,                        // width (in number of pixels) of swatches box.
    title: null,
    cancel: null,
    close: null,
    init: null,
    select: null,
    ok: null,
    open: null
});

colorpicker.colorpicker("open");
colorpicker.colorpicker("close");
colorpicker.colorpicker("destroy");
colorpicker.colorpicker("setColor", "#deadbeef");

// example plugins provided

$.colorpicker.parts["memory"] = function (inst) {
    var that = this,
        container,
        selectNode = function (node) {
            inst._setColor($(node).css('backgroundColor'));
            inst._change();
        },
        deleteNode = function (node) {
            node.remove();
        },
        addNode = function (color) {
            var $node = $('<div/>').addClass('ui-colorpicker-swatch').css('backgroundColor', color);
            $node.mousedown(function (e) {
                e.stopPropagation();
                switch (e.which) {
                    case 1:
                        selectNode(this);
                        break;
                    case 3:
                        deleteNode($node);
                        setMemory();
                        break;
                }
            }).bind('contextmenu', function (e) {
                    e.preventDefault();
                });

            container.append($node);
        },
        getMemory = function () {
            return (<string>(document.cookie.match(/\bcolorpicker-memory=([^;]*)/) || [0, ''])[1]).split(',');
        },
    setMemory = function () {
        var colors = [];
        $('> *', container).each(function () {
            colors.push(encodeURIComponent($(this).css('backgroundColor')));
        });
        var expdate = new Date();
        expdate.setDate(expdate.getDate() + (365 * 10));
        document.cookie = 'colorpicker-memory=' + colors.join() + ";expires=" + expdate.toUTCString();
    };

    this.init = function () {
        container = $('<div/>')
            .addClass('ui-colorpicker-memory ui-colorpicker-border ui-colorpicker-swatches')
            .css({
                width: 84,
                height: 84,
                cursor: 'crosshair'
            })
            .appendTo($('.ui-colorpicker-memory-container', inst.dialog));

        $.each(getMemory(), function () {
            addNode(decodeURIComponent(this));
        });

        container.mousedown(function (e) {
            addNode(inst.color.toCSS());
            setMemory();
        });
    };
};

declare function setGradient(element, startColor, endColor): void;

$.colorpicker.parts["rgbslider"] = function (inst) {
    var that = this,
        sliders = {
            r: $('<div class="ui-colorpicker-slider"/>'),
            g: $('<div class="ui-colorpicker-slider"/>'),
            b: $('<div class="ui-colorpicker-slider"/>')
        };

    this.init = function () {
        $('<div class="ui-colorpicker-rgbslider"/>').append(sliders.r, sliders.g, sliders.b)
            .appendTo($('.ui-colorpicker-rgbslider-container', inst.dialog));

        function refresh() {
            var min,
                max,
                r = sliders.r.slider('value') / 255,
                g = sliders.g.slider('value') / 255,
                b = sliders.b.slider('value') / 255;

            inst.color.setRGB(r, g, b);

            setGradient(sliders.r, new $.colorpicker.Color(0, g, b), new $.colorpicker.Color(1, g, b));
            setGradient(sliders.g, new $.colorpicker.Color(r, 0, b), new $.colorpicker.Color(r, 1, b));
            setGradient(sliders.b, new $.colorpicker.Color(r, g, 0), new $.colorpicker.Color(r, g, 1));

            inst._change();
        }

        $(sliders.r).add(sliders.g).add(sliders.b).slider({
            min: 0,
            max: 255,
            step: 1,
            slide: refresh,
            change: refresh
        });
    };

    this.repaint = function () {
        $.each(inst.color.getRGB(), function (index, value) {
            var input = sliders[index];
            value = Math.round(value * 255);
            if (input.slider('value') !== value) {
                input.slider('value', value);
            }
        });
    };

    this.update = function () {
        this.repaint();
    };
};

$.colorpicker.parsers['CMYK'] = function (color) {
    var m = /^cmyk\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.exec(color);
    if (m) {
        return (new $.colorpicker.Color()).setCMYK(
            parseInt(m[1], 10) / 255,
            parseInt(m[2], 10) / 255,
            parseInt(m[3], 10) / 255,
            parseInt(m[4], 10) / 255
            );
    }
};

$.colorpicker.parsers["#HEX8"] = function (color) {
    var m = /^\s*#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\s*$/i.exec(color);
    if (m) {
        return (new (<any>$).colorpicker.Color()).setRGB(
            parseInt(m[2], 16) / 255,
            parseInt(m[3], 16) / 255,
            parseInt(m[4], 16) / 255
            ).setAlpha(parseInt(m[1], 16) / 255);
    }
};

$.colorpicker.writers["#HEX8"] = function (color, that) {
    return that._formatColor("#axrxgxbx", color);
};

$.colorpicker.swatches['pantone'] = {
    '100': { r: 0.956862745098039, g: 0.929411764705882, b: 0.486274509803922 }
};

function test_draggable() {

    $("#draggable").draggable({ axis: "y" });
    $("#draggable2").draggable({ axis: "x" });
    $("#draggable3").draggable({ containment: "#containment-wrapper", scroll: false });
    $("#draggable5").draggable({ containment: "parent" });
    $("#draggable").draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
    $("#draggable2").draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });
    $("#draggable3").draggable({ cursorAt: { bottom: 0 } });
    $("#draggable").draggable();
    $("#draggable").draggable({ distance: 20 });
    $("#draggable2").draggable({ delay: 1000 });
    $("#draggable").draggable({
        start: () => { },
        drag: () => { },
        stop: () => { }
    });
    $("#draggable").draggable({ handle: "p" });
    $("#draggable2").draggable({ cancel: "p.ui-widget-header" });
    $("#draggable").draggable({ revert: true });
    $("#draggable2").draggable({ revert: true, helper: "clone" });
    $("#draggable").draggable({ scroll: true });
    $("#draggable2").draggable({ scroll: true, scrollSensitivity: 100 });
    $("#draggable3").draggable({ scroll: true, scrollSpeed: 100 });
    $("#draggable").draggable({ snap: true });
    $("#draggable2").draggable({ snap: ".ui-widget-header" });
    $("#draggable3").draggable({ snap: ".ui-widget-header", snapMode: "outer" });
    $("#draggable4").draggable({ grid: [20, 20] });
    $("#draggable5").draggable({ grid: [80, 80] });
    $("#sortable").sortable({ revert: true });
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });
    $("#draggable").draggable({ helper: "original" });
    $("#draggable2").draggable({ opacity: 0.7, helper: "clone" });
    $("#draggable3").draggable({
        cursor: "move",
        cursorAt: { top: -12, left: -20 },
        helper: (event) => { return $("<div class='ui-widget-header'>I'm a custom helper</div>"); }
    });
    $("#set div").draggable({ stack: "#set div" });
}

function test_droppable() {

    $("#draggable, #draggable-nonvalid").draggable();
    $("#droppable").droppable({
        accept: "#draggable",
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: (event, ui) => {
            console.log(`${event.screenX}, ${event.screenY}`);
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                    .html("Dropped!");
        }
    });
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    var $gallery = $("#gallery"),
        $trash = $("#trash");
    $("li", $gallery).draggable({
        cancel: "a.ui-icon",
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    $trash.droppable({
        accept: "#gallery > li",
        activeClass: "ui-state-highlight",
        drop: (event, ui) => { }
    });

    $gallery.droppable({
        accept: "#trash li",
        activeClass: "custom-state-active",
        drop: (event, ui) => { }
    });

    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage($item) {
        $item.fadeOut(() => {
            var $list = $("ul", $trash).length ?
                $("ul", $trash) :
                $("<ul class='gallery ui-helper-reset'/>").appendTo($trash);

            $item.find("a.ui-icon-trash").remove();
            $item.append(recycle_icon).appendTo($list).fadeIn(() => {
                $item
                    .animate({ width: "48px" })
                    .find("img")
                        .animate({ height: "36px" });
            });
        });
    }

    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage($item) {
        $item.fadeOut(() => {
            $item
                .find("a.ui-icon-refresh")
                    .remove()
                .end()
                .css("width", "96px")
                .append(trash_icon)
                .find("img")
                    .css("height", "72px")
                .end()
                .appendTo($gallery)
                .fadeIn();
        });
    }

    function viewLargerImage($link) {
        var src = $link.attr("href"),
            title = $link.siblings("img").attr("alt"),
            $modal = $("img[src$='" + src + "']");

        if ($modal.length) {
            $modal.dialog("open");
        } else {
            var img = $("<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />")
                .attr("src", src).appendTo("body");
            setTimeout(() => {
                img.dialog({
                    title: <string>title,
                    width: 400,
                    modal: true
                });
            }, 1);
        }
    }

    $("ul.gallery > li").click((event) => {
        var $item = $(this),
            $target = $(event.target);

        if ($target.is("a.ui-icon-trash")) {
            deleteImage($item);
        } else if ($target.is("a.ui-icon-zoomin")) {
            viewLargerImage($target);
        } else if ($target.is("a.ui-icon-refresh")) {
            recycleImage($item);
        }

        return false;
    });


    $("#draggable").draggable();

    $("#droppable, #droppable-inner").droppable({
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find("> p")
                    .html("Dropped!");
            return false;
        }
    });

    $("#droppable2, #droppable2-inner").droppable({
        greedy: true,
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find("> p")
                    .html("Dropped!");
        }
    });

    $("#draggable").draggable({ revert: "valid" });
    $("#draggable2").draggable({ revert: "invalid" });
    $("#droppable").droppable({
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                    .html("Dropped!");
        }
    });
    $("#catalog").accordion();
    $("#catalog li").draggable({
        appendTo: "body",
        helper: "clone"
    });
    $("#cart ol").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ":not(.ui-sortable-helper)",
        drop: (event, ui) => {
            $(this).find(".placeholder").remove();
            $("<li></li>").text(ui.draggable.text()).appendTo(this);
        }
    }).sortable({
        items: "li:not(.placeholder)",
        sort: () => {
            // gets added unintentionally by droppable interacting with sortable
            // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
            $(this).removeClass("ui-state-default");
        }
    });

    $("#draggable").draggable();
    $("#droppable").droppable({
        hoverClass: "ui-state-active",
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                    .html("Dropped!");
        }
    });

    $("#draggable2").draggable();
    $("#droppable2").droppable({
        accept: "#draggable2",
        activeClass: "ui-state-hover",
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                    .html("Dropped!");
        }
    });

}


function test_resizable() {
    $("#resizable").resizable();
    $("#resizable").resizable({
        animate: true
    });
    $("#resizable").resizable({
        containment: "#container"
    });
    $("#resizable").resizable({
        delay: 1000
    });
    $("#resizable2").resizable({
        distance: 40
    });
    $("#resizable").resizable({
        helper: "ui-resizable-helper"
    });
    $("#resizable").resizable({
        maxHeight: 250,
        maxWidth: 350,
        minHeight: 150,
        minWidth: 200
    });
    $("#resizable").resizable({
        aspectRatio: 16 / 9
    });
    $("#resizable").resizable({
        grid: 50
    });
    $("#resizable").resizable({
        alsoResize: "#also"
    });
    $("#also").resizable();
    $("#resizable").resizable({
        handles: "se"
    });
    $("#resizable").resizable({
        ghost: true
    });
    $(".selector").resizable({ alsoResize: "#mirror" });
    var alsoResize = $(".selector").resizable("option", "alsoResize");
    $(".selector").resizable("option", "alsoResize", "#mirror");
    $(".selector").resizable({ animate: true });
    var animate = $(".selector").resizable("option", "animate");
    $(".selector").resizable("option", "animate", true);
    $(".selector").resizable({ animateDuration: "fast" });
    var animateDuration = $(".selector").resizable("option", "animateDuration");
    $(".selector").resizable("option", "animateDuration", "fast");
    $(".selector").resizable({ animateEasing: "easeOutBounce" });
    var animateEasing = $(".selector").resizable("option", "animateEasing");
    $(".selector").resizable("option", "animateEasing", "easeOutBounce");
    $(".selector").resizable({ aspectRatio: true });
    var aspectRatio = $(".selector").resizable("option", "aspectRatio");
    $(".selector").resizable("option", "aspectRatio", true);
    $(".selector").resizable({ autoHide: true });
    var autoHide = $(".selector").resizable("option", "autoHide");
    $(".selector").resizable("option", "autoHide", true);
    $(".selector").resizable({ cancel: ".cancel" });
    var cancel = $(".selector").resizable("option", "cancel");
    $(".selector").resizable("option", "cancel", ".cancel");
    $(".selector").resizable({ containment: "parent" });
    var containment = $(".selector").resizable("option", "containment");
    $(".selector").resizable("option", "containment", "parent");
    $(".selector").resizable({ delay: 150 });
    var delay = $(".selector").resizable("option", "delay");
    $(".selector").resizable("option", "delay", 150);
    $(".selector").resizable({ disabled: true });
    var disabled = $(".selector").resizable("option", "disabled");
    $(".selector").resizable("option", "disabled", true);
    $(".selector").resizable({ distance: 30 });
    var distance = $(".selector").resizable("option", "distance");
    $(".selector").resizable("option", "distance", 30);
    $(".selector").resizable({ ghost: true });
    var ghost = $(".selector").resizable("option", "ghost");
    $(".selector").resizable("option", "ghost", true);
    $(".selector").resizable({ grid: [20, 10] });
    var grid = $(".selector").resizable("option", "grid");
    $(".selector").resizable("option", "grid", [20, 10]);
    $(".selector").resizable({ handles: "n, e, s, w" });
    var handles = $(".selector").resizable("option", "handles");
    $(".selector").resizable("option", "handles", "n, e, s, w");
    $(".selector").resizable({ helper: "resizable-helper" });
    var helper = $(".selector").resizable("option", "helper");
    $(".selector").resizable("option", "helper", "resizable-helper");
    $(".selector").resizable({ maxHeight: 300 });
    var maxHeight = $(".selector").resizable("option", "maxHeight");
    $(".selector").resizable("option", "maxHeight", 300);
    $(".selector").resizable({ maxWidth: 300 });
    var maxWidth = $(".selector").resizable("option", "maxWidth");
    $(".selector").resizable("option", "maxWidth", 300);
    $(".selector").resizable({ minHeight: 150 });
    var minHeight = $(".selector").resizable("option", "minHeight");
    $(".selector").resizable("option", "minHeight", 150);
    $(".selector").resizable({ minWidth: 150 });
    var minWidth = $(".selector").resizable("option", "minWidth");
    $(".selector").resizable("option", "minWidth", 150);
    $(".selector").resizable("option", "disabled", true);
    $(".selector").resizable("option", { disabled: true });
    var widget = $(".selector").resizable("widget");
}


function test_selectable() {
    $("#selectable").selectable();
    $("#selectable").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                var index = $("#selectable li").index(this);
                result.append(" #" + (index + 1));
            });
        }
    });
    $(".selector").selectable({ autoRefresh: false });
    var autoRefresh = $(".selector").selectable("option", "autoRefresh");
    $(".selector").selectable("option", "autoRefresh", false);
    $(".selector").selectable({ cancel: "input,textarea,button,select,option" });
    var cancel = $(".selector").selectable("option", "cancel");
    $(".selector").selectable("option", "cancel", "input,textarea,button,select,option");
    $(".selector").selectable({ delay: 150 });
    var delay = $(".selector").selectable("option", "delay");
    $(".selector").selectable("option", "delay", 150);
    $(".selector").selectable({ disabled: true });
    var disabled = $(".selector").selectable("option", "disabled");
    $(".selector").selectable("option", "disabled", true);
    $(".selector").selectable({ distance: 30 });
    var distance = $(".selector").selectable("option", "distance");
    $(".selector").selectable("option", "distance", 30);
    $(".selector").selectable({ filter: "li" });
    var filter = $(".selector").selectable("option", "filter");
    $(".selector").selectable("option", "filter", "li");
    $(".selector").selectable({ tolerance: "fit" });
    var tolerance = $(".selector").selectable("option", "tolerance");
    $(".selector").selectable("option", "tolerance", "fit");
    $(".selector").selectable("destroy");
    var isDisabled = $(".selector").selectable("option", "disabled");
    var options = $(".selector").selectable("option");
    $(".selector").selectable("option", "disabled", true);
    $(".selector").selectable("option", { disabled: true });
    $(".selector").selectable("option", { disabled: true });
    $(".selector").selectable("refresh");
    var widget = $(".selector").selectable("widget");
}


function test_sortable() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
    $("#sortable1, #sortable2").sortable().disableSelection();
    var $tabs = $("#tabs").tabs();
    var $tab_items = $("ul:first li", $tabs).droppable({
        accept: ".connectedSortable li",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            var $item = $(this);
            var $list = $($item.find("a").attr("href"))
                .find(".connectedSortable");
            ui.draggable.hide("slow", function () {
                $tabs.tabs("select", $tab_items.index($item));
                $(this).appendTo($list).show("slow");
            });
        }
    });
    $("#sortable1").sortable({
        delay: 300
    });
    $("#sortable2").sortable({
        distance: 15
    });
    $("li").disableSelection();
    $("#sortable").sortable({
        placeholder: "ui-state-highlight"
    });
    $("ul.droptrue").sortable({
        connectWith: "ul"
    });
    $("ul.dropfalse").sortable({
        connectWith: "ul",
        dropOnEmpty: false
    });
    $("#sortable1").sortable({
        items: "li:not(.ui-state-disabled)"
    });
    $("#sortable2").sortable({
        cancel: ".ui-state-disabled"
    });
    $(".column").sortable({
        connectWith: ".column"
    });
    $(".portlet").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<span class='ui-icon ui-icon-minusthick'></span>")
            .end()
        .find(".portlet-content");
    $(".portlet-header .ui-icon").click(function () {
        $(this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
        $(this).parents(".portlet:first").find(".portlet-content").toggle();
    });
    $(".selector").sortable({ appendTo: document.body });
    var appendTo = $(".selector").sortable("option", "appendTo");
    $(".selector").sortable("option", "appendTo", document.body);
    $(".selector").sortable({ axis: "x" });
    var axis = $(".selector").sortable("option", "axis");
    $(".selector").sortable("option", "axis", "x");
    $(".selector").sortable({ cancel: "a,button" });
    var cancel = $(".selector").sortable("option", "cancel");
    $(".selector").sortable("option", "cancel", "a,button");
    $(".selector").sortable({ connectWith: "#shopping-cart" });
    var connectWith = $(".selector").sortable("option", "connectWith");
    $(".selector").sortable("option", "connectWith", "#shopping-cart");
    $(".selector").sortable({ containment: "parent" });
    var containment = $(".selector").sortable("option", "containment");
    $(".selector").sortable("option", "containment", "parent");
    $(".selector").sortable({ cursor: "move" });
    var cursor = $(".selector").sortable("option", "cursor");
    $(".selector").sortable("option", "cursor", "move");
    $(".selector").sortable({ cursorAt: { left: 5 } });
    var cursorAt = $(".selector").sortable("option", "cursorAt");
    $(".selector").sortable("option", "cursorAt", { left: 5 });
    $(".selector").sortable({ delay: 150 });
    var delay = $(".selector").sortable("option", "delay");
    $(".selector").sortable("option", "delay", 150);
    $(".selector").sortable({ disabled: true });
    var disabled = $(".selector").sortable("option", "disabled");
    $(".selector").sortable("option", "disabled", true);
    $(".selector").sortable({ distance: 5 });
    var distance = $(".selector").sortable("option", "distance");
    $(".selector").sortable("option", "distance", 5);
    $(".selector").sortable({ dropOnEmpty: false });
    var dropOnEmpty = $(".selector").sortable("option", "dropOnEmpty");
    $(".selector").sortable("option", "dropOnEmpty", false);
    $(".selector").sortable({ forceHelperSize: true });
    var forceHelperSize = $(".selector").sortable("option", "forceHelperSize");
    $(".selector").sortable("option", "forceHelperSize", true);
    $(".selector").sortable({ forcePlaceholderSize: true });
    var forcePlaceholderSize = $(".selector").sortable("option", "forcePlaceholderSize");
    $(".selector").sortable("option", "forcePlaceholderSize", true);
    $(".selector").sortable({ grid: [20, 10] });
    var grid = $(".selector").sortable("option", "grid");
    $(".selector").sortable("option", "grid", [20, 10]);
    $(".selector").sortable({ handle: ".handle" });
    var handle = $(".selector").sortable("option", "handle");
    $(".selector").sortable("option", "handle", ".handle");
    $(".selector").sortable({ helper: "clone" });
    var helper = $(".selector").sortable("option", "helper");
    $(".selector").sortable("option", "helper", "clone");
    $(".selector").sortable({ items: "> li" });
    var items = $(".selector").sortable("option", "items");
    $(".selector").sortable("option", "items", "> li");
    $(".selector").sortable({ opacity: 0.5 });
    var opacity = $(".selector").sortable("option", "opacity");
    $(".selector").sortable("option", "opacity", 0.5);
    $(".selector").sortable({ placeholder: "sortable-placeholder" });
    var placeholder = $(".selector").sortable("option", "placeholder");
    $(".selector").sortable("option", "placeholder", "sortable-placeholder");
    $(".selector").sortable({ revert: true });
    var revert = $(".selector").sortable("option", "revert");
    $(".selector").sortable("option", "revert", true);
    $(".selector").sortable({ scroll: false });
    var scroll = $(".selector").sortable("option", "scroll");
    $(".selector").sortable("option", "scroll", false);
    $(".selector").sortable({ scrollSensitivity: 10 });
    var scrollSensitivity = $(".selector").sortable("option", "scrollSensitivity");
    $(".selector").sortable("option", "scrollSensitivity", 10);
    $(".selector").sortable({ scrollSpeed: 40 });
    var scrollSpeed = $(".selector").sortable("option", "scrollSpeed");
    $(".selector").sortable("option", "scrollSpeed", 40);
    $(".selector").sortable({ tolerance: "pointer" });
    var tolerance = $(".selector").sortable("option", "tolerance");
    $(".selector").sortable("option", "tolerance", "pointer");
    $(".selector").sortable({ zIndex: 9999 });
    var zIndex = $(".selector").sortable("option", "zIndex");
    $(".selector").sortable("option", "zIndex", 9999);
    var sorted = $(".selector").sortable("serialize", { key: "sort" });
    var sortedIDs = $(".selector").sortable("toArray");
    var widget = $(".selector").sortable("widget");
}


function test_accordion() {

    $("#accordion").accordion();

    $("#accordion").accordion({ collapsible: true });
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({ icons: icons });
    $("#toggle").button().click(() => {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons);
        }
    });
    $("#accordion").accordion({ heightStyle: "fill" });

    $("#accordion-resizer").resizable({
        minHeight: 140,
        minWidth: 200,
        resize: () => {
            $("#accordion").accordion("refresh");
        }
    });
    $("#accordion").accordion({ event: "click hoverintent" });
    $("#accordion").accordion({ heightStyle: "content" });
    $("#accordion")
        .accordion({
            header: "> div > h3"
        })
        .sortable({
            axis: "y",
            handle: "h3",
            stop: (event, ui) => {
                ui.item.children("h3").triggerHandler("focusout");
            }
        });
    $(".selector").accordion({ active: 2 });
    var active = $(".selector").accordion("option", "active");
    $(".selector").accordion("option", "active", 2);
    $(".selector").accordion({ animate: "bounceslide" });
    var animate = $(".selector").accordion("option", "animate");
    $(".selector").accordion("option", "animate", "bounceslide");
    $(".selector").accordion({ collapsible: true });
    var collapsible = $(".selector").accordion("option", "collapsible");
    $(".selector").accordion("option", "collapsible", true);
    $(".selector").accordion({ disabled: true });
    var disabled = $(".selector").accordion("option", "disabled");
    $(".selector").accordion("option", "disabled", true);
    $(".selector").accordion({ event: "mouseover" });
    var event = $(".selector").accordion("option", "event");
    $(".selector").accordion("option", "event", "mouseover");
    $(".selector").accordion({ header: "h3" });
    var header = $(".selector").accordion("option", "header");
    $(".selector").accordion("option", "header", "h3");
    $(".selector").accordion({ heightStyle: "fill" });
    var heightStyle = $(".selector").accordion("option", "heightStyle");
    $(".selector").accordion("option", "heightStyle", "fill");
    $(".selector").accordion({ icons: { "header": "ui-icon-plus", "headerSelected": "ui-icon-minus" } });
    icons = $(".selector").accordion("option", "icons");
    $(".selector").accordion("option", "icons", { "header": "ui-icon-plus", "headerSelected": "ui-icon-minus" });
    var isDisabled = $(".selector").accordion("option", "disabled");
    $(".selector").accordion("option", { disabled: true });
}


function test_autocomplete() {

    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _renderMenu: (ul, items) => {
            var that = this,
                currentCategory = "";
            $.each(items, (index, item) => {
                if (item.category != currentCategory) {
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }
                that._renderItemData(ul, item);
            });
        }
    });

    var data = [
                { label: "anders", category: "" },
                { label: "andreas", category: "" },
                { label: "antal", category: "" },
                { label: "annhhx10", category: "Products" },
                { label: "annk K12", category: "Products" },
                { label: "annttop C13", category: "Products" },
                { label: "anders andersson", category: "People" },
                { label: "andreas andersson", category: "People" },
                { label: "andreas johnson", category: "People" }
    ];

    $("#search").autocomplete({
        delay: 0,
        source: data
    });

    $.widget("ui.combobox", {
        _create: () => {
            var input,
                that = this,
                select = this.element.hide(),
                selected = select.children(":selected"),
                value = selected.val() ? selected.text() : "",
                wrapper = this.wrapper = $("<span>")
                    .addClass("ui-combobox")
                    .insertAfter(select);

            function removeIfInvalid(element) {
                var value = $(element).val() as string,
                    matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(value) + "$", "i"),
                    valid = false;
                select.children("option").each(() => {
                    if ($(this).text().match(matcher)) {
                        this.selected = valid = true;
                        return false;
                    }
                });
                if (!valid) {
                    // remove invalid value, as it didn't match anything
                    $(element)
                        .val("")
                        .attr("title", value + " didn't match any item")
                        .tooltip("open");
                    select.val("");
                    setTimeout(() => {
                        input.tooltip("close").attr("title", "");
                    }, 2500);
                    input.data("autocomplete").term = "";
                    return false;
                }
            }

            input = $("<input>")
                .appendTo(wrapper)
                .val(value)
                .attr("title", "")
                .addClass("ui-state-default ui-combobox-input")
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: (request, response) => {
                        var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                        response(select.children("option").map(() => {
                            var text = $(this).text();
                            if (this.value && (!request.term || matcher.test(text)))
                                return {
                                    label: text.replace(
                                        new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)(" +
                                            $.ui.autocomplete.escapeRegex(request.term) +
                                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                        ), "<strong>$1</strong>"),
                                    value: text,
                                    option: this
                                };
                        }));
                    },
                    select: (event, ui) => {
                        ui.item.option.selected = true;
                        that._trigger("selected", event, {
                            item: ui.item.option
                        });
                    },
                    change: (event, ui) => {
                        if (!ui.item)
                            return removeIfInvalid(this);
                    }
                })
                .addClass("ui-widget ui-widget-content ui-corner-left");

            input.data("autocomplete")._renderItem = (ul, item) => {
                return $("<li>")
                    .data("item.autocomplete", item)
                    .append("<a>" + item.label + "</a>")
                    .appendTo(ul);
            };

            $("<a>")
                .attr("tabIndex", -1)
                .attr("title", "Show All Items")
                .tooltip()
                .appendTo(wrapper)
                .button({
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    },
                    text: false
                })
                .removeClass("ui-corner-all")
                .addClass("ui-corner-right ui-combobox-toggle")
                .click(() => {
                    if (input.autocomplete("widget").is(":visible")) {
                        input.autocomplete("close");
                        removeIfInvalid(input);
                        return;
                    }

                    $(this).blur();

                    input.autocomplete("search", "");
                    input.focus();
                });

            input
                .tooltip({
                    position: {
                        of: this.button
                    },
                    tooltipClass: "ui-state-highlight"
                });
        },

        destroy: () => {
            this.wrapper.remove();
            this.element.show();
            $.Widget.prototype.destroy.call(this);
        }
    });
    $("#toggle").click(() => { $("#combobox").toggle(); });
    $("#project").autocomplete({
        minLength: 0,
        source: null,
        focus: (event, ui) => {
            $("#project").val(ui.item.label);
            return false;
        },
        select: (event, ui) => {
            $("#project").val(ui.item.label);
            $("#project-id").val(ui.item.value);
            $("#project-description").html(ui.item.desc);
            $("#project-icon").attr("src", "images/" + ui.item.icon);
            return false;
        }
    });

    $("#developer").autocomplete({
        source: (request, response) => {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        }
    });

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({ source: availableTags });
    $("#birds")
        .bind("keydown", (event) => {
            if (event.keyCode === $.ui.keyCode.TAB &&
                    $(this).data("autocomplete").menu.active) {
                event.preventDefault();
            }
        })
        .autocomplete({
            source: (request, response) => {
                $.getJSON("search.php", {
                    term: null
                }, response);
            },
            search: () => {
                return false;
            },
            focus: () => {
                return false;
            },
            select: (event, ui) => {
                return false;
            }
        });
    $("#tags")
        .bind("keydown", (event) => {
            if (event.keyCode === $.ui.keyCode.TAB &&
                    $(this).data("autocomplete").menu.active) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 0,
            source: (request, response) => { },
            focus: () => {
                return false;
            },
            select: (event, ui) => {
                return false;
            }
        });
    $("#city").autocomplete({
        source: (request, response) => {
            $.ajax({
                url: "http://ws.geonames.org/searchJSON",
                dataType: "jsonp",
                data: {
                    featureClass: "P",
                    style: "full",
                    maxRows: 12,
                    name_startsWith: request.term
                },
                success: (data) => {
                    response($.map(data.geonames, (item) => {
                        return {
                            label: item.name + (item.adminName1 ? ", " + item.adminName1 : "") + ", " + item.countryName,
                            value: item.name
                        }
                    }));
                }
            });
        },
        minLength: 2,
        select: (event, ui) => {
            log(ui.item ?
                "Selected: " + ui.item.label :
                "Nothing selected, input was " + this.value);
        },
        open: () => {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: () => {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
    function log(message) {
        $("<div/>").text(message).prependTo("#log");
        $("#log").attr("scrollTop", 0);
    }
    var cache = {};
    $("#birds").autocomplete({
        minLength: 2,
        source: (request, response) => {
            var term = request.term;
            if (term in cache) {
                response(cache[term]);
                return;
            }

            $.getJSON("search.php", request, (data, status, xhr) => {
                cache[term] = data;
                response(data);
            });
        }
    });
    $("#birds").autocomplete({
        source: "search.php",
        minLength: 2,
        select: (event, ui) => {
            log(ui.item ?
                "Selected: " + ui.item.value + " aka " + ui.item.id :
                "Nothing selected, input was " + this.value);
        }
    });
    $("#birds").autocomplete({
        source: data,
        minLength: 0,
        select: (event, ui) => {
            log(ui.item ?
                "Selected: " + ui.item.value + ", geonameId: " + ui.item.id :
                "Nothing selected, input was " + this.value);
        }
    });
    $("#birds").autocomplete({
        classes: {
            'ui-autocomplete': 'foo',
            'ui-autocomplete-input': 'bar'
        }
    })
}


function test_button() {

    $("#check").button();
    $("#format").buttonset();
    $("input[type=submit], a, button")
        .button()
        .click((event) => { event.preventDefault(); });
    $("button:first").button({
        icons: {
            primary: "ui-icon-locked"
        },
        text: false
    }).next().button({
        icons: {
            primary: "ui-icon-locked"
        }
    }).next().button({
        icons: {
            primary: "ui-icon-gear",
            secondary: "ui-icon-triangle-1-s"
        }
    }).next().button({
        icons: {
            primary: "ui-icon-gear",
            secondary: "ui-icon-triangle-1-s"
        },
        text: false
    });
    $("#rerun")
            .button()
            .click(function () {
                alert("Running the last action");
            })
            .next()
                .button({
                    text: false,
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    }
                })
                .click(function () {
                    var menu = $(this).parent().next().show().position({
                        my: "left top",
                        at: "left bottom",
                        of: this
                    });
                    $(document).one("click", function () {
                        menu.hide();
                    });
                    return false;
                })
                .parent()
                    .buttonset()
                    .next()
                        .hide()
                        .menu();
    $("#beginning").button({
        text: false,
        icons: {
            primary: "ui-icon-seek-start"
        }
    });
    $("#rewind").button({
        text: false,
        icons: {
            primary: "ui-icon-seek-prev"
        }
    });
    $("#play").button({
        text: false,
        icons: {
            primary: "ui-icon-play"
        }
    })
    .click(function () {
        var options;
        if ($(this).text() === "play") {
            options = {
                label: "pause",
                icons: {
                    primary: "ui-icon-pause"
                }
            };
        } else {
            options = {
                label: "play",
                icons: {
                    primary: "ui-icon-play"
                }
            };
        }
        $(this).button("option", options);
    });
    $("#stop").button({
        text: false,
        icons: {
            primary: "ui-icon-stop"
        }
    })
    .click(function () {
        $("#play").button("option", {
            label: "play",
            icons: {
                primary: "ui-icon-play"
            }
        });
    });
    $("#forward").button({
        text: false,
        icons: {
            primary: "ui-icon-seek-next"
        }
    });
    $("#end").button({
        text: false,
        icons: {
            primary: "ui-icon-seek-end"
        }
    });
    $(".selector").button({ disabled: true });
    var disabled = $(".selector").button("option", "disabled");
    $(".selector").button("option", "disabled", true);
    $(".selector").button({ icons: { primary: "ui-icon-gear", secondary: "ui-icon-triangle-1-s" } });
    $(".selector").button({ label: "custom label" });
    $(".selector").button({ text: false });
    $(".selector").button("destroy");
}


function test_datepicker() {
    $.datepicker.formatDate('yy-mm-dd', new Date(2007, 1 - 1, 26));
    $.datepicker.formatDate('DD, MM d, yy', new Date(2007, 7 - 1, 14), {
        dayNamesShort: $.datepicker.regional['fr'].dayNamesShort,
        dayNames: $.datepicker.regional['fr'].dayNames,
        monthNamesShort: $.datepicker.regional['fr'].monthNamesShort,
        monthNames: $.datepicker.regional['fr'].monthNames
    });
    $("selector").datepicker($.datepicker.regional['fr']);

    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "showAnim", $(this).val());
    $("#datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
    $("#datepicker").datepicker({
        showButtonPanel: true
    });
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });
    $("#datepicker").datepicker({
        numberOfMonths: 3,
        showButtonPanel: true
    });
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "images/calendar.gif",
        buttonImageOnly: true
    });
    $.datepicker.setDefaults($.datepicker.regional[<string>""]);
    $("#datepicker").datepicker($.datepicker.regional["fr"]);
    $("#locale").change(function () {
        $("#datepicker").datepicker("option",
            $.datepicker.regional[$(this).val() as string]);
    });
    $("#datepicker").datepicker({
        altField: "#alternate",
        altFormat: "DD, d MM, yy"
    });
    $("#datepicker").datepicker({ minDate: -20, maxDate: "+1M +10D" });
    $("#from").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function (selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function (selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });
    $("#datepicker").datepicker({
        showWeek: true,
        firstDay: 1
    });
    $(".selector").datepicker({ altField: "#actualDate" });
    $(".selector").datepicker({ altFormat: "yy-mm-dd" });
    $(".selector").datepicker({ appendText: "(yyyy-mm-dd)" });
    $(".selector").datepicker({ autoSize: true });
    $(".selector").datepicker({ buttonImage: "/images/datepicker.gif" });
    $(".selector").datepicker({ buttonImageOnly: true });
    $(".selector").datepicker({ buttonText: "Choose" });
    $(".selector").datepicker({ calculateWeek: null });
    $(".selector").datepicker({ changeMonth: true });
    $(".selector").datepicker({ changeYear: true });
    $(".selector").datepicker({ closeText: "Close" });
    $(".selector").datepicker({ constrainInput: false });
    $(".selector").datepicker({ currentText: "Now" });
    $(".selector").datepicker({ dateFormat: "yy-mm-dd" });
    $(".selector").datepicker({ dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] });
    $(".selector").datepicker({ dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"] });

    $.datepicker.setDefaults($.datepicker.regional[<string>""]);
    $(".selector").datepicker($.datepicker.regional["fr"]);

    // Methods
    var $destroyed: JQuery = $(".selector").datepicker("destroy");
    var $dialog: JQuery = $(".selector").datepicker("dialog", "10/12/2012");
    var currentDate: Date = $(".selector").datepicker("getDate");
    var $hidden: JQuery = $(".selector").datepicker("hide");
    var isDisabled: boolean = $(".selector").datepicker("isDisabled");
    var option: any = $(".selector").datepicker("option", "disabled");
    var $refreshed: JQuery = $(".selector").datepicker("refresh");
    var $setDate1: JQuery = $(".selector").datepicker("setDate", "10/12/2012");
    var $setDate2: JQuery = $(".selector").datepicker("setDate", new Date());
    var $shown: JQuery = $(".selector").datepicker("show");
    var $widget: JQuery = $(".selector").datepicker("widget");

    // Options
    function altField() {
        $(".selector").datepicker({ altField: "#actualDate" });

        // getter
        var altField: any = $(".selector").datepicker("option", "altField");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "altField", "#actualDate");
    }

    function altFormat() {
        $(".selector").datepicker({ altFormat: "yy-mm-dd" });

        // getter
        var altFormat: string = $(".selector").datepicker("option", "altFormat");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "altFormat", "yy-mm-dd");
    }

    function appendText() {
        $(".selector").datepicker({ appendText: "(yyyy-mm-dd)" });

        // getter
        var appendText: string = $(".selector").datepicker("option", "appendText");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "appendText", "(yyyy-mm-dd)");
    }

    function autoSize() {
        $(".selector").datepicker({ autoSize: true });

        // getter
        var autoSize: boolean = $(".selector").datepicker("option", "autoSize");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "autoSize", true);
    }

    function beforeShow() {
        function myFunction(input, inst) {
            return null;
        }

        $(".selector").datepicker({ beforeShow: myFunction });

        // getter
        var beforeShow: (input: Element, inst: any) => JQueryUI.DatepickerOptions = $(".selector").datepicker("option", "beforeShow");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "beforeShow", myFunction);
    }

    function beforeShowDay() {
        $("#datepicker").datepicker({ beforeShowDay: $.datepicker.noWeekends });

        // getter
        var beforeShowDay: (date: Date) => any[] = $(".selector").datepicker("option", "beforeShowDay");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "beforeShowDay", $.datepicker.noWeekends);
    }

    function buttonImage() {
        $(".selector").datepicker({ buttonImage: "/images/datepicker.gif" });

        // getter
        var buttonImage: string = $(".selector").datepicker("option", "buttonImage");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "buttonImage", "/images/datepicker.gif");
    }

    function buttonImageOnly() {
        $(".selector").datepicker({ buttonImageOnly: true });

        // getter
        var buttonImageOnly: boolean = $(".selector").datepicker("option", "buttonImageOnly");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "buttonImageOnly", true);
    }

    function buttonText() {
        $(".selector").datepicker({ buttonText: "Choose" });

        var buttonText: string = $(".selector").datepicker("option", "buttonText");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "buttonText", "Choose");
    }

    function calculateWeek() {

        function myWeekCalc(date: Date) {
            var checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(7);
            checkDate.setDate(28);
            var week = (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 2);
            if (week < 1) {
                week = 52 + week;
            }
            return 'FW: '+week;
        }

        $(".selector").datepicker({ calculateWeek: myWeekCalc });

        // getter
        var calculateWeek: (date: Date) => string = $(".selector").datepicker("option", "calculateWeek");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "calculateWeek", myWeekCalc);
    }

    function changeMonth() {
        $(".selector").datepicker({ changeMonth: true });

        var changeMonth: boolean = $(".selector").datepicker("option", "changeMonth");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "changeMonth", true);
    }

    function changeYear() {
        $(".selector").datepicker({ changeYear: true });

        var changeYear: boolean = $(".selector").datepicker("option", "changeYear");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "changeYear", true);
    }

    function closeText() {
        $(".selector").datepicker({ closeText: "Close" });

        var closeText: string = $(".selector").datepicker("option", "closeText");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "closeText", "Close");
    }

    function constrainInput() {
        $(".selector").datepicker({ constrainInput: false });

        var constrainInput: boolean = $(".selector").datepicker("option", "constrainInput");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "constrainInput", false);
    }

    function currentText() {
        $(".selector").datepicker({ currentText: "Now" });

        var currentText: string = $(".selector").datepicker("option", "currentText");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "currentText", "Now");
    }

    function dateFormat() {
        $(".selector").datepicker({ dateFormat: "yy-mm-dd" });

        var dateFormat: string = $(".selector").datepicker("option", "dateFormat");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "dateFormat", "yy-mm-dd");
    }

    function dayNames() {
        $(".selector").datepicker({ dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] });

        var dayNames: string[] = $(".selector").datepicker("option", "dayNames");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "dayNames", ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]);
    }

    function dayNamesMin() {
        $(".selector").datepicker({ dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"] });

        var dayNamesMin: string[] = $(".selector").datepicker("option", "dayNamesMin");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "dayNamesMin", ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"]);
    }

    function dayNamesShort() {
        $(".selector").datepicker({ dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"] });

        var dayNamesShort: string[] = $(".selector").datepicker("option", "dayNamesShort");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "dayNamesShort", ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]);
    }

    function defaultDate() {
        $(".selector").datepicker({ defaultDate: +7 });

        var defaultDate: any = $(".selector").datepicker("option", "defaultDate");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "defaultDate", +7);
        $set = $(".selector").datepicker("option", "defaultDate", new Date());
        $set = $(".selector").datepicker("option", "defaultDate", "+1m +7d");
    }

    function duration() {
        $(".selector").datepicker({ duration: "slow" });

        var duration: string = $(".selector").datepicker("option", "duration");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "duration", "slow");
    }

    function firstDay() {
        $(".selector").datepicker({ firstDay: 1 });

        var firstDay: number = $(".selector").datepicker("option", "firstDay");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "firstDay", 1);
    }

    function gotoCurrent() {
        $(".selector").datepicker({ gotoCurrent: true });

        var gotoCurrent: boolean = $(".selector").datepicker("option", "gotoCurrent");

        // setter
        var $set: JQuery = $(".selector").datepicker("option", "gotoCurrent", true);
    }
}


function test_dialog() {
    $("#dialog").dialog();
    $("#dialog").dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode"
    });
    $("#opener").click(function () {
        var $el = $("#dialog").dialog("open");
        return false;
    });
    $("#dialog-modal").dialog({
        height: 140,
        modal: true
    });
    $("#dialog-confirm").dialog({
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "Delete all items": function () {
                var $el = $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });
    $("#dialog-form").dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            Cancel: function () {
                $(this).dialog("close");
            },
            close: function () {
                var $el = $(this).dialog("destroy");
            }
        }
    });
    $("#dialog-message").dialog({
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
    $(".selector").dialog({ autoOpen: false });
    $(".selector").dialog({ buttons: { Ok: function () { $(this).dialog("close"); } } });
    $(".selector").dialog({ buttons: [ { text: "Ok", click: function () { $(this).dialog("close"); } } ] } );
    $(".selector").dialog({ classes: { "ui-dialog": "custom", "ui-dialog-content": "custom-content" } } );
    $(".selector").dialog({ closeOnEscape: false });
    $(".selector").dialog({ closeText: "hide" });
    $(".selector").dialog({ appendTo: "appendTo" });
    $(".selector").dialog({ dialogClass: "alert" });
    $(".selector").dialog({ disabled: true });
    $(".selector").dialog({ draggable: false });
    $(".selector").dialog({ height: 400 });
    $(".selector").dialog({ hide: "explode" });
    $(".selector").dialog({ maxHeight: 600 });
    $(".selector").dialog({ maxWidth: 600 });
    $(".selector").dialog({ minHeight: 200 });
    $(".selector").dialog({ minWidth: 200 });
    $(".selector").dialog({ modal: true });
    $(".selector").dialog({ position: { my: "left top", at: "left bottom", of: null } });
    $(".selector").dialog({ resizable: false });
    $(".selector").dialog({ show: "slow" });
    $(".selector").dialog({ stack: false });
    $(".selector").dialog({ title: "Dialog Title" });
    $(".selector").dialog({ width: 500 });
    $(".selector").dialog({ zIndex: 20 });
	var $el = $( ".selector" ).dialog( "moveToTop" );
	var isOpen = $( ".selector" ).dialog( "isOpen" );
}


function test_menu() {
    $("#menu").menu();
    $(".selector").menu({ disabled: true });
    $(".selector").menu({ icons: { submenu: "ui-icon-circle-triangle-e" } });
    $(".selector").menu({ menus: "div" });
    $(".selector").menu({ position: { my: "left top", at: "right-5 top+5" } });
    $(".selector").menu({ role: null });
    $(".selector").menu("option", { disabled: true });
    $(".selector").menu({ select: (e, ui) => { } });
}

function test_selectmenu() {
    // Options
    $("#selectmenu").selectmenu();
    $(".selector").selectmenu({ appendTo: ".selector" });
    $(".selector").selectmenu({ disabled: true });
    $(".selector").selectmenu({ icons: { submenu: "ui-icon-circle-triangle-e" } });
    $(".selector").selectmenu({ position: { my: "left top", at: "right-5 top+5" } });
    $(".selector").selectmenu({ width: 47 });

    // Events
    $("#selectmenu").selectmenu({ change: (event, ui) => {}});
    $("#selectmenu").selectmenu({ close: (event, ui) => {}});
    $("#selectmenu").selectmenu({ create: (event, ui) => {}});
    $("#selectmenu").selectmenu({ focus: (event, ui) => {}});
    $("#selectmenu").selectmenu({ open: (event, ui) => {}});
    $("#selectmenu").selectmenu({ select: (event, ui) => {}});

    // Events and options
    $("#selectmenu").selectmenu({
        appendTo: ".selector",
        disabled: true,
        icons: { submenu: "ui-icon-circle-triangle-e" },
        position: { my: "left top", at: "right-5 top+5" },
        width: 47,
        change: (event, ui) => {},
        close: (event, ui) => {},
        create: (event, ui) => {},
        focus: (event, ui) => {},
        open: (event, ui) => {},
        select: (event, ui) => {}
    });

    // passing in option
    $(".selector").selectmenu("option", { disabled: true });

    // Fetching option value
    var disabled = $(".selector").selectmenu("option", "disabled");

    // Setting option value
    $(".selector").selectmenu("option", "disabled", true);
    $(".selector").selectmenu("option", "position", { my: "left top", at: "right-5 top+5" } );

    // Methods
    $(".selector").selectmenu("close");
    $(".selector").selectmenu("destroy");

    // Chaining
    $("#number")
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass("overflow");
}


function test_progressbar() {
    $("#progressbar").progressbar({
        value: 37
    });
    $(".selector").progressbar({ disabled: true });
}


function test_slider() {
    $("#slider").slider();
    $("#red").slider("value", 255);
    $(this).empty().slider({
        value: 123,
        range: "min",
        animate: true,
        orientation: "vertical",
        highlight: true
    });
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
    var scrollPane = $(".scroll-pane"),
        scrollContent = $(".scroll-content");
    var scrollbar = $(".scroll-bar").slider({
        slide: function (event, ui) {
            if (scrollContent.width() > scrollPane.width()) {
                scrollContent.css("margin-left", Math.round(
                    ui.value / 100 * (scrollPane.width() - scrollContent.width())
                ) + "px");
            } else {
                scrollContent.css("margin-left", 0);
            }
        }
    });

    var handleHelper = scrollbar.find(".ui-slider-handle")
        .mousedown(function () {
            scrollbar.width(handleHelper.width());
        })
        .mouseup(function () {
            scrollbar.width("100%");
        })
        .append("<span class='ui-icon ui-icon-grip-dotted-vertical'></span>")
        .wrap("<div class='ui-handle-helper-parent'></div>").parent();
    $("#slider").slider({
        value: 100,
        min: 0,
        max: 500,
        step: 50,
        slide: function (event, ui) {
            $("#amount").val("$" + ui.value);
        }
    });
    $("#amount").val("$" + $("#slider").slider("value"));
    $(".selector").slider({ animate: "fast" });
    $(".selector").slider({ disabled: true });
    $(".selector").slider({ max: 50 });
    $(".selector").slider({ min: 10 });
    $(".selector").slider({ orientation: "vertical" });
    $(".selector").slider({ range: true });
    $(".selector").slider({ step: 5 });
    $(".selector").slider({ value: 10 });
    $(".selector").slider({ values: [10, 25] });
    $(".selector").slider({ classes: { "ui-slider": "custom", "ui-slider-handle": "custom-handle" } } );
}


function test_spinner() {
    var spinner = $("#spinner").spinner();

    $("#disable").click(function () {
        if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });
    $("#destroy").click(function () {
        if (spinner.data("ui-spinner")) {
            spinner.spinner("destroy");
        } else {
            spinner.spinner();
        }
    });
    $("#getvalue").click(function () { });
    $("#setvalue").click(function () {
        spinner.spinner("value", 5);
    });
    $("button").button();
    $("#currency").change(function () {
        $("#spinner").spinner("option", "culture", $(this).val());
    });

    $("#spinner").spinner({
        min: 5,
        max: 2500,
        step: 25,
        start: function () { return; },
        numberFormat: "C"
    });
    $("#spinner").spinner({
        step: 0.01,
        numberFormat: "n"
    });

    $("#culture").change(function () {
        var current = $("#spinner").spinner("value");
        $("#spinner").spinner("value", current);
    });
    $("#lat, #lng").spinner({
        step: .001,
        change() { },
        stop() { },
    });
    $("#spinner").spinner({
        spin: function (event, ui) {
            if (ui.value > 10) {
                $(this).spinner("value", -10);
                return false;
            } else if (ui.value < -10) {
                $(this).spinner("value", 10);
                return false;
            }
        }
    });
    $.widget("ui.timespinner", $.ui.spinner, {
        options: {
            // seconds
            step: 60 * 1000,
            // hours
            page: 60
        },
        _parse: function (value) {
            if (typeof value === "string") {
                if (Number(value) == <any>value) {
                    return Number(value);
                }
                return 123;
            }
            return value;
        },
        _format: function (value) {
        }
    });
    $(".selector").spinner({ culture: "fr" });
    $(".selector").spinner({ disabled: true });
    $(".selector").spinner({ icons: { down: "custom-down-icon", up: "custom-up-icon" } });
    $(".selector").spinner({ incremental: false });
    $(".selector").spinner({ max: 50 });
    $(".selector").spinner({ min: 0 });
    $(".selector").spinner({ numberFormat: "n" });
    $(".selector").spinner({ page: 5 });
    $(".selector").spinner({ step: 2 });
}


function test_tabs() {
    $("#tabs").tabs();
    $("#tabs").tabs({
        collapsible: true
    });
    $("#tabs").tabs({
        beforeLoad: function (event, ui) {
            ui.jqXHR.fail(function () {
                ui.panel.html(
                    "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                    "If this wouldn't be a demo.");
            });
        }
    });
    $("#tabs").tabs({
        event: "mouseover"
    });
    var tabs = $("#tabs").tabs();
    tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function () {
            tabs.tabs("refresh");
        }
    });
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    $(".selector").tabs({ active: 1 });
    $(".selector").tabs({ classes: { "ui-tabs": "custom", "ui-tabs-panel": "custom-panel" } } );
    $(".selector").tabs({ collapsible: true });
    $(".selector").tabs({ disabled: [0, 2] });
    $(".selector").tabs({ event: "mouseover" });
    $(".selector").tabs({ heightStyle: "fill" });
    $(".selector").tabs({ hide: { effect: "explode", duration: 1000 } });
    $(".selector").tabs({ show: { effect: "blind", duration: 800 } });
}


function test_tooltip() {
    $(document).tooltip();
    $(document).tooltip({
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
    $("#show-option").tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        }
    });
    $(document).tooltip({
        items: "img, [data-geo], [title]",
        content: function () {
            var element = $(this);
            if (element.is("[data-geo]")) {
                var text = element.text();
                return "<img class='map' alt='" + text +
                    "' src='http://maps.google.com/maps/api/staticmap?" +
                    "zoom=11&size=350x350&maptype=terrain&sensor=false&center=" +
                    text + "'>";
            }
            if (element.is("[title]")) {
                return element.attr("title");
            }
            if (element.is("img")) {
                return element.attr("alt");
            }
        }
    });
    var tooltips = $("[title]").tooltip();
    $("<button>")
        .text("Show help")
        .button()
        .click(function () {
            tooltips.tooltip("open");
        })
        .insertAfter("form");
    $(".selector").tooltip({ content: "Awesome title!" });
    $(".selector").tooltip({ disabled: true });
    $(".selector").tooltip({ hide: { effect: "explode", duration: 1000 } });
    $(".selector").tooltip({ items: "img[alt]" });
    $(".selector").tooltip({ position: { my: "left+15 center", at: "right center" } });
    $(".selector").tooltip({ show: { effect: "blind", duration: 800 } });
    $(".selector").tooltip({ tooltipClass: "custom-tooltip-styling" });
    $(".selector").tooltip({ track: true });
}

function test_effects() {
    $("#effect").addClass("newClass", 1000, callback);
    function callback() { }
    $("#effect").animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
    }, 1000);
    $("div").effect("bounce", "slow");
    var selectedEffect = $("#effectTypes").val() as string;
    var options: any;
    if (selectedEffect === "scale") {
        options = { percent: 0 };
    } else if (selectedEffect === "transfer") {
        options = { to: "#button", className: "ui-effects-transfer" };
    } else if (selectedEffect === "size") {
        options = { to: { width: 200, height: 60 } };
    }
    $("#effect").effect(selectedEffect, options, 500, callback);
    $("#effect").removeAttr("style").hide().fadeIn();
    $("#effect").removeClass("newClass", 1000, callback);
    $("#effect").show(selectedEffect, options, 500, callback);
    $(".anotherNewClass").switchClass("anotherNewClass", "newClass", 1000);
    $("#effect").toggle(selectedEffect, options, 500);
    $("#effect").toggleClass("newClass", 1000);
    $(".positionable").position({
        of: $("#parent"),
        my: $("#my_horizontal").val() + " " + $("#my_vertical").val(),
        at: $("#at_horizontal").val() + " " + $("#at_vertical").val(),
        collision: $("#collision_horizontal").val() + " " + $("#collision_vertical").val()
    });
    $("#toggle").toggle({ effect: "scale", direction: "horizontal" });
    $(this).effect("transfer", { to: $("div").eq(5) }, 1000);
    $("div").hide("drop", { direction: "down" }, "slow");
    $(this).switchClass("big", "blue", 1000, "easeInOutQuad");
    $(this).toggleClass("big-blue", 1000, "easeOutSine");
}

function test_methods() {
    $('.selector').disableSelection();
    $("#position1").position({
        my: "center",
        at: "center",
        of: "#targetElement"
    });
    $("#position2").position({
        my: "left top",
        at: "left top",
        of: "#targetElement"
    });
    $("#position3").position({
        my: "right center",
        at: "right bottom",
        of: "#targetElement"
    });
    $(document).mousemove(function (event) {
        $("#position4").position({
            my: "left+3 bottom-3",
            of: event,
            collision: "fit"
        });
    });
}

function test_ui() {
    $(".selector").jQuery.ui.mouse({ cancel: ".title" });
    var cancel = $(".selector").jQuery.ui.mouse("option", "cancel");
    $(".selector").jQuery.ui.mouse("option", "cancel", ".title");
    $(".selector").jQuery.ui.mouse({ delay: 300 });
    $(".selector").jQuery.ui.mouse({ distance: 10 });
    $(".selector").jQuery.ui.mouse("_mouseCapture");
    $("aDialog").keypress(function (e) {
        return (e.keyCode == $.ui.keyCode.ENTER);
    });
    $(".selector").jQuery.ui.selectmenu({ disabled: true });
}

function test_widget() {
    $(".selector").jQuery.Widget({ disabled: true });
    var disabled = $(".selector").jQuery.Widget("option", "disabled");
    $(".selector").jQuery.Widget("option", "disabled", true);
    $(".selector").jQuery.Widget({ hide: { effect: "explode", duration: 1000 } });
    $(".selector").jQuery.Widget({ show: { effect: "blind", duration: 800 } });
    var options = $(".selector").jQuery.Widget("option");
    var isDisabled = $(".selector").jQuery.Widget("option", "disabled");
    $(".selector").jQuery.Widget("option", "disabled", true);
    $(".selector").jQuery.Widget("option", { disabled: true });
}

function test_easing() {
    const easing = (<any> jQuery).easing;

    function test_easing_function( name: string, fn: JQueryEasingFunction ) {
        const step = Math.pow( 2, -3 ); // use power of 2 to prevent floating point rounding error
        for( let i = 0; i <= 1; i += step ) {
            console.log( `$.easing.${name}(${i}): ${fn.call(easing, i)}` );
        }
    }

    test_easing_function("easeInQuad", easing.easeInQuad);
    test_easing_function("easeOutQuad", easing.easeOutQuad);
    test_easing_function("easeInOutQuad", easing.easeInOutQuad);
    test_easing_function("easeInCubic", easing.easeInCubic);
    test_easing_function("easeOutCubic", easing.easeOutCubic);
    test_easing_function("easeInOutCubic", easing.easeInOutCubic);
    test_easing_function("easeInQuart", easing.easeInQuart);
    test_easing_function("easeOutQuart", easing.easeOutQuart);
    test_easing_function("easeInOutQuart", easing.easeInOutQuart);
    test_easing_function("easeInQuint", easing.easeInQuint);
    test_easing_function("easeOutQuint", easing.easeOutQuint);
    test_easing_function("easeInOutQuint", easing.easeInOutQuint);
    test_easing_function("easeInExpo", easing.easeInExpo);
    test_easing_function("easeOutExpo", easing.easeOutExpo);
    test_easing_function("easeInOutExpo", easing.easeInOutExpo);
    test_easing_function("easeInSine", easing.easeInSine);
    test_easing_function("easeOutSine", easing.easeOutSine);
    test_easing_function("easeInOutSine", easing.easeInOutSine);
    test_easing_function("easeInCirc", easing.easeInCirc);
    test_easing_function("easeOutCirc", easing.easeOutCirc);
    test_easing_function("easeInOutCirc", easing.easeInOutCirc);
    test_easing_function("easeInElastic", easing.easeInElastic);
    test_easing_function("easeOutElastic", easing.easeOutElastic);
    test_easing_function("easeInOutElastic", easing.easeInOutElastic);
    test_easing_function("easeInBack", easing.easeInBack);
    test_easing_function("easeOutBack", easing.easeOutBack);
    test_easing_function("easeInOutBack", easing.easeInOutBack);
    test_easing_function("easeInBounce", easing.easeInBounce);
    test_easing_function("easeOutBounce", easing.easeOutBounce);
    test_easing_function("easeInOutBounce", easing.easeInOutBounce);
}

/// <reference path="../Definitions/jqueryui-1.9.d.ts" />

declare var $: any;

function tests_draggable() {

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

function tests_droppable() {

    $("#draggable, #draggable-nonvalid").draggable();
    $("#droppable").droppable({
        accept: "#draggable",
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: (event, ui) => {
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


function tests_resizable() {

}


function tests_selectable() {

}


function tests_sortable() {

}


function tests_accordion() {

    $("#accordion").accordion(<Accordion>{ collapsible: true });
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

}

function tests_autocomplete() {

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

    $("#search").catcomplete({
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
                var value = $(element).val(),
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
    $("#combobox").combobox();
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
    })
    .data("autocomplete")._renderItem = (ul, item) => {
        return $("<li>")
            .data("item.autocomplete", item)
            .append("<a>" + item.label + "<br>" + item.desc + "</a>")
            .appendTo(ul);
    };

    $("#developer").autocomplete({
        source: (request, response) => {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response($.grep(names, (value) => {
                value = value.label || value.value || value;
                return matcher.test(value) || matcher.test(normalize(value));
            }));
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
                    term: extractLast(request.term)
                }, response);
            },
            search: () => {
                // custom minLength
                var term = extractLast(this.value);
                if (term.length < 2) {
                    return false;
                }
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
            source: (request, response) => {
                response($.ui.autocomplete.filter(
                    availableTags, extractLast(request.term)));
            },
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

}


function tests_button() {

    $("#check").button();
    $("#format").buttonset();
    $("input[type=submit], a, button")
        .button()
        .click((event) => { event.preventDefault(); });

}
function test_api() {
    $.mobile.changePage("about/us.html", { transition: "slideup" });
    $.mobile.changePage("searchresults.php", {
        type: "post",
        data: $("form#search").serialize()
    });
    $.mobile.changePage("../alerts/confirm.html", {
        transition: "pop",
        reverse: false,
        changeHash: false
    });

    $.mobile.loadPage("about/us.html");
    $.mobile.loadPage("searchresults.php", {
        type: "post",
        data: $("form#search").serialize()
    });
    $.mobile.loading('show', { theme: "b", text: "foo", textonly: true });
    $.mobile.path.parseUrl("http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234");
    var absUrl = $.mobile.path.makeUrlAbsolute("#bar", "http://foo.com/a/b/c/test.html");
    var isRel = $.mobile.path.isRelativeUrl("#foo");
    var isAbs = $.mobile.path.isAbsoluteUrl("//foo.com/a/file.html");
    var dirName = $.mobile.path.get("http://foo.com/a");
    $.mobile.silentScroll(100);
}

function test_pagesDialogs() {
    $.mobile.transitionFallbacks.slideout = "none";

    $(document).bind('mobileinit', function () {
        $.mobile.loader.prototype.options.text = "loading";
        $.mobile.loader.prototype.options.textVisible = false;
        $.mobile.loader.prototype.options.theme = "a";
        $.mobile.loader.prototype.options.html = "";
    });

    $.mobile.loading('show', {
        text: 'foo',
        textVisible: true,
        theme: 'z',
        html: ""
    });

    $('.ui-dialog').dialog('close');
    $("#myPopupDiv").popup();
    var options;
    $(".selector").popup("open", options);
    $("#myPopupDiv").popup("open");

    $(document).on("pageinit", function () {
        $('.popupParent').on({
            popupafterclose: function () {
                setTimeout(function () { $('.popupChild').popup('open') }, 100);
            }
        });
    });

    var pageUrl;
    $.mobile.loadPage(pageUrl, { showLoadMsg: false });
    $.mobile.page.prototype.options.domCache = true;

    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        if (applicationCache &&
             applicationCache.status != applicationCache.UNCACHED &&
             applicationCache.status != applicationCache.OBSOLETE) {
                 // the important bit
            options.isLocal = true;
        }
    });

    $(document).bind("pagebeforechange", function (e, data?) {
        if (typeof data.toPage === "string") {
            var u = $.mobile.path.parseUrl(data.toPage),
                re = /^#category-item/;
            if (u.hash.search(re) !== -1) {
                var showCategory;
                showCategory(u, data.options);
                e.preventDefault();
            }
        }
    });
    $(document).delegate("#aboutPage", "pageinit", function () {
        alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
    });
    $(document).delegate("#aboutPage", "pagebeforecreate", function () {
        alert('A page with an id of "aboutPage" is about to be created by jQuery Mobile!');
    });
    $.mobile.changePage("about/us.html", { transition: "slideup" });
    $.mobile.changePage("searchresults.php", {
        type: "post",
        data: $("form#search").serialize()
    });
    $.mobile.loadPage("about/us.html");
    $.mobile.silentScroll(300);
    $(document).bind("mobileinit", function () {
        $.mobile.allowCrossDomainPages = true;
    });
    $.mobile.touchOverflowEnabled = true;
    $(document).bind("mobileinit", function () {
        $.support.touchOverflow = true;
        $.mobile.touchOverflowEnabled = true;
    });
}

function test_toolbars() {
    $.mobile.page.prototype.options.backBtnText = "previous";
    $.mobile.page.prototype.options.backBtnTheme = "a";
    $("[data-role=header]").fixedtoolbar({ visibleOnPageShow: false });
    $("[data-role=header]").fixedtoolbar({ disablePageZoom: false });
    $("[data-role=header]").fixedtoolbar({ transition: "fade" });
    $("[data-role=header]").fixedtoolbar({ fullscreen: true });
    $("[data-role=header]").fixedtoolbar({ tapToggle: true });
    $("[data-role=header]").fixedtoolbar({ tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed" });
    $("[data-role=header]").fixedtoolbar({ hideDuringFocus: "input, select, textarea" });
    $("[data-role=header]").fixedtoolbar({ updatePagePadding: false });
    $(document).bind("mobileinit", function () {
        $.mobile.fixedtoolbar.prototype.options.supportBlacklist = function () {
            var result;
            return result;
        };
        $(document).bind("mobileinit", function () {
            $.mobile.fixedtoolbar.prototype.options.initSelector = ".myselector";
        });
    });
    $("[data-position='fixed']").fixedtoolbar('show');
    $("[data-position='fixed']").fixedtoolbar('hide');
    $(".selector").fixedtoolbar({
        create: function (event, ui) { }
    });
}

function test_button() {
    $('[type="submit"]').button();
    $('a').buttonMarkup({ corners: false });
    $('a').buttonMarkup({ icon: "star" });
    $('a').buttonMarkup({ iconpos: "right" });
    $('a').buttonMarkup({ iconshadow: false });
    $('a').buttonMarkup({ inline: true });
    $('a').buttonMarkup({ mini: true });
    $('a').buttonMarkup({ shadow: false });
    $('a').buttonMarkup({ theme: "a" });
    $.mobile.button.prototype.options.initSelector = ".myButtons";
    $('[type="submit"]').button('enable');
    $('[type="submit"]').button('disable');
    $('[type="submit"]').button('refresh');
    $('[type="submit"]').button({
        create: function (event, ui) { }
    });
}

function test_collapsible() {
    $.mobile.collapsible.prototype.options.collapsed = false;
    $.mobile.collapsible.prototype.options.collapseCueText = " collapse with a click";
    $.mobile.collapsible.prototype.options.collapsedIcon = "arrow-r";
    $.mobile.collapsible.prototype.options.contentTheme = "a";
    $.mobile.collapsible.prototype.options.expandCueText = " expand with a click";
    $.mobile.collapsible.prototype.options.expandedIcon = "arrow-d";
    $.mobile.collapsible.prototype.options.heading = ".mycollapsibleheading";
    $.mobile.collapsible.prototype.options.iconpos = "right";
    $.mobile.collapsible.prototype.options.initSelector = ".mycollapsible";
    $.mobile.collapsible.prototype.options.inset = false;
    $.mobile.collapsible.prototype.options.mini = true;
    $.mobile.collapsible.prototype.options.theme = "a";
    $(".selector").trigger("collapse");
    $(".selector").collapsible({
        create: function (event, ui) { },
        collapse: function (event, ui) { },
        expand: function (event, ui) { }
    });
    $.mobile.collapsibleset.prototype.options.collapsedIcon = "arrow-r";
    $.mobile.collapsibleset.prototype.options.expandedIcon = "arrow-d";
    $.mobile.collapsibleset.prototype.options.iconpos = "right";
    $.mobile.collapsibleset.prototype.options.initSelector = ".mycollapsibleset";
    $.mobile.collapsible.prototype.options.inset = false;
    $.mobile.collapsibleset.prototype.options.mini = true;
    $.mobile.collapsibleset.prototype.options.theme = "a";
    $(".selector").collapsibleset({
        create: function (event, ui) { }
    });
}

function test_form() {
    $("input[type='checkbox']").prop("checked", true).checkboxradio("refresh");
    $.mobile.page.prototype.options.keepNative = "select, input.foo, textarea.bar";

    $('input').textinput();
    $('.selector').textinput({ disabled: true });
    $.mobile.textinput.prototype.options.initSelector = ".myInputs";
    $('.selector').textinput({ mini: true });
    $('input').textinput({ preventFocusZoom: true });
    $('.selector').textinput({ theme: "a" });
    $('.selector').textinput('enable');
    $(".selector").textinput({
        create: function (event, ui) { }
    });

    $('select').slider();
    $('.selector').slider({ disabled: true });
    $('.selector').slider({ highlight: true });
    $.mobile.slider.prototype.options.initSelector = ".myslider";
    $('.selector').slider({ mini: true });
    $('.selector').slider({ theme: "a" });
    $('.selector').slider({ trackTheme: "a" });
    $(".selector").slider({
        create: function (event, ui) { }
    });
    $(".selector").on('slidestart', function (event) { });
    $(".selector").on('slidestop', function (event) { });

    $("input[type='radio']").checkboxradio({ mini: true });
    $("input[type='radio']").checkboxradio({ theme: "a" });
    $("input[type='radio']").checkboxradio('enable');
    $("input[type='radio']:first").prop("checked", true).checkboxradio("refresh");
    $("input[type='radio']").checkboxradio({
        create: function (event, ui) { }
    });

    $('select').selectmenu();
    $('select').selectmenu('enable');
    $('select').selectmenu('refresh', true);
    $(".selector").selectmenu({
        create: function (event, ui) { }
    });
}

function test_listview() {
    $("#mylistview").listview({
        autodividers: true,
        autodividersSelector: function (li) {
            var out;
            return out;
        }
    });
    $.mobile.listview.prototype.options.countTheme = "a";
    $.mobile.listview.prototype.options.dividerTheme = "a";
    $.mobile.listview.prototype.options.filter = true;
    $.mobile.listview.prototype.options.filterCallback = function (text, searchValue) {
        // only show items that *begin* with the search string
        return text.toLowerCase().substring(0, searchValue.length) !== searchValue;
    };
    $.mobile.listview.prototype.options.filterPlaceholder = "Search...";
    $.mobile.listview.prototype.options.filterTheme = "a";
    $.mobile.listview.prototype.options.headerTheme = "a";
    $.mobile.listview.prototype.options.initSelector = ".mylistview";
    $.mobile.listview.prototype.options.inset = true;
    $.mobile.listview.prototype.options.splitIcon = "star";
    $.mobile.listview.prototype.options.splitTheme = "a";
    $.mobile.listview.prototype.options.theme = "a";
    $('#mylist').listview();
    $('#mylist').listview('refresh');
}

function test_misc() {
    $.mobile.initializePage();
}

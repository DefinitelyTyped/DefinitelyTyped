/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="mCustomScrollbar.d.ts" />

class SimpleTest {
    element: JQuery;

    constructor() {
        this.element = $(".content");

        this.element.mCustomScrollbar({
            scrollButtons: {
                enable: true
            }
        });
    }
}

class SimpleTestAllParams {
    element: JQuery;

    constructor() {
        this.element = $(".content");

        this.element.mCustomScrollbar({
            set_width: false,
            set_height: false,
            horizontalScroll: false,
            scrollInertia: 950,
            mouseWheel: true,
            mouseWheelPixels: "auto",
            autoDraggerLength: true,
            autoHideScrollbar: false,
            scrollButtons: {
                enable: false,
                scrollType: "continuous",
                scrollSpeed: "auto",
                scrollAmount: 40
            },
            advanced: {
                updateOnBrowserResize: true,
                updateOnContentResize: false,
                autoExpandHorizontalScroll: false,
                autoScrollOnFocus: true,
                normalizeMouseWheelDelta: false
            },
            contentTouchScroll: true,
            callbacks: {
                onScrollStart: () => { },
                onScroll: () => { },
                onTotalScroll: () => { },
                onTotalScrollBack: () => { },
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                whileScrolling: () => { }
            },
            theme: "light"
        });
    }
}

class CallbacksTest {
    element: JQuery;

    constructor() {
        this.element = $(".content");

        this.element.mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            callbacks: {
                onScrollStart: () => {
                    this.OnScrollStart();
                },
                onScroll: () => {
                    this.OnScroll();
                },
                onTotalScroll: () => {
                    this.OnTotalScroll();
                },
                onTotalScrollBack: () => {
                    this.OnTotalScrollBack();
                },
                onTotalScrollOffset: 40,
                onTotalScrollBackOffset: 20,
                whileScrolling: () => {
                    this.WhileScrolling();
                }
            }
        });
    }

    OnScrollStart() {
        $(".output .onScrollStart").stop(true, true).css("display", "inline-block").delay(500).fadeOut(500);
    }

    OnScroll() {
        $(".output .onScroll").stop(true, true).css("display", "inline-block").delay(500).fadeOut(500);
    }

    OnTotalScroll() {
        $(".output .onTotalScroll").stop(true, true).css("display", "inline-block").delay(500).fadeOut(500);
    }

    OnTotalScrollBack() {
        $(".output .onTotalScrollBack").stop(true, true).css("display", "inline-block").delay(500).fadeOut(500);
    }

    WhileScrolling() {
        $(".output .whileScrolling").stop(true, true).css("display", "inline-block").fadeOut(500);
    }
}

class DisableDestroyTest {
    element: JQuery;

    constructor() {
        this.element = $(".content");

        this.element.mCustomScrollbar({
            scrollButtons: {
                enable: true
            }
        });

        $("#disable-scrollbar").click((e) => {
            e.preventDefault();
            this.element.mCustomScrollbar("disable", true);
        });
        $("#disable-scrollbar-no-reset").click((e) => {
            e.preventDefault();
            this.element.mCustomScrollbar("disable");
        });
        $("#enable-scrollbar").click((e) => {
            e.preventDefault();
            this.element.mCustomScrollbar("update");
        });
        $("#destroy-scrollbar").click((e) => {
            e.preventDefault();
            this.element.mCustomScrollbar("destroy");
        });
        $("#rebuild-scrollbar").click((e) => {
            this.element.mCustomScrollbar({
                scrollButtons: {
                    enable: true
                }
            });
        });
    }
}
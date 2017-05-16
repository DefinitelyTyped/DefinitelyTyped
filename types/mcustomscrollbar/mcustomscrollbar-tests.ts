import * as factory from "malihu-custom-scrollbar-plugin";

factory($);

class SimpleTest {
    element: JQuery;

    constructor() {
        this.element = $(".content");

        this.element.mCustomScrollbar({
            scrollButtons: {
                enable: true,
                scrollAmount: 2
            }
        });
    }
}

class SimpleTestAllParams {
    element: JQuery;

    constructor() {
        this.element = $(".content");

        this.element.mCustomScrollbar({
            setWidth: 22,
            setHeight: "40%",
            setTop: 0,
            setLeft: 22,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: true,
            autoHideScrollbar: false,
            autoExpandScrollbar: false,
            alwaysShowScrollbar: 0,
            snapAmount: [3,3],
            snapOffset: 3,
            mouseWheel: {
                enable: true,
                scrollAmount: 1,
                axis:"x",
                preventDefault: false,
                deltaFactor:12,
                normalizeDelta:true,
                invert: false,
                disableOver: ["select","option"]

            },
            scrollButtons: {
                enable: false,
                scrollType: "stepped",
                scrollAmount: 40,
                tabindex: 33,
            },
            keyboard:{
                enable: true,
                scrollAmount:5,
                scrollType:"stepless"
            },
            advanced: {
                updateOnBrowserResize: true,
                updateOnContentResize: false,
                updateOnImageLoad: true,
                updateOnSelectorChange: "ul li",
                extraDraggableSelectors: ".myClass",
                releaseDraggableSelectors: ".myClass",
                autoUpdateTimeout:60,
                autoExpandHorizontalScroll: false,
                autoScrollOnFocus: "input",
            },
            contentTouchScroll: true,
            documentTouchScroll: false,

            callbacks: {
                onCreate: () => { },
                onInit: () => { },
                onScrollStart: () => { },
                onScroll: () => { },
                onTotalScroll: () => { },
                onTotalScrollBack: () => { },
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                whileScrolling: () => { },
                alwaysTriggerOffsets: false,
                onOverflowY: () => { },
                onOverflowX: () => { },
                onOverflowYNone: () => {},
                onOverflowXNone: () => {},
                onBeforeUpdate: () => {},
                onUpdate: () => {},
                onImageLoad: () => {},
                onSelectorChange: () => {},
            },
            theme: "light",
            live: true,
            liveSelector: ".myClass"
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

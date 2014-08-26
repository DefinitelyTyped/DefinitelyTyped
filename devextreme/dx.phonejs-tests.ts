/// <reference path="dx.phonejs.d.ts" />

module Test {
    var url = "http://some-json-service.net/data.json";
    var dsFromUrl = new DevExpress.data.DataSource(url);

    var dsFromObject = new DevExpress.data.DataSource({
        load: function (loadOptions?: DevExpress.data.LoadOptions) {
            return $.ajax(url);
        }
    });

    var application:DevExpress.framework.html.HtmlApplication = new DevExpress.framework.html.HtmlApplication({
        namespace: "global",
        defaultLayout: "slideout",
        navigation: [
            { id: "first", title: "Home", action: "#home" },
            { id: "second", title: "About", action: "#about" }
        ]
    });
    application.router.register(":view/:id", { view: "home", id: undefined });
    application.navigate();

    $("div").appendTo(document.body).dxMap({
        location: [40.749825, -73.987963],
        zoom: 13,
        provider: "googleStatic",
        controls: true,
        routes: [
            {
                weight: 4,
                opacity: 0.75,
                color: "red",
                mode: "walking",
                locations: [
                    [40.737102, -73.990318],
                    [40.749825, -73.987963],
                    [40.75, -73.98],
                    [40.755823, -73.986397]
                ]
            }
        ]
    });
    $("div").appendTo(document.body).dxTabs({
        itemClickAction: function (e: any) {
            console.log(e.itemData.text);
        },
        items: [
            { text: "user" },
            { text: "analytics" },
            { text: "customers" },
            { text: "search" },
            { text: "favorites" }
        ]
    });

    $("div").appendTo(document.body).dxList({
        scrollByContent: true,
        items: ["item1", "item2", "item3"],
        itemHoldAction: function (e: any) { console.log("itemHold"); },
        itemClickAction: function (e: any) { console.log("itemClick"); },
        itemSwipeAction: function (e: any) { console.log("itemSwipe " + e.direction); }
    });
    $("div").appendTo(document.body).dxToast({
        type: 'error',
        message: 'Sample error message'
    });
    $("div").appendTo(document.body).dxPopup({
        closeButton: true,
        title: "Popup title"
    });
    $("div").appendTo(document.body).dxPivot({
        items: [
            { title: "all", text: "all" },
            { title: "unread", text: "unread" },
            { title: "favorites", text: "favorites" }
        ],
        itemSelectAction: function (e: Object) { console.log("itemSelectAction"); }
    });
    $("div").appendTo(document.body).dxLookup({
        items: [
            { id: 1, caption: "red" },
            { id: 3, caption: "blue" },
            { id: 6, caption: "white" },
            { id: 2, caption: "green" },
            { id: 4, caption: "yellow" },
            { id: 5, caption: "orange" },
            { id: 7, caption: "purple" }
        ],
        valueExpr: 'id',
        displayExpr: 'caption',
        itemRender: function (item: any) {
            return "Text is: " + item.caption;
        }
    });
    $("div").appendTo(document.body).dxSlider({
        min: 50,
        value: 75,
        max: 100,
        disabled: false
    });
    $("div").appendTo(document.body).dxNavBar({
        items: [
            { text: "user", icon: "user" },
            { text: "find", icon: "find", disabled: false },
            { text: "favorites", icon: "favorites" },
            { text: "about", icon: "info" },
            { text: "home", icon: "home" },
            { text: "URI", icon: "tips" }
        ],
        itemClickAction: function (e: any) { console.log(e.itemData.text); }
    });
    $("div").appendTo(document.body).dxSwitch({
        value: false,
        onText: 'LongName',
        offText: 'Short',
        width: "100%",
        visible: true
    });
    $("div").appendTo(document.body).dxButton({
        text: "Click me",
        icon: 'add',
        clickAction: function () { console.log("clicked"); }
    });
    $("div").appendTo(document.body).dxOverlay({
        visible: false,
        closeOnOutsideClick: true,
        contentReadyAction: function () {
            $("#hideButton").dxButton({
                text: "Hide",
                clickAction: function () { $("#overlay").data("dxOverlay").option("visible", false); }
            });
        }
    });
    $("div").appendTo(document.body).dxDateBox({
        value: new Date(),
        format: "datetime"
    });
    $("div").appendTo(document.body).dxPopover({
        width: '300',
        height: 'auto',
        visible: true,
        target: '.dx-button'
    });
    $("div").appendTo(document.body).dxTextBox({
        value: "Text",
        placeholder: "Placeholder",
        mode: "email",
        maxLength: 20,
        readOnly: false,
        changeAction: function (e:Object) { console.log("value changed"); },
        valueUpdateAction: function (e:Object) { console.log("value updated"); }
    });
    $("div").appendTo(document.body).dxToolbar({
        items: [
            { align: 'left', widget: 'button', options: { type: 'back', text: 'Back', clickAction: function (e:Object) { console.log("back clicked"); } } },
            { align: 'center', widget: 'button', options: { text: 'button', clickAction: function (e:Object) { console.log("button clicked"); } } },
            { align: 'center', widget: 'button', options: { icon: 'plus', text: 'add', clickAction: function (e:Object) { console.log("plus clicked"); } } },
            { align: 'right', widget: 'button', options: { icon: 'find', clickAction: function (e:Object) { console.log("find clicked"); } }, useMenu: false },
            { text: 'Products', isMenu: true }
        ]
    });
    $("div").appendTo(document.body).dxTileView({
        items: [
            { text: "item1", widthRatio: 1.7, heightRatio: 1.7 },
            { text: "item2", widthRatio: 0.2, heightRatio: 0.2 },
            { text: "item3", widthRatio: 2, heightRatio: 2 }
        ],
        listHeight: 500,
        itemRender: function (item: any) { return "Text is: " + item.text; },
        itemClickAction: function () { console.log("itemClick"); },
        baseItemWidth: 100,
        baseItemHeight: 100,
        itemMargin: 20
    });
    $("div").appendTo(document.body).dxPanorama({
        title: "my panorama",
        items: [
            { header: "first", text: "first item" },
            { text: "second item" },
            { text: "third" },
            { text: "fourth" }
        ],
        selectedIndex: 0,
        backgroundImage: { width: 89, height: 50 },
        itemSelectAction: function () { console.log("item selected"); }
    });
    $("div").appendTo(document.body).dxCheckBox({
        checked: false,
        disabled: false,
        clickAction: function (e:Object) { console.log("clicked"); }
    });
    $("div").appendTo(document.body).dxTextArea({
        value: 'Disabled',
        disabled: true,
        placeholder: "Placeholder"
    });
    $("div").appendTo(document.body).dxLoadPanel({
        message: 'Please wait ...',
        showIndicator: true,
        visible: true
    });
    $("div").appendTo(document.body).dxNumberBox({
        value: 100,
        min: 0,
        max: 200
    });
    $("div").appendTo(document.body).dxSelectBox({
        value: 2,
        dataSource: new DevExpress.data.DataSource([1, 2, 2, 3])
    });
    $("div").appendTo(document.body).dxScrollable({
        useNative: false,
        startAction: function (e:Object) { console.log("start"); },
        endAction: function (e:Object) { console.log("end"); }
    });
    $("div").appendTo(document.body).dxRadioGroup({
        items: [{ text: "0" }, { text: "1" }, { text: "2" }],
        name: "Sample",
        selectedIndex: -1
    });
    $("div").appendTo(document.body).dxScrollView({
        pullDownAction: function (e:Object) { console.log("pulling down"); },
        reachBottomAction: function (e:Object) { console.log("bottom reached"); },
        disabled: false
    });
    $("div").appendTo(document.body).dxActionSheet({
        title: 'Select action',
        items: [
            { text: "Reply", clickAction: function () { console.log("Reply"); } },
            { text: "Forward", clickAction: function () { console.log("Forward"); } },
            { text: "Delete", clickAction: function () { console.log("Delete"); }, type: "danger" },
            { text: "Save Image", clickAction: function () { console.log("Save Image"); }, disabled: true }
        ],
        showTitle: true,
        disabled: false,
        target: '#button'
    });
    $("div").appendTo(document.body).dxRangeSlider({
        start: 30,
        end: 70,
        min: 0,
        max: 100,
        step: 1
    });
    $("div").appendTo(document.body).dxAutocomplete({
        value: "Ivan",
        dataSource: new DevExpress.data.DataSource(["Ivan", "Svyatoslav", "Alexander", "Nikolay", "Dmitry", "Afanasiy", "John", "Nash", "Stacy", "Izabella", "Margarita", "Anna"]),
        placeholder: "Type name, please",
        maxItemsCount: 3,
        minSearchLength: 2,
        searchTimeout: 1000
    });
    $("div").appendTo(document.body).dxDropDownMenu({
        items: ["Item 1", "Item 2", "Item 3"],
        itemTemplate: 'itemWithIcon'
    });
}
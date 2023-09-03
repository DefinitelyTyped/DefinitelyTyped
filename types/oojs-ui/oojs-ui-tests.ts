// #region OO.ui
{
    OO.ui.theme; // $ExpectType Theme

    {
        OO.ui.Keys.UNDEFINED; // $ExpectType Keys.UNDEFINED
        OO.ui.Keys.BACKSPACE; // $ExpectType Keys.BACKSPACE
        OO.ui.Keys.DELETE; // $ExpectType Keys.DELETE
        OO.ui.Keys.LEFT; // $ExpectType Keys.LEFT
        OO.ui.Keys.RIGHT; // $ExpectType Keys.RIGHT
        OO.ui.Keys.UP; // $ExpectType Keys.UP
        OO.ui.Keys.DOWN; // $ExpectType Keys.DOWN
        OO.ui.Keys.ENTER; // $ExpectType Keys.ENTER
        OO.ui.Keys.END; // $ExpectType Keys.END
        OO.ui.Keys.HOME; // $ExpectType Keys.HOME
        OO.ui.Keys.TAB; // $ExpectType Keys.TAB
        OO.ui.Keys.PAGEUP; // $ExpectType Keys.PAGEUP
        OO.ui.Keys.PAGEDOWN; // $ExpectType Keys.PAGEDOWN
        OO.ui.Keys.ESCAPE; // $ExpectType Keys.ESCAPE
        OO.ui.Keys.SHIFT; // $ExpectType Keys.SHIFT
        OO.ui.Keys.SPACE; // $ExpectType Keys.SPACE
    }

    {
        OO.ui.MouseButtons.LEFT; // $ExpectType MouseButtons.LEFT
        OO.ui.MouseButtons.MIDDLE; // $ExpectType MouseButtons.MIDDLE
        OO.ui.MouseButtons.RIGHT; // $ExpectType MouseButtons.RIGHT
    }

    OO.ui.generateElementId(); // $ExpectType string

    const $element = $("div");

    OO.ui.isFocusableElement($element); // $ExpectType boolean

    OO.ui.findFocusable($element, true); // $ExpectType JQuery<HTMLElement>

    OO.ui.getUserLanguages(); // $ExpectType string[]

    {
        const getLocalValueTestObject = {
            en: "foo",
            fr: "bar",
            zh: 1234,
        };

        // $ExpectType string | number | undefined
        OO.ui.getLocalValue(getLocalValueTestObject);

        // $ExpectType string
        OO.ui.getLocalValue(getLocalValueTestObject, null, "en");

        // $ExpectType string
        OO.ui.getLocalValue(getLocalValueTestObject, "en");

        // $ExpectType string
        OO.ui.getLocalValue(getLocalValueTestObject, "en", "zh");

        // $ExpectType number
        OO.ui.getLocalValue(getLocalValueTestObject, "pt", "zh");
    }

    {
        const htmlElement = document.createElement("div");

        // $ExpectType boolean
        OO.ui.contains(htmlElement, htmlElement, true);

        // $ExpectType boolean
        OO.ui.contains([htmlElement], htmlElement);
    }

    // $ExpectType (foo: string) => number
    OO.ui.debounce((foo: string) => 1, 100, true);

    // $ExpectType void
    OO.ui.warnDeprecation("Deprecated!");

    // $ExpectType (foo: string) => number
    OO.ui.throttle((foo: string) => 1, 100);

    {
        const jq = $("<div>");
        const el = document.createElement("div");

        // $ExpectType Element
        OO.ui.infuse(jq);

        // $ExpectType Element
        OO.ui.infuse(el);

        // $ExpectType Element
        OO.ui.infuse("div");
    }

    // $ExpectType string
    OO.ui.msg("key", 1, 2, 3, "foo");

    // $ExpectType () => string
    OO.ui.deferMsg("key", 1, 2, 3, "foo");

    {
        // $ExpectType string
        OO.ui.resolveMsg(() => "foo!");

        // $ExpectType "foo!"
        OO.ui.resolveMsg("foo!");

        // $ExpectType 1
        OO.ui.resolveMsg(1);
    }

    // $ExpectType boolean
    OO.ui.isSafeUrl("https://example.com");

    // $ExpectType boolean
    OO.ui.isMobile();

    // $ExpectType Rectangle
    OO.ui.getViewportSpacing();

    // $ExpectType JQuery<HTMLDivElement>
    OO.ui.getDefaultOverlay();

    {
        OO.ui.alert("Server crashed!").then(() => {});

        OO.ui
            .alert("Server crashed!", {
                title: "Error",
                size: "full",
            })
            .then(() => {});
    }

    {
        OO.ui.confirm("Server crashed!").then(() => {});

        OO.ui
            .confirm("Server crashed!", {
                title: "Error",
                size: "full",
            })
            .then(() => {});
    }

    {
        OO.ui.prompt("Input sth").then(() => {});

        OO.ui
            .prompt("Input sth", {
                title: "Title",
                size: "full",
                textInput: {
                    placeholder: "Placeholder",
                },
            })
            .then(() => {});
    }
}

// #endregion

// #region OO.ui.mixin.AccessKeyedElement
{
    const instance = new OO.ui.mixin.AccessKeyedElement({
        $accessKeyed: $("div"),
        accessKey: "a",
    });

    // $ExpectType string
    instance.getAccessKey();

    // $ExpectType AccessKeyedElement
    instance.setAccessKey("c");

    // $ExpectType void
    instance.setAccessKeyedElement($("div"));

    // $ExpectType string
    instance.formatTitleWithAccessKey("foo");

    // $ExpectType JQuery<HTMLElement>
    instance.$accessKeyed;

    // $ExpectType Deferrable<string> | null
    OO.ui.mixin.AccessKeyedElement.static.accessKey;

    // @ts-expect-error
    OO.ui.mixin.AccessKeyedElement.prototype.$accessKeyed;
}
// #endregion

// #region OO.ui.mixin.ButtonElement
{
    const instance = new OO.ui.mixin.ButtonElement({
        $button: $("<a>"),
        framed: false,
    });

    // $ExpectType boolean
    instance.isFramed();

    // $ExpectType void
    instance.setButtonElement($("<a>"));

    // $ExpectType ButtonElement
    instance.toggleFramed();

    // $ExpectType ButtonElement
    instance.toggleFramed(true);

    // $ExpectType ButtonElement
    instance.setActive(true);

    // $ExpectType boolean
    instance.isActive();

    // $ExpectType JQuery<HTMLElement>
    instance.$button;

    // $ExpectType boolean
    OO.ui.mixin.ButtonElement.static.cancelButtonMouseDownEvents;

    // @ts-expect-error
    OO.ui.mixin.ButtonElement.prototype.$button;
}
// #endregion

// #region OO.ui.mixin.ClippableElement
{
    const instance = new OO.ui.mixin.ClippableElement({
        $clippable: $("<div>"),
        $clippableContainer: $("<div>"),
    });

    // $ExpectType ClippableElement
    instance.clip();

    // $ExpectType "left" | "right"
    instance.getHorizontalAnchorEdge();

    // $ExpectType "top" | "bottom"
    instance.getVerticalAnchorEdge();

    // $ExpectType boolean
    instance.isClipped();

    // $ExpectType boolean
    instance.isClippedHorizontally();

    // $ExpectType boolean
    instance.isClippedVertically();

    // $ExpectType boolean
    instance.isClipping();

    // $ExpectType void
    instance.setClippableContainer($("<div>"));

    // $ExpectType void
    instance.setClippableContainer(null);

    // $ExpectType void
    instance.setClippableElement($("<div>"));

    // $ExpectType void
    instance.setIdealSize(1, 2);

    // $ExpectType void
    instance.setIdealSize("1px", "2px");

    // $ExpectType ClippableElement
    instance.toggleClipping();

    // $ExpectType ClippableElement
    instance.toggleClipping(true);

    // $ExpectType JQuery<HTMLElement>
    instance.$clippable;

    // $ExpectType JQuery<HTMLElement>
    instance.$clippableContainer;

    // @ts-expect-error
    OO.ui.mixin.ClippableElement.prototype.$clippable;

    // @ts-expect-error
    OO.ui.mixin.ClippableElement.prototype.$clippableContainer;
}
// #endregion

// #region OO.ui.mixin.DraggableElement
{
    const instance = new OO.ui.mixin.DraggableElement({
        $handle: $("<div>"),
        draggable: true,
    });

    // $ExpectType boolean
    instance.isDraggable();

    // $ExpectType void
    instance.toggleDraggable(true);

    // $ExpectType JQuery<HTMLElement>
    instance.$handle;

    // $ExpectType boolean
    OO.ui.mixin.DraggableElement.static.cancelButtonMouseDownEvents;

    // @ts-expect-error
    OO.ui.mixin.DraggableElement.prototype.$handle;
}
// #endregion

// #region OO.ui.mixin.DraggableGroupElement
{
    const instance = new OO.ui.mixin.DraggableGroupElement({
        $group: $("<div>"),
        draggable: true,
        items: [],
        orientation: "horizontal",
    });
    const elem = new OO.ui.mixin.DraggableElement();

    // $ExpectType void
    instance.toggleDraggable(true);

    // $ExpectType boolean
    instance.isDraggable();

    // $ExpectType void
    instance.updateIndexes();

    // $ExpectType void
    instance.reorder(elem, 1);

    // $ExpectType void
    instance.setDragItem(elem);

    // $ExpectType void
    instance.unsetDragItem();

    // $ExpectType DraggableElement | null
    instance.getDragItem();

    // $ExpectType JQuery<HTMLElement>
    instance.$group;
}
// #endregion

// #region OO.ui.mixin.FlaggedElement
{
    const instance = new OO.ui.mixin.FlaggedElement({
        $flagged: $("<div>"),
        flags: ["1", "2"],
    });

    // $ExpectType FlaggedElement
    instance.clearFlags();

    // $ExpectType string[]
    instance.getFlags();

    // $ExpectType boolean
    instance.hasFlag("1");

    // $ExpectType void
    instance.setFlaggedElement($("<div>"));

    // $ExpectType FlaggedElement
    instance.setFlags("3");

    // $ExpectType FlaggedElement
    instance.setFlags(["3", "4"]);

    // $ExpectType FlaggedElement
    instance.setFlags({
        "3": false,
        "4": true,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$flagged;

    // $ExpectType string | string[] | Record<string, boolean>
    OO.ui.mixin.FlaggedElement.static.flags;

    // @ts-expect-error
    OO.ui.mixin.FlaggedElement.prototype.$flagged;
}
// #endregion

// #region OO.ui.mixin.FloatableElement
{
    const instance = new OO.ui.mixin.FloatableElement({
        $floatable: $("<div>"),
        $floatableContainer: $("<div>"),
        hideWhenOutOfView: true,
        verticalPosition: "above",
        horizontalPosition: "after",
    });

    {
        const pos = instance.computePosition();
        pos.bottom; // $ExpectType number | ""
        pos.left; // $ExpectType number | ""
        pos.right; // $ExpectType number | ""
        pos.top; // $ExpectType number | ""
    }

    // $ExpectType boolean
    instance.isFloatableOutOfView();

    // $ExpectType FloatableElement
    instance.position();

    // $ExpectType void
    instance.setFloatableContainer($("<div>"));

    // $ExpectType void
    instance.setFloatableContainer(null);

    // $ExpectType void
    instance.setFloatableElement($("<div>"));

    // $ExpectType void
    instance.setHorizontalPosition("before");

    // $ExpectType void
    instance.setVerticalPosition("below");

    // $ExpectType FloatableElement
    instance.togglePositioning();

    // $ExpectType FloatableElement
    instance.togglePositioning(true);

    // $ExpectType JQuery<HTMLElement>
    instance.$floatable;

    // $ExpectType JQuery<HTMLElement>
    instance.$floatableContainer;

    // @ts-expect-error
    OO.ui.mixin.FloatableElement.$floatable;

    // @ts-expect-error
    OO.ui.mixin.FloatableElement.$floatableContainer;
}
// #endregion

// #region OO.ui.mixin.GroupElement
{
    const instance = new OO.ui.mixin.GroupElement({
        $group: $("<div>"),
    });
    const elem = new OO.ui.Element();
    const jq = $("<div>");

    // $ExpectType void
    instance.setGroupElement(jq);

    // $ExpectType Element | null
    instance.findItemFromData(1);

    // $ExpectType Element[]
    instance.findItemsFromData(1);

    // $ExpectType GroupElement
    instance.addItems([elem], 1);

    // $ExpectType GroupElement
    instance.addItems([elem]);

    // $ExpectType GroupElement
    instance.removeItems([elem]);

    // $ExpectType GroupElement
    instance.clearItems();

    // $ExpectType JQuery<HTMLElement>
    instance.$group;

    // @ts-expect-error
    OO.ui.mixin.GroupElement.prototype.$group;
}
// #endregion

// #region OO.ui.mixin.IconElement
{
    // $ExpectType string | Record<string, string> | null
    OO.ui.mixin.IconElement.static.icon;

    // $ExpectType Deferrable<string> | null
    OO.ui.mixin.IconElement.static.iconTitle;

    const instance = new OO.ui.mixin.IconElement({
        $icon: $("<span>"),
        icon: { default: "bold-a", en: "bold-b", de: "bold-f" },
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$icon;

    // $ExpectType string
    instance.getIcon();

    // $ExpectType IconElement
    instance.setIcon("bold-a");

    // $ExpectType IconElement
    instance.setIcon(null);

    // $ExpectType void
    instance.setIconElement($("<span>"));

    // @ts-expect-error
    OO.ui.mixin.IconElement.prototype.$icon;
}
// #endregion

// #region OO.ui.mixin.IndicatorElement
{
    const instance = new OO.ui.mixin.IndicatorElement({
        $indicator: $("<span>"),
        indicator: "down",
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$indicator;

    // $ExpectType string | null
    instance.getIndicator();

    // $ExpectType void
    instance.setIndicatorElement($("<span>"));

    // $ExpectType IndicatorElement
    instance.setIndicator("clear");

    // @ts-expect-error
    OO.ui.mixin.IndicatorElement.prototype.$indicator;

    // $ExpectType string | null
    OO.ui.mixin.IndicatorElement.static.indicator;

    // $ExpectType Deferrable<string> | null
    OO.ui.mixin.IndicatorElement.static.indicatorTitle;
}
// #endregion

// #region OO.ui.mixin.LabelElement
{
    // $ExpectType Deferrable<string> | null
    OO.ui.mixin.LabelElement.static.label;

    // $ExpectType JQuery<HTMLElement>
    OO.ui.mixin.LabelElement.static.highlightQuery("foobar", "foo");

    const instance = new OO.ui.mixin.LabelElement({
        $label: $("<span>"),
        label: "foobar",
        invisibleLabel: true,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$label;

    // $ExpectType string | JQuery<HTMLElement> | null
    instance.getLabel();

    // $ExpectType LabelElement
    instance.setHighlightedQuery("foobar", "foo");

    // $ExpectType LabelElement
    instance.setInvisibleLabel(false);

    // $ExpectType LabelElement
    instance.setLabel("foo baz");

    // $ExpectType void
    instance.setLabelElement($("<span>"));

    // $ExpectType LabelElement
    instance.setLabelId("id");

    // @ts-expect-error
    OO.ui.mixin.LabelElement.prototype.$label;
}
// #endregion

// #region OO.ui.mixin.LookupElement
{
    const jq = $();

    const instance = new OO.ui.mixin.LookupElement({
        $container: jq,
        $overlay: jq,
        allowSuggestionsWhenEmpty: true,
        highlightFirst: true,
        menu: {
            autoHide: false,
        },
        showPendingRequest: true,
        showSuggestionsOnFocus: true,
    });

    // $ExpectType void
    instance.setLookupsDisabled(false);

    // $ExpectType LookupElement
    instance.setReadOnly(true);
}
// #endregion

// #region OO.ui.mixin.PendingElement
{
    const instance = new OO.ui.mixin.PendingElement({
        $pending: $(),
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$pending;

    // $ExpectType boolean
    instance.isPending();

    // $ExpectType PendingElement
    instance.popPending();

    // $ExpectType PendingElement
    instance.pushPending();

    // $ExpectType void
    instance.setPendingElement($());

    // @ts-expect-error
    OO.ui.mixin.PendingElement.prototype.$pending;
}
// #endregion

// #region OO.ui.mixin.PopupElement
{
    // $ExpectType {}
    OO.ui.mixin.PopupElement.static;

    const instance = new OO.ui.mixin.PopupElement({
        popup: {
            $content: $("<p>Hi there!</p>"),
            padded: true,
            width: 300,
        },
    });

    // $ExpectType PopupWidget
    instance.getPopup();
}
// #endregion

// #region OO.ui.mixin.RequestManager
{
    const instance = new OO.ui.mixin.RequestManager({
        showPendingRequest: true,
    });

    instance.getRequestData().then(data => {
        data; // $ExpectType unknown
    });
}
// #endregion

// #region OO.ui.mixin.RequiredElement
{
    const instance = new OO.ui.mixin.RequiredElement({
        $required: $(),
        indicatorElement: new OO.ui.Element(),
        required: false,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$required;

    // $ExpectType boolean
    instance.isRequired();

    // $ExpectType RequiredElement
    instance.setRequired(true);

    // $ExpectType void
    instance.setRequiredElement($());

    // @ts-expect-error
    OO.ui.mixin.RequiredElement.prototype.$required;
}
// #endregion

// #region OO.ui.mixin.TabIndexedElement
{
    const instance = new OO.ui.mixin.TabIndexedElement({
        $tabIndexed: $(),
        tabIndex: "123",
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$tabIndexed;

    // $ExpectType TabIndexedElement
    instance.blur();

    // $ExpectType TabIndexedElement
    instance.focus();

    // $ExpectType string | null
    instance.getInputId();

    // $ExpectType number | null
    instance.getTabIndex();

    // $ExpectType TabIndexedElement
    instance.setTabIndex(234);

    // $ExpectType TabIndexedElement
    instance.setTabIndexedElement($());

    // @ts-expect-error
    OO.ui.mixin.TabIndexedElement.prototype.$tabIndexed;
}
// #endregion

// #region OO.ui.mixin.TitledElement
{
    const instance = new OO.ui.mixin.TitledElement({
        $titled: $(),
        title: () => "title",
    });

    // $ExpectType string | null
    instance.getTitle();

    // $ExpectType TitledElement
    instance.setTitle("new title");

    // $ExpectType void
    instance.setTitledElement($());

    // $ExpectType JQuery<HTMLElement>
    instance.$titled;

    // @ts-expect-error
    OO.ui.mixin.TitledElement.$titled;
}
// #endregion

// #region OO.ui.ActionFieldLayout
{
    // $ExpectType FieldLayout<Widget>
    new OO.ui.ActionFieldLayout.super(new OO.ui.Widget());

    const instance = new OO.ui.ActionFieldLayout(
        new OO.ui.TextInputWidget({
            placeholder: "Field widget",
        }),
        new OO.ui.ButtonWidget({
            label: "Button",
        }),
        {
            label: "An ActionFieldLayout. This label is aligned top",
            align: "top",
            help: "This is help text",
        },
    );

    // $ExpectType TextInputWidget
    instance.getField();

    // $ExpectType Widget
    OO.ui.ActionFieldLayout.prototype.getField();
}
// #endregion

// #region OO.ui.ActionSet
{
    // $ExpectType string[]
    OO.ui.ActionSet.static.specialFlags;

    const instance = new OO.ui.ActionSet();

    const widget = new OO.ui.ActionWidget();

    // $ExpectType boolean
    instance.isSpecial(widget);

    {
        // $ExpectType ActionWidget[]
        instance.get();

        instance.get({
            actions: ["continue"],
            disabled: true,
            flags: ["safe"],
            modes: ["edit"],
            visible: false,
        });

        instance.get({
            actions: "continue",
            flags: "safe",
            modes: "edit",
        });
    }

    // $ExpectType ActionWidget[] | null
    instance.getSpecial();

    // $ExpectType ActionWidget[]
    instance.getOthers();

    // $ExpectType ActionSet
    instance.setMode("view");

    // $ExpectType ActionSet
    instance.setAbilities({
        continue: false,
    });

    {
        // $ExpectType ActionSet
        instance.forEach(
            {
                actions: ["continue"],
                disabled: true,
                flags: ["safe"],
                modes: ["edit"],
                visible: false,
            },
            (action, index, list) => {
                action; // $ExpectType ActionWidget
                index; // $ExpectType number
                list; // $ExpectType ActionWidget[]
            },
        );

        instance.forEach(null, () => {});
    }

    // $ExpectType ActionSet
    instance.add([widget]);

    // $ExpectType ActionSet
    instance.remove([widget]);

    instance.on("add", added => {
        added; // $ExpectType ActionWidget[]
    }).on;

    instance.on("change", () => {});

    instance.on("click", action => {
        action; // $ExpectType ActionWidget
    });

    instance.on("remove", removed => {
        removed; // $ExpectType ActionWidget[]
    });
}
// #endregion

// #region OO.ui.ActionWidget
{
    // $ExpectType ButtonWidget
    new OO.ui.ActionWidget.super();

    const instance = new OO.ui.ActionWidget({
        action: "continue",
        modes: ["edit"],
        label: "Continue",
        flags: ["primary", "progressive"],
    });

    // $ExpectType boolean
    instance.hasMode("edit");

    // $ExpectType string
    instance.getAction();

    // $ExpectType string[]
    instance.getModes();
}
// #endregion

// #region OO.ui.ApexTheme
{
    // $ExpectType Theme
    new OO.ui.ApexTheme.super();

    const instance = new OO.ui.ApexTheme();
}
// #endregion

// #region OO.ui.BarToolGroup
{
    const toolbar = new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory());

    // $ExpectType ToolGroup
    new OO.ui.BarToolGroup.super(toolbar);

    const instance = new OO.ui.BarToolGroup(toolbar);
}
// #endregion

// #region OO.ui.BlankTheme
{
    // $ExpectType Theme
    new OO.ui.BlankTheme.super();

    const instance = new OO.ui.BlankTheme();
}
// #endregion

// #region OO.ui.BookletLayout
{
    // $ExpectType MenuLayout
    new OO.ui.BookletLayout.super();

    const instance = new OO.ui.BookletLayout({
        continuous: false,
        autoFocus: false,
        outlined: true,
        editable: false,
    });

    instance.focus(); // $ExpectType

    instance.focus(1); // $ExpectType

    instance.focusFirstFocusable(); // $ExpectType

    instance.isOutlined(); // $ExpectType boolean

    instance.isEditable(); // $ExpectType boolean

    instance.isOutlineVisible(); // $ExpectType boolean

    instance.toggleOutline(); // $ExpectType BookletLayout

    instance.toggleOutline(true); // $ExpectType BookletLayout

    instance.findClosestPage(new OO.ui.PageLayout("123")); // $ExpectType PageLayout | null

    instance.getOutline(); // $ExpectType OutlineSelectWidget | null

    instance.getOutlineControls(); // $ExpectType OutlineControlsWidget | null

    instance.getPage("123"); // $ExpectType PageLayout | undefined

    instance.getCurrentPage(); // $ExpectType PageLayout | undefined

    instance.getCurrentPageName(); // $ExpectType string | null

    instance.addPages([new OO.ui.PageLayout("123")], 1); // $ExpectType BookletLayout

    instance.removePages([new OO.ui.PageLayout("123")]); // $ExpectType BookletLayout

    instance.clearPages(); // $ExpectType BookletLayout

    instance.setPage("123"); // $ExpectType void

    instance.selectFirstSelectablePage(); // $ExpectType BookletLayout
}
// #endregion

// #region OO.ui.ButtonGroupWidget
{
    // $ExpectType Widget
    new OO.ui.ButtonGroupWidget.super();

    const button2 = new OO.ui.ButtonWidget({
        label: "Add item",
    });

    const instance = new OO.ui.ButtonGroupWidget({
        items: [button2],
    });

    instance.focus(); // $ExpectType ButtonGroupWidget

    instance.on("toggle", visible => {
        visible; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.ButtonInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.ButtonInputWidget.super();

    const instance = new OO.ui.ButtonInputWidget({
        type: "submit",
        useInputTag: false,
    });

    instance.setLabel("123"); // $ExpectType ButtonInputWidget

    instance.setLabel($()); // $ExpectType ButtonInputWidget

    instance.setLabel(() => "123"); // $ExpectType ButtonInputWidget

    // tslint:disable-next-line:no-unnecessary-callback-wrapper
    instance.setLabel(() => $()); // $ExpectType ButtonInputWidget

    instance.setLabel(null); // $ExpectType ButtonInputWidget

    instance.setValue("value"); // $ExpectType ButtonInputWidget

    instance.on("labelChange", () => {});
}
// #endregion

// #region OO.ui.ButtonMenuSelectWidget
{
    // $ExpectType ButtonWidget
    new OO.ui.ButtonMenuSelectWidget.super();

    const instance = new OO.ui.ButtonMenuSelectWidget({
        icon: "menu",
        menu: {
            items: [
                new OO.ui.MenuOptionWidget({
                    data: "a",
                    label: "First",
                }),
                new OO.ui.MenuOptionWidget({
                    data: "b",
                    label: "Second",
                }),
                new OO.ui.MenuOptionWidget({
                    data: "c",
                    label: "Third",
                }),
            ],
        },
        menuClass: OO.ui.MenuSelectWidget,
    });

    instance.getMenu(); // $ExpectType MenuSelectWidget
}
// #endregion

// #region OO.ui.ButtonOptionWidget
{
    // $ExpectType OptionWidget
    new OO.ui.ButtonOptionWidget.super();

    const instance = new OO.ui.ButtonOptionWidget({
        label: "Select",
    });

    instance.on("labelChange", () => {});
}
// #endregion

// #region OO.ui.ButtonSelectWidget
{
    // $ExpectType SelectWidget
    new OO.ui.ButtonSelectWidget.super();

    const option1 = new OO.ui.ButtonOptionWidget({
        data: 1,
        label: "Option 1",
        title: "Button option 1",
    });
    const option2 = new OO.ui.ButtonOptionWidget({
        data: 2,
        label: "Option 2",
        title: "Button option 2",
    });
    const option3 = new OO.ui.ButtonOptionWidget({
        data: 3,
        label: "Option 3",
        title: "Button option 3",
    });
    const instance = new OO.ui.ButtonSelectWidget({
        items: [option1, option2, option3],
    });
}
// #endregion

// #region OO.ui.ButtonWidget
{
    // $ExpectType Widget
    new OO.ui.ButtonWidget.super();

    // $ExpectType Deferrable<string> | null
    OO.ui.ButtonWidget.static.accessKey;

    // $ExpectType boolean
    OO.ui.ButtonWidget.static.cancelButtonMouseDownEvents;

    // $ExpectType string | Record<string, string> | null
    OO.ui.ButtonWidget.static.icon;

    const instance = new OO.ui.ButtonWidget({
        label: "Button with Icon",
        icon: "trash",
        title: "Remove",
        flags: "progressive",
    });

    // $ExpectType string | null
    instance.getHref();

    // $ExpectType string | null
    instance.getTarget();

    // $ExpectType boolean
    instance.getNoFollow();

    // $ExpectType string[]
    instance.getRel();

    // $ExpectType ButtonWidget
    instance.setHref("/index.php");

    // $ExpectType ButtonWidget
    instance.setHref(null);

    // $ExpectType ButtonWidget
    instance.setTarget("_blank");

    // $ExpectType ButtonWidget
    instance.setTarget(null);

    // $ExpectType ButtonWidget
    instance.setNoFollow(true);

    // $ExpectType ButtonWidget
    instance.setRel();

    // $ExpectType ButtonWidget
    instance.setRel("canonical");

    // $ExpectType ButtonWidget
    instance.setRel(["canonical", "nofollow"]);

    // $ExpectType ButtonWidget
    instance.on("click", () => {});

    instance.on("disable", disabled => {
        disabled; // $ExpectType boolean
    });

    instance.on("flag", changes => {
        changes; // $ExpectType Record<string, boolean>
    });

    instance.on("labelChange", () => {});

    instance.on("toggle", visible => {
        visible; // $ExpectType boolean
    });

    // $ExpectType ButtonWidget
    instance.connect(instance, {
        click() {
            this; // $ExpectType ButtonWidget
        },
        toggle: disabled => {
            disabled; // $ExpectType boolean
        },
        nonExist: arg => {
            arg; // $ExpectType any
        },
    });
}
// #endregion

// #region OO.ui.CheckboxInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.CheckboxInputWidget.super();

    const instance = new OO.ui.CheckboxInputWidget({
        value: "a",
        selected: true,
    });
    const instance1 = new OO.ui.CheckboxInputWidget({
        value: "b",
    });
    const instance2 = new OO.ui.CheckboxInputWidget({
        value: "c",
        disabled: true,
    });
    const fieldset = new OO.ui.FieldsetLayout({
        label: "Checkboxes",
    });
    fieldset.addItems([
        new OO.ui.FieldLayout(instance, { label: "Selected checkbox", align: "inline" }),
        new OO.ui.FieldLayout(instance1, { label: "Unselected checkbox", align: "inline" }),
        new OO.ui.FieldLayout(instance2, { label: "Disabled checkbox", align: "inline" }),
    ]);

    // $ExpectType CheckboxInputWidget
    instance.setSelected(true);

    instance.isSelected(); // $ExpectType boolean

    // $ExpectType CheckboxInputWidget
    instance.setIndeterminate(true);

    instance.isIndeterminate(); // $ExpectType boolean

    instance.on("change", (selected, indeterminate) => {
        selected; // $ExpectType string | boolean
        indeterminate; // $ExpectType boolean | undefined
    });
}
// #endregion

// #region OO.ui.CheckboxMultioptionWidget
{
    // $ExpectType MultioptionWidget
    new OO.ui.CheckboxMultioptionWidget.super();

    const instance = new OO.ui.CheckboxMultioptionWidget();

    instance.focus(); // $ExpectType void
}
// #endregion

// #region OO.ui.CheckboxMultiselectInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.CheckboxMultiselectInputWidget.super();

    const instance = new OO.ui.CheckboxMultiselectInputWidget({
        options: [
            { data: "a", label: "First" },
            { data: "b", label: "Second" },
            { data: "c", label: "Third" },
        ],
    });

    // $ExpectType string[]
    instance.cleanUpValue([""]);

    // $ExpectType CheckboxMultiselectInputWidget
    instance.setOptions([
        { data: "a", label: "First" },
        { data: "b", label: "Second" },
        { data: "c", label: "Third" },
    ]);
}
// #endregion

// #region OO.ui.CheckboxMultiselectWidget
{
    // $ExpectType MultiselectWidget
    new OO.ui.CheckboxMultiselectWidget.super();

    const option1 = new OO.ui.CheckboxMultioptionWidget({
        data: "a",
        selected: true,
        label: "Selected checkbox",
    });
    const option2 = new OO.ui.CheckboxMultioptionWidget({
        data: "b",
        label: "Unselected checkbox",
    });

    const instance = new OO.ui.CheckboxMultiselectWidget({
        items: [option1, option2],
    });

    // $ExpectType CheckboxMultioptionWidget | null
    instance.getRelativeFocusableItem(null, 1);

    // $ExpectType CheckboxMultioptionWidget | null
    instance.getRelativeFocusableItem(option1, -1);

    instance.onClick($.Event("click")); // $ExpectType void

    instance.focus(); // $ExpectType CheckboxMultiselectWidget
}
// #endregion

// #region OO.ui.ComboBoxInputWidget
{
    // $ExpectType TextInputWidget
    new OO.ui.ComboBoxInputWidget.super();

    const instance = new OO.ui.ComboBoxInputWidget({
        value: "Option 1",
        options: [{ data: "Option 1" }, { data: "Option 2" }, { data: "Option 3" }],
        menu: {
            classes: ["class1"],
        },
        $overlay: OO.ui.getDefaultOverlay(),
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$overlay;

    // $ExpectType JQuery<HTMLElement>
    instance.$field;

    instance.getMenu(); // $ExpectType MenuSelectWidget

    instance.getInput(); // $ExpectType TextInputWidget

    // $ExpectType ComboBoxInputWidget
    instance.setOptions([{ data: "Option 1" }, { data: "Option 2" }, { data: "Option 3" }]);

    // @ts-expect-error
    OO.ui.ComboBoxInputWidget.prototype.$overlay;

    // @ts-expect-error
    OO.ui.ComboBoxInputWidget.prototype.$field;
}
// #endregion

// #region OO.ui.DecoratedOptionWidget
{
    // $ExpectType OptionWidget
    new OO.ui.DecoratedOptionWidget.super();

    const instance = new OO.ui.DecoratedOptionWidget();
}
// #endregion

// #region OO.ui.Dialog
{
    // $ExpectType Window
    new OO.ui.Dialog.super();

    // $ExpectType string
    OO.ui.Dialog.static.name;

    // $ExpectType JQuery<HTMLElement> | Deferrable<string> | null
    OO.ui.Dialog.static.title;

    // $ExpectType ConfigOptions[]
    OO.ui.Dialog.static.actions;

    // $ExpectType boolean
    OO.ui.Dialog.static.escapable;

    const instance = new OO.ui.Dialog();

    // $ExpectType ActionSet
    instance.getActions();

    // $ExpectType Process
    instance.getActionProcess("continue");

    {
        // $ExpectType Process
        instance.getSetupProcess({
            title: "Dialog title",
            actions: [
                {
                    action: "continue",
                    flags: ["primary", "progressive"],
                },
            ],
            extraProperty: 1,
        });

        // $ExpectType Process
        instance.getSetupProcess(1);

        // @ts-expect-error
        instance.getSetupProcess({
            title: 123,
        });
    }

    // $ExpectType ActionWidget[]
    instance.getActionWidgets([
        {
            title: "Continue",
            action: "continue",
        },
    ]);

    // $ExpectType ActionWidget
    instance.getActionWidget({
        title: "Continue",
        action: "continue",
    });

    // $ExpectType ConfigOptions
    instance.getActionWidgetConfig({
        title: "Continue",
        action: "continue",
    });

    instance.executeAction("continue").then(
        () => {},
        err => {
            err; // $ExpectType [] | [Error]
        },
    );
}
// #endregion

// #region OO.ui.DropdownInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.DropdownInputWidget.super();

    const instance = new OO.ui.DropdownInputWidget({
        options: [
            { data: "a", label: "First" },
            { data: "b", label: "Second", disabled: true },
            { optgroup: "Group label" },
            { data: "c", label: "First sub-item" },
        ],
        dropdown: {
            icon: "add",
        },
        $overlay: OO.ui.getDefaultOverlay(),
    });

    // $ExpectType DropdownInputWidget
    instance.setOptions([{ optgroup: "Group label" }, { data: "a", label: "First" }]);
}
// #endregion

// #region OO.ui.DropdownWidget
{
    // $ExpectType Widget
    new OO.ui.DropdownWidget.super();

    const instance = new OO.ui.DropdownWidget({
        label: "Dropdown menu: Select a menu option",
        menu: {
            items: [
                new OO.ui.MenuOptionWidget({
                    data: "a",
                    label: "First",
                }),
                new OO.ui.MenuOptionWidget({
                    data: "b",
                    label: "Second",
                }),
                new OO.ui.MenuOptionWidget({
                    data: "c",
                    label: "Third",
                }),
            ],
        },
    });

    // $ExpectType MenuSelectWidget
    instance.getMenu();
}
// #endregion

// #region OO.ui.Element
{
    const el = document.createElement("div");
    const jq = $("<div>");

    {
        // $ExpectType number
        OO.ui.Element.static.computeNativeScrollLeft(1, el);

        // $ExpectType number
        OO.ui.Element.static.computeNativeScrollLeft(1, window);
    }

    {
        // $ExpectType number
        OO.ui.Element.static.computeNormalizedScrollLeft(1, el);

        // $ExpectType number
        OO.ui.Element.static.computeNormalizedScrollLeft(1, window);
    }

    {
        // $ExpectType Rectangle
        OO.ui.Element.static.getBorders(el);
    }

    {
        // $ExpectType HTMLElement
        OO.ui.Element.static.getClosestScrollableContainer(el);

        // $ExpectType HTMLElement
        OO.ui.Element.static.getClosestScrollableContainer(el, "x");
    }

    {
        // $ExpectType Dimension
        OO.ui.Element.static.getDimensions(el);

        const result = OO.ui.Element.static.getDimensions(window);

        result.border.bottom; // $ExpectType number
        result.border.left; // $ExpectType number
        result.border.right; // $ExpectType number
        result.border.top; // $ExpectType number

        result.rect.bottom; // $ExpectType number
        result.rect.left; // $ExpectType number
        result.rect.right; // $ExpectType number
        result.rect.top; // $ExpectType number

        result.scroll.left; // $ExpectType number
        result.scroll.top; // $ExpectType number
        result.scrollbar.bottom; // $ExpectType number
        result.scrollbar.right; // $ExpectType number
    }

    {
        // $ExpectType Direction
        OO.ui.Element.static.getDir(document);

        // $ExpectType Direction
        OO.ui.Element.static.getDir(window);

        // $ExpectType Direction
        OO.ui.Element.static.getDir(jq);

        // $ExpectType Direction
        OO.ui.Element.static.getDir(el);
    }

    {
        // $ExpectType Document | null
        OO.ui.Element.static.getDocument(document);

        // $ExpectType Document | null
        OO.ui.Element.static.getDocument(window);

        // $ExpectType Document | null
        OO.ui.Element.static.getDocument(jq);

        // $ExpectType Document | null
        OO.ui.Element.static.getDocument(el);
    }

    {
        // $ExpectType Coordinate
        OO.ui.Element.static.getFrameOffset(window);

        // $ExpectType Coordinate
        OO.ui.Element.static.getFrameOffset(window, window);
    }

    {
        // $ExpectType Coordinate
        OO.ui.Element.static.getRelativePosition(jq, jq);
    }

    {
        // $ExpectType HTMLBodyElement | HTMLHtmlElement
        OO.ui.Element.static.getRootScrollableElement(el);
    }

    {
        // $ExpectType number
        OO.ui.Element.static.getScrollLeft(el);

        // $ExpectType number
        OO.ui.Element.static.getScrollLeft(window);
    }

    {
        // $ExpectType Window
        OO.ui.Element.static.getWindow(document);

        // $ExpectType Window
        OO.ui.Element.static.getWindow(window);

        // $ExpectType Window
        OO.ui.Element.static.getWindow(jq);

        // $ExpectType Window
        OO.ui.Element.static.getWindow(el);
    }

    {
        // $ExpectType Element
        OO.ui.Element.static.infuse(el);

        // $ExpectType Element
        OO.ui.Element.static.infuse(jq);

        // $ExpectType Element
        OO.ui.Element.static.infuse(el, {});
    }

    {
        // $ExpectType void
        OO.ui.Element.static.reconsiderScrollbars(el);
    }

    {
        // $ExpectType Promise<void, any, any>
        OO.ui.Element.static.scrollIntoView(el);

        OO.ui.Element.static
            .scrollIntoView(
                { top: 0, right: 0, bottom: 0, left: 0 },
                {
                    alignToTop: false,
                    animate: true,
                    direction: "x",
                    duration: "fast",
                    padding: { top: 0, right: 0, bottom: 0, left: 0 },
                    scrollContainer: el,
                },
            )
            .then(function() {});
    }

    {
        // $ExpectType void
        OO.ui.Element.static.setScrollLeft(el, 1);

        // $ExpectType void
        OO.ui.Element.static.setScrollLeft(window, 1);
    }

    {
        // $ExpectType string
        OO.ui.Element.static.tagName;
    }

    {
        const instance = new OO.ui.Element({
            $element: $("<div>"),
            $content: $("<div>"),
            classes: ["class1", "class2"],
            content: ["<div>Escaped!</div>", new OO.ui.HtmlSnippet("<div>HTML!</div>"), new OO.ui.Element()],
            data: 123,
            id: "header",
            text: "Some nice words",
        });

        instance.$element; // $ExpectType JQuery<HTMLElement>

        {
            instance.toggle(true); // $ExpectType Element

            instance.toggle(); // $ExpectType Element
        }

        instance.isVisible(); // $ExpectType boolean

        instance.getData(); // $ExpectType unknown

        instance.setData(1); // $ExpectType Element

        instance.setElementId("newId"); // $ExpectType Element

        instance.getElementId(); // $ExpectType string

        {
            instance.supports("supports"); // $ExpectType boolean

            instance.supports(["supports", "unsupported"]); // $ExpectType boolean
        }

        instance.updateThemeClasses(); // $ExpectType void

        instance.getTagName(); // $ExpectType string

        instance.isElementAttached(); // $ExpectType boolean

        instance.getElementDocument(); // $ExpectType Document

        instance.getElementWindow(); // $ExpectType Window

        instance.getClosestScrollableElementContainer(); // $ExpectType HTMLElement

        instance.getElementGroup(); // $ExpectType GroupElement | null

        instance.setElementGroup(null); // $ExpectType Element

        instance.setElementGroup(new OO.ui.mixin.GroupElement()); // $ExpectType Element

        {
            instance.scrollElementIntoView(); // $ExpectType Promise<void, any, any>

            instance
                .scrollElementIntoView({
                    alignToTop: false,
                    animate: true,
                    direction: "x",
                    duration: "fast",
                    padding: { top: 0, right: 0, bottom: 0, left: 0 },
                    scrollContainer: el,
                })
                .then(function() {});
        }
    }

    // @ts-expect-error
    OO.ui.Element.prototype.$element;
}
// #endregion

// #region OO.ui.Error
{
    const instance = new OO.ui.Error("Server crashed!");

    const instance1 = new OO.ui.Error("Server crashed!", {
        recoverable: false,
        warning: false,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.getMessage();

    // $ExpectType string
    instance.getMessageText();

    // $ExpectType boolean
    instance.isRecoverable();

    // $ExpectType boolean
    instance.isWarning();
}
// #endregion

// #region OO.ui.FieldLayout
{
    // $ExpectType Layout
    new OO.ui.FieldLayout.super();

    const instance = new OO.ui.FieldLayout(new OO.ui.ButtonWidget(), {
        align: "inline",
        errors: ["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")],
        warnings: ["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")],
        successMessages: ["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")],
        notices: ["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")],
        help: new OO.ui.HtmlSnippet("<div>Text</div>"),
        helpInline: false,
        $overlay: OO.ui.getDefaultOverlay(),
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$field;

    // $ExpectType JQuery<HTMLElement>
    instance.$messages;

    // $ExpectType JQuery<HTMLElement>
    instance.$header;

    // $ExpectType JQuery<HTMLElement>
    instance.$body;

    // $ExpectType JQuery<HTMLElement>
    instance.$help;

    // $ExpectType Event
    instance.onLabelClick();

    // $ExpectType ButtonWidget
    instance.getField();

    // $ExpectType boolean
    instance.isFieldInline();

    // $ExpectType FieldLayout<ButtonWidget>
    instance.setErrors(["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")]);

    // $ExpectType FieldLayout<ButtonWidget>
    instance.setWarnings(["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")]);

    // $ExpectType FieldLayout<ButtonWidget>
    instance.setSuccess(["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")]);

    // $ExpectType FieldLayout<ButtonWidget>
    instance.setNotices(["Text 1", new OO.ui.HtmlSnippet("<div>Text 2</div>")]);

    instance.on("labelChange", () => {});

    // @ts-expect-error
    OO.ui.FieldLayout.prototype.$field;

    // @ts-expect-error
    OO.ui.FieldLayout.prototype.$messages;

    // @ts-expect-error
    OO.ui.FieldLayout.prototype.$header;

    // @ts-expect-error
    OO.ui.FieldLayout.prototype.$body;

    // @ts-expect-error
    OO.ui.FieldLayout.prototype.$help;

    // $ExpectType Widget
    OO.ui.FieldLayout.prototype.getField();
}
// #endregion

// #region OO.ui.FieldsetLayout
{
    // $ExpectType Layout
    new OO.ui.FieldsetLayout.super();

    const input1 = new OO.ui.TextInputWidget({
        placeholder: "A text input field",
    });
    const input2 = new OO.ui.TextInputWidget({
        placeholder: "A text input field",
    });
    const instance = new OO.ui.FieldsetLayout({
        label: "Example of a fieldset layout",
    });

    instance.addItems([
        new OO.ui.FieldLayout(input1, {
            label: "Field One",
        }),
        new OO.ui.FieldLayout(input2, {
            label: "Field Two",
        }),
    ]);

    // $ExpectType JQuery<HTMLElement>
    instance.$header;

    instance
        .once("add", (items, index) => {
            items; // $ExpectType EventEmitter
            index; // $ExpectType number
        })
        .once("remove", (items, index) => {
            items; // $ExpectType EventEmitter
            index; // $ExpectType number
        })
        .on("change", items => {
            items; // $ExpectType Element[]
        })
        .on("clear", () => {})
        .on("labelChange", () => {})
        .on("move", (item, index, oldIndex) => {
            item; // $ExpectType EventEmitter
            index; // $ExpectType number
            oldIndex; // $ExpectType number
        });

    // @ts-expect-error
    OO.ui.FieldsetLayout.prototype.$header;
}
// #endregion

// #region OO.ui.FormLayout
{
    // $ExpectType Layout
    new OO.ui.FormLayout.super();

    const input1 = new OO.ui.TextInputWidget({
        placeholder: "Username",
    });
    const input2 = new OO.ui.TextInputWidget({
        placeholder: "Password",
        type: "password",
    });
    const fieldset = new OO.ui.FieldsetLayout({
        label: "A form layout",
    });
    fieldset.addItems([
        new OO.ui.FieldLayout(input1, {
            label: "Username",
            align: "top",
        }),
        new OO.ui.FieldLayout(input2, {
            label: "Password",
            align: "top",
        }),
    ]);

    const instance = new OO.ui.FormLayout({
        items: [fieldset],
        action: "/api/formhandler",
        method: "get",
        enctype: "application/x-www-form-urlencoded",
    });

    instance.on("submit", () => {});
}
// #endregion

// #region OO.ui.HiddenInputWidget
{
    // $ExpectType Widget
    new OO.ui.HiddenInputWidget.super();

    const instance = new OO.ui.HiddenInputWidget({
        value: "123",
        name: "name",
    });
}
// #endregion

// #region OO.ui.HorizontalLayout
{
    // $ExpectType Layout
    new OO.ui.HorizontalLayout.super();

    const instance = new OO.ui.HorizontalLayout({
        items: [new OO.ui.PanelLayout(), new OO.ui.TextInputWidget({ value: "Text" })],
    });

    instance.on("change", items => {
        items; // $ExpectType Element[]
    });
}
// #endregion

// #region OO.ui.HtmlSnippet
{
    const instance = new OO.ui.HtmlSnippet("<div>Hello world!</div>");

    // $ExpectType string
    instance.toString();
}
// #endregion

// #region OO.ui.IconWidget
{
    // $ExpectType Widget
    new OO.ui.IconWidget.super();

    const instance = new OO.ui.IconWidget({
        icon: "help",
        title: "Help",
    });

    instance.on("disable", disabled => {
        disabled; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.IndexLayout
{
    // $ExpectType MenuLayout
    new OO.ui.IndexLayout.super();

    const instance = new OO.ui.IndexLayout({
        contentPanel: new OO.ui.StackLayout(),
        continuous: false,
        autoFocus: false,
        framed: false,
    });

    instance.focus(); // $ExpectType void

    instance.focus(1); // $ExpectType void

    instance.focusFirstFocusable(); // $ExpectType void

    instance.getClosestTabPanel(new OO.ui.TabPanelLayout("1")); // $ExpectType TabPanelLayout | null

    instance.getTabs(); // $ExpectType TabSelectWidget

    instance.getTabPanel("123"); // $ExpectType TabPanelLayout | undefined

    instance.getCurrentTabPanel(); // $ExpectType TabPanelLayout | undefined

    instance.getCurrentTabPanelName(); // $ExpectType string | null

    // $ExpectType IndexLayout
    instance.addTabPanels([new OO.ui.TabPanelLayout("aa")], 1);

    // $ExpectType IndexLayout
    instance.removeTabPanels([new OO.ui.TabPanelLayout("aa")]);

    instance.clearTabPanels(); // $ExpectType IndexLayout

    instance.setTabPanel("1"); // $ExpectType void

    instance.selectFirstSelectableTabPanel(); // $ExpectType IndexLayout

    instance
        .on("add", (tabPanels, index) => {
            tabPanels; // $ExpectType TabPanelLayout[]
            index; // $ExpectType number
        })
        .once("remove", tabPanels => {
            tabPanels; // $ExpectType TabPanelLayout[]
        })
        .off("set", tabPanel => {
            tabPanel; // $ExpectType TabPanelLayout
        });
}
// #endregion

// #region OO.ui.IndicatorWidget
{
    // $ExpectType Widget
    new OO.ui.IndicatorWidget.super();

    const instance = new OO.ui.IndicatorWidget({
        indicator: "required",
    });

    instance.on("labelChange", () => {});
}
// #endregion

// #region OO.ui.InputWidget
{
    // $ExpectType Widget
    new OO.ui.InputWidget.super();

    const instance = new OO.ui.InputWidget({
        name: "input",
        value: "initial value",
        dir: "ltr",
        inputId: "input1",
        inputFilter: value => `value: ${value}`,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$input;

    // $ExpectType string
    instance.getValue();

    // $ExpectType InputWidget
    instance.setDir("auto");

    // $ExpectType InputWidget
    instance.setValue("new value");

    // $ExpectType InputWidget
    instance.setInputId("input2");

    instance.on("change", value => {
        value; // $ExpectType string
    });

    instance.on("disable", disabled => {
        disabled; // $ExpectType boolean
    });

    instance.on("toggle", visible => {
        visible; // $ExpectType boolean
    });

    // @ts-expect-error
    OO.ui.InputWidget.prototype.$input;
}
// #endregion

// #region OO.ui.LabelWidget
{
    // $ExpectType Widget
    new OO.ui.LabelWidget.super();

    const instance = new OO.ui.LabelWidget({
        label: "plaintext label",
    });
    const instance1 = new OO.ui.LabelWidget({
        label: $("<a>").attr("href", "default.html").text("jQuery label"),
    });

    instance.on("labelChange", () => {});
}
// #endregion

// #region OO.ui.Layout
{
    // $ExpectType Static
    OO.ui.Layout.static;

    // $ExpectType Element
    new OO.ui.Layout.super();

    const instance = new OO.ui.Layout();

    // $ExpectType Layout
    instance.resetScroll();
}
// #endregion

// #region OO.ui.ListToolGroup
{
    const toolbar = new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory());

    const instance = new OO.ui.ListToolGroup(toolbar, {
        allowCollapse: ["1", "2", "3"],
        forceExpand: ["1", "2"],
        expanded: false,
    });

    instance.getExpandCollapseTool(); // $ExpectType Tool

    instance.updateCollapsibleState(); // $ExpectType void
}
// #endregion

// #region OO.ui.MenuLayout
{
    // $ExpectType Layout
    new OO.ui.MenuLayout.super();

    const menuPanel = new OO.ui.PanelLayout({
        padded: true,
        expanded: true,
        scrollable: true,
    });
    const contentPanel = new OO.ui.PanelLayout({
        padded: true,
        expanded: true,
        scrollable: true,
    });
    const select = new OO.ui.SelectWidget({
        items: [
            new OO.ui.OptionWidget({
                data: "before",
                label: "Before",
            }),
            new OO.ui.OptionWidget({
                data: "after",
                label: "After",
            }),
            new OO.ui.OptionWidget({
                data: "top",
                label: "Top",
            }),
            new OO.ui.OptionWidget({
                data: "bottom",
                label: "Bottom",
            }),
        ],
    });
    const instance = new OO.ui.MenuLayout({
        menuPosition: "top",
        menuPanel,
        contentPanel,
    });

    instance.$menu.append(menuPanel.$element.append("<b>Menu panel</b>", select.$element));

    instance.$content.append(
        contentPanel.$element.append(
            "<b>Content panel</b>",
            "<p>Note that the menu is positioned relative to the content panel: " + "top, bottom, after, before.</p>",
        ),
    );

    // $ExpectType MenuLayout
    instance.toggleMenu();

    // $ExpectType MenuLayout
    instance.toggleMenu(true);

    // $ExpectType boolean
    instance.isMenuVisible();

    // $ExpectType MenuLayout
    instance.setMenuPosition("after");

    // $ExpectType Position
    instance.getMenuPosition();

    // $ExpectType void
    instance.setMenuPanel(menuPanel);

    // $ExpectType void
    instance.setContentPanel(contentPanel);

    // $ExpectType void
    instance.clearMenuPanel();

    // $ExpectType void
    instance.clearContentPanel();

    // @ts-expect-error
    OO.ui.MenuLayout.prototype.$menu;

    // @ts-expect-error
    OO.ui.MenuLayout.prototype.$content;
}
// #endregion

// #region OO.ui.MenuOptionWidget
{
    // $ExpectType DecoratedOptionWidget
    new OO.ui.MenuOptionWidget.super();

    const instance = new OO.ui.MenuOptionWidget();
}
// #endregion

// #region OO.ui.MenuSelectWidget
{
    // $ExpectType SelectWidget
    new OO.ui.MenuSelectWidget.super();

    // $ExpectType Record<string, string>
    OO.ui.MenuSelectWidget.static.flippedPositions;

    const instance = new OO.ui.MenuSelectWidget({
        input: new OO.ui.TextInputWidget(),
        $input: $(),
        widget: new OO.ui.Widget(),
        autoHide: true,
        $autoCloseIgnore: $(),
        hideOnChoose: false,
        filterFromInput: false,
        highlightOnFilter: false,
        filterMode: "substring",
        width: 100,
    });

    // $ExpectType JQuery<HTMLElement> | null
    instance.$input;

    // $ExpectType JQuery<HTMLElement> | null
    instance.$widget;

    // $ExpectType JQuery<HTMLElement>
    instance.$autoCloseIgnore;

    // $ExpectType MenuOptionWidget[]
    instance.getVisibleItems();

    // $ExpectType void
    instance.toggleScreenReaderMode(false);

    // $ExpectType void
    instance.scrollToTop();

    instance.on("ready", () => {});

    // @ts-expect-error
    OO.ui.MenuSelectWidget.prototype.$input;

    // @ts-expect-error
    OO.ui.MenuSelectWidget.prototype.$widget;

    // @ts-expect-error
    OO.ui.MenuSelectWidget.prototype.$autoCloseIgnore;
}
// #endregion

// #region OO.ui.MenuTagMultiselectWidget
{
    // $ExpectType TagMultiselectWidget
    new OO.ui.MenuTagMultiselectWidget.super();

    const instance = new OO.ui.MenuTagMultiselectWidget({
        inputPosition: "outline",
        placeholder: "I am placeholder text!",
        options: [
            { data: "option1", label: "Option 1", icon: "tag" },
            { data: "option2", label: "Option 2" },
            { data: "option3", label: "Option 3" },
        ],
        selected: ["option1", "option2"],
    });

    instance.onResize(); // $ExpectType void

    instance.onInputChange(); // $ExpectType void

    instance.onMenuChoose(new OO.ui.OptionWidget(), false); // $ExpectType void

    instance.onMenuToggle(false); // $ExpectType void

    // $ExpectType MenuSelectWidget
    instance.createMenuWidget({
        $input: $(),
    });

    // $ExpectType void
    instance.addOptions([
        {
            data: "option4",
            label: "Option 4",
            icon: "error",
        },
    ]);

    instance.createMenuOptionWidget("option5"); // $ExpectType OptionWidget

    instance.createMenuOptionWidget("option6", "Option 6"); // $ExpectType OptionWidget

    instance.createMenuOptionWidget("option7", "Option 7", "add"); // $ExpectType OptionWidget

    instance.getMenu(); // $ExpectType MenuSelectWidget

    instance.getAllowedValues(); // $ExpectType string[]
}
// #endregion

// #region OO.ui.MenuToolGroup
{
    const toolbar = new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory());

    // $ExpectType PopupToolGroup
    new OO.ui.MenuToolGroup.super(toolbar);

    const instance = new OO.ui.MenuToolGroup(toolbar);
}
// #endregion

// #region OO.ui.MessageDialog
{
    const instance = new OO.ui.MessageDialog();

    // $ExpectType Process
    instance.getSetupProcess(1);

    // $ExpectType Process
    instance.getSetupProcess({
        message: "Message!",
        size: "medium",
        title: "Title",
        actions: [
            {
                action: "continue",
                flags: "progressive",
            },
        ],
        other: 12345,
    });

    // $ExpectType Process
    instance.getSetupProcess({
        message() {
            return "Message!";
        },
        size: "medium",
        title() {
            return "Title";
        },
        actions: [
            {
                action: "continue",
                flags: ["progressive"],
                modes: ["edit"],
            },
        ],
        other: 12345,
    });
}
// #endregion

// #region OO.ui.MessageWidget
{
    // $ExpectType Widget
    new OO.ui.MessageWidget.super();

    // $ExpectType Record<string, Icon>
    OO.ui.MessageWidget.static.iconMap;

    const instance = new OO.ui.MessageWidget({
        type: "error",
        inline: false,
        showClose: true,
    });

    instance.setInline(true); // $ExpectType void

    instance.setType("warning"); // $ExpectType void

    instance.setType(); // $ExpectType void

    instance.onCloseButtonClick(); // $ExpectType void

    instance.on("close", () => {});
}
// #endregion

// #region OO.ui.MultilineTextInputWidget
{
    // $ExpectType TextInputWidget
    new OO.ui.MultilineTextInputWidget.super();

    const instance = new OO.ui.MultilineTextInputWidget({
        value: "Text input on multiple lines",
        rows: 2,
        autosize: false,
        maxRows: 10,
    });

    // $ExpectType MultilineTextInputWidget
    instance.adjustSize();

    // $ExpectType MultilineTextInputWidget
    instance.adjustSize(true);

    instance.isAutosizing(); // $ExpectType boolean

    instance.on("resize", () => {});
}
// #endregion

// #region OO.ui.MultioptionWidget
{
    // $ExpectType Widget
    new OO.ui.MultioptionWidget.super();

    const instance = new OO.ui.MultioptionWidget({
        selected: false,
    });

    instance.isSelected(); // $ExpectType boolean

    instance.setSelected(); // $ExpectType MultioptionWidget

    instance.setSelected(true); // $ExpectType MultioptionWidget

    instance.on("change", selected => {
        selected; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.MenuSectionOptionWidget
{
    // $ExpectType DecoratedOptionWidget
    new OO.ui.MenuSectionOptionWidget.super();

    const instance = new OO.ui.MenuSectionOptionWidget({
        label: "Dogs",
    });

    const dropdown = new OO.ui.DropdownWidget({
        menu: {
            items: [
                instance,
                new OO.ui.MenuOptionWidget({
                    data: "corgi",
                    label: "Welsh Corgi",
                }),
                new OO.ui.MenuOptionWidget({
                    data: "poodle",
                    label: "Standard Poodle",
                }),
                new OO.ui.MenuSectionOptionWidget({
                    label: "Cats",
                }),
                new OO.ui.MenuOptionWidget({
                    data: "lion",
                    label: "Lion",
                }),
            ],
        },
    });
}
// #endregion

// #region OO.ui.MultiselectWidget
{
    // $ExpectType Widget
    new OO.ui.MultiselectWidget.super();

    const instance = new OO.ui.MultiselectWidget({
        items: [new OO.ui.MenuOptionWidget()],
    });

    instance.findSelectedItems(); // $ExpectType MultioptionWidget[]

    instance.findSelectedItemsData(); // $ExpectType unknown[]

    // $ExpectType MultiselectWidget
    instance.selectItems([new OO.ui.MultioptionWidget()]);

    instance.selectItemsByData([1, 2, "3"]); // $ExpectType MultiselectWidget

    instance.clearSelection(); // $ExpectType MultiselectWidget

    instance.on("select", () => {});
}
// #endregion

// #region OO.ui.NumberInputWidget
{
    // $ExpectType TextInputWidget
    new OO.ui.NumberInputWidget.super();

    const instance = new OO.ui.NumberInputWidget({
        label: "NumberInputWidget",
        input: { value: "5" },
        min: 1,
        max: 10,
    });

    instance.setAllowInteger(true); // $ExpectType void

    instance.setIsInteger(true); // $ExpectType void

    instance.getAllowInteger(); // $ExpectType boolean

    instance.getIsInteger(); // $ExpectType boolean

    instance.setRange(1, 1000); // $ExpectType void

    instance.getRange(); // $ExpectType [number, number]

    instance.setStep(); // $ExpectType void

    instance.setStep(1, 10); // $ExpectType void

    instance.setStep(1, 10, null); // $ExpectType void

    instance.setStep(2, 20, 2); // $ExpectType void

    instance.getStep(); // $ExpectType [number, number, number]

    instance.getNumericValue(); // $ExpectType number

    instance.adjustValue(1); // $ExpectType void
}
// #endregion

// #region OO.ui.OptionWidget
{
    // $ExpectType Widget
    new OO.ui.OptionWidget.super();

    // $ExpectType boolean
    OO.ui.OptionWidget.static.selectable;

    // $ExpectType boolean
    OO.ui.OptionWidget.static.highlightable;

    // $ExpectType boolean
    OO.ui.OptionWidget.static.pressable;

    // $ExpectType boolean
    OO.ui.OptionWidget.static.scrollIntoViewOnSelect;

    const instance = new OO.ui.OptionWidget();

    // $ExpectType boolean
    instance.isSelectable();

    // $ExpectType boolean
    instance.isHighlightable();

    // $ExpectType boolean
    instance.isPressable();

    // $ExpectType boolean
    instance.isSelected();

    // $ExpectType boolean
    instance.isHighlighted();

    // $ExpectType boolean
    instance.isPressed();

    // $ExpectType OptionWidget
    instance.setSelected();

    // $ExpectType OptionWidget
    instance.setSelected(true);

    // $ExpectType OptionWidget
    instance.setHighlighted();

    // $ExpectType OptionWidget
    instance.setHighlighted(true);

    // $ExpectType OptionWidget
    instance.setPressed();

    // $ExpectType OptionWidget
    instance.setPressed(true);

    // $ExpectType string | boolean
    instance.getMatchText();
}
// #endregion

// #region OO.ui.OutlineControlsWidget
{
    // $ExpectType Widget
    new OO.ui.OutlineControlsWidget.super();

    const instance = new OO.ui.OutlineControlsWidget({
        abilities: {
            move: true,
            remove: true,
        },
    });

    // $ExpectType void
    instance.setAbilities({
        move: false,
        remove: false,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$movers;

    instance
        .on("move", places => {
            places; // $ExpectType number
        })
        .on("remove", () => {})
        .on("change", items => {
            items; // $ExpectType Element[]
        })
        .once("add", (items, index) => {
            items; // $ExpectType EventEmitter
            index; // $ExpectType number
        })
        .off("change", items => {
            items; // $ExpectType Element[]
        })
        .off("clear", () => {});

    // @ts-expect-error
    OO.ui.OutlineControlsWidget.prototype.$movers;
}
// #endregion

// #region OO.ui.OutlineOptionWidget
{
    // $ExpectType DecoratedOptionWidget
    new OO.ui.OutlineOptionWidget.super();

    // $ExpectType string
    OO.ui.OutlineOptionWidget.static.levelClass;

    // $ExpectType number
    OO.ui.OutlineOptionWidget.static.levels;

    const instance = new OO.ui.OutlineOptionWidget({
        level: 0,
        movable: false,
        removable: false,
    });

    instance.isMovable(); // $ExpectType boolean

    instance.isRemovable(); // $ExpectType boolean

    instance.getLevel(); // $ExpectType number

    instance.setMovable(true); // $ExpectType OutlineOptionWidget

    instance.setRemovable(true); // $ExpectType OutlineOptionWidget

    instance.setLevel(); // $ExpectType OutlineOptionWidget

    instance.setLevel(1); // $ExpectType OutlineOptionWidget
}
// #endregion

// #region OO.ui.OutlineSelectWidget
{
    // $ExpectType SelectWidget
    new OO.ui.OutlineSelectWidget.super();

    const instance = new OO.ui.OutlineSelectWidget();
}
// #endregion

// #region OO.ui.PageLayout
{
    // $ExpectType PanelLayout
    new OO.ui.PageLayout.super();

    const instance = new OO.ui.PageLayout("page1");

    instance.getName(); // $ExpectType string

    instance.isActive(); // $ExpectType boolean

    instance.getOutlineItem(); // $ExpectType OutlineOptionWidget | null

    instance.setOutlineItem(null); // $ExpectType PageLayout

    instance.setOutlineItem(new OO.ui.OutlineOptionWidget()); // $ExpectType PageLayout

    instance.setActive(true); // $ExpectType void

    instance.on("active", active => {
        active; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.PanelLayout
{
    // $ExpectType Layout
    new OO.ui.PanelLayout.super();

    const instance = new OO.ui.PanelLayout({
        expanded: false,
        framed: true,
        padded: true,
        $content: $("<p>A panel layout with padding and a frame.</p>"),
    });

    // $ExpectType void
    instance.focus();
}
// #endregion

// #region OO.ui.PopupButtonWidget
{
    // $ExpectType ButtonWidget
    new OO.ui.PopupButtonWidget.super();

    const instance = new OO.ui.PopupButtonWidget({
        label: "Popup button with options",
        icon: "menu",
        popup: {
            $content: $("<p>Additional options here.</p>"),
            padded: true,
            align: "force-left",
        },
    });
}
// #endregion

// #region OO.ui.PopupTagMultiselectWidget
{
    const popupInput = new OO.ui.TextInputWidget();
    const instance = new OO.ui.PopupTagMultiselectWidget({
        popupInput,
        popup: {
            $content: popupInput.$element,
        },
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$overlay;

    // @ts-expect-error
    OO.ui.PopupTagMultiselectWidget.prototype.$overlay;

    instance.onPopupToggle(false); // $ExpectType void

    instance.onPopupInputEnter(); // $ExpectType void

    instance.addTagByPopupValue("1"); // $ExpectType void

    instance.addTagByPopupValue("1", "2"); // $ExpectType void
}
// #endregion

// #region OO.ui.PopupTool
{
    const toolGroup = new OO.ui.ToolGroup(new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory()));

    // $ExpectType Tool
    new OO.ui.PopupTool.super(toolGroup);

    const instance = new OO.ui.PopupTool(toolGroup);

    // $ExpectType void
    instance.onPopupToggle(true);
}
// #endregion

// #region OO.ui.PopupToolGroup
{
    const toolbar = new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory());

    // $ExpectType ToolGroup
    new OO.ui.PopupToolGroup.super(toolbar);

    {
        const narrowConfig = OO.ui.PopupToolGroup.static.narrowConfig;

        if (narrowConfig !== null) {
            // $ExpectType Icon | Record<string, Icon> | undefined
            narrowConfig.icon;

            // $ExpectType boolean | undefined
            narrowConfig.invisibleLabel;

            // $ExpectType JQuery<HTMLElement> | Deferrable<string> | HtmlSnippet | undefined
            narrowConfig.label;
        }
    }

    const instance = new OO.ui.PopupToolGroup(toolbar, {
        header: "header",
        narrowConfig: {
            invisibleLabel: false,
            label: "narrowed label",
            icon: "alert",
        },
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$handle;

    instance.onToolbarResize(); // $ExpectType void

    instance.isActive(); // $ExpectType boolean

    instance.setActive(true); // $ExpectType void

    instance.on("labelChange", () => {});

    // @ts-expect-error
    OO.ui.PopupToolGroup.prototype.$handle;
}
// #endregion

// #region OO.ui.PopupWidget
{
    // $ExpectType Widget
    new OO.ui.PopupWidget.super();

    const instance = new OO.ui.PopupWidget({
        $content: $("<p>Hi there!</p>"),
        padded: true,
        width: 300,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$body;

    // $ExpectType JQuery<HTMLElement>
    instance.$popup;

    // $ExpectType JQuery<HTMLElement>
    instance.$anchor;

    // $ExpectType JQuery<HTMLElement>
    instance.$container;

    // $ExpectType void
    instance.toggleAnchor();

    // $ExpectType void
    instance.toggleAnchor(true);

    // $ExpectType void
    instance.setAnchorEdge("end");

    // $ExpectType boolean
    instance.hasAnchor();

    // $ExpectType PopupWidget
    instance.toggle();

    // $ExpectType PopupWidget
    instance.toggle(true);

    // $ExpectType void
    instance.setSize(100, 200, true);

    // $ExpectType void
    instance.updateDimensions(false);

    // $ExpectType void
    instance.setPosition("above");

    // $ExpectType Position
    instance.getPosition();

    // $ExpectType void
    instance.setAutoFlip(true);

    // $ExpectType void
    instance.setAutoCloseIgnore($());

    // $ExpectType string
    instance.getBodyId();

    instance.on("ready", () => {});

    instance.on("closing", () => {});

    instance.on("labelChange", () => {});

    instance.on("disable", disabled => {
        disabled; // $ExpectType boolean
    });

    instance.on("toggle", visible => {
        visible; // $ExpectType boolean
    });

    // @ts-expect-error
    OO.ui.PopupWidget.prototype.$body;

    // @ts-expect-error
    OO.ui.PopupWidget.prototype.$popup;

    // @ts-expect-error
    OO.ui.PopupWidget.prototype.$anchor;

    // @ts-expect-error
    OO.ui.PopupWidget.prototype.$container;
}
// #endregion

// #region OO.ui.Process
{
    const instance = new OO.ui.Process(1);
    const instance1 = new OO.ui.Process($.Deferred().promise());
    const instance2 = new OO.ui.Process(function() {
        this; // $ExpectType number
        return 1;
    }, 1);
    const instance3 = new OO.ui.Process(function() {
        this; // $ExpectType number
        return false;
    }, 1);
    const instance4 = new OO.ui.Process(function() {
        this; // $ExpectType number
        return $.Deferred().promise();
    }, 1);
    const instance5 = new OO.ui.Process(function() {
        this; // $ExpectType number
        return error;
    }, 1);
    const instance6 = new OO.ui.Process(function() {
        this; // $ExpectType number
        return [error];
    }, 1);
    const instance7 = new OO.ui.Process(function() {
        this; // $ExpectType number
    }, 1);

    const error = new OO.ui.Error("Error!");

    instance.execute().then(
        val => {
            val; // $ExpectType void
        },
        reason => {
            reason; // $ExpectType [] | [Error]
        },
    );

    {
        // $ExpectType Process
        instance.first(function() {
            this; // $ExpectType number
            return false;
        }, 1);

        instance.first(function() {
            this; // $ExpectType number
            return $.Deferred().promise();
        }, 1);

        instance.first(function() {
            this; // $ExpectType number
            return 1000;
        }, 1);

        instance.first(function() {
            this; // $ExpectType number
            return error;
        }, 1);

        instance.first(function() {
            this; // $ExpectType number
            return [error];
        }, 1);

        instance.first(function() {
            this; // $ExpectType number
        }, 1);
    }

    {
        instance.next(function() {
            this; // $ExpectType number
            return false;
        }, 1);

        instance.next(function() {
            this; // $ExpectType number
            return $.Deferred().promise();
        }, 1);

        instance.next(function() {
            this; // $ExpectType number
            return 1000;
        }, 1);

        instance.next(function() {
            this; // $ExpectType number
            return error;
        }, 1);

        instance.next(function() {
            this; // $ExpectType number
            return [error];
        }, 1);

        instance.next(function() {
            this; // $ExpectType number
        }, 1);
    }
}
// #endregion

// #region OO.ui.ProcessDialog
{
    // $ExpectType Dialog
    new OO.ui.ProcessDialog.super();

    const instance = new OO.ui.ProcessDialog();
}
// #endregion

// #region OO.ui.ProgressBarWidget
{
    // $ExpectType Widget
    new OO.ui.ProgressBarWidget.super();

    const instance = new OO.ui.ProgressBarWidget({
        progress: 33,
    });

    const instance1 = new OO.ui.ProgressBarWidget({
        progress: false,
    });

    const instance2 = new OO.ui.ProgressBarWidget({
        // @ts-expect-error
        progress: true,
    });

    instance.getProgress(); // $ExpectType number | false

    instance.setProgress(100); // $ExpectType void

    instance.setProgress(false); // $ExpectType void

    // @ts-expect-error
    instance.setProgress(true);
}
// #endregion

// #region OO.ui.RadioInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.RadioInputWidget.super();

    const instance = new OO.ui.RadioInputWidget({
        value: "a",
        selected: true,
        disabled: true,
    });

    // $ExpectType RadioInputWidget
    instance.setSelected(false);

    // $ExpectType boolean
    instance.isSelected();
}
// #endregion

// #region OO.ui.RadioOptionWidget
{
    // $ExpectType OptionWidget
    new OO.ui.RadioOptionWidget.super();

    const instance = new OO.ui.RadioOptionWidget({
        data: "a",
        label: "Selected radio option",
    });
}
// #endregion

// #region OO.ui.RadioSelectInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.RadioSelectInputWidget.super();

    const instance = new OO.ui.RadioSelectInputWidget({
        options: [
            { data: "a", label: "First" },
            { data: "b", label: "Second" },
            { data: "c", label: "Third" },
        ],
    });

    // $ExpectType RadioSelectInputWidget
    instance.setOptions([
        { data: "a", label: "First" },
        { data: "b", label: "Second" },
        { data: "c", label: "Third" },
    ]);
}
// #endregion

// #region OO.ui.RadioSelectWidget
{
    const option1 = new OO.ui.RadioOptionWidget({
        data: "a",
        label: "Selected radio option",
    });
    const option2 = new OO.ui.RadioOptionWidget({
        data: "b",
        label: "Unselected radio option",
    });
    const instance = new OO.ui.RadioSelectWidget({
        items: [option1, option2],
    });

    // $ExpectType RadioSelectWidget
    instance.selectItem(option1);
}
// #endregion

// #region OO.ui.SearchInputWidget
{
    // $ExpectType TextInputWidget
    new OO.ui.SearchInputWidget.super();

    const instance = new OO.ui.SearchInputWidget();

    instance.onIndicatorKeyDown($.Event("keydown")); // $ExpectType boolean

    instance.onIndicatorClick($.Event("click")); // $ExpectType boolean

    instance.updateSearchIndicator(); // $ExpectType void
}
// #endregion

// #region OO.ui.SearchWidget
{
    // $ExpectType Widget
    new OO.ui.SearchWidget.super();

    // $ExpectType SearchWidget<TextInputWidget>
    const instance = new OO.ui.SearchWidget({
        input: new OO.ui.TextInputWidget(),
    });

    // $ExpectType SearchWidget<SearchInputWidget>
    const instance1 = new OO.ui.SearchWidget({
        placeholder: "Placeholder",
        value: "123",
    });

    instance.getQuery(); // $ExpectType TextInputWidget

    instance1.getQuery(); // $ExpectType SearchInputWidget

    instance.getResults(); // $ExpectType SelectWidget

    // $ExpectType JQuery<HTMLElement>
    instance.$query;

    // $ExpectType JQuery<HTMLElement>
    instance.$results;

    // $ExpectType InputWidget
    OO.ui.SearchWidget.prototype.getQuery();

    // @ts-expect-error
    OO.ui.SearchWidget.prototype.$query;

    // @ts-expect-error
    OO.ui.SearchWidget.prototype.$results;
}
// #endregion

// #region OO.ui.SelectFileInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.SelectFileInputWidget.super();

    const instance = new OO.ui.SelectFileInputWidget({
        accept: ["text/html"],
        multiple: true,
        placeholder: "Select a file",
        button: {
            label: "Upload!",
        },
        icon: "upload",
    });

    instance.getFilename(); // $ExpectType string
}
// #endregion

// #region OO.ui.SelectFileWidget
{
    // $ExpectType SelectFileInputWidget
    new OO.ui.SelectFileWidget.super();

    const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });

    const instance = new OO.ui.SelectFileWidget();

    instance.getValue(); // $ExpectType File | File[] | null

    instance.setValue([file]); // $ExpectType void

    instance.setValue(null); // $ExpectType void

    instance.loadAndGetImageUrl(file).then(url => {
        url; // $ExpectType string
    });
}
// #endregion

// #region OO.ui.SelectWidget
{
    // $ExpectType Widget
    new OO.ui.SelectWidget.super();

    // $ExpectType boolean
    OO.ui.SelectWidget.static.handleNavigationKeys;

    // $ExpectType boolean
    OO.ui.SelectWidget.static.listWrapsAround;

    // $ExpectType string
    OO.ui.SelectWidget.static.normalizeForMatching("text");

    const option1 = new OO.ui.OptionWidget({
        data: "a",
        label: "Option One",
    });
    const option2 = new OO.ui.OptionWidget({
        data: "b",
        label: "Option Two",
    });
    const option3 = new OO.ui.OptionWidget({
        data: "c",
        label: "Option Three",
    });

    const instance = new OO.ui.SelectWidget({
        items: [option1, option2, option3],
        multiselect: true,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$focusOwner;

    // $ExpectType void
    instance.scrollItemIntoView(option1);

    // $ExpectType OptionWidget | null
    instance.findFirstSelectedItem();

    // $ExpectType OptionWidget | OptionWidget[] | null
    instance.findSelectedItems();

    // $ExpectType OptionWidget | OptionWidget[] | null
    instance.findSelectedItem();

    // $ExpectType OptionWidget | null
    instance.findHighlightedItem();

    // $ExpectType void
    instance.togglePressed(false);

    // $ExpectType SelectWidget
    instance.highlightItem(option1);

    // $ExpectType Element | null
    instance.getItemFromLabel("Option One");

    // $ExpectType Element | null
    instance.getItemFromLabel("Option One", true);

    // $ExpectType SelectWidget
    instance.selectItemByLabel("Option One");

    // $ExpectType SelectWidget
    instance.selectItemByLabel("Option One", true);

    // $ExpectType SelectWidget
    instance.selectItemByData("a");

    // $ExpectType SelectWidget
    instance.unselectItem();

    // $ExpectType SelectWidget
    instance.unselectItem(option1);

    // $ExpectType SelectWidget
    instance.selectItem();

    // $ExpectType SelectWidget
    instance.selectItem(option1);

    // $ExpectType SelectWidget
    instance.pressItem();

    // $ExpectType SelectWidget
    instance.pressItem(option1);

    // $ExpectType SelectWidget
    instance.chooseItem(option1);

    // $ExpectType OptionWidget | null
    instance.findRelativeSelectableItem(null, 1);

    // $ExpectType OptionWidget | null
    instance.findRelativeSelectableItem(option1, 1, item => true, true);

    // $ExpectType OptionWidget | null
    instance.findFirstSelectableItem();

    // $ExpectType SelectWidget
    instance.addItems([option1], 1);

    // $ExpectType SelectWidget
    instance.removeItems([option1]);

    // $ExpectType SelectWidget
    instance.clearItems();

    instance
        .on("highlight", item => {
            item; // $ExpectType OptionWidget | null
        })
        .on("press", item => {
            item; // $ExpectType OptionWidget | null
        })
        .on("select", items => {
            items; // $ExpectType OptionWidget | OptionWidget[] | null
        })
        .once("choose", (item, selected) => {
            item; // $ExpectType OptionWidget
            selected; // $ExpectType boolean
        })
        .once("add", (items, index) => {
            items; // $ExpectType OptionWidget | OptionWidget[]
            index; // $ExpectType number
        })
        .once("remove", (items, index) => {
            items; // $ExpectType OptionWidget | OptionWidget[]
            index; // $ExpectType number
        })
        .off("change", items => {
            items; // $ExpectType Element[]
        })
        .off("clear", () => {})
        .off("move", (item, index, oldIndex) => {
            item; // $ExpectType EventEmitter
            index; // $ExpectType number
            oldIndex; // $ExpectType number
        });

    // @ts-expect-error
    OO.ui.SelectWidget.prototype.$focusOwner;
}
// #endregion

// #region OO.ui.StackLayout
{
    // $ExpectType PanelLayout
    new OO.ui.StackLayout.super();

    const instance = new OO.ui.StackLayout({
        items: [
            new OO.ui.PanelLayout({
                $content: $("<p>Panel One</p>"),
                padded: true,
                framed: true,
            }),
            new OO.ui.PanelLayout({
                $content: $("<p>Panel Two</p>"),
                padded: true,
                framed: true,
            }),
        ],
        continuous: true,
    });

    instance.getCurrentItem(); // $ExpectType Layout | null

    instance.addItems([new OO.ui.Layout()], 2); // $ExpectType StackLayout

    instance.removeItems([new OO.ui.Layout()]); // $ExpectType StackLayout

    instance.clearItems(); // $ExpectType StackLayout

    instance.setItem(new OO.ui.Layout()); // $ExpectType StackLayout

    instance.setContinuous(true); // $ExpectType void

    instance.isContinuous(); // $ExpectType boolean

    instance.on("set", item => {
        item; // $ExpectType Layout | null
    });
}
// #endregion

// #region OO.ui.TabOptionWidget
{
    // $ExpectType OptionWidget
    new OO.ui.TabOptionWidget.super();

    const instance = new OO.ui.TabOptionWidget({
        href: "1",
    });
}
// #endregion

// #region OO.ui.TabPanelLayout
{
    // $ExpectType PanelLayout
    new OO.ui.TabPanelLayout.super();

    const instance = new OO.ui.TabPanelLayout("tab", {
        label: "Label",
        tabItemConfig: {
            href: "123",
        },
    });

    instance.getName(); // $ExpectType string

    instance.isActive(); // $ExpectType boolean

    instance.getTabItem(); // $ExpectType TabOptionWidget | null

    instance.getTabItemConfig(); // $ExpectType ConfigOptions

    instance.setTabItem(null); // $ExpectType TabPanelLayout

    instance.setTabItem(new OO.ui.TabOptionWidget()); // $ExpectType TabPanelLayout

    instance.setupTabItem(); // $ExpectType TabPanelLayout

    instance.setActive(true); // $ExpectType void

    instance.on("active", active => {
        active; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.TabSelectWidget
{
    // $ExpectType SelectWidget
    new OO.ui.TabSelectWidget.super();

    const instance = new OO.ui.TabSelectWidget({
        framed: true,
    });

    instance.isFramed(); // $ExpectType boolean

    instance.toggleFramed(); // $ExpectType TabSelectWidget

    instance.toggleFramed(true); // $ExpectType TabSelectWidget
}
// #endregion

// #region OO.ui.TagItemWidget
{
    // $ExpectType Widget
    new OO.ui.TagItemWidget.super();

    const instance = new OO.ui.TagItemWidget({
        valid: true,
        fixed: true,
    });

    instance.setFixed(); // $ExpectType TagItemWidget

    instance.setFixed(true); // $ExpectType TagItemWidget

    instance.isFixed(); // $ExpectType boolean

    instance.remove(); // $ExpectType void

    instance.onKeyDown($.Event("keydown")); // $ExpectType boolean | void

    instance.select(); // $ExpectType void

    instance.toggleValid(); // $ExpectType void

    instance.toggleValid(true); // $ExpectType void

    instance.isValid(); // $ExpectType boolean

    instance
        .on("remove", () => {})
        .on("navigate", direction => {
            direction; // $ExpectType Direction
        })
        .on("select", () => {})
        .on("valid", isValid => {
            isValid; // $ExpectType boolean
        })
        .on("fixed", isFixed => {
            isFixed; // $ExpectType boolean
        });
}
// #endregion

// #region OO.ui.TagMultiselectWidget
{
    // $ExpectType Widget
    new OO.ui.TagMultiselectWidget.super();

    // $ExpectType string[]
    OO.ui.TagMultiselectWidget.static.allowedInputPositions;

    const instance = new OO.ui.TagMultiselectWidget({
        input: {
            value: "value",
        },
        inputPosition: "outline",
        allowedValues: ["Option 1", "Option 2", "Option 3"],
        selected: ["Option 1"],
        allowEditTags: false,
        allowArbitrary: false,
        allowDuplicates: false,
        allowDisplayInvalidTags: false,
        tagLimit: 20,
        allowReordering: false,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$content;

    // $ExpectType JQuery<HTMLElement>
    instance.$handle;

    instance.onInputFocus(); // $ExpectType void

    instance.onInputBlur(); // $ExpectType void

    instance.doInputEnter($.Event(""), false); // $ExpectType boolean

    instance.doInputBackspace($.Event(""), false); // $ExpectType boolean

    instance.doInputEscape($.Event("")); // $ExpectType void

    instance.doInputArrow($.Event(""), "backwards", false); // $ExpectType void

    instance.onTagSelect(new OO.ui.TagItemWidget()); // $ExpectType void

    instance.onTagFixed(new OO.ui.TagItemWidget()); // $ExpectType void

    instance.onChangeTags(); // $ExpectType void

    instance.onTagRemove(new OO.ui.TagItemWidget()); // $ExpectType void

    instance.onTagNavigate(new OO.ui.TagItemWidget(), "forwards"); // $ExpectType void

    instance.getTagInfoFromInput(); // $ExpectType TagInfo

    instance.addTagFromInput(); // $ExpectType void

    instance.clearInput(); // $ExpectType void

    instance.isDuplicateData(1); // $ExpectType boolean

    instance.isAllowedData("1"); // $ExpectType boolean

    instance.getAllowedValues(); // $ExpectType unknown[]

    instance.addAllowedValue("1"); // $ExpectType void

    instance.getValue(); // $ExpectType unknown[]

    {
        // $ExpectType void
        instance.setValue({ data: "foo", label: "Foo item" });

        // $ExpectType void
        instance.setValue([
            { data: "foo", label: "Foo item" },
            { data: "bar", label: "Bar item" },
        ]);

        // $ExpectType void
        instance.setValue(["foo", "bar", "bla"]);

        // $ExpectType void
        instance.setValue("foo");
    }

    instance.addTag("123", "label"); // $ExpectType boolean

    instance.addTag("123", $()); // $ExpectType boolean

    instance.isUnderLimit(); // $ExpectType boolean

    instance.removeTagByData("1"); // $ExpectType void

    instance.checkValidity(); // $ExpectType boolean

    instance.toggleValid(); // $ExpectType void

    instance.toggleValid(true); // $ExpectType void

    instance.isValid(); // $ExpectType boolean

    instance.on("disable", disabled => {
        disabled; // $ExpectType boolean
    });

    // @ts-expect-error
    OO.ui.TagMultiselectWidget.prototype.$content;

    // @ts-expect-error
    OO.ui.TagMultiselectWidget.prototype.$handle;
}
// #endregion

// #region OO.ui.TextInputWidget
{
    // $ExpectType InputWidget
    new OO.ui.TextInputWidget.super();

    // $ExpectType Record<string, RegExp>
    OO.ui.TextInputWidget.static.validationPatterns;

    const instance = new OO.ui.TextInputWidget({
        value: "Text input",
        type: "text",
        placeholder: "Placeholder",
        autofocus: false,
        readOnly: false,
        maxLength: 114514,
        minLength: 20,
        labelPosition: "before",
        autocomplete: "on",
        spellcheck: true,
        validate: () => true,
    });

    // $ExpectType boolean
    instance.isReadOnly();

    // $ExpectType TextInputWidget
    instance.setReadOnly(true);

    // $ExpectType void
    instance.installParentChangeDetector();

    // $ExpectType TextInputWidget
    instance.selectRange(1, 5);

    // $ExpectType TextInputWidget
    instance.selectRange(1);

    // $ExpectType Range
    instance.getRange();

    // $ExpectType number
    instance.getInputLength();

    // $ExpectType TextInputWidget
    instance.select();

    // $ExpectType TextInputWidget
    instance.moveCursorToStart();

    // $ExpectType TextInputWidget
    instance.moveCursorToEnd();

    // $ExpectType TextInputWidget
    instance.insertContent("content");

    // $ExpectType TextInputWidget
    instance.encapsulateContent("before", "after");

    // $ExpectType void
    instance.setValidation(/./g);

    // $ExpectType void
    instance.setValidityFlag();

    // $ExpectType void
    instance.setValidityFlag(false);

    // $ExpectType Promise<void, any, any>
    instance.getValidity();

    // $ExpectType TextInputWidget
    instance.setLabelPosition("after");

    // $ExpectType TextInputWidget
    instance.updatePosition();

    // $ExpectType TextInputWidget
    instance.on("enter", () => {});
}
// #endregion

// #region OO.ui.Theme
{
    const instance = new OO.ui.Theme();

    {
        const result = instance.getElementClasses(new OO.ui.Element());

        result.on; // $ExpectType string[]

        result.off; // $ExpectType string[]
    }

    instance.updateElementClasses(new OO.ui.Element()); // $ExpectType void

    instance.queueUpdateElementClasses(new OO.ui.Element()); // $ExpectType void

    instance.getDialogTransitionDuration(); // $ExpectType number
}
// #endregion

// #region OO.ui.ToggleButtonWidget
{
    // $ExpectType ToggleWidget
    new OO.ui.ToggleButtonWidget.super();

    const instance = new OO.ui.ToggleButtonWidget({
        label: "Toggle Button off",
    });

    const instance1 = new OO.ui.ToggleButtonWidget({
        label: "Toggle Button on",
        value: true,
    });

    instance.on("change", value => {
        value; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.ToggleSwitchWidget
{
    // $ExpectType ToggleWidget
    new OO.ui.ToggleSwitchWidget.super();

    const instance = new OO.ui.ToggleSwitchWidget();
    const instance1 = new OO.ui.ToggleSwitchWidget({
        value: true,
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$glow;

    // $ExpectType JQuery<HTMLElement>
    instance.$grip;

    // @ts-expect-error
    OO.ui.ToggleSwitchWidget.prototype.$glow;

    // @ts-expect-error
    OO.ui.ToggleSwitchWidget.prototype.$grip;
}
// #endregion

// #region OO.ui.ToggleWidget
{
    // $ExpectType Widget
    new OO.ui.ToggleWidget.super();

    const instance = new OO.ui.ToggleWidget({
        value: true,
    });

    instance.getValue(); // $ExpectType boolean

    instance.setValue(false); // $ExpectType ToggleWidget

    instance.on("change", value => {
        value; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.Tool
{
    // $ExpectType Widget
    new OO.ui.Tool.super();

    // $ExpectType string
    OO.ui.Tool.static.name;

    // $ExpectType string
    OO.ui.Tool.static.group;

    // $ExpectType Deferrable<string>
    OO.ui.Tool.static.title;

    // $ExpectType boolean
    OO.ui.Tool.static.displayBothIconAndLabel;

    // $ExpectType boolean
    OO.ui.Tool.static.autoAddToCatchall;

    // $ExpectType boolean
    OO.ui.Tool.static.autoAddToGroup;

    // $ExpectType boolean
    OO.ui.Tool.static.isCompatibleWith("123");

    {
        const narrowConfig = OO.ui.Tool.static.narrowConfig;

        if (narrowConfig !== null) {
            // $ExpectType boolean | undefined
            narrowConfig.displayBothIconAndLabel;

            // $ExpectType Deferrable<string> | undefined
            narrowConfig.title;

            // $ExpectType string | Record<string, string> | null | undefined
            narrowConfig.icon;
        }
    }

    const instance = new OO.ui.Tool(
        new OO.ui.ToolGroup(new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory())),
        {
            title: () => "title",
            displayBothIconAndLabel: false,
        },
    );

    instance.onUpdateState(); // $ExpectType void

    instance.onSelect(); // $ExpectType void

    instance.isActive(); // $ExpectType boolean

    instance.setActive(true); // $ExpectType void

    instance.setTitle("title1"); // $ExpectType Tool

    instance.setDisplayBothIconAndLabel(true); // $ExpectType Tool

    instance.getTitle(); // $ExpectType string

    instance.getName(); // $ExpectType string

    instance.onToolbarResize(); // $ExpectType void

    instance.updateTitle(); // $ExpectType void

    instance.destroy();

    instance.on("flag", changes => {
        changes; // $ExpectType Record<string, boolean>
    });
}
// #endregion

// #region OO.ui.Toolbar
{
    // $ExpectType Element
    new OO.ui.Toolbar.super();

    const instance = new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory(), {
        position: "top",
        $overlay: OO.ui.getDefaultOverlay(),
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$bar;

    // $ExpectType JQuery<HTMLElement>
    instance.$after;

    // $ExpectType JQuery<HTMLElement>
    instance.$actions;

    // $ExpectType JQuery<HTMLElement>
    instance.$popups;

    // $ExpectType JQuery<HTMLElement>
    instance.$overlay;

    instance.getToolFactory(); // $ExpectType ToolFactory

    instance.getToolGroupFactory(); // $ExpectType Factory

    instance.insertItemElements(new OO.ui.Element(), 1); // $ExpectType void

    instance.initialize(); // $ExpectType void

    instance.setup([
        {
            name: "group1",
            type: "bar",
            include: { name: "tool-name" },
        },
    ]);

    instance.onToolGroupActive(true); // $ExpectType void

    instance.getToolGroupByName("group1"); // $ExpectType ToolGroup | null

    instance.reset(); // $ExpectType void

    instance.destroy(); // $ExpectType void

    instance.isToolAvailable("unavailable"); // $ExpectType boolean

    instance.reserveTool(new OO.ui.Tool(new OO.ui.ToolGroup(instance))); // $ExpectType void

    instance.releaseTool(new OO.ui.Tool(new OO.ui.ToolGroup(instance))); // $ExpectType void

    instance.getToolAccelerator("tool1"); // $ExpectType string | undefined

    instance.isNarrow(); // $ExpectType boolean

    instance.setNarrow(true); // $ExpectType void

    instance
        .on("updateState", data => {
            data; // $ExpectType unknown
        })
        .on("active", hasActive => {
            hasActive; // $ExpectType boolean
        })
        .off("resize", () => {});

    // @ts-expect-error
    OO.ui.Toolbar.prototype.$bar;

    // @ts-expect-error
    OO.ui.Toolbar.prototype.$after;

    // @ts-expect-error
    OO.ui.Toolbar.prototype.$actions;

    // @ts-expect-error
    OO.ui.Toolbar.prototype.$popups;

    // @ts-expect-error
    OO.ui.Toolbar.prototype.$overlay;
}
// #endregion

// #region OO.ui.ToolFactory
{
    // $ExpectType Factory
    new OO.ui.ToolFactory.super();

    const instance = new OO.ui.ToolFactory();

    // $ExpectType string[]
    instance.getTools("*", ["tool1"], ["tool1", { name: "tool-name" }, { group: "group-name" }], {
        group: "group-name",
    });
}
// #endregion

// #region OO.ui.ToolGroup
{
    // $ExpectType Widget
    new OO.ui.ToolGroup.super();

    // $ExpectType boolean
    OO.ui.ToolGroup.static.titleTooltips;

    // $ExpectType boolean
    OO.ui.ToolGroup.static.accelTooltips;

    // $ExpectType boolean
    OO.ui.ToolGroup.static.autoDisable;

    // $ExpectType string
    OO.ui.ToolGroup.static.name;

    const toolBar = new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory());

    const instance = new OO.ui.ToolGroup(toolBar, {
        include: "*",
        exclude: { name: "excluded" },
        promote: { group: "group-name" },
        demote: [{ name: "excluded" }, { group: "group-name" }],
    });

    instance.getToolbar(); // $ExpectType Toolbar

    instance.populate(); // $ExpectType void

    instance.destroy(); // $ExpectType void

    instance
        .on("update", () => {})
        .once("active", visible => {
            visible; // $ExpectType boolean
        });
}
// #endregion

// #region OO.ui.ToolGroupFactory
{
    // $ExpectType Factory
    new OO.ui.ToolGroupFactory.super();

    // $ExpectType (new (...args: any[]) => any)[]
    OO.ui.ToolGroupFactory.static.getDefaultClasses();

    const instance = new OO.ui.ToolGroupFactory();
}
// #endregion

// #region OO.ui.ToolGroupTool
{
    const toolGroup = new OO.ui.ToolGroup(new OO.ui.Toolbar(new OO.ui.ToolFactory(), new OO.ui.ToolGroupFactory()));

    // $ExpectType ConfigOptions
    OO.ui.ToolGroupTool.static.groupConfig;

    const instance = new OO.ui.ToolGroupTool(toolGroup);

    // $ExpectType ListToolGroup
    instance.createGroup({
        label: "label",
        icon: "settings",
        include: ["setting1", "setting2"],
    });
}
// #endregion

// #region OO.ui.Widget
{
    const instance = new OO.ui.Widget({
        data: 1,
        disabled: false,
    });

    // $ExpectType boolean
    instance.isDisabled();

    // $ExpectType Widget
    instance.setDisabled(true);

    // $ExpectType Widget
    instance.updateDisabled();

    // $ExpectType string | null
    instance.getInputId();

    // $ExpectType void
    instance.simulateLabelClick();

    // $ExpectType void
    instance.setLabelledBy("aa");

    // $ExpectType void
    instance.setLabelledBy(null);

    // $ExpectType JQuery<HTMLElement>
    instance.$element;

    // $ExpectType unknown
    instance.getData();

    // $ExpectType Element
    new OO.ui.Widget.super();

    instance.on("disable", function(disabled) {
        disabled; // $ExpectType boolean
    });

    instance.on("toggle", function(visible) {
        visible; // $ExpectType boolean
    });
}
// #endregion

// #region OO.ui.WikimediaUITheme
{
    // $ExpectType Theme
    new OO.ui.WikimediaUITheme.super();

    const instance = new OO.ui.WikimediaUITheme();
}
// #endregion

// #region OO.ui.Window
{
    // $ExpectType Size
    OO.ui.Window.static.size;

    const instance = new OO.ui.Window({
        size: "full",
    });

    // $ExpectType JQuery<HTMLElement>
    instance.$frame;

    // $ExpectType JQuery<HTMLElement>
    instance.$overlay;

    // $ExpectType JQuery<HTMLElement>
    instance.$content;

    // $ExpectType JQuery<HTMLElement>
    instance.$focusTrapBefore;

    // $ExpectType JQuery<HTMLElement>
    instance.$focusTrapAfter;

    // $ExpectType JQuery<HTMLElement>
    instance.$focusTraps;

    // $ExpectType boolean
    instance.isInitialized();

    // $ExpectType boolean
    instance.isVisible();

    // $ExpectType boolean
    instance.isOpening();

    // $ExpectType boolean
    instance.isClosing();

    // $ExpectType boolean
    instance.isOpened();

    // $ExpectType WindowManager
    instance.getManager();

    // $ExpectType Size
    instance.getSize();

    {
        const dim = instance.getSizeProperties();
        dim.height; // $ExpectType string | number | undefined
        dim.maxHeight; // $ExpectType string | number | undefined
        dim.maxWidth; // $ExpectType string | number | undefined
        dim.minHeight; // $ExpectType string | number | undefined
        dim.minWidth; // $ExpectType string | number | undefined
        dim.width; // $ExpectType string | number | undefined
    }

    // $ExpectType number
    instance.getContentHeight();

    // $ExpectType Direction
    instance.getDir();

    // $ExpectType Process
    instance.getSetupProcess(123);

    // $ExpectType Process
    instance.getReadyProcess(456);

    // $ExpectType Process
    instance.getHoldProcess(789);

    // $ExpectType Process
    instance.getTeardownProcess("foo");

    // $ExpectType Window
    instance.setManager(new OO.ui.WindowManager());

    // $ExpectType Window
    instance.setSize("medium");

    // $ExpectType Window
    instance.updateSize();

    // $ExpectType Window
    instance.setDimensions({
        height: 100,
        minHeight: 1,
        maxHeight: 10000,
        width: 100,
        minWidth: 1,
        maxWidth: 1000,
    });

    // $ExpectType Window
    instance.initialize();

    // $ExpectType void
    instance.onFocusTrapFocused($.Event("focus"));

    // $ExpectType Window
    instance.focus(true);

    // $ExpectType WindowInstance
    instance.open(123);

    // $ExpectType WindowInstance
    instance.close(123);

    // $ExpectType Promise<void, any, any>
    instance.setup(123);

    // $ExpectType Promise<void, any, any>
    instance.ready("123");

    // $ExpectType Promise<void, any, any>
    instance.hold("123");

    // $ExpectType Promise<void, any, any>
    instance.teardown(null);
}
// #endregion

// #region OO.ui.WindowInstance
{
    const instance = new OO.ui.WindowInstance();

    instance.opened; // $ExpectType Promise<void, any, any>

    instance.opening; // $ExpectType Promise<void, any, any>

    instance.closed; // $ExpectType Promise<void, any, any>

    instance.closing; // $ExpectType Promise<void, any, any>

    instance.isOpening(); // $ExpectType boolean

    instance.isOpened(); // $ExpectType boolean

    instance.isClosing(); // $ExpectType boolean

    instance.isClosed(); // $ExpectType boolean

    // @ts-expect-error
    OO.ui.WindowInstance.prototype.opened;
}
// #endregion

// #region OO.ui.WindowManager
{
    // $ExpectType Record<string, Dimension>
    OO.ui.WindowManager.static.sizes;

    OO.ui.WindowManager.static.defaultSize; // $ExpectType string

    const instance = new OO.ui.WindowManager({
        factory: new OO.Factory(),
        modal: false,
        forceTrapFocus: true,
        $content: $(),
    });

    const window = new OO.ui.Window();

    // $ExpectType JQuery<HTMLElement> | null
    instance.$ariaHidden;

    // $ExpectType JQuery<HTMLElement>
    instance.$element;

    // $ExpectType JQuery<HTMLElement> | null
    instance.$inert;

    // $ExpectType JQuery<HTMLElement> | null
    instance.$returnFocusTo;

    // $ExpectType boolean
    instance.isModal();

    // $ExpectType boolean
    instance.isOpening(window);

    // $ExpectType boolean
    instance.isClosing(window);

    // $ExpectType boolean
    instance.isOpened(window);

    // $ExpectType boolean
    instance.hasWindow(window);

    // $ExpectType number
    instance.getSetupDelay(window, 1);

    // $ExpectType number
    instance.getReadyDelay(window, 1);

    // $ExpectType number
    instance.getHoldDelay(window, 1);

    // $ExpectType number
    instance.getTeardownDelay(window, 1);

    instance.getWindow("window").then(
        window => {
            window; // $ExpectType Window
        },
        err => {
            err; // $ExpectType Error
        },
    );

    // $ExpectType Window | null
    instance.getCurrentWindow();

    {
        // $ExpectType WindowInstance & DeprecatedPromise<Promise<void, any, any>, Error | undefined, WindowOpeningState, unknown, never, never>
        instance.openWindow("window", 123);

        // $ExpectType WindowInstance & DeprecatedPromise<Promise<void, any, any>, Error | undefined, WindowOpeningState, unknown, never, never>
        instance.openWindow(window, "123");

        // $ExpectType WindowInstance & DeprecatedPromise<Promise<void, any, any>, Error | undefined, WindowOpeningState, unknown, never, never>
        instance.openWindow(window, {
            $returnFocusTo: $(),
            extraProperty: 1,
        });

        // @ts-expect-error
        instance.openWindow(window, {
            $returnFocusTo: 1,
        });

        instance.openWindow("window", 1).then(
            (promise, data) => {
                promise; // $ExpectType Promise<void, any, any>
                data; // $ExpectType unknown
            },
            err => {
                err; // $ExpectType Error | undefined
            },
            state => {
                state; // $ExpectType WindowOpeningState
            },
        );
    }

    {
        // $ExpectType WindowInstance & DeprecatedPromise<unknown, Error, WindowClosingState, never, never, never>
        instance.closeWindow("window", 123);

        // $ExpectType WindowInstance & DeprecatedPromise<unknown, Error, WindowClosingState, never, never, never>
        instance.closeWindow(window, "123");

        instance.closeWindow("window", 1).then(
            data => {
                data; // $ExpectType unknown
            },
            err => {
                err; // $ExpectType Error
            },
            state => {
                state; // $ExpectType WindowClosingState
            },
        );
    }

    {
        // $ExpectType void
        instance.addWindows([window, window, window]);

        // $ExpectType void
        instance.addWindows({ a: window, b: window, c: window });
    }

    instance.removeWindows(["window1", "window2"]).then(() => {});

    instance.clearWindows().then(() => {});

    // $ExpectType WindowManager
    instance.updateWindowSize(window);

    // $ExpectType void
    instance.destroy();

    instance.once("opening", function(win, opened, data) {
        win; // $ExpectType Window
        // $ExpectType Promise2<Promise<void, any, any>, Error | undefined, WindowOpeningState, unknown, never, never>
        opened;
        data; // $ExpectType unknown
        this; // $ExpectType null
    });

    instance.on("closing", function(win, closed, data) {
        win; // $ExpectType Window
        closed; // $ExpectType Promise<unknown, Error, WindowClosingState>
        data; // $ExpectType unknown
        this; // $ExpectType null
    });

    instance.off("resize", function(win) {
        win; // $ExpectType Window
        this; // $ExpectType null
    });

    // @ts-expect-error
    OO.ui.WindowManager.prototype.$ariaHidden;
}
// #endregion

const areaOptions: ImageMapster.AreaRenderingOptions = {
    key:         "foo",
    includeKeys: "foo",
    isMask:      true,
    toolTip:     "tooltip",
};

const onClickData: ImageMapster.OnClickData = {
    listTarget: $(),
    key:        "foo",
    e:          $.Event("click"),
    selected:   true,
}

const onMouseData: ImageMapster.OnMouseData = {
    key:      "foo",
    selected: true,
    e:        $.Event("click"),
    options:  areaOptions,
};

const onGetListData: ImageMapster.OnGetListData = {
    key:     "foo",
    value:   "foo",
    area:    [{}],
    options: areaOptions,
};

const onStateChangeData: ImageMapster.OnStateChangeData = {
    key:      "foo",
    state:    "highlight",
    selected: true,
};

const onShowToolTipData: ImageMapster.OnShowToolTipData = {
    toolTip: $(),
    key: "foo",
    selected: true,
    areaOptions,
};

const bool = true;

const options: ImageMapster.Options = {
    mapKey:                "foo",
    mapValue:              "foo",
    clickNavigate:         true,
    listKey:               "foo",
    listSelectedAttribute: "foo",
    listSelectedClass:     "foo",
    wrapClass:             "foo",
    wrapCss:               "foo",
    mouseoutDelay:         123,
    sortList:              "asc",
    configTimeout:         123,
    scaleMap:              true,
    noHrefIsMask:          true,
    boundList:             $(),
    showToolTip:           true,
    toolTipContainer:      $(),
    toolTipClose:          ["area-mouseout", "area-click", "tooltip-click", "image-mouseout"],
    onClick:               onClickData => {},
    onMouseover:           onMouseData => {},
    onMouseout:            onMouseData => {},
    onGetList:             onGetListData => $(),
    onConfigured:          bool => {},
    onStateChange:         onStateChangeData => {},
    onShowToolTip:         onShowToolTipData => {},
};

$("img").mapster(options)
$("img").mapster("select")
$("img").mapster("deselect")
$("img").mapster("set", true, options)
$("img").mapster("get", "foo")
$("img").mapster("highlight", true)
$("img").mapster("unbind", true)
$("img").mapster("snapshot")
$("img").mapster("rebind", options)
$("img").mapster("resize", 123, 123, 123)
$("img").mapster("keys", "foo", true)
$("img").mapster("keys", true)
$("img").mapster("set_options", options)
$("img").mapster("get_options", "foo", true)
$("img").mapster("tooltip", "foo");

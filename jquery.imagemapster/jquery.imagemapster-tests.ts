///<reference path="./jquery.imagemapster.d.ts" />
///<reference path="../jquery/jquery.d.ts" />

const areaOptions: JQueryImageMapster.AreaRenderingOptions = {
    key:         "foo",
    includeKeys: "foo",
    isMask:      true,
    toolTip:     "tooltip",
};

const onClickData: JQueryImageMapster.OnClickData = {
    listTarget: $(),
    key:        "foo",
    e:          $.Event("click"),
    selected:   true,
}

const onMouseData: JQueryImageMapster.OnMouseData = {
    key:      "foo",
    selected: true,
    e:        $.Event("click"),
    options:  areaOptions,
};

const onGetListData: JQueryImageMapster.OnGetListData = {
    key:     "foo",
    value:   "foo",
    area:    [{}],
    options: areaOptions,
};

const onStateChangeData: JQueryImageMapster.OnStateChangeData = {
    key:      "foo",
    state:    "highlight",
    selected: true,
};

const onShowToolTipData: JQueryImageMapster.OnShowToolTipData = {
    toolTip: $(),
    key: "foo",
    selected: true,
    areaOptions,
};

const bool = true;

const options: JQueryImageMapster.Options = {
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

import 'bootstrap-toggle';

const $elem = $("#toggle");

// Test Initialise Cases
$elem.bootstrapToggle();

$elem.bootstrapToggle({});

$elem.bootstrapToggle({
    // Defaults from source project
    on: 'On',
    off: 'Off',
    onstyle: 'primary',
    offstyle: 'default',
    size: 'normal',
    style: '',
    width: null,
    height: null
});

$elem.bootstrapToggle({
    width: 100,
    height: 100
});

$elem.bootstrapToggle({
    width: "100%",
    height: "100%"
});

// Methods
$elem.bootstrapToggle("destroy");
$elem.bootstrapToggle("on");
$elem.bootstrapToggle("off");
$elem.bootstrapToggle("toggle");
$elem.bootstrapToggle("enable");
$elem.bootstrapToggle("disable");

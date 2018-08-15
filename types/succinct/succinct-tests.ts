

// Call with no arguments (accepting defaults)
$(".truncate").succinct();

// Specify size
$(".truncate").succinct({
    size: 120
});

// Specify ellipsis replacement
$(".truncate").succinct({
    omission: "&rarr;"
});

// Specify flag to leave trailing special characters
$(".truncate").succinct({
    ignore: false
});

// Combine options
$(".truncate").succinct({
    size: 120,
    omission: '...',
    ignore: false
});

// Can chain jQuery methods
$(".truncate")
    .succinct()
    .removeClass("truncate");
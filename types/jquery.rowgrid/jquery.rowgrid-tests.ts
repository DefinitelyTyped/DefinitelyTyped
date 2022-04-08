/*
 * Test different options
 */

var options = {
    minMargin: 10,
    maxMargin: 35,
    itemSelector: ".item"
};

$(".container").rowGrid(options);


/*
 *  Test endless scrolling
 */

// append new items
$(".container").append("<div class='item'><img src='http://placehold.it/310x200' /></div>");
// arrange appended items
$(".container").rowGrid("appended");

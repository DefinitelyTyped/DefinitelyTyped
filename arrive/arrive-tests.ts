/// <reference path="arrive.d.ts" />

function test_arrive() {
    // watch for creation of an element which satisfies the selector ".test-elem"
    $(document).arrive(".test-elem", function() {
        // 'this' refers to the newly created element
        var $newElem = $(this);
    });

    // the above event would watch for creation of element in whole document
    // it's better to be more specific whenever possible, for example
    $(".container-1").arrive(".test-elem", function() {
        var $newElem = $(this);
    });

    // watch for element creation in the whole HTML document
    document.arrive(".test-elem", function() {
        // 'this' refers to the newly created element
    });

    // this will attach arrive event to all elements in the NodeList
    document.getElementsByClass(".container-1").arrive(".test-elem", function() {
        // 'this' refers to the newly created element
    });

    // unbind all arrive events on document element
    $(document).unbindArrive();

    // unbind all arrive events on document element which are watching for ".test-elem" selector
    $(document).unbindArrive(".test-elem");

    // unbind only a specific callback
    $(document).unbindArrive(callbackFunc);

    // unbind only a specific callback on ".test-elem" selector
    $(document).unbindArrive(".test-elem", callbackFunc);

    $(document).arrive(".test-elem", {fireOnAttributesModification: true}, function() {
        // 'this' refers to the newly created element
        var $newElem = $(this);
    });

    // watch for removal of an element which satisfies the selector ".test-elem"
    $(".container-1").leave(".test-elem", function() {
        var $removedElem = $(this);
    });
}

///<reference types="jquery" />

$("span").dotdotdot({ ellipsis: ":::" });
$("span").dotdotdot({ wrap: "letter" });
$("span").dotdotdot({ fallbackToLetter: false });
$("span").dotdotdot({ after: "a.after" });
$("span").dotdotdot({ after: $("#after") });
$("span").dotdotdot({ watch: true });
$("span").dotdotdot({ height: 42 });
$("span").dotdotdot({ tolerance: 69 });
$("span").dotdotdot({ callback: () => { } });
$("span").dotdotdot({ callback: (isTruncated: boolean) => { } });
$("span").dotdotdot({ callback: (isTruncated: boolean, orgContent: any) => { } });
$("span").dotdotdot({ lastCharacter: {} });
$("span").dotdotdot({ lastCharacter: { remove: [','] } });
$("span").dotdotdot({ lastCharacter: { noEllipsis: ['.', '.'] } });

// Copied from documentation
$("#wrapper").dotdotdot({
    /*    The text to add as ellipsis. */
    ellipsis: '... ',

    /*    How to cut off the text/html: 'word'/'letter'/'children' */
    wrap: 'word',

    /*    Wrap-option fallback to 'letter' for long words */
    fallbackToLetter: true,

    /*    jQuery-selector for the element to keep and put after the ellipsis. */
    after: null,

    /*    Whether to update the ellipsis: true/'window' */
    watch: false,

    /*    Optionally set a max-height, if null, the height will be measured. */
    height: null,

    /*    Deviation for the height-option. */
    tolerance: 0,

    /*    Callback function that is fired after the ellipsis is added,
        receives two parameters: isTruncated(boolean), orgContent(string). */
    callback: function (isTruncated, orgContent) { },

    lastCharacter: {

        /*    Remove these characters from the end of the truncated text. */
        remove: [' ', ',', ';', '.', '!', '?'],

        /*    Don't add an ellipsis if this array contains
            the last character of the truncated text. */
        noEllipsis: []
    }
});

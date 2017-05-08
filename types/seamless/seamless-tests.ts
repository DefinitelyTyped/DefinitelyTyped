/* Create Parent Seamless IFrame */
$('#myiframe').seamless();
$('#myiframe').seamless({
    loading: 'I am loading!!!!'
});
// The default arguments.
var defaults = {
    showLoadingIndicator: true,
    loading: 'Loading ...',
    spinner: 'http://www.travistidwell.com/seamless.js/src/loader.gif',
    onConnect: null,
    styles: [],
    fallback: true,
    fallbackParams: '',
    fallbackText: '',
    fallbackLinkText: 'Click here',
    fallbackLinkAfter: ' to open in a separate window.',
    fallbackStyles: [
        'padding: 15px',
        'border: 1px solid transparent',
        'border-radius: 4px',
        'color: #3a87ad',
        'background-color: #d9edf7',
        'border-color: #bce8f1'
    ],
    fallbackLinkStyles: [
        'display: inline-block',
        'color: #333',
        'border: 1px solid #ccc',
        'background-color: #fff',
        'padding: 5px 10px',
        'text-decoration: none',
        'font-size: 12px',
        'line-height: 1.5',
        'border-radius: 6px',
        'font-weight: 400',
        'cursor: pointer',
        '-webkit-user-select: none',
        '-moz-user-select: none',
        '-ms-user-select: none',
        'user-select: none'
    ],
    fallbackLinkHoverStyles: [
        'background-color:#ebebeb',
        'border-color:#adadad'
    ],
    fallbackWindowWidth: 960,
    fallbackWindowHeight: 800
};
$('#myiframe').seamless(defaults);

/* Connect Child Page to Parent Page */
(function(){
    $.seamless.connect({
        url: 'index.html'
    });
    $.seamless.connect({
        url: 'index.html',
        container: 'div.content'
    });
}());

/* Communicate to the Child page from the Parent page. */
(function() {
    var child = $('#myiframe').seamless();
    child.show();
    // Send a message
    child.send({
        myparam: 'This is anything you want it to be...'
    });

    // Receive a message
    child.receive(function (data, event) {

        // Print out the data that was received.
        console.log(data);
    });
}());

/* Communicate to the Parent page from the Child page. */
(function(){
    var parent = $.seamless.connect({
        url: 'index.html'
    });

// Send a message
    parent.send({
        myparam: 'This is anything you want it to be...'
    });

// Receive a message
    parent.receive(function(data, event) {

        // Print out the data that was received.
        console.log(data);
    });
}());


/* Send Responses */
(function(){
    var child = $('#myiframe').seamless();

    child.send({
        data: {
            mydata: 'This is a message'
        },
        success: function(data: any) {

            // 'data' is what was returned from the child 'receive' function.
            console.log(data);
        }
    });

    /* Receive a message */
    var parent = $.seamless.connect({
        url: 'index.html'
    });

    parent.receive(function(data, event) {

        // Print out the data that was received.
        console.log(data);

        // Now return something for the response.
        return {
            myresponse: "I'm listening..."
        };
    });
}());

/* Child iFrame Cookie Problem */
$.seamless.options.requireCookies = true;

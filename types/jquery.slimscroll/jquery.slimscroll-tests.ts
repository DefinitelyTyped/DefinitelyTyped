$("div").slimScroll();

$("div").slimScroll({
    width: '300px',
    height: '500px',
    size: '10px',
    position: 'left',
    color: '#ffcc00',
    alwaysVisible: true,
    distance: '20px',
    start: $('#child_image_element'),
    railVisible: true,
    railColor: '#222',
    railOpacity: 0.3,
    wheelStep: 10,
    allowPageScroll: false,
    disableFadeOut: false
});


$(function(){
    $('#inner-content-div').slimScroll({
        height: '250px'
    });
});

$('#slimtest2').slimScroll({
    position: 'left',
    height: '150px',
    railVisible: true,
    alwaysVisible: true
});

$('#slimtest3').slimScroll({
    color: '#00f',
    size: '10px',
    height: '180px',
    alwaysVisible: true
});

$('#slimtest3').slimScroll({
    color: '#00f',
    size: '10px',
    height: '180px',
    alwaysVisible: true,
    destroy: true
});

$("div").slimScroll().bind('slimscroll', function(e){
    console.log("Reached " + e);
});
var options : IJQuerySlimScrollOptions = {
    destroy: true,
    position: 'left'
};

$('#slimtest3').slimScroll(options);

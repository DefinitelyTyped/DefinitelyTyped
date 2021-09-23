// https://github.com/customd/jquery-visible/blob/master/examples/demo-basic.html
$(function(){

    // Add the spans to the container element.
    $('#container dt').each(function(){ $(this).append('<span></span>'); });

    // Trigger the
    $('#detect').on('click',function(){

        // Select the detection type.
        var detectPartial = $('#detect_type').val() == 'partial';

        // Loop over each container, and check if it's visible.
        $('#container dt').each(function(){

            // Is this element visible onscreen?
            var visible = $(this).visible( detectPartial );

            // Set the visible status into the span.
            $(this).find('span').text( visible ? 'Onscreen' : 'Offscreen' ).toggleClass('visible',visible);
        });
    });
});

// https://www.customd.com/articles/13/checking-if-an-element-is-visible-on-screen-using-jquery
// Check both vertical, and horizontal at once
$('#element').visible(true, false, 'both');

// Check only horizontal
$('#element').visible(true, false, 'horizontal');

// Check only vertical
$('#element').visible(true, false, 'vertical');

// Check container
$('#element').visible(true, false, 'horizontal', $('body'))

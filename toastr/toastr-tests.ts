/// <reference path="toastr-1.2.d.ts" />

function test_basic() {
	var t = [];
    t.push(toastr.info('Are you the 6 fingered man?'));
    t.push(toastr.warning('My name is Inigo Montoya. You Killed my father, prepare to die!'));
    t.push(toastr.success('Have fun storming the castle!', 'Miracle Max Says'));
    t.push(toastr.error('I do not think that word means what you think it means.', 'Inconceivable!'));
    toastr.clear(t[0]); // clear 1
	toastr.clear(); // clear all

    var msg = 'Do you think Rodents of Unusual Size really exist?';
    var title = 'Fireswamp Legends';
    var overrides = { timeOut: 250 };
    toastr.warning(msg, title, overrides);
    toastr.options.onclick = function () { }
}

declare var $;
function test_fromdemo() {
    $('#showtoast').click(function () {
        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val(),
            msg = $('#message').val(),
            title = $('#title').val() || '',
            $fadeIn = $('#fadeIn'),
            $fadeOut = $('#fadeOut'),
            $timeOut = $('#timeOut'),
            $extendedTimeOut = $('#extendedTimeOut'),
            toastIndex = 123;
        toastr.options = {
            debug: $('#debugInfo').prop('checked'),
            tapToDismiss: $('#tapToDismiss').prop('checked'),
            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right'
        }
        if ($fadeIn.val().length) {
            toastr.options.fadeIn = +$fadeIn.val()
        }
        if ($fadeOut.val().length) {
            toastr.options.fadeOut = +$fadeOut.val()
        }
        if ($timeOut.val().length) {
            toastr.options.timeOut = +$timeOut.val()
        }
        if ($extendedTimeOut.val().length) {
            toastr.options.extendedTimeOut = +$extendedTimeOut.val()
        }
        var $toast = toastr[shortCutFunction](msg, title)
        if ($toast.find('#okBtn').length) {
            $toast.on('click', '#okBtn', function () {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!')
                $toast.remove()
            })
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.on('click', '#surpriseBtn', function () {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.')
            })
        }
   });
	$('#clearlasttoast').click(function() {
		toastr.clear($toastlast);
	});
	$('#cleartoasts').click(function () {
		toastr.clear();
	});  
}
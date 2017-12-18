

function test_basic() {
    var t: any[] = [];
    t.push(toastr.info('Are you the 6 fingered man?'));
    t.push(toastr.warning('My name is Inigo Montoya. You Killed my father, prepare to die!'));
    t.push(toastr.success('Have fun storming the castle!', 'Miracle Max Says'));
    t.push(toastr.error('I do not think that word means what you think it means.', 'Inconceivable!'));
    toastr.clear(t[0]); // clear 1
    toastr.clear(); // clear all
    toastr.remove();

    var msg = 'Do you think Rodents of Unusual Size really exist?';
    var title = 'Fireswamp Legends';
    var overrides = { timeOut: 250 };
    toastr.warning(msg, title, overrides);
    toastr.options.onclick = function () { }
}

function test_fromdemo() {
    var i = -1,
        toastCount = 0,
        $toastlast: any,
        getMessage = function () {
            var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
                '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
                'Are you the six fingered man?',
                'Inconceivable!',
                'I do not think that means what you think it means.',
                'Have fun storming the castle!'
            ];
            i++;
            if (i === msgs.length) {
                i = 0;
            }

            return msgs[i];
        };
    $('#showtoast').click(function () {
		var shortCutFunction = $("#toastTypeGroup input:radio:checked").val() as string,
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
			positionClass: $('#positionGroup input:radio:checked').val() as string || 'toast-top-right',
			preventDuplicates: true,
            progressBar: true
		}
        if ((<string> $fadeIn.val()).length) {
			toastr.options.showDuration = +$fadeIn.val()
        }
        if ((<string> $fadeOut.val()).length) {
			toastr.options.hideDuration = +$fadeOut.val()
        }
        if ((<string> $timeOut.val()).length) {
            toastr.options.timeOut = +$timeOut.val()
        }
        if ((<string> $extendedTimeOut.val()).length) {
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
    $('#clearlasttoast').click(function () {
        toastr.clear($toastlast);
    });
    $('#cleartoasts').click(function () {
        toastr.clear();
    });
}

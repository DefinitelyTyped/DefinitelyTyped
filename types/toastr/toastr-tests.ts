
declare let displayMethodStr: 'success' | 'info' | 'warning' | 'error';
declare let undefinedVal: undefined;
declare let booleanVal: boolean;
declare let booleanOrUndefinedVal: boolean | undefined;
declare let stringVal: string;
declare let stringOrUndefinedVal: string | undefined;
declare let toastrOptionsVal: ToastrOptions;
declare let toastrOptionsOrUndefinedVal: ToastrOptions | undefined;
declare let jQueryVal: JQuery;
declare let jQueryOrUndefinedVal: JQuery | undefined;
declare let clearOptionsVal: {force: boolean};
declare let clearOptionsOrUndefinedVal: typeof clearOptionsVal | undefined;

function test_basic() {
    var t: JQuery[] = [];
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

    // Override global options
    toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})

    // Options from Readme
    // Escape HTML characters
    toastr.options.escapeHtml = true;
    // Close Button
    toastr.options.closeButton = true;
    toastr.options.closeHtml = '<button><i class="icon-off"></i></button>';
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;
    toastr.options.closeEasing = 'swing';
    // Display Sequence
    toastr.options.newestOnTop = false;
    // Callbacks
    toastr.options.onShown = function() { console.log('hello'); }
    toastr.options.onHidden = function() { console.log('goodbye'); }
    toastr.options.onclick = function() { console.log('clicked'); }
    toastr.options.onCloseClick = function() { console.log('close button clicked'); }
    // Animation Options
    // Easings
    toastr.options.showEasing = 'swing';
    toastr.options.hideEasing = 'linear';
    toastr.options.closeEasing = 'linear';
    // Animation method
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.closeMethod = 'slideUp';
    // Prevent Duplicates
    toastr.options.preventDuplicates = true;
    // Timeouts
    toastr.options.timeOut = 30; // How long the toast will display without user interaction
    toastr.options.extendedTimeOut = 60; // How long the toast will display after a user hovers over it
    // Prevent from Auto Hiding
    toastr.options.timeOut = 0;
    toastr.options.extendedTimeOut = 0;
    // Progress Bar
    toastr.options.progressBar = true;
    // rtl
    toastr.options.rtl = true;
}

function test_fromdemo() {
    var i = -1,
        $toastlast: JQuery,
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
		var shortCutFunction = $("#toastTypeGroup input:radio:checked").val() as 'success' | 'info' | 'warning' | 'error',
			msg = $('#message').val() as string,
			title = $('#title').val() as  string || '',
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
			toastr.options.showDuration = +$fadeIn.val()!
        }
        if ((<string> $fadeOut.val()).length) {
			toastr.options.hideDuration = +$fadeOut.val()!
        }
        if ((<string> $timeOut.val()).length) {
            toastr.options.timeOut = +$timeOut.val()!
        }
        if ((<string> $extendedTimeOut.val()).length) {
            toastr.options.extendedTimeOut = +$extendedTimeOut.val()!
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

function test_displayOptions() {
    // 1st parameter
    jQueryVal = toastr[displayMethodStr](stringVal);

    // 2nd parameter
    jQueryVal = toastr[displayMethodStr](stringVal, undefinedVal);
    jQueryVal = toastr[displayMethodStr](stringVal, stringVal);
    jQueryVal = toastr[displayMethodStr](stringVal, stringOrUndefinedVal);

    // 3rd parameter
    jQueryVal = toastr[displayMethodStr](stringVal, stringOrUndefinedVal, undefinedVal);
    jQueryVal = toastr[displayMethodStr](stringVal, stringOrUndefinedVal, toastrOptionsVal);
    jQueryVal = toastr[displayMethodStr](stringVal, stringOrUndefinedVal, toastrOptionsOrUndefinedVal);
}

function test_clearOptions() {
    // 1st parameter
    toastr.clear();
    toastr.clear(undefinedVal);
    toastr.clear(jQueryVal);
    toastr.clear(jQueryOrUndefinedVal);

    // 2nd parameter
    toastr.clear(jQueryOrUndefinedVal, clearOptionsVal);
    toastr.clear(jQueryOrUndefinedVal, undefinedVal);
    toastr.clear(jQueryOrUndefinedVal, clearOptionsOrUndefinedVal);
}

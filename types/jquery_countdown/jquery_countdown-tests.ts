import { } from 'jquery.countdown';

/**
 * Advanced coupon site
 * @see http://hilios.github.io/jQuery.countdown/examples/advanced-coupon-site.html
 */
$('#clock').countdown('2020/10/10 12:34:56')
	.on('update.countdown', function (event: JQueryCountdown.CallbackEventObject)
	{
		var format = '%H:%M:%S';
		if (event.offset.totalDays > 0)
		{
			format = '%-d day%!d ' + format;
		}
		if (event.offset.weeks > 0)
		{
			format = '%-w week%!w ' + format;
		}
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function (event)
	{
		$(this).html('This offer has expired!')
			.parent().addClass('disabled');

	});

/**
 * Basic coupon site
 * @see http://hilios.github.io/jQuery.countdown/examples/basic-coupon-site.html
 */
$('#clock').countdown('2020/10/10', function (event: JQueryCountdown.CallbackEventObject)
{
	$(this).html(event.strftime('%D days %H:%M:%S'));
});

/**
 * Continue after finish
 * @see http://hilios.github.io/jQuery.countdown/examples/count-up.html
 */
var fiveSeconds = new Date().getTime() + 5000;
$('#clock').countdown(fiveSeconds, { elapse: true })
	.on('update.countdown', function (event: JQueryCountdown.CallbackEventObject)
	{
		var $this = $(this);
		if (event.elapsed)
		{
			$this.html(event.strftime('After end: <span>%H:%M:%S</span>'));
		} else
		{
			$this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
		}
	});

/**
 * Legacy style
 * @see http://hilios.github.io/jQuery.countdown/examples/legacy-style.html
 */
$('#clock').countdown('2020/10/10', function (event: JQueryCountdown.CallbackEventObject)
{
	var $this = $(this).html(event.strftime(''
		+ '<span>%w</span> weeks '
		+ '<span>%d</span> days '
		+ '<span>%H</span> hr '
		+ '<span>%M</span> min '
		+ '<span>%S</span> sec'));
});

/**
 * Months and weeks offsets
 * @see http://hilios.github.io/jQuery.countdown/examples/month-and-week-offset.html
 */
$('#wrapper').countdown('2020/10/10', function (event: JQueryCountdown.CallbackEventObject)
{
	$('#clock-a').html(event.strftime('%w weeks and %d days'));
	$('#clock-b').html(event.strftime('%m months and %n days'));
	$('#clock-c').html(event.strftime('%D days'));
});

/**
 * Multiple instances on the same page
 * @see http://hilios.github.io/jQuery.countdown/examples/multiple-instances.html
 */
$('[data-countdown]').each(function ()
{
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function (event)
	{
		$this.html(event.strftime('%D days %H:%M:%S'));
	});
});

/**
 * Sum of total hours remaining
 * @see http://hilios.github.io/jQuery.countdown/examples/show-total-hours.html
 */
$('#clock').countdown("2020/10/10", function (event: JQueryCountdown.CallbackEventObject)
{
	var totalHours = event.offset.totalDays * 24 + event.offset.hours;
	$(this).html(event.strftime(totalHours + ' hr %M min %S sec'));
});

/**
 * Callback style and formatter modifiers
 * @see http://hilios.github.io/jQuery.countdown/examples/website-launch.html
 */
$('#clock').countdown('2020/10/10').on('update.countdown', function (event: JQueryCountdown.CallbackEventObject)
{
	var $this = $(this).html(event.strftime(''
		+ '<span>%-w</span> week%!w '
		+ '<span>%-d</span> day%!d '
		+ '<span>%H</span> hr '
		+ '<span>%M</span> min '
		+ '<span>%S</span> sec'));
});

/**
 * Epoch time, config, countdown(String)
 */
$('div#clock').countdown(1516313389, {
	elapse: true,
	precision: 1000,
	defer: true
})
	.on('update.countdown', function (event: JQueryCountdown.CallbackEventObject)
	{
		if (event.elapsed)
		{ // Either true or false
			// Counting up...
		} else
		{
			// Countdown...
		}
	})
	.countdown('start');
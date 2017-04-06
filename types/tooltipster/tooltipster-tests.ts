

$(function() {
	var tooltips = <JQueryTooltipster.ITooltipsterInstance[]>$("#tooltip").tooltipster({
		content: "hi friend!",
		delay: 300,
		functionAfter: (origin) => {
			console.log("tooltip closed!");
		},
		multiple: true
	});
	tooltips[0].show();
	tooltips[0].hide();
	tooltips[0].destroy();
});
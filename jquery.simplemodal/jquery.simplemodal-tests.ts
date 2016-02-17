// Tests taken from documentation: http://www.ericmmartin.com/projects/simplemodal/

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.simplemodal.d.ts"/>

// Chained call with no options
$("#sample").modal();

// Stand-alone call with no options
$.modal($("#sample"));

// Enable overlay click-to-close
$("#sample").modal({overlayClose:true});

// Change overlay color and opacity
$("#sample").modal({
	opacity:80,
	overlayCss: {backgroundColor:"#fff"}
});

// Disable focus (allows tabbing away from dialog)
$("#sample").modal({focus:false});

// Change min height and width
$("#sample").modal({
	minHeight:400,
	minWidth: 600
});

// Manually set position
$("#sample").modal({position: [10,10]});

// Manually set position using percentages
$("#sample").modal({position: ["50%","50%"]});

// Display an external page using an iframe
var src = "http://365.ericmmartin.com/";
$.modal('<iframe src="' + src + '" height="450" width="830" style="border:0">', {
	closeHTML:"",
	containerCss:{
		backgroundColor:"#fff",
		borderColor:"#fff",
		height:450,
		padding:0,
		width:830
	},
	overlayClose:true
});

// Opening animations
$("#sample").modal({onOpen: function (dialog) {
	dialog.overlay.fadeIn('slow', function () {
		dialog.data.hide();
		dialog.container.fadeIn('slow', function () {
			dialog.data.slideDown('slow');
		});
	});
}});

// Closing animations
$("#sample").modal({onClose: function (dialog) {
	dialog.data.fadeOut('slow', function () {
		dialog.container.hide('slow', function () {
			dialog.overlay.slideUp('slow', function () {
				$.modal.close();
			});
		});
	});
}});

// Default Values

// Example – Single Property:
$.modal.defaults.closeClass = "modalClose";

// Example – Multiple Properties:
$.extend($.modal.defaults, {
	closeClass: "modalClose",
	closeHTML: "<a href='#'>Close</a>"
});

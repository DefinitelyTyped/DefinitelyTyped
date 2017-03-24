function example_1() {
	$.window({
		title: "Cyclops Studio",
		url: "http://apps.fstoke.me/"
	});
}

function example_2() {
	$.window({
			showModal: true,
			modalOpacity: 0.5,
			icon: "http://www.fstoke.me/favicon.ico",
			title: "Professional JavaScript for Web Developers",
			content: $("#window_block2").html(), // load window_block2 html content
			footerContent: "<img style=\"vertical-align:middle;\" src=\"img/ star.png\"> This is a nice plugin :^)"
	});
};

function example_3() {
	// prepare customerized static attributes, see static attributes
	// Note: you should call this method before starting to create window instances, or windows might display wrong.
	$.window.prepare({
		dock: 'bottom',       // change the dock direction: 'left', 'right', 'top', 'bottom'
		animationSpeed: 200,  // set animation speed
		minWinLong: 180       // set minimized window long dimension width in pixel
	});

	// limit window within body
	$.window({
			icon: 'http://www.fstoke.me/favicon.ico',
			title: "This window only can be dragged within body boundary",
			content: "<div style=\"padding: 10px; font - weight:bold; \">I only can be dragged within body element." +
		"<br><br>Really? Really? You can try it... :)</div>",
		checkBoundary: true,
		x: 80,
		y: 80
	});

	// limit window within a element
	$("#my_boundary_panel").window({
		icon: 'http://mail.google.com/favicon.ico',
		title: "This window only can be dragged within its parent element",
		content: "<div style=\"border: 15px solid green; padding: 10px; font - weight:bold; \">I only can be dragged within my boss...@@</div>",
		checkBoundary: true,
		width: 200,
		height: 160,
		maxWidth: 400,
		maxHeight: 300,
		x: 80,
		y: 80
	});

	// assign the dock area
	$.window.prepare({
		dock: 'bottom',       // change the dock direction: 'left', 'right', 'top', 'bottom'
		dockArea: $('#myDockArea'), // set the dock area
		animationSpeed: 200,  // set animation speed
		minWinLong: 180       // set minimized window long dimension width in pixel
	});
}

function example_4() {
	$.window({
		title: "Un-draggable & Un-resizable Window",
		content: "<div style=\"padding: 10px; font - weight:bold; \">I can't be dragged...<br>" +
			"I can't be resized too...<br><br>Of course, maximize and minimize are also disabled... <br><br>" +
			"So... What can I do? I only can be closed. @_@</div>",
		draggable: false,
		resizable: false,
		maximizable: false,
		minimizable: false,
		showModal: true
	});
}

function example_5() {
	var log = console.log;
	$.window({
		title: "complext window",
		content: $("#window_block5").html(), // load window_block5 html content
		x: 150,               // the x-axis value on screen, if -1 means put on screen center
		y: 100,               // the y-axis value on screen, if -1 means put on screen center
		width: 600,           // window width
		height: 300,          // window height
		minWidth: 200,        // the minimum width, if -1 means no checking
		minHeight: 100,       // the minimum height, if -1 means no checking
		maxWidth: 700,        // the minimum width, if -1 means no checking
		maxHeight: 400,       // the minimum height, if -1 means no checking
		scrollable: false,    // a boolean flag to show scroll bar or not
		onOpen: (wnd: JQueryWindow.Window) => {  // a callback function while container is added into body
			alert('open');
		},
		onShow: (wnd: JQueryWindow.Window) => {  // a callback function while whole window display routine is finished
			alert('show');
		},
		onClose: (wnd: JQueryWindow.Window) => { // a callback function while user click close button
			alert('close');
		},
		onSelect: (wnd: JQueryWindow.Window) => { //  a callback function while user select the window
			log('select');
		},
		onUnselect: (wnd: JQueryWindow.Window) => { // a callback function while window unselected
			log('unelect');
		},
		onDrag: (wnd: JQueryWindow.Window) => { // a callback function while window is going to drag
			log('drag');
		},
		afterDrag: (wnd: JQueryWindow.Window) => { // a callback function after window dragged
			log('after dragged');
		},
		onResize: (wnd: JQueryWindow.Window) => { // a callback function while window is going to resize
			log('resize');
		},
		afterResize: (wnd: JQueryWindow.Window) => { // a callback function after window resized
			log('after resized');
		},
		onMinimize: (wnd: JQueryWindow.Window) => { // a callback function while window is going to minimize
			log('minimize');
		},
		afterMinimize: (wnd: JQueryWindow.Window) => { // a callback function after window minimized
			log('after minimized');
		},
		onMaximize: (wnd: JQueryWindow.Window) => { // a callback function while window is going to maximize
			log('maximize');
		},
		afterMaximize: (wnd: JQueryWindow.Window) => { // a callback function after window maximized
			log('after maximized');
		},
		onCascade: (wnd: JQueryWindow.Window) => { // a callback function while window is going to cascade
			log('cascade');
		},
		afterCascade: (wnd: JQueryWindow.Window) => { // a callback function after window cascaded
			log('after cascaded');
		}
	});
}
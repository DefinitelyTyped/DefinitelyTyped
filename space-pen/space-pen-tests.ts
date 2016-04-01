/// <reference path="./space-pen.d.ts" />

import SpacePen = require("space-pen");
import View = SpacePen.View;

class Spacecraft extends View {
	static content() {
		this.div(()=> {
			this.h1("Spacecraft");
			this.ol(()=> {
				this.li("Apollo");
				this.li("Soyuz");
				this.li("Space Shuttle");
			});
		});
	}

	constructor() {
		super();
	}
}

var view = new Spacecraft();
(<JQuery><any>view).find('ol').append('<li>Star Destroyer</li>');

(<JQuery><any>view).on('click', 'li', function () {
	alert("They clicked on " + $(this).text());
});



import SpacePen = require("space-pen");
import View = SpacePen.View;

class Spacecraft extends View {
    static content() {
        Spacecraft.div(()=> {
            Spacecraft.h1("Spacecraft");
            Spacecraft.ol(()=> {
                Spacecraft.li("Apollo");
                Spacecraft.li("Soyuz");
                Spacecraft.li("Space Shuttle");
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

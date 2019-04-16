import Cycled = require('cycled');

const cycled = new Cycled([1, 2, 3]);
// $ExpectType Cycled<number>
cycled;

// $ExpectType number
cycled.index;
cycled.index = 1;

// $ExpectType number
cycled.current();

// $ExpectType number
cycled.next();

// $ExpectType number
cycled.previous();

// $ExpectType number
cycled.step(10);

// $ExpectType Iterator<number>
cycled.indefinitely();

// $ExpectType Iterator<number>
cycled.indefinitelyReversed();

// $ExpectType number[]
[...cycled];

class TabComponent {
    views: Cycled<string>;
    activeView: string;

    constructor(views: string[]) {
        this.activeView = views[0];
        this.views = new Cycled(views);
    }

    setActiveView(view: string) {
        this.activeView = view;
        this.views.index = this.views.indexOf(view);
    }

    nextView() {
        this.setActiveView(this.views.next());
    }

    previousView() {
        this.setActiveView(this.views.previous());
    }
}

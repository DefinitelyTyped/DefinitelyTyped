// Type definitions for sonar-js 1.1
// Project: https://github.com/brandonweiss/sonar-js
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Sonar;

/**
 * A tiny library for detecting when a browser is scrolled to the bottom of a web page.
 *
 * You could use this, for example, on a blog to show a popover when a reader has finished a post,
 * letting them know they can receive new posts by email if they submit their email address.
 */
declare class Sonar {
    withinRangeOfPageBottom?: boolean;

    constructor(window: Window);

    ping(range: number, bottomFoundCallback?: Sonar.SonarCallback, bottomLostCallback?: Sonar.SonarCallback): void;

    stop(): void;
}

declare namespace Sonar {
    type SonarCallback = () => void;
}

export = Sonar;

// Type definitions for Marked
// Project: https://github.com/psergus/ngWYSIWYG
// Definitions by: Patrick Mac Kay <https://github.com/patrick-mackay>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ngWYSIWYGToolbar {
    name: string;
    items: string[];
}

interface ngWYSIWYGConfig {
    sanitize: boolean;
    toolbar: ngWYSIWYGToolbar[]
}

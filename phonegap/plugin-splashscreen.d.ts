interface Splashscreen {
    show(): void;
    hide(): void;
}

interface Navigator {
    splashscreen: Splashscreen;
}

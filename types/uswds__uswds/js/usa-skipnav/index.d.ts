interface Skipnav {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const skipnav: Skipnav;

export default skipnav;

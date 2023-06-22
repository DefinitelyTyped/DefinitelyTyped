interface Navigation {
    focusTrap: null;
    init(root: HTMLElement | Document): void;
    teardown(): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    toggleNav(active: boolean): boolean;
}

declare const navigation: Navigation;

export default navigation;

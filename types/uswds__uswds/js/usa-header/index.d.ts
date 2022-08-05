interface Navigation {
    focusTrap: null;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    teardown(): void;
    toggleNav(active: boolean): boolean;
}

declare const navigation: Navigation;

export default navigation;

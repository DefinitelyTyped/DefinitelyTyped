interface Banner {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const banner: Banner;

export default banner;

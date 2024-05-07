import { Component } from "react";
import { Icon, IconButtonProps, IconProps, ImageSource } from "./Icon";

export const FA6Style: {
    regular: 0;
    light: 1;
    solid: 2;
    brand: 3;
    sharpSolid: 4;
    duotone: 5;
    thin: 6;
};

export type ValueOf<T> = T[keyof T];

// borrowed from
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type FontAwesome6IconVariants = keyof Omit<typeof FA6Style, "regular">;

export type FontAwesome6IconProps = { [K in FontAwesome6IconVariants]?: boolean } & IconProps;

export class FontAwesome6IconButton extends Component<
    { [K in FontAwesome6IconVariants]?: boolean } & IconButtonProps,
    any
> {}

export default class FontAwesome6Icon extends Component<FontAwesome6IconProps, any> {
    static getImageSource(
        name: string,
        size?: number,
        color?: string,
        fa6Style?: ValueOf<typeof FA6Style>,
    ): Promise<ImageSource>;
    static getImageSourceSync(
        name: string,
        size?: number,
        color?: string,
        fa6Style?: ValueOf<typeof FA6Style>,
    ): ImageSource;
    static loadFont(file?: string): Promise<void>;
    static hasIcon(name: string): boolean;
    static TabBarItem: typeof Icon.TabBarItem;
    static TabBarItemIOS: typeof Icon.TabBarItemIOS;
    static Button: typeof FontAwesome6IconButton;
}

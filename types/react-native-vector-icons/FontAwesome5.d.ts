import { Component } from "react";
import { Icon, IconProps, ImageSource } from "./Icon";

export const FA5Style: {
    regular: 0;
    light: 1;
    solid: 2;
    brand: 3;
};

export type ValueOf<T> = T[keyof T];

// borrowed from
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type FontAwesome5IconVariants = keyof Omit<typeof FA5Style, "regular">;

// modified from https://stackoverflow.com/a/49725198/1105281
export type AllowOnlyOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
    {
        [K in Keys]-?: Partial<Pick<T, K>> &
            Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys];

export type FontAwesome5IconProps = AllowOnlyOne<
    { [K in FontAwesome5IconVariants]?: boolean } & IconProps,
    FontAwesome5IconVariants
>;

export default class FontAwesome5Icon extends Component<
    FontAwesome5IconProps,
    any
> {
    static getImageSource(
        name: string,
        size?: number,
        color?: string,
        fa5Style?: ValueOf<typeof FA5Style>
    ): Promise<ImageSource>;
    static getImageSourceSync(
        name: string,
        size?: number,
        color?: string,
        fa5Style?: ValueOf<typeof FA5Style>
    ): ImageSource;
    static loadFont(file?: string): Promise<void>;
    static hasIcon(name: string): boolean;
    static ToolbarAndroid: typeof Icon.ToolbarAndroid;
    static TabBarItem: typeof Icon.TabBarItem;
    static TabBarItemIOS: typeof Icon.TabBarItemIOS;
    static Button: typeof Icon.Button;
}

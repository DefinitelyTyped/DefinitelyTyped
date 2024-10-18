import Themes from "../themes";

export default ThemeSet;

declare const ThemeSet: ThemeSet;

interface ThemeSet {
    new(): Themes;
}

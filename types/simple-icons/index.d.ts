// Type definitions for simple-icons 2.5
// Project: https://www.simpleicons.org
// Definitions by: Eric Cornelisesn <https://github.com/ericcornelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SimpleIcon {
    title: string;
    slug: string;
    svg: string;
    path: string;
    source: string;
    hex: string;
}

declare namespace SimpleIcons {
    function get(name: string): SimpleIcon;
}

export default SimpleIcons;
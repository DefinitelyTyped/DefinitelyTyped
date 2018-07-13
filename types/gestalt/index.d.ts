// Type definitions for gestalt 0.75
// Project: https://pinterest.github.io/gestalt
// Definitions by: Nicolás Serrano Arévalo <https://github.com/serranoarevalo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from "react";

// Avatar Props Interface
// https://pinterest.github.io/gestalt/#/Avatar
interface AvatarProps {
    name: string;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
    src?: string;
    verified?: boolean;
}

declare module "gestalt" {
    class Avatar extends Component<AvatarProps, any> {}
}

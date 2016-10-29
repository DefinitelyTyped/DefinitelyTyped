// Type definitions for Fluid 1.8.5
// Project: http://fluidapp.com
// Definitions by: Chris Long <https://github.com/cglong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    fluid: FluidApp.Fluid;
}

declare namespace FluidApp {
    interface Fluid {
        dockBadge: string;

        addDockMenuItem(title: string, onClickHandler: () => any): any;
        beep(): any;
        playSound(sound: string): any;
        removeDockMenuItem(title: string): any;
        requestUserAttention(): any;
        showGrowlNotification(notification: Notification): any;
    }

    interface Notification {
        description?: string;
        icon?: HTMLImageElement | string;
        identifier?: string;
        onclick?: () => any;
        priority?: number;
        sticky?: boolean;
        title?: string;
    }
}

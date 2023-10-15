/// <reference path="definitions.d.ts" />

declare namespace Seatsio {
    interface EventManager {
        // tslint:disable-next-line:no-misused-new
        new(config: EventManagerConfig): EventManager;

        render(): EventManager;

        destroy(): void;
    }

    interface EventManagerConfig {
        divId: string;
        secretKey: string;
        event: string;
        mode: "manageObjectStatuses" | "manageForSaleConfig" | "manageTableBooking" | "manageChannels";
        language?: string | undefined;
        messages?: { [key: string]: string } | undefined;
        tooltipInfo?: ((object: BookableObject) => string) | undefined;
        showFullScreenButton?: boolean | undefined;
        colorScheme?: ColorScheme | undefined;
        colors?: Colors | undefined;
        stylePreset?: StylePreset | undefined;
        style?: Style | undefined;

        onChartRendered?: ((chart: EventManager) => void) | undefined;
        onChartRenderingFailed?: ((chart: EventManager) => void) | undefined;
        onObjectSelected?:
            | ((
                object: BookableObject,
                selectedTicketType?: { price: number; ticketType?: string | undefined },
            ) => void)
            | undefined;
        onObjectDeselected?:
            | ((
                object: BookableObject,
                deselectedTicketType?: { price: number; ticketType?: string | undefined },
            ) => void)
            | undefined;
        onObjectClicked?: ((object: BookableObject) => void) | undefined;
        onFullScreenOpened?: (() => void) | undefined;
        onFullScreenClosed?: (() => void) | undefined;
    }
}

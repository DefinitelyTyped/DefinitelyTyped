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
        mode: 'manageObjectStatuses' | 'manageForSaleConfig' | 'manageTableBooking' | 'manageChannels';
        language?: string;
        messages?: { [key: string]: string };
        tooltipInfo?: (object: BookableObject) => string;
        showFullScreenButton?: boolean;
        colorScheme?: ColorScheme;
        colors?: Colors;
        stylePreset?: StylePreset;
        style?: Style;

        onChartRendered?: (chart: EventManager) => void;
        onChartRenderingFailed?: (chart: EventManager) => void;
        onObjectSelected?: (object: BookableObject, selectedTicketType?: { price: number; ticketType?: string }) => void;
        onObjectDeselected?: (object: BookableObject, deselectedTicketType?: { price: number; ticketType?: string }) => void;
        onObjectClicked?: (object: BookableObject) => void;
        onFullScreenOpened?: () => void;
        onFullScreenClosed?: () => void;
    }
}

/// <reference path="definitions.d.ts" />

declare namespace Seatsio {
    interface ChartManager {
        // tslint:disable-next-line:no-misused-new
        new(config: ChartManagerConfig): ChartManager;

        render(): ChartManager;
        destroy(): void;
    }

    interface ChartManagerConfig {
        divId: string;
        secretKey: string;
        chart: string;
        mode: 'manageRulesets';
        language?: string;
        messages?: { [key: string]: string };
        tooltipInfo?: (object: BookableObject) => string;
        showFullScreenButton?: boolean;
        colorScheme?: ColorScheme;
        colors?: Colors;
        stylePreset?: StylePreset;
        style?: Style;

        onChartRendered?: (chart: ChartManager) => void;
        onChartRenderingFailed?: (chart: ChartManager) => void;
        onObjectSelected?: (object: BookableObject, selectedTicketType?: { price: number; ticketType?: string }) => void;
        onObjectDeselected?: (object: BookableObject, deselectedTicketType?: { price: number; ticketType?: string }) => void;
        onObjectClicked?: (object: BookableObject) => void;
        onFullScreenOpened?: () => void;
        onFullScreenClosed?: () => void;
    }
}

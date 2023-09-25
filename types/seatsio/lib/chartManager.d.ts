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
        mode: "manageRulesets";
        language?: string | undefined;
        messages?: { [key: string]: string } | undefined;
        tooltipInfo?: ((object: BookableObject) => string) | undefined;
        showFullScreenButton?: boolean | undefined;
        colorScheme?: ColorScheme | undefined;
        colors?: Colors | undefined;
        stylePreset?: StylePreset | undefined;
        style?: Style | undefined;

        onChartRendered?: ((chart: ChartManager) => void) | undefined;
        onChartRenderingFailed?: ((chart: ChartManager) => void) | undefined;
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

/// <reference path="definitions.d.ts" />

declare namespace Seatsio {
    interface SeatingChartDesigner {
        // tslint:disable-next-line:no-misused-new
        new(config: SeatingChartDesignerConfig): SeatingChartDesigner;

        render(): SeatingChartDesigner;
        destroy(): void;
    }

    interface SeatingChartDesignerConfig {
        divId: string;
        secretKey: string;
        chartKey: string;
        language?: string;
        features?: {
            enabled: string[],
            disabled: string[],
            readOnly: string[]
        };
        openDraftDrawing?: boolean;
        openLatestDrawing?: boolean;

        onChartCreated?: (chartKey: string) => void;
        onChartUpdated?: (chartKey: string) => void;
        onChartPublished?: (chartKey: string) => void;
        onExitRequested?: () => void;
        onDesignerRendered?: (designer: SeatingChartDesigner) => void;
        onDesignerRenderingFailed?: (designer: SeatingChartDesigner) => void;
    }
}

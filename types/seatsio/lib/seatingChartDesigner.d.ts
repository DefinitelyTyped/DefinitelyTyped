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
        language?: string | undefined;
        features?: {
            enabled: string[];
            disabled: string[];
            readOnly: string[];
        } | undefined;
        openDraftDrawing?: boolean | undefined;
        openLatestDrawing?: boolean | undefined;

        onChartCreated?: ((chartKey: string) => void) | undefined;
        onChartUpdated?: ((chartKey: string) => void) | undefined;
        onChartPublished?: ((chartKey: string) => void) | undefined;
        onExitRequested?: (() => void) | undefined;
        onDesignerRendered?: ((designer: SeatingChartDesigner) => void) | undefined;
        onDesignerRenderingFailed?: ((designer: SeatingChartDesigner) => void) | undefined;
    }
}

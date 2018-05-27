import { PanelCtrl } from 'grafana/app/plugins/sdk';

export class TextPanelCtrl extends PanelCtrl {
    private templateSrv;
    private $sce;
    static templateUrl: string;
    remarkable: any;
    content: string;
    panelDefaults: {
        mode: string;
        content: string;
    };

    constructor($scope: any, $injector: any, templateSrv: any, $sce: any);
    onInitEditMode(): void;
    onRefresh(): void;
    onRender(): void;
    renderText(content: any): void;
    renderMarkdown(content: any): any;
    updateContent(html: any): void;
}

export { TextPanelCtrl as PanelCtrl };

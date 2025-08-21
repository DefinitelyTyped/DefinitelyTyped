declare namespace GorillaEngine.UI {
    interface Zone {
        path: string;
        name: string;
        index: number;
        rootKey: number;
        lowKey: number;
        highKey: number;
        lowVel: number;
        highVel: number;
    }
    interface MappingEditorProps extends Common, Bounds, Background, Clickable {
        zones?: Zone[];
        verticalZoom?: number;
        horizontalZoom?: number;
        refreshView(index?: number): void;
        selectAllZones(): void;
        deselectAllZones(): void;
        selectZones(zones: Partial<Zone[]>): void;
        addZones(zones: Partial<Zone[]>): void;
        removeZones(zones: Partial<Zone[]>): void;
    }

    // tslint:disable-next-line:no-empty-interface
    interface MappingEditor extends MappingEditorProps {}
    class MappingEditor extends Component {
        constructor(options: Partial<MappingEditorProps>);
    }
}

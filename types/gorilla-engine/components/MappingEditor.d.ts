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
    interface MappingEditorProps extends Common, Bounds, Background {
        zones?: Zone[];
        refreshView(index?: number): void;
        addZone(zone: Partial<Zone>): Zone;
        removeZone(zone: Partial<Zone>): void;
    }

    // tslint:disable-next-line:no-empty-interface
    interface MappingEditor extends MappingEditorProps {}
    class MappingEditor extends Component {
        constructor(options: Partial<MappingEditorProps>);
    }
}

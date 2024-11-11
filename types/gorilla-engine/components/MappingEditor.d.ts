declare namespace GorillaEngine.UI {
    interface MappingEditorProps extends Common, Bounds, Background {
        parentPath: string;
        refreshView(index?: number): void;
    }

    // tslint:disable-next-line:no-empty-interface
    interface MappingEditor extends MappingEditorProps {}
    class MappingEditor extends Component {
        constructor(options: Partial<MappingEditorProps>);
    }
}

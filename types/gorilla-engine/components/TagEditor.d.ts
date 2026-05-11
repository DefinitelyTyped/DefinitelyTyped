declare namespace GorillaEngine.UI {
    interface TagEditorProps extends Common, Bounds, Background, Font {
        value: any;
        tags: Tag[];
        editable: boolean;
        action: string;
        removeAction: string;
    }

    class TagEditor extends Component {
        constructor(options: Partial<TagEditorProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface TagEditor extends TagEditorProps {}
}

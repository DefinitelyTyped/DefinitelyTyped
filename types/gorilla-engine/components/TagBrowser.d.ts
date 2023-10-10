declare namespace GorillaEngine.UI {
    interface TagBrowserProps extends Common, Bounds, Background, Font {
        value: any;
        tags: Tag[];
    }

    class TagBrowser extends Component {
        constructor(options: Partial<TagBrowserProps>);
    }
    interface TagBrowser extends TagBrowserProps {}
}

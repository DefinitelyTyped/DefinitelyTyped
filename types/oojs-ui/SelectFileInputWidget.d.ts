declare namespace OO.ui {
    /**
     * SelectFileInputWidgets allow for selecting files, using &lt;input type="file"&gt;. These
     * widgets can be configured with {@link OO.ui.mixin.IconElement icons}, {@link OO.ui.mixin.IndicatorElement indicators}
     * and {@link OO.ui.mixin.TitledElement titles}.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets)
     * for more information and examples.
     *
     * SelectFileInputWidgets must be used in HTML forms, as getValue only returns the filename.
     *
     *     // A file select input widget.
     *     var selectFile = new OO.ui.SelectFileInputWidget();
     *     $( document.body ).append( selectFile.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.SelectFileInputWidget
     */
    interface SelectFileInputWidget extends SelectFileInputWidget.Props, SelectFileInputWidget.Prototype {}

    namespace SelectFileInputWidget {
        interface ConfigOptions extends InputWidget.ConfigOptions, mixin.RequiredElement.ConfigOptions {
            /** MIME types to accept. null accepts all types. */
            accept?: string[] | null;
            /** Allow multiple files to be selected. */
            multiple?: boolean;
            /** Text to display when no file is selected. */
            placeholder?: string;
            /** Config to pass to select file button. */
            button?: ButtonWidget.ConfigOptions;
            /** Icon to show next to file info */
            icon?: Icon | Record<string, Icon> | null;
        }

        type Static = InputWidget.Static;

        interface Props extends InputWidget.Props, mixin.RequiredElement.Props {}

        interface Prototype extends InputWidget.Prototype, mixin.RequiredElement.Prototype {
            /**
             * Get the filename of the currently selected file.
             *
             * @return Filename
             */
            getFilename(): string;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): SelectFileInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const SelectFileInputWidget: SelectFileInputWidget.Constructor;
}

declare namespace OO.ui {
    /**
     * A window instance represents the life cycle for one single opening of a window
     * until its closing.
     *
     * While OO.ui.WindowManager will reuse OO.ui.Window objects, each time a window is
     * opened, a new lifecycle starts.
     *
     * For more information, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows).
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.WindowInstance
     */
    interface WindowInstance extends WindowInstance.Props, WindowInstance.Prototype {}

    namespace WindowInstance {
        interface Props {
            opening: JQuery.Promise<void>;
            opened: JQuery.Promise<void>;
            closing: JQuery.Promise<void>;
            closed: JQuery.Promise<void>;
        }

        interface Prototype {
            /**
             * Check if window is opening.
             *
             * @return Window is opening
             */
            isOpening(): boolean;

            /**
             * Check if window is opened.
             *
             * @return Window is opened
             */
            isOpened(): boolean;

            /**
             * Check if window is closing.
             *
             * @return Window is closing
             */
            isClosing(): boolean;

            /**
             * Check if window is closed.
             *
             * @return Window is closed
             */
            isClosed(): boolean;
        }

        interface Constructor {
            new(): WindowInstance;
            prototype: Prototype;
            static: {};
        }
    }

    const WindowInstance: WindowInstance.Constructor;
}

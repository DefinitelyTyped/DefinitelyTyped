declare namespace OO.ui {
    /**
     * MenuLayouts combine a menu and a content {@link OO.ui.PanelLayout panel}. The menu is
     * positioned relative to the content (after, before, top, or bottom) and its size is customized
     * with the menuSize config. The content area will fill all remaining space.
     *
     *     var menuLayout,
     *         menuPanel = new OO.ui.PanelLayout( {
     *             padded: true,
     *             expanded: true,
     *             scrollable: true
     *         } ),
     *         contentPanel = new OO.ui.PanelLayout( {
     *             padded: true,
     *             expanded: true,
     *             scrollable: true
     *         } ),
     *         select = new OO.ui.SelectWidget( {
     *             items: [
     *                 new OO.ui.OptionWidget( {
     *                     data: 'before',
     *                     label: 'Before'
     *                 } ),
     *                 new OO.ui.OptionWidget( {
     *                     data: 'after',
     *                     label: 'After'
     *                 } ),
     *                 new OO.ui.OptionWidget( {
     *                     data: 'top',
     *                     label: 'Top'
     *                 } ),
     *                 new OO.ui.OptionWidget( {
     *                     data: 'bottom',
     *                     label: 'Bottom'
     *                 } )
     *              ]
     *         } ).on( 'select', function ( item ) {
     *            menuLayout.setMenuPosition( item.getData() );
     *         } );
     *
     *     menuLayout = new OO.ui.MenuLayout( {
     *         position: 'top',
     *         menuPanel: menuPanel,
     *         contentPanel: contentPanel
     *     } );
     *     menuLayout.$menu.append(
     *         menuPanel.$element.append( '<b>Menu panel</b>', select.$element )
     *     );
     *     menuLayout.$content.append(
     *         contentPanel.$element.append(
     *             '<b>Content panel</b>',
     *             '<p>Note that the menu is positioned relative to the content panel: ' +
     *             'top, bottom, after, before.</p>'
     *          )
     *     );
     *     $( document.body ).append( menuLayout.$element );
     *
     * If menu size needs to be overridden, it can be accomplished using CSS similar to the snippet
     * below. MenuLayout's CSS will override the appropriate values with 'auto' or '0' to display
     * the menu correctly. If `menuPosition` is known beforehand, CSS rules corresponding to other
     * positions may be omitted.
     * ```css
     * .oo-ui-menuLayout-menu {
     *     width: 200px;
     *     height: 200px;
     * }
     *
     * .oo-ui-menuLayout-content {
     *     top: 200px;
     *     left: 200px;
     *     right: 200px;
     *     bottom: 200px;
     * }
     * ```
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MenuLayout
     */
    interface MenuLayout extends MenuLayout.Props, MenuLayout.Prototype {}

    namespace MenuLayout {
        type Position = "top" | "after" | "bottom" | "before";

        interface ConfigOptions extends Layout.ConfigOptions {
            /** Menu panel */
            menuPanel?: PanelLayout;
            /** Content panel */
            contentPanel?: PanelLayout;
            /** Expand the layout to fill the entire parent element. */
            expanded?: boolean;
            /** Show menu */
            showMenu?: boolean;
            /** Position of menu: `top`, `after`, `bottom` or `before` */
            menuPosition?: Position;
        }

        type Static = Layout.Static;

        interface Props extends Layout.Props {
            /** Menu DOM node */
            $menu: JQuery;
            /** Content DOM node */
            $content: JQuery;
        }

        interface Prototype extends Layout.Prototype {
            /**
             * Toggle menu.
             *
             * @param showMenu Show menu, omit to toggle
             * @return The layout, for chaining
             */
            toggleMenu(showMenu?: boolean): this;

            /**
             * Check if menu is visible
             *
             * @return Menu is visible
             */
            isMenuVisible(): boolean;

            /**
             * Set menu position.
             *
             * @param position Position of menu, either `top`, `after`, `bottom` or `before`
             * @return The layout, for chaining
             */
            setMenuPosition(position: Position): this;

            /**
             * Get menu position.
             *
             * @return Menu position
             */
            getMenuPosition(): Position;

            /**
             * Set the menu panel.
             *
             * @param menuPanel Menu panel
             */
            setMenuPanel(menuPanel: PanelLayout): void;

            /**
             * Set the content panel.
             *
             * @param contentPanel Content panel
             */
            setContentPanel(contentPanel: PanelLayout): void;

            /**
             * Clear the menu panel.
             */
            clearMenuPanel(): void;

            /**
             * Clear the content panel.
             */
            clearContentPanel(): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): MenuLayout;
            prototype: Prototype;
            static: Static;
            super: Layout.Constructor;
            /** @deprecated Use `super` instead */
            parent: Layout.Constructor;
        }
    }

    const MenuLayout: MenuLayout.Constructor;
}

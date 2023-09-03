declare namespace OO.ui {
    /**
     * BookletLayouts contain {@link OO.ui.PageLayout page layouts} as well as
     * an {@link OO.ui.OutlineSelectWidget outline} that allows users to easily navigate
     * through the pages and select which one to display. By default, only one page is
     * displayed at a time and the outline is hidden. When a user navigates to a new page,
     * the booklet layout automatically focuses on the first focusable element, unless the
     * default setting is changed. Optionally, booklets can be configured to show
     * {@link OO.ui.OutlineControlsWidget controls} for adding, moving, and removing items.
     *
     *     // Example of a BookletLayout that contains two PageLayouts.
     *
     *     function PageOneLayout( name, config ) {
     *         PageOneLayout.super.call( this, name, config );
     *         this.$element.append( '<p>First page</p><p>(This booklet has an outline, displayed on ' +
     *         'the left)</p>' );
     *     }
     *     OO.inheritClass( PageOneLayout, OO.ui.PageLayout );
     *     PageOneLayout.prototype.setupOutlineItem = function () {
     *         this.outlineItem.setLabel( 'Page One' );
     *     };
     *
     *     function PageTwoLayout( name, config ) {
     *         PageTwoLayout.super.call( this, name, config );
     *         this.$element.append( '<p>Second page</p>' );
     *     }
     *     OO.inheritClass( PageTwoLayout, OO.ui.PageLayout );
     *     PageTwoLayout.prototype.setupOutlineItem = function () {
     *         this.outlineItem.setLabel( 'Page Two' );
     *     };
     *
     *     var page1 = new PageOneLayout( 'one' ),
     *         page2 = new PageTwoLayout( 'two' );
     *
     *     var booklet = new OO.ui.BookletLayout( {
     *         outlined: true
     *     } );
     *
     *     booklet.addPages( [ page1, page2 ] );
     *     $( document.body ).append( booklet.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.BookletLayout
     */
    interface BookletLayout extends BookletLayout.Props, BookletLayout.Prototype {}

    namespace BookletLayout {
        interface EventMap {
            set: [page: PageLayout];
            add: [pages: PageLayout[], index: number];
            remove: [pages: PageLayout[]];
        }

        interface ConfigOptions extends MenuLayout.ConfigOptions {
            /** Show all pages, one after another */
            continuous?: boolean;
            /** Focus on the first focusable element when a new page is displayed. Disabled on mobile. */
            autoFocus?: boolean;
            /** Show the outline. The outline is used to navigate through the pages of the booklet. */
            outlined?: boolean;
            /** Show controls for adding, removing and reordering pages. */
            editable?: boolean;
        }

        type Static = MenuLayout.Static;

        type Props = MenuLayout.Props;

        interface Prototype extends MenuLayout.Prototype {
            /**
             * Focus the first input in the current page.
             *
             * If no page is selected, the first selectable page will be selected.
             * If the focus is already in an element on the current page, nothing will happen.
             *
             * @param itemIndex A specific item to focus on
             */
            focus(itemIndex?: number): void;

            /**
             * Find the first focusable input in the booklet layout and focus
             * on it.
             */
            focusFirstFocusable(): void;

            /**
             * Check if booklet has an outline.
             *
             * @return Booklet has an outline
             */
            isOutlined(): boolean;

            /**
             * Check if booklet has editing controls.
             *
             * @return Booklet is editable
             */
            isEditable(): boolean;

            /**
             * Check if booklet has a visible outline.
             *
             * @return Outline is visible
             */
            isOutlineVisible(): boolean;

            /**
             * Hide or show the outline.
             *
             * @param show Show outline, omit to invert current state
             * @return The layout, for chaining
             */
            toggleOutline(show?: boolean): this;

            /**
             * Find the page closest to the specified page.
             *
             * @param page Page to use as a reference point
             * @return Page closest to the specified page
             */
            findClosestPage(page: PageLayout): PageLayout | null;

            /**
             * Get the outline widget.
             *
             * If the booklet is not outlined, the method will return `null`.
             *
             * @return Outline widget, or null if the booklet is not outlined
             */
            getOutline(): OutlineSelectWidget | null;

            /**
             * Get the outline controls widget.
             *
             * If the outline is not editable, the method will return `null`.
             *
             * @return The outline controls widget.
             */
            getOutlineControls(): OutlineControlsWidget | null;

            /**
             * Get a page by its symbolic name.
             *
             * @param name Symbolic name of page
             * @return Page, if found
             */
            getPage(name: string): PageLayout | undefined;

            /**
             * Get the current page.
             *
             * @return Current page, if found
             */
            getCurrentPage(): PageLayout | undefined;

            /**
             * Get the symbolic name of the current page.
             *
             * @return Symbolic name of the current page
             */
            getCurrentPageName(): string | null;

            /**
             * Add pages to the booklet layout
             *
             * When pages are added with the same names as existing pages, the existing pages will be
             * automatically removed before the new pages are added.
             *
             * @param pages Pages to add
             * @param index Index of the insertion point
             * @return The layout, for chaining
             */
            addPages(pages: PageLayout[], index: number): this;

            /**
             * Remove the specified pages from the booklet layout.
             *
             * To remove all pages from the booklet, you may wish to use the #clearPages method instead.
             *
             * @param pages An array of pages to remove
             * @return The layout, for chaining
             */
            removePages(pages: PageLayout[]): this;

            /**
             * Clear all pages from the booklet layout.
             *
             * To remove only a subset of pages from the booklet, use the #removePages method.
             *
             * @return The layout, for chaining
             */
            clearPages(): this;

            /**
             * Set the current page by symbolic name.
             *
             * @param name Symbolic name of page
             */
            setPage(name: string): void;

            /**
             * Select the first selectable page.
             *
             * @return The layout, for chaining
             */
            selectFirstSelectablePage(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): BookletLayout;
            prototype: Prototype;
            static: Static;
            super: MenuLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: MenuLayout.Constructor;
        }
    }

    const BookletLayout: BookletLayout.Constructor;
}

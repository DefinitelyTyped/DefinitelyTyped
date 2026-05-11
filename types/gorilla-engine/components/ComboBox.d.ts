declare namespace GorillaEngine.UI {
    interface ComboBoxPadding {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
    interface ComboBoxPopupStyles extends Font {
        /**
         * The background color of the dropdown popup itself.
         */
        backgroundColor: string;
        /**
         * The text color for standard, unselected items within the popup list.
         */
        itemTextColor: string;
        /**
         * The text color for the **single selected item** in the popup list.
         */
        itemSelectedTextColor: string;
        /**
         * The background color for the **single selected item** in the popup list.
         */
        itemSelectedBackgroundColor: string;
        /**
         * The text color for items that are currently highlighted (e.g., by mouse hover or keyboard navigation)
         * but not yet selected.
         */
        itemHighlightedTextColor: string;
        /**
         * The background color for items that are currently highlighted (e.g., by mouse hover or keyboard navigation)
         * but not yet selected.
         */
        itemHighlightedBackgroundColor: string;
        /**
         * Specifies the alignment of the checkmark icon, indicating the selected item, within the popup.
         * It can be positioned either to the `left` or `right` of the item's text.
         */
        checkmarkFloat: "left" | "right";
        /**
         * The radius for the corners of the popup, providing rounded edges.
         * A value of `0` results in sharp, square corners.
         */
        cornerRadius: number;
        /**
         * Defines the padding space around the items within the popup.
         * This can be a uniform `number` (applying to all sides) or a `ComboBoxPadding` object
         * for more granular control over top, right, bottom, and left padding.
         */
        padding: ComboBoxPadding | number; // Assuming ComboBoxPadding is defined elsewhere as { top, right, bottom, left }
        /**
         * Defines the padding specifically for the checkmark icon relative to its containing item.
         * This allows for fine-tuning the spacing around the checkmark.
         */
        checkmarkPadding: ComboBoxPadding; // Assuming ComboBoxPadding is defined elsewhere as { top, right, bottom, left }
    }

    interface ComboBoxProps extends Common, Bounds, Background, Clickable, Font, Highlight {
        /**
         * The value of the combobox, which corresponds to the index of the initially selected item in the `items` array.
         */
        value: number;
        /**
         * List of options
         */
        items: string[];
        /**
         * The character that signifies heirarchy within the items array, will open a submenu at the position of the character.
         */
        levelSeperator: string;
        /**
         * If `true`, the text within the combobox will stretch to fit the available width.
         */
        stretchText: boolean;
        /**
         * If `true`, the combobox will allow scrolling through items using the mouse wheel.
         */
        scrollWheelEnabled: boolean;
        /**
         * If true, the combobox will apply a specific style to submenus, which may include different background colors, fonts, or other visual elements.
         */
        styleSubmenu: boolean;

        /**
         * The background color of the combobox trigger in its clicked state (i.e., with its popup open).
         */
        backgroundColorClicked: string;
        /**
         * The background color of the combobox trigger on mouse hover.
         */
        backgroundColorHover: string;

        /** TODO:: THIS has to be a callback function rather than a string for a view model
         * The action to perform when the selected item is selected again from the combobox.
         */
        itemReselectedAction: string;
        padding: Partial<ComboBoxPadding> | number;
        images: Partial<{
            arrowIcon: string;
            arrowIconPressed: string;
            popupSubmenuSelectionImage: string;
            popupSubmenuSelectionHighlightedImage: string;
            popupCheckmarkImage: string;
            popupCheckmarkHighlightedImage: string;
            subPopupSubmenuSelectionImage: string;
            subPopupSubmenuSelectionHighlightedImage: string;
            subPopupCheckmarkImage: string;
            subPopupCheckmarkHighlightedImage: string;
        }>;
        popup: Partial<
            ComboBoxPopupStyles & {
                separatorColo?: string;
                separatorHeight: number;
                separatorPadding: number;
            }
        >;
        subPopup: Partial<ComboBoxPopupStyles>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface ComboBox extends ComboBoxProps {}
    class ComboBox extends Component {
        onChange?: (value: number) => void;
        constructor(options: Partial<ComboBoxProps>);
    }
}

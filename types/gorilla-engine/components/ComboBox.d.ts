declare namespace GorillaEngine.UI {
    interface ComboBoxPadding {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
    interface ComboBoxPopupStyles extends Font {
        backgroundColor: string;
        itemTextColor: string;
        itemSelectedTextColor: string;
        itemSelectedBackgroundColor: string;
        itemHighlightedTextColor: string;
        itemHighlightedBackgroundColor: string;
        checkmarkFloat: "left" | "right";
        cornerRadius: number;
        padding: ComboBoxPadding | number;
        checkmarkPadding: ComboBoxPadding;
    }

    interface ComboBoxProps extends Common, Bounds, Background, Clickable, Font, Highlight {
        value: number;
        /**
         * List of options
         */
        items: string[];
        /**
         * The character that signifies heirarchy within the items array
         */
        levelSeperator: string;
        stretchText: boolean;
        scrollWheelEnabled: boolean;
        styleSubmenu: boolean;
        backgroundColorClicked: string;
        backgroundColorHover: string;
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

    interface ComboBox extends ComboBoxProps {}
    class ComboBox extends Component {
        onChange?: (value: number) => void;
        constructor(options: Partial<ComboBoxProps>);
    }
}

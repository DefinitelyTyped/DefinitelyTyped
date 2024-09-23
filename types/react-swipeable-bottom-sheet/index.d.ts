import React = require("react");
import { SwipeableViewsProps } from "react-swipeable-views";

interface SwipeableBottomSheetProps {
    /**
     * The height (in px) of the sheet when closed.
     *
     * @default 0
     */
    overflowHeight?: number;

    /**
     * Use this property to enable controlled mode.
     *
     * If true, it will open the sheet.
     */
    open?: boolean;

    /**
     * If true, the sheet is open at component mount.
     *
     * @default false
     */
    defaultOpen?: boolean;

    /**
     * The callback that fires after sheet opens or closes.
     */
    onChange?: (isOpen: boolean) => void;

    /**
     * The callback that fires after opening or closing animation.
     */
    onTransitionEnd?: () => void;

    /**
     * If true, the sheet takes the full height of the window when open.
     *
     * @default false
     */
    fullScreen?: boolean;

    /**
     * The top margin applied to the top of the sheet when open.
     *
     * Use this prop to prevent navbar overflow.
     *
     * @default 0
     */
    marginTop?: number;

    /**
     * If true, a box shadow is displayed at sheet bottom when closed.
     *
     * This is used to show that content is hidden below.
     *
     * @default true
     */
    shadowTip?: boolean;

    /**
     * If true, a box shadow is displayed at sheet top border.
     *
     * @default true
     */
    topShadow?: boolean;

    /**
     * If true, an overlay is displayed behind sheet when open.
     *
     * A click on the overlay closes the sheet.
     *
     * @default true
     */
    overlay?: boolean;

    /**
     * If true, the content is scrolled to the top when sheet closes.
     *
     * @default true
     */
    scrollTopAtClose?: boolean;

    /**
     * Props passed to SwipeableViews component (see documentation).
     *
     * @link https://react-swipeable-views.com/api/api/
     */
    swipeableViewsProps?: SwipeableViewsProps;

    /**
     * Style applied on the root (non-swiped) component.
     */
    style?: React.CSSProperties;

    /**
     * Style applied on the body of the bottom sheet.
     */
    bodyStyle?: React.CSSProperties;

    /**
     * Style applied on the overlay.
     */
    overlayStyle?: React.CSSProperties;
}

/**
 * A swipeable material's bottom sheet implementation, that uses react-swipeable-views.
 *
 * This can be used to reproduce Material Design's Bottom Sheet guidelines
 */
declare class SwipeableBottomSheet extends React.Component<React.PropsWithChildren<SwipeableBottomSheetProps>> {
    render(): React.JSX.Element;
}

export = SwipeableBottomSheet;

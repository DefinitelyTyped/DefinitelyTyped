import * as React from "react";
import {
    AnyStyledComponent,
    CSSObject,
    InterpolationFunction,
    StyledComponent,
    ThemedStyledFunctionBase,
} from "styled-components";

declare namespace StyledReactModel {
    const BaseModalBackground: StyledComponent<"div", any>;

    interface ModalProps {
        children?: React.ReactNode | undefined;
        /**
         * A boolean that indicates whether the modal is to be open or closed.
         */
        isOpen: boolean;
        /**
         * When true, scrolling in the document body is not disabled when the modal is open.
         */
        allowScroll?: boolean | undefined;
        /**
         * A props object that is spread over the `backgroundComponent` when included.
         */
        backgroundProps?: object | undefined;
        /**
         * A function that is called after the modal opens.
         */
        afterOpen?: (() => void) | undefined;
        /**
         * A function that is called after the modal closes.
         */
        afterClose?: (() => void) | undefined;
        /**
         * A function that is called before the modal opens.
         * If this function returns a promise, then the modal is opened after the promise is resolved.
         */
        beforeOpen?: (() => void | Promise<void>) | undefined;
        /**
         * A function that is called before the modal closes.
         * If this function returns a promise, then the modal is closed after the promise is resolved.
         */
        beforeClose?: (() => void | Promise<void>) | undefined;
        /**
         * A function that is called when the escape key is pressed while the modal is open.
         */
        onEscapeKeydown?: ((event: React.KeyboardEvent) => void) | undefined;
        /**
         * A function that is called when the modal background is clicked.
         */
        onBackgroundClick?: ((event: React.MouseEvent) => void) | undefined;
    }

    interface ModalProviderProps {
        children: React.ReactNode;
        /**
         * A styled component to be used as the default modal background.
         * If not provided, library defaults will be used.
         *
         * @default BaseModalBackground
         */
        backgroundComponent?: AnyStyledComponent | undefined;
    }

    class ModalProvider extends React.Component<ModalProviderProps> {}
}

declare class StyledReactModel extends React.Component<StyledReactModel.ModalProps> {
    /**
     * Factory method that accepts a tagged template literal and returns a `<Modal>` component
     * with styles included.
     */
    static styled: (
        ...args: Parameters<ThemedStyledFunctionBase<"div", any>>
    ) => typeof StyledReactModel;
}

export = StyledReactModel;

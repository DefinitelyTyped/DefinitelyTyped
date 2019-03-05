// Type definitions for react-image-magnify 2.7
// Project: https://github.com/ethanselzer/react-image-magnify
// Definitions by: Muhammet Öztürk <https://github.com/hlthi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export default class ReactImageMagnify extends React.Component<ReactImageMagnifyProps, any> {
    /*
    public static defaultProps = {
        // Optional Interaction Props defaults
        fadeDurationInMs: 300,
        hoverDelayInMs: 250,
        hoverOffDelayInMs: 150,
        isActivatedOnTouch: false,
        pressDuration: 500,
        pressMoveThreshold: 5,

        // Optional Behavioral Props defaults
        enlargedImagePosition: 'beside',
        enlargedImageContainerDimensions: { width: '100%', height: '100%' },
        isEnlargedImagePortalEnabledForTouch: false,
        shouldHideHintAfterFirstActivation: true,
        isHintEnabled: false,
        shouldUsePositiveSpaceLens: false,
    };
    */
}

export interface ReactImageMagnifyProps {
    // Required Props
    smallImage: SmallImageNotFluid | SmallImageFluid;
    largeImage: LargeImage;

    // Optional Styling Props
    className?: string;
    style?: object;
    imageClassName?: string;
    imageStyle?: object;
    lensStyle?: object;
    enlargedImageContainerClassName?: string;
    enlargedImageContainerStyle?: object;
    enlargedImageStyle?: object;

    // Optional Interaction Props
    fadeDurationInMs?: number;
    hoverDelayInMs?: number;
    hoverOffDelayInMs?: number;
    isActivatedOnTouch?: number;
    pressDuration?: number;
    pressMoveThreshold?: number;

    enlargedImagePosition?: 'beside' | 'over';
    enlargedImageContainerDimensions?: object;
    enlargedImagePortalId?: string;
    isEnlargedImagePortalEnabledForTouch?: boolean;
    hintComponent?: () => void;
    shouldHideHintAfterFirstActivation?: boolean;
    isHintEnabled?: boolean;
    hintTextMouse?: string;
    hintTextTouch?: string;
    shouldUsePositiveSpaceLens?: boolean;
    lensComponent?: () => void;
}

export interface Image {
    src: string;
    srcSet?: string;
    sizes?: string;
    onLoad?: () => void;
    onError?: () => void;
    alt?: string;
}

export interface SmallImageFluid extends Image {
    isFluidWidth: true;
}

export interface SmallImageNotFluid extends Image {
    isFluidWidth: false;
    width: number;
    height: number;
}

export interface LargeImage extends Image {}

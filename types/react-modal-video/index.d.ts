// Type definitions for react-modal-video 1.2
// Project: https://github.com/appleple/react-modal-video
// Definitions by: Julián Bovone <https://github.com/jbovone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as React from 'react';
import { VimeoApi, YoukuApi, YoutubeApi } from './vendors';

interface Vendor {
    /**
     * @default "youtube"
     */
    channel: string;
    videoId: string;
}
interface Youku extends Vendor {
    channel: 'youku';
    youku?: YoukuApi;
}
interface Youtube extends Vendor {
    channel: 'youtube';
    /**
     * @link https://developers.google.com/youtube/player_parameters
     */
    youtube?: YoutubeApi;
}
interface Vimeo extends Vendor {
    channel: 'vimeo';
    /**
     * @link https://developer.vimeo.com/api/oembed/videos
     */
    vimeo?: VimeoApi;
}
interface Custom {
    channel: 'custom';
    url: string;
}

export interface ClassNames {
    modalVideoEffect: string;
    modalVideo: string;
    modalVideoClose: string;
    modalVideoBody: string;
    modalVideoInner: string;
    modalVideoIframeWrap: string;
    modalVideoCloseBtn: string;
}
export interface Aria {
    openMessage: string;
    dismissBtnMessage: string;
}
export interface ModalVideoBaseProps {
    /**
     * @default false
     */
    isOpen: boolean;
    onClose?: () => void;
    /**
     * @default true
     */
    allowFullScreen: boolean;
    /**
     * @default '16:9'
     */
    ratio: `${number}:${number}`;
    /**
     * @default 300
     */
    animationSpeed: number;
    /**
     * @default
     *  {
     *       modalVideo: 'modal-video',
     *       modalVideoClose: 'modal-video-close',
     *       modalVideoBody: 'modal-video-body',
     *       modalVideoInner: 'modal-video-inner',
     *       modalVideoIframeWrap: 'modal-video-movie-wrap',
     *       modalVideoCloseBtn: 'modal-video-close-btn'
     *   }
     */
    classNames: ClassNames;
    /**
     * @default
     * {
     *      openMessage: 'You just opened the modal video';
     *       dismissBtnMessage: 'Close the modal by clicking here';
     *  }
     */
    aria: Aria;
}

export type ModalVideoProps = ModalVideoBaseProps & (Youtube | Vimeo | Youku | Custom);

declare class ModalVideo extends React.Component<ModalVideoProps> {
    static defaultProps: {
        channel: 'youtube';
        isOpen: false;
        classNames: {
            modalVideoEffect: 'modal-video-effect';
            modalVideo: 'modal-video';
            modalVideoClose: 'modal-video-close';
            modalVideoBody: 'modal-video-body';
            modalVideoInner: 'modal-video-inner';
            modalVideoIframeWrap: 'modal-video-movie-wrap';
            modalVideoCloseBtn: 'modal-video-close-btn';
        };
        animationSpeed: 300;
        allowFullScreen: true;
        aria: {
            openMessage: 'You just opened the modal video';
            dismissBtnMessage: 'Close the modal by clicking here';
        };
        ratio: '16:9';
    };
}
export { VimeoApi, YoukuApi, YoutubeApi } from './vendors';
export default ModalVideo;

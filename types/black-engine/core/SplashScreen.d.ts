export class SplashScreen extends MessageDispatcher {
    constructor(duration?: number);
    private mDuration;
    private mSvgLogo;
    private mSvgText;
    show(): void;
    calculateAspectRatioFit(
        srcWidth: any,
        srcHeight: any,
        maxWidth: any,
        maxHeight: any,
    ): {
        width: number;
        height: number;
    };
}
import { MessageDispatcher } from '../messages/MessageDispatcher';

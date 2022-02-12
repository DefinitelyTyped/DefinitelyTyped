import { FC } from 'react';

export interface AnimatedProgressProps {
    /* Integer - From 0 to 100 (Default - 0).
     *  Chooses the point where the progress should animate to,
     *  based on the progress bar width.
     */
    progress?: number;
    /** (Default - 1100) */
    progressDuration?: number;
    /* Integer (Default - 2)
     *  Sets the height of the bar.
     */
    height?: number;
    /* (Default - none)
     *  Sets the color of the progress bar.
     */
    backgroundColor?: string;
    /* (Default - #A6A6A6).
     *  Sets the color of the progress bar track.
     */
    trackColor?: string;
    /* (Default - false)
     *  Sets the bar to animate constantly as a loading progress.
     */
    indeterminate?: boolean;
    /** (Default - 1100) */
    indeterminateDuration?: number;
    /* (Default - true)
     *  Chooses wheter to animate the progress or not
     */
    animated?: boolean;
    onCompletion?: () => any;
}

export const AnimatedProgress: FC<AnimatedProgressProps>;

export default AnimatedProgress;

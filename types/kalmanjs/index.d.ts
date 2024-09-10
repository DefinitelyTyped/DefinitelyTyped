// Type definitions for kalmanjs 1.1.0
// Project: https://github.com/wouterbulten/kalmanjs

declare namespace KalmanFilter {
    interface Options {
        /**
         * Process noise
         */
        R?: number;

        /**
         * Measurement noise
         */
        Q?: number;

        /**
         * State vector
         */
        A?: number;

        /**
         * Control vector
         */
        B?: number;

        /**
         * Measurement vector
         */
        C?: number;
    }
}

declare class KalmanFilter {
    /**
     * Create 1-dimensional kalman filter
     * @param  {Number} options.R Process noise
     * @param  {Number} options.Q Measurement noise
     * @param  {Number} options.A State vector
     * @param  {Number} options.B Control vector
     * @param  {Number} options.C Measurement vector
     * @return {KalmanFilter}
     */
    constructor(options?: KalmanFilter.Options);

    /**
     * Filter a new value
     * @param  {Number} z Measurement
     * @param  {Number} u Control
     * @return {Number}
     */
    filter(z: number, u?: number): number;

    /**
     * Predict next value
     * @param  {Number} [u] Control
     * @return {Number}
     */
    predict(u?: number): number;

    /**
     * Return uncertainty of filter
     * @return {Number}
     */
    uncertainty(): number;

    /**
     * Return the last filtered measurement
     * @return {Number}
     */
    lastMeasurement(): number;

    /**
     * Set measurement noise Q
     * @param {Number} noise
     */
    setMeasurementNoise(noise: number): void;

    /**
     * Set the process noise R
     * @param {Number} noise
     */
    setProcessNoise(noise: number): void;
}

export = KalmanFilter;

export as namespace KalmanFilter;

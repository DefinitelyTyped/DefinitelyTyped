/**
 * Ember.Location returns an instance of the correct implementation of
 * the `location` API.
 */
declare const Location: {
    /**
     * This is deprecated in favor of using the container to lookup the location
     * implementation as desired.
     * @deprecated Use the container to lookup the location implementation that you need.
     */
    create(options?: {}): any;
};
export default Location;

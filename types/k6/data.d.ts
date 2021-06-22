/**
 * Given a name and a function that returns an array, the SharedArray constructor returns the same array but sharing the array memory between VUs.
 * https://k6.io/docs/javascript-api/k6-data/sharedarray/
 */
export const SharedArray: {
    /**
     * Given a name and a function that returns an array, the SharedArray constructor returns the same array but sharing the array memory between VUs.
     * https://k6.io/docs/javascript-api/k6-data/sharedarray/
     */
    new(name: string, callback: () => []): [];
};

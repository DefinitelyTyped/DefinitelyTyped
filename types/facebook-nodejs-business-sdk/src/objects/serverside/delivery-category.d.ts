/**
 * Type of delivery for a purchase event.
 */
declare const _default: Readonly<{
    /**
     * Customer needs to enter the store to get the purchased product.
     */
    IN_STORE: "in_store";
    /**
     * Customer picks up their order by driving to a store and waiting inside their vehicle.
     */
    CURBSIDE: "curbside";
    /**
     * Purchase is delivered to the customer's home.
     */
    HOME_DELIVERY: "home_delivery";
}>;
export default _default;

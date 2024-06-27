/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Type of delivery for a purchase event.
 */

export default Object.freeze({

  /**
  * Customer needs to enter the store to get the purchased product.
  */
  IN_STORE : 'in_store',

  /**
  * Customer picks up their order by driving to a store and waiting inside their vehicle.
  */
  CURBSIDE : 'curbside',

  /**
  * Purchase is delivered to the customer's home.
  */
  HOME_DELIVERY : 'home_delivery',
});

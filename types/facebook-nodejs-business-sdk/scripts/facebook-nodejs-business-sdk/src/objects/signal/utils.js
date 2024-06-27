/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Utils contains the Utility modules used for sending Signal Events
 */

export default class Utils {

    /**
     * construct set method return
     * @param any server_return
     * @param any bdapi_return
     * @return {Object} combined server field and business data field return
     */
    static constructResponse(server_return: any, bdapi_return: any): Object {
        return {
            'conversion_api': server_return,
            'business_data_api': bdapi_return,
        }
    }

}
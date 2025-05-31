/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

function createAd(): google.ima.Ad {
    throw new Error("Cannot create");
}

const ad = createAd();

// $ExpectType string
const contentType = ad.getContentType();

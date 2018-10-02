/*
 * Copyright (c) Highsoft AS. All rights reserved.
 */

import * as Highcharts from "highcharts";

/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
declare function factory(highcharts: typeof Highcharts): void;

declare module "highcharts" {}

export = factory;
export as namespace VectorFactory;

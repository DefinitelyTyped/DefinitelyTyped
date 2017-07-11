/*
 * Copyright(c) 2017 Microsoft Corporation. All rights reserved. 
 * 
 * This code is licensed under the MIT License (MIT). 
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do 
 * so, subject to the following conditions: 
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software. 
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE. 
*/

/// <reference path="../Microsoft.Maps.d.ts"/>

/**
 * Adds a traffic incident and flow data to the map.
 * @requires The Microsoft.Maps.Traffic module.
 */
declare module Microsoft.Maps.Traffic {
    /** Options that can be customized in the Traffic manager. */
    export interface ITrafficOptions {
        /** Displays the traffic flow layer. */
        flowVisible?: boolean;

        /** Displays all traffic incidents. */
        incidentsVisible?: boolean;

        /** Displays the traffic legend. */
        legendVisible?: boolean;

        /**
        * Sets the opacity of the traffic flow tile layer. Must be a number between 0 and 1. The default is 1 unless the map
        * mode is set to lite, in which case the default is set to 0.7.
        */
        opacity?: number;
    }

    /**
     * The TrafficManager class provides the ability to show traffic flow and incident data on top of the map. When creating an
     * instance of the TrafficManager class the map must be passed as an argument to the constructor.
     * @requires The Microsoft.Maps.Traffic module.
     */
    export class TrafficManager {
        /**
        * @constructor
        * @requires The Microsoft.Maps.Traffic module.
        * @param map A map instnce to attach the traffic manager to.
        */
        constructor(map: Map);

        /** Hides all traffic data. */
        public hide(): void;

        /** Hides the traffic flow layer. */
        public hideFlow(): void;

        /** Hides all traffic incidents. */
        public hideIncidents(): void;

        /** Hides the traffic legend. */
        public hideLegend(): void;

        /**
        * Sets the options for the traffic manager.
        * @param options The options for the traffic manager.
        */
        public setOptions(options: ITrafficOptions): void;

        /** Displays all traffic data. */
        public show(): void;

        /** Displays the traffic flow layer. */
        public showFlow(): void;

        /** Displays all traffic incidents. */
        public showIncidents(): void;

        /** Displays the traffic legend. */
        public showLegend(): void;

    }
}
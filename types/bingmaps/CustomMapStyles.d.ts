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

/*
* The following are TypeScript definitions for the custom map styles JSON object which can be used witht he Bing Maps V8 SDK.
*/

declare module Microsoft.Maps {

    /** The styles options that can be applied to map elements. */
    export interface IMapElementStyle {
        /**
        * Hex color used for filling polygons, the background of point icons, and for the center of lines if they have split.
        */
        fillColor?: string;

        /**
        * The hex color of a map label.
        */
        labelColor?: string;

        /**
        * The outline hex color of a map label.
        */
        labelOutlineColor?: string;

        /**
        * Species if a map label type is visible or not.
        */
        labelVisible?: boolean;

        /**
        * Hex color used for the outline around polygons, the outline around point icons, and the color of lines.
        */
        strokeColor?: string;

        /**
        * Specifies if the map element is visible or not.
        */
        visible?: boolean;
    }

    /** The style options that can be appliction to bordered map elements. */
    export interface IBorderedMapElementStyle extends IMapElementStyle {
        /**
        * Secondary/casing line hex color of the border of a filled polygon.
        */
        borderOutlineColor?: string;

        /**
        * Primary line hex color of the border of a filled polygon.
        */
        borderStrokeColor?: string;

        /**
        * Specifies if a border is visible or not.
        */
        borderVisible?: boolean;
    }

    /** Global style settings */
    export interface ISettingsStyle {
        /** A hex color value that all land is first flushed to before things are drawn on it. */
        landColor?: string;
		
		/** Specifies whether or not to draw elevation shading on the map. */
		shadedReliefVisible?: boolean;
    }

    /** Map Elements which can be styled. */
    export interface IMapElements {

        /** Admin1, state, province, etc. */
        adminDistrict?: IBorderedMapElementStyle;

        /** Icon representing the capital of a state/province. */
        adminDistrictCapital?: IMapElementStyle;

        /** Area of land encompassing an airport. */
        airport?: IMapElementStyle;

        /** Area of land use, not to be confused with Structure */
        area?: IMapElementStyle;

        /** An arterial road is a high-capacity urban road. Its primary function is to deliver traffic from collector roads to freeways or expressways, and between urban centers efficiently. */
        arterialRoad?: IMapElementStyle;

        /** A structure such as a house, store, factory. */
        building?: IMapElementStyle;

        /** Restaurant, hospital, school, etc. */
        business?: IMapElementStyle;

        /** Icon representing the capital populated place. */
        capital?: IMapElementStyle;

        /** Area of a cemetery */
        cemetery?: IMapElementStyle;

        /** Area of a whole continent */
        continent?: IMapElementStyle;

        /** A controlled-access highway is a type of road which has been designed for high-speed vehicular traffic, with all traffic flow and ingress/egress regulated. Also known as a highway, freeway, motorway, expressway, interstate, parkway. */
        controlledAccessHighway?: IMapElementStyle;

        /** A country or independent sovereign state. */
        countryRegion?: IBorderedMapElementStyle;

        /** Icon representing the capital of a country/region. */
        countryRegionCapital?: IMapElementStyle;

        /** Admin2, county, etc. */
        district?: IBorderedMapElementStyle;

        /** An area of land used for educational purposes such as a school campus. */
        education?: IMapElementStyle;

        /** A school or other educational building. */
        educationBuilding?: IMapElementStyle;

        /** Restaurant, café, etc. */
        foodPoint?: IMapElementStyle;

        /** Area of forest land. */
        forest?: IMapElementStyle;

        /** An area of land where the game of golf is played. */
        golfCourse?: IMapElementStyle;

        /** Lines representing ramps typically alongside ControlledAccessHighways */
        highSpeedRamp?: IMapElementStyle;

        /** A highway. */
        highway?: IMapElementStyle;

        /** An area of land reserved for Indigenous people. */
        indigenousPeoplesReserve?: IMapElementStyle;

        /** Labeling of area of an island.  */
        island?: IMapElementStyle;

        /** Major roads. */
        majorRoad?: IMapElementStyle;

        /** The base map element in which all other map elements inherit from. */
        mapElement?: IMapElementStyle;

        /** Area of land used for medical purposes. Generally, hospital campuses. */
        medical?: IMapElementStyle;

        /** A building which provides medical services. */
        medicalBuilding?: IMapElementStyle;
	
		/** A military area. */
        military?: IMapElementStyle;

        /** A natural point of interest. */
        naturalPoint?: IMapElementStyle;

        /** Area of land used for nautical purposes. */
        nautical?: IMapElementStyle;

        /** Area defined as a neighborhood. Labels only. */
        neighborhood?: IMapElementStyle;

        /** Area of any kind of park. */
        park?: IMapElementStyle;

        /** Icon representing the peak of a mountain. */
        peak?: IMapElementStyle;

        /** All point features that are rendered with an icon of some sort */
        point?: IMapElementStyle;

        /** Restaurant, hospital, school, marina, ski area, etc. */
        pointOfInterest?: IMapElementStyle;

        /** A political border. */
        political?: IBorderedMapElementStyle;

        /** Icon representing size of populated place (city, town, etc). */
        populatedPlace?: IMapElementStyle;

        /** Railway lines */
        railway?: IMapElementStyle;

        /** Line representing the connecting entrance/exit to a highway. */
        ramp?: IMapElementStyle;

        /** Area of nature reserve. */
        reserve?: IMapElementStyle;

        /** River, stream, or other passage. Note that this may be a line or polygon and may connect to non-river water bodies. */
        river?: IMapElementStyle;

        /** Lines that represent all roads */
        road?: IMapElementStyle;

        /** Icon representing the exit, typically from a controlled access highway. */
        roadExit?: IMapElementStyle;

        /** Sign representing a compact name for a road. For example, I-5. */
        //roadShield?: IMapElementStyle;

        /** Land area covered by a runway. See also Airport for the land area of the whole airport. */
        runway?: IMapElementStyle;

        /** Area generally used for beaches, but could be used for sandy areas/golf bunkers in the future. */
        sand?: IMapElementStyle;

        /** A shopping center or mall. */
        shoppingCenter?: IMapElementStyle;

		/** Area of a stadium. */
		stadium?: IMapElementStyle;
		
        /** A street. */
        street?: IMapElementStyle;

        /** Buildings and other building-like structures */
        structure?: IMapElementStyle;

        /** A toll road. */
        tollRoad?: IMapElementStyle;

        /** Walking trail, either through park or hiking trail */
        trail?: IMapElementStyle;

        /** Icon representing a bus stop, train stop, airport, etc. */
        transit?: IMapElementStyle;

        /** A transit building. */
        transitBuilding?: IMapElementStyle;

        /** Lines that are part of the transportation network (roads, trains, ferries, etc) */
        transportation?: IMapElementStyle;

        /** An unpaved street. */
        unpavedStreet?: IMapElementStyle;

        /** Forests, grassy areas, etc. */
        vegetation?: IMapElementStyle;

        /** Icon representing the peak of a volcano. */
        volcanicPeak?: IMapElementStyle;

        /** Anything that looks like water */
        water?: IMapElementStyle;

        /** Icon representing a water feature location such as a waterfall. */
        waterPoint?: IMapElementStyle;

        /** Ferry route lines */
        waterRoute?: IMapElementStyle;
    }

    /** Defines a custom map style. */
    export interface ICustomMapStyle {
        /** A list of map elements to be styled. */
        elements?: IMapElements;

        /** Global Settings. */
        settings?: ISettingsStyle;

        /** The version of the style syntax used. */
        version: string;
    }
}
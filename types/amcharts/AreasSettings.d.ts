/**
 * AreasSettings is a class which holds common settings of all MapArea objects.
 */
export default class AreasSettings {
    /**
     * Opacity of areas.
     * @default 1
     */
    alpha: number;
    /**
     * Specifies if the areas should be zoomed-in when user clicks on them, event if zoom properties are not set.
     */
    autoZoom: boolean;
    /**
     * Text which is displayed in a roll-over balloon. You can use the following tags:
     * [[title]], [[description]], [[value]] and [[percent]] [[title]]
     */
    balloonText: string;
    /**
     * Color of the areas.
     * @default "#FFCC00"
     */
    color: string;
    /**
     * Color of area with highest value.
     * Colors for areas with values less then highest will be colored with intermediate colors
     * between color and colorSolid.
     * Use colorSteps property of AmMap to change the number of intermediate colors.
     * @default "#990000"
     */
    colorSolid: string;
    /**
     * Height of a description window.
     */
    descriptionWindowHeight: number;
    /**
     * Width of a description window.
     * @default 250
     */
    descriptionWindowWidth: number;
    /**
     * X position of a description window.
     */
    descriptionWindowX: number;
    /**
     * Y position of a description window.
     */
    descriptionWindowY: number;
    /**
     * Opacity of area's outline.
     * @default 1
     */
    outlineAlpha: number;
    /**
     * Color of area's outline. #FFFFFF
     */
    outlineColor: string;
    /**
     * Thickness of area's outline. 0.5
     */
    outlineThickness: number;
    /**
     * Color of area when user rolls-over it. undefined
     */
    rollOverColor: string;
    /**
     * Color of area's outline when user rolls-over it. #CC0000
     */
    rollOverOutlineColor: string;
    /**
     * Color of area which is currently selected. #CC0000
     */
    selectedColor: string;
    /**
     * Opacity of all areas which are in the map svg file, but not listed as areas in DataSet.
     * @default 1
     */
    unlistedAreasAlpha: number;
    /**
     * Color of all areas which are in the map svg file, but not listed as areas in DataSet. #DDDDDD
     */
    unlistedAreasColor: string;
    /**
     * Opacity of all areas' outline which are in the map svg file, but not listed as areas in DataSet.
     * @default 1
     */
    unlistedAreasOutlineAlpha: number;
    /**
     * Color of all areas' outline which are in the map svg file, but not listed as areas in DataSet. #FFFFFF
     */
    unlistedAreasOutlineColor: string;
}
